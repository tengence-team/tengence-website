import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BusinessCardData } from "./data";

interface BusinessCardProps {
  card: BusinessCardData;
}

export function BusinessCard({ card }: BusinessCardProps) {
  return (
    <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
      <p className="text-2xl font-semibold text-[#51526D]">
        {card.description}
      </p>
      <Image
        src={card.image}
        width={40}
        height={40}
        alt={card.alt}
      />
    </div>
  );
}
