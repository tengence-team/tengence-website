import { cn } from "@/lib/utils";
import { sourceHanSerif } from "@/fonts/source-han-serif";
import squareBgImg from "@/assets/images/square-bg.png";


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
          公域引流获客源，私域转化促成交
        </h1>
        <p className="text-xl text-[#373850] opacity-90 text-center">
          我们以 AI
          重塑全渠道流量获取与转化，为企业打造公域引流获客与私域流量转化的全链路业务增长引擎
        </p>
      </div>
    </section>
  );
}
