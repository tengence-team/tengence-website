import Image from "next/image";
import checkIcon from "@/assets/icons/check.svg";

interface CheckCellProps {
  checked: boolean | undefined;
}

export function CheckCell({ checked }: CheckCellProps) {
  if (checked) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-primary w-5 h-5 rounded-sm overflow-hidden flex items-center justify-center">
          <Image
            src={checkIcon}
            height={16}
            width={16}
            alt="check-icon"
          />
        </div>
      </div>
    );
  }
  return <div className="text-[#B5B5CD] text-base text-center">/</div>;
}
