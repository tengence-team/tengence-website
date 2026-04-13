import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import squareBgImg from "@/assets/images/square-bg.png";

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

export function HeroSection() {
  return (
    <section
      className="bg-size-[100%]"
      style={{ backgroundImage: `url('${squareBgImg.src}')` }}
    >
      <div className="max-w-237.5 mx-auto pt-40 flex flex-col justify-center pb-20 gap-15">
        <h1
          className={cn(
            "text-[60px] font-semibold text-black sm:text-6xl text-center break-keep leading-normal",
            sourceHanSerif.className
          )}
        >
          AI驱动的一站式流量增长平台
        </h1>
        <p className="text-xl text-[#373850] opacity-90 text-center">
          我们以 AI
          重塑全渠道流量获取与转化，用数据和智能技术洞察增长机会，为企业打造可持续的业务增长引擎
        </p>
      </div>
    </section>
  );
}
