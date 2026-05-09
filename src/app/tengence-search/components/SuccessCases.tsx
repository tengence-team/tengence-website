import { cn } from "@/lib/utils";
import { sourceHanSerif } from "../constants";

const cases = [
  {
    title: "某知名跨境电商平台",
    content: (
      <>
        在全球 <span className="text-primary"> 10+ 个国家 </span>
        开展业务，多套基础设施建设成本居高不下，国际化的多语言问题对搜索的意图识别造成很大困难，多币种价格计算问题经常导致搜索结果的价格与详情页的价格不一致，使用通智搜索后，多站点问题迎刃而解，丰富的意图识别能力对分词、同义词、纠错、实体识别、类目预测等问题各个击破，搜索结果实时性也得以解决，
        <span className="text-primary">季度GMV提升约 10%</span>
      </>
    ),
  },
  {
    title: "某知名技术交流社区",
    content: (
      <>
        日PV在 <span className="text-primary">百万量级</span>{" "}
        ，存在博客文章、论坛帖子、问答社区、知识付费商品等多种类型内容需要提升搜索效果，并且需要对多种内容合理融合成一个综合的搜索结果，以CTR(点击率)为优化目标，使用通智搜索后，通过意图识别阶段对分词、同义词、纠错、实体识别、词权重等问题的优化，通过对多路召回和各路召回源融合策略的优化，通过综合排序的优化，最终CTR从 3.6%
        <span className="text-primary"> 提升到 5.3%</span>
      </>
    ),
  },
  {
    title: "某知名电子元器件交易平台",
    content: (
      <>
        需解决极其复杂和多样化的电子元器件型号匹配问题，并且新的器件型号层出不穷，是一个需要长期运营的开放型匹配问题，传统数据库面对这类问题束手无策，使用通智搜索后，对实体识别、同义词、纠错等意图识别能力做了专项优化，单独训练了对应的深度学习模型，并且建立起灵活的运营干预能力，最终使该平台的{" "}
        <span className="text-primary">型号匹配准确率达到了 93%</span>{" "}
        ，用户体验上了一个台阶
      </>
    ),
  },
  {
    title: "某知名电商平台信息流种草社区",
    content: (
      <>
        信息流社区存在短视频、图文、短文本等形式的内容，优化目标是用户的停留时长，需要针对用户的行为特点，呈现精准的内容，吸引用户持续观看，使用通智搜索后，通过在召回阶段对多模态的内容训练语义向量模型，对语义召回和倒排召回做针对性的优化，并且在排序阶段结合用户标签体系，针对性训练排序模型，通过对内容和用户做精细化理解，做到千人千面的效果，最终{" "}
        <span className="text-primary">停留时长提升约 16%</span>
      </>
    ),
  },
];

export function SuccessCases() {
  return (
    <section className="max-w-360 mx-auto p-10">
      <h2
        className={cn(
          "text-[40px] text-black font-semibold",
          sourceHanSerif.className
        )}
      >
        成功案例
      </h2>

      <div className="grid grid-cols-2 gap-3 mt-9">
        {cases.map((item) => (
          <div
            key={item.title}
            className="shadow-card-border bg-white rounded-[20px] py-7.5 px-10"
          >
            <h3
              className={cn(
                "text-[24px] text-[#31373D] font-semibold",
                sourceHanSerif.className
              )}
            >
              {item.title}
            </h3>
            <p className="pt-3 text-base break-all text-[#555E67] leading-loose">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
