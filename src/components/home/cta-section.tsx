import { cn } from "@/lib/utils";
import Link from "next/link";
import localFont from "next/font/local";
import trialImg from "@/assets/images/trial.png";

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

export function CTASection() {
  return (
    <section
      className="bg-primary bg-no-repeat bg-contain bg-bottom-right py-15 px-25"
      style={{ backgroundImage: `url('${trialImg.src}')` }}
    >
      <div className="max-w-360 mx-auto">
        <h2
          className={cn(
            "text-[44px] font-semibold text-[#A0C2FF] leading-normal",
            sourceHanSerif.className
          )}
        >
          <span>
            <span className="text-white">「立即免费试用」</span>
            与我们
          </span>
          <br />
          <span>一起开启智能化增长之旅！ </span>
        </h2>
        <div className="mt-10">
          <div className="flex items-center space-x-3">
            <Link
              href="//console.tengence.com/#/login"
              className="text-base font-medium px-6 py-3.5 bg-white text-primary rounded-xl"
            >
              免费试用
            </Link>
            <Link
              href="/contact-us"
              className="text-base font-medium px-6 py-3.5 border border-solid border-white text-white rounded-xl"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
