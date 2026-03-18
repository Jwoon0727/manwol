"use client";

import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-b-[4rem]"
      style={{ background: "#111111" }}
    >
      {/* ── Header ── (고정, 스크롤 시 움직이지 않음) */}
      <Navbar headerClassName="fixed top-0 left-0 right-0 z-50 bg-white border-[oklch(0.88_0.005_75)]" />

      {/* Upper half */}
      <div className="max-w-6xl mx-auto px-8 pt-[90px] md:pt-[110px] pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0">
            {/* Badge row — 글래스 모피즘 */}
            <div className="flex items-center gap-2 mb-7 pt-8">
              <span
                className="
                bg-white/10
                backdrop-blur-xl
                rounded-full
                px-3.5 py-1
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-2px_6px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.4)]
              "
              >
                2026 ANNUAL BRIEF
              </span>
              <span
                className="px-3.5 py-1.5 text-[14px] font-bold tracking-wider rounded-full backdrop-blur-md"
                style={{
                  background: "rgba(255, 217, 0, 0.1)",
                  color: "#FFC800",
                  boxShadow:
                    "inset 0 1px 2px rgba(255,255,255,0.35), inset 0 -2px 6px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(233,217,172,0.18), 0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                도약 국면
              </span>
            </div>

            {/* Title */}
            <div className="mb-4" style={{ fontFamily: "Yeongwol, serif" }}>
              <h1
                className="font-medium leading-none text-white"
                style={{
                  fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                2026 병오년
              </h1>
              <h2
                className="font-medium leading-none bg-gradient-to-r from-[#FFD594] to-[#FFB748] bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(5.5rem, 9.5vw, 7.5rem)",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 30px rgba(201,168,76,0.25)",
                }}
              >
                신년운세
              </h2>
              <p
                className="mt-0.5 text-white text-lg font-medium mb-8"
                style={{ fontFamily: "JejuMyeongjo, serif" }}
              >
                <span style={{ color: "#FFD594" }}>권준석님</span>의 2026 병오년
                마스터 로드맵
              </p>
            </div>

            {/* Profile row */}
            <div className="flex items-start gap-3 mt-6 mb-7">
              <div className="w-23 h-23 rounded-full overflow-hidden flex-shrink-0 border border-[#FFCD37]">
                <img
                  src="/main/saju-result/profile01.png"
                  alt="아이콘"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="ml-2 flex items-center gap-2 mb-3">
                  <span className="text-white font-bold text-lg">도연선생</span>
                  <span className="text-white/40 text-sm">
                    사주·운세 전문 상담
                  </span>
                </div>
                <p className="ml-2 text-white text-sm mt-0.5 leading-relaxed">
                  확장과 실행에 유리한 흐름입니다.
                  <br />
                  기회를 선점하는 전략이 중요합니다.
                </p>
              </div>
            </div>

            {/* Info bar: 양력 / 음력 / 지역 */}
            <div className="w-fit">
              <div
                className="inline-flex text-sm rounded-lg overflow-hidden relative mb-8"
                style={{
                  border: "1px solid rgba(153, 153, 153, 1)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {[
                  { label: "양력", value: "1988년 05월 11일 15시 40분" },
                  { label: "음력", value: "1988년 3월 26일 15시 40분" },
                  { label: "지역", value: "서울특별시" },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className="relative px-6 py-4 flex-shrink-0"
                  >
                    {/* 내용 */}
                    <p className="text-[#FFD594] text-[14px] font-medium tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-white/80 text-[16px] leading-snug">
                      {item.value}
                    </p>

                    {/* 가운데 bar */}
                    {i < arr.length - 1 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[30%] w-px bg-[#FFD594]/70" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="mr-20 flex flex-col items-center lg:items-end justify-start gap-10 lg:pl-12 flex-shrink-0 pt-10">
            {/* Concentric circle diagram */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: 250, height: 250 }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: 250,
                  height: 250,
                  border: "0.1px solid rgba(255, 213, 148, 0.2)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: 200,
                  height: 200,
                  border: "0.1px solid rgba(255, 213, 148, 0.2)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: 150,
                  height: 150,
                  border: "0.1px solid rgba(255, 213, 148, 0.2)",
                }}
              />
              <div
                className="bg-[#FFD594]/20 absolute rounded-full flex items-center justify-center border border-white/15"
                style={{
                  width: 90,
                  height: 90,
                }}
              >
                <span className="text-[#FFD594] font-black text-xl tracking-wide">
                  丙午
                </span>
              </div>

              {/* 3개의 원 — 각 원 위에 점 하나씩 (바깥·중간·안쪽) */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  background: "#FFD594",
                  top: "85%",
                  left: "85%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  background: "#FFFFFF",
                  top: "12%",
                  left: "63%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  background: "#45C4FF",
                  top: "29%",
                  left: "29%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            {/* Stats row */}
            <div
              className="flex gap-16 text-center self-end -mr-8 lg:-mr-12"
              style={{ fontFamily: "MuseumClassic" }}
            >
              {[
                { value: "25", label: "신살" },
                { value: "9", label: "분석 모듈" },
                { value: "44.1%", label: "화(火) 비율" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[#FFD594] font-black leading-none"
                    style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* 格局 meta text */}
            <div
              className="text-center text-[15px] leading-relaxed self-center w-full mt-7"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <p>格局 건록격 ｜ 用神 수(水) / 목(木)</p>
              <p>세운 丙午(병오) ｜ 대운 계축 2020–2029</p>
              <p>원국 戊辰 / 丁巳 / 丙寅 / 乙未</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower half — 세 가지 축 */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left slogan */}
          <div className="flex-shrink-0 lg:w-48 mt-6 lg:mt-8">
            <p className="text-white text-2xl leading-snug font-medium">
              당신의 2026,
            </p>
            <p className="text-[#FFD594] text-2xl leading-snug font-semibold tracking-tight">
              세 가지 축으로
              <br />
              읽습니다.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 mb-25">
            {[
              {
                type: "OPPORTUNITY",
                typeColor: "#4493CB",
                borderColor: "rgba(255, 213, 148, 1)",
                title: "기회축: 수(水)",
                desc: "수(水) 에너지가 살아나는 시기에 성과가 집중될 가능성이 큽니다. 확장 액션은 분할 실행이 유리합니다.",
              },
              {
                type: "RISK",
                typeColor: "#D63A3A",
                borderColor: "rgba(255, 213, 148, 1)",
                title: "주의축: 과열/과속 관리",
                desc: "대형 결정은 단일 판단보다 2단계 검증이 안전합니다. 감정 기반 결정보다 데이터 점검을 우선하세요.",
              },
              {
                type: "STRATEGY",
                typeColor: "#60B43A",
                borderColor: "rgba(255, 213, 148, 1)",
                title: "운영축: 목(木) 보완",
                desc: "목(木) 보완 루틴을 함께 운영하면 연간 변동성 대응력이 좋아집니다. 계획-실행-복기 주기를 유지하세요.",
              },
            ].map((card) => (
              <div
                key={card.type}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${card.borderColor}`,
                }}
              >
                <p
                  className="text-[11px] font-medium tracking-widest mb-0.5"
                  style={{ color: card.typeColor }}
                >
                  {card.type}
                </p>
                <p className="text-white font-bold text-[18px] mb-2 leading-snug">
                  {card.title}
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
