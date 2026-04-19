import Link from 'next/link'
import { CATEGORIES, PRODUCTS } from '@/lib/products'

const icons: Record<string, React.ReactNode> = {
  battery: <><rect x="2" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="20" y="10" width="2" height="4" rx=".5" fill="currentColor"/><path d="M6 12h4M7 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>,
  home: <path d="M3 11L12 4l9 7v9a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>,
  bolt: <path d="M13 3L5 14h6l-2 7 8-11h-6l2-7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>,
  sun: <><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19 5l-1.5 1.5M6.5 17.5L5 19M19 19l-1.5-1.5M6.5 6.5L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>,
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
    <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Categories() {
  return (
    <section className="ed-cats">
      <div className="ed-container">
        <div className="ed-section-head">
          <div>
            <div className="ed-section-label">Categorías</div>
            <h2>Soluciones para <em>cada necesidad</em>.</h2>
          </div>
          <Link href="/tienda" className="ed-btn ed-btn-ghost">
            Ver todo <ArrowIcon />
          </Link>
        </div>

        <div className="ed-cats-grid">
          <Link href="/tienda?cat=portatiles" className="ed-cat feat">
            <div className="ed-cat-icon">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">{icons.battery}</svg>
            </div>
            <h3 className="ed-cat-name">Estaciones<br />Portátiles</h3>
            <p className="ed-cat-desc">Power stations LiFePO4 para respaldo móvil y emergencias · UGreen, Pecron, Growatt</p>
            <div className="ed-cat-foot">
              <span>{PRODUCTS.filter(p => p.cat === 'portatiles').length} productos</span>
              <span className="ed-cat-arrow"><ArrowIcon /></span>
            </div>
          </Link>

          {CATEGORIES.filter(c => c.slug !== 'portatiles').map(cat => (
            <Link key={cat.slug} href={`/tienda?cat=${cat.slug}`} className="ed-cat">
              <div className="ed-cat-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">{icons[cat.icon]}</svg>
              </div>
              <h3 className="ed-cat-name">{cat.name}</h3>
              <p className="ed-cat-desc">{cat.desc}</p>
              <div className="ed-cat-foot">
                <span>{PRODUCTS.filter(p => p.cat === cat.slug).length} productos</span>
                <span className="ed-cat-arrow"><ArrowIcon /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
