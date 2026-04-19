import Link from 'next/link'

export default function CtaStrip() {
  return (
    <section className="ed-cta-strip">
      <div className="ed-container ed-cta-strip-inner">
        <div>
          <h2>¿Listo para <em>independizarte</em><br />de AEE?</h2>
        </div>
        <div className="ed-cta-strip-right">
          <p>Cotización gratis en 24 horas. Nuestro equipo te asesora sin compromiso sobre la solución ideal para tu hogar o negocio.</p>
          <div className="ed-cta-strip-buttons">
            <Link href="/cotizacion" className="ed-btn ed-btn-white ed-btn-lg">
              Solicitar cotización gratis
            </Link>
            <Link href="/contacto" className="ed-btn ed-btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '1px solid rgba(255,255,255,.2)' }}>
              Llamar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
