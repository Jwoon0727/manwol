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

function HeaderTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-[11px] font-medium"
      style={{
        background: "#fff",
        color: "#374151",
        border: "1px solid #e5e7eb",
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
            borderRight:
              i < tags.length - 1
                ? "1px solid rgba(201,168,76,0.12)"
                : undefined,
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
  const titleColor = variant === "red" ? "#e05555" : "#4a8fcb";

  return (
    <div
      className="rounded-xl p-5 md:p-6 mb-4 last:mb-0"
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
      }}
    >
      <p className="text-sm font-bold mb-2" style={{ color: titleColor }}>
        {title}
      </p>
      <p className="text-sm leading-relaxed text-gray-900">{children}</p>
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
      style={{ border: "1px solid #e5e7eb", background: "#fff" }}
    >
      <div className="p-6 md:p-8">
        {/* Header: title left, tags right */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-200">
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <HeaderTag key={i}>{tag}</HeaderTag>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function AnalysisSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section label */}
        <p
          className="text-[11px] font-semibold mb-2"
          style={{ color: "#c9a84c" }}
        >
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
          격국에서 배우자궁까지, 명식의 모든 층위를 하나씩 풀어냅니다.
          <br />
          단순한 예언이 아닌, 사주에 맞는 구조적 이해를 통해 작성했습니다.
        </p>

        {/* Card 1: 2026 정통 해설 개요 */}
        <AnalysisCard
          title="2026 정통 해설 개요"
          tags={[
            "원국 4주 戊辰 / 丁巳 / 丙寅 / 乙未",
            "현재 대운 계축 2020-2029",
            "2026 세운 丙午(병오)",
          ]}
        >
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "rgba(30,28,22,0.78)" }}
          >
            <p>
              월령은 巳(사)라 여름의 뜨거운 공기 속에서 일간 丙(병)이 신강으로
              서 있습니다.
              <br />
              쉽게 말해{" "}
              <strong>
                기본 체력과 추진력이 강해 먼저 달려가려는 흐름이 자연스럽습니다
              </strong>
            </p>
            <br />
            <p>
              격국은 건록격이며 구조상 비견, 균형상 용신은 수(水) 축을 우선으로
              봅니다. <br />
              쉽게 말해{" "}
              <strong>
                ‘내 힘’은 충분하니, 냉정함과 조절로 방향을 잡을수록 성과가
                선명해집니다.
              </strong>
            </p>
            <br />
            <p>
              2026년 세운 丙午(병오)는 시주 미래축을 건드리며 전체적으로 보조
              작용을 합니다. <br />
              쉽게 말해{" "}
              <strong>
                기회도 속도도 붙지만, 흔들리는 축을 먼저 다잡는 사람이
              </strong>
              <strong>끝에 더 안정적으로 남습니다.</strong>
            </p>
          </div>

          <div className="mt-5 space-y-3">
            <NoteBox title="올해 주의점" variant="red">
              주의점은 未-午 육합과 巳午未 방합·방국이 만드는 변동성으로,
              움직임이 커질수록 판단과 관계의 미세한 엇갈림이 생기기 쉽다는 데
              있습니다.
              <br />
              쉽게 말하면 특히 주의 달에는 속도나 열정으로 밀어붙이기보다, 한 번
              더 확인하고 한 박자 쉬는 습관이 손실을 막는 안전장치가 됩니다.
            </NoteBox>
            <NoteBox title="운영 원칙" variant="blue">
              상승월로 제시된 11월·10월·3월을 향해 수(水)·목(木) 축에 맞는
              루틴을 하나 고정하고, 주의 달에는 관계·계약·지출 판단을 하루 이상
              숙성하는 방식이 좋습니다.
              <br /> 쉽게 말하면 좋은 달에는 ‘틀(구조)’을 세우고, 까다로운
              달에는 ‘속도’를 낮춰 실수를 줄이는 것이 올해의 운영 핵심입니다.
            </NoteBox>
          </div>

          {/* Bottom stat row */}
          <div
            className="flex flex-col md:flex-row w-full text-sm rounded-lg overflow-hidden relative mt-6"
            style={{
              background: "#333333",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { label: "핵심 용신", value: "수(水) / 목(木)" },
              { label: "세운 십신", value: "비견 / 겁재" },
              { label: "연간 작동축", value: "시주 미래축" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="relative px-5 md:px-10 py-6 flex-1"
              >
                {/* 모바일용 */}
                <div className="flex justify-between items-center gap-3 md:hidden w-full">
                  <p className="text-[#FFD594] text-[13px] font-medium tracking-widest uppercase shrink-0">
                    {item.label}
                  </p>

                  <p className="text-white text-[18px] font-bold leading-snug text-right min-w-0 break-keep">
                    {item.value}
                  </p>
                </div>

                {/* PC용 */}
                <div className="hidden md:block">
                  <p className="text-[#FFD594] text-[14px] font-medium tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-[20px] font-bold leading-snug">
                    {item.value}
                  </p>
                </div>

                {/* 구분선 */}
                {i < arr.length - 1 && (
                  <>
                    {/* 모바일 (더 긴 가로선) */}
                    <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-[#FFD594]/70" />

                    {/* 데스크탑 (세로선) */}
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[30%] w-px bg-[#FFD594]/70" />
                  </>
                )}
              </div>
            ))}
          </div>
        </AnalysisCard>

        {/* Card 2: 판독 기준과 원국 개요 */}
        <AnalysisCard title="판독 기준과 원국 개요" tags={[]}>
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "rgba(30,28,22,0.78)" }}
          >
            <p>
              의뢰인의 판독은 ‘여름의 월령(巳)→일간 丙의 체력→원국의 뿌리와
              드러남(통근·투간·지장간)→오행·조후→격국·용신→십신·궁위론→배우자궁(일지)→합충형해파→대운·세운’의
              순서로 읽을 때 가장 자연스럽습니다. 원국은 戊辰(무진) / 丁巳(정사)
              / 丙寅(병인) / 乙未(을미)로 구성되어 있고, 현재 대운은
              계축(2020–2029)이며, 2026년 세운은 丙午(병오)로 시주 미래축을
              활성화합니다.
            </p>
            <br />
            <p>
              이 순서는 ‘힘의 근원’부터 ‘작동되는 지점’까지를 단계적으로 좁혀
              들어가는 방식입니다. 월령과 월지는 계절의 기세를 정하는
              출발점이고, 그 다음 일간(丙)은 명식의 중심 체력처럼 작동합니다.
              이어서 통근·투간·지장간은 기운이 뿌리를 내렸는지(통근), 겉으로
              드러났는지(투간), 속에 무엇을 품었는지(지장간)를 확인하는 절차로,
              같은 글자라도 실제 영향력이 달라지는 이유를 설명해 줍니다. 이렇게
              기본 구조를 잡아야, 계축 대운과 丙午(병오) 세운이 어디를 ‘먼저’
              건드리는지 흐름이 선명해집니다.
            </p>
            <br />
            <p>
              쉬운 말로 번역하면, 이 명식은 ‘계절이 뜨겁게 밀어주고, 중심
              불(丙)이 얼마나 버티는지’를 먼저 본 뒤, 2026년에는 丙午(병오)가
              들어오며 시주 미래축이라는 미래·확장 축이 실제로 눌리고
              당겨지는지를 확인하는 판입니다. 그래서 이후 해설은 사건을
              단정하기보다, 어떤 축이 왜 먼저 움직이는지—원국(戊辰(무진) /
              丁巳(정사) / 丙寅(병인) / 乙未(을미))과 운(계축, 丙午(병오))의
              연결 고리—를 따라가며 읽는 방식으로 전개하는 것이 핵심 함의가
              됩니다.
            </p>
          </div>
          {/* 태그 — p태그 밑에 */}
          <div className="flex flex-wrap gap-2 mt-5">
            <HeaderTag>원국 4주 戊辰 / 丁巳 / 丙寅 / 乙未</HeaderTag>
            <HeaderTag>현재 대운 계축 2020-2029</HeaderTag>
            <HeaderTag>2026 세운 丙午(병오)</HeaderTag>
          </div>
        </AnalysisCard>

        {/* Card 3: 월령과 일간 */}
        <AnalysisCard title="월령과 일간" tags={[]}>
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "rgba(30,28,22,0.78)" }}
          >
            <p>
              의뢰인 명식의 출발점은 월령 巳(사)가 만들어내는 여름의 기세입니다.
              열조·조조 조건, 즉 덥고 건조한 공기 속에 일간 丙(병) 화(火)가
              놓이면서, 전체 체력은 신강 81.1점으로 단단히 서 있습니다. 이 기본
              온도와 체력이 분명하니 이후 해석에서도 중심이 쉽게 흔들리지
              않습니다.
            </p>
            <br />
            <p>
              작동 원리는 ‘월령은 계절의 힘, 일간은 그 안에서 움직이는
              주인공’이라는 틀로 보면 정리됩니다. 월령이 巳(사)라 여름의 화기가
              전제되고, 사령이 庚(경) 중기라 일간 기준으로 편재로 작동합니다.
              편재는 ‘내가 다루는 자원·현실의 재료’에 해당하는 십신으로, 월령의
              한복판에서 그 기운이 배경처럼 깔린다는 뜻입니다. 여기에 득령
              충족(계절의 도움), 득지 충족(뿌리의 도움), 득세 충족(주변의
              지원)으로 신강 판단이 세 갈래로 확인됩니다.
            </p>
            <br />
            <p>
              쉽게 번역하면, 여름 한가운데의 뜨겁고 마른 공기가 기본이고, 그
              속에서 丙(병)이라는 불의 주인공이 체력이 충분하다는 그림입니다.
              ‘신강’은 기운이 약하지 않아 버티는 힘이 있다는 말이며, ‘사령 경
              중기/편재’는 계절의 중심층에서 현실 재료를 만지는 성향이 함께
              작동한다는 해석의 실마리입니다. 따라서 이후에는 이 강한 화(火)가
              과열되지 않도록 조후의 균형을 어떻게 잡는지가, 같은 성향이라도
              결과를 달리 만드는 핵심 함의가 됩니다.
            </p>
          </div>
          {/* 태그 — p태그 밑에 */}
          <div className="flex flex-wrap gap-2 mt-5">
            <HeaderTag>원국 4주 戊辰 / 丁巳 / 丙寅 / 乙未</HeaderTag>
            <HeaderTag>현재 대운 계축 2020-2029</HeaderTag>
            <HeaderTag>2026 세운 丙午(병오)</HeaderTag>
          </div>
        </AnalysisCard>

        {/* Card 4: 통근·투간·지장간 */}
        <AnalysisCard title="통근·투간·지장간" tags={[]}>
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "rgba(30,28,22,0.78)" }}
          >
            <p>
              의뢰인 명식은 월지(巳) 속 지장간 丙(병)·戊(무)·庚(경) 중에서 戊,
              丙이 천간으로 투간되어, ‘겉으로 드러난 힘’과 ‘속에서 받쳐 주는
              뿌리’가 같은 방향으로 연결됩니다. 또한 월지에 통근한 천간이 戊,
              丙으로 확인되어, 눈에 보이는 추진력과 실제 지속력이 분리되지 않고
              함께 작동하는 구조가 됩니다.
            </p>
            <p>
              통근·투간·지장간은 각각 ‘뿌리’, ‘표면으로의 등장’, ‘가지 속 숨은
              재료’를 보는 장치입니다. 월지 지장간은 丙(병), 戊(무), 庚(경)로
              구성되고, 이 가운데 투간된 천간은 무, 병입니다. 통근은 “천간
              글자가 어디에 발을 딛고 서 있나”를 보는 것인데, 월지에 통근한
              천간이 戊, 丙이며, 가시 천간의 통근은 戊(辰巳寅), 丁(未),
              丙(巳寅), 乙(辰未)로 요약됩니다. 즉 월령의 본기·중기·여기가 실제
              천간 작동으로 이어지는지 점검했을 때, 주요 축이 실전에서 힘을 잃지
              않도록 뒷받침이 있는 편입니다.
            </p>
            <p>
                쉬운 말로 번역하면, ‘겉으로 드러난 성향(천간)’이 공중에 뜨지
              않고 ‘현실에서 버티는 근거(지지의 뿌리)’를 갖고 있다는 뜻입니다.
              그래서 강해 보이기만 하고 금방 꺾이는 형태라기보다, 눈에 덜 띄는
              요소도 꾸준히 영향력을 발휘하기 쉽습니다. 해석상으로는 어떤
              기질이나 선택이 나타났을 때, 그것이 일시적 분위기인지 장기적으로
              굳는 흐름인지 판단할 때 이 통근·투간 구조가 중요한 기준이 됩니다.
            </p>
          </div>
          {/* 태그 — p태그 밑에 */}
          <div className="flex flex-wrap gap-2 mt-5">
            <HeaderTag>뿌리 지지인 丙(병), 庚(庚), 戊(戊)</HeaderTag>
            <HeaderTag>투간 乙 丙</HeaderTag>
            <HeaderTag>통근·투 了, 丙, 乙</HeaderTag>
          </div>
        </AnalysisCard>

        {/* Card 5: 오행·조후 */}
        <AnalysisCard title="오행·조후" tags={[]}>
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "rgba(30,28,22,0.78)" }}
          >
            <p>
              의뢰인 명식의 오행 · 조후는 ‘화(火)가 크게 치우친 뜨겁고 마른
              구조’로 정리됩니다. 오행 분포가 목 18.4% / 화 44.1% / 토 28.7% /
              금 7.9% / 수 0.9%로 나타나며, 조후는 열조·조조로 판정됩니다.
              그래서 보정 필요 오행은 수(水), 토(土)로 잡히고, 합화는
              불성(합해도 성질이 바뀌는 실변화가 없음)으로 봅니다.
            </p>
            <br />
            <p>
              작동 원리는 생·극·설의 흐름을 따라가며, 한난조습(차고 덥고, 마르고
              젖는 조건)을 동시에 겹쳐 읽는 데 있습니다. 화(火)가 과하고
              수(水)가 거의 없는 구도에서는 ‘뜨거움’이 식지 않기 쉽고,
              조조(건조함)가 더해져 순환이 빠르게 치우칩니다. 이때 토(土)는 화의
              열을 받아 중간에서 완충하거나 담아내는 역할을 하며, 수(水)는 열을
              식히고 건조를 적셔 전체 리듬을 고르게 만드는 축으로 작동합니다.
            </p>
            <br />
            <p>
              쉬운 번역으로는 “열과 건조가 기본값이라, 균형을 잡아주는 차분함과
              촉촉함이 중요하다”는 뜻입니다. 수(水), 토(土) 보정이 필요하다는
              결론은 무엇을 더 ‘세게’ 하기보다, 과열된 흐름을 누그러뜨리고 지속
              가능하게 만드는 방향의 해석을 요구합니다. 또한 합화 불성은 외부
              조건이 와도 기질이 급격히 뒤집히기보다는, 원래의 온도·습도 성향
              위에서 조절의 폭을 어떻게 확보하느냐가 핵심 함의가 됩니다.
            </p>
          </div>
          {/* 그 — p태그 밑에 */}
          <div className="flex flex-wrap gap-2 mt-5">
            <HeaderTag>조후 불(火/조후)</HeaderTag>
            <HeaderTag>과잉 없는 사주(水, 묘토)</HeaderTag>
            <HeaderTag>화토 평형</HeaderTag>
          </div>
        </AnalysisCard>
      </div>
    </section>
  );
}
