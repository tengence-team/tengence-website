import Image from "next/image";
import { cn } from "@/lib/utils";

interface AdvantageItem {
  text: string;
}

interface AdvantageCardProps {
  highlight: string;
  title: string;
  items: AdvantageItem[];
  image?: string;
  className?: string;
  titleClassName?: string;
}

export function AdvantageCard({
  highlight,
  title,
  items,
  image,
  className,
  titleClassName,
}: AdvantageCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[20px] p-10 flex flex-col gap-7.5",
        image && "bg-contain bg-no-repeat bg-right",
        className
      )}
      style={image ? { backgroundImage: `url('${image}')` } : undefined}
    >
      <h2 className={cn("text-[32px] font-semibold text-[#242430]", titleClassName)}>
        <span className="text-primary">{highlight}</span>
        <span>{title}</span>
      </h2>
      <div>
        {items.map((item, index) => (
          <div key={index} className={cn("flex items-center", index < items.length - 1 && "mb-2")}>
            <Image
              src="/icons/check-circle.svg"
              alt="check"
              width={18}
              height={18}
            />
            <p className="text-[#51526D] opacity-80 text-base ml-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
