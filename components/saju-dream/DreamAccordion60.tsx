"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  period: string;
  tag: string;
  left: { label: string; body: string };
  right: { label: string; body: string };
}

//상황별 해설

export default function DreamAccordion60() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full" style={{ background: "#0E0E0E" }}>
      {/* ── White hero card with rounded bottom ── */}
      <div
        className="w-full px-6 pt-12 pb-14"
        style={{
          background: "#ffffff",
          borderRadius: "0 0 2rem 2rem",
          textAlign: "center",
        }}
      >
        <p className="text-xs font-semibold mb-4" style={{ color: "#CE8600" }}>
          Best 상황별 해설
        </p>
        <h2
          className="font-bold leading-tight mb-1"
          style={{ fontSize: "2rem", color: "#1a1a1a" }}
        >
          가족·친척 꿈,
        </h2>
        <h2
          className="font-bold leading-tight mb-6"
          style={{ fontSize: "2rem", color: "#1a1a1a" }}
        >
          상황별 <span style={{ color: "#CE8600" }}>상세 해몽 60선</span>
        </h2>
        <div
          className="text-sm leading-relaxed mx-auto"
          style={{ color: "#333333", maxWidth: "560px" }}
        >
          <p>
            &ldquo;엄마가 울면서 전화하는 꿈&rdquo;, &ldquo;시어머니가 갑자기
            집에 오는 꿈&rdquo;,
          </p>
          <p>
            &ldquo;아이가 마트에서 사라지는 꿈&rdquo;처럼 검색창에 그대로 칠
            법한 가족·친척 꿈들을 한 번에 모았습니다.
          </p>
          <p>
            단순 길몽·흉몽을 넘어, 지금 내 마음과 생활에서 점검하면 좋을
            포인트까지 함께 정리해 드립니다.
          </p>
        </div>
      </div>

      {/* ── Dark accordion body ── */}
      <div className="w-full py-14" style={{ background: "#0E0E0E" }}>
        <div className="max-w-4xl mx-auto px-6"></div>
      </div>
    </section>
  );
}
