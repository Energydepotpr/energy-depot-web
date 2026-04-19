export interface Product {
  slug: string
  brand: string
  name: string
  shortName: string
  cat: 'portatiles' | 'ess' | 'generadores' | 'solar'
  catName: string
  price: number
  was: number | null
  img: string
  badge: string | null
  specs: string[]
  highlights: string[]
  specsTable: [string, string][]
}

export interface Category {
  slug: string
  name: string
  desc: string
  icon: 'battery' | 'home' | 'bolt' | 'sun'
}

export const PRODUCTS: Product[] = [
  // ============ UGREEN ============
  {
    slug: 'ugreen-gs600', brand: 'UGreen', name: 'PowerRoam GS600 — 600W / 680Wh LiFePO4', shortName: 'UGreen GS600',
    cat: 'portatiles', catName: 'Portátiles', price: 699, was: 1099, img: '/prod/ugreen-gs600.png', badge: 'Sale',
    specs: ['600W', '680Wh', 'LiFePO4'],
    highlights: ['600W salida AC, hasta 1200W con U-Turbo', 'Carga 0 → 80% en 50 minutos', '12 puertos para cualquier dispositivo', 'Control por app UGREEN', 'Garantía full de 5 años'],
    specsTable: [['Capacidad batería', '680 Wh'], ['Salida AC', '600 W / 1200 W pico'], ['Tecnología', 'LiFePO4 · 3000+ ciclos'], ['Voltaje', '120 V'], ['Peso', '12.8 lbs'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'ugreen-gs1200', brand: 'UGreen', name: 'PowerRoam GS1200 — 1,200W / 1,024Wh LiFePO4', shortName: 'UGreen GS1200',
    cat: 'portatiles', catName: 'Portátiles', price: 999, was: 1399, img: '/prod/ugreen-gs1200.png', badge: 'Sale',
    specs: ['1200W', '1024Wh', 'LiFePO4'],
    highlights: ['1,200W salida AC · U-Turbo hasta 2,500W', 'Carga PowerZip 0→100% en 1.5 hrs', 'LiFePO4 · 3,000+ ciclos', '14 puertos · USB-C PD 100W', 'Garantía 5 años'],
    specsTable: [['Capacidad', '1,024 Wh'], ['Salida AC', '1,200 W / 2,500 W U-Turbo'], ['Tipo batería', 'LiFePO4 · 3,000+ ciclos'], ['Voltaje', '120 V'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'ugreen-gs2200', brand: 'UGreen', name: 'PowerRoam GS2200 — 2,400W / 2,048Wh Expandible', shortName: 'UGreen GS2200',
    cat: 'portatiles', catName: 'Portátiles', price: 2600, was: 2999, img: '/prod/ugreen-gs2200.png', badge: 'Sale',
    specs: ['2400W', '2048Wh', 'Expandible'],
    highlights: ['Carga 0→100% en 1.5 horas con PowerZip', 'U-Turbo hasta 3,500W en 16 puertos', 'Expandible de 2kWh a 12kWh', 'LiFePO4 EV-rated · vida útil 10 años', 'Trolley desmontable + app control'],
    specsTable: [['Capacidad', '2,048 Wh'], ['Salida AC', '2,400 W / 3,500 W pico'], ['Tecnología', 'LiFePO4 EV-grade'], ['Expansión', 'Hasta 12 kWh'], ['Peso', '56.2 lbs'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'ugreen-gs2200-bundle', brand: 'UGreen', name: 'GS2200 + Panel Solar 200W Bundle', shortName: 'GS2200 Bundle',
    cat: 'portatiles', catName: 'Portátiles', price: 1999, was: 2999, img: '/prod/ugreen-gs2200-bundle.png', badge: 'Oferta',
    specs: ['Bundle', '2048Wh', '+200W Solar'],
    highlights: ['GS2200 2,400W / 2,048Wh LiFePO4', 'Panel solar plegable USP200 GRATIS', 'Pre-orden con descuento exclusivo', 'Expandible hasta 12 kWh', 'Garantía 5 años'],
    specsTable: [['Incluye', 'GS2200 + USP200 200W'], ['Capacidad', '2,048 Wh'], ['Salida AC', '2,400 W / 3,500 W pico'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'ugreen-eb2000', brand: 'UGreen', name: 'EB2000 — Batería de Extensión 2,048Wh', shortName: 'UGreen EB2000',
    cat: 'portatiles', catName: 'Portátiles', price: 1399, was: 1999, img: '/prod/ugreen-eb2000.png', badge: 'Sale',
    specs: ['2048Wh', 'LiFePO4', 'Expansión'],
    highlights: ['2,048Wh para PowerRoam GS2200', 'LiFePO4 · 3,000+ ciclos', 'Plug & play con GS2200', 'Hasta 5 módulos = 12 kWh', 'Garantía 5 años'],
    specsTable: [['Capacidad', '2,048 Wh'], ['Química', 'LiFePO4'], ['Compatibilidad', 'UGreen GS2200'], ['Expansión', 'Hasta 5 en paralelo'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'ugreen-usp200', brand: 'UGreen', name: 'USP200 — Panel Solar Plegable 200W', shortName: 'USP200',
    cat: 'solar', catName: 'Placas Solares', price: 399, was: 599, img: '/prod/ugreen-usp200.png', badge: 'Sale',
    specs: ['200W', 'Plegable', 'IP67'],
    highlights: ['200W monocristalino de alta eficiencia', 'Plegable y portátil con estuche', 'Resistente al agua IP67', 'Compatible con cualquier power station', 'Ideal para camping y emergencias'],
    specsTable: [['Potencia', '200 W'], ['Tipo celda', 'Monocristalino'], ['Protección', 'IP67'], ['Conectores', 'MC4 universal'], ['Eficiencia', '22%+']]
  },
  // ============ PECRON ============
  {
    slug: 'pecron-e300', brand: 'Pecron', name: 'E300LFP — 600W / 300Wh LiFePO4', shortName: 'Pecron E300',
    cat: 'portatiles', catName: 'Portátiles', price: 399, was: 439, img: '/prod/pecron-e300.png', badge: 'Sale',
    specs: ['600W', '300Wh', 'LiFePO4'],
    highlights: ['600W inversor · 1,200W pico', '300Wh LiFePO4 · 3,500+ ciclos', 'Ultra-portátil · peso 9 lbs', 'Salidas AC + USB-C PD 60W', 'Garantía 5 años'],
    specsTable: [['Capacidad', '300 Wh'], ['Salida AC', '600 W / 1,200 W pico'], ['Tipo batería', 'LiFePO4 · 3,500+ ciclos'], ['Peso', '9 lbs'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'pecron-e600', brand: 'Pecron', name: 'E600LFP — 1,200W / 600Wh LiFePO4', shortName: 'Pecron E600',
    cat: 'portatiles', catName: 'Portátiles', price: 699, was: 899, img: '/prod/pecron-e600.png', badge: 'Sale',
    specs: ['1200W', '600Wh', 'LiFePO4'],
    highlights: ['1,200W inversor · 2,400W pico', '600Wh LiFePO4 · 3,500+ ciclos', '11 salidas versátiles', 'USB-C PD 100W', 'Garantía 5 años'],
    specsTable: [['Capacidad', '600 Wh'], ['Salida AC', '1,200 W / 2,400 W pico'], ['Entrada solar', '200W Max'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'pecron-e1500', brand: 'Pecron', name: 'E1500LFP EPPS — 2,200W / 1,536Wh + UPS', shortName: 'Pecron E1500',
    cat: 'portatiles', catName: 'Portátiles', price: 1599, was: 1899, img: '/prod/pecron-e1500.png', badge: 'New',
    specs: ['2200W', '1536Wh', 'UPS'],
    highlights: ['LiFePO4 · 3,500+ ciclos al 80%', 'Inversor PSW 2200W · pico 4400W', 'Expandible hasta 7,680Wh', 'UPS + Wifi + App Control', 'Carga AC 1400W en 1.8 hrs · 13 salidas', 'Garantía 5 años PR · sin IVU'],
    specsTable: [['Capacidad', '1,536 Wh'], ['Salida AC', '2,200 W / 4,400 W pico'], ['Entrada solar', '800W Max'], ['UPS', 'Sí · Wifi · App'], ['Peso', '40 lb'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'pecron-e2000', brand: 'Pecron', name: 'E2000LFP EPPS — 2,000W / 1,920Wh Expandible', shortName: 'Pecron E2000',
    cat: 'portatiles', catName: 'Portátiles', price: 2299, was: 2799, img: '/prod/pecron-e2000.png', badge: 'Sale',
    specs: ['2000W', '1920Wh', 'Expandible'],
    highlights: ['2,000W inversor PSW · 4,000W pico', '1,920Wh LiFePO4 · 3,500+ ciclos', 'Expandible hasta ~8 kWh', 'Entrada solar 1,200W Max', 'UPS + app + wifi', 'Garantía 5 años'],
    specsTable: [['Capacidad', '1,920 Wh'], ['Salida AC', '2,000 W / 4,000 W pico'], ['Entrada solar', '1,200W Max'], ['UPS', 'Sí'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'pecron-e3600', brand: 'Pecron', name: 'E3600LFP EPPS — 3,600W / 3,072Wh 240V', shortName: 'Pecron E3600',
    cat: 'portatiles', catName: 'Portátiles', price: 3599, was: 3999, img: '/prod/pecron-e3600.png', badge: 'Sale',
    specs: ['3600W', '3072Wh', '240V'],
    highlights: ['2× E3600 + connection box = 7200W 240V', 'LiFePO4 · 3,500+ ciclos al 80%', 'Inversor PSW 3600W · pico 7000W', 'Expandible hasta 15,360Wh', 'Entrada solar 2400W Max', 'Carga AC 3,200W en 1.3 hrs', 'Garantía 5 años PR · sin IVU'],
    specsTable: [['Potencia', '3,600 W / 7,000 W pico'], ['Capacidad', '3,072 Wh'], ['Salida AC', '30A · 120/240V PSW'], ['Expansión', 'Hasta 15,360 Wh'], ['Entrada solar', '2,400 W Max'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'pecron-eb3000', brand: 'Pecron', name: 'EB3000 — Batería 3,072Wh 48V', shortName: 'EB3000 48V',
    cat: 'portatiles', catName: 'Portátiles', price: 2499, was: 2999, img: '/prod/pecron-eb3000.png', badge: 'Sale',
    specs: ['3072Wh', '48V', 'LiFePO4'],
    highlights: ['3 kWh · 48V para E1500/E3600', 'LiFePO4 · 3,500+ ciclos', 'Hasta 4 módulos = 15.36 kWh', 'Garantía 5 años'],
    specsTable: [['Capacidad', '3,072 Wh'], ['Voltaje', '48 V'], ['Compatibilidad', 'E1500LFP / E3600LFP'], ['Máx. expansión', '4 módulos · 15.36 kWh'], ['Garantía PR', '5 años · sin IVU']]
  },
  // ============ GROWATT ============
  {
    slug: 'growatt-helios', brand: 'Growatt', name: 'HELIOS 3600 PPS + Solar Panels 200W', shortName: 'Growatt Helios 3600',
    cat: 'portatiles', catName: 'Portátiles', price: 3999, was: 4999, img: '/prod/growatt-helios.png', badge: 'Sale',
    specs: ['3600W', '3686Wh', '240V'],
    highlights: ['3,686Wh · 3,600W salida', 'Expandible hasta 36 kWh', 'LiFePO4 · 4,000+ ciclos', 'Arranque en frío -22°F', 'Carga AC 1.5hrs · Watt+ boost 4,500W', 'Garantía 5 años PR'],
    specsTable: [['Capacidad', '3,686 Wh'], ['Salida AC', '3,600 W (4,500 W boost)'], ['Voltaje', '240 V'], ['Expansión', 'Hasta 36 kWh'], ['Tipo batería', 'LiFePO4 · 4,000+ ciclos'], ['Garantía PR', '5 años · sin IVU']]
  },
  {
    slug: 'growatt-infinity', brand: 'Growatt', name: 'INFINITY 2000 PPS + Solar Panels 200W', shortName: 'Growatt Infinity 2000',
    cat: 'portatiles', catName: 'Portátiles', price: 2499, was: 2999, img: '/prod/growatt-infinity.png', badge: 'Sale',
    specs: ['2200W', '2048Wh', '+200W Solar'],
    highlights: ['INFINITY 2000 · 2,200W / 2,048Wh', 'LiFePO4 · 3,000+ ciclos', 'Panel solar 200W GRATIS', 'UPS online + app', 'Garantía 5 años'],
    specsTable: [['Capacidad', '2,048 Wh'], ['Salida AC', '2,200 W / 4,400 W pico'], ['Panel solar', '200 W (incluido)'], ['Garantía PR', '5 años · sin IVU']]
  },
  // ============ SOLAX POWER (ESS) ============
  {
    slug: 'solax-ess10', brand: 'SolaX', name: 'SP ESS10-G2 — 7.6kW Inverter + 10.24kWh', shortName: 'SolaX ESS10-G2',
    cat: 'ess', catName: 'Sistemas ESS', price: 11499, was: null, img: '/prod/solax-ess10.png', badge: null,
    specs: ['7.6kW', '10.24kWh', 'LFP'],
    highlights: ['Hasta 200% oversizing · 3 MPPTs', 'Corriente PV máx 16A · microgrid', 'Hasta 4 sistemas en paralelo · 98% eficiencia', 'LFP modular · arc fault + rapid shutdown', 'Respaldo completo de hogar'],
    specsTable: [['Potencia inversor', '7.6 kW'], ['Capacidad batería', '10.24 kWh'], ['MPPTs', '3'], ['Eficiencia pico', '98%'], ['Tipo batería', 'LFP (LiFePO4)'], ['Paralelo', 'Hasta 4 sistemas']]
  },
  {
    slug: 'solax-ess15', brand: 'SolaX', name: 'SP ESS15-G2 — 7.6kW Inverter + 15.36kWh', shortName: 'SolaX ESS15-G2',
    cat: 'ess', catName: 'Sistemas ESS', price: 14499, was: null, img: '/prod/solax-ess15.png', badge: null,
    specs: ['7.6kW', '15.36kWh', 'LFP'],
    highlights: ['15.36 kWh · módulos 5.12 kWh apilables', '3 MPPTs · hasta 200% oversizing', 'Hasta 4 sistemas en paralelo', 'LFP · UL 9540 · arc fault + rapid shutdown'],
    specsTable: [['Potencia inversor', '7.6 kW'], ['Capacidad batería', '15.36 kWh'], ['MPPTs', '3'], ['Tipo batería', 'LFP'], ['Paralelo', 'Hasta 4 sistemas']]
  },
  {
    slug: 'solax-ess20', brand: 'SolaX', name: 'SP ESS20-G2 — 7.6kW Inverter + 20.48kWh', shortName: 'SolaX ESS20-G2',
    cat: 'ess', catName: 'Sistemas ESS', price: 17499, was: null, img: '/prod/solax-ess20.png', badge: null,
    specs: ['7.6kW', '20.48kWh', 'LFP'],
    highlights: ['ESS residencial flagship · 20.48 kWh LFP', '4 módulos apilables de 5.12 kWh', 'Paralelo hasta 4 sistemas = ~82 kWh', 'Rapid shutdown + arc fault + UL 9540'],
    specsTable: [['Potencia inversor', '7.6 kW'], ['Capacidad batería', '20.48 kWh'], ['Módulos', '4 × 5.12 kWh'], ['Eficiencia pico', '98%'], ['Tipo batería', 'LFP']]
  },
  // ============ BRIGGS & STRATTON ============
  {
    slug: 'briggs-12kw', brand: 'Briggs & Stratton', name: 'Stand By Generator 12kW', shortName: 'Briggs 12kW',
    cat: 'generadores', catName: 'Generadores', price: 8000, was: null, img: '/prod/briggs-12kw.png', badge: null,
    specs: ['12kW', '120/240V', 'LP/NG'],
    highlights: ['Modelo 040666', '120/240 V · 60 Hz · Breaker 60A', 'Operación -40°F a 104°F', 'Combustible LP/NG', '50/45 A running standby'],
    specsTable: [['Modelo', '040666'], ['Potencia', '12 kW'], ['Voltaje AC', '120 / 240 V'], ['Breaker', '60 A'], ['Corriente standby LP/NG', '50 / 45 A'], ['Factor de potencia', '1.0']]
  },
  {
    slug: 'briggs-20kw', brand: 'Briggs & Stratton', name: 'Stand By Generator 20kW', shortName: 'Briggs 20kW',
    cat: 'generadores', catName: 'Generadores', price: 9500, was: null, img: '/prod/briggs-20kw.png', badge: null,
    specs: ['20kW', '120/240V', 'Silencioso'],
    highlights: ['50% más silencioso que portátiles', '120/240 V · encendido automático', 'Combustible LP o gas natural', 'Monitor digital integrado', 'Garantía 5 años Briggs'],
    specsTable: [['Potencia', '20 kW'], ['Voltaje AC', '120 / 240 V'], ['Combustible', 'LP / Natural Gas'], ['Transfer switch', 'Compatible ATS 200A'], ['Garantía', '5 años']]
  },
  // ============ BLUESUN (PLACAS) ============
  {
    slug: 'bsm415', brand: 'Bluesun', name: 'BSM415M10-54HPH — 415W Bifacial Mono PERC', shortName: 'Bluesun 415W',
    cat: 'solar', catName: 'Placas Solares', price: 199, was: null, img: '/prod/bsm415.png', badge: null,
    specs: ['415W', 'Bifacial', '182mm'],
    highlights: ['Mono PERC 182mm · 108 half-cells', 'Duo Bifacial · gain hasta 30%', 'Voltaje sistema máx 1500 V/DC', '12 años garantía producto', '30 años garantía rendimiento lineal'],
    specsTable: [['Potencia', '415 W'], ['Tecnología', 'Mono PERC · 182mm'], ['Tipo', 'Duo Bifacial'], ['Voltaje sistema', '1,500 V/DC'], ['Garantía producto', '12 años'], ['Garantía rendimiento', '30 años']]
  },
  {
    slug: 'bsm460', brand: 'Bluesun', name: 'BSM460M72HBD — 460W Bifacial Mono PERC', shortName: 'Bluesun 460W',
    cat: 'solar', catName: 'Placas Solares', price: 239, was: null, img: '/prod/bsm460.png', badge: null,
    specs: ['460W', 'Bifacial', '182mm'],
    highlights: ['Mono PERC 182mm · 144 half-cells', 'Duo Bifacial · gain hasta 30%', 'Tier 1 manufacturer', '12 años garantía producto', '30 años garantía rendimiento'],
    specsTable: [['Potencia', '460 W'], ['Tecnología', 'Mono PERC · 182mm'], ['Tipo', 'Duo Bifacial'], ['Garantía producto', '12 años'], ['Garantía rendimiento', '30 años']]
  },
  {
    slug: 'bsm550', brand: 'Bluesun', name: 'BSM550M72HBD — 550W Bifacial Mono PERC', shortName: 'Bluesun 550W',
    cat: 'solar', catName: 'Placas Solares', price: 286, was: null, img: '/prod/bsm550.png', badge: null,
    specs: ['550W', 'Bifacial', '182mm'],
    highlights: ['2285 × 1134 × 35mm · 32.2 kg', 'Voltaje sistema máx 1500 V/DC', '12 años garantía producto', '30 años garantía rendimiento lineal'],
    specsTable: [['Potencia', '550 W'], ['Dimensiones', '2285 × 1134 × 35 mm'], ['Peso', '32.2 kg'], ['Voltaje sistema máx', '1,500 V/DC'], ['Garantía producto', '12 años'], ['Garantía rendimiento', '30 años']]
  },
]

export const CATEGORIES: Category[] = [
  { slug: 'portatiles', name: 'Estaciones Portátiles', desc: 'Power stations LiFePO4 para respaldo móvil y emergencias', icon: 'battery' },
  { slug: 'ess', name: 'Sistemas ESS', desc: 'Almacenamiento residencial modular SolaX · hasta 20.48 kWh', icon: 'home' },
  { slug: 'generadores', name: 'Generadores', desc: 'Stand-by automáticos Briggs & Stratton 12kW y 20kW', icon: 'bolt' },
  { slug: 'solar', name: 'Placas Solares', desc: 'Bluesun bifacial 415-550W · paneles plegables UGreen/Pecron', icon: 'sun' },
]

export const BRANDS = ['UGreen', 'Pecron', 'SolaX Power', 'Growatt', 'Briggs & Stratton', 'Bluesun', 'IronRidge', 'Enphase']

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getProductsByCategory(cat: string): Product[] {
  if (cat === 'all') return PRODUCTS
  return PRODUCTS.filter(p => p.cat === cat)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
}
