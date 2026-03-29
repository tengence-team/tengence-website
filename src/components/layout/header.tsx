"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/product", label: "产品" },
  { href: "/about-us", label: "关于我们" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-linear-to-b from-white to-transparent">
      <div className="max-w-360 flex h-15 items-center justify-between px-4 mx-auto">
        {/* Logo - 左边 */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1.5">
            <Image src="/logo.svg" alt="logo" width={22} height={22} />
            <Image
              src="/company-name.svg"
              alt="通智云"
              width={52}
              height={16}
            />
          </Link>
        </div>

        {/* Navigation - 中间 */}
        <nav className="flex items-center space-x-7.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-[#242430] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth Buttons - 右边 */}
        <div className="flex items-center space-x-6">
          <Link
            href="http://console.mossego.cn/#/login"
            className="text-base text-[#242430] hover:text-primary transition-colors"
          >
            登录
          </Link>
          <Link
            href="http://console.mossego.cn/#/register"
            className="text-sm font-medium px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
          >
            免费开始
          </Link>
        </div>
      </div>
    </header>
  );
}
