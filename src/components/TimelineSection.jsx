import { Sunrise, Footprints, RefreshCw, Coffee, PartyPopper } from 'lucide-react'
import { jornada } from '../data/evento.js'
import DivisorFloral from './decor/DivisorFloral.jsx'
import useReveal from '../hooks/useReveal.js'

const ICONOS = [Sunrise, Footprints, RefreshCw, Coffee, PartyPopper]

function TimelineItem({ item, Icon }) {
  const ref = useReveal()
  return (
    <li ref={ref} className="reveal relative pl-8 sm:pl-10">
      <span className="absolute -left-[27px] sm:-left-[35px] top-0 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-dorado text-verde-oscuro shadow-soft">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </span>
      <p className="text-dorado font-semibold text-sm uppercase tracking-wide">{item.hora}</p>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-crema mt-1">{item.titulo}</h3>
      {item.detalles && (
        <ul className="mt-2 space-y-1">
          {item.detalles.map((d) => (
            <li key={d} className="text-crema/75 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado/80" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function TimelineSection() {
  const titleRef = useReveal()

  return (
    <section id="jornada" className="bg-verde-oscuro textura-papel-oscura py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-10">
          <p className="font-script text-2xl text-dorado">Minuto a minuto</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-crema mt-1">
            Desarrollo de la Jornada
          </h2>
        </div>

        <DivisorFloral className="mb-10" tono="#E3A63C" />

        <ol className="relative border-l-2 border-dorado/30 ml-4 sm:ml-6 space-y-10">
          {jornada.map((item, i) => (
            <TimelineItem key={item.titulo} item={item} Icon={ICONOS[i % ICONOS.length]} />
          ))}
        </ol>
      </div>
    </section>
  )
}
