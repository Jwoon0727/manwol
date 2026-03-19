"use client";

const DEDUCTION_BALANCE = [
  { label: "목(木)", value: 18.4, color: "#60B43A" },
  { label: "화(火)", value: 44.1, color: "#D63A3A" },
  { label: "토(土)", value: 18.4, color: "#CE8600" },
  { label: "금(金)", value: 18.4, color: "#F1BF4A" },
  { label: "수(水)", value: 18.4, color: "#4493CB" },
];

const SUMMARY_STATS = [
  { label: "HARMONY (합)", value: "3", sub: "전년比 +1" },
  { label: "TENSION (충)", value: "0", sub: "완전 활용" },
  { label: "SHINSA (신살)", value: "25", sub: "만원" },
  { label: "TOPIC MODULE", value: "9", sub: "만원" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-14 overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/main/saju-result/bg.png")',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-8">
          <p
            className="text-xs font-semibold tracking-widest mb-1"
            style={{ color: "#c9a84c" }}
          >
            핵심 지표 대시보드
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
            숫자로 보는
            <br />
            <span style={{ color: "#c9a84c" }}>나의 환급</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            사주 명식의 핵심 수치를 데이터로 시각화합니다. <br />
            합(合)의 연결, 충(沖)의 긴장, 오행의 분포가 만드는 <br />
            당신만의 에너지 지형도.
          </p>
        </div>

        {/* 4 stat boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {SUMMARY_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-5 flex flex-col items-center justify-center gap-1 text-center"
              style={{
                background: "#ffffff",
                boxShadow: "6px 6px 12px rgba(0,0,0,0.08)",
              }}
            >
              <span className="text-4xl font-black text-foreground">
                {s.value}
              </span>
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: "#c9a84c" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Deduction balance bars */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            기초 오행 밸런스
          </h3>
          {/* 오행 밸런스 */}
          <div
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{
              background: "#ffffff",
              boxShadow: "4px 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            {DEDUCTION_BALANCE.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span
                  className="text-sm font-bold w-16 shrink-0"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
                <div
                  className="flex-1 h-2.5 rounded-full"
                  style={{ background: "#f3f4f6" }}
                >
                  <div
                    className="h-2.5 rounded-full transition-all duration-700"
                    style={{
                      width: `${item.value}%`,
                      background: item.color,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-12 text-right shrink-0">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
