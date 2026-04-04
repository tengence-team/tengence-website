import { cn } from "@/lib/utils";
import type { WhoWeAreCardData } from "./data";

interface WhoWeAreCardProps {
  card: WhoWeAreCardData;
  className?: string;
}

export function WhoWeAreCard({ card, className }: WhoWeAreCardProps) {
  if (card.variant === "dark") {
    return (
      <div
        className={cn(
          "rounded-[20px] shadow-card-border text-white bg-gradient-black-fade p-10 flex-1 text-[28px] font-semibold",
          className
        )}
      >
        {card.title}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px] p-10",
        className
      )}
    >
      <p className="text-[28px] font-semibold text-[#31373D]">
        {card.title}
      </p>
      {card.description && (
        <p className="text-[#373850]">{card.description}</p>
      )}
    </div>
  );
}
