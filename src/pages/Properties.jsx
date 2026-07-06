import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import PropertyFilters from '../components/PropertyFilters.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { properties, STATUSES } from '../data/properties.js'
import { applyFilters } from '../lib/filters.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

export default function Properties() {
  useDocumentTitle('Properties | ADM Real Estate')
  const [searchParams] = useSearchParams()
  const initialStatus = STATUSES.includes(searchParams.get('status')) ? searchParams.get('status') : 'All'

  const [status, setStatus] = useState(initialStatus)
  const [area, setArea] = useState('All')
  const [band, setBand] = useState('any')

  const results = useMemo(() => applyFilters(properties, { status, area, band }), [status, area, band])

  const clear = () => {
    setStatus('All')
    setArea('All')
    setBand('any')
  }

  return (
    <>
      <PageHeader
        eyebrow="Properties"
        title="Every home and unit ADM currently represents."
        intro="Buy, rent, off-plan or commercial: filter by what matters to you, across every community we cover. Reach out on any listing and a broker will arrange a viewing directly."
      />

      <section className="shell pb-28">
        <PropertyFilters
          status={status}
          area={area}
          band={band}
          count={results.length}
          onStatus={setStatus}
          onArea={setArea}
          onBand={setBand}
          onClear={clear}
        />

        {results.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06} amount={0.15}>
                <PropertyCard property={p} eager={i < 3} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-20 border-t border-noir/12 py-24 text-center">
            <p className="font-serif text-3xl text-noir">Nothing matches, for now.</p>
            <p className="mx-auto mt-4 max-w-md font-sans text-base text-stone-600">
              We place properties before they are widely listed. Tell us what you are
              after and we will look ahead of the market on your behalf.
            </p>
            <button type="button" onClick={clear} className="btn-primary mt-8">
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
