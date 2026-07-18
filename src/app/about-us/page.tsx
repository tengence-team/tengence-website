import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "关于我们 - 通智云 | AI 驱动的一站式流量增长平台",
  description:
    "通智云深耕企业智能化云基础设施领域，聚焦流量转化、智能营销、商业分析、智能体服务四大核心方向，提供可落地、可观测、可调优的全栈智能化解决方案。",
  keywords: [
    "通智云",
    "关于通智云",
    "公司介绍",
    "智能营销",
    "流量转化",
    "商业分析",
    "智能体服务",
  ],
  alternates: {
    canonical: "https://www.tengence.com/about-us",
  },
  openGraph: {
    title: "关于我们 - 通智云",
    description:
      "一群极客，以创新突破为乐，以固步自封为耻。简单相信，傻傻坚持。",
    url: "https://www.tengence.com/about-us",
    siteName: "通智云",
  },
};
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/home";
import Image from "next/image";
import starsImg from "@/assets/images/stars.svg";
import lightbulbImg from "@/assets/images/lightbulb.svg";
import dataflowImg from "@/assets/images/dataflow.svg";
import eyeImg from "@/assets/images/eye.svg";
import pencilImg from "@/assets/images/pencil.png";
import hammerImg from "@/assets/images/hammer.png";
import medalImg from "@/assets/images/medal.png";
import checkHeartImg from "@/assets/images/check-heart.svg";
import awardImg from "@/assets/images/award.svg";
import faceSmileImg from "@/assets/images/face-smile.svg";
import beakerImg from "@/assets/images/beaker.svg";
import cooperateImg from "@/assets/images/cooperate.png";

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

