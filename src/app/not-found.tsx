import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "@/assets/images/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-15rem)] mt-15">
        <Image
          src={NotFoundImg}
          alt="页面未找到"
          width={236}
          height={202}
          className="mb-8"
        />
        <h1 className="text-[28px] font-semibold text-black mt-9">
          页面未找到
        </h1>
        <p className="text-base text-[#5E5F83] mt-2">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link
          href="/"
          className="border border-solid border-[#51526D] rounded-lg text-[#242430] text-[14px] px-5 py-2 mt-9 cursor-pointer"
        >
          返回首页
        </Link>
      </div>
  );
}
