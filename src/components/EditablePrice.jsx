import { formatPrice, isPricePending } from '../utils/formatPrice.js'

export default function EditablePrice({ priceKey, basePrice = 0, size = 'md' }) {
  const current = basePrice
  const pending = isPricePending(current)

  const sizeClasses =
    size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs sm:text-sm px-2.5 py-1'

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-semibold whitespace-nowrap ${sizeClasses} ${
        pending
          ? 'bg-verde-oliva/15 text-verde-oliva italic'
          : 'bg-terracota/10 text-terracota'
      }`}
    >
      {formatPrice(current)}
    </span>
  )
}