export default function AboutUsPage() {
  return (
    <div>
      <section className="max-w-360 mx-auto pt-37.5 px-25">
        <h1
          className={cn(
            "text-center text-[60px] font-semibold",
            sourceHanSerif.className
          )}
        >
          我们的业务
        </h1>

        <p className="text-[#5E5F83] text-[20px] text-center mt-15 leading-loose">
          通智云，全称 <span className="text-[#242430]">通用智能云平台</span>{" "}
          ，是 AI 时代专为企业打造的
          <span className="text-[#242430]"> 一站式流量增长平台</span>
          。我们深耕企业智能化云基础设施领域，致力于让 AI
          真正落地到业务场景，成为企业智能化升级的可靠合作伙伴，助力企业在 AI
          时代抢占先机、降本增效、长效增长。
        </p>

        <div
          className={cn(
            "grid grid-cols-2 gap-4 text-2xl font-semibold mt-15 text-[#51526D]",
            sourceHanSerif.className
          )}
        >
          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <h2>
              <span>聚焦</span>
              <span className="text-primary">
                流量转化、智能营销、商业分析、智能体服务
              </span>
              <span>四大核心方向</span>
            </h2>
            <Image
              src={starsImg}
              width={40}
              height={40}
              alt="聚焦流量转化、智能营销、商业分析、智能体服务四大核心方向"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <h2>
              <span>提供</span>
              <span className="text-primary">可落地、可观测、可调优</span>的
              <span className="text-primary">全栈智能化</span>
              <span>解决方案</span>
            </h2>
            <Image
              src={lightbulbImg}
              width={40}
              height={40}
              alt="提供可落地、可观测、可调优的全栈智能化解决方案"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <h2>
              <span>以</span>
              <span className="text-primary">低门槛极速接入能力</span>
              <span>，实现业务快速上线、价值快速验证</span>
            </h2>
            <Image
              src={dataflowImg}
              width={40}
              height={40}
              alt="以低门槛极速接入能力，实现业务快速上线、价值快速验证"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <h2>
              <span>以</span>
              <span className="text-primary">行业级成熟算法与深度数据洞察</span>
              <span>，精准提效、驱动业务增长</span>
            </h2>
            <Image
              src={eyeImg}
              width={40}
              height={40}
              alt="以行业级成熟算法与深度数据洞察，精准提效、驱动业务增长"
            />
          </div>
        </div>
      </section>

      <section
        className={cn(
          "max-w-360 mx-auto p-10 mt-22.5",
          sourceHanSerif.className
        )}
      >
        <h2 className="text-[40px] text-black font-semibold">我们的使命</h2>

        <div className="grid grid-cols-4 mt-9 gap-4 text-[#7B7C9E] text-2xl font-semibold">
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            <h3>
              <span>我们坚持做难而正确的事情，让</span>
              <span className="text-[#242430]">AI</span>
              <span>普惠社会</span>
            </h3>
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            <h3>
              <span>我们坚持用AI提升社会生产力，坚信AI必将</span>
              <span className="text-[#242430]">造福人类</span>
            </h3>
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            <h3>
              <span>我们将</span>
              <span className="text-[#242430]">AI业务化</span>
              <span>，持续推动各行各业的业务AI化</span>
            </h3>
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            <h3>
              <span>我们为</span>
              <span className="text-[#242430]">创造价值</span>
              <span>而生，以推动社会进步为己任</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto p-10">
        <h2
          className={cn(
            "text-[40px] text-black font-semibold",
            sourceHanSerif.className
          )}
        >
          我们是谁？
        </h2>

        <div className="flex gap-3 mt-9">
          <div
            className={cn(
              "rounded-[20px] shadow-card-border text-white bg-gradient-black-fade  flex-1 text-[28px] font-semibold",
              sourceHanSerif.className
            )}
          >
            <div
              className="w-full h-full bg-no-repeat bg-contain bg-right p-10"
              style={{ backgroundImage: `url('${pencilImg.src}')` }}
            >
              <h3 className="w-69">
                我们是一群极客， 以创新突破为乐，以固步自封为耻
              </h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px]">
              <div
                className="w-full h-full p-10 bg-no-repeat bg-contain bg-position-[right_20px_bottom_-20px]"
                style={{ backgroundImage: `url('${hammerImg.src}')` }}
              >
                <h3
                  className={cn(
                    "text-[28px] font-semibold text-[#31373D]",
                    sourceHanSerif.className
                  )}
                >
                  我们深耕多年
                </h3>
                <p className="text-[#373850]">勇于打破常规，难题使我们兴奋</p>
              </div>
            </div>
            <div className="shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px]">
              <div
                className="w-full h-full p-10 bg-no-repeat bg-contain bg-position-[right_100px_top_0px]"
                style={{ backgroundImage: `url('${medalImg.src}')` }}
              >
                <h3
                  className={cn(
                    "text-[28px] font-semibold text-[#31373D]",
                    sourceHanSerif.className
                  )}
                >
                  我们心怀使命感
                </h3>
                <p className="text-[#373850]">简单相信，傻傻坚持</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "max-w-360 mx-auto px-10 pb-10",
          sourceHanSerif.className
        )}
      >
        <h2 className="text-[40px] text-black font-semibold">我们的价值观</h2>

        <div className="grid grid-cols-4 mt-9 gap-4 text-[#31373D] text-[28px] font-semibold">
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src={checkHeartImg}
                width={36}
                height={36}
                alt="我们敬畏用户的信任，全力以赴交付价值"
              ></Image>
            </div>
            <h3 className="pt-6">
              <span>我们</span>
              <span className="text-[#DD2590]">敬畏用户的信任</span>
              <span>，全力以赴交付价值</span>
            </h3>
          </div>
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src={awardImg}
                width={36}
                height={36}
                alt="我们拥抱变化，在试错中成长"
              ></Image>
            </div>
            <h3 className="pt-6">
              <span>我们拥抱变化，在</span>
              <span className="text-[#DD2590]">试错中成长</span>
            </h3>
          </div>

          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src={faceSmileImg}
                width={36}
                height={36}
                alt="我们以实干为荣，以空谈为耻"
              ></Image>
            </div>
            <h3 className="pt-6">
              <span>我们以</span>
              <span className="text-[#7839EE]">实干为荣</span>
              <span>，以空谈为耻</span>
            </h3>
          </div>
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src={beakerImg}
                width={36}
                height={36}
                alt="我们把产品当成艺术品来雕琢"
              ></Image>
            </div>
            <h3 className="pt-6">
              <span>我们把产品</span>
              <span className="text-[#E62E05]">当成艺术品</span>
              <span>来雕琢</span>
            </h3>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "max-w-360 mx-auto px-10 pb-10",
          sourceHanSerif.className
        )}
      >
        <h2 className="text-[40px] text-black font-semibold">
          我们欢迎志同道合的你
        </h2>

        <div
          className="text-center text-white h-87.5 bg-no-repeat bg-cover flex flex-col items-center justify-center gap-6 mt-9 rounded-[20px]"
          style={{ backgroundImage: `url('${cooperateImg.src}')` }}
        >
          <p className="text-[32px]">
            通智云在等待同频实干的人才，共造有价值有温度的 AI 产品。
          </p>
          <p className="text-[24px]">加入我们：hr@tengence.com</p>
        </div>
      </section>

      <CTASection></CTASection>
    </div>
  );
}
