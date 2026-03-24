import Image from "next/image";

export function ScholarCharacter() {
  return (
    // 1. 부모 컨테이너: 기본(모바일)은 justify-center로 가운데 정렬, sm(PC) 이상은 justify-start로 좌측 정렬
    <div className="relative w-full h-full flex items-end justify-center sm:justify-start">
      {/* 2. 캐릭터 컨테이너: mx-auto를 제거하고, sm 이상일 때만 왼쪽 음수 마진(-ml-4, -ml-6) 적용 */}
      <div className="relative select-none w-[550px] sm:w-[550px] md:w-[480px] lg:w-[520px] xl:w-[600px] sm:-ml-4 md:-ml-6">
        <Image
          src="/sub/order.png"
          alt="한복을 입은 선비 캐릭터"
          width={600}
          height={640}
          className="w-full h-auto object-contain object-bottom drop-shadow-lg"
          priority
        />

        {/* 말풍선 */}
        <div
          // 💡 수정 포인트: 기본(모바일)은 left-[45%], sm(PC) 이상은 원래대로 left-[56%]
          className="absolute z-10 w-[55%] left-[40%] sm:left-[56%] bottom-[20%] sm:bottom-[30%]"
          aria-label="캐릭터 말풍선"
        >
          <div className="relative flex items-stretch w-full aspect-[5/3] min-h-[120px]">
            <img
              src="/sub/textbox.png"
              alt="말풍선 배경"
              className="absolute inset-0 w-full h-full object-fill -z-10"
            />

            <div className="relative z-10 flex w-full h-full px-[6%] pb-[6%]">
              <p className="ml-[3%] mb-[9%] flex-1 px-[4%] py-[2%] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[17px] leading-relaxed text-foreground font-medium text-center flex items-center justify-center">
                앞전에 보신 <br /> 사주 내용을 <br /> 다시 확인하고 <br />{" "}
                싶으시다고요?
              </p>
              <p className="ml-[3%] mt-[18%] flex-1 px-[4%] py-[2%] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[17px] leading-relaxed text-foreground font-medium text-center flex items-center justify-center">
                기존에 입력한 <br /> 주문자 이름과 <br /> 이메일을 <br />{" "}
                작성해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
