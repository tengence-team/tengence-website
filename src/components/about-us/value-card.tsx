import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ValueCardData } from "./data";

interface ValueCardProps {
  card: ValueCardData;
}

export function ValueCard({ card }: ValueCardProps) {
  const parts = card.content.split(card.highlight);

  return (
    <div className="p-7.5 rounded-lg shadow-card-border">
      <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
        <Image
          src={card.icon}
          width={36}
          height={36}
          alt={card.alt}
        />
      </div>
      <p className="pt-6 text-[28px] font-semibold text-[#31373D]">
        {parts[0]}<span style={{ color: card.highlightColor }}>{card.highlight}</span>{parts[1]}
      </p>
    </div>
  );
}
