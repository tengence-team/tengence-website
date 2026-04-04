import { cn } from "@/lib/utils";
import type { MissionCardData } from "./data";

interface MissionCardProps {
  card: MissionCardData;
}

export function MissionCard({ card }: MissionCardProps) {
  const parts = card.content.split(card.highlight);

  return (
    <div className="p-10 rounded-xl bg-[#F9F9FB] text-[28px] font-semibold text-[#7B7C9E]">
      {parts[0]}<span className="text-[#242430]">{card.highlight}</span>{parts[1]}
    </div>
  );
}
