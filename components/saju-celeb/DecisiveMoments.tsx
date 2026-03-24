const periods = [
  {
    title: "계묘 구간의 기반 축적",
    period: "과거 | 18-27세",
    periodChar: "癸卯",
    saju: {
      label: "사주적 원인",
      text: "계묘(癸卯) 대운은 천간 수·지지 목 축으로 목 일간에 작동합니다. 천간은 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높아집니다. 대운 점수는 81점으로 분류 키워드는 SHINE입니다.",
    },
    flow: {
      label: "흐름 해설",
      text: "초반에는 식신·상관·도화살·역마살 성향이 캐릭터 정체성과 합쳐지며 기본 체급을 누적하는 패턴이 강합니다. 당시의 시행착오를 시스템화한 경험이 현재 성과를 버티는 바닥 체력으로 남습니다.",
    },
  },
  {
    title: "계묘 구간의 기반 축적",
    period: "과거 | 18-27세",
    periodChar: "癸卯",
    saju: {
      label: "사주적 원인",
      text: "계묘(癸卯) 대운은 천간 수·지지 목 축으로 목 일간에 작동합니다. 천간은 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높아집니다. 대운 점수는 81점으로 분류 키워드는 SHINE입니다.",
    },
    flow: {
      label: "흐름 해설",
      text: "초반에는 식신·상관·도화살·역마살 성향이 캐릭터 정체성과 합쳐지며 기본 체급을 누적하는 패턴이 강합니다. 당시의 시행착오를 시스템화한 경험이 현재 성과를 버티는 바닥 체력으로 남습니다.",
    },
  },
  {
    title: "계묘 구간의 기반 축적",
    period: "과거 | 18-27세",
    periodChar: "癸卯",
    saju: {
      label: "사주적 원인",
      text: "계묘(癸卯) 대운은 천간 수·지지 목 축으로 목 일간에 작동합니다. 천간은 상대 축의 생조를 받아 협업·지원 자원이 살아나는 흐름입니다. 지지는 동일 오행이 압축되어 성과 폭은 커지지만 과열 관리가 성패를 가릅니다. 용신 축 일부와 연결되어 선택과 집중 시 성과 효율이 높아집니다. 대운 점수는 81점으로 분류 키워드는 SHINE입니다.",
    },
    flow: {
      label: "흐름 해설",
      text: "초반에는 식신·상관·도화살·역마살 성향이 캐릭터 정체성과 합쳐지며 기본 체급을 누적하는 패턴이 강합니다. 당시의 시행착오를 시스템화한 경험이 현재 성과를 버티는 바닥 체력으로 남습니다.",
    },
  },
];

export default function DecisiveMoments() {
  return (
    <section className="w-full py-16" style={{ background: "#0E0E0E" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <p
          className="font-pretendard text-xs tracking-widest mb-4 font-medium"
          style={{ color: "#FFD594" }}
        >
          갑자기 찾아온 순간
        </p>
        <h2
          className="font-pretendard text-3xl font-bold mb-1 text-balance"
          style={{ color: "#f5f0e8" }}
        >
          인생의 <span style={{ color: "#FFD594" }}>결정적</span>{" "}
          {/* 💡 span으로 감싸서 포인트 컬러 적용 */}
        </h2>

        <h2
          className="font-pretendard text-3xl font-bold mb-5"
          style={{ color: "#FFD594" }} // 💡 이 줄은 "순간들"뿐이므로 h2 전체 색상을 변경!
        >
          순간들
        </h2>
        <div
          className="font-pretendard text-sm leading-relaxed mb-12"
          style={{ color: "#ffffff" }}
        >
          <p>차은우 사주는 &quot;준비할 때 누적하고,</p>
          <p>타이밍이 오면 크게 확장하는&quot; 흐름이 선명합니다.</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {periods.map((period, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#242424", border: "1px solid #ffffff" }}
            >
              {/* Card header row */}
              <div
                className="flex items-baseline gap-3 px-8 py-6 border-b"
                style={{ borderColor: "#333" }}
              >
                <h3
                  className="font-pretendard text-lg font-bold"
                  style={{ color: "#FFD594" }}
                >
                  {period.title}
                </h3>
                <span
                  className="font-pretendard text-xs"
                  style={{ color: "#666" }}
                >
                  {period.period} {period.periodChar}
                </span>
              </div>

              {/* Card body — two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* 사주적 원인 */}
                <div
                  className="px-7 py-6 border-b md:border-b-0 md:border-r"
                  style={{ borderColor: "#333" }}
                >
                  <p
                    className="font-pretendard text-sm font-bold mb-1"
                    style={{ color: "#ffffff" }}
                  >
                    {period.saju.label}
                  </p>
                  <p
                    className="font-pretendard text-sm leading-relaxed"
                    style={{ color: "#ffffff", lineHeight: "1.85" }}
                  >
                    {period.saju.text}
                  </p>
                </div>

                {/* 흐름 해설 */}
                <div className="px-7 py-6">
                  <p
                    className="font-pretendard text-sm font-bold mb-1"
                    style={{ color: "#ffffff" }}
                  >
                    {period.flow.label}
                  </p>
                  <p
                    className="font-pretendard text-sm leading-relaxed"
                    style={{ color: "#ffffff", lineHeight: "1.85" }}
                  >
                    {period.flow.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
