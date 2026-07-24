import { AdvantageCard, SectionTitle, advantageCards } from ".";
import { sourceHanSerif } from "@/fonts/source-han-serif";


export function AdvantagesSection() {
  return (
    <section className="bg-(--gradient-white-fade)">
      <div className="max-w-360 mx-auto p-10 bg-[#F3F4F8] rounded-[40px] mt-5">
        <SectionTitle
          prefix="我们的"
          highlight="优势"
          className={sourceHanSerif.className}
        />

        {/* First row: 快 (flex-1) + 准 (flex-2) */}
        <div className="flex gap-3">
          <AdvantageCard
            {...advantageCards[0]}
            className="flex-1"
            titleClassName={sourceHanSerif.className}
          />
          <AdvantageCard
            {...advantageCards[1]}
            className="flex-2"
            titleClassName={sourceHanSerif.className}
          />
        </div>

        {/* Second row: 稳 (flex-2) + 省 (flex-1) */}
        <div className="flex gap-3 mt-3">
          <AdvantageCard
            {...advantageCards[2]}
            className="flex-2"
            titleClassName={sourceHanSerif.className}
          />
          <AdvantageCard
            {...advantageCards[3]}
            className="flex-1"
            titleClassName={sourceHanSerif.className}
          />
        </div>
      </div>
    </section>
  );
}
