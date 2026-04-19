'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

const STEPS = [
  { num: '1', title: 'Tu hogar', desc: 'Tipo de propiedad y consumo' },
  { num: '2', title: 'Solución', desc: 'Qué tipo de sistema necesitas' },
  { num: '3', title: 'Contacto', desc: 'Para enviarte la cotización' },
]

export default function CotizacionPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ tipo: '', kw: '', sistema: '', nombre: '', telefono: '', email: '', municipio: '', notas: '' })
  const [sent, setSent] = useState(false)

  const pct = `${((step + 1) / 3) * 100}%`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) { setStep(step + 1); return }
    setSent(true)
  }

  if (sent) return (
    <section className="ed-quote">
      <div className="ed-quote-inner">
        <div className="ed-quote-aside">
          <div className="ed-section-label">Cotización</div>
          <h1>¡Listo,<br /><em>gracias!</em></h1>
          <p>Recibimos tu solicitud. Nuestro equipo te contactará en menos de 24 horas con una propuesta personalizada.</p>
        </div>
        <div className="ed-quote-card">
          <div style={{ padding: 40, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--success)', display: 'grid', placeItems: 'center', margin: '0 auto 24px', color: '#fff' }}>
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 28, marginBottom: 12 }}>Solicitud enviada</h2>
            <p style={{ color: 'var(--ink-3)', marginBottom: 24 }}>Te contactaremos a <strong>{form.telefono || form.email}</strong></p>
            <a href="/" className="ed-btn ed-btn-brand">Volver al inicio</a>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section className="ed-quote">
      <div className="ed-quote-inner">
        <div className="ed-quote-aside">
          <div className="ed-section-label">Cotización</div>
          <h1>Tu energía,<br /><em>tu precio</em>.</h1>
          <p>Completa el formulario y recibirás una propuesta personalizada en menos de 24 horas — sin compromiso.</p>
          <div className="ed-quote-steps">
            {STEPS.map((s, i) => (
              <div key={i} className={`ed-quote-step${step === i ? ' active' : ''}`}>
                <div className="circ">{s.num}</div>
                <div>
                  <div className="t">{s.title}</div>
                  <div className="d">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ed-quote-card">
          <div className="ed-quote-progress" style={{ '--pct': pct } as React.CSSProperties} />
          <form className="ed-quote-body" onSubmit={handleSubmit}>
            <div className="ed-quote-head">
              <h2>{STEPS[step].title}</h2>
              <span className="step-badge">Paso {step + 1} de 3</span>
            </div>

            {step === 0 && (
              <>
                <div className="ed-field">
                  <label>Tipo de propiedad</label>
                  <div className="ed-tile-grid">
                    {[['Residencial', 'Casa o apartamento'], ['Comercial', 'Negocio u oficina'], ['Industrial', 'Planta o almacén']].map(([n, d]) => (
                      <div key={n} className={`ed-tile${form.tipo === n ? ' selected' : ''}`} onClick={() => setForm({ ...form, tipo: n })}>
                        <div className="n">{n}</div>
                        <div className="d">{d}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ed-field">
                  <label>Consumo mensual aproximado (kWh)</label>
                  <select className="ed-select-input" value={form.kw} onChange={e => setForm({ ...form, kw: e.target.value })}>
                    <option value="">Selecciona</option>
                    <option>Menos de 300 kWh</option>
                    <option>300 — 600 kWh</option>
                    <option>600 — 1,200 kWh</option>
                    <option>Más de 1,200 kWh</option>
                  </select>
                </div>
              </>
            )}

            {step === 1 && (
              <div className="ed-field">
                <label>¿Qué sistema te interesa?</label>
                <div className="ed-tile-grid">
                  {[
                    ['Power Station', 'Portátil LiFePO4 para emergencias'],
                    ['Batería + Solar', 'ESS residencial + paneles'],
                    ['Generador Standby', 'Autoarranque LP/Gas natural'],
                    ['Sistema completo', 'Solar + Batería + Generador'],
                    ['Placas solares', 'Solo paneles fotovoltaicos'],
                    ['No sé aún', 'Necesito asesoría'],
                  ].map(([n, d]) => (
                    <div key={n} className={`ed-tile${form.sistema === n ? ' selected' : ''}`} onClick={() => setForm({ ...form, sistema: n })}>
                      <div className="n">{n}</div>
                      <div className="d">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="ed-field-row">
                  <div className="ed-field">
                    <label>Nombre completo <span className="req">*</span></label>
                    <input className="ed-input" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" />
                  </div>
                  <div className="ed-field">
                    <label>Teléfono <span className="req">*</span></label>
                    <input className="ed-input" required type="tel" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} placeholder="(787) 000-0000" />
                  </div>
                </div>
                <div className="ed-field">
                  <label>Email</label>
                  <input className="ed-input" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" />
                </div>
                <div className="ed-field">
                  <label>Municipio</label>
                  <input className="ed-input" value={form.municipio} onChange={e => setForm({ ...form, municipio: e.target.value })} placeholder="San Juan, Bayamón, Caguas..." />
                </div>
                <div className="ed-field">
                  <label>Notas adicionales</label>
                  <textarea className="ed-textarea" value={form.notas} onChange={e => setForm({ ...form, notas: e.target.value })} placeholder="Cualquier detalle que nos ayude a preparar tu cotización..." />
                </div>
              </>
            )}

            <div className="ed-quote-nav">
              {step > 0
                ? <button type="button" className="ed-btn ed-btn-ghost" onClick={() => setStep(step - 1)}>Atrás</button>
                : <span />
              }
              <button type="submit" className="ed-btn ed-btn-brand">
                {step < 2 ? 'Continuar' : 'Enviar solicitud'}
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
