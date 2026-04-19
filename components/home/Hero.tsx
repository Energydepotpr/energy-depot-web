'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const SLIDE_DATA = [
  {
    img: '/prod/pecron-e3600.png',
    product: { label: 'Destacado / Featured', title: 'Pecron E3600LFP · 3,600W', price: '$3,599' },
    telemetry: [['Batería / Battery', '87%', ''], ['Solar / Solar in', '+2.4 kW', 'green'], ['Consumo / Load', '1.1 kW', ''], ['Estado / Status', 'Activo', 'pulse']],
    accent: '#4175FC',
  },
  {
    img: '/prod/solax-ess10.png',
    product: { label: 'Premium', title: 'SolaX ESS 10.24 kWh', price: '$11,499' },
    telemetry: [['Capacidad / Cap', '10.24 kWh', ''], ['Ciclos / Cycles', '>6,000', 'green'], ['Respaldo / Backup', '~18 hrs', ''], ['Estado / Status', 'Online', 'pulse']],
    accent: '#22C55E',
  },
  {
    img: '/prod/briggs-20kw.png',
    product: { label: 'Instalación / Turnkey', title: 'Briggs 20kW Standby', price: '$9,500' },
    telemetry: [['Potencia / Power', '20 kW', ''], ['Arranque / Start', '<10 s', 'green'], ['Combustible / Fuel', 'LP/GN', ''], ['Estado / Status', 'Standby', 'pulse']],
    accent: '#F59E0B',
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLanguage()
  const S = SLIDE_DATA[slide]
  const hs = t.hero.slides[slide]

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDE_DATA.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => { setVideoSrc('/hero-bg-wp.mp4') }, [])

  return (
    <section
      className="ed-hero"
      style={{ '--accent': S.accent } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          src={videoSrc}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1 }}
        />
      )}
      <div className="ed-hero-video-overlay" />
      <div className="ed-hero-grid" />
      <div className="ed-hero-aurora" key={`aurora-${slide}`} />

      <div className="ed-hero-inner">
        <div className="ed-hero-copy" key={`copy-${slide}`}>
          <div className="ed-hero-kicker">
            <span className="tag" style={{ background: S.accent }}>PR</span>
            {hs.kicker} · Puerto Rico
          </div>
          <h1>
            {hs.h1[0]} <em>{hs.h1[1]}</em><br />
            {hs.h1[2]} <span className="outline">{hs.h1[3]}</span>.
          </h1>
          <p>{hs.copy}</p>
          <div className="ed-hero-ctas">
            <Link href="/cotizacion" className="ed-btn ed-btn-white ed-btn-lg">
              {t.hero.ctas.quote}
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/tienda" className="ed-btn ed-btn-lg" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', border: '1px solid rgba(255,255,255,.14)' }}>
              {t.hero.ctas.shop}
            </Link>
          </div>
          <div className="ed-hero-stats">
            {t.hero.stats.map(s => (
              <div key={s.label} className="ed-hero-stat">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ed-hero-visual" key={`visual-${slide}`}>
          <div className="ed-hero-card main">
            <div className="img">
              <Image
                src={S.img}
                alt={S.product.title}
                width={400}
                height={400}
                sizes="(max-width:960px) 70vw, 35vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="bottom">
              <div>
                <div className="label">{S.product.label}</div>
                <div className="title">{S.product.title}</div>
              </div>
              <div className="price">{S.product.price}</div>
            </div>
          </div>

          <div className="ed-hero-card telemetry">
            <div className="title">
              <span className="dot" /> {t.hero.telemetry}
            </div>
            {S.telemetry.map(([k, v, cls], i) => (
              <div className="row" key={i}>
                <span className="k">{k}</span>
                <span className="v">{cls ? <span className={cls}>{v}</span> : v}</span>
              </div>
            ))}
          </div>

          <div className="ed-hero-card badge">
            <div className="big">{t.hero.badge.big}</div>
            <div className="lil">{t.hero.badge.lil}</div>
          </div>
        </div>
      </div>

      <div className="ed-hero-nav">
        {SLIDE_DATA.map((s, i) => (
          <button key={i} className={`ed-hero-dot${slide === i ? ' active' : ''}`} onClick={() => { setSlide(i); setPaused(true) }}>
            <span className="ed-hero-dot-label">{t.hero.slides[i].kicker}</span>
            <span className="ed-hero-dot-bar"><span /></span>
          </button>
        ))}
      </div>
    </section>
  )
}
