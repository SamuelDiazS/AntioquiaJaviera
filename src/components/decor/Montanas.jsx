export default function Montanas({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 200 L160 120 L320 190 L520 90 L720 180 L940 100 L1160 190 L1300 130 L1440 200 L1440 320 L0 320 Z"
        fill="#2A4A34"
        opacity="0.55"
      />
      <path
        d="M0 260 L200 170 L380 240 L600 150 L840 250 L1060 160 L1260 240 L1440 190 L1440 320 L0 320 Z"
        fill="#1F3D2A"
      />
      {/* cafetales sugeridos como puntos en la loma frontal */}
      <g opacity="0.5" fill="#77803C">
        {Array.from({ length: 26 }).map((_, i) => (
          <circle key={i} cx={40 + i * 55} cy={230 + ((i % 3) * 12)} r="5" />
        ))}
      </g>
    </svg>
  )
}
