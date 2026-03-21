export const header = {
  logo: 'Petre Laskov',
  nav: [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Book a call', href: '#contact' },
} as const;

export const hero = {
  headline: 'Your AI tools don\u2019t know your business. I fix that.',
  subheadline:
    'I build custom AI environments that encode your domain knowledge, your processes, and your standards\u2009\u2014\u2009so AI works the way your business does. Not chatbots. Infrastructure.',
  primaryCta: { label: 'Book a discovery call', href: '#contact' },
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
  proof: 'Three-year methodology. Real deployments. Working systems in days, not months.',
} as const;

export const problem = {
  eyebrow: 'The problem',
  headline: 'Most AI deployments fail at context, not capability',
  paragraphs: [
    'You\u2019ve tried ChatGPT. Maybe Copilot. Maybe a vendor who sold you an \u201cAI-powered platform.\u201d They produce impressive demos and mediocre results\u2009\u2014\u2009because they don\u2019t know your processes, your data, or your standards.',
    'Every session is a cold start. Every output needs editing. The AI doesn\u2019t remember what you told it yesterday, doesn\u2019t know your suppliers format invoices differently, doesn\u2019t understand that \u201curgent\u201d means something specific in your operations. You\u2019re doing the cognitive work the AI should be doing.',
  ],
  painPoints: [
    {
      title: 'Zero memory',
      description:
        'Generic tools start fresh every session. Your domain knowledge, naming conventions, quality standards, edge cases\u2009\u2014\u2009none of it carries over.',
    },
    {
      title: 'Manual babysitting',
      description:
        'You spend more time correcting AI output than you save generating it. The \u201cproductivity gain\u201d is a net loss once you count the review cycles.',
    },
    {
      title: 'Vendor theater',
      description:
        'Enterprise AI platforms take months to integrate, cost six figures, and still need constant human oversight. The ROI deck was more impressive than the product.',
    },
  ],
} as const;

export const solution = {
  eyebrow: 'The solution',
  headline: 'An AI environment designed around how your business actually works',
  paragraphs: [
    'Instead of forcing your workflows into generic tools, I build a custom agent environment that starts from your actual documents\u2009\u2014\u2009purchase orders, invoices, contracts, operational records. The system is initialized on reality, not assumptions.',
    'The result: AI that maintains context across sessions, follows your rules without reminders, catches what you\u2019d miss, and improves as your business evolves. You own it. You understand it. You\u2019re never dependent on me to keep it running.',
  ],
  benefits: [
    {
      title: 'Persistent context',
      description:
        'Your environment remembers your domain, your preferences, your edge cases. When a supplier changes their invoice format, the system knows. No re-explaining.',
    },
    {
      title: 'Autonomous execution',
      description:
        'Agents handle multi-step workflows end-to-end\u2009\u2014\u2009tracking shipments, cross-referencing purchase orders, drafting invoices\u2009\u2014\u2009with your quality standards built in.',
    },
    {
      title: 'You own the capability',
      description:
        'Every engagement includes methodology transfer. You understand what was built, why each decision was made, and how to evolve the system as your needs change. No lock-in.',
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: 'How it works',
  headline: 'Discovery to working system in days',
  steps: [
    {
      number: '01',
      title: 'Discovery',
      description:
        'A 30-minute call where I map your workflows, identify where an agent environment will have the highest impact, and tell you honestly if this isn\u2019t the right solution. No pitch deck. Just operational questions.',
    },
    {
      number: '02',
      title: 'Build',
      description:
        'I read your actual documents and build the environment from what\u2019s there\u2009\u2014\u2009not from templates. You\u2019re involved throughout. I explain every design decision so you understand the system you\u2019re getting.',
    },
    {
      number: '03',
      title: 'Deliver and train',
      description:
        'You get a working system, documentation, and a guided walkthrough. You operate it with me watching, then independently. The handover isn\u2019t a Loom video\u2009\u2014\u2009it\u2019s practice on your real work until you\u2019re fluent.',
    },
    {
      number: '04',
      title: 'Evolve',
      description:
        'Your business changes. The environment adapts. Post-delivery support is included, and evolution sessions are available when workflows shift, tools change, or your team grows.',
    },
  ],
} as const;

export const caseStudy = {
  eyebrow: 'Case study',
  headline: 'Shipping delays caught four days early',
  subtitle: 'A young founder running a 30-year manufacturing operation',
  quote: '',
  results: [
    { metric: 'Shipping delay detection', value: '4 days early' },
    { metric: 'Rent calculation time', value: '2 hrs \u2192 5 min' },
    { metric: 'Time to operational system', value: '3 sessions' },
  ],
  description:
    'A clutch manufacturing company running imports from three continents, 100+ purchase orders across twelve suppliers, and monthly rent invoicing for nine tenants. Three sessions. The system now tracks vessel positions in real time, cross-references arrival dates against documentation, and flags discrepancies before the operations team catches them. A rent calculation that took two hours of manual work\u2009\u2014\u2009nine tenants, three currencies, 18% VAT, special arrangements per tenant\u2009\u2014\u2009now takes five minutes.',
} as const;

export const about = {
  eyebrow: 'About',
  headline: 'Built by someone who runs on this every day',
  paragraphs: [
    'I\u2019m Petre Laskov, based in Skopje. I build custom AI agent environments for businesses using a methodology I developed over three years of daily practice. Not research\u2009\u2014\u2009operational use. Eight domains of my own life and work run on the same architecture I build for clients.',
    'The methodology emerged from solving real problems first\u2009\u2014\u2009managing complex projects, synthesizing research across hundreds of sources, coordinating multi-step workflows. When the systems I built for myself started producing reliably better outcomes than the tools everyone else was using, I started building them for others.',
  ],
  credentials: [
    {
      title: 'Practitioner first',
      description:
        'Every technique I use with clients, I use daily. The methodology powers my own operations before it reaches anyone else. I eat my own cooking.',
    },
    {
      title: 'Build-and-learn',
      description:
        'You\u2019re not buying a black box. Every engagement teaches you the methodology so you understand what you have and can evolve it independently.',
    },
    {
      title: 'Honest scoping',
      description:
        'If an agent environment won\u2019t solve your problem, I\u2019ll say so on the discovery call. Most AI problems are actually process problems. I\u2019ll tell you which one you have.',
    },
  ],
} as const;

export const finalCta = {
  headline: 'Let\u2019s see if this fits your business',
  description:
    'Book a free 30-minute discovery call. I\u2019ll map your workflows, identify where an agent environment would have the highest impact, and tell you straight if it\u2019s not the right solution.',
  calCta: {
    label: 'Book a discovery call',
    href: 'https://cal.com/petre-laskov-discovery/30min',
  },
  formHeadline: 'Or send a message',
  formDescription: 'I reply within one business day.',
  formAction: 'https://formspree.io/f/xkoqpgap',
} as const;

export const footer = {
  copyright: `\u00a9 ${new Date().getFullYear()} Petre Laskov. All rights reserved.`,
  email: 'petre@laskov.dev',
  location: 'Skopje, North Macedonia',
  linkedin: 'https://www.linkedin.com/in/petrelaskov/',
  nav: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
