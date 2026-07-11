"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Popover } from "antd";
import { cn } from "@/lib/utils";
import messageIcon from "@/assets/icons/message-dots-circle.svg";
import vxQrcode from "@/assets/images/vx.png";

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

const content = (
  <div className="flex flex-col items-center justify-center">
    <Image src={vxQrcode} alt="二维码" width={141} height={141} />
    <p className="text-center text-sm mt-2">企业微信</p>
  </div>
);

export default function FloatingConsult() {
  return (
    <Popover content={content} placement="left" trigger="hover">
      <div className="w-10.5 fixed bottom-35 right-3 z-50 flex flex-col items-center justify-center bg-primary text-white rounded-[44px] px-2 py-3 cursor-pointer hover:bg-primary/90 border border-solid border-[#F3F4F8] transition-colors text-center">
        <Image src={messageIcon} alt="咨询" width={24} height={24} />
        <span className={cn("text-[16px] mt-1", sourceHanSerif.className)}>
          咨询
        </span>
      </div>
    </Popover>
  );
}
