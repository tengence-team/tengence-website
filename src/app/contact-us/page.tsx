import { Metadata } from "next";
import ContactUsContent from "./contact-us-content";

export const metadata: Metadata = {
  title: "联系我们 - 通智云 | AI驱动的一站式流量增长平台",
  description: "联系通智云团队，获取专家业务诊断、免费POC测试、定制方案和专属报价。我们的专业团队随时为您提供AI营销解决方案咨询服务。",
  keywords: ["通智云", "联系通智云", "商务合作", "AI咨询", "POC测试", "定制方案"],
  alternates: {
    canonical: "https://www.tengence.com/contact-us",
  },
  openGraph: {
    title: "联系我们 - 通智云",
    description: "联系通智云团队，获取专家业务诊断、免费POC测试、定制方案和专属报价。",
    url: "https://www.tengence.com/contact-us",
    siteName: "通智云",
  },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
