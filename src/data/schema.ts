import type { FAQItem } from './faq';
import type { PricingTier } from './pricing';

const SITE_URL = 'https://petrelaskov.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Petre Laskov AI Consulting',
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      'Custom AI agent environments for business. Built with a proven methodology.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Skopje',
      addressCountry: 'MK',
    },
    founder: {
      '@type': 'Person',
      name: 'Petre Laskov',
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Petre Laskov',
    url: SITE_URL,
    jobTitle: 'AI Consultant',
    worksFor: {
      '@type': 'Organization',
      name: 'Petre Laskov AI Consulting',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Skopje',
      addressCountry: 'MK',
    },
  };
}

export function serviceSchema(tiers: readonly PricingTier[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Agent Environment Build',
    provider: {
      '@type': 'Person',
      name: 'Petre Laskov',
    },
    description:
      'Custom AI agent environments that integrate into your workflows. Built with a proven methodology.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Build Packages',
      itemListElement: tiers.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        description: tier.description,
        priceCurrency: 'EUR',
        price: tier.price.replace(/[^0-9]/g, ''),
      })),
    },
  };
}

export function faqPageSchema(items: readonly FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
