import localFont from "next/font/local";

/**
 * 思源宋体（SourceHanSerifCN-SemiBold）共享字体实例。
 *
 * 字体文件由 scripts/subset-font.mjs 在 prebuild 阶段
 * 按全站实际用到的字符子集化生成，体积约 100KB（原始 OTF 11MB）。
 *
 * 用法：`import { sourceHanSerif } from "@/fonts/source-han-serif";`
 * 请勿在业务文件中再次调用 localFont 引用同一份字体。
 */
export const sourceHanSerif = localFont({
  src: [
    {
      path: "./SourceHanSerifCN-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-han-serif",
  display: "swap",
  preload: true,
});
