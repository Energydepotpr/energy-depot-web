'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function NosotrosPage() {
  const { t } = useLanguage()
  const p = t.nosotros

  return (
    <section className="ed-about">
      <div className="ed-container">
        <div className="ed-about-hero">
          <div className="ed-section-label">{p.label}</div>
          <h1>{p.heading} <em>{p.headingEm}</em>.</h1>
          <p className="ed-about-sub">{p.sub}</p>
        </div>

        <div className="ed-about-stats">
          {p.stats.map(s => (
            <div key={s.l} className="ed-about-stat">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 64 }}>
          <div>
            <div className="ed-section-label">{p.missionLabel}</div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-.025em', margin: '12px 0 20px', fontWeight: 500 }}>
              {p.missionHeading} <em style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>{p.missionHeadingEm}</em>.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-3)', lineHeight: 1.65 }}>{p.missionP1}</p>
            <p style={{ fontSize: 16, color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 16 }}>{p.missionP2}</p>
          </div>
          <div>
            <div className="ed-section-label">{p.teamLabel}</div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-.025em', margin: '12px 0 20px', fontWeight: 500 }}>
              {p.teamHeading} <em style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>{p.teamHeadingEm}</em>.
            </h2>
            {p.team.map(m => (
              <div key={m.name} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 17, fontWeight: 500, marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--brand)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{m.role}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
