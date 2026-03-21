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
      'A single agent environment for your daily workflows. One build session. You learn the methodology as I build it.',
    features: [
      'One agent environment, fully configured',
      'Core workflows mapped and automated',
      'Guided build session with methodology transfer',
      'Documentation and walkthrough',
      '30 days email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '499',
    description:
      'Multi-workflow environment for complex operations or small teams. Built across multiple sessions.',
    features: [
      'Multi-workflow agent environment',
      'Team onboarding documentation',
      '3 build sessions',
      'One revision session included',
      '90 days priority support',
    ],
    cta: 'Book a call',
    highlighted: true,
  },
  {
    name: 'Custom',
    price: '2,000+',
    description:
      'Full integration into your business operations. I adapt the methodology to your domain and stay until it works.',
    features: [
      'Custom methodology adaptation',
      'Unlimited sessions until operational',
      'Team training and documentation',
      'Dedicated support channel',
      'Quarterly review and optimization',
    ],
    cta: 'Let\u2019s talk',
    highlighted: false,
  },
] as const;
