import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// 首页TDK
export const metadata: Metadata = {
  title: "通智云 - AI驱动的企业流量增长平台 | 企业引流获客与流量转化解决方案",
  keywords: [
    "通智云",
    "Tengence",
    "引流获客",
    "流量转化",
    "智能搜索",
    "智能推荐",
    "SEO优化",
    "数据分析",
    "数据采集",
    "AI营销",
    "企业增长",
    "私域运营",
  ],
  description: "通智云是AI时代专为企业打造的一站式流量增长平台，提供智能搜索、推荐系统、SEO优化、数据分析等全栈产品，助力企业实现全域流量获取与私域流量转化，驱动业务持续增长。",
  icons: "/logo.svg",
};

// 产品页（通智搜索）TDK
// export const metadata: Metadata = {
//   title: "通智搜索 - 专注业务增长的新一代智能搜索 | 0代码/专注流量转化/高性能/低成本的企业级搜索解决方案",
//   keywords: [
//     "通智搜索",
//     "企业搜索",
//     "电商搜索",
//     "流量优化",
//     "零代码",
//     "免埋点",
//     "免运维",
//     "站内搜索",
//     "智能搜索引擎",
//     "向量搜索",
//     "语义搜索",
//     "AI搜索",
//     "搜索即服务",
//     "云搜索",
//   ],
//   description: "通智搜索是新一代企业级智能搜索产品，零代码低门槛，1天接入1周见效。支持亿级日PV、80ms超低延迟，提供多语言意图识别、个性化推荐、AB测试等全链路能力，适用于电商、知识社区、企业知识管理等多种场景。",
//   icons: "/logo.svg",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
