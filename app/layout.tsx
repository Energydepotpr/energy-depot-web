import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: 'Energy Depot PR — Energía Solar y Almacenamiento en Puerto Rico',
  description: 'Distribuidor autorizado de sistemas de energía solar, baterías portátiles LiFePO4, generadores y ESS residencial en Puerto Rico. Garantía 5 años. Sin IVU.',
  keywords: 'energía solar Puerto Rico, baterías portátiles PR, generadores Puerto Rico, UGreen, Pecron, SolaX, Growatt',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
