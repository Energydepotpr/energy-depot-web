'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function CotizacionPage() {
  const { t } = useLanguage()
  const p = t.cotizacion
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
          <div className="ed-section-label">{p.label}</div>
          <h1><em>{p.successTitle}</em></h1>
          <p>{p.successSub}</p>
        </div>
        <div className="ed-quote-card">
          <div style={{ padding: 40, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--success)', display: 'grid', placeItems: 'center', margin: '0 auto 24px', color: '#fff' }}>
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 28, marginBottom: 12 }}>{p.successBadge}</h2>
            <p style={{ color: 'var(--ink-3)', marginBottom: 24 }}>{p.successContact(form.telefono || form.email)}</p>
            <a href="/" className="ed-btn ed-btn-brand">{p.backHome}</a>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section className="ed-quote">
      <div className="ed-quote-inner">
        <div className="ed-quote-aside">
          <div className="ed-section-label">{p.label}</div>
          <h1>{p.heading}<br /><em>{p.headingEm}</em>.</h1>
          <p>{p.sub}</p>
          <div className="ed-quote-steps">
            {p.steps.map((s, i) => (
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
              <h2>{p.steps[step].title}</h2>
              <span className="step-badge">{p.stepBadge(step + 1)}</span>
            </div>

            {step === 0 && (
              <>
                <div className="ed-field">
                  <label>{p.propertyLabel}</label>
                  <div className="ed-tile-grid">
                    {p.propertyOpts.map(([n, d]) => (
                      <div key={n} className={`ed-tile${form.tipo === n ? ' selected' : ''}`} onClick={() => setForm({ ...form, tipo: n })}>
                        <div className="n">{n}</div>
                        <div className="d">{d}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ed-field">
                  <label>{p.kwLabel}</label>
                  <select className="ed-select-input" value={form.kw} onChange={e => setForm({ ...form, kw: e.target.value })}>
                    {p.kwOpts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </>
            )}

            {step === 1 && (
              <div className="ed-field">
                <label>{p.systemLabel}</label>
                <div className="ed-tile-grid">
                  {p.systemOpts.map(([n, d]) => (
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
                    <label>{p.fullName} <span className="req">*</span></label>
                    <input className="ed-input" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder={p.fullNamePh} />
                  </div>
                  <div className="ed-field">
                    <label>{p.phone} <span className="req">*</span></label>
                    <input className="ed-input" required type="tel" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} placeholder={p.phonePh} />
                  </div>
                </div>
                <div className="ed-field">
                  <label>{p.email}</label>
                  <input className="ed-input" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder={p.emailPh} />
                </div>
                <div className="ed-field">
                  <label>{p.municipio}</label>
                  <input className="ed-input" value={form.municipio} onChange={e => setForm({ ...form, municipio: e.target.value })} placeholder={p.municipioPh} />
                </div>
                <div className="ed-field">
                  <label>{p.notes}</label>
                  <textarea className="ed-textarea" value={form.notas} onChange={e => setForm({ ...form, notas: e.target.value })} placeholder={p.notesPh} />
                </div>
              </>
            )}

            <div className="ed-quote-nav">
              {step > 0
                ? <button type="button" className="ed-btn ed-btn-ghost" onClick={() => setStep(step - 1)}>{p.back}</button>
                : <span />
              }
              <button type="submit" className="ed-btn ed-btn-brand">
                {step < 2 ? p.next : p.submit}
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
