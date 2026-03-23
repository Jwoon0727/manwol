"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  element: string;
  percent: number;
  sublabel: string;
}

function StatCard({ element, percent, sublabel }: StatCardProps) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.round(eased * percent * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div
      ref={ref}
      className="rounded-2xl px-6 py-8 text-center"
      style={{ background: "#fff", border: "1px solid #e8e0d0" }}
    >
      <p
        className="text-2xl font-bold font-serif mb-2"
        style={{ color: "#c8973a" }}
      >
        {element} {displayed.toFixed(1)}%
      </p>
      <p className="text-sm" style={{ color: "#666" }}>
        {sublabel}
      </p>
    </div>
  );
}

function PentagonChart() {
  const size = 340;
  const center = size / 2;
  const r = 120;
  const values = [0, 0, 0, 0, 0];
  const n = values.length;

  const angleOffset = -Math.PI / 2;

  const getPoint = (i: number, radius: number) => {
    const angle = angleOffset + (2 * Math.PI * i) / n;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const outerPoints = Array.from({ length: n }, (_, i) => getPoint(i, r));
  const dataPoints = Array.from({ length: n }, (_, i) =>
    getPoint(i, (r * values[i]) / 0.35),
  );
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  const outerPath =
    outerPoints
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ") + " Z";
  const dataPath =
    dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") +
    " Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto block"
    >
      {gridLevels.map((level) => {
        const pts = Array.from({ length: n }, (_, i) => getPoint(i, r * level));
        const path =
          pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") +
          " Z";
        return (
          <path
            key={level}
            d={path}
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
          />
        );
      })}
      {outerPoints.map((p, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={p.x}
          y2={p.y}
          stroke="#ddd"
          strokeWidth="1"
        />
      ))}
      <path
        d={dataPath}
        fill="rgba(200,151,58,0.18)"
        stroke="#c8973a"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function HighlightsSection() {
  return (
    <section className="w-full py-16 bg-[url('/sub/celeb-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl mx-auto px-6">
        {/* Label + Heading */}
        <p
          className="text-xs tracking-widest mb-3 font-medium"
          style={{ color: "#CE8600" }}
        >
          하이라이트
        </p>
        <h2
          className="text-3xl font-bold  mb-1 text-balance"
          style={{ color: "#1a1a1a" }}
        >
          한눈에 보는
        </h2>
        <h2
          className="text-3xl font-bold  mb-10 text-balance"
          style={{ color: "#CE8600" }}
        >
          사주 하이라이트
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 mb-15">
          {/* 카드 1 */}
          <div className="font-sans rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,0.1)] bg-white">
            <StatCard
              element="화(火)"
              percent={30}
              sublabel="무대 장악·에너지"
            />
          </div>

          {/* 카드 2 */}
          <div className="font-sans rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,0.1)] bg-white">
            <StatCard
              element="목(木)"
              percent={24.9}
              sublabel="성장·창의·연기력"
            />
          </div>

          {/* 카드 3 */}
          <div className="font-sans rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,0.1)] bg-white">
            <StatCard
              element="토(土)"
              percent={23.6}
              sublabel="근성·피지컬 밸런스"
            />
          </div>
        </div>

        {/* Analysis Subheading */}
        <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
          오행 분석: 불·나무·대지의 균형
        </h3>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "#555" }}>
          화(火) 30%가 무대 에너지·카리스마를, 목(木) 25%가 성장·연기 변신을,
          토(土) 24%가 근성·체력을 담당합니다.
          <br /> 금(金) 9.5%·수(水) 12%는 섬세한 디테일·팬소통을 안정적으로
          뒷받침합니다.
        </p>

        {/* Chart + Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Pentagon Chart */}
          <div
            className="rounded-2xl p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] min-h-[450px] flex flex-col"
            style={{ background: "#fff" }}
          >
            {/* 상단 텍스트 */}
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#333333" }}
            >
              차은우 오행 에너지 분포
            </p>

            {/* 차트 영역 (flex-1을 주어 남는 세로 공간을 모두 차지하며 중앙 정렬되게 함) */}
            <div className="flex-1 flex items-center justify-center">
              <PentagonChart />
            </div>

            {/* 하단 텍스트 */}
            <p
              className="text-xs text-center mt-4"
              style={{ color: "#333333" }}
            >
              그래프 꼭짓점을 눌러 세부 해설을 확인하세요.
            </p>
          </div>

          {/* Right: Gold highlight + two cards */}
          <div className="flex flex-col gap-4">
            {/* Gold box */}
            <div
              className="rounded-2xl px-6 py-5 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]"
              style={{ background: "#FECF61" }}
            >
              <p
                className="text-base font-bold text-center leading-relaxed"
                style={{ color: "#333333" }}
              >
                화(火)-목(木) 조합이 &apos;아이돌·배우&apos; 투트랙을 가능케
                하는 원동력입니다.
              </p>
            </div>

            {/* 오행 결과 풀이 */}
            <div
              className="rounded-2xl px-6 py-5 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]"
              style={{ background: "#fff" }}
            >
              <h4
                className="text-base font-bold mb-2"
                style={{ color: "#CE8600" }}
              >
                오행 결과 풀이
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
                차은우의 오행 분포는 강한 기운을 장점으로 밀어주고, 약한 기운은
                생활 루틴에서 보완할수록 성과가 더 안정적으로 누적되는
                구조입니다. 특히 활동량이 큰 시기에는 컨디션·관계·일정 관리가
                오행 균형을 유지하는 핵심 포인트로 작동합니다.
              </p>
            </div>

            {/* 용신 풀이 */}
            <div
              className="rounded-2xl px-6 py-5 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]"
              style={{ background: "#fff" }}
            >
              <h4
                className="text-base font-bold mb-2"
                style={{ color: "#CE8600" }}
              >
                용신 풀이
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
                용신은 과한 기운을 조절하고 부족한 기운을 채워 전체 흐름을 균형
                있게 만드는 역할을 합니다. 차은우의 경우 프로젝트 선택, 휴식
                주기, 협업 방식에서 용신 방향성을 반영할수록 체감 성과와
                만족도가 함께 올라가기 쉽습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
