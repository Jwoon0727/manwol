"use client";

interface DetailRow {
  question: string;
  keywords?: string;
  left: { label: string; body: string };
  right: { label: string; body: string };
}

/* ── 부모 꿈 상세 해몽 패널 데이터 ── */
const parentDetailGroups: { groupTitle: string; rows: DetailRow[] }[] = [
  {
    groupTitle: "엄마 관련 꿈 – 연락·감정·돌봄",
    rows: [
      {
        question: "엄마가 늦은 밤에 계속 전화하는 꿈 해몽",
        keywords: "키워드: 심야 전화, 걱정, 정서적 의존, 가족 소식",
        left: {
          label: "꿈 내용",
          body: '엄마가 밤마다 전화를 거는 장면은, "나 요즘 좀 지친 거 같지?" 하고 내 마음이 스스로에게 보내는 SOS일 수 있습니다. 누가 꼭 문제를 일으킨 건 아니지만, 일·가사·돌봄 사이에서 정신없는 시기일 가능성이 커요.',
        },
        right: {
          label: "현실 TIP",
          body: "실제 엄마에게도 안부 전화를 한 번 넣고, 내 일상도 점검해 보세요. 잠들기 전 30분이라도 휴대폰을 멀리 두고 쉬는 루틴을 만들면 불안감이 줄어듭니다.",
        },
      },
      {
        question: "엄마가 밥을 차려주는 꿈 — 어떤 의미를 담고 있는 해몽",
        keywords: "키워드: 돌봄, 풍요, 정서적 안정, 재물",
        left: {
          label: "꿈 내용",
          body: "어머니가 정성껏 밥상을 차려주는 꿈은 심리적 충만함과 재물의 풍요를 동시에 상징합니다. 현실에서 에너지가 회복되는 국면에 진입했음을 알리는 신호입니다.",
        },
        right: {
          label: "현실 TIP",
          body: "이 시기에는 새로운 도전이나 투자를 시작하기 좋습니다. 내 몸과 마음을 먼저 채우고 나서 주변을 돌봐주세요.",
        },
      },
      {
        question: "엄마가 아프거나 쓰러지는 꿈 해몽",
        keywords: "키워드: 건강 불안, 가족 걱정, 무기력감",
        left: {
          label: "꿈 내용",
          body: "가족 중 어른이 아픈 꿈은 실제 건강 걱정이 투영된 경우가 많습니다. 동시에 내 자신이 지나치게 지쳐 있다는 내면의 경고일 수 있습니다.",
        },
        right: {
          label: "현실 TIP",
          body: "실제 어머니 안부를 확인하고 정기검진을 권유해 보세요. 본인의 수면과 식사도 함께 점검하세요.",
        },
      },
    ],
  },
  {
    groupTitle: "아빠 관련 꿈 – 권위·경제·진로",
    rows: [
      {
        question: "아빠가 화를 내는 꿈 — 어떤 의미를 담고 있는 해몽",
        keywords: "키워드: 권위 갈등, 직장 압박, 결정 불안",
        left: {
          label: "꿈 내용",
          body: "아버지가 꾸짖거나 화를 내는 꿈은 현실의 권위 있는 존재(상사, 선배, 규칙)에 대한 압박감이 반영된 것입니다. 미루고 있던 숙제가 있다면 지금 정리할 타이밍입니다.",
        },
        right: {
          label: "현실 TIP",
          body: "직장이나 진로와 관련된 결정을 미뤄왔다면 이번 주 안에 첫 걸음을 내딛어 보세요. 행동 자체가 불안을 줄여줍니다.",
        },
      },
      {
        question: "아빠가 선물을 주는 꿈 — 어떤 의미를 담고 있는 해몽",
        keywords: "키워드: 재물 수혜, 기회 인계, 지지",
        left: {
          label: "꿈 내용",
          body: "아버지에게 선물이나 돈을 받는 꿈은 외부 지원이나 기회가 다가오고 있음을 상징합니다. 특히 사업·투자·취업 관련 좋은 소식이 올 수 있습니다.",
        },
        right: {
          label: "현실 TIP",
          body: "적극적으로 기회를 찾고, 주변 인맥을 통해 정보를 모으세요. 이 시기의 협력은 장기적인 성과로 이어집니다.",
        },
      },
      {
        question: "돌아가신 아버지가 나오는 꿈 해몽",
        keywords: "키워드: 추억, 내면 지혜, 중요한 결정",
        left: {
          label: "꿈 내용",
          body: "고인이 된 아버지가 꿈에 나타나는 것은 중요한 결정을 앞두고 내면의 지혜나 원칙을 되새기라는 신호입니다. 그리움과 지지가 복합된 꿈입니다.",
        },
        right: {
          label: "현실 TIP",
          body: "지금 내려야 할 결정에서 스스로의 원칙과 가치를 먼저 점검해 보세요. 직관을 믿는 것이 이 시기의 핵심입니다.",
        },
      },
    ],
  },
];

