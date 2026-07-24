import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import subsetFont from "subset-font";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC_FONT = path.join(root, "src/fonts/SourceHanSerifCN-SemiBold.otf");
const OUT_FONT = path.join(
  root,
  "src/fonts/SourceHanSerifCN-SemiBold.subset.woff2"
);

// 扫描 src/ 下所有 .tsx/.ts 文件，确保全站文案都被覆盖
const SCAN_ROOT = path.join(root, "src");
const CODE_EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".html", ".htm"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (CODE_EXT.has(path.extname(e.name))) files.push(p);
  }
  return files;
}

// 1) 收集全站源码中所有出现过的字符
const charSet = new Set();
const files = await walk(SCAN_ROOT);
for (const f of files) {
  const src = await readFile(f, "utf8");
  for (const ch of src) charSet.add(ch);
}

// 2) 兜底：保证 ASCII / 常见标点齐全
const FALLBACK =
  " \t\n\r0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,:;!?'\"-()@/·、。，；：！？「」『』（）《》【】\u201C\u201D\u2018\u2019—…·";
for (const ch of FALLBACK) charSet.add(ch);

const text = [...charSet].join("");
console.log(
  `[subset-font] scanned ${files.length} files, ${charSet.size} unique chars collected`
);

// 3) 执行子集化 → woff2
const input = await readFile(SRC_FONT);
const output = await subsetFont(input, text, { targetFormat: "woff2" });

await writeFile(OUT_FONT, output);
console.log(
  `[subset-font] wrote ${path.relative(root, OUT_FONT)} ` +
    `(${(output.length / 1024).toFixed(1)} KB, ` +
    `origin ${(input.length / 1024 / 1024).toFixed(1)} MB)`
);
