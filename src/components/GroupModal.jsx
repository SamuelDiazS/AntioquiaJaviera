import { useEffect } from 'react'
import { X } from 'lucide-react'
import SilletaFrame from './SilletaFrame.jsx'
import ProductList from './ProductList.jsx'

export default function GroupModal({ group, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!group) return null

  return (
    <div
      className="fixed inset-0 z-[90] bg-verde-oscuro/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Grupo ${group.id}, ${group.baseName}`}
      onClick={onClose}
    >
      <div
        className="relative bg-crema textura-papel borde-organico max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-card p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-verde-oscuro/60 hover:text-terracota"
          aria-label="Cerrar"
        >
          <X className="w-7 h-7" />
        </button>

        <span className="inline-block bg-verde-oscuro text-dorado font-display font-bold text-lg px-4 py-1 rounded-full mb-4">
          {group.id}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-verde-oscuro leading-tight">
          {group.baseName}
        </h3>
        {group.phrase && (
          <p className="font-script text-xl text-terracota mt-1">"{group.phrase}"</p>
        )}

        <div className="grid sm:grid-cols-2 gap-2 mt-4 text-sm text-verde-oscuro/80">
          {group.productoBase && (
            <p className="sm:col-span-2">
              <span className="font-semibold">Producto base:</span> {group.productoBase}
            </p>
          )}
        </div>

        <div className="mt-6 max-w-xs mx-auto sm:mx-0">
          <SilletaFrame groupId={group.id} defaultSrc={group.silletaImage} groupLabel={group.id} />
        </div>

        {group.note && (
          <p className="mt-4 text-sm italic text-verde-oliva bg-verde-oliva/10 rounded-organico-2 px-4 py-2">
            {group.note}
          </p>
        )}

        <div className="mt-6">
          <ProductList group={group} />
        </div>
      </div>
    </div>
  )
}
