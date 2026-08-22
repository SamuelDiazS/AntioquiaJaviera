export default function DivisorFloral({ className = '', tono = '#77803C' }) {
  return (
    <div className={`w-full flex items-center justify-center py-2 ${className}`} aria-hidden="true">
      <svg width="220" height="28" viewBox="0 0 220 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 14 Q 27.5 0, 55 14 T 110 14 T 165 14 T 220 14"
          fill="none"
          stroke={tono}
          strokeWidth="2"
          opacity="0.55"
        />
        <circle cx="55" cy="14" r="4" fill="#B23A2E" opacity="0.8" />
        <circle cx="110" cy="14" r="5" fill="#E3A63C" opacity="0.85" />
        <circle cx="165" cy="14" r="4" fill="#B23A2E" opacity="0.8" />
      </svg>
    </div>
  )
}
