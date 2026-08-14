// Tengence PC端官网 ESLint 配置
// 更新时间：2025-08-14
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
// test staging deploy fix 1786700971
// test staging deploy 1786702656
// test staging deploy with docker compose v2.27.0
// test staging deploy fix path quote
// test staging deploy fix filename
