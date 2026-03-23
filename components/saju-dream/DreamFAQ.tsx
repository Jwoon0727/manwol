'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "'엄마가 환하게 웃는 꿈', 복권 살까요?",
    a: "길몽이긴 하지만 복권보다는 인간관계 투자가 더 효과적입니다. 이 꿈은 '지지받는 느낌'을 현실에서 확인하라는 신호이기도 합니다. 감사 메시지를 먼저 보내보세요.",
  },
  {
    q: '가족이 다치는 꿈... 너무 불안해요.',
    a: '직접적인 흉조보다는 내 안의 걱정이 투영된 경우가 많습니다. 꿈에서 느낀 감정을 기억해두고, 실제 가족 안부를 확인하면 불안이 빠르게 해소됩니다.',
  },
  {
    q: '돌아가신 부모님 꿈은 무조건 흉몽인가요?',
    a: '반드시 흉몽은 아닙니다. 온화한 표정으로 등장하거나 말없이 지켜보는 꿈은 심리적 위로·보호의 의미입니다. 슬프거나 고통스러운 표정일 때만 건강·관계 점검 신호로 받아들이세요.',
  },
  {
    q: '형제와 반복해 싸우는 꿈... 직장 동료랑 연관?',
    a: '네! 꿈속 형제는 현실 협업 파트너일 수도, 역할 조정 미팅으로 갈등을 미리 차단.',
  },
  {
    q: '가족이 모두 모여 밥을 먹는 꿈은?',
    a: '대표적인 화합·길몽입니다. 공동 목표 달성, 가정 안정, 관계 회복을 상징하며 현재 진행 중인 일이 원만히 마무리될 것을 예고합니다.',
  },
  {
    q: '친척에게 돈을 받는 꿈은 길몽인가요?',
    a: '대체로 길몽입니다. 인맥·네트워크를 통한 기회나 지원이 찾아올 것을 암시하며, 재물운이 열리는 시기임을 뜻하기도 합니다.',
  },
  {
    q: '가족 꿈을 자주 꾸는 이유는 무엇인가요?',
    a: '스트레스·불안·그리움이 높아지거나 중요한 선택을 앞두고 있을 때 가족이 꿈에 자주 등장합니다. 오행적으로는 목(木)·토(土) 기운이 활성화된 시기에 가족 관련 꿈이 잦아집니다.',
  },
]

export default function DreamFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full py-20" style={{ background: '#111111' }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Centered heading */}
        <h2
          className="font-bold text-center mb-12 leading-tight"
          style={{ fontSize: '1.9rem' }}
        >
          <span style={{ color: '#e8e3d8' }}>가족 꿈 FAQ </span>
          <span style={{ color: '#c8973a' }}>현실 적용 꿀팁</span>
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid #2a2a2a',
                  background: '#1e1e1e',
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{ fontSize: '1rem', color: '#e8e3d8' }}
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
                      color: '#888',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
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
                    className="px-6 pb-5"
                    style={{ borderTop: '1px solid #2a2a2a' }}
                  >
                    <p
                      className="text-sm leading-relaxed pt-4"
                      style={{ color: '#aaa' }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