/* ── 친족 꿈 상세 해몽 패널 데이터 ── */
const relativeDetailGroups: { groupTitle: string; rows: DetailRow[] }[] = [
  {
    groupTitle: "엄마 관련 꿈 – 연락·감정·돌봄",
    rows: [
      {
        question: "엄마가 늦은 밤에 계속 전화하는 꿈 해몽",
        keywords: "키워드: 심야 전화, 걱정, 정서적 의존, 가족 소식",
        left: {
          label: "꿈 내용",
          body: '엄마가 밤마다 전화를 거는 장면은, "나 요즘 좀 지친 거 같지?" 하고 내 마음이 스스로에게 보내는 SOS일 수 있습니다. 일·가사·돌봄 사이에서 정신없는 시기일 가능성이 큽니다.',
        },
        right: {
          label: "현실 TIP",
          body: "실제 엄마에게도 안부 전화를 한 번 넣고, 내 일상도 점검해 보세요. 잠들기 전 30분이라도 휴대폰을 멀리 두고 쉬는 루틴을 만들면 불안감이 줄어듭니다.",
        },
      },
      {
        question: "엄마가 돌봐 주는 꿈 — 어떤 의미를 담고 있는 해몽",
        keywords: "키워드: 돌봄 욕구, 지지, 안정, 회복",
        left: {
          label: "꿈 내용",
          body: "보살핌을 받는 꿈은 현실에서 지원받고 싶다는 내면의 욕구를 반영합니다. 과로나 고립감이 있을 때 자주 등장하며, 재충전이 필요한 시기임을 알려줍니다.",
        },
        right: {
          label: "현실 TIP",
          body: "도움을 요청하는 것을 두려워하지 마세요. 주변의 지원 네트워크를 적극적으로 활용하세요.",
        },
      },
      {
        question: "엄마가 웃으면서 손을 흔드는 꿈 해몽",
        keywords: "키워드: 이별, 새출발, 격려, 독립",
        left: {
          label: "꿈 내용",
          body: "웃으면서 손을 흔드는 장면은 이별이 아닌 응원과 독립의 신호입니다. 새로운 단계로 나아가도 된다는 내면의 허락이 담긴 꿈입니다.",
        },
        right: {
          label: "현실 TIP",
          body: "새로운 도전이나 독립적인 결정을 앞두고 있다면 자신감을 가지세요. 준비가 충분히 되어 있습니다.",
        },
      },
    ],
  },
  {
    groupTitle: "아빠 관련 꿈 – 권위·경제·진로",
    rows: [
      {
        question: "아빠가 조용히 바라보는 꿈 해몽",
        keywords: "키워드: 묵묵한 지지, 책임감, 자립",
        left: {
          label: "꿈 내용",
          body: "말없이 바라보는 아버지의 모습은 현재 내가 하는 일에 대한 묵묵한 응원을 상징합니다. 책임감이 높아지는 시기에 자주 나타나는 꿈 유형입니다.",
        },
        right: {
          label: "현실 TIP",
          body: "지금 하고 있는 일을 묵묵히 이어가세요. 결과가 나오기까지 시간이 걸리더라도 방향은 맞습니다.",
        },
      },
      {
        question: "아빠와 함께 밥을 먹는 꿈 해몽",
        keywords: "키워드: 화합, 재물, 관계 안정",
        left: {
          label: "꿈 내용",
          body: "아버지와 함께 식사하는 꿈은 가족 관계의 안정과 재물 운의 상승을 동시에 암시합니다. 심리적 화해나 관계 개선의 신호이기도 합니다.",
        },
        right: {
          label: "현실 TIP",
          body: "이 시기에는 가족과의 식사나 모임을 적극적으로 계획하세요. 작은 연결이 큰 안정감으로 돌아옵니다.",
        },
      },
    ],
  },
];

