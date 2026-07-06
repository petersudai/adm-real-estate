// Resolve an image reference to a URL. Most imagery in this pitch concept
// is still Unsplash placeholder, resolved by photo ID through this
// function. Real ADM assets (e.g. team headshots) are referenced as a
// local path starting with "/" or a full URL, and are returned as-is.
const BASE = 'https://images.unsplash.com/photo-'

export function img(id, { w = 1600, h, q = 80 } = {}) {
  if (id.startsWith('/') || id.startsWith('http')) return id

  const params = new URLSearchParams({
    q: String(q),
    w: String(w),
    auto: 'format',
    fit: 'crop',
  })
  if (h) params.set('h', String(h))
  return `${BASE}${id}?${params.toString()}`
}
