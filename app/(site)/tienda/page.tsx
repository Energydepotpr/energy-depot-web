'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS, CATEGORIES, formatPrice } from '@/lib/products'

export default function TiendaPage() {
  const [cat, setCat] = useState('all')
  const [brand, setBrand] = useState('all')
  const [sort, setSort] = useState('featured')

  const brands = [...new Set(PRODUCTS.map(p => p.brand))]
  let list = PRODUCTS.filter(p =>
    (cat === 'all' || p.cat === cat) &&
    (brand === 'all' || p.brand === brand)
  )
  if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price)

  return (
    <>
      <section className="ed-shop-hero">
        <div className="ed-container">
          <div>
            <div className="ed-section-label">Tienda</div>
            <h1>Catálogo <em>completo</em>.</h1>
          </div>
          <div className="ed-shop-stats">
            <div className="ed-shop-stat"><div className="num">{PRODUCTS.length}</div><div className="lbl">Productos</div></div>
            <div className="ed-shop-stat"><div className="num">{brands.length}</div><div className="lbl">Marcas</div></div>
            <div className="ed-shop-stat"><div className="num">{CATEGORIES.length}</div><div className="lbl">Categorías</div></div>
          </div>
        </div>
      </section>

      <div className="ed-container ed-shop">
        <aside className="ed-shop-sidebar">
          <div className="ed-shop-filter-group">
            <h4>Categoría</h4>
            <label className="ed-check">
              <input type="radio" name="cat" checked={cat === 'all'} onChange={() => setCat('all')} />
              Todas <span className="count">{PRODUCTS.length}</span>
            </label>
            {CATEGORIES.map(c => (
              <label key={c.slug} className="ed-check">
                <input type="radio" name="cat" checked={cat === c.slug} onChange={() => setCat(c.slug)} />
                {c.name} <span className="count">{PRODUCTS.filter(p => p.cat === c.slug).length}</span>
              </label>
            ))}
          </div>

          <div className="ed-shop-filter-group">
            <h4>Marca</h4>
            <label className="ed-check">
              <input type="radio" name="brand" checked={brand === 'all'} onChange={() => setBrand('all')} />
              Todas <span className="count">{PRODUCTS.length}</span>
            </label>
            {brands.map(b => (
              <label key={b} className="ed-check">
                <input type="radio" name="brand" checked={brand === b} onChange={() => setBrand(b)} />
                {b} <span className="count">{PRODUCTS.filter(p => p.brand === b).length}</span>
              </label>
            ))}
          </div>
        </aside>

        <div>
          <div className="ed-sort-bar">
            <div className="ed-sort-bar-left">Mostrando {list.length} de {PRODUCTS.length} productos</div>
            <div className="ed-sort-bar-right">
              <select className="ed-select" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">Destacados</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
              </select>
            </div>
          </div>

          <div className="ed-products-grid">
            {list.map(p => (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="ed-product">
                <div className="ed-product-media">
                  <Image src={p.img} alt={p.name} width={400} height={400} style={{ objectFit: 'contain', padding: '16px' }} />
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
      </div>
    </>
  )
}
