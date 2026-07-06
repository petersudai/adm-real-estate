import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SmartImage from '../components/SmartImage.jsx'
import Reveal from '../components/Reveal.jsx'
import { stats, missionParagraphs, whyChoose, services, founder, developerPartners, brand } from '../data/site.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

export default function About() {
  useDocumentTitle('About | ADM Real Estate')
  return (
    <>
      <PageHeader
        eyebrow="About ADM Real Estate"
        title="A client-centric approach to Dubai property."
        intro={`Founded in ${brand.founded}, ADM Real Estate L.L.C. provides a committed and efficient brokerage service through a team of well-qualified, multi-lingual brokers covering every corner of the city.`}
      />

      <section className="shell grid items-center gap-12 pb-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="space-y-6 font-serif text-2xl leading-snug text-noir/90">
            {missionParagraphs.map((p, i) => (
              <p key={i} className="text-pretty">{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <SmartImage id="1600596542815-ffad4c1539a9" alt="A property represented by ADM" width={1100} className="h-full w-full" />
          </div>
        </Reveal>
      </section>

      {/* ── Founder's story ────────────────────────────────────── */}
      <section className="bg-canvas-deep py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <SmartImage id={founder.image} alt={founder.name} width={1000} duotone className="h-full w-full" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow text-clay-deep">A word from our founder</p>
              <h2 className="mt-4 max-w-xl text-display-md text-balance">{founder.name}</h2>
              <p className="mt-2 font-sans text-sm font-semibold text-stone-600">{founder.credentials}</p>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 space-y-5 font-serif text-xl leading-snug text-noir/90">
              {founder.bio.map((p, i) => (
                <p key={i} className="text-pretty">{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.14} className="mt-8 flex flex-wrap items-center gap-4">
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="link-cta group text-clay-deep">
                <span>Connect on LinkedIn</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-noir py-20 text-canvas lg:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-gold-bright">The record, briefly</p>
          </Reveal>
          <dl className="mt-10">
            {stats.map((s, i) => (
              <Reveal as="div" key={s.label} delay={i * 0.06}>
                <div className="grid grid-cols-1 items-baseline gap-2 border-t border-canvas/15 py-7 sm:grid-cols-12">
                  <dd className="font-serif text-5xl leading-none sm:col-span-4 lg:text-6xl">{s.value}</dd>
                  <dt className="font-sans text-base font-medium sm:col-span-3">{s.label}</dt>
                  <p className="font-sans text-sm text-canvas/55 sm:col-span-5">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className="bg-canvas py-24 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-clay-deep">What we do</p>
            <h2 className="mt-4 max-w-2xl text-display-md text-balance">A full-service brokerage.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border-t border-noir/15 pt-6">
                <h3 className="font-serif text-2xl text-noir">{s.title}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-stone-600">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border border-noir/12 bg-canvas-deep px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="eyebrow text-clay-deep">Off-plan & developer relationships</p>
              <h3 className="mt-3 max-w-md font-serif text-2xl text-noir text-balance">
                Off-plan launches from developers we know well.
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {developerPartners.map((d) => (
                <span key={d} className="font-serif text-xl text-stone-600">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas-deep py-24 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-clay-deep">Why choose ADM</p>
            <h2 className="mt-4 max-w-2xl text-display-md text-balance">Three things every client can count on.</h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {whyChoose.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t border-noir/15 pt-6">
                  <p className="font-serif text-3xl text-clay-deep">{p.n}</p>
                  <h3 className="mt-5 font-serif text-2xl text-noir">{p.title}</h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-stone-600">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay-deep py-24 text-canvas lg:py-28">
        <div className="shell text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-display-md text-balance">
              Whichever address you have in mind, we already know the neighbourhood.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/properties" className="btn-primary-on-dark">
                View properties
              </Link>
              <Link to="/team" className="link-cta group text-canvas">
                <span>Meet the team</span>
                <span className="link-cta__line">
                  <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
