import { columnas, filas, leyenda } from '../data/rotaciones.js'
import { MapPin } from 'lucide-react'
import DivisorFloral from './decor/DivisorFloral.jsx'
import useReveal from '../hooks/useReveal.js'

export default function RotationSection() {
  const titleRef = useReveal()

  return (
    <section id="rotaciones" className="bg-crema textura-papel py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-8">
          <p className="font-script text-2xl text-terracota">Todos en movimiento</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-verde-oscuro mt-1">
            Rotación de la Jornada
          </h2>
        </div>

        <DivisorFloral className="mb-8" />

        {/* Vista de tabla (tablet y escritorio) */}
        <div className="hidden sm:block overflow-x-auto rounded-organico border-2 border-verde-oliva/25 shadow-card">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-verde-oscuro text-crema">
                <th className="sticky left-0 z-10 bg-verde-oscuro text-left px-4 py-3 font-display font-semibold whitespace-nowrap">
                  Grupo / Lugar
                </th>
                {columnas.map((col) => (
                  <th key={col} className="px-4 py-3 font-display font-semibold whitespace-nowrap text-left">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((fila, i) => (
                <tr
                  key={fila.grupo}
                  className={i % 2 === 0 ? 'bg-crema-2' : 'bg-beige/60'}
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 text-left px-4 py-3 font-semibold text-verde-oscuro whitespace-nowrap ${
                      i % 2 === 0 ? 'bg-crema-2' : 'bg-beige/60'
                    }`}
                  >
                    <span className="block font-display text-base">{fila.grupo}</span>
                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-wide text-verde-oliva">
                      <MapPin className="w-3 h-3" /> {fila.lugar}
                    </span>
                  </th>
                  {fila.rotaciones.map((valor, idx) => (
                    <td key={idx} className="px-4 py-3 text-verde-oscuro/85 whitespace-nowrap">
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vista de tarjetas (móvil) */}
        <div className="sm:hidden space-y-4">
          {filas.map((fila) => (
            <div
              key={fila.grupo}
              className="bg-crema-2 borde-organico-2 border-2 border-verde-oliva/20 shadow-soft p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-lg font-bold text-verde-oscuro">
                  {fila.grupo}
                </span>
                <span className="flex items-center gap-1 text-[11px] uppercase tracking-wide text-verde-oliva">
                  <MapPin className="w-3 h-3" /> {fila.lugar}
                </span>
              </div>
              <ul className="divide-y divide-verde-oliva/10">
                {columnas.map((col, idx) => (
                  <li key={col} className="flex items-center justify-between py-1.5 text-sm">
                    <span className="text-verde-oscuro/60">{col}</span>
                    <span className="font-medium text-verde-oscuro">{fila.rotaciones[idx]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-dorado/10 border border-dorado/40 rounded-organico-2 px-5 py-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wide text-dorado-2 mb-2">
            Leyenda
          </p>
          <ul className="text-sm text-verde-oscuro/80 space-y-1">
            {leyenda.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
