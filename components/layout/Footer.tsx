'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t, lang } = useLanguage()
  const f = t.footer
  const n = t.nav
  const en = lang === 'en'

  return (
    <footer className="ed-footer">
      <div className="ed-container">
        <div className="ed-footer-inner">
          <div className="ed-footer-brand">
            <Link href="/" className="ed-logo" style={{ marginBottom: 20, display: 'inline-flex' }}>
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
            <p>{f.tagline}</p>
            <div className="social">
              <a href="https://facebook.com" target="_blank" rel="noopener" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M13 22v-8h3l.5-4H13V7.5c0-1 .3-1.8 1.8-1.8H17V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://wa.me/17875550120" target="_blank" rel="noopener" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.4A10 10 0 1012 2zm4.5 13.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1-.2-.1-1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.7-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4H8.3c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.8 4.4 3.9 1.7.7 2.4.8 3.2.7.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>{f.shopTitle}</h4>
            <Link href="/tienda?cat=portatiles">{en ? 'Power Stations' : 'Estaciones Portátiles'}</Link>
            <Link href="/tienda?cat=ess">{en ? 'ESS Systems' : 'Sistemas ESS'}</Link>
            <Link href="/tienda?cat=generadores">{en ? 'Generators' : 'Generadores'}</Link>
            <Link href="/tienda?cat=solar">{en ? 'Solar Panels' : 'Placas Solares'}</Link>
          </div>

          <div>
            <h4>{f.companyTitle}</h4>
            <Link href="/nosotros">{n.nosotros}</Link>
            <Link href="/proyectos">{n.proyectos}</Link>
            <Link href="/cotizacion">{n.cotizacion}</Link>
            <Link href="/contacto">{n.contacto}</Link>
          </div>

          <div>
            <h4>{f.contactTitle}</h4>
            <a href="tel:+17875550120">(787) 555-0120</a>
            <a href="mailto:info@energydepotpr.com">info@energydepotpr.com</a>
            <span style={{ display: 'block', padding: '6px 0', fontSize: 14 }}>San Juan · Puerto Rico</span>
            <span style={{ display: 'block', padding: '6px 0', fontSize: 14, color: '#8a94a8' }}>
              {en ? 'Mon — Sat · 8am — 6pm' : 'Lun — Sáb · 8am — 6pm'}
            </span>
          </div>
        </div>

        <div className="ed-footer-bottom">
          <span>{f.rights}</span>
          <span>
            <Link href="/contacto">{n.contacto}</Link> · <Link href="/cotizacion">{n.cotizacion}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
