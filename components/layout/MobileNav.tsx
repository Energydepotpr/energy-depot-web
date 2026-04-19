'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function MobileNav() {
  const path = usePathname()
  const { t } = useLanguage()

  const items = [
    {
      href: '/',
      label: t.nav.inicio,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <path d="M3 12L12 3l9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12v9h18V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      href: '/tienda',
      label: t.nav.tienda,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      href: '/cotizacion',
      label: t.nav.cotizacion,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor"/>
        </svg>
      ),
      center: true,
    },
    {
      href: '/proyectos',
      label: t.nav.proyectos,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      ),
    },
    {
      href: '/contacto',
      label: t.nav.contacto,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href)

  return (
    <nav className="ed-mobile-nav">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`ed-mobile-nav-item${item.center ? ' center' : ''}${isActive(item.href) ? ' active' : ''}`}
        >
          <span className="ed-mobile-nav-icon">{item.icon}</span>
          <span className="ed-mobile-nav-label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
