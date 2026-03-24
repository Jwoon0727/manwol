"use client";

import { useState } from "react";

export function OrderConfirmForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate lookup
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {/* Title — outside the card */}
      <h1 className="font-pretendard text-2xl  font-bold text-foreground text-center tracking-tight">
        주문 확인
      </h1>

      {/* Card */}
      {/* 💡 수정 포인트: shadow-sm을 제거하고, 우측과 하단에 그림자를 주는 커스텀 클래스 shadow-[8px_8px_16px_rgba(0,0,0,0.08)]를 추가했습니다. */}
      <div className="bg-[#FCFCFC] rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.08)] border border-border p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="orderer-name"
              className="font-pretendard text-sm font-medium text-foreground"
            >
              주문자 이름
            </label>
            <input
              id="orderer-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-lg border border-input bg-[#ffffff] px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder=""
              required
            />
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="orderer-email"
              className="font-pretendard text-sm font-medium text-foreground"
            >
              주문 시 입력한 이메일
            </label>
            <input
              id="orderer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border border-input bg-[#ffffff] px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder=""
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="font-pretendard h-14 w-full rounded-md text-base font-bold tracking-wide transition-opacity duration-200 hover:opacity-90 disabled:opacity-70"
            style={{
              background: "linear-gradient(to right, #FECF61, #FFBE27)",
              color: "oklch(0.1 0 0)",
            }}
          >
            {isLoading ? "조회 중..." : "사주 결과 조회하기"}
          </button>
        </form>
      </div>

      {/* Step indicator — outside the card */}
      <p className="font-pretendard text-center text-sm text-muted-foreground">
        Step 1/2 주문 정보 입력
      </p>
    </div>
  );
}
