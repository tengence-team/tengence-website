import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

const sourceHanSerif = localFont({
  src: [
    {
      path: "../../fonts/SourceHanSerifCN-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-han-serif",
  display: "swap",
  preload: true,
});

const advantageCards = [
  {
    title: "开箱即用",
    items: [
      "零代码，将预置组件集成到您的页面中",
      "免埋点，自动行为数据采集",
      "免运维，自动扩缩容",
    ],
  },
  {
    title: "超高性能",
    items: ["亿级日PV的超高流量挑战", "P95响应时间80ms", "全链路实时数据更新"],
  },
  {
    title: "白盒化调优",
    items: ["端到端可视化配置", "专家级深度参数调优", "实时在线调试日志"],
  },
  {
    title: "深度算法能力",
    items: [
      "内置多种意图识别能力",
      "行业算法调优最佳实践",
      "深度模型AutoML，自动寻找最优解",
    ],
  },
  {
    title: "全方位报表面板",
    items: ["核心指标实时更新", "全面监控，自动告警", "自动慢查询分析"],
  },
  {
    title: "充分可运营",
    items: [
      "业务想法快速付诸实现",
      "全链路ABTest能力",
      "充分的业务运营干预能力",
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="pt-30">
      <section className="max-w-360 mx-auto flex items-center justify-between gap-22.5 px-40 pb-22.5">
        <div>
          <Image
            src="/images/tengence-search-title.png"
            alt="通智搜索"
            width={236}
            height={31}
          />
          <h1
            className={cn(
              "text-[60px] font-semibold pt-1 text-black",
              sourceHanSerif.className
            )}
          >
            通智搜索
          </h1>

          <p className="text-[#373850] text-base pt-9">
            通智搜索，是 AI
            时代专为企业业务增长而打造的新一代智能搜索产品。我们依托多年沉淀的行业数据基座，使用前沿大模型技术与深度学习技术，结合反复打磨的行业最佳实践，深度洞察用户行为偏好，实现精准内容与目标用户的智能匹配，做到真正的千人千面个性化触达。
          </p>
          <p className="text-[#373850] text-base pt-9">
            我们致力于打造使用门槛低、性能强劲、搜索效果精准可控、超高性价比的智能搜索产品，配套全维度可视化数据报表、灵活丰富的运营干预能力，同时提供专属专家调优服务与产品深度定制化服务，让智能搜索真正成为
            AI 时代企业提升流量转化、驱动业务持续增长的核心利器。
          </p>
        </div>
        <Image src="/images/search.png" alt="搜索" width={384} height={413} />
      </section>

      <section className="max-w-360 mx-auto p-10">
        <p
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          产品优势
        </p>

        <div className="grid grid-cols-3 gap-3 mt-9">
          {advantageCards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="shadow-card-border bg-white rounded-[20px] py-7.5 px-10"
            >
              <h2
                className={cn(
                  "text-[24px] font-semibold",
                  sourceHanSerif.className
                )}
              >
                {card.title}
              </h2>
              {card.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={cn(
                    "flex items-center",
                    itemIndex === 0 ? "mt-3" : "mt-1"
                  )}
                >
                  <Image
                    src="/icons/check-circle-success.svg"
                    alt="check"
                    width={18}
                    height={18}
                  />
                  <p className="text-[#555E67] text-base ml-2">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-360 mx-auto p-10">
        <p
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          版本功能比对
        </p>
      </section>
    </div>
  );
}
