import { cn } from "@/lib/utils";
import localFont from "next/font/local";

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
            我们以 AI 重塑全渠道流量获取与站内转化，用数据和智能技术洞察增长机会，提高流量转化效率，为企业打造可持续的业务增长引擎
          </p>
        </div>
      </div>
    </section>
  );
}
