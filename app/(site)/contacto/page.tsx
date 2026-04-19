'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ContactoPage() {
  const { t } = useLanguage()
  const p = t.contacto

  return (
    <section className="ed-contact">
      <div className="ed-container">
        <div className="ed-contact-grid">
          <div>
            <div className="ed-section-label">{p.label}</div>
            <h1>{p.heading}<br /><em style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>{p.headingEm}</em>.</h1>

            <div className="ed-contact-info">
              {p.info.map(item => (
                <div key={item.title} className="ed-contact-item">
                  <div className="ed-contact-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                      {item.icon === 'phone' && <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>}
                      {item.icon === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5"/></>}
                      {item.icon === 'pin' && <><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></>}
                      {item.icon === 'clock' && <><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>}
                    </svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.main}</p>
                    <small>{item.sub}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="ed-contact-map" style={{ height: 280 }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#7a87a0', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', textAlign: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', margin: '0 auto 12px' }} />
                San Juan · Puerto Rico
              </div>
            </div>
          </div>

          <div>
            <div className="ed-quote-card" style={{ marginTop: 80 }}>
              <div className="ed-quote-body">
                <div className="ed-quote-head">
                  <h2>{p.formTitle}</h2>
                </div>
                <div className="ed-field">
                  <label>{p.name}</label>
                  <input className="ed-input" placeholder={p.namePh} />
                </div>
                <div className="ed-field">
                  <label>{p.contact}</label>
                  <input className="ed-input" placeholder={p.contactPh} />
                </div>
                <div className="ed-field">
                  <label>{p.message}</label>
                  <textarea className="ed-textarea" rows={5} placeholder={p.messagePh} />
                </div>
                <button className="ed-btn ed-btn-brand" style={{ width: '100%', justifyContent: 'center' }}>
                  {p.send}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
