"use client";

const HIGHLIGHT_COLORS = {
  gray: "#666666",
  red: "#FF2C30",
  orange: "#FFA100",
} as const;

type HighlightType = keyof typeof HIGHLIGHT_COLORS;

const years: Array<{
  year: string;
  tag: string;
  highlight: HighlightType;
  bullets: string[];
}> = [
  {
    year: "2025년 (을사)",
    tag: "[변화 적응과 포지셔닝]",
    highlight: "gray",
    bullets: [
      "· 을사년은 기존 강점이 시험대에 오르면서도, 동시에 새로운 포맷으로 확장하기 좋은 구간입니다.",
      "· 대외 일정과 협업 제안이 빠르게 늘어나는 만큼, 선택과 집중을 잘하면 체급 상승의 발판을 만듭니다.",
      "· 반응 속도가 빠른 콘텐츠와 라이브형 활동에서 존재감이 커지고, 대중 접점도 넓어집니다.",
      "· 컨디션 관리가 성과를 좌우하므로 수면·회복 루틴을 고정해 기복을 줄이는 전략이 핵심입니다.",
    ],
  },
  {
    year: "2026년 (병오)",
    tag: "[파급력 확장 구간]",
    highlight: "red",
    bullets: [
      "· 병오년은 표현력·실행력·대중 반응이 동시에 뜨거워지며, 커리어 체급이 한 단계 점프하기 쉬운 해입니다.",
      "· 화제성뿐 아니라 실적 지표(콘텐츠 성과·브랜드 영향력·계약 효율)까지 동반 상승하기 좋은 구조입니다.",
      '· 중요한 프로젝트를 전면에 세우면 "잘하는 사람"에서 "판을 이끄는 사람"으로 이미지 전환이 빨라집니다.',
      "· 속도전이 과열되기 쉬우니, 일정 밀도 조정과 회복 블록 확보가 장기 상승세를 지키는 안전장치입니다.",
    ],
  },
  {
    year: "2027년 (정미)",
    tag: "[브랜드 고도화와 수익 안정화]",
    highlight: "orange",
    bullets: [
      "· 정미년은 속도보다 완성도, 단기 화제성보다 브랜드 지속력을 강화하는 해입니다.",
      '· 활동 톤과 메시지를 정리하면 "차은우"이라는 이름의 정체성이 더 선명해지고 팬 충성도도 깊어집니다.',
      "· 단발성 이슈형 선택보다 장기 파트너십·IP 누적형 프로젝트에서 재별 효율이 높아지기 쉽습니다.",
      "· 2026년에 확장한 판을 2027년에 구조화하면, 이후 몇 년간 흔들리지 않는 성장 기반을 확보할 수 있습니다.",
    ],
  },
];

export default function RecentYearsSection() {
  return (
    <section className="w-full  py-16" style={{ background: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <p
          className="text-xs tracking-widest font-medium mb-4"
          style={{ color: "#CE8600" }}
        >
          인물의 변화 포인트
        </p>

        {/* Heading */}
        <h2
          className="text-3xl font-bold mb-1"
          style={{ color: "#CE8600", fontFamily: "inherit" }}
        >
          최근 3년 흐름
        </h2>
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#1a1a1a", fontFamily: "inherit" }}
        >
          년도별 풀이
        </h2>

        {/* Description */}
        <div
          className="text-sm leading-relaxed mb-15"
          style={{ color: "#888" }}
        >
          <p>2025년(을사)부터 2027년(정미)까지,</p>
          <p>
            차은우의 커리어·관계·컨디션 변화를 실전형 포인트로 정리했습니다.
          </p>
        </div>

        {/* Year Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
          {years.map((year, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                background: "#fff",
                border: `2px solid ${HIGHLIGHT_COLORS[year.highlight]}`,
                // 💡 아주 연하게 오른쪽/아래쪽에만 그림자 추가
                boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.04)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>
                {year.year}
              </p>
              <p
                className="text-lg font-bold mb-4"
                style={{ color: HIGHLIGHT_COLORS[year.highlight] }}
              >
                {year.tag}
              </p>
              <ul className="space-y-2">
                {year.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "#FFF1D1",
            border: "1px solid #CE8600",
          }}
        >
          <h3 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
            최근 3년 흐름 심화 해석
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
            최근 3년은 차은우의 커리어·관계·컨디션이 동시에 작동하는 구간입니다.
            기회가 들어오는 타이밍과 휴식 타이밍을 함께 설계하면, 반짝 상승이
            아니라 지속 가능한 상승 흐름으로 연결할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
