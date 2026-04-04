import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { MissionCard } from "./mission-card";
import { missionCards } from "./data";

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

export function MissionSection() {
  return (
    <section
      className={cn(
        "max-w-360 mx-auto p-10 mt-22.5",
        sourceHanSerif.className
      )}
    >
      <h2 className="text-[40px] text-black font-semibold">我们的使命</h2>

      <div className="grid grid-cols-4 mt-9 gap-4">
        {missionCards.map((card, index) => (
          <MissionCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
