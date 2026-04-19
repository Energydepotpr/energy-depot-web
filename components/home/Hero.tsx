'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SLIDES = [
  {
    kicker: 'Estaciones portátiles',
    h1: ['Energía', 'confiable', 'cuando', 'todo se apaga'],
    copy: 'Pecron, UGreen y Growatt LFP. Enchufa y olvídate del apagón — recargarás con solar, AC o carro.',
    img: '/prod/pecron-e3600.png',
    product: { label: 'Destacado', title: 'Pecron E3600LFP · 3,600W', price: '$3,599' },
    telemetry: [['Batería', '87%', ''], ['Carga solar', '+2.4 kW', 'green'], ['Consumo', '1.1 kW', ''], ['Estado', 'Activo', 'pulse']],
    accent: '#4175FC',
  },
  {
    kicker: 'Baterías residenciales',
    h1: ['Respaldo', 'continuo', 'para tu', 'hogar'],
    copy: 'SolaX ESS 10–20 kWh. Se integra con tu panel eléctrico en 1 día — sin obras pesadas.',
    img: '/prod/solax-ess10.png',
    product: { label: 'Premium', title: 'SolaX ESS 10.24 kWh', price: '$11,499' },
    telemetry: [['Capacidad', '10.24 kWh', ''], ['Ciclos', '>6,000', 'green'], ['Respaldo', '~18 hrs', ''], ['Estado', 'Online', 'pulse']],
    accent: '#22C55E',
  },
  {
    kicker: 'Generadores Standby',
    h1: ['Autoarranque', 'en segundos', 'si se va', 'la luz'],
    copy: 'Briggs & Stratton 12kW y 20kW con ATS. Funciona con propano o gas natural — instalación llave en mano.',
    img: '/prod/briggs-20kw.png',
    product: { label: 'Instalación incluida', title: 'Briggs 20kW Standby', price: '$9,500' },
    telemetry: [['Potencia', '20 kW', ''], ['Arranque', '<10 s', 'green'], ['Combustible', 'Propano/GN', ''], ['Estado', 'Standby', 'pulse']],
    accent: '#F59E0B',
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const S = SLIDES[slide]

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  // Carga el video solo cuando el navegador está idle (no bloquea LCP)
  useEffect(() => {
    const load = () => setVideoSrc('/hero-bg.mp4')
    if ('requestIdleCallback' in window) {
      const id = (window as Window & typeof globalThis).requestIdleCallback(load)
      return () => (window as Window & typeof globalThis).cancelIdleCallback(id)
    }
    const t = setTimeout(load, 1500)
    return () => clearTimeout(t)
  }, [])

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
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.35 }}
        />
      )}
      <div className="ed-hero-video-overlay" />
      <div className="ed-hero-grid" />
      <div className="ed-hero-aurora" key={`aurora-${slide}`} />

      <div className="ed-hero-inner">
        <div className="ed-hero-copy" key={`copy-${slide}`}>
          <div className="ed-hero-kicker">
            <span className="tag" style={{ background: S.accent }}>PR</span>
            {S.kicker} · Puerto Rico
          </div>
          <h1>
            {S.h1[0]} <em>{S.h1[1]}</em><br />
            {S.h1[2]} <span className="outline">{S.h1[3]}</span>.
          </h1>
          <p>{S.copy}</p>
          <div className="ed-hero-ctas">
            <Link href="/cotizacion" className="ed-btn ed-btn-white ed-btn-lg">
              Solicitar cotización
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/tienda" className="ed-btn ed-btn-lg" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', border: '1px solid rgba(255,255,255,.14)' }}>
              Explorar tienda
            </Link>
          </div>
          <div className="ed-hero-stats">
            <div className="ed-hero-stat"><div className="num">9+</div><div className="label">Años en PR</div></div>
            <div className="ed-hero-stat"><div className="num">500+</div><div className="label">Instalaciones</div></div>
            <div className="ed-hero-stat"><div className="num">5 años</div><div className="label">Garantía</div></div>
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
              <span className="dot" /> Monitoreo en vivo
            </div>
            {S.telemetry.map(([k, v, cls], i) => (
              <div className="row" key={i}>
                <span className="k">{k}</span>
                <span className="v">{cls ? <span className={cls}>{v}</span> : v}</span>
              </div>
            ))}
          </div>

          <div className="ed-hero-card badge">
            <div className="big">5 años</div>
            <div className="lil">garantía PR</div>
          </div>
        </div>
      </div>

      <div className="ed-hero-nav">
        {SLIDES.map((s, i) => (
          <button key={i} className={`ed-hero-dot${slide === i ? ' active' : ''}`} onClick={() => { setSlide(i); setPaused(true) }}>
            <span className="ed-hero-dot-label">{s.kicker}</span>
            <span className="ed-hero-dot-bar"><span /></span>
          </button>
        ))}
      </div>
    </section>
  )
}
