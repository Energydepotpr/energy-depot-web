'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()

  const nav = [
    { href: '/', label: 'Inicio' },
    { href: '/tienda', label: 'Tienda' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/nosotros', label: 'Sobre Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <>
      <div className="ed-topstrip">
        <div className="ed-topstrip-inner">
          <span className="pill">
            <span className="dot" />
            SOPORTE 24/7 · PUERTO RICO
          </span>
          <span className="hide-mobile">
            ENVÍO EN TODA LA ISLA · SIN IVU EN MUCHOS PRODUCTOS · (787) 555-0120
          </span>
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
            <button className="ed-icon-btn" title="Buscar">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <Link href="/cotizacion" className="ed-cta-header">
              Cotización
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
