interface DreamCard {
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  score?: string;
}

interface DreamCardGridProps {
  sectionLabel: string;
  heading: string;
  cards: DreamCard[];
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
        border: "1px solid #333",
        borderRadius: "0.75rem",
        background: "#242424",
        overflow: "hidden",
      }}
    >
      <div
        className="flex flex-col justify-center gap-2 py-4 px-5"
        style={{ minWidth: "220px", width: "240px", flexShrink: 0 }}
      >
        <h3
          className="font-bold text-sm leading-snug"
          style={{ color: "#e8e3d8" }}
        >
          {card.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {tags.length > 0 ? (
            tags.map((t, i) => (
              <span
                key={t}
                className="text-xs"
                style={{ color: i === 0 ? primaryColor : "#888" }}
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

      <div style={{ width: "1px", background: "#333", flexShrink: 0 }} />

      <div className="flex items-center py-4 px-5 flex-1">
        <p className="text-sm leading-relaxed" style={{ color: "#aaa" }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Light list row ── */
function DreamRow({ card }: { card: DreamCard }) {
  const tags = card.score ? card.score.split("/").map((t) => t.trim()) : [];

  return (
    <div
      className="flex gap-0"
      style={{
        border: "1px solid #e0dbd0",
        borderRadius: "0.75rem",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        className="flex flex-col justify-center gap-2 py-4 px-5"
        style={{ minWidth: "220px", width: "240px", flexShrink: 0 }}
      >
        <h3
          className="font-bold text-sm leading-snug"
          style={{ color: "#c8973a" }}
        >
          {card.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {tags.length > 0 ? (
            tags.map((t, i) => (
              <span
                key={t}
                className="text-xs"
                style={{
                  color:
                    i === 0
                      ? card.tagColor === "red"
                        ? "#d9534f"
                        : card.tagColor === "gold"
                          ? "#c8973a"
                          : "#3a8c5c"
                      : "#888",
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

      <div style={{ width: "1px", background: "#e0dbd0", flexShrink: 0 }} />

      <div className="flex items-center py-4 px-5 flex-1">
        <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function DreamCardGrid({
  sectionLabel,
  heading,
  cards,
  bg,
  dark = false,
}: DreamCardGridProps) {
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
