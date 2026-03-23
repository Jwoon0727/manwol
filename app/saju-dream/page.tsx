import DreamHero from "@/components/saju-dream/DreamHero";
import DreamCardGrid from "@/components/saju-dream/DreamCardGrid";
import DreamAccordion60 from "@/components/saju-dream/DreamAccordion60";
import DreamDetailPanel from "@/components/saju-dream/DreamDetailPanel";
import DreamFAQ from "@/components/saju-dream/DreamFAQ";

/* ── Section 2: 부모 꿈 카드 데이터 ── */
const parentCards = [
  {
    title: "어머니가 환하게 웃는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "엄마 미소 = 마음 통장 이자! 고생-꿈-행복-시작 무드로 포인트-세금환급-중고 거래까지 돈이 스르륵 모여요. 감사 메시지 보내면 '훈훈 + 재물' 두 마리 토끼 확정.",
    score: "길몽 / 보호 / 풍요",
  },
  {
    title: "어머니가 우시는 꿈",
    tag: "흉몽",
    tagColor: "red",
    desc: "마음속 죄책감이나 걱정이 꿈으로 표출된 신호입니다. 실제 어머니와 연락해 보세요. 감정 해소가 먼저입니다.",
    score: "흉몽 / 주의 / 감정",
  },
  {
    title: "아버지가 말없이 바라보는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "묵묵한 응원의 에너지가 담긴 꿈입니다. 현재 추진 중인 일에 조용한 지지가 모이고 있다는 신호입니다.",
    score: "길몽 / 지지 / 안정",
  },
  {
    title: "돌아가신 어머니가 나오는 꿈",
    tag: "혼합",
    tagColor: "gold",
    desc: "그리움과 위로가 교차하는 꿈입니다. 중요한 결정을 앞두고 있다면 직관을 믿어보세요. 내면의 지혜가 작동 중입니다.",
    score: "혼합 / 메시지 / 직관",
  },
  {
    title: "부모님이 함께 등장하는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "가족 전체의 화합과 안정을 상징합니다. 든든한 지지 기반이 완성되는 시기입니다. 가족 모임이나 행사를 계획하면 더욱 좋습니다.",
    score: "길몽 / 화합 / 행운",
  },
  {
    title: "부모님께 꾸지람 듣는 꿈",
    tag: "흉몽",
    tagColor: "red",
    desc: "스스로 알고 있는 잘못이나 미루던 일이 수면 위로 올라온 신호입니다. 점검하고 정리하는 시간을 가지세요.",
    score: "흉몽 / 반성 / 정돈",
  },
  {
    title: "부모님께 선물 받는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "외부로부터 지원이나 좋은 소식이 올 것을 암시합니다. 인맥과 인연을 적극 활용할 시기입니다.",
    score: "길몽 / 수혜 / 인연",
  },
  {
    title: "부모님과 밥을 먹는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "정서적 충만함과 재물의 풍요를 동시에 상징합니다. 함께 나누는 기쁨이 배가되는 길몽입니다.",
    score: "길몽 / 풍요 / 정서",
  },
  {
    title: "아버지가 아프신 꿈",
    tag: "흉몽",
    tagColor: "red",
    desc: "권위·지지 기반이 흔들릴 수 있다는 경고입니다. 직장·재정 관련 결정을 신중하게 검토하세요.",
    score: "흉몽 / 경고 / 안전",
  },
];

