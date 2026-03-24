"use client";

import Navbar from "../navbar";

const tabs = ["부모", "형제·자매", "자녀", "조부모", "FAQ", "상황별 상세풀이"];

export default function DreamHero() {
  return (
    <section
      className="w-full"
      style={{
        background: "#1a1a1a",
        borderRadius: "0 0 2rem 2rem",
      }}
    >
      {/* ── Header ── (고정, 스크롤 시 움직이지 않음) */}
      <Navbar headerClassName="fixed top-0 left-0 right-0 z-50 bg-white border-[oklch(0.88_0.005_75)]" />

      <div className="max-w-3xl mx-auto px-6 pt-30 pb-7 flex flex-col items-center text-center">
        {/* pill badge */}
        <div
          className="bg-white/10
          font-pretendard
  backdrop-blur-xl
  rounded-full
  px-4.5 py-2
  text-[10px] md:text-[12px]
  text-white
  inline-flex items-center justify-center /* flex를 inline-flex로 변경 */
  leading-none
  shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-2px_6px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.4)]"
        >
          현 파트너·전 애인·백시랑·친구 꿈이 전하는 40가지 리얼 메시지!
        </div>

        {/* title */}
        <h1
          className="font-pretendard font-bold leading-tight mt-5 mb-4 text-balance"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #FFD594, #FFB748)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            가족 친척이 나오는
          </span>
          <br />
          <span style={{ color: "#ffffff" }}>꿈 해몽 총정리</span>
        </h1>

        {/* subtitle */}
        <p
          className="font-pretendard text-lg mb-8"
          style={{
            color: "#ffffff",
            fontFamily: "Jeju Myeongjo, serif",
            lineHeight: "1.7",
          }}
        >
          길몽·흉몽 해석과 현실 행동 팁을 한눈에 확인하세요.
        </p>

        {/* tab nav */}
        <div className="flex flex-wrap justify-center gap-2 pb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className="font-pretendard text-sm px-4 py-1.5 rounded-full transition-colors"
              style={{
                color: "#ffffff",
                border: "0.8px solid #ffffff",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
