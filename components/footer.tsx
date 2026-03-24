import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "신년운세", href: "#" },
  { label: "사주풀이", href: "#" },
  { label: "연애비책", href: "#" },
  { label: "재물보감", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white/60 pt-4 pb-7 md:py-10 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-3 md:mb-8">
          {/* footer Nav (💡 수정: 모바일 맨 위(order-1), 하단 선(border-b), 중앙 정렬) */}
          <div className="order-1 md:order-2 w-screen max-w-none ml-[calc(-50vw+50%)] md:ml-0 md:w-auto border-b border-white md:border-none pb-2 md:pb-0">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  // 💡 수정: 텍스트 색상을 #ffffff로 변경
                  className="font-pretendard text-sm text-[#ffffff] hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand (💡 수정: 모바일 아래(order-2), 내부 정렬은 기존과 동일하게 가만히 둠) */}
          <div className="order-2 md:order-1 mt-5 md:mt-0 max-w-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <Image
                src="/main/footerlogo.png"
                alt="만월성"
                width={87}
                height={34}
                className="w-[80px] h-auto md:w-[95px]"
              />
            </div>
            <p className="font-pretendard text-sm text-white leading-relaxed">
              당신의 운명이 가장 밝게 빛나는 순간을 함께합니다.
              <br />
              만월성 온라인 사주 서비스.
            </p>
          </div>
        </div>

        <div className="border-t border-white pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-pretendard text-xs text-white">
            © 2026 만월성(Manwolseong). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
