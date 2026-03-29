import Image from "next/image";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {
  FeatureCard,
  AdvantageCard,
  SectionTitle,
  featureCards,
  advantageCards,
} from "@/components/home";

const sourceHanSerif = localFont({
  src: [
    {
      path: "../fonts/SourceHanSerifCN-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-han-serif",
  display: "swap",
  preload: true,
});

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/images/square-bg.png')] bg-size-[100%]">
        <div className="max-w-237.5 mx-auto">
          <div className="pt-40 flex flex-col justify-center pb-20">
            <h1
              className={cn(
                "text-[60px] font-semibold text-black sm:text-6xl text-center break-keep leading-normal",
                sourceHanSerif.className
              )}
            >
              全域引流量，私域促转化， AI赋能业务增长
            </h1>
            <p className="text-base text-[#373850] opacity-90">
              我们以
              AI重塑全渠道流量获取与站内转化，用数据和智能技术洞察增长机会，提高流量转化效率，为企业打造可持续的业务增长引擎
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="max-w-360 mx-auto grid grid-cols-2 gap-5 p-5 bg-white">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              highlight={card.highlight}
              title={card.title}
              description={card.description}
              image={card.image}
              titleClassName={sourceHanSerif.className}
            />
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-(--gradient-white-fade)">
        <div className="max-w-360 mx-auto p-10 bg-[#f9f9fb80] rounded-[40px]">
          <SectionTitle
            prefix="我们的"
            highlight="优势"
            className={sourceHanSerif.className}
          />

          {/* First row: 快 (flex-1) + 准 (flex-2) */}
          <div className="flex gap-3">
            <AdvantageCard
              {...advantageCards[0]}
              className="flex-1"
              titleClassName={sourceHanSerif.className}
            />
            <AdvantageCard
              {...advantageCards[1]}
              className="flex-2"
              titleClassName={sourceHanSerif.className}
            />
          </div>

          {/* Second row: 稳 (flex-2) + 省 (flex-1) */}
          <div className="flex gap-3 mt-3">
            <AdvantageCard
              {...advantageCards[2]}
              className="flex-2"
              titleClassName={sourceHanSerif.className}
            />
            <AdvantageCard
              {...advantageCards[3]}
              className="flex-1"
              titleClassName={sourceHanSerif.className}
            />
          </div>
        </div>
      </section>

      <section className="bg-(--gradient-white-fade) m-5">
        <div className="max-w-360 mx-auto p-10 bg-[#f9f9fb80] rounded-[40px]">
          <div
            className={cn(
              "text-[44px] font-semibold text-black text-center",
              sourceHanSerif.className
            )}
          >
            试用流程
          </div>

          <div className="mt-10 flex items-start">
            <div className="relative flex flex-col justify-center items-center before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:right-0 before:bg-[#DDE]">
              <div className="rounded-full border-15 border-solid border-[#DDE] w-26.5 h-26.5 bg-[#7B7C9E] flex items-center justify-center">
                <Image
                  src="/icons/book.svg"
                  width={32}
                  height={32}
                  alt="零门槛入门"
                />
              </div>

              <div
                className={cn(
                  "text-[#242430] text-[24px] font-semibold mt-10 mb-2",
                  sourceHanSerif.className
                )}
              >
                零门槛入门
              </div>

              <p className="text-[#373850] text-base leading-6">
                0成本免费开通
              </p>
              <p className="text-[#373850] text-base leading-6">
                0风险极速验证
              </p>
            </div>

            <div className="h-3.75 flex-1 bg-[#DDE] bg-[url('/images/circulation.svg')] bg-no-repeat bg-center"></div>

            <div className="relative flex flex-col justify-center items-center before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:left-0 before:bg-[#DDE] after:content-[''] after:h-3.75 after:w-[50%] after:absolute after:top-22.75 after:right-0 after:bg-[#DDE]">
              <div className="rounded-full border-15 border-solid border-[#DDE] w-26.5 h-26.5 bg-[#7B7C9E] flex items-center justify-center">
                <Image
                  src="/icons/file-search.svg"
                  width={32}
                  height={32}
                  alt="定制化诊断"
                />
              </div>

              <div
                className={cn(
                  "text-[#242430] text-[24px] font-semibold mt-10 mb-2",
                  sourceHanSerif.className
                )}
              >
                定制化诊断
              </div>

              <p className="text-[#373850] text-base leading-6">
                全维度业务诊断
              </p>
              <p className="text-[#373850] text-base leading-6">
                一对一专家把脉
              </p>
            </div>

            <div className="h-3.75 flex-1 bg-[#DDE] bg-[url('/images/circulation.svg')] bg-no-repeat bg-center mt-22.75"></div>

            <div className="relative flex flex-col justify-center items-center before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-22.75 before:left-0 before:bg-[#DDE] after:content-[''] after:h-3.75 after:w-[50%] after:absolute after:top-0 after:right-0 after:bg-[#DDE]">
              <div className="rounded-full border-15 border-solid border-[#DDE] w-26.5 h-26.5 bg-[#7B7C9E] flex items-center justify-center">
                <Image
                  src="/icons/shield-tick.svg"
                  width={32}
                  height={32}
                  alt="全场景验证"
                />
              </div>

              <div
                className={cn(
                  "text-[#242430] text-[24px] font-semibold mt-10 mb-2",
                  sourceHanSerif.className
                )}
              >
                全场景验证
              </div>

              <p className="text-[#373850] text-base leading-6">
                全场景 POC 实测
              </p>
              <p className="text-[#373850] text-base leading-6">
                全流程落地陪跑
              </p>
            </div>

            <div className="h-3.75 flex-1 bg-[#DDE] bg-[url('/images/circulation.svg')] bg-no-repeat bg-center"></div>

            <div className="relative flex flex-col justify-center items-center before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:left-0 before:bg-[#DDE]">
              <div className="rounded-full border-15 border-solid border-[#DDE] w-26.5 h-26.5 bg-[#7B7C9E] flex items-center justify-center">
                <Image
                  src="/icons/umbrella.svg"
                  width={32}
                  height={32}
                  alt="全周期护航"
                />
              </div>

              <div
                className={cn(
                  "text-[#242430] text-[24px] font-semibold mt-10 mb-2",
                  sourceHanSerif.className
                )}
              >
                全周期护航
              </div>

              <p className="text-[#373850] text-base leading-6">
                全链路数据闭环
              </p>
              <p className="text-[#373850] text-base leading-6">
                全周期持续增长
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
