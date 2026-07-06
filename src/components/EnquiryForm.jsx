import { useState } from 'react'

const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

// A compact, single-step enquiry form used on property detail pages. Kept
// short on purpose: fewer fields means more people actually finish it.
export default function EnquiryForm({ context, dark = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: context ? `I'm interested in ${context}.` : '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const fieldClass = dark ? 'field-on-dark' : 'field'
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (!emailValid(form.email)) next.email = 'A valid email, please.'
    if (form.phone.trim().length < 6) next.phone = 'A number we can reach you on.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div className={`rounded-xl border ${dark ? 'border-canvas/20 text-canvas' : 'border-noir/12 text-noir'} p-6 text-center`}>
        <p className="font-serif text-xl">Thank you, {form.name.split(' ')[0]}.</p>
        <p className={`mt-2 font-sans text-sm ${dark ? 'text-canvas/70' : 'text-stone-600'}`}>
          A member of the ADM team will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input placeholder="Full name" value={form.name} onChange={set('name')} className={fieldClass} />
          {errors.name && <p className="mt-1 font-sans text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input placeholder="Phone" type="tel" value={form.phone} onChange={set('phone')} className={fieldClass} />
          {errors.phone && <p className="mt-1 font-sans text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <input placeholder="Email address" type="email" value={form.email} onChange={set('email')} className={fieldClass} />
        {errors.email && <p className="mt-1 font-sans text-xs text-red-500">{errors.email}</p>}
      </div>
      <textarea rows={3} placeholder="Message" value={form.message} onChange={set('message')} className={`${fieldClass} resize-none`} />
      <button type="submit" className="btn-primary w-full">
        Send enquiry
      </button>
    </form>
  )
}
