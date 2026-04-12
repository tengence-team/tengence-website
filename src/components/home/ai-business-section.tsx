import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";
import buildingImg from "@/assets/images/building.svg";
import expertImg from "@/assets/images/expert.svg";
import practiceImg from "@/assets/images/practice.svg";
import increaseImg from "@/assets/images/increase.svg";
import dotBgImg from "@/assets/images/dot-bg.png";

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

const aiBusinessItems = [
  {
    icon: buildingImg,
    alt: "深耕行业的成熟数据底座",
    prefix: "深耕行业的",
    highlight: "成熟数据底座",
  },
  {
    icon: expertImg,
    alt: "全程陪跑的专家经验交付",
    prefix: "全程陪跑的",
    highlight: "专家经验交付",
  },
  {
    icon: practiceImg,
    alt: "久经验证的最佳调优实践",
    prefix: "久经验证的",
    highlight: "最佳调优实践",
  },
  {
    icon: increaseImg,
    alt: "数据驱动的持续业务增长",
    prefix: "数据驱动的",
    highlight: "持续业务增长",
  },
];

export function AIBusinessSection() {
  return (
    <section className="m-5">
      <div
        className={cn(
          "max-w-360 mx-auto p-10 bg-[#f9f9fb80] rounded-[40px] bg-size-[100%]",
          sourceHanSerif.className
        )}
        style={{ backgroundImage: `url('${dotBgImg.src}')` }}
      >
        <h2 className={cn("text-[44px] font-semibold text-black text-center")}>
          我们把{" "}
          <span className="relative z-10 after:content-[''] after:h-3.75 after:w-full after:bg-[#CED8FF] after:absolute after:left-0 after:bottom-1 after:-z-1">
            AI业务化
          </span>{" "}
          ，助您把{" "}
          <span className="relative z-10 after:content-[''] after:h-3.75 after:w-full after:bg-[#CED8FF] after:absolute after:left-0 after:bottom-1 after:-z-1">
            业务AI化
          </span>
        </h2>

        <div className="mt-10 text-[28px] text-[#51526D] font-semibold grid grid-cols-4 gap-3">
          {aiBusinessItems.map((item) => (
            <div key={item.highlight} className="py-7.5 px-10 bg-white rounded-[20px]">
              <Image
                src={item.icon}
                width={40}
                height={40}
                alt={item.alt}
              />
              <p className="pt-6">{item.prefix}</p>
              <p className="text-primary">{item.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
