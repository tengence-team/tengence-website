# 构建阶段 - 使用 Node.js 22 Alpine 镜像
FROM docker.m.daocloud.io/library/node:22-alpine AS builder

# 全局安装 pnpm 包管理器
RUN npm install -g pnpm@10.28.2

WORKDIR /app

# 复制所有package文件和pnpm workspace配置
  COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 安装依赖（包括workspace中所有包的依赖）
RUN pnpm install --frozen-lockfile

# 复制其他源代码
COPY . .

# 构建应用
RUN pnpm run build

# 生产阶段
FROM docker.m.daocloud.io/library/nginx:stable-alpine AS runner

# 复制构建产物
COPY --from=builder /app/out /usr/share/nginx/html

# 复制nginx配置
COPY ./nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 8080

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
