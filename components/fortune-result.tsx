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
import FivePillars from "./saju-detail/five-pillars";
import ChecklistSection from "./saju-detail/checklist-section";
import MonthlyAccordion from "./saju-detail/monthly-accordion";

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
    character2?: string;
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
        label: " 핵심 요약",
        sub: "정리합니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "분석",
        sub: "알아봅니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "운세 리뷰",
        sub: "1월",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "시기",
        sub: "운명",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "현재 ",
        sub: "현재 ",
      },
      {
        icon: Heart,
        color: "#e45c5c",
        label: "가능성",
        sub: ".",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "카드",
        sub: "카드",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "운",
        sub: " 알아봅니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "대운",
        sub: "정리합니다.",
      },
    ],
    midBubble:
      "선화가 직접\n연애 비책을 알려드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "그 인연,\n놓치지 않도록\n제가 도와드릴게요!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "선화소자 연애비책\n프리미엄 풀이",
    paySubtitle: "풀버전 · 연애 심층 분석 포함",
    features: [
      "풍부하고 세밀한 사주 풀이",
      "직관적인 핵심 요약",
      "월별 운세 상세 안내",
      "사랑/재물/건강 분야별 분석",
      "평생 대운 흐름 제공",
      "맞춤형 조언 포함",
    ],
  },
  "3": {
    character: "/main/sajudetail/fortune-detail-4.png",
    character2: "/main/sajudetail/fortune-detail-4-2.png",
    character3: "/main/saju-result/textbg.png",
    situationCharacter: "/main/sajudetail/fortune-detail-4.png",
    situationCharacter1: "/main/sajudetail/fortune-detail-4.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "좋습니다. 풀어드리겠습니다.\n당신의 사주를 살펴보니\n꼭 알려드려야 할 말씀이 있습니다.",
    introText:
      "좋습니다. 풀어드리겠습니다.\n당신의 사주를 살펴보니\n꼭 알려드려야 할 말씀이 있습니다.",
    chapters: [
      {
        icon: Star,
        color: "#e8a245",
        label: " 핵심 요약",
        sub: "정리합니다.",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "분석",
        sub: "살펴봅니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "운세 리뷰",
        sub: "1월",
      },
      {
        icon: Heart,
        color: "#e45c5c",
        label: "시기",
        sub: "운명",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "현재 ",
        sub: "투 ",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "운",
        sub: " 살펴봅니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "카드",
        sub: "읽어봅니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "운",
        sub: "봅니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "운",
        sub: "정리합니다.",
      },
    ],
    midBubble: "만월이 직접\n사주를 풀어드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "당신의 사주에는\n특별한 기운이\n담겨 있습니다!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "만월공자 사주풀이\n프리미엄 풀버전",
    paySubtitle: "풀버전 · 사주 심층 분석 포함",
    features: [
      "풍부하고 세밀한 사주 풀이",
      "직관적인 핵심 요약",
      "월별 운세 상세 안내",
      "사랑/재물/건강 분야별 분석",
      "평생 대운 흐름 제공",
      "맞춤형 조언 포함",
    ],
  },
  "4": {
    character: "/main/saju-result/fortune-detail-030.png",

    character3: "/main/saju-result/textbg.png",
    situationCharacter: "/main/saju-result/fortune-detail-030.png",
    situationCharacter1: "/main/saju-result/fortune-detail-030.png",
    payCharacter: "/images/fortune-pay-char.jpg",
    greeting:
      "좋습니다. 살펴보겠습니다.\n당신의 재물운을 읽어보니\n중요한 내용을 전해드릴게요.",
    introText:
      "좋습니다. 살펴보겠습니다.\n당신의 재물운을 읽어보니\n중요한 내용을 전해드릴게요.",
    chapters: [
      {
        icon: Star,
        color: "#e8a245",
        label: " 핵심 요약",
        sub: "정리합니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "분석",
        sub: "살펴봅니다.",
      },
      {
        icon: CalendarDays,
        color: "#6ab0e8",
        label: "운세 리뷰",
        sub: "1월",
      },
      {
        icon: BookOpen,
        color: "#8fbc6e",
        label: "시기",
        sub: "투 ",
      },
      {
        icon: Shuffle,
        color: "#c9a96e",
        label: "현재 ",
        sub: "사주팔자로 본 재물 기운을 풀어드립니다.",
      },
      {
        icon: Home,
        color: "#8fbc6e",
        label: "운",
        sub: " 살펴봅니다.",
      },
      {
        icon: Shuffle,
        color: "#a07cde",
        label: "카드",
        sub: "읽어봅니다.",
      },
      {
        icon: Star,
        color: "#e8a245",
        label: "운",
        sub: "봅니다.",
      },
      {
        icon: Briefcase,
        color: "#c9a96e",
        label: "대운",
        sub: "정리합니다.",
      },
    ],
    midBubble:
      "명천이 직접\n재물 비책을 알려드립니다.\n결제 후 바로 확인하세요!",
    endBubble1: "풍요로운\n재물운이\n기다립니다!",
    endBubble2: "지금 바로\n확인해보시겠어요?",
    payTitle: "명천도령 재물보감\n프리미엄 풀이",
    paySubtitle: "풀버전 · 재물 심층 분석 포함",
    features: [
      "풍부하고 세밀한 사주 풀이",
      "직관적인 핵심 요약",
      "월별 운세 상세 안내",
      "사랑/재물/건강 분야별 분석",
      "평생 대운 흐름 제공",
      "맞춤형 조언 포함",
    ],
  },
};

