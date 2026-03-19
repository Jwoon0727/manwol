"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const FEATURES = [
  { left: "올해운세 핵심 요약", right: "4대 행운 지수" },
  { left: "맞춤 하이라이트", right: "오행 에너지 분석" },
  { left: "사주 원국 만세력", right: "연간 로드맵" },
  { left: "월별 운세 · 심층 분석", right: "행동 가이드 · 행운 정보" },
];

export default function PurchasePage() {
  return (
    <main className="mt-20 min-h-screen w-full flex items-center justify-center font-sans">
      <div
        className="w-[min(96vw,450px)] rounded-3xl overflow-hidden"
        style={{ background: "#f5f0e8" }}
      >
        {/* ─── DARK HERO SECTION ─── */}
        <div
          className="relative overflow-hidden rounded-t-3xl"
          style={{ background: "#1a1610", minHeight: 350 }}
        >
          {/* Background subtle texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Character image — right side */}
          <div className="absolute right-0 bottom-0 w-[55%] sm:w-[45%] md:w-60 aspect-[3/4] z-0">
            <Image
              src="/main/saju-result/payments.png"
              alt="사주 전문가 캐릭터"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Left content */}
          <div className="relative z-10 px-6 pt-7 pb-8 max-w-[80%]">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold rounded-full px-4 py-1 mb-4 border"
              style={{
                background: "rgba(201,168,76,0.12)",
                borderColor: "rgba(201,168,76,0.35)",
                color: "#c9a84c",
              }}
            >
              <span>☆</span>
              <span>총 9개 항목 · 월별 상세 가이드 포함</span>
            </div>

            {/* Title */}
            <h1 className="font-black text-white leading-tight mb-2 tracking-[-0.17em]">
              <span className="block text-[28px] md:text-[30px]">만월성</span>
              <span className="block text-[28px] md:text-[30px]">
                2026 신년운세
              </span>
              <span className="block text-[28px] md:text-[30px]">
                프리미엄 사주풀이
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              6인의 역술가 감수 · 현대적 해석
              <br />
              당신만을 위한 맞춤형 운세 분석
            </p>
          </div>
        </div>

        {/* ─── CREAM FEATURE LIST ─── (상단과 겹침, 위쪽만 rounded) */}
        <div
          className="relative z-10 -mt-12 px-6 py-6 pt-8 rounded-t-3xl"
          style={{ background: "#FFFCF5" }}
        >
          <div className="flex flex-col gap-3">
            {FEATURES.map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                {/* Left */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#FFF8E7" }}
                >
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-md shrink-0"
                    style={{ background: "#FFD061" }}
                  >
                    <Check
                      size={11}
                      strokeWidth={3}
                      style={{ color: "#000000" }}
                    />
                  </span>
                  <span
                    className="text-[12.5px] font-medium"
                    style={{ color: "#2a1f0e" }}
                  >
                    {row.left}
                  </span>
                </div>
                {/* Right */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#FFF8E7" }}
                >
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-md shrink-0"
                    style={{ background: "#FFD061" }}
                  >
                    <Check
                      size={11}
                      strokeWidth={3}
                      style={{ color: "#000000" }}
                    />
                  </span>
                  <span
                    className="text-[12.5px] font-medium"
                    style={{ color: "#2a1f0e" }}
                  >
                    {row.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── DARK PRICING CARD ─── */}
        <div className="px-4 pb-4" style={{ background: "#FFFCF5" }}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#1e1a14",
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            }}
          >
            {/* Price row */}
            <div className="px-5 pt-5 pb-4 mb-2">
              {/* Original price */}
              <div className="flex justify-end mb-1">
                <span
                  className="text-[17px] line-through"
                  style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700 }}
                >
                  30,000원
                </span>
              </div>

              {/* Label + discount + final price */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[17px]"
                  style={{
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 800,
                  }}
                >
                  결제 금액
                </span>
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-[15px] px-2 py-0.5 rounded"
                    style={{
                      fontFamily:
                        "'Pretendard Variable', Pretendard, sans-serif",
                      background: "#e04040",
                      color: "#fff",
                      fontWeight: 900,
                    }}
                  >
                    36%
                  </span>
                  <span
                    className="text-white leading-none"
                    style={{
                      fontFamily:
                        "'Pretendard Variable', Pretendard, sans-serif",
                      fontSize: "30px",
                      fontWeight: 900,
                    }}
                  >
                    25,000
                    <span
                      className="ml-0.5"
                      style={{
                        fontFamily:
                          "'Pretendard Variable', Pretendard, sans-serif",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      원
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Savings bar */}
            <div
              className="mx-3 mb-5 rounded-xl py-2.5 text-center"
              style={{
                background: "#2c2519",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontSize: "16px",
                fontWeight: 800,
              }}
            >
              지금 결제하면{" "}
              <strong
                className="text-[#FFD061]"
                style={{ fontWeight: 900, fontSize: "17px" }}
              >
                14,000원 절약!
              </strong>
            </div>
          </div>
        </div>

        {/* ─── CTA BUTTON ─── */}
        <div className="px-4 pb-2" style={{ background: "#FFFCF5" }}>
          <Link
            href="/saju-detail"
            className="w-full rounded-2xl py-3 flex items-center justify-center gap-2 text-sm font-bold transition-opacity hover:opacity-90 active:opacity-80 block"
            style={{ background: "#1a1610", color: "#fff" }}
          >
            치킨 한 마리 값으로 사주풀이 확인하기
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full"
              style={{ background: "rgba(201,168,76,0.25)" }}
            >
              <ChevronRight
                size={13}
                strokeWidth={2.5}
                style={{ color: "#c9a84c" }}
              />
            </span>
          </Link>
        </div>

        {/* ─── FOOTER NOTE ─── */}
        <div
          className="text-center pb-10 pt-1"
          style={{ background: "#FFFCF5" }}
        >
          <p className="text-[14px]" style={{ color: "rgba(42,31,14,0.45)" }}>
            결제 완료 즉시 사주풀이를 확인할 수 있어요!
          </p>
        </div>
      </div>
    </main>
  );
}
