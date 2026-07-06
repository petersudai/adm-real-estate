import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmartImage from '../components/SmartImage.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { properties, featuredProperty } from '../data/properties.js'
import { stats, whyChoose, services, founder, developerPartners, brand } from '../data/site.js'
import { testimonials } from '../data/testimonials.js'
import { formatPrice, formatSqft } from '../lib/format.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const loadContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const loadItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  useDocumentTitle('ADM Real Estate | Client-Centric, Result-Driven Dubai Property')
  const flagship = featuredProperty
  const collection = properties.filter((p) => p.status === 'Buy').slice(0, 6)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-noir text-canvas">
        <div className="absolute inset-0">
          <SmartImage id={flagship.images[0]} alt={flagship.name} width={2200} eager className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/75 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-noir/70 to-transparent" />
        </div>

        <motion.div variants={loadContainer} initial="hidden" animate="show" className="shell relative pb-12 pt-32">
          <motion.p variants={loadItem} className="eyebrow text-gold-bright">
            {brand.line} · Est. {brand.founded}
          </motion.p>
          <motion.h1 variants={loadItem} className="mt-7 max-w-4xl text-display-xl text-balance">
            Comfy homes and commercial space,
            <br />
            <span className="italic text-canvas/90">in every corner of Dubai.</span>
          </motion.h1>
          <motion.p variants={loadItem} className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-canvas/75">
            A committed, efficient brokerage service from a team of well-qualified,
            multi-lingual brokers, covering every locality of the town.
          </motion.p>

          <motion.div variants={loadItem} className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact?type=valuation" className="btn-primary-on-dark">
              Get a Free Home Valuation
            </Link>
            <Link to="/properties" className="btn-ghost-on-dark">
              Browse properties
            </Link>
          </motion.div>

          <motion.div variants={loadItem} className="mt-14 border-t border-canvas/20 pt-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
                <div>
                  <p className="eyebrow text-canvas/50">Featured property</p>
                  <p className="mt-2 font-serif text-2xl">{flagship.name}</p>
                </div>
                <div className="flex gap-x-10">
                  <Spec label="Guide" value={formatPrice(flagship.price)} />
                  <Spec label="Bedrooms" value={flagship.beds} />
                  <Spec label="Internal" value={formatSqft(flagship.sizeSqft)} />
                </div>
              </div>
              <Link to={`/properties/${flagship.slug}`} className="link-cta group shrink-0 text-canvas">
                <span>View property</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="shell relative pb-8">
          <span className="font-sans text-xs uppercase tracking-eyebrow text-canvas/40">Scroll</span>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────── */}
      <section className="bg-clay-deep text-canvas">
        <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-4 lg:py-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-canvas/25 pl-5">
                <p className="font-serif text-5xl leading-none lg:text-6xl">{s.value}</p>
                <p className="mt-4 font-sans text-sm font-semibold tracking-wide">{s.label}</p>
                <p className="mt-1 font-sans text-sm text-canvas/60">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-clay-deep">What we do</p>
              <h2 className="mt-4 max-w-xl text-display-md text-balance">
                A full-service brokerage.
              </h2>
            </div>
            <p className="max-w-sm font-sans text-base leading-relaxed text-stone-600">
              From a single sale to managing a growing portfolio, ADM stays involved
              well after the deal closes.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} amount={0.2}>
                <div className="border-t border-noir/15 pt-6">
                  <h3 className="font-serif text-2xl text-noir">{s.title}</h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-stone-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available properties ──────────────────────────────── */}
      <section className="bg-canvas-deep py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-clay-deep">On the market</p>
              <h2 className="mt-4 max-w-xl text-display-md text-balance">Available now, across the city.</h2>
            </div>
            <p className="max-w-sm font-sans text-base leading-relaxed text-stone-600">
              A snapshot of what ADM currently represents: ready homes, off-plan
              launches and commercial space. Filter the full list by community,
              status and price.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {collection.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} amount={0.15}>
                <PropertyCard property={p} eager={i < 3} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex justify-center">
            <Link to="/properties" className="link-cta group text-clay-deep">
              <span>View all properties</span>
              <span className="link-cta__line">
                <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Founder spotlight ─────────────────────────────────── */}
      <section className="bg-noir py-24 text-canvas lg:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <SmartImage id={founder.image} alt={founder.name} width={1100} duotone className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="eyebrow text-gold-bright">Founder & CEO</p>
            <h2 className="mt-4 max-w-lg text-display-md text-balance">
              Led personally by a {founder.yearsExperience}-year Dubai broker.
            </h2>
            <blockquote className="mt-6 max-w-xl font-serif text-2xl leading-snug text-canvas/90 text-pretty">
              “{founder.bio[3]}”
            </blockquote>
            <p className="mt-6 font-sans text-sm text-canvas/60">
              {founder.name} · {founder.credentials}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/team" className="btn-primary-on-dark">
                Meet the founder
              </Link>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta group text-canvas"
              >
                <span>View LinkedIn</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Developer partnerships ─────────────────────────────── */}
      <section className="bg-clay-deep py-14 text-canvas">
        <div className="shell flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-canvas/60">Off-plan & developer relationships</p>
            <h3 className="mt-3 max-w-md font-serif text-2xl text-balance md:text-3xl">
              Off-plan launches from developers we know well.
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {developerPartners.map((d) => (
              <span key={d} className="font-serif text-xl text-canvas/80 sm:text-2xl">
                {d}
              </span>
            ))}
          </div>
          <Link to="/properties?status=Off Plan" className="btn-primary-on-dark shrink-0">
            View off-plan
          </Link>
        </div>
      </section>

      {/* ── Why ADM ──────────────────────────────────────────── */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-clay-deep">Why ADM is the perfect choice</p>
            <h2 className="mt-4 max-w-2xl text-display-md text-balance">
              Deep-rooted Dubai expertise, a genuinely personal service.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-noir/12 bg-noir/12 md:grid-cols-3">
            {whyChoose.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="bg-canvas">
                <div className="h-full p-8">
                  <p className="font-serif text-4xl text-clay-deep">{s.n}</p>
                  <h3 className="mt-6 font-serif text-2xl text-noir">{s.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-stone-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-canvas-deep py-24 lg:py-32">
        <div className="shell">
          <Reveal className="text-center">
            <p className="eyebrow text-clay-deep">In their words</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-display-md text-balance">
              Clients who found their address through ADM.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} amount={0.2}>
                <figure className="h-full rounded-2xl border border-noir/10 bg-canvas p-8">
                  <span className="font-serif text-5xl leading-none text-gold">“</span>
                  <blockquote className="mt-2 font-serif text-lg leading-snug text-noir/90 text-pretty">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 font-sans text-sm font-semibold text-stone-600">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="bg-noir py-24 text-canvas lg:py-28">
        <div className="shell text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-display-md text-balance">
              Ready to find your next address, or sell the one you have?
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=valuation" className="btn-primary">
                Get a Free Home Valuation
              </Link>
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta group text-canvas"
              >
                <span>Chat with us on WhatsApp</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Spec({ label, value }) {
  return (
    <div>
      <p className="eyebrow text-canvas/50">{label}</p>
      <p className="mt-2 font-serif text-2xl">{value}</p>
    </div>
  )
}
