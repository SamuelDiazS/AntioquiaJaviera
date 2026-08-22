export default function OrnamentoEsquina({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4 C 40 10, 60 30, 66 66 C 30 60, 10 40, 4 4 Z"
        fill="#E3A63C"
        opacity="0.28"
      />
      <path
        d="M4 4 C 60 14, 100 40, 110 96"
        fill="none"
        stroke="#77803C"
        strokeWidth="2.5"
        opacity="0.5"
      />
      <circle cx="30" cy="30" r="6" fill="#B23A2E" opacity="0.65" />
      <circle cx="60" cy="55" r="4" fill="#F6F0DC" opacity="0.85" />
      <circle cx="90" cy="80" r="5" fill="#E3A63C" opacity="0.7" />
    </svg>
  )
}
