"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Month = {
  month: number;
  ganzhi: string;
  ganzhiLabel: string;
  title: string;
  body: string;
  tags: string[];
  highlight?: boolean;
};

const MONTHS: Month[] = [
  {
    month: 1,
    ganzhi: "己丑",
    ganzhiLabel: "기축(가축)",
    title: "상관월, 직업축 압박과 조율",
    body: "1월 己丑(기축)은 상관/상관이 작동하고, 연주 배경축·일지·배우자궁·시주 미래축이 함께 움직이며 전체 효과는 보조입니다.\n쉽게 말하면 역할 분담과 성과 압박이 눈에 띄어, '내가 어디까지 말아야 하나' 선이 또렷해지는 달입니다.\n암합(寅–丑)과 충·파(未–丑, 辰–丑)가 같이 들어와 겉으로는 협업처럼 보여도 속내 계산과 거리감 조절이 중요해집니다.\n이미 있는 인연과 계획을 다듬을수록 체감이 좋아지지, 결론을 서두르기보다 한 번 더 확인하고 한 박자 쉬는 게 손실 막는 현명한 기준이 됩니다.",
    tags: [
      "원국 4주 戊辰(무진) / 丁巳(정사) / 丙寅(병인) / 乙未(을미)",
      "현재 대운 계축",
      "세운 丙午(병오)",
    ],
  },
  {
    month: 2,
    ganzhi: "庚寅",
    ganzhiLabel: "庚寅(경인)",
    title: "편재·편인, 관계 온도 민감",
    body: "2월 庚寅(경인)은 편재와 편인이 교차하며 관계 온도 변화가 민감하게 느껴지는 달입니다. 재물과 정보가 동시에 움직이므로 판단을 서두르지 말고 데이터를 먼저 모으세요.",
    tags: ["편재·편인 구조", "관계 온도 관리", "정보 수집 우선"],
  },
  {
    month: 3,
    ganzhi: "辛卯",
    ganzhiLabel: "辛卯(신묘)",
    title: "정재·정인, 리듬 점검이 우선",
    body: "3월 辛卯(신묘)는 정재와 정인이 동시에 작동합니다. 안정적인 수입 흐름과 학습·정보 습득이 맞물리는 시기로, 루틴을 점검하고 장기 계획의 기반을 다지는 데 집중하세요.",
    tags: ["정재·정인 구조", "루틴 점검", "장기 계획 기반"],
    highlight: true,
  },
  {
    month: 4,
    ganzhi: "壬辰",
    ganzhiLabel: "壬辰(임진)",
    title: "편관·식신, 관계 해석 정확도",
    body: "4월 壬辰(임진)은 편관과 식신이 부딪히는 달입니다. 외부 압력이 커질 수 있으나 식신의 표현력으로 풀어낼 수 있습니다. 감정보다 논리적 커뮤니케이션이 유리합니다.",
    tags: ["편관·식신 구조", "커뮤니케이션 전략", "외부 압력 대응"],
  },
  {
    month: 5,
    ganzhi: "癸巳",
    ganzhiLabel: "癸巳(계사)",
    title: "정관·비견, 성과 압박 속 체력",
    body: "5월 癸巳(계사)는 정관과 비견이 함께 움직입니다. 책임감이 높아지고 경쟁 구도가 생기는 시기입니다. 체력 관리를 최우선으로 하고 불필요한 소모전을 피하세요.",
    tags: ["정관·비견 구조", "체력 관리", "경쟁 구도"],
  },
  {
    month: 6,
    ganzhi: "甲午",
    ganzhiLabel: "甲午(갑오)",
    title: "편인·겁재, 연결을 묶어두는 달",
    body: "6월 甲午(갑오)는 편인과 겁재가 작동합니다. 새로운 연결이 생기지만 겁재 특성상 분산 소모가 크므로 핵심 관계와 프로젝트에 집중하고 나머지는 보류하는 전략이 유효합니다.",
    tags: ["편인·겁재 구조", "관계 선별", "집중 전략"],
  },
  {
    month: 7,
    ganzhi: "乙未",
    ganzhiLabel: "乙未(을미)",
    title: "상관월, 직업축 압박과 조율",
    body: "7월 乙未(을미)는 1월과 유사한 상관 구조가 반복됩니다. 직업축 압박이 다시 올라오는 시기로 상반기 성과를 점검하고 하반기 방향을 재설정하는 중간 정비 시점입니다.",
    tags: ["상관 구조 반복", "상반기 점검", "하반기 방향 설정"],
  },
  {
    month: 8,
    ganzhi: "丙申",
    ganzhiLabel: "丙申(병신)",
    title: "상관월, 직업축 압박과 조율",
    body: "8월 丙申(병신)은 비견과 편관이 만나는 구조로, 경쟁과 외부 압력이 동시에 작동합니다. 이미 1월에 경험한 패턴이므로 대응 방식을 익혀두면 훨씬 수월하게 넘길 수 있습니다.",
    tags: ["비견·편관 구조", "패턴 대응", "직업축 관리"],
  },
  {
    month: 9,
    ganzhi: "丁酉",
    ganzhiLabel: "丁酉(정유)",
    title: "상관월, 직업축 압박과 조율",
    body: "9월도 겁재 구조의 연장선입니다. 연속된 상관 압박이 누적될 수 있으므로 휴식과 회복에 의식적으로 시간을 배분하고 과부하를 예방하세요.",
    tags: ["겁재 연속 구조", "회복 우선", "과부하 방지"],
  },
  {
    month: 10,
    ganzhi: "戊戌",
    ganzhiLabel: "戊戌(무술)",
    title: "상관월, 직업축 압박과 조율",
    body: "10월은 연말을 앞두고 성과를 정리하는 시기입니다. 편인 구조 속에서 완성도 높은 마무리에 집중하고 새 과제를 추가하기보다 기존 과제를 완결짓는 방향이 유리합니다.",
    tags: ["연말 성과 정리", "완결 집중", "신규 억제"],
  },
  {
    month: 11,
    ganzhi: "己亥",
    ganzhiLabel: "己亥(기해)",
    title: "상관월, 직업축 압박과 조율",
    body: "11월은 한 해 운의 정점 중 하나입니다. 상승 에너지를 활용해 중요한 결정을 실행에 옮기기 좋은 시기입니다. 준비된 계획이 있다면 지금이 실행 적기입니다.",
    tags: ["상승 에너지", "핵심 실행", "계획 실행"],
  },
  {
    month: 12,
    ganzhi: "庚子",
    ganzhiLabel: "庚子(경자)",
    title: "상관월, 직업축 압박과 조율",
    body: "12월은 한 해를 마무리하는 달입니다. 성과를 객관적으로 기록하고 내년 계획의 기초 데이터를 확보하세요. 감사와 관계 복기를 통해 인연의 에너지를 축적해 두는 것이 중요합니다.",
    tags: ["연말 마무리", "성과 기록", "내년 기초 설계"],
  },
];

