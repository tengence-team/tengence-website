import Image from "next/image";
import { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface TrialStepProps {
  icon: StaticImageData;
  title: string;
  description: string[];
  titleClassName?: string;
  connectorPosition: "first" | "middle-top" | "middle-bottom" | "last";
}

const connectorStyles = {
  first: "before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:right-0 before:bg-[#DDE]",
  "middle-top":
    "before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:left-0 before:bg-[#DDE] after:content-[''] after:h-3.75 after:w-[50%] after:absolute after:top-22.75 after:right-0 after:bg-[#DDE]",
  "middle-bottom":
    "before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-22.75 before:left-0 before:bg-[#DDE] after:content-[''] after:h-3.75 after:w-[50%] after:absolute after:top-0 after:right-0 after:bg-[#DDE]",
  last: "before:content-[''] before:h-3.75 before:w-[50%] before:absolute before:top-0 before:left-0 before:bg-[#DDE]",
};

export function TrialStep({
  icon,
  title,
  description,
  titleClassName,
  connectorPosition,
}: TrialStepProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-center items-center",
        connectorStyles[connectorPosition]
      )}
    >
      <div className="rounded-full border-15 border-solid border-[#DDE] w-26.5 h-26.5 bg-[#7B7C9E] flex items-center justify-center">
        <Image src={icon} width={32} height={32} alt={title} />
      </div>
      <h3
        className={cn(
          "text-[#242430] text-[24px] font-semibold mt-10 mb-2",
          titleClassName
        )}
      >
        {title}
      </h3>
      {description.map((text, index) => (
        <p key={index} className="text-[#373850] text-base leading-6">
          {text}
        </p>
      ))}
    </div>
  );
}
