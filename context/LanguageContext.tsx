'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, type Lang } from '@/lib/i18n'

const LanguageContext = createContext<{
  lang: Lang
  t: typeof translations.es
  toggle: () => void
}>({
  lang: 'es',
  t: translations.es,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('ed-lang') as Lang | null
    if (saved === 'en' || saved === 'es') setLang(saved)
  }, [])

  const toggle = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('ed-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
