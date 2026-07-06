import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { AREAS, TYPES } from '../data/properties.js'
import { brand } from '../data/site.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const INQUIRY_TYPES = ['Home Valuation', 'Buy', 'Rent', 'Off Plan', 'Commercial', 'General Enquiry']
const PROFILES = ['Buyer', 'Seller', 'Tenant', 'Landlord', 'Investor']

const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const initialForm = {
  inquiryType: '',
  profile: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  area: '',
  propertyType: '',
  maxPrice: '',
  minSize: '',
  beds: '',
  baths: '',
  message: '',
  consent: false,
}

export default function Contact() {
  useDocumentTitle('Contact | ADM Real Estate')
  const [searchParams] = useSearchParams()
  const wantsValuation = searchParams.get('type') === 'valuation'

  const [form, setForm] = useState({
    ...initialForm,
    inquiryType: wantsValuation ? 'Home Valuation' : '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.inquiryType) next.inquiryType = 'Please choose an inquiry type.'
    if (!form.firstName.trim()) next.firstName = 'Required.'
    if (!form.lastName.trim()) next.lastName = 'Required.'
    if (!emailValid(form.email)) next.email = 'A valid email, please.'
    if (form.phone.trim().length < 6) next.phone = 'A number we can reach you on.'
    if (!form.consent) next.consent = 'Please accept to proceed.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact ADM"
        title={wantsValuation ? 'Get a free home valuation.' : "Let's talk about your next move."}
        intro={
          wantsValuation
            ? 'Tell us a little about your property and one of our brokers will come back with an honest, market-informed valuation. No obligation.'
            : 'Buying, selling, renting or leasing commercial space, tell us what you need and the right person on our team will reach out.'
        }
      />

      <section className="shell pb-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ── Contact details ─────────────────────────────── */}
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-noir/12 bg-noir p-8 text-canvas">
                <p className="eyebrow text-gold-bright">Speak to us directly</p>
                <a href={`tel:${brand.phoneHref}`} className="mt-4 block font-serif text-3xl">
                  {brand.phone}
                </a>
                <a href={`mailto:${brand.email}`} className="mt-2 block font-sans text-sm text-canvas/70 hover:text-canvas">
                  {brand.email}
                </a>

                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7 w-full"
                >
                  Chat on WhatsApp
                </a>

                <div className="my-7 h-px bg-canvas/15" />

                <p className="eyebrow text-canvas/50">Our office</p>
                <address className="mt-3 space-y-1 font-sans text-sm not-italic text-canvas/70">
                  {brand.addressLines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </address>

                <div className="my-7 h-px bg-canvas/15" />

                <p className="eyebrow text-canvas/50">Office hours</p>
                <p className="mt-3 font-sans text-sm text-canvas/70">Sunday – Thursday, 9:00 – 18:00</p>
                <p className="font-sans text-sm text-canvas/70">Saturday, 10:00 – 15:00</p>
              </div>
            </Reveal>
          </div>

          {/* ── Inquiry form ────────────────────────────────── */}
          <div className="lg:col-span-8">
            <Reveal>
              {sent ? (
                <div className="rounded-2xl border border-noir/12 bg-canvas-deep p-12 text-center">
                  <p className="font-serif text-3xl text-noir">Thank you, {form.firstName}.</p>
                  <p className="mx-auto mt-3 max-w-md font-sans text-base text-stone-600">
                    We've received your enquiry and a member of the ADM team will be in
                    touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="rounded-2xl border border-noir/12 bg-canvas-deep p-7 sm:p-10">
                  <p className="eyebrow text-clay-deep">Inquiry type</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, inquiryType: t }))}
                        className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 ${
                          form.inquiryType === t
                            ? 'border-noir bg-noir text-canvas'
                            : 'border-noir/20 text-noir/70 hover:border-noir/40'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.inquiryType && <p className="mt-2 font-sans text-xs text-red-500">{errors.inquiryType}</p>}

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Select label="I am a…" value={form.profile} onChange={set('profile')} options={PROFILES} />
                    <Select label="Preferred community" value={form.area} onChange={set('area')} options={AREAS} />

                    <Field label="First name" value={form.firstName} onChange={set('firstName')} error={errors.firstName} />
                    <Field label="Last name" value={form.lastName} onChange={set('lastName')} error={errors.lastName} />

                    <Field label="Email address" type="email" value={form.email} onChange={set('email')} error={errors.email} />
                    <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} />

                    <Select label="Property type" value={form.propertyType} onChange={set('propertyType')} options={TYPES} />
                    <Field label="Max price (AED)" type="number" value={form.maxPrice} onChange={set('maxPrice')} />

                    <Field label="Min size (sqft)" type="number" value={form.minSize} onChange={set('minSize')} />
                    <div className="grid grid-cols-2 gap-5">
                      <Field label="Beds" type="number" value={form.beds} onChange={set('beds')} />
                      <Field label="Baths" type="number" value={form.baths} onChange={set('baths')} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-1.5 block font-sans text-sm text-stone-600">
                      Anything we should know <span className="text-stone-400">(optional)</span>
                    </label>
                    <textarea rows={4} value={form.message} onChange={set('message')} className="field resize-none" />
                  </div>

                  <label className="mt-6 flex items-start gap-3 font-sans text-sm text-stone-600">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={set('consent')}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-noir/30 accent-gold"
                    />
                    <span>
                      By proceeding, you agree to our terms and consent to ADM Real Estate
                      contacting you about this enquiry.
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1.5 font-sans text-xs text-red-500">{errors.consent}</p>}

                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                    Submit enquiry
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, value, onChange, error, type = 'text' }) {
  return (
    <div>
      <label className="mb-1.5 block font-sans text-sm text-stone-600">{label}</label>
      <input type={type} value={value} onChange={onChange} className={`field ${error ? '!border-red-400' : ''}`} />
      {error && <p className="mt-1.5 font-sans text-xs text-red-500">{error}</p>}
    </div>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-1.5 block font-sans text-sm text-stone-600">{label}</label>
      <select value={value} onChange={onChange} className="field appearance-none bg-canvas">
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