/* ── Section 3: 형제 꿈 카드 데이터 ── */
const siblingCards = [
  {
    title: "형제와 함께 여행하는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "협력과 공동 성장을 상징합니다. 팀워크가 필요한 프로젝트에 추진력을 발휘할 좋은 시기입니다.",
    score: "길몽 / 협력 / 성장",
  },
  {
    title: "누나·언니가 우는 꿈",
    tag: "혼합",
    tagColor: "gold",
    desc: "가까운 여성 관계에서 감정적 갈등이 생길 수 있습니다. 세심한 관심과 배려가 필요한 시점입니다.",
    score: "혼합 / 감정 / 관계",
  },
  {
    title: "동생이 크게 성공하는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "주변의 성공 에너지가 나에게도 전파됩니다. 자기 발전의 강력한 동기 부여로 삼으세요.",
    score: "길몽 / 자극 / 도약",
  },
  {
    title: "오빠·형과 말다툼하는 꿈",
    tag: "흉몽",
    tagColor: "red",
    desc: "현실의 경쟁 심리나 내면 갈등이 반영된 꿈입니다. 관계를 점검하고 오해를 풀 시기입니다.",
    score: "흉몽 / 갈등 / 점검",
  },
  {
    title: "어린 동생을 돌보는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "책임감과 리더십이 강화되는 시기를 의미합니다. 멘토 역할을 자처하면 좋은 결과가 따릅니다.",
    score: "길몽 / 리더십 / 책임",
  },
  {
    title: "형제가 아픈 꿈",
    tag: "흉몽",
    tagColor: "red",
    desc: "형제의 건강이나 안위에 대한 걱정이 투영된 꿈입니다. 실제 안부를 확인하는 것이 좋습니다.",
    score: "흉몽 / 건강 / 주의",
  },
  {
    title: "형제와 음식을 나눠 먹는 꿈",
    tag: "길몽",
    tagColor: "green",
    desc: "풍요와 나눔의 에너지가 활성화된 시기입니다. 협력 관계에서 좋은 성과가 예상됩니다.",
    score: "길몽 / 풍요 / 나눔",
  },
  {
    title: "처음 보는 형제가 나오는 꿈",
    tag: "혼합",
    tagColor: "gold",
    desc: "새로운 인연이나 예상치 못한 협력자가 등장할 것을 암시합니다. 열린 마음으로 관계를 맺으세요.",
    score: "혼합 / 인연 / 새출발",
  },
  {
    title: "형제가 멀리 떠나는 꿈",
    tag: "혼합",
    tagColor: "gold",
    desc: "이별 또는 새로운 시작을 암시합니다. 변화를 받아들일 준비를 갖추세요.",
    score: "혼합 / 변화 / 이별",
  },
];

/* ── Section 5: 부모 꿈 상세 해몽 패널 데이터 ── */
const parentDetailGroups = [
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

/* ── Section 6: 친족 꿈 상세 해몽 패널 데이터 ── */
const relativeDetailGroups = [
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

export default function DreamDetailPage() {
  return (
    <main className="w-full">
      {/* Section 1: Hero */}
      <DreamHero />

      {/* Section 2: 부모 꿈 리스트 */}
      <DreamCardGrid
        sectionLabel="Father &amp; Mother"
        heading="부모"
        cards={parentCards}
        bg="#ffffff"
      />

      {/* Section 3: 형제 꿈 카드 그리드 (dark) */}
      <DreamCardGrid
        sectionLabel="Brother & Sister"
        heading="형제·자매"
        cards={siblingCards}
        bg="#1a1a1a"
        dark
      />

      {/* Section 4: 상황별 60선 accordion (dark) */}
      <DreamAccordion60 />

      {/* Section 5: 부모 꿈 상세 해몽 패널 (dark) */}
      <DreamDetailPanel
        sectionLabel="부모 꿈 해몽"
        heading="부모 꿈 해몽"
        subheading="엄마·아빠, 돈·집·독립까지"
        description="부모가 나오는 꿈은 실제 엄마·아빠 말고도, 내 안의 '어른스러운 나', 권위·안전·경제적인 기반을 상징하는 경우가 많습니다. 요즘 내가 가장 부담 느끼는 영역이 어디인지 확인하는 마음으로 읽어보면 도움이 돼요."
        groups={parentDetailGroups}
      />

      {/* Section 6: 친족 꿈 상세 해몽 패널 (light) */}
      <DreamDetailPanel
        sectionLabel="부모 꿈 해몽"
        heading="부모 꿈 해몽"
        subheading="엄마·아빠, 돈·집·독립까지"
        description="부모가 나오는 꿈은 반복될수록 메시지가 선명해집니다. 꿈의 감정 톤을 기억해두면 현실의 어떤 부분을 점검해야 하는지 방향이 잡힙니다."
        groups={relativeDetailGroups}
        dark={false}
      />

      {/* Section 7: FAQ (dark) */}
      <DreamFAQ />
    </main>
  );
}
