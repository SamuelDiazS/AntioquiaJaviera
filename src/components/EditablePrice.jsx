import { useState } from 'react'
import { Pencil, Check } from 'lucide-react'
import { useAdmin } from '../context/AdminContext.jsx'
import { formatPrice, isPricePending } from '../utils/formatPrice.js'

export default function EditablePrice({ priceKey, basePrice = 0, size = 'md' }) {
  const { adminMode, getPrice, setPrice } = useAdmin()
  const current = getPrice(priceKey, basePrice)
  const pending = isPricePending(current)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(current || '')

  const sizeClasses =
    size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs sm:text-sm px-2.5 py-1'

  function commit() {
    const value = draft === '' ? 0 : Math.max(0, Number(draft))
    setPrice(priceKey, Number.isNaN(value) ? 0 : value)
    setEditing(false)
  }

  if (adminMode && editing) {
    return (
      <span className="inline-flex items-center gap-1">
        <input
          type="number"
          min="0"
          step="500"
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && commit()}
          onBlur={commit}
          className={`w-24 rounded-full border border-dorado/60 ${sizeClasses} text-verde-oscuro focus:outline-none`}
        />
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={commit}
          className="text-verde-oscuro/70 hover:text-verde-oscuro"
          aria-label="Guardar precio"
        >
          <Check className="w-4 h-4" />
        </button>
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={() => adminMode && setEditing(true)}
      className={`inline-flex items-center gap-1 rounded-full font-semibold whitespace-nowrap ${sizeClasses} ${
        pending
          ? 'bg-verde-oliva/15 text-verde-oliva italic'
          : 'bg-terracota/10 text-terracota'
      } ${adminMode ? 'cursor-pointer hover:ring-2 hover:ring-dorado/60' : 'cursor-default'}`}
    >
      {formatPrice(current)}
      {adminMode && <Pencil className="w-3 h-3 opacity-60" aria-hidden="true" />}
    </button>
  )
}
