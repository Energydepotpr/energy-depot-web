import { Suspense } from 'react'
import TiendaClient from './TiendaClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tienda — Energy Depot PR',
  description: 'Catálogo completo de energía solar en Puerto Rico. Estaciones portátiles LiFePO4, sistemas ESS, generadores y placas solares.',
}

export default function TiendaPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <TiendaClient />
    </Suspense>
  )
}
