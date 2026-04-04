import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ValueCard } from "./value-card";
import { valueCards } from "./data";

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

export function ValuesSection() {
  return (
    <section
      className={cn(
        "max-w-360 mx-auto px-10 pb-10",
        sourceHanSerif.className
      )}
    >
      <h2 className="text-[40px] text-black font-semibold">我们的价值观</h2>

      <div className="grid grid-cols-4 mt-9 gap-4">
        {valueCards.map((card, index) => (
          <ValueCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
