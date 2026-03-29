import { cn } from "@/lib/utils";

interface SectionTitleProps {
  prefix: string;
  highlight: string;
  className?: string;
}

export function SectionTitle({ prefix, highlight, className }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center justify-center text-[44px] font-semibold mb-10", className)}>
      <div className="pr-2">{prefix}</div>
      <div className="relative">
        <span className="z-10 relative">{highlight}</span>
        <div className="absolute left-0 right-0 bottom-1.5 z-0 bg-[#CED8FF] h-3.25" />
      </div>
    </div>
  );
}
