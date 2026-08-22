import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { groups } from '../data/groups.js'
import EditablePrice from './EditablePrice.jsx'
import DivisorFloral from './decor/DivisorFloral.jsx'
import useReveal from '../hooks/useReveal.js'

function flattenProducts() {
  const rows = []
  groups.forEach((group) => {
    group.products.forEach((p) => {
      rows.push({
        groupId: group.id,
        baseName: group.baseName,
        categoria: 'Producto',
        name: p.name,
        price: p.price,
        priceKey: `${group.id}::producto::${p.name}`,
      })
      p.options?.forEach((op) => {
        rows.push({
          groupId: group.id,
          baseName: group.baseName,
          categoria: 'Opción',
          name: `${op.name} (${p.name})`,
          price: op.price,
          priceKey: `${group.id}::producto::${p.name}::opcion::${op.name}`,
        })
      })
      p.toppings?.forEach((t) => {
        rows.push({
          groupId: group.id,
          baseName: group.baseName,
          categoria: 'Topping',
          name: `${t.name} (${p.name})`,
          price: t.price,
          priceKey: `${group.id}::producto::${p.name}::topping::${t.name}`,
        })
      })
    })
    group.toppings.forEach((t) => {
      rows.push({
        groupId: group.id,
        baseName: group.baseName,
        categoria: 'Topping',
        name: t.name,
        price: t.price,
        priceKey: `${group.id}::topping::${t.name}`,
      })
    })
  })
  return rows
}

const TODOS_LOS_PRODUCTOS = flattenProducts()

export default function ProductsSection() {
  const [query, setQuery] = useState('')
  const [grupo, setGrupo] = useState('todos')
  const titleRef = useReveal()

  const filtrados = useMemo(() => {
    return TODOS_LOS_PRODUCTOS.filter((row) => {
      const coincideGrupo = grupo === 'todos' || row.groupId === grupo
      const coincideTexto = row.name.toLowerCase().includes(query.trim().toLowerCase())
      return coincideGrupo && coincideTexto
    })
  }, [query, grupo])

  return (
    <section id="productos" className="bg-verde-oscuro textura-papel-oscura py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-8">
          <p className="font-script text-2xl text-dorado">Un mapa de sabores</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-crema mt-1">
            Productos de todas las bases
          </h2>
          <p className="text-crema/70 max-w-2xl mx-auto mt-3">
            Busca un producto o filtra por grupo. Los precios se muestran como
            "Precio por definir" hasta que los organizadores los configuren.
          </p>
        </div>

        <DivisorFloral className="mb-8" tono="#E3A63C" />

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-verde-oscuro/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar producto o topping…"
              className="w-full bg-crema rounded-full pl-10 pr-4 py-2.5 text-sm text-verde-oscuro placeholder:text-verde-oscuro/40 focus:outline-none"
            />
          </div>
          <select
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            className="bg-crema rounded-full px-4 py-2.5 text-sm text-verde-oscuro focus:outline-none"
          >
            <option value="todos">Todos los grupos</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.id} — {g.baseName}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-crema-2 borde-organico shadow-card overflow-hidden">
          {filtrados.length === 0 ? (
            <p className="text-center text-verde-oscuro/60 py-10">
              No se encontraron productos con ese criterio.
            </p>
          ) : (
            <ul className="divide-y divide-verde-oliva/15">
              {filtrados.map((row) => (
                <li
                  key={row.priceKey}
                  className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-verde-oscuro font-medium truncate">{row.name}</p>
                    <p className="text-xs text-verde-oscuro/55">
                      {row.groupId} · {row.baseName} · {row.categoria}
                    </p>
                  </div>
                  <EditablePrice priceKey={row.priceKey} basePrice={row.price} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