// ── Main component ────────────────────────────────────────────────────────────

export default function FortuneResult({ id, title, name }: FortuneResultProps) {
  const content = CONTENT[id] ?? CONTENT["1"];
  const character = content.character;
  const character3 = content.character3;
  const situationCharacter = content.situationCharacter;
  const payCharacter = content.payCharacter ?? "/images/fortune-pay-char.jpg";
  const situationCharacter1 = content.situationCharacter1;
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden flex flex-col">
      {/* ── Header ── (고정, 스크롤 시 움직이지 않음) */}
      <Navbar headerClassName="fixed top-0 left-0 right-0 z-50 bg-white border-[oklch(0.88_0.005_75)]" />

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
      <div className="relative z-10 flex flex-col items-center  pt-[3.5rem] pb-20 gap-0">
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

            {/* 2. character2 = 사람이미지 (person, 선택) — 상단 중앙, 부모 넘어 확장 */}
            {content.character2 ? (
              <div className="absolute left-1/2 top-[15%] z-10 w-[125%] min-w-[500px] -translate-x-1/2">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={content.character2}
                    alt={title}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            ) : null}
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
                  <p
                    className="font-jejumyeongjo mb-2 text-[oklch(0.25_0.02_50)] leading-relaxed whitespace-pre-line text-center"
                    style={{ fontSize: "clamp(12px, 3.5vw, 16px)" }}
                  >
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
                <p className="font-pretendard text-[14px] font-semibold text-foreground leading-tight">
                  {label}
                </p>
                <p className="font-pretendard text-[12px] text-muted-foreground mt-1 leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 3. Mid-character speech bubble scene */}
        <section className="w-full mt-28 mb-50 md:mt-20 mb-20 md:mb-40 max-w-[450px] mx-auto flex justify-center">
          <div className="relative w-[70%] sm:w-[60%] md:w-[90%] aspect-[2/3]">
            {/* 캐릭터 */}
            <Image
              src={situationCharacter}
              alt="만월"
              fill
              className="object-cover object-top"
            />

            {/* 말풍선 + 텍스트 2열 (midBubble을 줄 단위로 반으로 나눔, 별도 필드 없음) */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[95%]">
              <div className="relative">
                <img
                  src="/main/saju-result/textbuble.png"
                  alt="말풍선"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-between gap-2 px-[5%] py-[15%]">
                  <p className="font-pretendard mt-[26%] mr-[2%]  flex-1.2 text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[22px] xl:text-[23px] leading-tight font-medium text-foreground whitespace-pre-line">
                    만월성 만의 <br /> 노하우가 담긴 <br />{" "}
                    <span className="font-pretendard font-bold">
                      정확한 풀이예시
                    </span>
                    를 <br /> 보여드리죠.
                  </p>
                  <p className="font-pretendard mb-[3%] mr-[2%] flex-1 text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[22px] xl:text-[24px] leading-tight font-medium text-foreground whitespace-pre-line">
                    위 항목들이 <br /> 어떻게 나오는지 <br /> 궁금하시다고요?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FivePillars previewMode />
        <ChecklistSection previewMode />
        <MonthlyAccordion previewMode />

        {/* 5. Second speech bubble scene */}
        <section className="w-full max-w-[450px] mt-38 mb-30 mx-auto flex justify-end">
          <div className="relative w-[70%] sm:w-[60%] md:w-[85%] aspect-[2/3]">
            {/* 캐릭터 */}
            <Image
              src={situationCharacter1}
              alt="만월"
              fill
              className="object-cover object-top  shadow-md"
            />

            {/* 말풍선 + 텍스트 2열 — 중앙보다 왼쪽에 배치 */}
            {/* 💡 수정 포인트: w-[95%]를 w-[115%]로 변경하여 너비를 넓혔습니다. (필요에 따라 110%, 120%, 130% 등으로 조절해 보세요) */}
            <div className="absolute bottom-[-10%] left-[25%] sm:left-[10%] md:right-[50%] -translate-x-1/2 w-[115%]">
              <div className="relative">
                <img
                  src="/main/saju-result/textbuble2.png"
                  alt="말풍선"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-between gap-2 px-[10%] py-[15%]">
                  <p className="font-pretendard mt-[25%] ml-[2%] flex-1.25 text-center text-[18px] sm:text-[15px] md:text-[19px] lg:text-[20px] xl:text-[21px] leading-tight font-medium text-foreground whitespace-pre-line">
                    상세한
                    <br /> 풀이를 위해 <br /> 소정의{" "}
                    <span className="font-pretendard font-bold">복채가</span>
                    <br />{" "}
                    <span className="font-pretendard font-bold">필요</span>
                    합니다
                  </p>
                  <p className="font-pretendard ml-[10%] flex-1 text-center text-[18px] sm:text-[15px] md:text-[19px] lg:text-[20px] xl:text-[21px] leading-tight font-medium text-foreground whitespace-pre-line">
                    위와 같은
                    <br /> 사주 분석을
                    <br /> 바로 알려드리고
                    <br /> 싶지만...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6. Payment card */}
        <FortunePaymentCard />
      </div>
    </div>
  );
}
