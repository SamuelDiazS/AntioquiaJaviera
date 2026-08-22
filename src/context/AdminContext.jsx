import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const STORAGE_KEY = 'antioquenidad-admin-v1'

const AdminContext = createContext(null)

function loadStoredData() {
  if (typeof window === 'undefined') return { prices: {}, images: {} }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { prices: {}, images: {} }
    const parsed = JSON.parse(raw)
    return {
      prices: parsed.prices || {},
      images: parsed.images || {},
    }
  } catch (err) {
    console.warn('No se pudo leer el almacenamiento local de administración:', err)
    return { prices: {}, images: {} }
  }
}

export function AdminProvider({ children }) {
  const [adminMode, setAdminMode] = useState(false)
  const [data, setData] = useState(loadStoredData)
  const [storageError, setStorageError] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      setStorageError(null)
    } catch (err) {
      console.warn('No se pudo guardar en el almacenamiento local:', err)
      setStorageError(
        'No se pudo guardar el último cambio en este navegador (posiblemente por espacio insuficiente).'
      )
    }
  }, [data])

  const toggleAdminMode = useCallback(() => setAdminMode((v) => !v), [])

  const getPrice = useCallback(
    (key, basePrice) => {
      if (Object.prototype.hasOwnProperty.call(data.prices, key)) {
        return data.prices[key]
      }
      return basePrice
    },
    [data.prices]
  )

  const setPrice = useCallback((key, value) => {
    setData((prev) => ({
      ...prev,
      prices: { ...prev.prices, [key]: value },
    }))
  }, [])

  const getImage = useCallback(
    (groupId, fallback) => {
      return data.images[groupId] || fallback
    },
    [data.images]
  )

  const setImage = useCallback((groupId, dataUrl) => {
    setData((prev) => ({
      ...prev,
      images: { ...prev.images, [groupId]: dataUrl },
    }))
  }, [])

  const clearImage = useCallback((groupId) => {
    setData((prev) => {
      const next = { ...prev.images }
      delete next[groupId]
      return { ...prev, images: next }
    })
  }, [])

  const resetAll = useCallback(() => {
    setData({ prices: {}, images: {} })
  }, [])

  const value = useMemo(
    () => ({
      adminMode,
      toggleAdminMode,
      getPrice,
      setPrice,
      getImage,
      setImage,
      clearImage,
      resetAll,
      storageError,
    }),
    [adminMode, toggleAdminMode, getPrice, setPrice, getImage, setImage, clearImage, resetAll, storageError]
  )

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin debe usarse dentro de <AdminProvider>')
  return ctx
}
