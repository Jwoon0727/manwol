"use client";

import { useState } from "react";

const faqs = [
  {
    q: "'엄마가 환하게 웃는 꿈', 복권 살까요?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "가족이 다치는 꿈... 너무 불안해요.",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "돌아가신 부모님 꿈은 무조건 흉몽인가요?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "형제와 반복해 싸우는 꿈... 직장 동료랑 연관?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "가족이 모두 모여 밥을 먹는 꿈은?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "친척에게 돈을 받는 꿈은 길몽인가요?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
  {
    q: "가족 꿈을 자주 꾸는 이유는 무엇인가요?",
    a: "네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.",
  },
];

export default function DreamFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20" style={{ background: "#0E0E0E" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Centered heading */}
        <h2
          className="font-bold text-center mb-10 leading-tight"
          style={{ fontSize: "2.5rem" }}
        >
          <span style={{ color: "#ffffff" }}>가족 꿈 FAQ </span>
          <span style={{ color: "#FFD594" }}>현실 적용 꿀팁</span>
        </h2>

        <div className="flex flex-col gap-5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  border: "0.8px solid #ffffff",
                  background: "#1e1e1e",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-12 py-6 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{ fontSize: "1.1rem", color: "#e8e3d8" }}
                  >
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="flex-shrink-0"
                    style={{
                      color: "#ffffff",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="px-12 pb-5"
                    style={{ borderTop: "1.5px solid #2a2a2a" }}
                  >
                    <p
                      className="text-sm leading-relaxed pt-4"
                      style={{ color: "#ffffff" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
