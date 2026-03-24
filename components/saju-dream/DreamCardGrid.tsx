interface DreamCard {
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  score?: string;
}

/* ── 부모 꿈 카드 데이터 ── */
const parentCards: DreamCard[] = [
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
];

/* ── 형제 꿈 카드 데이터 ── */
const siblingCards: DreamCard[] = [
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
];

const CARD_SECTIONS = { parent: parentCards, sibling: siblingCards } as const;

interface DreamCardGridProps {
  sectionLabel: string;
  heading: string;
  sectionKey: keyof typeof CARD_SECTIONS;
  bg?: string;
  dark?: boolean;
}

function tagStyles(tagColor: string, dark: boolean) {
  if (dark) {
    const color =
      tagColor === "gold"
        ? "#c8973a"
        : tagColor === "red"
          ? "#d9534f"
          : "#4caf7d";
    return { color, background: "transparent" };
  }
  const color =
    tagColor === "gold"
      ? "#c8973a"
      : tagColor === "red"
        ? "#d9534f"
        : "#3a8c5c";
  const bg =
    tagColor === "gold"
      ? "#fef6e4"
      : tagColor === "red"
        ? "#fef0f0"
        : "#f0f7f0";
  return { color, background: bg };
}

/* ── Light list row ── */
function DreamRow({ card }: { card: DreamCard }) {
  const tags = card.score ? card.score.split("/").map((t) => t.trim()) : [];

  return (
    <div
      className="flex gap-0"
      style={{
        borderRadius: "0.75rem",
        background: "#fff",
        overflow: "hidden",
        // 💡 오른쪽과 아래쪽에 그림자 추가
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* 왼쪽 박스 */}
      <div
        className="flex flex-col justify-center gap-2 py-6 px-8"
        style={{ minWidth: "220px", width: "240px", flexShrink: 0 }}
      >
        <h3
          className="font-bold text-lg leading-snug"
          style={{ color: "#c8973a" }}
        >
          {card.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {tags.length > 0 ? (
            tags.map((t, i) => (
              <span
                key={t}
                className="text-sm font-bold"
                style={{
                  color:
                    i === 0
                      ? card.tagColor === "red"
                        ? "#d9534f"
                        : card.tagColor === "gold"
                          ? "#c8973a"
                          : "#00AD48"
                      : "#333333",
                }}
              >
                {i > 0 ? "· " : ""}
                {t}
              </span>
            ))
          ) : (
            <span
              className="text-xs px-2 py-0.5 rounded-sm font-medium"
              style={tagStyles(card.tagColor, false)}
            >
              {card.tag}
            </span>
          )}
        </div>
      </div>

      {/* 오른쪽*/}
      <div className="flex items-center py-4 px-5 flex-1">
        <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Dark list row ── */
function DarkRow({ card }: { card: DreamCard }) {
  const tags = card.score ? card.score.split("/").map((t) => t.trim()) : [];
  const primaryColor =
    card.tagColor === "gold"
      ? "#c8973a"
      : card.tagColor === "red"
        ? "#d9534f"
        : "#4caf7d";

  return (
    <div
      className="flex gap-0"
      style={{
        border: "1px solid rgb(113, 113, 113)",
        borderRadius: "0.75rem",
        background: "#242424",
        overflow: "hidden",
      }}
    >
      {/* 왼쪽 박스 */}
      <div
        className="flex flex-col justify-center gap-2 py-4 px-5"
        style={{ minWidth: "220px", width: "240px", flexShrink: 0 }}
      >
        <h3
          className="font-bold text-lg leading-snug"
          style={{ color: "#FFD594" }}
        >
          {card.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {tags.length > 0 ? (
            tags.map((t, i) => (
              <span
                key={t}
                className="text-sm font-bold"
                style={{ color: i === 0 ? primaryColor : "#ffffff" }}
              >
                {i > 0 ? "· " : ""}
                {t}
              </span>
            ))
          ) : (
            <span
              className="text-xs font-medium"
              style={{ color: primaryColor }}
            >
              {card.tag}
            </span>
          )}
        </div>
      </div>

      {/* 💡 기존에 있던 가운데 선(1px div) 삭제됨 */}

      {/* 오른쪽 박스 */}
      <div className="flex items-center py-4 px-5 flex-1">
        <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function DreamCardGrid({
  sectionLabel,
  heading,
  sectionKey,
  bg,
  dark = false,
}: DreamCardGridProps) {
  const cards = CARD_SECTIONS[sectionKey];
  const sectionBg = bg ?? (dark ? "#1a1a1a" : "#f5f0e8");
  const labelColor = dark ? "#c8973a" : "#c8973a";
  const headingColor = dark ? "#e8e3d8" : "#1a1a1a";

  return (
    <section className="w-full py-12" style={{ background: sectionBg }}>
      <div className="mx-auto px-6 max-w-3xl">
        <p className="text-xs font-semibold mb-2" style={{ color: labelColor }}>
          {sectionLabel}
        </p>
        <h2 className="font-bold text-2xl mb-8" style={{ color: headingColor }}>
          {heading}
        </h2>

        <div className="flex flex-col gap-3">
          {cards.map((card, i) =>
            dark ? (
              <DarkRow key={i} card={card} />
            ) : (
              <DreamRow key={i} card={card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
