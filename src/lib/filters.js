export const PRICE_BANDS = [
  { id: 'any', label: 'Any price', min: 0, max: Infinity },
  { id: 'under-1', label: 'Under 1M', min: 0, max: 1_000_000 },
  { id: '1-3', label: '1 – 3M', min: 1_000_000, max: 3_000_000 },
  { id: '3-5', label: '3 – 5M', min: 3_000_000, max: 5_000_000 },
  { id: '5-plus', label: '5M and above', min: 5_000_000, max: Infinity },
]

export function bandById(id) {
  return PRICE_BANDS.find((b) => b.id === id) || PRICE_BANDS[0]
}

export function applyFilters(list, { status = 'All', area = 'All', band = 'any' }) {
  const b = bandById(band)
  return list.filter((p) => {
    if (status !== 'All' && p.status !== status) return false
    if (area !== 'All' && p.area !== area) return false
    if (p.price < b.min || p.price >= b.max) return false
    return true
  })
}
