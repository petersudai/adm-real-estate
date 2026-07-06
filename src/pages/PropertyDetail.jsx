import { Link, useParams } from 'react-router-dom'
import SmartImage from '../components/SmartImage.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { getProperty, properties } from '../data/properties.js'
import { getAgent } from '../data/team.js'
import { formatPriceFull, formatPrice, formatSqft } from '../lib/format.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getProperty(slug)

  useDocumentTitle(property ? `${property.name} | ADM Real Estate` : 'Not Found | ADM Real Estate')

  if (!property) return <NotFound />

  const rent = property.status === 'Rent'
  const agent = getAgent(property.agentId)
  const gallery = property.images.slice(1)
  const others = properties.filter((p) => p.slug !== property.slug && p.status === property.status).slice(0, 3)

  const specs = [
    { label: rent ? 'Annual rent' : 'Guide price', value: formatPriceFull(property.price, { rent }) },
    property.beds != null
      ? { label: 'Bedrooms', value: property.beds }
      : { label: 'Configuration', value: property.kind },
    { label: property.beds != null ? 'Bathrooms' : 'Washrooms', value: property.baths },
    { label: 'Internal area', value: formatSqft(property.sizeSqft) },
    property.floor != null ? { label: 'Floor', value: property.floor } : null,
    { label: 'Aspect', value: property.view },
  ].filter(Boolean)

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-noir text-canvas">
        <div className="absolute inset-0">
          <SmartImage id={property.images[0]} alt={property.name} width={2200} eager className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/25" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-noir/70 to-transparent" />
        </div>
        <div className="shell relative pb-14 pt-32">
          <Link to="/properties" className="inline-flex items-center gap-2 font-sans text-sm text-canvas/70 transition-colors hover:text-canvas">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M5 1 1 5l4 4M1 5h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All properties
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-canvas/30 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-eyebrow">
              {property.status}
            </span>
            <span className="eyebrow text-canvas/60">{property.area}</span>
          </div>

          <h1 className="mt-5 max-w-4xl text-display-lg text-balance">{property.name}</h1>
          <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-canvas/75">{property.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
            <p className="font-serif text-3xl">{formatPrice(property.price, { rent })}</p>
            <a href="#enquire" className="btn-primary-on-dark">
              Enquire about this property
            </a>
          </div>
        </div>
      </section>

      {/* ── Spec strip ───────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="shell grid grid-cols-2 gap-y-8 border-b border-noir/12 py-10 sm:grid-cols-3 lg:grid-cols-6">
          {specs.map((s) => (
            <div key={s.label} className="px-1">
              <p className="eyebrow text-stone-500">{s.label}</p>
              <p className="mt-2 font-serif text-xl text-noir">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Description, amenities, sticky enquiry card ───────── */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-clay-deep">The property</p>
              <div className="mt-6 space-y-6 font-serif text-2xl leading-snug text-noir/90">
                {property.description.map((para, i) => (
                  <p key={i} className="text-pretty">{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <p className="eyebrow text-clay-deep">Curated amenities</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-px sm:grid-cols-2">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-4 border-b border-noir/10 py-4 font-sans text-base text-noir/80">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div id="enquire" className="scroll-mt-28 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-noir/12 bg-canvas-deep p-7">
                <p className="eyebrow text-stone-500">{rent ? 'Annual rent' : 'Guide price'}</p>
                <p className="mt-2 font-serif text-3xl text-noir">{formatPriceFull(property.price, { rent })}</p>
                <p className="mt-1 font-sans text-sm text-stone-600">{property.availability}</p>

                <div className="my-7 h-px bg-noir/10" />

                {agent && (
                  <div className="mb-7 flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full">
                      <SmartImage id={agent.image} alt={agent.name} width={140} height={140} duotone className="h-full w-full" />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-noir">{agent.name}</p>
                      <p className="font-sans text-sm text-stone-600">{agent.role}</p>
                    </div>
                  </div>
                )}

                <EnquiryForm context={property.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      {gallery.length > 0 && (
        <section className="bg-canvas-deep py-20 lg:py-28">
          <div className="shell">
            <Reveal>
              <p className="eyebrow text-clay-deep">The gallery</p>
              <h2 className="mt-4 text-display-sm">A closer look.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
              {gallery.map((id, i) => {
                const wide = i === 0
                return (
                  <Reveal key={`${id}-${i}`} delay={(i % 2) * 0.08} amount={0.15} className={wide ? 'col-span-2' : 'col-span-1'}>
                    <div className={`overflow-hidden rounded-sm ${wide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                      <SmartImage id={id} alt={`${property.name}, view ${i + 2}`} width={wide ? 1800 : 900} className="h-full w-full" />
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Location context ─────────────────────────────────── */}
      <section className="bg-clay-deep py-20 text-canvas lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-canvas/60">Within reach</p>
            <h2 className="mt-4 text-display-sm">
              Measured from
              <br />
              the door.
            </h2>
            <p className="mt-6 max-w-xs font-sans text-base leading-relaxed text-canvas/70">
              Times are approximate and assume an ordinary day, not an empty road.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {property.location.map((l, i) => (
                <Reveal as="li" key={l.place} delay={i * 0.06}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-canvas/20 py-6">
                    <span className="font-sans text-lg text-canvas/85">{l.place}</span>
                    <span className="font-serif text-2xl">{l.time}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── More properties ───────────────────────────────────── */}
      {others.length > 0 && (
        <section className="bg-canvas py-20 lg:py-28">
          <div className="shell">
            <Reveal className="flex items-end justify-between">
              <h2 className="text-display-sm">Similar properties.</h2>
              <Link to="/properties" className="link-cta group hidden text-clay-deep sm:inline-flex">
                <span>All properties</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </Link>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
