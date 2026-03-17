export interface PricingTier {
  readonly name: string;
  readonly price: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly cta: string;
  readonly highlighted: boolean;
}

export const pricingTiers: readonly PricingTier[] = [
  {
    name: 'Personal',
    price: '149',
    description:
      'A single AI agent environment tuned to your daily workflows. You learn the methodology as we build it together.',
    features: [
      'One agent environment, fully configured',
      'Core workflows: research, writing, analysis',
      '1 guided build session (90 min)',
      'Methodology walkthrough — you understand what was built and why',
      'Email support for 30 days',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '499',
    description:
      'Multi-agent environment for your team or complex workflows. Built across multiple sessions so the system fits how you actually work.',
    features: [
      'Multi-agent environment with team workflows',
      'Custom tool integrations (APIs, databases, internal systems)',
      '3 build sessions (90 min each)',
      'Workflow documentation and team onboarding guide',
      'Priority support for 90 days',
      'One revision session included',
    ],
    cta: 'Book a call',
    highlighted: true,
  },
  {
    name: 'Custom',
    price: '2,000+',
    description:
      'Full integration into your business operations. We adapt the methodology to your domain, train your team, and stay until it works.',
    features: [
      'Enterprise-grade multi-agent architecture',
      'Custom methodology adaptation for your domain',
      'Unlimited build sessions until launch',
      'Team training and documentation',
      'Dedicated support channel',
      'Quarterly review and optimization',
    ],
    cta: 'Let\u2019s talk',
    highlighted: false,
  },
] as const;
