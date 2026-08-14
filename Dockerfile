# 构建阶段 - 使用 Node.js 22 Alpine 镜像
FROM registry.cn-shenzhen.aliyuncs.com/tengence/node:22-alpine AS builder

# 配置国内 npm 镜像源（淘宝镜像）
RUN npm config set registry https://registry.npmmirror.com

# 全局安装 pnpm 包管理器
RUN npm install -g pnpm@10.28.2

# 配置 pnpm 使用国内镜像源
RUN pnpm config set registry https://registry.npmmirror.com

WORKDIR /app

# 复制所有package文件和pnpm workspace配置
  COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 安装依赖（包括workspace中所有包的依赖）
# 使用 BuildKit 缓存挂载，pnpm 缓存在多次构建间共享
RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

# 复制其他源代码
COPY . .

# 构建应用
RUN pnpm run build

# 生产阶段
FROM registry.cn-shenzhen.aliyuncs.com/tengence/nginx:alpine AS runner

# 复制构建产物
COPY --from=builder /app/out /usr/share/nginx/html

# 复制nginx配置
COPY ./nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 8080

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
