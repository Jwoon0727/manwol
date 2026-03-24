import Image from "next/image";
import { Check } from "lucide-react";

export default function DarkCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--navy-deep)] py-16 md:py-24">
      {/* Background image */}
      <Image
        src="/main/content.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Text */}
        <div className="flex-1 pl-[8%] text-white md:pl-[5%]">
          <p className="font-pretendard mb-0.5 font-bold text-lg text-white md:mb-1.5 md:text-2xl">
            친근함 속에 숨겨진
          </p>
          <h2 className="font-pretendard mb-3 text-lg font-bold leading-tight text-balance md:mb-5 md:text-2xl">
            <span
              className="text-white font-medium text-4xl"
              style={{ fontFamily: "'Yeongwol', serif" }}
            >
              강력한 명리학
            </span>
            의 데이터
          </h2>
          <p className="font-pretendard mb-4 text-sm leading-relaxed text-white md:mb-6 md:max-w-md md:text-sm">
            만월성은 단순히 운세를 보여주는 것에서 그치지 않습니다.
            <br />
            개성 넘치는 캐릭터 뒤에는 6인의 점술가들의 정교한 사주 풀이 로직이
            담겨 있어,
            <br />
            어디서든 볼 수 없는 정밀한 운세 경험을 선사합니다.
          </p>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li className="flex items-start gap-1.5 text-xs text-white md:gap-2 md:text-sm">
              <Check className="font-pretendard mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-white md:h-4 md:w-4" />
              6인의 실존 점술가들이 검수한 풀이 데이터
            </li>
            <li className="flex items-start gap-1.5 text-xs text-white md:gap-2 md:text-sm">
              <Check className="font-pretendard mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-white md:h-4 md:w-4" />
              쉽게 이해할 수 있는 현대적인 해석 풀이
            </li>
          </ul>
        </div>

        {/* Overlapping illustration cards */}
        <div className="relative h-[220px] w-[180px] flex-shrink-0 md:h-[440px] md:w-[340px]">
          {/* front card — rotated clockwise, shifted right (앞에 표시) */}
          <div
            className="absolute top-10 right-2 z-20 w-[150px] rounded-2xl overflow-hidden md:top-14 md:right-13 md:w-[280px]"
            style={{
              transform: "rotate(7deg)",
              transformOrigin: "bottom center",
            }}
          >
            <Image
              src="/main/content_card.png"
              alt=""
              width={280}
              height={380}
              className="object-cover w-full"
              aria-hidden="true"
            />
          </div>
          {/* back card — rotated counter-clockwise, shifted left (뒤에 표시) */}
          <div
            className="absolute top-0 right-2 z-10 w-[150px] rounded-2xl overflow-hidden md:right-25 md:w-[280px]"
            style={{
              transform: "rotate(-16deg)",
              transformOrigin: "bottom center",
            }}
          >
            <Image
              src="/main/content_card.png"
              alt="만월공자 사주 분석"
              width={280}
              height={380}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
