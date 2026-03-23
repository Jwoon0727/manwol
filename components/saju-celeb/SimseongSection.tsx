const cards = [
  {
    title: "식신·상관",
    desc: "보컬·연기 표현력",
  },
  {
    title: "도화살",
    desc: "압도적 비주얼·팬심",
  },
  {
    title: "역마살",
    desc: "월드투어·글로벌 촬영",
  },
  {
    title: "천을귀인",
    desc: "결정력 조력자 운.",
  },
  {
    title: "화개살",
    desc: "힐링·예술 감성.",
  },
  {
    title: "문창귀인",
    desc: "대본 해석·창작",
  },
  {
    title: "공망(空)",
    desc: "계약·피로 리스크",
  },
  {
    title: "더 많은 항목....",
    desc: "만월성 357종 신살 백과에서 확인!",
  },
];

export default function SimseongSection() {
  return (
    <section className="w-full py-14" style={{ background: "#0E0E0E" }}>
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="text-xs tracking-widest mb-1"
          style={{ color: "#FFD594" }}
        >
          십성 & 신살
        </p>
        <h2
          className="text-3xl font-bold  mb-2 text-balance"
          style={{ color: "#f5f0e8" }}
        >
          십성 & 신살:
        </h2>
        <h2 className="text-3xl font-bold mb-3" style={{ color: "#FFD594" }}>
          숨은 무기와 변수
        </h2>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "#ffffff" }}
        >
          신미 일간 + 도화·역마·천을 조합이 ‘비주얼·글로벌 활동’을, <br />
          문창·화개가 ‘음악·연기 감성’을 강화합니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg p-5"
              style={{
                background: "#2a2a2a",
                border: "1px solid #999999",
              }}
            >
              <h3
                className="text-sm font-bold mb-1"
                style={{ color: "#FFD594" }}
              >
                {card.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#ffffff" }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