function GanzhiBadge({
  ganzhi,
  highlight,
}: {
  ganzhi: string;
  highlight?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold shrink-0"
      style={
        highlight
          ? { background: "#c9a84c", color: "#111108" }
          : {
              background: "rgba(201,168,76,0.15)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.3)",
            }
      }
    >
      {ganzhi}
    </span>
  );
}

function MonthItem({
  item,
  defaultOpen = false,
}: {
  item: Month;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: item.highlight
          ? "1px solid rgba(201,168,76,0.4)"
          : "1px solid rgba(255,255,255,0.09)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-white font-bold text-sm w-8 shrink-0">
          {item.month}월
        </span>
        <GanzhiBadge ganzhi={item.ganzhi} highlight={item.highlight} />
        <span className="flex-1 text-white text-sm font-semibold leading-snug">
          {item.title}
        </span>
        <span className="text-white/30 text-[11px] shrink-0 hidden sm:inline">
          {item.ganzhiLabel}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-white/40 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />
        )}
      </button>

      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="px-5 pt-4 pb-2 text-sm text-white/55 leading-relaxed whitespace-pre-line">
            {item.body}
          </div>
          <div className="px-5 pb-4 pt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded text-[11px] font-medium"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MonthlyAccordion() {
  return (
    <section className="w-full py-16" style={{ background: "#191919" }}>
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest mb-3 text-white/40">
          5대 영역 운영 가이드
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
          12달의
          <br />
          <span style={{ color: "#c9a84c" }}>파도를 읽어드립니다.</span>
        </h2>

        <div className="text-sm text-white/45 leading-relaxed mb-8 space-y-0.5">
          <p>한 해는 고르게 흐르지 않습니다.</p>
          <p>강한 달과 조심할 달이 뚜렷하게 나뉩니다.</p>
          <p>파도가 오는 때를 알면 파도에 올라타거나 피할 수 있습니다.</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div
            className="rounded-xl px-5 py-4"
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.06)",
            }}
          >
            <p
              className="text-xs font-semibold mb-1"
              style={{ color: "#c9a84c" }}
            >
              상승월 · Rise
            </p>
            <p className="text-xl font-black text-white">11월 · 10월 · 3월</p>
          </div>
          <div
            className="rounded-xl px-5 py-4"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p className="text-xs font-semibold mb-1 text-white/50">
              주의월 · Caution
            </p>
            <p className="text-xl font-black text-white">1월 · 6월 · 12월</p>
          </div>
          <div
            className="rounded-xl px-5 py-4"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p className="text-xs font-semibold mb-1 text-white/40">
              연간 효과
            </p>
            <p className="text-xl font-black text-white">보조</p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-2">
          {MONTHS.map((item, i) => (
            <MonthItem key={item.month} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
