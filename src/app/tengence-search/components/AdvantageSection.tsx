import Image from "next/image";
import { cn } from "@/lib/utils";
import { sourceHanSerif, advantageCards } from "../constants";
import checkCircleSuccessIcon from "@/assets/icons/check-circle-success.svg";

export function AdvantageSection() {
  return (
    <section className="max-w-360 mx-auto p-10">
      <h2 className={cn("text-[40px] font-semibold", sourceHanSerif.className)}>
        产品优势
      </h2>

      <div className="grid grid-cols-3 gap-3 mt-9">
        {advantageCards.map((card) => (
          <div
            key={card.title}
            className="shadow-card-border bg-white rounded-[20px] py-7.5 px-10"
          >
            <h3
              className={cn(
                "text-[24px] font-semibold mb-4",
                sourceHanSerif.className
              )}
            >
              {card.title}
            </h3>
            {card.items.map((item) => (
              <div key={item} className="flex items-center mt-3 first:mt-3">
                <Image
                  src={checkCircleSuccessIcon}
                  alt="check"
                  width={18}
                  height={18}
                />
                <p className="text-[#555E67] text-base ml-2">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
