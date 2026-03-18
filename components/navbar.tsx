"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "신년운세", href: "#" },
  { label: "사주풀이", href: "#" },
  { label: "연애비책", href: "#" },
  { label: "재물보감", href: "#" },
];

interface NavbarProps {
  /** 헤더 래퍼에 적용할 추가 className (position, bg 등) */
  headerClassName?: string;
}

export default function Navbar({ headerClassName = "" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`z-50 backdrop-blur-sm border-b border-border ${headerClassName}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-18">
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/main/mainlogo.png"
            alt="만월성 로고"
            width={87}
            height={34}
            className="w-[60px] h-auto md:w-[87px]"
            priority
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-foreground/80 hover:text-[var(--gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-6 h-6 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <Image
              src="/main/TextAlignRight.png"
              alt="메뉴 버튼"
              width={24}
              height={24}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-foreground hover:text-[var(--gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
