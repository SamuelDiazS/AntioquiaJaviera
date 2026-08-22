import { useState } from 'react'
import { Maximize2, X, Flower2 } from 'lucide-react'

export default function SilletaFrame({ groupId, defaultSrc, groupLabel }) {
  const [errored, setErrored] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const src = defaultSrc
  const showPlaceholder = errored

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden borde-organico bg-beige border-2 border-dorado/40 shadow-soft group">
        {showPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-verde-oscuro/70 textura-papel px-4 text-center">
            <Flower2 className="w-9 h-9 text-verde-oliva/70" aria-hidden="true" />
            <p className="font-display text-base sm:text-lg font-semibold">Silleta de {groupLabel}</p>
            <p className="text-xs sm:text-sm uppercase tracking-wide text-verde-oliva/80">
              Imagen próximamente
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={`Silleta del grupo ${groupLabel}`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setErrored(true)}
            onLoad={() => setErrored(false)}
          />
        )}

        {!showPlaceholder && (
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="absolute bottom-3 right-3 bg-verde-oscuro/80 hover:bg-verde-oscuro text-crema rounded-full p-2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            aria-label={`Ampliar imagen de la silleta ${groupLabel}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {lightbox && !showPlaceholder && (
        <div
          className="fixed inset-0 z-[100] bg-verde-oscuro/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada de la silleta ${groupLabel}`}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-crema hover:text-dorado"
            onClick={() => setLightbox(false)}
            aria-label="Cerrar imagen ampliada"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={src}
            alt={`Silleta del grupo ${groupLabel} ampliada`}
            className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
