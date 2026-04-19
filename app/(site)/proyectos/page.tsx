'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const GALLERY_PHOTOS = [
  '/proj/proj-1.png', '/proj/proj-2.png', '/proj/proj-3.png', '/proj/proj-4.png',
  '/proj/proj-5.png', '/proj/proj-6.png', '/proj/proj-7.png', '/proj/proj-8.png',
  '/proj/proj-9.png', '/proj/proj-10.png', '/proj/proj-11.png', '/proj/proj-12.png',
  '/proj/proj-13.png', '/proj/proj-14.png', '/proj/proj-15.png', '/proj/proj-16.png',
  '/proj/proj-17.png', '/proj/proj-18.png', '/proj/proj-19.png', '/proj/proj-20.png',
  '/proj/proj-21.jpg', '/proj/proj-22.jpg', '/proj/proj-23.png', '/proj/proj-24.jpg',
  '/proj/proj-25.jpg', '/proj/proj-26.jpeg', '/proj/proj-27.jpg', '/proj/proj-28.jpg',
  '/proj/proj-29.jpg', '/proj/proj-30.jpg', '/proj/proj-31.jpg', '/proj/proj-32.jpg',
  '/proj/proj-33.jpeg', '/proj/proj-34.jpeg', '/proj/proj-35.jpeg', '/proj/proj-36.jpeg',
]

const FEATURED = [
  { img: '/proj/proj-1.png', area: 'Residencial', year: '2024' },
  { img: '/proj/proj-3.png', area: 'Residencial', year: '2024' },
  { img: '/proj/proj-5.png', area: 'Comercial', year: '2023' },
  { img: '/proj/proj-21.jpg', area: 'Residencial', year: '2023' },
  { img: '/proj/proj-24.jpg', area: 'Comercial', year: '2023' },
  { img: '/proj/proj-32.jpg', area: 'Residencial', year: '2022' },
]

export default function ProyectosPage() {
  const { t, lang } = useLanguage()
  const p = t.proyectos
  const [active, setActive] = useState<string>(p.filters[0])
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filteredFeatured = active === p.filters[0]
    ? FEATURED
    : FEATURED.filter(f => f.area === (active === p.filters[1] ? 'Residencial' : 'Comercial'))

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

        {/* Featured project cards */}
        <div className="ed-proj-list">
          {filteredFeatured.map((proj, i) => (
            <div key={i} className="ed-proj-card" style={{ cursor: 'pointer' }} onClick={() => setLightbox(proj.img)}>
              <div style={{ height: 220, borderRadius: '12px 12px 0 0', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={proj.img}
                  alt={`Instalación ${proj.area} ${proj.year}`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:960px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <span style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(8px)',
                  color: '#fff', fontFamily: 'var(--f-mono)', fontSize: 10,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: 999,
                }}>
                  {proj.area}
                </span>
              </div>
              <div className="ed-proj-card-body">
                <div className="meta"><span>{proj.area}</span><span>{proj.year}</span></div>
                <h3>{p.items[i]?.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--brand)', fontFamily: 'var(--f-mono)', marginBottom: 8 }}>
                  {p.items[i]?.sys}
                </p>
                <p>{p.items[i]?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full photo gallery */}
        <div style={{ marginTop: 64 }}>
          <div className="ed-section-label" style={{ marginBottom: 8 }}>
            {lang === 'en' ? 'Photo gallery' : 'Galería de fotos'}
          </div>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 500, letterSpacing: '-.02em', marginBottom: 32 }}>
            {lang === 'en' ? 'All ' : 'Todas nuestras '}<em>{lang === 'en' ? 'installations' : 'instalaciones'}</em>.
          </h2>
          <div className="ed-proj-gallery">
            {GALLERY_PHOTOS.map((src, i) => (
              <div
                key={i}
                className="ed-proj-gallery-item"
                onClick={() => setLightbox(src)}
              >
                <Image
                  src={src}
                  alt={`Instalación ${i + 1}`}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:960px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="ed-proj-gallery-overlay">
                  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="ed-lightbox"
          onClick={() => setLightbox(null)}
        >
          <button className="ed-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="ed-lightbox-img" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Instalación"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
