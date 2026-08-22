import { CalendarDays, MapPin, Clock, Sunrise, Coffee, PartyPopper } from 'lucide-react'
import { evento } from '../data/evento.js'
import DivisorFloral from './decor/DivisorFloral.jsx'
import useReveal from '../hooks/useReveal.js'

const ITEMS = [
  { icon: CalendarDays, label: 'Fecha', value: evento.fecha },
  { icon: MapPin, label: 'Lugar', value: evento.lugar },
  { icon: Sunrise, label: 'Apertura de la jornada', value: evento.aperturaJornada },
  { icon: Clock, label: 'Inicio de bases', value: evento.inicioBases },
  { icon: Coffee, label: 'Descanso lúdico recreativo', value: evento.descanso },
  { icon: PartyPopper, label: 'Acto cívico cultural', value: evento.actoCivico },
]

export default function InfoSection() {
  const titleRef = useReveal()
  const cardRef = useReveal()

  return (
    <section id="informacion" className="bg-crema textura-papel py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-10">
          <p className="font-script text-2xl text-terracota">Todo lo que necesitas saber</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-verde-oscuro mt-1">
            Información del Evento
          </h2>
          <p className="text-verde-oscuro/70 max-w-2xl mx-auto mt-3">{evento.institucion}</p>
        </div>

        <DivisorFloral className="mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-crema-2 borde-organico-2 border-2 border-verde-oliva/20 shadow-soft p-5 flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-verde-oscuro text-dorado flex items-center justify-center">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-verde-oliva font-semibold">
                  {label}
                </p>
                <p className="font-display text-lg font-semibold text-verde-oscuro">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={cardRef}
          className="reveal mt-10 bg-verde-oscuro textura-papel-oscura rounded-organico px-6 sm:px-10 py-8 sm:py-10 text-center shadow-card"
        >
          <p className="font-script text-2xl sm:text-3xl text-dorado leading-snug">
            "{evento.frasePrincipal}"
          </p>
          <p className="text-crema/75 mt-4 text-sm sm:text-base">{evento.fraseSecundaria}</p>
        </div>
      </div>
    </section>
  )
}
