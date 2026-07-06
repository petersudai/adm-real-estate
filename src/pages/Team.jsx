import PageHeader from '../components/PageHeader.jsx'
import SmartImage from '../components/SmartImage.jsx'
import Reveal from '../components/Reveal.jsx'
import { team } from '../data/team.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

export default function Team() {
  useDocumentTitle('Team | ADM Real Estate')
  return (
    <>
      <PageHeader
        eyebrow="The people"
        title="A small team, working closely with every client."
        intro="Two people, each responsible for what they know best. You will deal directly with one of us throughout, not a call centre."
      />

      <section className="shell pb-28">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 0.08} amount={0.2}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-noir">
                  <SmartImage
                    id={m.image}
                    alt={m.name}
                    width={900}
                    height={1125}
                    duotone
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between border-b border-noir/12 pb-3">
                  <h2 className="font-serif text-2xl text-noir">{m.name}</h2>
                </div>
                <p className="mt-3 font-sans text-sm font-semibold text-clay-deep">{m.role}</p>
                <p className="mt-1 font-sans text-sm text-stone-600">{m.focus}</p>
                <p className="mt-4 font-serif text-lg leading-snug text-noir/80 text-pretty">{m.note}</p>
                <div className="mt-5 flex items-center gap-5">
                  <a href={`mailto:${m.email}`} className="link-cta group text-clay-deep">
                    <span>{m.email}</span>
                    <span className="link-cta__line">
                      <span className="absolute inset-0 -translate-x-full bg-current transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
                    </span>
                  </a>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-stone-500 underline-offset-4 hover:text-noir hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
