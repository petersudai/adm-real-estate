// ADM's real team, per their own website's "Meet Our Team" section and
// LinkedIn. Hasina's headshot is real (supplied directly). Angela's is
// still an Unsplash placeholder, chosen to at least match her actual
// likeness (a young Black woman in business attire): the only photo of
// her on LinkedIn carries an "open to work" frame that isn't appropriate
// for the site, so it's held back until ADM supplies a clean headshot.

export const team = [
  {
    id: 'hasina-khan',
    name: 'Hasina (Zeenat) Khan',
    role: 'Founder & CEO',
    focus: 'Real Estate Broker/Sales Agent, Residential/Commercial Leasing',
    linkedin: 'https://www.linkedin.com/in/hasinakhan/',
    email: 'info@admrealestates.com',
    note: 'Founded ADM in July 2022 after 14+ years in the industry, having led brokerage, property management and off-plan sales for developers including Danube Properties and Dubai Investments. Still personally involved in every deal.',
    image: '/team/Hasina.png',
  },
  {
    id: 'angela-liki',
    name: 'Angela Wambui Liki',
    role: 'Administration Representative',
    focus: 'Administrative Coordination · Client Support · Scheduling',
    linkedin: null,
    email: 'info@admrealestates.com',
    note: 'Keeps every viewing, valuation and handover running on time, so nothing falls through the cracks for clients.',
    image: '1611432579402-7037e3e2c1e4',
  },
]

export const getAgent = (id) => team.find((m) => m.id === id)
