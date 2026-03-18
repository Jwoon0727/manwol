"use client";

import Image from "next/image";
import Link from "next/link";
import FortunePaymentCard from "./fortune-payment-card";
import { useState } from "react";
import Navbar from "./navbar";
import {
  ChevronLeft,
  Flower2,
  Star,
  Heart,
  Coins,
  CalendarDays,
  Briefcase,
  BookOpen,
  Home,
  Shuffle,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface FortuneResultProps {
  id: string;
  title: string;
  name?: string;
}

// ── Per-id content ────────────────────────────────────────────────────────────

const CONTENT: Record<
  string,
  {
    character: string;
    character2: string;
    character3: string;
    situationCharacter: string;
    situationCharacter1: string;
    payCharacter?: string;
    greeting: string;
    introText: string;
    chapters: { icon: any; color: string; label: string; sub: string }[];
    midBubble: string;
    endBubble1: string;
    endBubble2: string;
    payTitle: string;
    paySubtitle: string;
    features: string[];
  }
> = {
  "1": {
    character: "/main/saju-result/mainbg.png",
    character2: "/main/saju-result/mainchar.png",
    character3: "/main/saju-result/textbg.png",
    situationCharacter: "/main/saju-result/sub01.png",
    situationCharacter1: "/main/saju-result/sub03.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "감사합니다. 홍길동님의.\n 2026 병오년 운세는\n크게 9가지의 항목으로 나눌 수 있습니다.",
    introText:
      "감사합니다. 홍길동님의.\n 2026 병오년 운세는\n크게 9가지의 항목으로 나눌 수 있습니다.",
    chapters: [
      {
        icon: Star,
        color: "#e8a245",
        label: "2026 운세 핵심 요약",
        sub: "2026년 당신의 핵심 운세 흐름을 정리합니다.",
      },
      {
        icon: Heart,
        color: "#e45c5c",
        label: "사랑 적수",
        sub: "올해 사랑운과 인연의 적수를 알아보세요.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "2026 월별 운세 리뷰",
        sub: "1월부터 12월까지 월별 흐름을 살펴봅니다.",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "행운의 방향과 운세",
        sub: "행운이 찾아오는 시기와 방향을 안내합니다.",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "사주 핵심 풀이",
        sub: "사주팔자의 핵심 기운을 풀어드립니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "2026 일상 & 친밀 운세",
        sub: "일상 속 운세와 친밀한 관계 운을 봅니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "사주 분야별 세분화",
        sub: "직업, 재물, 건강 분야별로 세분화합니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "운명 카드",
        sub: "타로와 운명 카드로 이번 해를 읽어봅니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "평생 운수",
        sub: "평생 흐르는 대운의 흐름을 정리합니다.",
      },
    ],
    midBubble: "만월성 전문\n사주풀이입니다.\n결제 후 바로 확인하세요!",
    endBubble1: "부족함이 아닌,\n풍요로운 한 해가\n될겁니다!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "2026 신년운세\n프리미엄 사주풀이",
    paySubtitle: "풀버전 · 상세 분석 포함",
    features: [
      "풍부하고 세밀한 사주 풀이",
      "직관적인 핵심 요약",
      "월별 운세 상세 안내",
      "사랑/재물/건강 분야별 분석",
      "평생 대운 흐름 제공",
      "맞춤형 조언 포함",
    ],
  },
  "2": {
    character: "/main/sajudetail/fortune-detail-2.png",
    character2: "/main/sajudetail/fortune-detail-2-2.png",
    character3: "/main/sajudetail/fortune-detail-2-3.png",
    situationCharacter: "/images/fortune-detail-2-sit.jpg",
    situationCharacter1: "/main/saju-result/sub02.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "좋아요. 살펴보겠습니다.\n당신의 연애 흐름을 읽어보니\n꼭 전해드려야 할 이야기가 있어요.",
    introText:
      "좋아요. 살펴보겠습니다.\n당신의 연애 흐름을 읽어보니\n꼭 전해드려야 할 이야기가 있어요.",
    chapters: [
      {
        icon: Heart,
        color: "#e45c5c",
        label: "운명의 인연 핵심 요약",
        sub: "당신의 연애 기운과 올해 인연 흐름을 정리합니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "연애 적성 & 이상형 분석",
        sub: "사주로 본 나의 연애 스타일과 이상형을 알아봅니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "월별 연애 운세 리뷰",
        sub: "1월부터 12월까지 사랑의 흐름을 월별로 봅니다.",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "인연을 만나는 시기",
        sub: "운명의 상대를 만날 가능성이 높은 시기를 짚어드립니다.",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "현재 관계 심층 분석",
        sub: "현재 연애 중이라면 두 사람의 궁합을 살펴봅니다.",
      },
      {
        icon: Heart,
        color: "#e45c5c",
        label: "이별 & 재결합 가능성",
        sub: "헤어짐이나 재회의 가능성을 사주로 풀어봅니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "연애 운명 카드",
        sub: "타로 카드로 사랑의 방향을 읽어봅니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "결혼 & 장기 연애 운",
        sub: "결혼이나 장기 관계의 가능성을 알아봅니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "평생 인연 대운",
        sub: "평생 흐르는 사랑의 대운을 정리합니다.",
      },
    ],
    midBubble:
      "선화가 직접\n연애 비책을 알려드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "그 인연,\n놓치지 않도록\n제가 도와드릴게요!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "선화소자 연애비책\n프리미엄 풀이",
    paySubtitle: "풀버전 · 연애 심층 분석 포함",
    features: [
      "운명 인연 시기 예측",
      "이상형 & 연애 스타일",
      "월별 연애 흐름 안내",
      "궁합 & 현재 관계 분석",
      "이별/재결합 가능성",
      "맞춤형 연애 조언",
    ],
  },
  "3": {
    character: "/main/sajudetail/fortune-detail-3.png",
    character2: "/main/sajudetail/fortune-detail-3-2.png",
    character3: "/main/sajudetail/fortune-detail-3-3.png",
    situationCharacter: "/images/fortune-detail-2.jpg",
    situationCharacter1: "/main/saju-result/sub04.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "좋습니다. 살펴보겠습니다.\n당신의 재물운을 읽어보니\n중요한 내용을 전해드릴게요.",
    introText:
      "좋습니다. 살펴보겠습니다.\n당신의 재물운을 읽어보니\n중요한 내용을 전해드릴게요.",
    chapters: [
      {
        icon: Star,
        color: "#e8a245",
        label: "2026 재물운 핵심 요약",
        sub: "올해 재물의 흐름과 핵심 기운을 정리합니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "직업 & 사업 운세",
        sub: "직장과 사업 방향의 운세를 살펴봅니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "월별 재물 흐름",
        sub: "1월부터 12월까지 재물의 흐름을 월별로 봅니다.",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "투자 & 재테크 운",
        sub: "투자와 재테크에 유리한 시기를 알아봅니다.",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "사주 재물 핵심 풀이",
        sub: "사주팔자로 본 재물 기운을 풀어드립니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "부동산 & 이동 운",
        sub: "부동산과 이사, 이직 운을 살펴봅니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "재물 운명 카드",
        sub: "타로 카드로 재물의 방향을 읽어봅니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "귀인 & 조력자 운",
        sub: "재물을 도와줄 귀인이 나타나는 시기를 봅니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "평생 재물 대운",
        sub: "평생 흐르는 재물 대운을 정리합니다.",
      },
    ],
    midBubble:
      "명천이 직접\n재물 비책을 알려드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "풍요로운\n재물운이\n기다립니다!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "명천도령 재물보감\n프리미엄 풀이",
    paySubtitle: "풀버전 · 재물 심층 분석 포함",
    features: [
      "재물운 핵심 요약",
      "직업/사업 방향 분석",
      "월별 재물 흐름",
      "투자 유리한 시기",
      "귀인 & 조력자 운",
      "맞춤형 재물 조언",
    ],
  },
  "4": {
    character: "/main/sajudetail/fortune-detail-4.png",
    character2: "/main/sajudetail/fortune-detail-4-2.png",
    character3: "/main/sajudetail/fortune-detail-4-3.png",
    situationCharacter: "/images/fortune-detail-2.jpg",
    situationCharacter1: "/main/saju-result/sub05.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "좋습니다. 풀어드리겠습니다.\n당신의 사주를 살펴보니\n꼭 알려드려야 할 말씀이 있습니다.",
    introText:
      "좋습니다. 풀어드리겠습니다.\n당신의 사주를 살펴보니\n꼭 알려드려야 할 말씀이 있습니다.",
    chapters: [
      {
        icon: Star,
        color: "#e8a245",
        label: "사주 핵심 요약",
        sub: "당신의 사주팔자 핵심 기운을 정리합니다.",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "오행 & 용신 분석",
        sub: "오행의 균형과 용신을 풀어드립니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "대운 & 세운 흐름",
        sub: "대운과 올해 세운의 흐름을 살펴봅니다.",
      },
      {
        icon: Heart,
        color: "#e45c5c",
        label: "사랑 & 인연 운",
        sub: "사주로 본 인연과 결혼 운을 알아봅니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "직업 & 재물 적성",
        sub: "적성에 맞는 직업과 재물운을 봅니다.",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "건강 & 관리 포인트",
        sub: "사주로 본 건강 주의 사항을 알려드립니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "운명 카드",
        sub: "타로 카드로 올해 운명의 방향을 읽습니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "귀인 & 행운의 방향",
        sub: "귀인이 나타나는 시기와 방향을 봅니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "평생 대운",
        sub: "평생 흐르는 대운의 전체 흐름을 정리합니다.",
      },
    ],
    midBubble: "만월이 직접\n사주를 풀어드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "당신의 사주에는\n특별한 기운이\n담겨 있습니다!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "만월공자 사주풀이\n프리미엄 풀버전",
    paySubtitle: "풀버전 · 사주 심층 분석 포함",
    features: [
      "오행 & 용신 분석",
      "대운 & 세운 흐름",
      "사랑/재물/건강 통합",
      "직업 적성 분석",
      "귀인 시기 예측",
      "평생 대운 제공",
    ],
  },
};

// ── Main component ────────────────────────────────────────────────────────────

export default function FortuneResult({ id, title, name }: FortuneResultProps) {
  const content = CONTENT[id] ?? CONTENT["1"];
  const character = content.character;
  const character2 = content.character2;
  const character3 = content.character3;
  const situationCharacter = content.situationCharacter;
  const payCharacter = content.payCharacter ?? "/images/fortune-pay-char.jpg";
  const situationCharacter1 = content.situationCharacter1;
  return (
    <div className="min-h-screen bg-[#f0ece4] relative overflow-x-hidden flex flex-col">
      {/* ── Header ── (고정, 스크롤 시 움직이지 않음) */}
      <Navbar headerClassName="fixed top-0 left-0 right-0 z-50 bg-[#f0ece4]/90 border-[oklch(0.88_0.005_75)]" />

      {/* Left background  */}
      <div
        className="pointer-events-none fixed left-0 bottom-0 hidden xl:block h-[760px] w-[600px] bg-cover bg-left-bottom bg-no-repeat opacity-80 z-0"
        style={{ backgroundImage: "url('/main/wall01.png')" }}
        aria-hidden="true"
      />
      {/* Right background  */}
      <div
        className="pointer-events-none fixed right-0 bottom-0 hidden xl:block h-[560px] w-[600px] bg-cover bg-right-bottom bg-no-repeat opacity-80 z-0"
        style={{ backgroundImage: "url('/main/wall02.png')" }}
        aria-hidden="true"
      />

      {/* ── Page content ── (navbar h-14 = 3.5rem 아래부터) */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-[3.5rem] pb-20 gap-0">
        {/* 1. Intro character panel — 뷰포트 높이에 맞게 상하단 꽉 참 */}
        <section className="w-full max-w-[450px] h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)]">
          <Link
            href="/"
            className="absolute top-[calc(3.5rem+0.75rem)] left-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
            aria-label="뒤로가기"
          >
            <ChevronLeft className="relative w-4 h-4 text-foreground" />
          </Link>

          {/* 1. character = 바탕이미지 (background) + character2 + character3 */}
          <div className="relative w-full h-full overflow-hidden  shadow-2xl">
            <Image
              src={character}
              alt=""
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* 2. character2 = 사람이미지 (person) — 상단 중앙, 부모 넘어 확장 */}
            <div className="absolute left-1/2 top-[15%] z-10 w-[125%] min-w-[500px] -translate-x-1/2">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={character2}
                  alt={title}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <div
              className="absolute inset-0 z-[15] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.7) 100%)",
              }}
              aria-hidden="true"
            />

            {/* 3. character3 = 두루마리 이미지 + 텍스트, 4. 버튼 — 배경 위, 두루마리 밑 */}
            <div className="absolute bottom-[30px] left-0 right-0 z-20 flex flex-col px-4 pb-2">
              <div className="relative w-full flex-shrink-0">
                <Image
                  src={character3}
                  alt=""
                  width={360}
                  height={140}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center px-10 py-6">
                  <p className="font-jejumyeongjo text-[16px] mb-2 text-[oklch(0.25_0.02_50)] leading-relaxed whitespace-pre-line text-center">
                    {content.greeting}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Chapter list */}
        <section className="w-full max-w-[450px] bg-[#FFFCF5] mt-8 space-y-3 pb-20">
          {content.chapters.map(({ icon: Icon, color, label, sub }, i) => (
            <div
              key={i}
              className="mt-4 mb-4 flex items-start gap-2 py-4 px-5 bg-white rounded-xl shadow-sm border border-[oklch(0.95_0.005_75)] max-w-[380px] mx-auto"
            >
              <div
                className="mt-0.5 w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: `${color}22`,
                  border: `1px solid ${color}55`,
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-foreground leading-tight">
                  {label}
                </p>
                <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 3. Mid-character speech bubble scene */}
        <section className="w-full mt-20 mb-40 max-w-[450px] mt-10 flex flex-col items-center gap-4">
          <div className="relative w-100 h-156 shrink-0  overflow-hidden shadow-md">
            <Image
              src={situationCharacter}
              alt="만월"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="absolute mt-96 w-full max-w-[450px] mx-auto">
            <img
              src="/main/saju-result/textbuble.png" // 이미지 파일 경로
              alt="말풍선"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 4. Blurred preview block */}
        <section className="w-full max-w-[450px] mt-6 relative rounded-2xl overflow-hidden shadow-inner">
          {/* Fake content rows — blurred */}
          <div
            className="bg-white/60 px-5 py-6 space-y-3 select-none"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <div
                  className="h-3 rounded-full bg-foreground/10"
                  style={{ width: `${65 + (i % 3) * 12}%` }}
                />
                <div
                  className="h-2.5 rounded-full bg-foreground/7"
                  style={{ width: `${48 + (i % 4) * 10}%` }}
                />
              </div>
            ))}
          </div>
          {/* Blur + lock overlay */}
          <div className="absolute inset-0 backdrop-blur-[6px] bg-[#f0ece4]/40 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow mb-3">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="9"
                  width="14"
                  height="11"
                  rx="2"
                  stroke="#c9a96e"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 9V6a4 4 0 0 1 8 0v3"
                  stroke="#c9a96e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-[13px] font-semibold text-foreground">
              사주 풀이에 맞춤 판결 미정
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              결제 후 전체 내용을 확인하세요
            </p>
          </div>
        </section>

        {/* 5. Second speech bubble scene */}
        <section className="w-full max-w-[450px] mt-8 relative flex justify-end">
          {/* 캐릭터 이미지: 오른쪽 */}
          <div className="mb-20 relative w-80 h-130 shrink-0 overflow-hidden shadow-md">
            <Image
              src={situationCharacter1}
              alt="만월"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* 말풍선 이미지: 캐릭터 위 왼쪽 */}
          <div className="-ml-25 -mt-15 absolute left-20 top-90 w-90 max-w-[500px]">
            <img
              src="/main/saju-result/textbuble02.png"
              alt="말풍선"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 6. Payment card */}
        <FortunePaymentCard />
      </div>
    </div>
  );
}
