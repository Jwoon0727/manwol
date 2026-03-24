"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";

const navLinks = [
  { label: "신년운세", href: "#" },
  { label: "사주풀이", href: "#" },
  { label: "연애비책", href: "#" },
  { label: "재물보감", href: "#" },
];

const siteMenuSections = [
  {
    title: "사주",
    items: [
      { label: "신년운세", href: "#" },
      { label: "사주풀이", href: "#" },
      { label: "연애비책", href: "#" },
      { label: "재물보감", href: "#" },
    ],
  },
  {
    title: "무료 서비스",
    items: [
      { label: "연예인 사주풀이", href: "#" },
      { label: "꿈 해몽", href: "#" },
    ],
  },
];

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      {/* SVG는 unoptimized + 별도 레이어로 backdrop-filter 합성 시 흐림 방지 */}
      <span
        className="inline-block [transform:translateZ(0)] [backface-visibility:hidden]"
        style={{ WebkitBackfaceVisibility: "hidden" }}
      >
        <Image
          src="/main/main000.svg"
          alt="만월성 로고"
          width={80}
          height={30}
          priority
          draggable={false}
          unoptimized
          className="block h-auto w-[60px] md:w-[87px] select-none"
        />
      </span>
    </Link>
  );
}

interface NavbarProps {
  /** 헤더 래퍼에 적용할 추가 className (position, bg 등) */
  headerClassName?: string;
}

export default function Navbar({ headerClassName = "" }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <>
      <header className={`z-50 border-b border-border ${headerClassName}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-13 md:h-15">
          {/* Logo (Left) */}
          <Logo />

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-pretendard text-base font-semibold text-foreground/80 hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              className="ml-3 flex items-center justify-center w-6 h-6"
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
            >
              <Image
                src="/main/TextAlignRight.png"
                alt="메뉴 버튼"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="전체 메뉴"
        // 💡 수정 포인트: w-[450px] max-w-[100vw] -> w-[300px] md:w-[450px] max-w-[85vw]
        // 모바일에서는 300px(또는 화면의 85%), md(768px) 이상부터 450px을 차지하게 됩니다.
        className={`fixed top-0 right-0 h-full w-[300px] md:w-[450px] max-w-[85vw] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out rounded-l-[15px] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button - floats on left edge */}
        <button
          aria-label="메뉴 닫기"
          onClick={() => setDrawerOpen(false)}
          // 💡 참고: 모바일 화면 너비가 줄어듦에 따라, 왼쪽에 떠 있는 닫기 버튼(-left-15)도 화면 안쪽으로 자연스럽게 들어옵니다.
          className={`absolute -left-12 md:-left-15 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors ${
            !drawerOpen ? "hidden" : "flex"
          }`}
        >
          <X size={18} />
        </button>

        {/* Drawer header */}
        <div className="px-5 md:px-7 pt-7 pb-8 border-b border-border">
          <Logo />
        </div>

        {/* Drawer body */}
        <nav
          className="flex-1 overflow-y-auto px-5 md:px-7 py-6 flex flex-col gap-2"
          aria-label="전체 메뉴 내비게이션"
        >
          {siteMenuSections.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            return (
              <div key={section.title} className="mb-2">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-3 text-left font-bold text-[16px] md:text-[17px] text-foreground  transition-colors"
                  aria-expanded={isExpanded}
                >
                  {section.title}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>
                {isExpanded && (
                  <ul className="flex flex-col mt-1">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          className="block py-3 pl-4 text-[14px] md:text-[15px] text-foreground/80  hover:bg-muted/60 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 md:px-7 pb-8 pt-4 flex flex-col gap-4">
          <a
            href="/order-confirm"
            onClick={() => setDrawerOpen(false)}
            className="font-pretendard w-full mb-8 flex items-center justify-center gap-2 text-[oklch(0.1_0_0)] font-bold text-[14px] md:text-[15px] py-4 rounded-md transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(to right, #FECF61, #FFBE27)",
            }}
          >
            사주 결과 조회하기
            <span aria-hidden="true">{">"}</span>
          </a>
          <p className="font-pretendard text-center pt-12 pb-4 border-t border-border text-[10px] md:text-xs text-muted-foreground">
            © 2026 만월성(Manwolseong). All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
