import { useEffect, useState } from 'react'
import { Menu, X, Flower2 } from 'lucide-react'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#bases', label: 'Bases / Grupos' },
  { href: '#productos', label: 'Productos' },
  { href: '#rotaciones', label: 'Rotaciones' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#informacion', label: 'Información' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-verde-oscuro/95 backdrop-blur shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-crema text-lg sm:text-xl font-semibold tracking-wide"
          onClick={() => setOpen(false)}
        >
          <Flower2 className="w-5 h-5 text-dorado" aria-hidden="true" />
          <span className="hidden sm:inline">Día de la Antioqueñidad</span>
          <span className="sm:hidden">Antioqueñidad</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-crema/90 hover:text-verde-oscuro hover:bg-dorado transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-crema p-2 -mr-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-[60px] right-0 bottom-0 w-[min(22rem,88vw)] bg-verde-oscuro textura-papel-oscura border-l border-crema/10 shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-crema font-display text-2xl py-3 border-b border-crema/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="px-6 font-script text-2xl text-dorado">
          "Antioquia te abraza y contigo florece"
        </p>
      </div>
    </header>
  )
}
