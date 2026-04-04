import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { BusinessCard } from "./business-card";
import { businessCards } from "./data";

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

export function BusinessSection() {
  return (
    <section className="max-w-360 mx-auto pt-37.5 px-25">
      <h1
        className={cn(
          "text-center text-[60px] font-semibold",
          sourceHanSerif.className
        )}
      >
        我们的业务
      </h1>

      <p className="text-[#5E5F83] text-[16px] text-center mt-9">
        通智云，全称 <span className="text-[#242430]">通用智能云平台</span>{" "}
        ，是 AI 时代专为企业打造的
        <span className="text-[#242430]"> 一站式业务智能化平台</span>
        。我们深耕企业智能化云基础设施领域，致力于让 AI
        真正落地到业务场景，成为企业智能化升级的可靠合作伙伴，助力企业在 AI
        时代抢占先机、降本增效、长效增长。
      </p>

      <div
        className={cn(
          "grid grid-cols-2 gap-4 mt-9",
          sourceHanSerif.className
        )}
      >
        {businessCards.map((card, index) => (
          <BusinessCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
