"use client";

const PILLARS = [
  {
    imageUrl: "/main/saju-result/icon1.png",
    title: "재물/투자",
    subtitle: "리스크 분산",
    subtitleColor: "#c9a84c",
    desc: "수익 기회와 변동성이 함께 움직입니다. 분할 진입·회수 규칙을 우선하세요.",
    highlight: true,
  },
  {
    imageUrl: "/main/saju-result/icon2.png",
    title: "커리어/사업",
    subtitle: "기회 선점",
    subtitleColor: "#3a7abf",
    desc: "성과 확장보다 포지션 선점이 먼저입니다. 분기별 목표와 복기루틴을 세우세요.",
    highlight: false,
  },
  {
    imageUrl: "/main/saju-result/icon3.png",
    title: "관계/인맥",
    subtitle: "관계 정렬",
    subtitleColor: "#8b5cf6",
    desc: "강한 추진력 뒤엔 마찰이 따릅니다. 갈등구간은 속도 조절과 정리가 중요합니다.",
    highlight: false,
  },
  {
    imageUrl: "/main/saju-result/icon4.png",
    title: "건강/컨디션",
    subtitle: "회복 관리",
    subtitleColor: "#6b9e3f",
    desc: "집중 구간 직후 회복 루틴을 캘린더에 확보하여 후반 피로를 미리 방어하세요.",
    highlight: false,
  },
  {
    imageUrl: "/main/saju-result/icon5.png",
    title: "학습/자기계발",
    subtitle: "집중 학습",
    subtitleColor: "#ec4899",
    desc: "단기 다과목보다 핵심 영역에 집중하고, 결과물 기준의 학습으로 전환하세요.",
    highlight: false,
  },
];

export default function FivePillars() {
  return (
    <section className=" w-full py-14" style={{ background: "#0E0E0E" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mt-10 mb-6">
          <p
            className="text-xs font-semibold tracking-widest mb-2"
            style={{ color: "#FFD594" }}
          >
            5대 영역 운영 가이드
          </p>
          <h2 className="text-2xl md:text-3xl font-black leading-tight text-white">
            삶의 다섯 축,
            <br />
            <span>
              <span style={{ color: "#FFD594" }}>각자의 전략</span>
              <span style={{ color: "#ffffff" }}>이 있습니다.</span>
            </span>
          </h2>
          <p className="text-white text-sm mt-2">
            재물부터 관계, 건강, 커리어, 학습까지.
            <br />
            2026년 당신의 에너지가 각 영역에서 어떻게 작동하는지 파악해보세요.
            <br />
            영역별로 다른 리듬이 존재하며, 균형 잡힌 운영이 전체 성과를
            높입니다.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-15">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden rounded-lg p-5 flex flex-col gap-3 transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(153, 153, 153, 1)",
              }}
            >
              {/* 오른쪽 상단 배경 이미지 */}
              <div className="absolute top-0 right-0 w-24 h-24 flex items-start justify-end  pointer-events-none">
                <img
                  src={p.imageUrl}
                  alt=""
                  className="w-15 h-15 object-contain"
                />
              </div>
              <div>
                <p
                  className="text-[10px] font-semibold tracking-widest"
                  style={{ color: p.subtitleColor }}
                >
                  {p.subtitle}
                </p>
                <h3 className="text-[15px] font-bold text-white mt-0.5">
                  {p.title}
                </h3>
              </div>
              <p className="text-white text-[13px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
