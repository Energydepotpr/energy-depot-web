import Hero from '@/components/home/Hero'
import Brands from '@/components/home/Brands'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Values from '@/components/home/Values'
import ProjectsSection from '@/components/home/ProjectsSection'
import CtaStrip from '@/components/home/CtaStrip'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energy Depot PR — Energía Solar y Almacenamiento en Puerto Rico',
  description: 'Distribuidor autorizado de sistemas de energía solar, baterías portátiles, generadores y ESS residencial en Puerto Rico. Marcas: UGreen, Pecron, Growatt, SolaX, Briggs & Stratton.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Categories />
      <FeaturedProducts />
      <Values />
      <ProjectsSection />
      <CtaStrip />
    </>
  )
}
