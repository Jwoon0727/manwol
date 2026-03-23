"use client";

import { useRef } from "react";

const periods = [
  {
    range: "8-17세 壬寅",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
  {
    range: "18-27세 癸卯",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
  {
    range: "28-37세 甲辰",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
  {
    range: "38-47세 乙巳",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
  {
    range: "48-57세 丙午",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
  {
    range: "58-67세 丁未",
    label: "용신 풀이",
    content:
      "2005–2014 구간은 천간 수·지지 목 흐름이 차은우의 목 일간에 보호·지원 유입/같은 오행 증폭로 작동합니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높습니다. 천간 레이어는 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지 레이어는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 실전 운영에서는 대중 반응이 살아나는 구간이라 포맷 고정과 시그니처 브랜딩이 효율적입니다.",
  },
];

export default function DaeunTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-14" style={{ background: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <p
          className="text-xs tracking-widest mb-3 font-medium"
          style={{ color: "#c8973a" }}
        >
          대운의 시기는?
        </p>

        {/* Heading */}
        <h2
          className="font-bold text-balance leading-tight"
          style={{ fontSize: "2rem", color: "#c8973a" }}
        >
          대운 타임라인:
        </h2>
        <h2
          className="font-bold mb-4 leading-tight"
          style={{ fontSize: "2rem", color: "#1a1a1a" }}
        >
          8세 → 100세
        </h2>

        {/* Description */}
        <div
          className="text-sm leading-relaxed mb-10"
          style={{ color: "#666" }}
        >
          <p>출생시각 미상(12:00 기준)으로 계산한 대운 흐름입니다.</p>
          <p>
            현재는 28-37세 甲辰 구간으로, HOT 리듬에서 확장과 안정의 균형이
            핵심입니다.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4" // 💡 기존의 -mr-6 제거
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            // 💡 핵심 1: 부모 너비를 뚫고 화면 오른쪽 끝까지 스크롤 영역을 늘립니다.
            marginRight: "calc(50% - 50vw)",
            // 💡 핵심 2: 스크롤을 끝까지 넘겼을 때 마지막 카드가 화면 모서리에 딱 붙지 않도록 안쪽 여백을 줍니다.
            paddingRight: "calc(50vw - 50% + 1.5rem)",
          }}
        >
          {periods.map((period, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-xl p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.1),-1px_-1px_0px_rgba(0,0,0,0.04)]"
              style={{
                background: "#ffffff",
                width: "280px",
                scrollSnapAlign: "start",
              }}
            >
              {/* Age range */}
              <p
                className="text-[16px] font-bold mb-1"
                style={{ color: "#1a1a1a" }}
              >
                {period.range}
              </p>
              {/* Subtitle */}
              <p
                className="text-[20px] font-bold mb-4"
                style={{ color: "#c8973a" }}
              >
                {period.label}
              </p>
              {/* Body */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#555", wordBreak: "keep-all" }}
              >
                {period.content}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint fade — CSS only */}
        <style>{`
          div[style*="overflow-x"]::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
