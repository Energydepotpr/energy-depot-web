import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, getProduct, formatPrice } from '@/lib/products'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Energy Depot PR`,
    description: product.highlights[0],
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) notFound()

  const savings = p.was ? p.was - p.price : null
  const savingsPct = savings && p.was ? Math.round((savings / p.was) * 100) : null

  return (
    <section className="ed-pd">
      <div className="ed-container">
        <div className="ed-pd-crumbs">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/tienda">Tienda</Link>
          <span>/</span>
          <Link href={`/tienda?cat=${p.cat}`}>{p.catName}</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)' }}>{p.shortName}</span>
        </div>

        <div className="ed-pd-grid">
          <div className="ed-pd-gallery">
            <div className="ed-pd-hero-img">
              {p.badge && <span className="ed-pd-badge-overlay">{p.badge}</span>}
              <Image src={p.img} alt={p.name} width={600} height={600} style={{ objectFit: 'contain', padding: '32px' }} priority />
            </div>
          </div>

          <div className="ed-pd-info">
            <span className="brand">{p.brand}</span>
            <h1>{p.name}</h1>

            <div className="ed-pd-price">
              <span className="now">{formatPrice(p.price)}</span>
              {p.was && <span className="was">{formatPrice(p.was)}</span>}
              {savingsPct && <span className="save">Ahorras {savingsPct}%</span>}
            </div>

            <div className="ed-pd-highlights">
              <h4>Características destacadas</h4>
              <ul>
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>

            <div className="ed-pd-trust">
              <div className="ed-pd-trust-item">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div className="t">Garantía 5 años</div>
                <div className="d">Cobertura completa en PR</div>
              </div>
              <div className="ed-pd-trust-item">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <rect x="2" y="7" width="11" height="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13 10h5l3 3v3h-8M6 20a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div className="t">Envío gratis</div>
                <div className="d">A toda la isla</div>
              </div>
              <div className="ed-pd-trust-item">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div className="t">Sin IVU</div>
                <div className="d">En este producto</div>
              </div>
            </div>

            <div className="ed-pd-buy">
              <Link href="/cotizacion" className="ed-btn ed-btn-brand ed-btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
                Solicitar cotización
              </Link>
              <a href="https://wa.me/17875550120" target="_blank" rel="noopener" className="ed-btn ed-btn-ghost ed-btn-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="ed-pd-specs">
          <div>
            <div className="ed-section-label">Especificaciones</div>
            <h3 style={{ marginTop: 12 }}>Ficha <em style={{ color: 'var(--ink-3)', fontStyle: 'italic' }}>técnica</em>.</h3>
          </div>
          <div>
            <div className="ed-pd-specs-table">
              {p.specsTable.map(([k, v]) => (
                <div key={k} className="ed-pd-specs-row">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
