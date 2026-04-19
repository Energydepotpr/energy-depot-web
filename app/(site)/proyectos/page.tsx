import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos — Energy Depot PR',
  description: 'Instalaciones residenciales y comerciales de energía solar en Puerto Rico.',
}

const PROJECTS = [
  { title: 'Residencial — Guaynabo', sys: '15kW Solar + 20kWh ESS SolaX', year: '2024', area: 'Residencial', bg: 'p1', desc: 'Sistema completo de almacenamiento para hogar de 4 habitaciones. Autonomía de 24+ horas sin AEE.' },
  { title: 'Comercial — Caguas', sys: '45kW Solar + Generador Briggs 20kW', year: '2024', area: 'Comercial', bg: 'p2', desc: 'Solución híbrida solar-generador para local comercial de 2,400 pies cuadrados.' },
  { title: 'Farmacia 24/7 — Bayamón', sys: 'ESS SolaX 10kWh + UPS continuo', year: '2023', area: 'Comercial', bg: 'p3', desc: 'Farmacia que no puede perder energía. Sistema UPS + ESS garantiza operación ininterrumpida.' },
  { title: 'Residencial — Dorado', sys: '10kW Solar + ESS 10.24kWh', year: '2023', area: 'Residencial', bg: 'p4', desc: 'Casa en urbanización de Dorado. Factura eléctrica reducida en 87%.' },
  { title: 'Oficina médica — Ponce', sys: 'Generador Briggs 12kW + ATS 200A', year: '2023', area: 'Comercial', bg: 'p5', desc: 'Consultorio médico con encendido automático en menos de 10 segundos ante cualquier apagón.' },
  { title: 'Residencial — Carolina', sys: 'Pecron E3600 + Placas Bluesun 550W ×4', year: '2024', area: 'Residencial', bg: 'p1', desc: 'Sistema portátil de respaldo con recarga solar. Ideal para zonas con apagones frecuentes.' },
]

export default function ProyectosPage() {
  return (
    <section className="ed-proj-page">
      <div className="ed-container">
        <div className="ed-proj-hero">
          <div className="ed-section-label">Proyectos</div>
          <h1>Instalaciones <em>reales</em>.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-3)', maxWidth: 600, lineHeight: 1.55 }}>
            Más de 500 hogares y negocios en Puerto Rico confían en Energy Depot para su resiliencia energética.
          </p>
        </div>

        <div className="ed-proj-filter">
          {['Todos', 'Residencial', 'Comercial'].map(f => (
            <button key={f} className={`ed-filter${f === 'Todos' ? ' active' : ''}`}>{f}</button>
          ))}
        </div>

        <div className="ed-proj-list">
          {PROJECTS.map((p, i) => (
            <div key={i} className="ed-proj-card">
              <div className={`ed-proj-card-media ed-project-bg ${p.bg}`} style={{ height: 220 }}>
                <div className="ed-project-content" style={{ padding: 20 }}>
                  <span className="ed-project-tag">{p.area}</span>
                  <div />
                </div>
              </div>
              <div className="ed-proj-card-body">
                <div className="meta">
                  <span>{p.area}</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--brand)', fontFamily: 'var(--f-mono)', marginBottom: 8 }}>{p.sys}</p>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
