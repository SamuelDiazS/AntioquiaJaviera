import { CalendarDays, MapPin, ArrowDown } from 'lucide-react'
import Montanas from './decor/Montanas.jsx'
import SilletaSVG from './decor/SilletaSVG.jsx'
import OrnamentoEsquina from './decor/OrnamentoEsquina.jsx'
import { evento } from '../data/evento.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-verde-oscuro textura-papel-oscura pt-24 pb-0"
    >
      {/* Ornamentos de esquina */}
      <OrnamentoEsquina className="absolute -top-2 -left-2 w-32 sm:w-44 opacity-90" />
      <OrnamentoEsquina className="absolute -bottom-2 -right-2 w-32 sm:w-44 rotate-180 opacity-90" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-5 sm:px-8">
        <p className="uppercase tracking-[0.25em] text-dorado text-xs sm:text-sm font-semibold mb-5">
          {evento.institucion}
        </p>

        <h1 className="font-display text-crema font-semibold leading-[1.05] text-4xl sm:text-6xl lg:text-7xl">
          {evento.nombre}
        </h1>

        <p className="font-script text-dorado text-2xl sm:text-3xl lg:text-4xl mt-6 leading-snug">
          "{evento.frasePrincipal}"
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-crema/95">
          <span className="inline-flex items-center gap-2 bg-crema/10 border border-crema/25 rounded-full px-4 py-2 text-sm sm:text-base">
            <CalendarDays className="w-4 h-4 text-dorado" aria-hidden="true" />
            {evento.fecha}
          </span>
          <span className="inline-flex items-center gap-2 bg-crema/10 border border-crema/25 rounded-full px-4 py-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-dorado" aria-hidden="true" />
            {evento.lugar}
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#bases"
            className="w-full sm:w-auto text-center bg-dorado hover:bg-dorado-2 text-verde-oscuro font-semibold px-7 py-3.5 rounded-full transition-colors shadow-soft"
          >
            Ver las bases
          </a>
          <a
            href="#rotaciones"
            className="w-full sm:w-auto text-center bg-transparent border-2 border-crema/60 hover:border-dorado hover:text-dorado text-crema font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            Ver rotaciones
          </a>
        </div>

        <p className="mt-6 text-crema/70 text-sm sm:text-base max-w-xl mx-auto">
          {evento.fraseSecundaria}
        </p>
      </div>

      {/* Silleta decorativa flotando sobre las montañas */}
      <div className="relative z-10 mt-10 flex justify-center">
        <SilletaSVG className="w-40 sm:w-52 lg:w-60 drop-shadow-2xl animate-float" />
      </div>

      <div className="relative mt-4">
        <Montanas className="w-full h-32 sm:h-44 lg:h-56" />
      </div>

      <a
        href="#bases"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-crema/70 hover:text-dorado animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
