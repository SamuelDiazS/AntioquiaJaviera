import { Flower2 } from 'lucide-react'
import DivisorFloral from './decor/DivisorFloral.jsx'
import { evento } from '../data/evento.js'

export default function Footer() {
  const year = new Date(evento.fecha).getFullYear?.() || 2026

  return (
    <footer className="bg-verde-oscuro textura-papel-oscura pt-10 pb-8 px-4 sm:px-6 text-center">
      <DivisorFloral tono="#E3A63C" />
      <Flower2 className="w-6 h-6 text-dorado mx-auto mt-2 mb-3" aria-hidden="true" />
      <p className="font-display text-lg sm:text-xl font-semibold text-crema">
        {evento.institucion}
      </p>
      <p className="text-dorado font-semibold mt-1">
        {evento.nombre} — {year}
      </p>
      <p className="font-script text-xl sm:text-2xl text-crema/80 mt-3">
        "Antioquia te abraza y contigo florece."
      </p>
    </footer>
  )
}
