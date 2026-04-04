import localFont from "next/font/local";
import { cn } from "@/lib/utils";

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

export function JoinUsSection() {
  return (
    <section
      className={cn(
        "max-w-360 mx-auto px-10 pb-10",
        sourceHanSerif.className
      )}
    >
      <h2 className="text-[40px] text-black font-semibold">
        我们欢迎志同道合的你
      </h2>

      <div className="text-center text-white h-87.5 bg-[url('/images/cooperate.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-6 mt-9 rounded-[20px]">
        <p className="text-[32px]">
          通智云在等待同频实干的人才，共造有价值有温度的 AI 产品。
        </p>
        <p className="text-[24px]">加入我们:hr@tengence.com</p>
      </div>
    </section>
  );
}
