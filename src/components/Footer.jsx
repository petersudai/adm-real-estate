import { useState } from 'react'
import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { brand, builder, communities } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer className="bg-noir text-canvas">
      <div className="shell py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="light" full />
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-canvas/60">
              A client-centric brokerage covering every corner of Dubai, bringing
              you the very best of comfortable homes and commercial space at
              desirable, well-connected addresses.
            </p>
            <form onSubmit={onSubmit} className="mt-8 max-w-sm">
              <p className="eyebrow text-canvas/40">Newsletter</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="field-on-dark"
                />
                <button type="submit" className="btn-primary shrink-0 !px-5 !py-3">
                  {sent ? 'Sent' : 'Join'}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="eyebrow text-canvas/40">Pages</p>
            <ul className="mt-5 space-y-3 font-sans text-sm">
              {[
                { to: '/properties', label: 'Properties' },
                { to: '/about', label: 'About' },
                { to: '/team', label: 'Team' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-canvas/70 transition-colors hover:text-canvas">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-canvas/40">Communities</p>
            <ul className="mt-5 space-y-3 font-sans text-sm text-canvas/70">
              {communities.slice(0, 5).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-canvas/40">Contact</p>
            <ul className="mt-5 space-y-2 font-sans text-sm text-canvas/70">
              {brand.addressLines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <a href={`mailto:${brand.email}`} className="link-cta group mt-5 text-canvas">
              <span>{brand.email}</span>
              <span className="link-cta__line">
                <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
              </span>
            </a>
            <div className="mt-2">
              <a href={`tel:${brand.phoneHref}`} className="font-sans text-sm text-canvas/70 hover:text-canvas">
                {brand.phone}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-canvas/60 hover:text-gold-bright">
                <IconInstagram />
              </a>
              <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-canvas/60 hover:text-gold-bright">
                <IconFacebook />
              </a>
              <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-canvas/60 hover:text-gold-bright">
                <IconLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-canvas/15 pt-8 font-sans text-xs text-canvas/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.legalName}. All rights reserved.</p>
          <p>
            {builder.note}{' '}
            <a
              href={`mailto:${builder.email}`}
              className="underline decoration-canvas/20 underline-offset-2 transition-colors hover:text-canvas/70"
            >
              {builder.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.23.41.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.23-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.23-.41-.56-.21-.96-.47-1.38-.89-.42-.42-.68-.82-.89-1.38-.17-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.23.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}
