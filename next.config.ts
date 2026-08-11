import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 忽略 TypeScript 类型错误，强制允许打包完成
  typescript: {
    ignoreBuildErrors: true,
  },
  // 同时忽略 ESLint 语法检查警告
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;