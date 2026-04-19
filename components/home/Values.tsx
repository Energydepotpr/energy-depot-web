const VALUES = [
  { num: '01', icon: 'shield', title: 'Garantía 5 años en PR', desc: 'Cobertura completa directo con nosotros. Sin IVU en la mayoría de los productos.' },
  { num: '02', icon: 'zap', title: 'Envío en 24-48 hrs', desc: 'Despachamos desde San Juan a toda la isla. Instalación profesional disponible.' },
  { num: '03', icon: 'award', title: 'Distribuidores autorizados', desc: 'Somos el importador oficial de UGreen, Pecron, Growatt y SolaX en Puerto Rico.' },
  { num: '04', icon: 'users', title: 'Soporte técnico 24/7', desc: 'Equipo local que habla español. Asesoría de dimensionamiento sin costo.' },
]

const icons: Record<string, React.ReactNode> = {
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>,
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>,
  award: <><circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14l-2 7 6-3 6 3-2-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></>,
  users: <><circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 8a3 3 0 010 6M21 20c0-3-2-5-5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>,
}

export default function Values() {
  return (
    <section className="ed-values">
      <div className="ed-container ed-values-inner">
        <div className="ed-section-head" style={{ borderBottom: '1px solid rgba(255,255,255,.08)', paddingBottom: 40 }}>
          <div>
            <div className="ed-section-label" style={{ color: '#7a87a0' }}>Por qué elegirnos</div>
            <h2>La diferencia <em style={{ color: '#7a87a0' }}>que importa</em>.</h2>
          </div>
        </div>
        <div className="ed-values-grid">
          {VALUES.map(v => (
            <div key={v.num} className="ed-value">
              <div className="ed-value-num">{v.num}</div>
              <div className="ed-value-icon">
                <svg viewBox="0 0 24 24" fill="none" width="22" height="22">{icons[v.icon]}</svg>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
