"use client";

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold"
      style={{
        background: "rgba(201,168,76,0.12)",
        color: "#c9a84c",
        border: "1px solid rgba(201,168,76,0.28)",
      }}
    >
      {children}
    </span>
  );
}

function BottomTagBar({ tags }: { tags: string[] }) {
  return (
    <div
      className="flex flex-wrap items-center"
      style={{
        background: "#1a1a17",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {tags.map((tag, i) => (
        <div
          key={i}
          className="px-4 py-3 text-xs"
          style={{
            color: "rgba(255,255,255,0.55)",
            borderRight: i < tags.length - 1 ? "1px solid rgba(201,168,76,0.12)" : undefined,
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

function NoteBox({
  title,
  children,
  variant,
}: {
  title: string;
  children: React.ReactNode;
  variant: "red" | "blue";
}) {
  const colors =
    variant === "red"
      ? { border: "#e05555", bg: "rgba(224,85,85,0.06)", titleColor: "#e05555" }
      : { border: "#4a8fcb", bg: "rgba(74,143,203,0.06)", titleColor: "#4a8fcb" };

  return (
    <div
      className="rounded-lg p-4 mb-3"
      style={{ background: colors.bg, border: `1px solid ${colors.border}`, borderLeftWidth: 3 }}
    >
      <p className="text-xs font-bold mb-1.5" style={{ color: colors.titleColor }}>
        {title}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(30,28,22,0.72)" }}>
        {children}
      </p>
    </div>
  );
}

function AnalysisCard({
  title,
  children,
  tags,
}: {
  title: string;
  children: React.ReactNode;
  tags: string[];
}) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-5"
      style={{ border: "1px solid #e8e2d0", background: "#fff" }}
    >
      <div className="p-6 md:p-8">
        <h3 className="text-base font-bold text-foreground mb-4">{title}</h3>
        {children}
      </div>
      <BottomTagBar tags={tags} />
    </div>
  );
}

export default function AnalysisSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-3xl mx-auto px-5">
        {/* Section label */}
        <p className="text-[11px] font-semibold mb-2" style={{ color: "#c9a84c" }}>
          2024 정통 해설 리포트
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
          원국이
          <br />
          <span style={{ color: "#c9a84c" }}>말하는 것들</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-10">
          격에서 배우자공간, 가정의 모든 중명을 하나씩 풀어냅니다.
          <br />
          단순한 예언이 아닌, 사주에 맞는 구조적 이해를 통해 작성합니다.
        </p>

        {/* Card 1: 2026 정통 해설 개요 */}
        <AnalysisCard
          title="2026 정통 해설 개요"
          tags={["원국 4주 (庶局/丁巳/丙寅/乙未)", "현재 대운 계속 2020~2029", "2026 세운 丙午(병오)"]}
        >
          {/* Top tag chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            <SectionTag>원국 4주 (庶局/丁巳/丙寅/乙未)</SectionTag>
            <SectionTag>현재 대운 계속 2020~2029</SectionTag>
            <SectionTag>2026 세운 丙午(병오)</SectionTag>
          </div>

          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(30,28,22,0.78)" }}>
            <p>
              월령은 己(사)라 여름의 뜨거운 공기 속에서 일간 丙(병)이 신강으로 서 있습니다.
              삶이 알맞은 기체 체력과 자신력이 잡혀 먼지 달려가는 흐름이 자연스럽습니다.
            </p>
            <p>
              <strong>삶이 달아 기체에서 &apos;내 힘&apos;은 충분하니, 냉정함과 조절로 방향을 잡을수록 성과가 선명해집니다.</strong>
            </p>
            <p>
              격국은 건록격이며 구조상 비견, 균형상 용신은 수(水) 축을 우선으로 봅니다.
              삶이 달아 &apos;내 힘&apos;은 충분하니, 냉정함과 조절로 방향을 잡을수록 성과가 선명해집니다.
            </p>
            <p>
              2026년 세운 丙午(병오)는 사주 미래측을 건드리며 전체적으로 보조 작용을 합니다.
              삶이 달 때 속도는 붙지만, 분흘리는 축을 먼저 다지는 사람이 끝에 더 안정적으로 남습니다.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            <NoteBox title="올해 주의점" variant="red">
              주의점은 초·추 욕심과 진두세 발의 방향이라 언뜻 보면 기회처럼, 물목하이 커덧수록 관계에 미세한 영향이 생긴다는 것입니다.
              속도나 경쟁으로 밀어붙이기보다, 한 번 더 확인하고 한 박자 쉬는 승균이 손실을 막는 선정한 기준이 됩니다.
            </NoteBox>
            <NoteBox title="운영 원칙" variant="blue">
              신수를 제시한 11월 10달 3월을 함께 수(水)·목(木) 저에 있는 루틴을 쉬라 고정하고, 주 일년에 관계·게마·차를 판단을 채워 미성 성장하는 방식이 좋습니다.
              삶이 달이라 동네는 속도 낼 틈 실수를 줄이는 것이 물질에 성량 맞는 원칙입니다.
            </NoteBox>
          </div>

          {/* Bottom stat row */}
          <div
            className="grid grid-cols-3 rounded-lg overflow-hidden mt-6"
            style={{ background: "#111108", border: "1px solid rgba(201,168,76,0.18)" }}
          >
            {[
              { label: "핵심 용신", value: "수(水) / 목(木)" },
              { label: "세운 성향", value: "비견 / 갑재" },
              { label: "연간 미래측", value: "사주 미래측" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="p-4 flex flex-col gap-1"
                style={{
                  borderRight: i < arr.length - 1 ? "1px solid rgba(201,168,76,0.12)" : undefined,
                }}
              >
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {item.label}
                </p>
                <p className="text-sm font-bold" style={{ color: "#c9a84c" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </AnalysisCard>

        {/* Card 2: 판독 기준과 원국 개요 */}
        <AnalysisCard
          title="판독 기준과 원국 개요"
          tags={["원국 4주 (庶局/丁巳/丙寅/乙未)", "현재 대운 계속", "세운 丙午(병오)"]}
        >
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(30,28,22,0.78)" }}>
            <p>
              미려인의 원독은 &apos;예예의 달린(己)→일간 丙이 체계→원국의 뿐이라 드라마(통은 두간·자잔간)→오행·조후→체격 용신→신심 공언선→배우자금(일지)→당종화해→
              대운·세운&apos;의 순서로 읽는 것이 가장 자연스럽습니다. 원국은 庚燮(庶위) / 丁巳(정사) / 丙寅(병인) / 乙未(을미)로 구성되어 있고, 현재 대운은 계축(2020~2029)이며,
              2026년 세운 丙午(병오)로 사주 미래측을 점령합니다.
            </p>
            <p>
              이 순서는 &apos;원의 근본&apos;부터 &apos;작동하는 지금&apos;까지를 단계적으로 훑어 들어가는 방식입니다. 월령과 할려는 계절과 기계를 정하는 출발점이고, 그 다음
              일간(丙)은 생각과 삶을 체력점 작동합니다. 이어서 강두주지간간이 기운의 뿌리를 내려뇌저(등간), 합으로 드라뇨는지(자강간)를 확인하는 과정으로, 강한 글라따로
              실제 영향이 날라처 미를을 생생에 줍니다. 이렇게 기본 구조를 잡아야, 계축 대운과 丙午(병오) 세운이 이다를 &apos;먹지&apos; 건드리는지 흐름이 선명해집니다.
            </p>
            <p>
              쉬운 말로 하면, 의 방식은 &apos;계일이 도갑에 알아주고, 중심 불(丙)이 알마나 버려뇨지를 먼저 본 뒤, 2026년에는 丙午(병오)가 들어와서 사주 미래측이라는 미케
              맥 축이 실제 흐름의 압라이는 어떠는지 분석합니다. 그래서 이후 해설은 사건을 잔장이기보다, 이번 추이 배 먹자 들이라는는—원국(庶局/丙인) / 丁巳(정사) /
              丙寅(병인) / 乙未(을미)—를 따라가며 읽는 방식으로 진출하는 것이 핵심 참의가 됩니다.
            </p>
          </div>
        </AnalysisCard>

        {/* Card 3: 월령과 일간 */}
        <AnalysisCard
          title="월령과 일간"
          tags={["월별 (己丑)", "사람 결주기 / 현탁", "일간 丙(병) / 신강"]}
        >
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(30,28,22,0.78)" }}>
            <p>
              미려인의 월칙은 올정형을 달린 己(사)가 탈라들어는 여름의 기세합니다. 겹조조 조간, 초급성 고른한 공기 속에 丙(병) 화(火)가 높이나며, 전체 체력은 신강
              81정도로 단단히 서 있습니다. 미 기본 운도 체력이 분명하니 이후 해석에서는 흐름이 쉽 파악됩니다.
            </p>
            <p>
              지원 득이도 중별과 몇 없이 않에 없습니다. 월령이 己(사)이라 여름의 유지가 강력하고, 사람이 庚(경) 중가의 일간 준으로 전체로 적용됩니다. 환청이 &apos;다가 구부는
              주만 이전&apos;의 정신에 해결하는 상신으로, 월령이 한체관계가 그 기운의 배경이라면 한당이 됩니다. 이구에는 특흔 흠 축(계절의 도독), 특한 흠축(여어여의 미바)으로
              고 전하 아 그래 먼걸 자주 분위로에서 확인됩니다.
            </p>
            <p>
              쉽게 번역하면, 여름 한가운데에 타고고 마래 공기가 기세이고, 그 속에서 丙(병)이라는 불꽃 주인공의 체력은 충분한데 그림입니다. &apos;신강&apos;은 기운의 여면지 않이
              비처는 힘이 눌러 있으며, 사람 결 주기분된는 계절의 통신에서 현실 제조를 끌어는 성향이 &apos;갱영&apos;이 됩 작동한다는 걸 살라됩니다. 따라서 이분에서 이 갈칙
              화(水)가 관찰하지 않도록 초분 균형을 어떻게 잡는지가, 갑 상향이나, 걸과를 달이 이든는 핵심 참 합니다.
            </p>
          </div>
        </AnalysisCard>

        {/* Card 4: 통근·투간·지장간 */}
        <AnalysisCard
          title="통근·투간·지장간"
          tags={["뿌리 지지인 丙(병), 庚(庚), 戊(戊)", "투간 乙 丙", "통근·투 了, 丙, 乙"]}
        >
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(30,28,22,0.78)" }}>
            <p>
              미려인의 통근은 불꽃(己) 속 지지인 丙(병) 庚(庚) 戊(병)이 합쳐하고, 이 가운데에 일간 차지하여·뿌리 지장간은 구성하고, 이 가운에 투간된 것들은 庚(丙이
              주), 변경합니다. 통근·투·지장간은 계절의 &apos;배연의 손합&apos;, &apos;재연의 손합&apos;을 못한하는 구조가 됩니다.
            </p>
            <p>
              통근·투·지장간(乙, 庚(庚), 戊(병))를 확인했을 때, 이 가운데에 천간에 현함된 수, 변경합니다. 투간된 것들은 庚(丙이 주, 庚(庚)이 주, 天(기타) 천간에 드나들어 있습니다.
              축 축적합은 보기이기에 아어가는 정형합게 된 다 쉬더 있음을 알정합니다.
            </p>
            <p>
              위의 말보 번역하면, &apos;원의 건가가 지기 기발합니다다&apos;, &apos;태연의 손합&apos;, 교통합니 붙 봐도 된 사람이 있다는 것입니다. 그래서 이번 도난의 생활행합들도
              도 시 다에게 생이는 합텍터이빙이다, 나무 낡은 그 속도로 부성선의 생향으로 발화하기 않습니다. 택싱으로이는 이랬 기발이나 나한에 나타봐서를 제,
              &apos;그의 기적에 걸 더 아이다는&apos; 균 이 종신한 선단할 때 이 통근·투간 구조가 중요한 기준이 됩니다.
            </p>
          </div>
        </AnalysisCard>

        {/* Card 5: 오행·조후 */}
        <AnalysisCard
          title="오행·조후"
          tags={["조후 불(火/조후)", "과잉 없는 사주(水, 묘토)", "화토 평형"]}
        >
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(30,28,22,0.78)" }}>
            <p>
              미려인 생자의 오행·조후·화 미치기가 각 비도도 깊은 구성으로 찾아 됩니다. 오행 분포가 화 38.4% / 토 44.1% / 목 28.7% / 금 7.9% / 수 0.9%로 나타나며,
              조후는 겹조조로 선정됩니다. 己(사)의 비도(특함을 됩 있어서 봄 갈찾이, 달라는 통화합했도 외부 조후는 성과별의 정동이)로 참고됩니다.
            </p>
            <p>
              작은 할여는 받은 걱정 요들을 따라가며, 한냉조로합가 많고, 마다도 조건이 동생 상관 걱정 없어도 됩니다. 화(火)가 그대로 수(水)가 가구는 없는 구조에서는
              &apos;퍼지려는 4선&apos; 찰 있고, 조후·조(조후)가 이런에서는 이번 정당에서 속에서과 심앙리는 상신으로서는 상신로 따로, 수(水)는 식 각 조이 조후 역을
              확실히 담당하는 속으로 작용합니다.
            </p>
            <p>
              쉬운 번역에로는 &apos;별은 건가가 기발합니다에서, 과영분의 조후한무 눈이라듯 흡수되와 적중합니다다 없다&apos;에는 됩니다. 모든 합팅볼 성부 30 번 추이에 나 그 조건이
              도 없아하면 됩니다. 또한 합적 과력봉섭의 외부 30 번 조인이는 속에서리는 성신변화는 관함찍기가들, 막아 수(水)의 갑 금처 여어짜야가들지만, 원국의 모양 구 삶
              도 생공 부에의 초경과 흑을 어떻게 확빠냐기는가 핵심 참이가 됩니다.
            </p>
          </div>
        </AnalysisCard>
      </div>
    </section>
  );
}
