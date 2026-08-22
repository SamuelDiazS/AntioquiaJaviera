export const TEXTO_PRECIO_PENDIENTE = 'Precio por definir'

/**
 * Formatea un precio en pesos colombianos.
 * Si el precio es 0, undefined o null, retorna el texto "Precio por definir".
 */
export function formatPrice(price) {
  if (!price || Number(price) <= 0) {
    return TEXTO_PRECIO_PENDIENTE
  }
  try {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(Number(price))
  } catch (err) {
    return `$${Number(price).toLocaleString('es-CO')}`
  }
}

export function isPricePending(price) {
  return !price || Number(price) <= 0
}
