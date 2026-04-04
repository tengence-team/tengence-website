import { cn } from "@/lib/utils";
import { TrialStep, trialSteps } from ".";
import localFont from "next/font/local";

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
      <div className="max-w-360 mx-auto p-10 bg-[#f9f9fb80] rounded-[40px]">
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
                    "h-3.75 flex-1 bg-[#DDE] bg-[url('/images/circulation.svg')] bg-no-repeat bg-center",
                    index === 1 && "mt-22.75"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
