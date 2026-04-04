import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { WhoWeAreCard } from "./who-we-are-card";
import { whoWeAreCards } from "./data";

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

export function WhoWeAreSection() {
  const [darkCard, ...lightCards] = whoWeAreCards;

  return (
    <section className="max-w-360 mx-auto p-10">
      <h2
        className={cn(
          "text-[40px] text-black font-semibold",
          sourceHanSerif.className
        )}
      >
        我们是谁？
      </h2>

      <div className="flex gap-3 mt-9">
        <WhoWeAreCard card={darkCard} className={sourceHanSerif.className} image="/images/pencil.png" />
        <div className="flex-1 flex flex-col gap-3">
          {lightCards.map((card, index) => (
            <WhoWeAreCard
              key={index}
              card={card}
              className={sourceHanSerif.className}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
