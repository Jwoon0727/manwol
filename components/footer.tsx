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
    <footer className="bg-[#2A2A2A] text-white/60 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <Image
                src="/main/footerlogo.png"
                alt="만월성"
                width={87}
                height={34}
                className="w-[60px] h-auto md:w-[87px]"
              />
            </div>
            <p className="text-sm text-white leading-relaxed">
              당신의 운명이 가장 밝게 빛나는 순간을 함께합니다.
              <br />
              만월성 온라인 사주 서비스.
            </p>
          </div>

          {/* footer Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#999999] hover:text-[var(--gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white">
            © 2026 만월성(Manwolseong). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
