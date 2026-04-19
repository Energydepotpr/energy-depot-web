import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="ed-app">
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
