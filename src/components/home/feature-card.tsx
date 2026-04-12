import { cn } from "@/lib/utils";
import { type StaticImageData } from "next/image";

interface FeatureCardProps {
  highlight: string;
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
  titleClassName?: string;
}

export function FeatureCard({
  highlight,
  title,
  description,
  image,
  className,
  titleClassName,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] p-10 shadow-card-border bg-(--gradient-white-fade) bg-contain h-130 bg-no-repeat bg-bottom-right",
        className
      )}
      style={{ backgroundImage: `url('${image.src}')` }}
    >
      <h2 className={cn("text-[32px] font-semibold text-[#242430]", titleClassName)}>
        <span className="text-primary">{highlight}</span>
        <span>{title}</span>
      </h2>
      <p className="text-[#51526D] opacity-80 text-base mt-3">{description}</p>
    </div>
  );
}
