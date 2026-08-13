import { Metadata } from "next";
import TengenceSearchContent from "./tengence-search-content";

export const metadata: Metadata = {
  title: "通智搜索 | AI 驱动的企业级智能搜索引擎",
  description: "通智搜索是AI时代专为企业打造的智能搜索引擎，提供智能搜索、智能推荐、数据分析等全栈产品。支持电商、内容社区、企业知识管理等多种场景，助力企业实现流量转化与业务增长。",
  keywords: [
    "通智搜索",
    "企业搜索引擎",
    "智能搜索",
    "AI搜索",
    "电商搜索",
    "站内搜索",
    "全文搜索",
    "向量搜索",
    "搜索推荐",
    "数据采集",
    "搜索分析",
    "个性化搜索",
  ],
  alternates: {
    canonical: "https://www.tengence.com/tengence-search",
  },
  openGraph: {
    title: "通智搜索 | AI 驱动的企业级智能搜索引擎",
    description: "AI驱动的企业级智能搜索平台，支持电商、内容社区、企业知识管理等多种场景，提供免费版、基础版、专业版、企业版和定制版等多种方案。",
    url: "https://www.tengence.com/tengence-search",
    siteName: "通智云",
  },
};

export default function TengenceSearchPage() {
  return <TengenceSearchContent />;
}
