'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS, formatPrice } from '@/lib/products'
import { useLanguage } from '@/context/LanguageContext'

const FEATURED_SLUGS = ['ugreen-gs2200', 'pecron-e3600', 'growatt-helios', 'solax-ess10', 'briggs-20kw', 'pecron-e1500', 'bsm550', 'ugreen-gs600']

export default function FeaturedProducts() {
  const { t } = useLanguage()
  const f = t.featured
  const featured = FEATURED_SLUGS.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean)

  return (
    <section className="ed-products">
      <div className="ed-container">
        <div className="ed-section-head">
          <div>
            <div className="ed-section-label">{f.label}</div>
            <h2>{f.heading} <em>{f.headingEm}</em>.</h2>
          </div>
          <Link href="/tienda" className="ed-btn ed-btn-ghost">
            {f.cta}
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="ed-products-grid">
          {featured.map(p => p && (
            <Link key={p.slug} href={`/shop/${p.slug}`} className="ed-product">
              <div className="ed-product-media">
                <Image src={p.img} alt={p.name} width={400} height={400} sizes="(max-width:640px) 45vw, (max-width:960px) 22vw, 18vw" style={{ objectFit: 'contain', padding: '16px' }} loading="lazy" />
                {p.badge && (
                  <span className={`ed-product-badge${p.badge === 'Sale' || p.badge === 'Oferta' ? ' sale' : p.badge === 'New' ? ' new' : ''}`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="ed-product-body">
                <div className="ed-product-brand">{p.brand}</div>
                <h3 className="ed-product-title">{p.shortName}</h3>
                <div className="ed-product-specs">
                  {p.specs.map(s => <span key={s}>{s}</span>)}
                </div>
                <div className="ed-product-foot">
                  <div className="ed-product-price">
                    {p.was && <span className="was">{formatPrice(p.was)}</span>}
                    <span className="now">{formatPrice(p.price)}</span>
                  </div>
                  <span className="ed-product-cta">
                    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                      <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
