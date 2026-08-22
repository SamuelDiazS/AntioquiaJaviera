// Silueta ilustrada de una silleta antioqueña: marco de madera con arco de flores.
// Se usa como marco decorativo alrededor de los espacios de imagen de cada grupo,
// y en tamaño grande en el hero como elemento de firma visual del sitio.

const FLOR_COLORES = ['#B23A2E', '#E3A63C', '#D97D6E', '#F6F0DC', '#77803C']

function flores(cx, cy, r, seed) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={FLOR_COLORES[seed % FLOR_COLORES.length]} opacity="0.92" />
      <circle cx={cx - r * 0.9} cy={cy} r={r * 0.7} fill={FLOR_COLORES[(seed + 1) % FLOR_COLORES.length]} opacity="0.9" />
      <circle cx={cx + r * 0.9} cy={cy} r={r * 0.7} fill={FLOR_COLORES[(seed + 2) % FLOR_COLORES.length]} opacity="0.9" />
      <circle cx={cx} cy={cy - r * 0.85} r={r * 0.65} fill={FLOR_COLORES[(seed + 3) % FLOR_COLORES.length]} opacity="0.85" />
      <circle cx={cx} cy={cy + r * 0.55} r={r * 0.35} fill="#1F3D2A" opacity="0.8" />
    </g>
  )
}

export default function SilletaSVG({ className = '', arcoFlores = true }) {
  const puntos = [
    { cx: 40, cy: 46, r: 12 },
    { cx: 78, cy: 30, r: 13 },
    { cx: 118, cy: 22, r: 14 },
    { cx: 160, cy: 30, r: 13 },
    { cx: 198, cy: 46, r: 12 },
  ]
  return (
    <svg
      viewBox="0 0 240 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {arcoFlores && (
        <g>
          {puntos.map((p, i) => (
            <g key={i}>{flores(p.cx, p.cy, p.r, i)}</g>
          ))}
        </g>
      )}
      {/* Marco de madera */}
      <path
        d="M60 62 L180 62 L192 200 L48 200 Z"
        fill="#EFE6C9"
        stroke="#8A5A2B"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Listones del marco */}
      <path d="M60 62 L48 200" stroke="#8A5A2B" strokeWidth="4" />
      <path d="M180 62 L192 200" stroke="#8A5A2B" strokeWidth="4" />
      <path d="M70 100 L178 100" stroke="#8A5A2B" strokeWidth="3" opacity="0.6" />
      <path d="M66 150 L184 150" stroke="#8A5A2B" strokeWidth="3" opacity="0.6" />
      {/* Patas */}
      <path d="M58 200 L48 216" stroke="#6B4322" strokeWidth="5" strokeLinecap="round" />
      <path d="M182 200 L192 216" stroke="#6B4322" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
