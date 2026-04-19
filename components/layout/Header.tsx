'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const path = usePathname()
  const { t, lang, toggle } = useLanguage()

  const nav = [
    { href: '/', label: t.nav.inicio },
    { href: '/tienda', label: t.nav.tienda },
    { href: '/proyectos', label: t.nav.proyectos },
    { href: '/nosotros', label: t.nav.nosotros },
    { href: '/contacto', label: t.nav.contacto },
  ]

  return (
    <>
      <div className="ed-topstrip">
        <div className="ed-topstrip-inner">
          <span className="pill">
            <span className="dot" />
            {t.topstrip}
          </span>
          <span className="hide-mobile">{t.topstripSub}</span>
        </div>
      </div>
      <header className="ed-header">
        <div className="ed-header-inner">
          <Link href="/" className="ed-logo">
            <span className="ed-logo-mark">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" />
              </svg>
            </span>
            <span className="ed-logo-text">
              ENERGY DEPOT
              <small>We Are The Difference</small>
            </span>
          </Link>

          <nav className="ed-nav">
            {nav.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className={path === n.href || (n.href !== '/' && path.startsWith(n.href)) ? 'active' : ''}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="ed-header-right">
            <button
              className="ed-lang-toggle"
              onClick={toggle}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button className="ed-icon-btn" title="Buscar">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <Link href="/cotizacion" className="ed-cta-header">
              {t.nav.cotizacion}
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
