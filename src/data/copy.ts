export const header = {
  logo: 'Petre Laskov',
  nav: [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Book a call', href: '#contact' },
} as const;

export const hero = {
  headline: 'AI that actually knows your business',
  subheadline:
    'Custom agent environments built around your workflows, your data, your rules. Not another chatbot\u2009\u2014\u2009an operational partner.',
  primaryCta: { label: 'Book a discovery call', href: '#contact' },
  secondaryCta: { label: 'See pricing', href: '#pricing' },
  proof: 'From discovery call to working system in days, not months.',
} as const;

export const problem = {
  eyebrow: 'The problem',
  headline: 'Generic AI tools waste more time than they save',
  paragraphs: [
    'You\u2019ve tried ChatGPT. Maybe Copilot. Maybe a dozen others. They produce impressive demos and mediocre results\u2009\u2014\u2009because they don\u2019t know your processes, your data, or your standards.',
    'Every prompt is a fresh start. Every output needs editing. Every \u201cAI-powered\u201d workflow still depends on you to hold the context, check the work, and fix the mistakes.',
  ],
  painPoints: [
    {
      title: 'No context',
      description:
        'Generic tools start from zero every time. Your domain knowledge, processes, and standards don\u2019t carry over.',
    },
    {
      title: 'Manual babysitting',
      description:
        'You spend more time correcting AI output than you save generating it. The \u201cproductivity gain\u201d is an illusion.',
    },
    {
      title: 'Empty promises',
      description:
        'Enterprise AI vendors sell platforms that take months to integrate and still need constant human oversight.',
    },
  ],
} as const;

export const solution = {
  eyebrow: 'The solution',
  headline: 'An AI environment built around your business',
  paragraphs: [
    'Instead of forcing your work into generic tools, I build a custom agent environment that encodes your domain knowledge, your processes, and your quality standards\u2009\u2014\u2009so the AI works the way you do.',
    'The result is a system that maintains context across sessions, follows your rules without reminders, and improves as you use it.',
  ],
  benefits: [
    {
      title: 'Persistent context',
      description:
        'Your agent environment remembers your domain, your preferences, and your standards. No more re-explaining yourself every session.',
    },
    {
      title: 'Autonomous execution',
      description:
        'Agents handle multi-step workflows end-to-end\u2009\u2014\u2009research, drafting, review, revision\u2009\u2014\u2009with your quality gates built in.',
    },
    {
      title: 'Proven methodology',
      description:
        'Built on Meta-Architecture v7, a battle-tested framework for designing agent environments that actually deliver.',
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: 'How it works',
  headline: 'From discovery call to working system in days',
  steps: [
    {
      number: '01',
      title: 'Discovery call',
      description:
        'We map your workflows, pain points, and goals. I identify where an agent environment will have the highest impact\u2009\u2014\u2009and where it won\u2019t.',
    },
    {
      number: '02',
      title: 'Build',
      description:
        'I design and configure your agent environment using the Meta-Architecture v7 methodology. You\u2019re involved throughout\u2009\u2014\u2009this is build-and-learn, not a black box.',
    },
    {
      number: '03',
      title: 'Deliver & train',
      description:
        'You get a fully working system, documentation, and a guided walkthrough. You understand what was built, why, and how to evolve it.',
    },
    {
      number: '04',
      title: 'Support & iterate',
      description:
        'Post-launch support ensures the environment keeps working as your needs change. Revision sessions are included in every tier.',
    },
  ],
} as const;

export const caseStudy = {
  eyebrow: 'Case study',
  headline: 'MONIV International',
  subtitle: 'Manufacturing operations',
  quote:
    'The agent environment transformed how our team handles production scheduling, quality documentation, and supplier communications\u2009\u2014\u2009tasks that used to take hours now take minutes.',
  results: [
    { metric: 'Hours saved weekly', value: '15+' },
    { metric: 'Time to first value', value: '5 days' },
    { metric: 'Workflows automated', value: '8' },
  ],
  description:
    'MONIV International needed to streamline operations across production scheduling, quality non-conformance tracking, and multi-language supplier communication. A custom multi-agent environment\u2009\u2014\u2009built in under a week\u2009\u2014\u2009gave their team persistent operational context and autonomous workflow execution.',
} as const;

export const about = {
  eyebrow: 'About',
  headline: 'Built by someone who uses this every day',
  paragraphs: [
    'I\u2019m Petre Laskov, an AI consultant based in Skopje. I build custom agent environments for businesses using a methodology I developed over two years of daily use \u2014 not theoretical research, but real operational work.',
    'The methodology (Meta-Architecture v7) emerged from solving my own problems first: managing complex projects, synthesizing research, coordinating multi-step workflows. When it worked for me, I started building it for others.',
  ],
  credentials: [
    {
      title: 'Practitioner first',
      description:
        'Every technique I recommend, I use daily. The methodology powers my own work before it reaches clients.',
    },
    {
      title: 'Build-and-learn model',
      description:
        'You\u2019re not buying a product \u2014 you\u2019re gaining a capability. Every engagement teaches you the methodology so you\u2019re never dependent.',
    },
    {
      title: 'Honest scoping',
      description:
        'If an agent environment won\u2019t solve your problem, I\u2019ll tell you on the discovery call. No upselling, no wasted time.',
    },
  ],
} as const;

export const finalCta = {
  headline: 'Ready to build your AI environment?',
  description:
    'Book a free 30-minute discovery call. We\u2019ll map your workflows, identify where an agent environment fits, and scope the engagement\u2009\u2014\u2009no commitment.',
  calCta: {
    label: 'Book a discovery call',
    href: 'https://cal.com/petre-laskov-discovery/30min',
  },
  formHeadline: 'Or send a message',
  formDescription: 'I\u2019ll reply within one business day.',
  formAction: 'https://formspree.io/f/xkoqpgap',
} as const;

export const footer = {
  copyright: `\u00a9 ${new Date().getFullYear()} Petre Laskov. All rights reserved.`,
  email: 'petre@laskov.dev',
  location: 'Skopje, North Macedonia',
  linkedin: 'https://www.linkedin.com/in/petrelaskov/',
  nav: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;