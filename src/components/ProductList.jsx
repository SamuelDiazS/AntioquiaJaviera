import EditablePrice from './EditablePrice.jsx'

const ICONOS_POR_DEFECTO = ['🌿', '🍯', '🍫', '☕', '🍓', '🥭', '🌽']

function iconoPara(index) {
  return ICONOS_POR_DEFECTO[index % ICONOS_POR_DEFECTO.length]
}

export function ProductLine({ groupId, path, name, price, icon, size = 'md' }) {
  const key = `${groupId}::${path.join('::')}`
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className="flex items-center gap-2 text-verde-oscuro/90">
        {icon && <span aria-hidden="true">{icon}</span>}
        <span className={size === 'sm' ? 'text-sm' : 'text-sm sm:text-base'}>{name}</span>
      </span>
      <EditablePrice priceKey={key} basePrice={price} size={size} />
    </div>
  )
}

export default function ProductList({ group, compact = false }) {
  const hasToppingsGlobal = group.toppings && group.toppings.length > 0

  return (
    <div className="space-y-4">
      <details open className="group/details">
        <summary className="cursor-pointer list-none flex items-center justify-between font-display text-verde-oscuro font-semibold text-sm sm:text-base uppercase tracking-wide mb-1">
          Productos
          <span className="text-verde-oliva group-open/details:rotate-180 transition-transform text-xs">▾</span>
        </summary>
        <ul className="divide-y divide-verde-oliva/10">
          {group.products.map((p, i) => (
            <li key={p.name}>
              <ProductLine
                groupId={group.id}
                path={['producto', p.name]}
                name={p.name}
                price={p.price}
                icon={iconoPara(i)}
              />
              {p.options && p.options.length > 0 && (
                <ul className="pl-6 pb-1.5">
                  {p.options.map((op) => (
                    <ProductLine
                      key={op.name}
                      groupId={group.id}
                      path={['producto', p.name, 'opcion', op.name]}
                      name={op.name}
                      price={op.price}
                      size="sm"
                    />
                  ))}
                </ul>
              )}
              {p.toppings && p.toppings.length > 0 && (
                <div className="pl-6 pb-2">
                  <p className="text-[11px] uppercase tracking-wide text-verde-oliva/80 font-semibold mt-1 mb-0.5">
                    Toppings de {p.name.toLowerCase()}
                  </p>
                  <ul>
                    {p.toppings.map((t) => (
                      <ProductLine
                        key={t.name}
                        groupId={group.id}
                        path={['producto', p.name, 'topping', t.name]}
                        name={t.name}
                        price={t.price}
                        size="sm"
                      />
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </details>

      {hasToppingsGlobal && (
        <details open={!compact} className="group/details">
          <summary className="cursor-pointer list-none flex items-center justify-between font-display text-verde-oscuro font-semibold text-sm sm:text-base uppercase tracking-wide mb-1">
            Toppings
            <span className="text-verde-oliva group-open/details:rotate-180 transition-transform text-xs">▾</span>
          </summary>
          <ul className="divide-y divide-verde-oliva/10">
            {group.toppings.map((t) => (
              <li key={t.name}>
                <ProductLine
                  groupId={group.id}
                  path={['topping', t.name]}
                  name={t.name}
                  price={t.price}
                />
              </li>
            ))}
          </ul>
        </details>
      )}

      {group.pendingConfig && group.pendingConfig.length > 0 && (
        <div className="bg-dorado/10 border border-dorado/40 rounded-organico-2 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-dorado-2 mb-1.5">
            Por definir próximamente
          </p>
          <ul className="text-sm text-verde-oscuro/80 list-disc list-inside space-y-0.5">
            {group.pendingConfig.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