const DETAIL_SECTIONS = {
  parent: parentDetailGroups,
  relative: relativeDetailGroups,
} as const;

interface DreamDetailPanelProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  description?: string;
  dark?: boolean;
  sectionKey: keyof typeof DETAIL_SECTIONS;
}

function DetailCard({ row, dark }: { row: DetailRow; dark: boolean }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${dark ? "#ffffff" : "#333333"}`,
        background: dark ? "#242424" : "#ffffff",
      }}
    >
      {/* question header row */}
      <div
        className="flex items-baseline flex-wrap gap-x-3 gap-y-1 px-8 py-5"
        style={{ borderBottom: `0.1px solid ${dark ? "#ffffff" : "#333333"}` }}
      >
        <p
          className="text-lg font-semibold"
          style={{ color: dark ? "#e8e3d8" : "#1a1a1a" }}
        >
          {row.question}
        </p>
        {row.keywords && (
          <span className="text-xs" style={{ color: dark ? "#666" : "#999" }}>
            {row.keywords}
          </span>
        )}
      </div>
      {/* two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* 왼쪽 박스 */}
        <div className="px-8 py-5">
          <p
            className="text-sm font-bold mb-2"
            style={{ color: dark ? "#ffffff" : "#333333" }}
          >
            {row.left.label}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: dark ? "#ffffff" : "#333333" }}
          >
            {row.left.body}
          </p>
        </div>

        {/* 오른쪽 박스 */}
        <div className="px-8 py-5">
          <p
            className="text-sm font-bold mb-2"
            style={{ color: dark ? "#FFD594" : "#CE8600" }}
          >
            {row.right.label}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: dark ? "#FFD594" : "#CE8600" }}
          >
            {row.right.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DreamDetailPanel({
  sectionLabel,
  heading,
  subheading,
  description,
  dark = true,
  sectionKey,
}: DreamDetailPanelProps) {
  const groups = DETAIL_SECTIONS[sectionKey];

  return (
    <section
      className="w-full py-14"
      style={{ background: dark ? "#0E0E0E" : "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* header */}
        <p className="text-xs font-semibold mb-3" style={{ color: "#FFD594" }}>
          {sectionLabel}
        </p>
        <h2
          className="font-bold leading-tight mb-1"
          style={{ fontSize: "1.6rem", color: dark ? "#FFD594" : "#CE8600" }}
        >
          {heading}
        </h2>
        <p
          className="font-bold mb-4"
          style={{ fontSize: "1.6rem", color: dark ? "#ffffff" : "#1a1a1a" }}
        >
          {subheading}
        </p>
        {description && (
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: dark ? "#ffffff" : "#666" }}
          >
            {description}
          </p>
        )}

        <div className="flex flex-col gap-10">
          {groups.map((group, gi) => (
            <div key={gi}>
              <h3
                className="text-xl font-bold mb-4 pb-2"
                style={{ color: dark ? "#FFD594" : "#CE8600" }}
              >
                {group.groupTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {group.rows.map((row, ri) => (
                  <DetailCard key={ri} row={row} dark={dark} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
