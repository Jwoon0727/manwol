'use client'

import { useState } from 'react'

interface AccordionItem {
  title: string
  period: string
  tag: string
  left: { label: string; body: string }
  right: { label: string; body: string }
}

const items: AccordionItem[] = [
  {
    title: '부모님이 웃으며 나오는 꿈',
    period: '길몽 | 행운·화합',
    tag: '길몽',
    left: { label: '꿈 풀이', body: '부모님이 밝게 웃으며 나타나는 꿈은 가정 화합과 심리적 안정의 신호입니다. 현실에서 지지 기반이 탄탄하다는 의미로 해석됩니다.' },
    right: { label: '행동 가이드', body: '이 시기에는 가족과의 소통을 늘리고 중요한 결정을 내리기 좋은 타이밍입니다. 협력이 필요한 일을 추진하면 효과적입니다.' },
  },
  {
    title: '돌아가신 부모님이 나오는 꿈',
    period: '혼합 | 경고·위로',
    tag: '혼합',
    left: { label: '꿈 풀이', body: '고인이 된 부모님이 꿈에 나타나는 것은 심리적 그리움이거나, 현재 상황에서 도움이 필요하다는 내면의 신호일 수 있습니다.' },
    right: { label: '행동 가이드', body: '억눌린 감정을 해소하고 가족 관계를 점검해보세요. 중요한 결정 앞에서 신중함이 요구되는 시기입니다.' },
  },
  {
    title: '형제자매와 싸우는 꿈',
    period: '흉몽 | 갈등·긴장',
    tag: '흉몽',
    left: { label: '꿈 풀이', body: '형제·자매와의 다툼 꿈은 현실의 경쟁 심리나 관계 마찰을 반영합니다. 주변 사람과의 갈등이 수면 위로 올라오는 신호입니다.' },
    right: { label: '행동 가이드', body: '오해가 생기기 전에 먼저 소통하고, 감정을 직접 표현하는 연습이 필요합니다. 충돌보다 타협점을 먼저 찾아보세요.' },
  },
  {
    title: '친척이 선물을 주는 꿈',
    period: '길몽 | 재물·기회',
    tag: '길몽',
    left: { label: '꿈 풀이', body: '친척에게 선물을 받는 꿈은 외부로부터 지원이나 기회가 찾아올 것을 암시합니다. 인맥을 통한 좋은 소식이 예상됩니다.' },
    right: { label: '행동 가이드', body: '주변 네트워크에 적극적으로 연락을 취하세요. 오래된 인연에서 뜻밖의 기회가 올 수 있습니다.' },
  },
  {
    title: '가족이 아픈 꿈',
    period: '흉몽 | 걱정·불안',
    tag: '흉몽',
    left: { label: '꿈 풀이', body: '가족 구성원이 병들거나 다치는 꿈은 해당 가족에 대한 걱정이 심리로 발현된 것일 수 있습니다. 건강 점검 신호로 받아들이세요.' },
    right: { label: '행동 가이드', body: '실제 가족의 건강 상태를 확인하고 정기검진을 독려하세요. 스스로의 피로도 점검이 함께 필요합니다.' },
  },
  {
    title: '어린 시절 가족과 함께하는 꿈',
    period: '길몽 | 추억·안정',
    tag: '길몽',
    left: { label: '꿈 풀이', body: '과거의 행복했던 가족 장면이 나타나는 꿈은 심리적 안정과 회귀 본능을 나타냅니다. 현재 스트레스 해소의 신호이기도 합니다.' },
    right: { label: '행동 가이드', body: '지금 이 시기는 재충전이 필요한 때입니다. 무리하게 확장하기보다 내실을 다지는 것이 유리합니다.' },
  },
]

const tagStyle = (tag: string) => {
  if (tag === '길몽') return { bg: '#1e3a2a', color: '#4caf7d' }
  if (tag === '흉몽') return { bg: '#3a1e1e', color: '#d9534f' }
  return { bg: '#3a341e', color: '#c8973a' }
}

export default function DreamAccordion60() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full" style={{ background: '#1a1a1a' }}>
      {/* ── White hero card with rounded bottom ── */}
      <div
        className="w-full px-6 pt-12 pb-14"
        style={{
          background: '#ffffff',
          borderRadius: '0 0 2rem 2rem',
          textAlign: 'center',
        }}
      >
        <p className="text-xs font-semibold mb-4" style={{ color: '#c8973a' }}>
          Best 상황별 해설
        </p>
        <h2 className="font-bold leading-tight mb-1" style={{ fontSize: '2rem', color: '#1a1a1a' }}>
          가족·친척 꿈,
        </h2>
        <h2 className="font-bold leading-tight mb-6" style={{ fontSize: '2rem', color: '#1a1a1a' }}>
          상황별 상세 해몽 60선
        </h2>
        <div className="text-sm leading-relaxed mx-auto" style={{ color: '#666', maxWidth: '560px' }}>
          <p>&ldquo;엄마가 울면서 전화하는 꿈&rdquo;, &ldquo;시어머니가 갑자기 집에 오는 꿈&rdquo;,</p>
          <p>&ldquo;아이가 마트에서 사라지는 꿈&rdquo;처럼 검색창에 그대로 칠 법한 가족·친척 꿈들을 한 번에 모았습니다.</p>
          <p>단순 길몽·흉몽을 넘어, 지금 내 마음과 생활에서 점검하면 좋을 포인트까지 함께 정리해 드립니다.</p>
        </div>
      </div>

      {/* ── Dark accordion body ── */}
      <div className="w-full py-14" style={{ background: '#1a1a1a' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* accordion list */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const ts = tagStyle(item.tag)
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid #2e2e2e', background: '#222' }}
              >
                {/* trigger row */}
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                      style={{ background: ts.bg, color: ts.color }}
                    >
                      {item.tag}
                    </span>
                    <span className="font-semibold text-sm" style={{ color: '#e8e3d8' }}>
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs hidden sm:block" style={{ color: '#666' }}>
                      {item.period}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        color: '#888',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* expanded content */}
                {isOpen && (
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 pb-5"
                    style={{ borderTop: '1px solid #2e2e2e' }}
                  >
                    <div className="pt-4">
                      <p className="text-xs font-bold mb-2" style={{ color: '#c8973a' }}>
                        {item.left.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#bbb' }}>
                        {item.left.body}
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-xs font-bold mb-2" style={{ color: '#c8973a' }}>
                        {item.right.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#bbb' }}>
                        {item.right.body}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
