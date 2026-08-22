import { useRef, useState } from 'react'
import { ImageUp, Maximize2, X, Flower2, Trash2 } from 'lucide-react'
import { useAdmin } from '../context/AdminContext.jsx'

export default function SilletaFrame({ groupId, defaultSrc, groupLabel }) {
  const { adminMode, getImage, setImage, clearImage } = useAdmin()
  const [errored, setErrored] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const inputRef = useRef(null)

  const src = getImage(groupId, defaultSrc)
  const hasCustomImage = src !== defaultSrc
  const showPlaceholder = errored && !hasCustomImage

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setImage(groupId, reader.result)
      setErrored(false)
    }
    reader.readAsDataURL(file)
  }

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

      {adminMode && (
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-verde-oscuro text-crema px-3 py-1.5 rounded-full hover:bg-verde-bosque"
          >
            <ImageUp className="w-3.5 h-3.5" /> Cambiar imagen
          </button>
          {hasCustomImage && (
            <button
              type="button"
              onClick={() => {
                clearImage(groupId)
                setErrored(false)
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-terracota/90 text-crema px-3 py-1.5 rounded-full hover:bg-terracota"
            >
              <Trash2 className="w-3.5 h-3.5" /> Quitar
            </button>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
          <p className="w-full text-[11px] text-verde-oscuro/60">
            Ruta actual: <code>{defaultSrc}</code> · guardado solo en este navegador
          </p>
        </div>
      )}

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
