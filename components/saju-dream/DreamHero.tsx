'use client'

const tabs = ['부모', '형제·자매', '자녀', '조부모', 'FAQ', '상황별 상세풀이']

export default function DreamHero() {
  return (
    <section
      className="w-full"
      style={{
        background: '#1a1a1a',
        borderRadius: '0 0 2rem 2rem',
      }}
    >
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-0 flex flex-col items-center text-center">
        {/* pill badge */}
        <div
          className="text-xs px-4 py-1.5 rounded-full mb-6"
          style={{
            background: 'transparent',
            border: '1px solid #444',
            color: '#aaa',
          }}
        >
          현 파트너·전 애인·백시랑·친구 꿈이 전하는 40가지 리얼 메시지!
        </div>

        {/* title */}
        <h1
          className="font-serif font-bold leading-tight mb-4 text-balance"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}
        >
          <span style={{ color: '#c8973a' }}>가족 친척이 나오는</span>
          <br />
          <span style={{ color: '#e8e3d8' }}>꿈 해몽 총정리</span>
        </h1>

        {/* subtitle */}
        <p className="text-sm mb-8" style={{ color: '#aaa', lineHeight: '1.7' }}>
          길몽·흉몽 해석과 현실 행동 팁을 한눈에 확인하세요.
        </p>

        {/* tab nav */}
        <div className="flex flex-wrap justify-center gap-2 pb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className="text-sm px-4 py-1.5 rounded-full transition-colors"
              style={{
                background: i === 0 ? '#e8e3d8' : 'transparent',
                color: i === 0 ? '#1a1a1a' : '#aaa',
                border: '1px solid',
                borderColor: i === 0 ? '#e8e3d8' : '#444',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
