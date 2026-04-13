import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// 首页TDK
export const metadata: Metadata = {
  title: "通智云 - AI驱动的一站式流量增长平台 | 企业引流获客与流量转化解决方案",
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
  description: "通智云是AI时代专为企业打造的一站式流量增长平台，提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品，助力企业实现全域流量获取与私域流量转化，驱动业务持续增长。",
  icons: "/logo.svg",
  authors: [{ name: "深圳市思讯网络有限公司", url: "https://www.tengence.com" }],
  creator: "通智云",
  publisher: "深圳市思讯网络有限公司",
  alternates: {
    canonical: "https://www.tengence.com",
  },
  openGraph: {
    title: "通智云 - AI驱动的一站式流量增长平台",
    description: "提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品，助力企业实现全域流量获取与私域流量转化。",
    url: "https://www.tengence.com",
    siteName: "通智云",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.tengence.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "通智云",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "通智云 - AI驱动的一站式流量增长平台",
    description: "提供智能搜索、智能推荐、SEO优化、数据分析等全栈产品",
    images: ["https://www.tengence.com/og-image.png"],
  },
  verification: {
    // 预留：百度、Google 等站长验证码
    // baidu: "your-verification-code",
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "通智云",
    alternateName: "深圳市思讯网络有限公司",
    url: "https://www.tengence.com",
    logo: "https://www.tengence.com/logo.svg",
    foundingDate: "2013",
    description: "AI时代专为企业打造的一站式流量增长平台",
    contactPoint: {
      "@type": "ContactPoint",
      email: "bd@tengence.com",
      contactType: "sales",
      areaServed: "CN",
    },
    sameAs: [],
  };

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
