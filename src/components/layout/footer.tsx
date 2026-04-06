import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-360 pt-10 px-6 pb-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1.5">
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Image
                  src="/company-name-white.svg"
                  alt="通智云"
                  width={88}
                  height={28}
                />
              </Link>
            </div>

            <nav className="flex gap-6">
              <Link
                href="//console.mossego.cn/#/login"
                className="text-base font-medium"
                target="_blank"
              >
                通智搜索
              </Link>
              <Link
                href="//console.mossego.cn/#/login"
                className="text-base font-medium"
                target="_blank"
              >
                关于我们
              </Link>
              <Link
                href="/contract-us"
                className="text-base font-medium"
              >
                联系我们
              </Link>
              <Link
                href="//console.mossego.cn/#/login"
                className="text-base font-medium"
                target="_blank"
              >
                用户协议
              </Link>
              <Link
                href="//console.mossego.cn/#/login"
                className="text-base font-medium"
                target="_blank"
              >
                隐私条款
              </Link>
            </nav>
          </div>
          <div className="flex">
            <div className="bg-white rounded-lg p-2">
              <Image
                src="/icons/wechat.svg"
                alt="wechat"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white opacity-20 mt-10 mb-6"></div>
        <div className="flex items-center justify-center gap-20">
          <p className="text-center text-sm">
            Copyright ©{currentYear - 1} - {currentYear} 深圳市思讯网络有限公司
          </p>
          <div className="flex items-center">
            <Image
              src="/images/icp.png"
              alt="粤ICP备2024177480号"
              width={20}
              height={20}
            />
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1.5"
            >
              粤ICP备2024177480号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
