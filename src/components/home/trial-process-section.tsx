import { cn } from "@/lib/utils";
import { TrialStep, trialSteps } from ".";
import localFont from "next/font/local";
import circulationImg from "@/assets/images/circulation.svg";

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

const CONNECTOR_POSITIONS = [
  "first",
  "middle-top",
  "middle-bottom",
  "last",
] as const;

export function TrialProcessSection() {
  return (
    <section className="bg-(--gradient-white-fade) m-5">
      <div className="max-w-360 mx-auto p-10 bg-[#F3F4F8] rounded-[40px] mt-10">
        <h2
          className={cn(
            "text-[44px] font-semibold text-black text-center",
            sourceHanSerif.className
          )}
        >
          试用流程
        </h2>

        <div className="mt-10 flex items-start">
          {trialSteps.map((step, index) => (
            <div key={step.id} className="contents">
              <TrialStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                titleClassName={sourceHanSerif.className}
                connectorPosition={CONNECTOR_POSITIONS[index]}
              />
              {index < trialSteps.length - 1 && (
                <div
                  className={cn(
                    "h-3.75 flex-1 bg-[#DDE] bg-no-repeat bg-center",
                    index === 1 && "mt-22.75"
                  )}
                  style={{ backgroundImage: `url('${circulationImg.src}')` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
