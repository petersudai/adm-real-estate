import Dropdown from './Dropdown.jsx'
import { AREAS, STATUSES } from '../data/properties.js'
import { PRICE_BANDS } from '../lib/filters.js'

const statusOptions = ['All', ...STATUSES]

export default function PropertyFilters({ status, area, band, count, onStatus, onArea, onBand, onClear }) {
  const active = status !== 'All' || area !== 'All' || band !== 'any'

  return (
    <div className="border-y border-noir/12 py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-noir/12 p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {statusOptions.map((s) => {
            const isActive = status === s
            return (
              <button
                key={s}
                type="button"
                onClick={() => onStatus(s)}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 font-sans text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? 'bg-noir text-canvas' : 'text-noir/60 hover:text-noir'
                }`}
              >
                {s === 'All' ? 'All properties' : s}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Dropdown
            label="Community"
            value={area}
            onChange={onArea}
            options={[{ value: 'All', label: 'All communities' }, ...AREAS.map((a) => ({ value: a, label: a }))]}
          />
          <Dropdown
            label="Price"
            value={band}
            onChange={onBand}
            align="right"
            options={PRICE_BANDS.map((b) => ({ value: b.id, label: b.label }))}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="font-sans text-sm text-stone-600">
          <span className="font-serif text-base text-noir">{count}</span>{' '}
          {count === 1 ? 'property' : 'properties'}
        </p>
        {active && (
          <button
            type="button"
            onClick={onClear}
            className="font-sans text-sm text-clay-deep underline-offset-4 transition-colors hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
