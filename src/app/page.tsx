import {
  FeatureCard,
  AdvantageCard,
  SectionTitle,
  TrialStep,
  featureCards,
  advantageCards,
  trialSteps,
} from "@/components/home";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

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

const CONNECTOR_POSITIONS = ["first", "middle-top", "middle-bottom", "last"] as const;

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
          {featureCards.map((card) => (
            <FeatureCard
              key={card.highlight}
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

      {/* Trial Process Section */}
      <section className="bg-(--gradient-white-fade) m-5">
        <div className="max-w-360 mx-auto p-10 bg-[#f9f9fb80] rounded-[40px]">
          <h2
            className={cn(
              "text-[44px] font-semibold text-black text-center",
              sourceHanSerif.className
            )}
          >
            试用流程
          </h2>

          <div className="mt-10 flex items-start">
            {trialSteps.map((step, index) => (
              <div key={step.id} className="contents">
                <TrialStep
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  titleClassName={sourceHanSerif.className}
                  connectorPosition={CONNECTOR_POSITIONS[index]}
                />
                {index < trialSteps.length - 1 && (
                  <div
                    className={cn(
                      "h-3.75 flex-1 bg-[#DDE] bg-[url('/images/circulation.svg')] bg-no-repeat bg-center",
                      index === 1 && "mt-22.75"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
