import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',

  // 可选：自定义静态资源路径前缀
  // assetPrefix: '/your-prefix/',

  // 可选：图片优化配置（静态导出时需要）
  images: {
    unoptimized: true, // 静态导出禁用内置图片优化
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: 'https://console.mossego.com/:path*',
        }
      ]
    }
  }
};

export default nextConfig;
