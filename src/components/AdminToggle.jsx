import { useState } from 'react'
import { Settings, X, RotateCcw } from 'lucide-react'
import { useAdmin } from '../context/AdminContext.jsx'

export default function AdminToggle() {
  const { adminMode, toggleAdminMode, resetAll, storageError } = useAdmin()
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-2">
      {showInfo && (
        <div className="bg-verde-oscuro text-crema text-xs sm:text-sm rounded-organico-2 shadow-card px-4 py-3 max-w-[260px]">
          <p className="font-semibold mb-1">Modo edición local</p>
          <p className="text-crema/80">
            Activa este modo para editar precios y cargar imágenes de silletas. Los cambios se
            guardan solo en este navegador (localStorage), listos para conectarse a un panel de
            administración real más adelante.
          </p>
          {storageError && <p className="text-rosado mt-2">{storageError}</p>}
          {adminMode && (
            <button
              type="button"
              onClick={resetAll}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-terracota px-3 py-1.5 rounded-full hover:bg-terracota/90"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restablecer cambios locales
            </button>
          )}
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowInfo((v) => !v)}
          className="w-9 h-9 rounded-full bg-crema-2 border border-verde-oliva/30 text-verde-oscuro/70 flex items-center justify-center shadow-soft hover:text-verde-oscuro"
          aria-label="Información sobre el modo edición"
        >
          {showInfo ? <X className="w-4 h-4" /> : '?'}
        </button>
        <button
          type="button"
          onClick={toggleAdminMode}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-card transition-colors ${
            adminMode
              ? 'bg-dorado text-verde-oscuro'
              : 'bg-verde-oscuro text-crema hover:bg-verde-bosque'
          }`}
        >
          <Settings className="w-4 h-4" />
          {adminMode ? 'Edición activa' : 'Modo edición'}
        </button>
      </div>
    </div>
  )
}
