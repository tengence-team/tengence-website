"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-linear-to-b from-white to-transparent"
      }`}
    >
      <div className="max-w-360 flex h-15 items-center justify-between px-4 mx-auto">
        {/* Logo - 左边 */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1.5">
            <Image src="/logo.svg" alt="通智云" width={22} height={22} />
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
          <Link
            key="/"
            href="/"
            className={`text-base transition-colors ${
              pathname === "/"
                ? "text-primary font-medium"
                : "text-[#242430] hover:text-primary"
            }`}
          >
            首页
          </Link>

          <Link
            href="/tengence-search"
            className={`text-base transition-colors ${
              pathname === "/tengence-search"
                ? "text-primary font-medium"
                : "text-[#242430] hover:text-primary"
            }`}
          >
            通智搜索
          </Link>
          <a
            href="/blog/"
            className={`text-base transition-colors text-[#242430] hover:text-primary`}
          >
            博客
          </a>
          <Link
            href="/about-us"
            className={`text-base transition-colors ${
              pathname === "/about-us"
                ? "text-primary font-medium"
                : "text-[#242430] hover:text-primary"
            }`}
          >
            关于我们
          </Link>
        </nav>

        {/* Auth Buttons - 右边 */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact-us"
            className="text-sm font-medium px-5 py-2 border border-solid border-[#1D2939] text-[#1D2939] rounded-lg"
          >
            联系我们
          </Link>
          <Link
            href="//console.tengence.com/login"
            className="text-sm font-medium px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
          >
            登陆/注册
          </Link>
        </div>
      </div>
    </header>
  );
}
