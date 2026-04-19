const BRANDS = ['UGreen', 'Pecron', 'SolaX Power', 'Growatt', 'Briggs & Stratton', 'Bluesun', 'IronRidge', 'Enphase']

export default function Brands() {
  const doubled = [...BRANDS, ...BRANDS]
  return (
    <div className="ed-brands">
      <div className="ed-brands-inner">
        <span className="ed-brands-label">Marcas</span>
        <div className="ed-brands-track">
          <div className="ed-brands-row">
            {doubled.map((b, i) => (
              <span key={i} className="ed-brand-chip">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
