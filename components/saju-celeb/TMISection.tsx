"use client";

import { useState } from "react";

const tabs = ["연애·관계", "재물운", "건강운"];

const tabContent: Record<string, { subtitle: string; body: string[] }> = {
  "연애·관계": {
    subtitle: "도화×목(木) 매력—연애·우정 라인",
    body: [
      "도화살로 연애설 빈번하나, 토(土) 24% 기반이 신중함 유지.",
      "수(水) 콘텐츠(Vlog·팬사인회)가 호감도 상승·구설 방어.",
      "멤버·동료 배우와 비견 토(土) 결속—심리적 안정망 역할.",
    ],
  },
  재물운: {
    subtitle: "2도화×목(木) 매력—연애·우정 라인",
    body: [
      "2도화살로 연애설 빈번하나, 토(土) 24% 기반이 신중함 유지.",
      "수(水) 콘텐츠(Vlog·팬사인회)가 호감도 상승·구설 방어.",
      "멤버·동료 배우와 비견 토(土) 결속—심리적 안정망 역할.",
    ],
  },
  건강운: {
    subtitle: "3도화×목(木) 매력—연애·우정 라인",
    body: [
      "3도화살로 연애설 빈번하나, 토(土) 24% 기반이 신중함 유지.",
      "수(水) 콘텐츠(Vlog·팬사인회)가 호감도 상승·구설 방어.",
      "멤버·동료 배우와 비견 토(土) 결속—심리적 안정망 역할.",
    ],
  },
};

export default function TMISection() {
  const [activeTab, setActiveTab] = useState("연애·관계");
  const content = tabContent[activeTab];

  return (
    <section className="w-full py-16" style={{ background: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <p
          className="font-pretendard text-xs tracking-widest font-medium mb-4"
          style={{ color: "#CE8600" }}
        >
          연애부터 건강 까지
        </p>

        {/* Heading */}
        <h2
          className="font-pretendard text-3xl font-bold mb-1"
          style={{ color: "#1a1a1a" }}
        >
          차은우의 사주,
        </h2>
        <h2
          className="font-pretendard text-3xl font-bold mb-4"
          style={{ color: "#CE8600" }}
        >
          TMI 탐구
        </h2>

        {/* Description */}
        <p
          className="font-pretendard text-sm leading-relaxed mb-20"
          style={{ color: "#333333" }}
        >
          별빛 비주얼 뒤 편안한 루틴·건강 비밀을 사주로 해석합니다.
        </p>

        {/* Tab Panel */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid #333333", background: "#fff" }}
        >
          {/* Tab Bar */}
          <div
            className="flex"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-pretendard px-6 py-3 mt-8 text-md font-semibold transition-colors relative"
                style={{
                  color: activeTab === tab ? "#FFA100" : "#333333",
                  background: "transparent",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #FFA100"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-7">
            <h3
              className="font-pretendard text-xl font-bold mb-3"
              style={{ color: "#1a1a1a" }}
            >
              {content.subtitle}
            </h3>
            <ul className="space-y-0.5">
              {content.body.map((line, i) => (
                <li
                  key={i}
                  className="font-pretendard flex gap-1 text-md leading-snug"
                  style={{ color: "#555" }}
                >
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary Box */}
        <div
          className="mt-5 rounded-xl p-6"
          style={{
            background: "#FFF1D1",
            border: "1px solid #CE8600",
          }}
        >
          <h3
            className="font-pretendard text-xl font-bold mb-3"
            style={{ color: "#1a1a1a" }}
          >
            차은우의 사주 핵심 포인트
          </h3>
          <p
            className="font-pretendard text-sm leading-relaxed"
            style={{ color: "#333333" }}
          >
            관계·재물·건강은 각각 따로 움직이지 않고 연결되어 작동합니다.
            차은우의 경우 강점은 빠르게 확장되지만, 피로 신호를 늦게 인지하면
            퍼포먼스가 급격히 흔들릴 수 있어 리듬 관리가 중요합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
