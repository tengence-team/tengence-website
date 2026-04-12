import Image from "next/image";
import { cn } from "@/lib/utils";
import { sourceHanSerif } from "../constants";
import tengenceSearchTitleImg from "@/assets/images/tengence-search-title.png";
import searchImg from "@/assets/images/search.png";

export function ProductIntro() {
  return (
    <section className="max-w-360 mx-auto flex items-center justify-between gap-22.5 px-40 pb-22.5">
      <div>
        <Image
          src={tengenceSearchTitleImg}
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
      <Image src={searchImg} alt="搜索" width={384} height={413} />
    </section>
  );
}
