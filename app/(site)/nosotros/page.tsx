import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Energy Depot PR',
  description: 'Conoce a Energy Depot LLC, distribuidor autorizado de energía solar en Puerto Rico desde 2017.',
}

export default function NosotrosPage() {
  return (
    <section className="ed-about">
      <div className="ed-container">
        <div className="ed-about-hero">
          <div className="ed-section-label">Sobre Nosotros</div>
          <h1>We Are <em>The Difference</em>.</h1>
          <p className="ed-about-sub">
            Desde 2017, Energy Depot LLC es el distribuidor autorizado en Puerto Rico de las marcas líderes en energía solar, almacenamiento y generación. Somos la solución local para un problema real.
          </p>
        </div>

        <div className="ed-about-stats">
          {[
            { n: '9+', l: 'Años de experiencia' },
            { n: '500+', l: 'Instalaciones completadas' },
            { n: '8', l: 'Marcas autorizadas' },
            { n: '5 años', l: 'Garantía en PR' },
          ].map(s => (
            <div key={s.l} className="ed-about-stat">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 64 }}>
          <div>
            <div className="ed-section-label">Nuestra misión</div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-.025em', margin: '12px 0 20px', fontWeight: 500 }}>
              Energía confiable para <em style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>cada puertorriqueño</em>.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Puerto Rico enfrenta retos únicos de resiliencia energética. Nuestra misión es proveer soluciones accesibles, duraderas y con soporte local real — no call centers en el exterior.
            </p>
            <p style={{ fontSize: 16, color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 16 }}>
              Cada producto que vendemos tiene garantía de 5 años manejada directamente por nosotros, instalación disponible en toda la isla y asesoría técnica sin costo adicional.
            </p>
          </div>
          <div>
            <div className="ed-section-label">Nuestro equipo</div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-.025em', margin: '12px 0 20px', fontWeight: 500 }}>
              Expertos <em style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>locales</em>.
            </h2>
            {[
              { name: 'Gilberto Díaz Merced', role: 'CEO & Fundador', bio: 'Ingeniero con 15+ años en energía renovable. Lidera la visión técnica de Energy Depot.' },
              { name: 'Roberto Díaz Merced', role: 'Project Manager', bio: 'Coordina instalaciones residenciales y comerciales en toda la isla.' },
              { name: 'Carla Hernández Vidal', role: 'Brand Manager', bio: 'Gestiona las relaciones con clientes y la imagen de Energy Depot en Puerto Rico.' },
            ].map(m => (
              <div key={m.name} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 17, fontWeight: 500, marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--brand)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{m.role}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
