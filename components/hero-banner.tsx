"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tagline: "'정통 명리학으로 풀어주는 사주'",
    title: "만월공자",
    title2: "신년운세",
    buttonText: "지금 보러가기 >",
    image: "/main/banner01.png",
    image2: "/main/banner01-1.png",
  },
  {
    id: 2,
    tagline: "2025년 나의 운명은?",
    title: "명천공자",
    title2: "재물보감",
    buttonText: "지금 보러가기",
    image: "/images/card-3.jpg",
  },
  {
    id: 3,
    tagline: "2025년 나의 운명은?",
    title: "명천공자",
    title2: "재물보감",
    buttonText: "지금 보러가기",
    image: "/images/card-3.jpg",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[25/9] min-h-[280px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {/* Background image - 컨테이너에 꽉 채움 (검은 배경 노출 없음) */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-[center_bottom] md:object-center"
            priority={idx === 0}
          />

          {/* image2: 오른쪽에 배치, 바닥에 붙이고 크게 (있을 때만) */}
          {slide.image2 && (
            <div className="absolute right-0 bottom-0 w-[58%] sm:w-[44%] md:w-[44%] lg:w-[44%] flex items-end justify-end pr-[6%] md:pr-[8%] z-[5] pointer-events-none">
              <div className="relative w-full aspect-square">
                <Image
                  src={slide.image2}
                  alt=""
                  fill
                  className="object-contain object-right-bottom"
                  sizes="(max-width:640px) 42vw, (max-width:1024px) 50vw, 55vw"
                />
              </div>
            </div>
          )}

          {/* Content - 왼쪽과 동일 비율 여백 유지 (모바일~PC) */}
          <div className="relative z-10 h-full flex flex-col justify-center pl-[8%] pr-[10%] max-w-6xl">
            <div className="flex flex-col items-center w-fit">
              <p className="text-white text-[10px] md:text-lg mb-0.5 md:mb-3 tracking-wide md:tracking-widest font-medium text-center">
                {slide.tagline}
              </p>

              <h1
                className="text-white font-medium md:font-medium leading-[1.1] md:leading-tight mb-3 md:mb-6 text-center"
                style={{
                  fontFamily: "'SolmoeKimDaegeon', serif",
                }}
              >
                <span
                  className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl [@media(min-width:1800px)]:text-8xl block"
                  style={{ textShadow: "6px 6px 2px #00000040" }}
                >
                  {slide.title}
                </span>

                {slide.title2 && (
                  <span className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl [@media(min-width:1800px)]:text-9xl block bg-gradient-to-r from-[#FFFFFF] to-[#FEFFC9] bg-clip-text text-transparent [filter:drop-shadow(6px_6px_2px_rgba(0,0,0,0.25))]">
                    {slide.title2}
                  </span>
                )}
              </h1>

              <button className="inline-flex items-center gap-1 bg-[#FEFFC9] hover:bg-[var(--gold-dark)] text-black text-[10px] md:text-sm font-semibold px-3 md:px-5 py-1 md:py-2 rounded-full transition-colors shadow-lg">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-white w-12" : "bg-white/40"}`}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
