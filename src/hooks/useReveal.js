import { useEffect, useRef } from 'react'

/**
 * Añade la clase "reveal-visible" a un elemento cuando entra en el viewport.
 * Uso: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
