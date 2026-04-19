'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const PHOTO_GRADIENTS = [
  'linear-gradient(135deg, #0f2a5e 0%, #1f5fff 60%, #22c55e 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #1f2d3d 0%, #2d5a27 60%, #22c55e 100%)',
  'linear-gradient(135deg, #0f2a5e 0%, #1e40af 50%, #3b82f6 100%)',
  'linear-gradient(135deg, #1a0a00 0%, #7c2d12 50%, #f59e0b 100%)',
  'linear-gradient(135deg, #0f1f3d 0%, #1f5fff 40%, #60a5fa 100%)',
]

function SolarIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="64" height="64" style={{ opacity: 0.25 }}>
      <rect x="4" y="4" width="56" height="56" rx="4" stroke="white" strokeWidth="2" />
      <line x1="4" y1="22" x2="60" y2="22" stroke="white" strokeWidth="1.5" />
      <line x1="4" y1="40" x2="60" y2="40" stroke="white" strokeWidth="1.5" />
      <line x1="22" y1="4" x2="22" y2="60" stroke="white" strokeWidth="1.5" />
      <line x1="40" y1="4" x2="40" y2="60" stroke="white" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="6" stroke="white" strokeWidth="2" />
      <line x1="32" y1="2" x2="32" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="54" x2="32" y2="62" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function ProyectosPage() {
  const { t } = useLanguage()
  const p = t.proyectos
  const [active, setActive] = useState<string>(p.filters[0])

  const allFilter = p.filters[0]
  const filtered = active === allFilter
    ? p.items
    : p.items.filter(item => item.area === p.filters[1] ? active === p.filters[1] : active === p.filters[2])

  return (
    <section className="ed-proj-page">
      <div className="ed-container">
        <div className="ed-proj-hero">
          <div className="ed-section-label">{p.label}</div>
          <h1>{p.heading} <em>{p.headingEm}</em>.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-3)', maxWidth: 600, lineHeight: 1.55 }}>
            {p.sub}
          </p>
        </div>

        <div className="ed-proj-filter">
          {p.filters.map(f => (
            <button key={f} className={`ed-filter${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>

        <div className="ed-proj-list">
          {filtered.map((proj, i) => (
            <div key={i} className="ed-proj-card">
              <div
                style={{
                  height: 220,
                  background: PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length],
                  borderRadius: '12px 12px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <SolarIcon />
                <span style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.45)',
                }}>
                  {p.photoSoon}
                </span>
                <span style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: 'rgba(0,0,0,.45)',
                  color: '#fff',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 999,
                  backdropFilter: 'blur(8px)',
                }}>
                  {proj.area}
                </span>
              </div>
              <div className="ed-proj-card-body">
                <div className="meta">
                  <span>{proj.area}</span>
                  <span>{proj.year}</span>
                </div>
                <h3>{proj.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--brand)', fontFamily: 'var(--f-mono)', marginBottom: 8 }}>{proj.sys}</p>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
