import { Link } from 'react-router-dom'

// The ADM mark: three ascending forms (a quiet nod to the brokerage's original
// skyline icon), reduced to a single gold glyph beside a clean serif wordmark.
export default function Wordmark({ tone = 'noir', full = false, className = '' }) {
  const color = tone === 'light' ? 'text-canvas' : 'text-noir'
  return (
    <Link
      to="/"
      aria-label="ADM Real Estate, home"
      className={`group inline-flex items-center gap-3 ${color} ${className}`}
    >
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M2 24 L2 14 L7 8 L7 24 Z" fill="#B8934A" />
        <path d="M11.5 24 L11.5 4 L15 0 L18.5 4 L18.5 24 Z" fill="#DDBB7C" />
        <path d="M23 24 L23 12 L28 6 L28 24 Z" fill="#8C6B32" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.4rem] tracking-tight">ADM</span>
        {full && (
          <span className="mt-1 font-sans text-[0.6rem] font-semibold uppercase tracking-eyebrow opacity-70">
            Real Estate
          </span>
        )}
      </span>
    </Link>
  )
}
