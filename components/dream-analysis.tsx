"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const POPULAR_TAGS = [
  "#뱀꿈",
  "#돼지꿈",
  "#이빨 빠지는 꿈",
  "#돈 줍는 꿈",
  "#물에 빠지는 꿈",
  "#고양이 꿈",
  "#떨어지는 꿈",
];

type DreamItem = {
  image: string;
  title: string;
  sub: string;
  iconBg: string;
};

const DREAM_CATEGORIES: DreamItem[] = [
  {
    image: "/main/dreamicon/Icon.png",
    title: "특정 사람이 나오는 꿈",
    sub: "가족, 친구, 연인, 유명인",
    iconBg: "bg-[#FBE2FF]",
  },
  {
    image: "/main/dreamicon/Icon2.png",
    title: "동물이 나오는 꿈",
    sub: "12지신, 반려동물, 곤충",
    iconBg: "bg-green-100",
  },
  {
    image: "/main/dreamicon/Icon9.png",
    title: "태몽",
    sub: "기쁨, 슬픔, 공포",
    iconBg: "bg-[#FFA9A3]",
  },
  {
    image: "/main/dreamicon/Icon3.png",
    title: "재물, 물건이 나오는 꿈",
    sub: "돈, 보석, 디지털기기, 탈것",
    iconBg: "bg-[#FFFEE1]",
  },
  {
    image: "/main/dreamicon/Icon4.png",
    title: "특정 장소나 공간이 나오는 꿈",
    sub: "집, 화장실, 학교, 병원",
    iconBg: "bg-[#FFE4E4]",
  },
  {
    image: "/main/dreamicon/Icon10.png",
    title: "감정이 느껴지는 꿈",
    sub: "기쁨, 슬픔, 공포",
    iconBg: "bg-[#D9FFCA]",
  },
  {
    image: "/main/dreamicon/Icon5.png",
    title: "맛있는 밥을 먹는 꿈",
    sub: "요리, 먹방, 잔치, 술",
    iconBg: "bg-[#FFE4D6]",
  },
  {
    image: "/main/dreamicon/Icon6.png",
    title: "특정 행동을 하는 꿈",
    sub: "이동, 변화, 사고",
    iconBg: "bg-[#FFF0D2]",
  },
  {
    image: "/main/dreamicon/Icon11.png",
    title: "화창한 햇살을 느끼는 꿈",
    sub: "날씨, 산, 바다, 우주",
    iconBg: "bg-[#FFF3EB]",
  },
  {
    image: "/main/dreamicon/Icon7.png",
    title: "영적인 경험의 꿈",
    sub: "가족, 친구, 연인, 유명인",
    iconBg: "bg-[#ECECEC]",
  },
  {
    image: "/main/dreamicon/Icon8.png",
    title: "특정 상징을 계속 보는 꿈",
    sub: "12지신, 반려동물, 곤충",
    iconBg: "bg-[#EAE9FF]",
  },
  {
    image: "/main/dreamicon/Icon12.png",
    title: "힘이 넘치는 꿈",
    sub: "신체, 임신, 질병",
    iconBg: "bg-[#FFE7EC]",
  },
];

export default function DreamAnalysis() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("#뱀꿈");

  return (
    <section className="mt-15 mb-55 py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
        꿈 해몽 분석
      </h2>

      {/* Search box */}
      <div className="flex items-center bg-[#2A2520] rounded-2xl overflow-hidden mb-5 shadow-lg">
        {/* Text area */}
        <div className="relative px-4 py-4 md:px-6 md:py-5 flex-1 min-w-0">
          <p className="text-white/50 text-[10px] md:text-[11px] font-medium mb-1 tracking-wide">
            오늘의 꿈 해몽
          </p>

          <h2 className="bg-transparent text-white text-[16px] md:text-[28px] font-extrabold leading-tight">
            간밤에 꾼 꿈, <span className="text-[#FECF61]">무슨 의미</span>
            일까요?
          </h2>
        </div>

        <button
          className="flex-shrink-0 mr-4 md:mr-8 flex items-center gap-1.5 rounded-sm font-semibold text-[12px] md:text-[14px] px-4 py-2 md:px-7 md:py-3.5 transition-opacity hover:opacity-90 text-[oklch(0.25_0.05_70)]"
          style={{ background: "#FECF61" }}
        >
          꿈 검색하기
          <ArrowRight size={14} strokeWidth={3} aria-hidden />
        </button>
      </div>

      {/* Popular tags */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <p className="flex-shrink-0 text-sm text-muted-foreground">인기 주제</p>
        {POPULAR_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-[12px] rounded-full px-3.5 py-1.5 border transition-colors font-medium ${
              activeTag === tag
                ? "border-[oklch(0.72_0.12_75)] text-[oklch(0.45_0.1_70)] bg-[#ECECEC]"
                : "border-border text-muted-foreground bg-[#ECECEC] hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.45_0.1_70)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Dream category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {DREAM_CATEGORIES.map(({ image, title, sub, iconBg }) => (
          <button
            key={title}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-border bg-card transition-all text-left group shadow-[3px_3px_6px_rgba(0,0,0,0.10)] ]"
          >
            <span
              className={`relative w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full ${iconBg}`}
            >
              <Image
                src={image}
                alt={title}
                width={30}
                height={30}
                className="object-contain"
              />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-foreground leading-snug">
                {title}
              </p>
              <p className="text-[12px] text-muted-foreground mt-0.1">{sub}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
