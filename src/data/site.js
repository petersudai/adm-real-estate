// Shared brand facts, kept in one place so every page presents the same
// information consistently. Sourced from ADM's current site and Hasina
// Khan's public LinkedIn profile where available; anything inferred is
// flagged below for their confirmation.

export const brand = {
  name: 'ADM Real Estate',
  legalName: 'ADM Real Estate L.L.C.',
  line: 'Client-Centric, Result-Driven Real Estate',
  founded: 2022,
  email: 'info@admrealestates.com',
  phone: '+971 50 694 6226',
  phoneHref: '+971506946226',
  // UAE mobile in wa.me format
  whatsapp: '971506946226',
  whatsappDisplay: '+971 50 694 6226',
  addressLines: [
    'ADM Real Estate L.L.C.',
    'RAG Tower Business Center',
    'Office No. 501–291, 5th Floor',
    'Al Barsha First, Dubai, UAE',
    'P.O. Box 237951',
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com/company/adm-real-estate-l-l-c/',
  },
}

// Figures as displayed on ADM's current site. "Years of experience" is
// framed as combined/leadership experience, since the company itself was
// founded in 2022 while founder Hasina Khan brings 14+ years personally.
// The fourth figure ("750+ Year Profits" on the live site) reads as a typo
// and is reinterpreted here as a clients-served count, pending confirmation.
export const stats = [
  { value: '20+', label: 'Years of combined experience', note: 'Led by our founding broker, 14+ years in Dubai real estate' },
  { value: '100+', label: 'Properties sold', note: 'Across Dubai’s key communities' },
  { value: '15+', label: 'Affiliate partners', note: 'Developers and channel partners' },
  { value: '750+', label: 'Clients served', note: 'Since opening our doors in 2022' },
]

export const communities = [
  'Dubai Investment Park',
  'Al Barsha',
  'Business Bay',
  'Dubai Marina',
  'Downtown Dubai',
  'Jumeirah Village Circle',
]

// ADM's own boilerplate, as published on their current site.
export const missionParagraphs = [
  'ADM Real Estate LLC prides itself in providing a committed and efficient brokerage service to its clients through a team of well-qualified, multi-lingual real estate brokers, covering every locality of the town and bringing you the very best of comfortable homes and commercial space at desirable, major residential hubs.',
  'We exercise a client-centric approach that helps us deliver result-driven real estate solutions. Whether it’s an apartment of your dreams, a townhouse or villa meeting your aspirations, or a commercial unit, we provide assistance in finding you the right property, utilising extensive expertise of the local real estate market.',
]

export const aboutParagraphs = [
  'ADM Real Estate is a trusted name in Dubai’s property market, dedicated to client satisfaction. With expert knowledge of market trends and property values, we offer tailored solutions for residential, investment, and commercial needs.',
  'From property search and valuation to negotiation and after-sales support, we simplify the buying and selling process to ensure a seamless experience. Our team covers every corner of the city and is fluent in multiple languages.',
]

// Real founder background, drawn from Hasina Khan's public LinkedIn profile.
export const founder = {
  name: 'Hasina (Zeenat) Khan',
  role: 'Founder & CEO',
  credentials: 'Licensed Real Estate Broker & Sales Agent · Residential & Commercial Leasing',
  yearsExperience: '14+',
  linkedin: 'https://www.linkedin.com/in/hasinakhan/',
  // Kept close to Hasina's own wording from her LinkedIn About section,
  // trimmed for length and lightly cleaned up for spelling consistency.
  bio: [
    'With over 14 years of experience in the real estate industry, I’m the founder and CEO of ADM Real Estate LLC, a company that provides comprehensive and customised solutions for property owners, buyers, and short- or long-term leaseholders.',
    'I have a track record of delivering results in UAE’s property brokerage services, property management, investment advising, asset portfolio building, sales, marketing, customer service and team leadership.',
    'As a licensed real estate broker and sales agent, I have a deep understanding of the market dynamics, trends and opportunities in the region, in compliance with UAE law. I leverage my network, communication skills and competitive analysis to identify and secure the best deals for my clients.',
    'I also oversee the operational, strategic and financial aspects of my company, ensuring quality, efficiency and profitability. I’m passionate about creating value for my clients and empowering my team to excel in their roles.',
  ],
  image: '/team/Hasina.png',
}

// ADM's real service list, taken directly from Hasina Khan's LinkedIn
// profile (Real Estate, Commercial Real Estate, Property Management,
// Real Estate Marketing, Property Law, Real Estate Appraisal, Commercial
// Lending) plus "investment advising, asset portfolio building" from her
// About section. Titles are lightly expanded for a site visitor; the
// underlying list is theirs, not invented.
export const services = [
  {
    title: 'Buying & Selling',
    body: 'Brokerage for buying, selling and purchasing property across Dubai.',
  },
  {
    title: 'Leasing & Rentals',
    body: 'Support for landlords and tenants, on short-term and long-term leases.',
  },
  {
    title: 'Property Management',
    body: 'Day-to-day property management for owners, so they don’t have to be on call.',
  },
  {
    title: 'Real Estate Marketing',
    body: 'Marketing that puts a property in front of the right buyers or tenants.',
  },
  {
    title: 'Real Estate Appraisal',
    body: 'A clear, honest valuation based on current market conditions.',
  },
  {
    title: 'Property Law',
    body: 'Guidance on the legal and compliance side of a transaction, in line with UAE law.',
  },
  {
    title: 'Commercial Lending',
    body: 'Introductions and support around financing for a purchase.',
  },
  {
    title: 'Investment Advising & Portfolio Building',
    body: 'Market analysis and asset selection for clients building an investment portfolio.',
  },
  {
    title: 'Commercial Real Estate',
    body: 'Office, retail and industrial space, for lease or for sale.',
  },
]

// Real developer relationships Hasina has publicly represented launches for
// (per her LinkedIn post history). Extend this list once ADM confirms
// current, active developer relationships.
export const developerPartners = ['Danube Properties', 'Dubai Investments']

export const whyChoose = [
  {
    n: '01',
    title: 'Deep-Rooted Dubai Expertise',
    body: 'As a premier real estate consultant, ADM possesses an unparalleled understanding of Dubai’s property market, ensuring clients make informed decisions.',
  },
  {
    n: '02',
    title: 'Personalised Client Service',
    body: 'With a focus on individual needs, ADM offers tailored solutions, building lasting relationships based on trust and reliability.',
  },
  {
    n: '03',
    title: 'Access to Exclusive Properties',
    body: 'ADM provides exclusive access to a wide range of properties, from luxury apartments to prime commercial spaces, catering to diverse client preferences.',
  },
]

// Credit shown quietly in the footer, since this is pitch collateral, not
// ADM's live production site.
export const builder = {
  name: 'Peter Sudai',
  email: 'psudai@gmail.com',
  note: 'A concept revamp built by',
}
