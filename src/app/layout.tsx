import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingConsult from "@/components/layout/floating-consult";
import { TrackProvider } from "@/components/track-provider";

import "github-markdown-css/github-markdown-light.css";

// 首页TDK
export const metadata: Metadata = {
  title: "通智云 | AI 驱动的引流获客与流量转化一站式解决方案",
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
  description:
    "通智云是AI时代专为企业打造的一站式流量增长平台，提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品，助力企业实现全域流量获取与私域流量转化，驱动业务持续增长。",
  icons: "/favicon.ico",
  authors: [
    { name: "深圳市思讯网络有限公司", url: "https://www.tengence.com" },
  ],
  creator: "通智云",
  publisher: "深圳市思讯网络有限公司",
  alternates: {
    canonical: "https://www.tengence.com",
  },
  openGraph: {
    title: "通智云 | AI 驱动的引流获客与流量转化一站式解决方案",
    description:
      "提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品，助力企业实现全域流量获取与私域流量转化。",
    url: "https://www.tengence.com",
    siteName: "通智云",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.tengence.com/company-name.svg",
        width: 1200,
        height: 630,
        alt: "通智云",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "通智云 | AI 驱动的引流获客与流量转化一站式解决方案",
    description: "提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品",
    images: ["https://www.tengence.com/company-name.svg"],
  },
  verification: {
    // 预留：Google 等站长验证码
    // google: "your-verification-code",
  },
  other: {
    'baidu-site-verification': 'codeva-bXFHSr4v6v',
    'ICP': '粤ICP备2024177480号',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite 结构化数据
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "通智云",
    alternateName: "Tengence",
    url: "https://www.tengence.com",
    description: "AI时代专为企业打造的一站式流量增长平台",
    publisher: {
      "@type": "Organization",
      name: "通智云",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tengence.com/logo.svg",
      },
    },
  };

  // Organization 结构化数据
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "通智云",
    alternateName: "深圳市思讯网络有限公司",
    url: "https://www.tengence.com",
    logo: "https://www.tengence.com/logo.svg",
    description: "AI时代专为企业打造的一站式流量增长平台",
    contactPoint: {
      "@type": "ContactPoint",
      email: "bd@tengence.com",
      contactType: "sales",
    },
    sameAs: [],
    // 社交媒体链接可后续添加，例如：
    // sameAs: [
    //   "https://weixin.qq.com/xxx",
    //   "https://weibo.com/xxx",
    // ],
  };

  // 合并所有结构化数据
  const structuredData = [webSiteJsonLd, organizationJsonLd];

  return (
    <html lang="zh-CN">
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-screen flex flex-col">
        <TrackProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingConsult />
        </TrackProvider>
      </body>
    </html>
  );
}
