import { cn } from "@/lib/utils";
import type { WhoWeAreCardData } from "./data";

interface WhoWeAreCardProps {
  card: WhoWeAreCardData;
  className?: string;
  image?: string;
}

export function WhoWeAreCard({ card, className, image }: WhoWeAreCardProps) {
  if (card.variant === "dark") {
    return (
      <div
        className={cn(
          "rounded-[20px] shadow-card-border text-white bg-gradient-black-fade p-10 flex-1 text-[28px] font-semibold",
          className
        )}
      >
        <div
          className={cn("h-full bg-contain bg-no-repeat bg-right")}
          style={image ? { backgroundImage: `url('${image}')` } : undefined}
        >
          <p className="w-65"> {card.title}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px] px-10",
        className
      )}
    >
      <div
        className={cn("bg-no-repeat bg-bottom-right py-10")}
        style={image ? { backgroundImage: `url('${image}')` } : undefined}
      >
        <p className="text-[28px] font-semibold text-[#31373D]">{card.title}</p>
        {card.description && (
          <p className="text-[#373850]">{card.description}</p>
        )}
      </div>
    </div>
  );
}
