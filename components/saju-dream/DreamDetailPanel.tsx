'use client'

interface DetailRow {
  question: string
  keywords?: string
  left: { label: string; body: string }
  right: { label: string; body: string }
}

interface DreamDetailPanelProps {
  sectionLabel: string
  heading: string
  subheading: string
  description?: string
  dark?: boolean
  groups: {
    groupTitle: string
    rows: DetailRow[]
  }[]
}

function DetailCard({ row, dark }: { row: DetailRow; dark: boolean }) {
  const cardBg = dark ? '#242424' : '#ffffff'
  const cardBorder = dark ? '#2e2e2e' : '#e5e0d8'
  const titleColor = dark ? '#e8e3d8' : '#1a1a1a'
  const keywordColor = dark ? '#666' : '#999'
  const labelColor = dark ? '#aaa' : '#888'
  const tipLabelColor = '#c8973a'
  const bodyColor = dark ? '#999' : '#555'

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: `1px solid ${cardBorder}`, background: cardBg }}
    >
      {/* question header row */}
      <div
        className="flex items-baseline flex-wrap gap-x-3 gap-y-1 px-5 py-3"
        style={{ borderBottom: `1px solid ${cardBorder}` }}
      >
        <p className="text-sm font-semibold" style={{ color: titleColor }}>
          {row.question}
        </p>
        {row.keywords && (
          <span className="text-xs" style={{ color: keywordColor }}>
            {row.keywords}
          </span>
        )}
      </div>
      {/* two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="px-5 py-4" style={{ borderRight: `1px solid ${cardBorder}` }}>
          <p className="text-xs font-bold mb-2" style={{ color: labelColor }}>
            {row.left.label}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
            {row.left.body}
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="text-xs font-bold mb-2" style={{ color: tipLabelColor }}>
            {row.right.label}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
            {row.right.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DreamDetailPanel({
  sectionLabel,
  heading,
  subheading,
  description,
  dark = true,
  groups,
}: DreamDetailPanelProps) {
  const sectionBg = dark ? '#1a1a1a' : '#ffffff'
  const labelColor = '#c8973a'
  const headingColor = dark ? '#e8e3d8' : '#1a1a1a'
  const subheadingColor = '#c8973a'
  const descColor = dark ? '#888' : '#666'
  const groupHeaderColor = '#c8973a'
  const groupDivider = dark ? '#333' : '#e5e0d8'

  return (
    <section className="w-full py-14" style={{ background: sectionBg }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* header */}
        <p className="text-xs font-semibold mb-3" style={{ color: labelColor }}>
          {sectionLabel}
        </p>
        <h2 className="font-bold leading-tight mb-1" style={{ fontSize: '1.6rem', color: headingColor }}>
          {heading}
        </h2>
        <p className="font-bold mb-4" style={{ fontSize: '1.2rem', color: subheadingColor }}>
          {subheading}
        </p>
        {description && (
          <p className="text-sm leading-relaxed mb-10" style={{ color: descColor }}>
            {description}
          </p>
        )}

        <div className="flex flex-col gap-10">
          {groups.map((group, gi) => (
            <div key={gi}>
              <h3
                className="text-sm font-bold mb-4 pb-2"
                style={{ color: groupHeaderColor, borderBottom: `1px solid ${groupDivider}` }}
              >
                {group.groupTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {group.rows.map((row, ri) => (
                  <DetailCard key={ri} row={row} dark={dark} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
