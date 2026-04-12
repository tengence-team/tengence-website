#!/usr/bin/env node

import { execSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  rmSync,
  createReadStream,
  statSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createInterface } from "node:readline";
import ssh2 from "ssh2";
import "dotenv/config";

// 加载 .deploy.env
import { config } from "dotenv";
const envPath = resolve(
  import.meta.dirname,
  "..",
  `.deploy.${process.env.SITE}.env`
);
if (existsSync(envPath)) {
  config({ path: envPath });
}

// ============ 配置 ============
const SERVER_USER = process.env.DEPLOY_USER || "root";
const SERVER_HOST = process.env.DEPLOY_HOST || "";
const SERVER_PASS = process.env.DEPLOY_PASS || "";


const OUT_DIR = resolve(import.meta.dirname, "..", "out");
const TMP_DIR = join(tmpdir(), `${process.env.SITE}-deploy`);

const STATIC_REMOTE = "/var/www/static";
const SITE_REMOTE = `/var/www/${process.env.SITE}`;
// =================================

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

async function prompt(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(question, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

/** 连接 SSH */
function connectSSH(host) {
  return new Promise((resolve, reject) => {
    const conn = new ssh2.Client();
    conn.on("ready", () => resolve(conn));
    conn.on("error", reject);
    conn.connect({
      host,
      port: 22,
      username: SERVER_USER,
      password: SERVER_PASS,
    });
  });
}

/** 在远程执行命令 */
function execRemote(conn, cmd) {
  return new Promise((resolve, reject) => {
    conn.exec(cmd, (err, stream) => {
      if (err) return reject(err);
      let output = "";
      stream.on("data", (data) => {
        output += data;
        process.stdout.write(data);
      });
      stream.stderr.on("data", (data) => {
        process.stderr.write(data);
      });
      stream.on("close", (code) =>
        code === 0 ? resolve(output) : reject(new Error(`exit code: ${code}`))
      );
    });
  });
}

/** 通过 SFTP 上传文件 */
function uploadFile(conn, localPath, remotePath) {
  return new Promise((resolve, reject) => {
    conn.sftp((err, sftp) => {
      if (err) return reject(err);
      const readStream = createReadStream(localPath);
      const writeStream = sftp.createWriteStream(remotePath);
      writeStream.on("close", () => {
        sftp.end();
        resolve();
      });
      writeStream.on("error", reject);
      readStream.on("error", reject);
      readStream.pipe(writeStream);
    });
  });
}

async function main() {
  // 检查环境变量
  if (!SERVER_HOST) {
    const host = await prompt("请输入服务器地址: ");
    if (!host) {
      console.error("未提供服务器地址");
      process.exit(1);
    }
    process.env.DEPLOY_HOST = host;
  }
  const host = process.env.DEPLOY_HOST;

  if (!SERVER_PASS) {
    console.error("❌ 请设置 DEPLOY_PASS 环境变量");
    process.exit(1);
  }

  // 检查 out 目录
  if (!existsSync(OUT_DIR)) {
    console.error("❌ out 目录不存在，请先执行 npm run build");
    process.exit(1);
  }
  if (!existsSync(join(OUT_DIR, "_next"))) {
    console.error("❌ out/_next 目录不存在");
    process.exit(1);
  }

  // 创建临时目录并压缩
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(TMP_DIR, { recursive: true });

  const staticZip = join(TMP_DIR, "_next-static.tar.gz");
  const siteZip = join(TMP_DIR, "site.tar.gz");

  console.log("\n📦 正在压缩 _next 静态资源...");
  run(`tar -czf "${staticZip}" -C "${OUT_DIR}" _next`);

  console.log("📦 正在压缩站点文件（排除 _next）...");
  run(`tar -czf "${siteZip}" -C "${OUT_DIR}" --exclude='_next' .`);

  const staticSize = (statSync(staticZip).size / 1024 / 1024).toFixed(2);
  const siteSize = (statSync(siteZip).size / 1024 / 1024).toFixed(2);
  console.log(
    `\n📊 _next 静态资源: ${staticSize} MB | 站点文件: ${siteSize} MB`
  );

  // 连接服务器
  console.log(`\n🔗 连接服务器 ${SERVER_USER}@${host}...`);
  const conn = await connectSSH(host);
  console.log("✓ 已连接");

  try {
    // 部署 _next 静态资源
    console.log(`\n🚀 部署 _next 静态资源到 ${STATIC_REMOTE}...`);
    console.log("  上传中...");
    await uploadFile(conn, staticZip, "/tmp/_next-static.tar.gz");
    console.log("  解压中...");
    await execRemote(
      conn,
      `rm -rf ${STATIC_REMOTE}/_next && mkdir -p ${STATIC_REMOTE} && cd ${STATIC_REMOTE} && tar -xzf /tmp/_next-static.tar.gz && rm -f /tmp/_next-static.tar.gz`
    );

    // 部署站点文件
    console.log(`\n🚀 部署站点文件到 ${SITE_REMOTE}...`);
    console.log("  上传中...");
    await uploadFile(conn, siteZip, "/tmp/site.tar.gz");
    console.log("  解压中...");
    await execRemote(
      conn,
      `rm -rf ${SITE_REMOTE}/* && mkdir -p ${SITE_REMOTE} && cd ${SITE_REMOTE} && tar -xzf /tmp/site.tar.gz && rm -f /tmp/site.tar.gz`
    );
  } finally {
    conn.end();
  }

  // 清理临时文件
  rmSync(TMP_DIR, { recursive: true, force: true });

  console.log("\n✅ 部署完成！");
}

main().catch((err) => {
  console.error("❌ 部署失败:", err.message);
  process.exit(1);
});
