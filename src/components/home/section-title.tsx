import { cn } from "@/lib/utils";

interface SectionTitleProps {
  prefix: string;
  highlight: string;
  className?: string;
}

export function SectionTitle({
  prefix,
  highlight,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "flex items-center justify-center text-[44px] font-semibold mb-10",
        className
      )}
    >
      <span className="pr-2">{prefix}</span>
      <span className="relative z-10 after:content-[''] after:h-3.75 after:w-full after:bg-[#CED8FF] after:absolute after:left-0 after:bottom-1 after:-z-1">
        {highlight}
      </span>
    </h2>
  );
}
