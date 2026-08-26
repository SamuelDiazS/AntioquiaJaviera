import { useState } from 'react'
import { groups } from '../data/groups.js'
import GroupCard from './GroupCard.jsx'
import DivisorFloral from './decor/DivisorFloral.jsx'
import useReveal from '../hooks/useReveal.js'

export default function GroupsSection() {
  const [filtro, setFiltro] = useState('todos')
  const titleRef = useReveal()

  const visibles = filtro === 'todos' ? groups : groups.filter((g) => g.id === filtro)

  return (
    <section id="bases" className="bg-crema textura-papel py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-4">
          <p className="font-script text-2xl text-terracota">Vive a Antioquia en la Javiera</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-verde-oscuro mt-1">
            Bases y Grupos de Grado 11
          </h2>
        </div>

        <DivisorFloral className="mb-10" />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setFiltro('todos')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
              filtro === 'todos'
                ? 'bg-verde-oscuro text-crema border-verde-oscuro'
                : 'border-verde-oliva/40 text-verde-oscuro hover:border-verde-oscuro'
            }`}
          >
            Todos
          </button>
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setFiltro(g.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                filtro === g.id
                  ? 'bg-verde-oscuro text-crema border-verde-oscuro'
                  : 'border-verde-oliva/40 text-verde-oscuro hover:border-verde-oscuro'
              }`}
            >
              {g.id}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {visibles.map((group, i) => (
            <GroupCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
