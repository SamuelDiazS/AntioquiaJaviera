import { useState } from 'react'
import { Expand, Sparkles } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import SilletaFrame from './SilletaFrame.jsx'
import ProductList from './ProductList.jsx'
import GroupModal from './GroupModal.jsx'

const ACCENTS = {
  terracota: 'border-terracota/50 bg-terracota text-crema',
  dorado: 'border-dorado/60 bg-dorado text-verde-oscuro',
  'verde-oliva': 'border-verde-oliva/60 bg-verde-oliva text-crema',
  rosado: 'border-rosado/60 bg-rosado text-crema',
}

export default function GroupCard({ group, index }) {
  const ref = useReveal()
  const [open, setOpen] = useState(false)
  const badge = ACCENTS[group.accent] || ACCENTS['verde-oliva']

  return (
    <>
      <article
        ref={ref}
        className="reveal bg-crema-2 textura-papel borde-organico border-2 border-verde-oliva/20 shadow-card p-5 sm:p-6 flex flex-col"
        style={{ animationDelay: `${(index % 3) * 90}ms` }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`font-display font-bold text-lg px-3.5 py-1 rounded-full border-2 ${badge}`}
          >
            {group.id}
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-verde-oscuro/50 hover:text-verde-oscuro transition-colors"
            aria-label={`Ver grupo ${group.id} en detalle`}
          >
            <Expand className="w-5 h-5" />
          </button>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-verde-oscuro leading-snug">
          {group.baseName}
        </h3>
        {group.phrase && (
          <p className="font-script text-lg text-terracota mt-0.5 mb-1">"{group.phrase}"</p>
        )}

        <div className="mt-2 mb-4 text-sm text-verde-oscuro/75 space-y-0.5">
          {group.productoBase && (
            <p className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-dorado-2" aria-hidden="true" />
              <span className="font-semibold">Producto base:</span> {group.productoBase}
            </p>
          )}
        </div>

        <div className="mb-4">
          <SilletaFrame groupId={group.id} defaultSrc={group.silletaImage} groupLabel={group.id} />
        </div>

        {group.note && (
          <p className="text-xs italic text-verde-oliva bg-verde-oliva/10 rounded-organico-2 px-3 py-2 mb-4">
            {group.note}
          </p>
        )}

        <div className="mt-auto">
          <ProductList group={group} compact />
        </div>

        <div className="flex gap-2 mt-5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 text-sm font-semibold bg-verde-oscuro text-crema rounded-full px-4 py-2.5 hover:bg-verde-bosque transition-colors"
          >
            Ver productos
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 text-sm font-semibold border-2 border-verde-oscuro text-verde-oscuro rounded-full px-4 py-2.5 hover:bg-verde-oscuro hover:text-crema transition-colors"
          >
            Ver silleta
          </button>
        </div>
      </article>

      {open && <GroupModal group={group} onClose={() => setOpen(false)} />}
    </>
  )
}
