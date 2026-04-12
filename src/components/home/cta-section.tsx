import { cn } from "@/lib/utils";
import Link from "next/link";
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

export function CTASection() {
  return (
    <section className="bg-primary bg-[url('/images/trial.png')] bg-no-repeat bg-contain bg-bottom-right py-15 px-25">
      <div className="max-w-360 mx-auto">
        <div
          className={cn(
            "text-[44px] font-semibold text-[#A0C2FF] leading-normal",
            sourceHanSerif.className
          )}
        >
          <p>
            <span className="text-white">「立即免费试用」</span>
            与我们
          </p>
          <p>一起开启智能化增长之旅！ </p>
        </div>
        <div className="mt-10">
          <div className="flex items-center space-x-3">
            <Link
              href="http://console.mossego.cn/#/register"
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
