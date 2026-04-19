import Link from 'next/link'

const PROJECTS = [
  { title: 'Residencial — Guaynabo', sys: '15kW Solar + 20kWh ESS', year: '2024', area: 'Residencial', bg: 'p1' },
  { title: 'Comercial — Caguas', sys: '45kW Solar + Generador', year: '2024', area: 'Comercial', bg: 'p2' },
  { title: 'Farmacia 24/7 — Bayamón', sys: 'ESS + UPS continuo', year: '2023', area: 'Comercial', bg: 'p3' },
  { title: 'Residencial — Dorado', sys: '10kW Solar + ESS 10kWh', year: '2023', area: 'Residencial', bg: 'p4' },
  { title: 'Oficina médica — Ponce', sys: 'Generador + transfer switch', year: '2023', area: 'Comercial', bg: 'p5' },
]

export default function ProjectsSection() {
  return (
    <section className="ed-projects">
      <div className="ed-container">
        <div className="ed-section-head">
          <div>
            <div className="ed-section-label">Proyectos</div>
            <h2>Instalaciones <em>reales</em>.</h2>
          </div>
          <Link href="/proyectos" className="ed-btn ed-btn-ghost">
            Ver todos
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="ed-projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="ed-project">
              <div className={`ed-project-bg ${p.bg}`} />
              <div className="ed-project-content">
                <span className="ed-project-tag">{p.area}</span>
                <div>
                  <h3>{p.title}</h3>
                  <div className="ed-project-meta">{p.sys} · {p.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
