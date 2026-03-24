"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

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
    title: "만월공자",
    title2: "신년운세",
    buttonText: "지금 보러가기",
    image: "/main/2banner.png",
  },
  {
    id: 3,
    tagline: "2025년 나의 운명은?",
    title: "만월공자",
    title2: "신년운세",
    buttonText: "지금 보러가기",
    image: "/main/3banner.png",
  },
];

export default function HeroBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const updateIndexFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    if (w <= 0) return;
    const idx = Math.round(el.scrollLeft / w);
    setCurrent(Math.min(Math.max(0, idx), slides.length - 1));
  }, []);

  const goToSlide = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: idx * el.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[25/9] min-h-[280px] overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={updateIndexFromScroll}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="relative h-full w-full min-w-full shrink-0 snap-start snap-always"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-[center_bottom] md:object-center"
              priority={idx === 0}
            />

            {slide.image2 && (
              <div className="absolute right-0 bottom-0 z-[5] flex w-[58%] items-end justify-end pr-[6%] sm:w-[44%] md:w-[44%] md:pr-[8%] lg:w-[44%] pointer-events-none">
                <div className="relative aspect-square w-full">
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

            <div className="relative z-10 flex h-full max-w-6xl flex-col justify-center pl-[8%] pr-[10%]">
              <div className="flex w-fit flex-col items-center">
                <p className="font-pretendard mb-0.5 text-center text-[10px] font-medium tracking-wide text-white md:mb-3 md:text-lg md:tracking-widest">
                  {slide.tagline}
                </p>

                <h1
                  className="mb-3 text-center text-white md:mb-6 md:font-medium md:leading-tight"
                  style={{
                    fontFamily: "'SolmoeKimDaegeon', serif",
                    lineHeight: 1.1,
                  }}
                >
                  <span
                    className="block text-3xl md:text-6xl lg:text-7xl xl:text-8xl [@media(min-width:1800px)]:text-8xl"
                    style={{ textShadow: "6px 6px 2px #00000040" }}
                  >
                    {slide.title}
                  </span>

                  {slide.title2 && (
                    <span className="block bg-gradient-to-r from-[#FFFFFF] to-[#FEFFC9] bg-clip-text text-4xl text-transparent md:text-7xl lg:text-8xl xl:text-9xl [@media(min-width:1800px)]:text-9xl [filter:drop-shadow(6px_6px_2px_rgba(0,0,0,0.25))]">
                      {slide.title2}
                    </span>
                  )}
                </h1>

                <button
                  type="button"
                  className="font-pretendard inline-flex items-center gap-1 rounded-full bg-[#FEFFC9] px-3 py-1 text-[10px] font-semibold text-black shadow-lg transition-colors hover:bg-[var(--gold-dark)] md:px-5 md:py-2 md:text-sm"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center">
        <div className="pointer-events-auto flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === current ? "w-12 bg-white" : "w-2 bg-white/40"}`}
              aria-label={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
