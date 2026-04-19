'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const PROJECTS = [
  { img: '/proj/proj-1.png',  title: 'Residencial — Guaynabo', sys: '15kW Solar + 20kWh ESS', year: '2024', area: 'Residencial' },
  { img: '/proj/proj-5.png',  title: 'Comercial — Caguas',     sys: '45kW Solar + Generador', year: '2024', area: 'Comercial'   },
  { img: '/proj/proj-10.png', title: 'Farmacia 24/7 — Bayamón',sys: 'ESS + UPS continuo',     year: '2023', area: 'Comercial'   },
  { img: '/proj/proj-21.jpg', title: 'Residencial — Dorado',   sys: '10kW Solar + ESS 10kWh', year: '2023', area: 'Residencial' },
  { img: '/proj/proj-24.jpg', title: 'Oficina médica — Ponce', sys: 'Generador + ATS 200A',   year: '2023', area: 'Comercial'   },
]

export default function ProjectsSection() {
  const { t, lang } = useLanguage()

  return (
    <section className="ed-projects">
      <div className="ed-container">
        <div className="ed-section-head">
          <div>
            <div className="ed-section-label">{t.proyectos.label}</div>
            <h2>{t.proyectos.heading} <em>{t.proyectos.headingEm}</em>.</h2>
          </div>
          <Link href="/proyectos" className="ed-btn ed-btn-ghost">
            {lang === 'en' ? 'View all' : 'Ver todos'}
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="ed-projects-grid">
          {PROJECTS.map((p, i) => (
            <Link key={i} href="/proyectos" className="ed-project">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:960px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="ed-project-content">
                <span className="ed-project-tag">{p.area}</span>
                <div>
                  <h3>{p.title}</h3>
                  <div className="ed-project-meta">{p.sys} · {p.year}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
