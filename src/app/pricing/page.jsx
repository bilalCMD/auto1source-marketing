import PricingBody from './PricingBody';

export const metadata = {
  title: 'Auto Shop Software Pricing | Auto1Source',
  description:
    'One flat price: $79.99/mo for a single shop and $129.99/shop for multi-location. All features included, no hidden fees.',
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Auto1Source so much cheaper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Auto1Source was built by a shop owner who ran multiple repair shops for 30+ years. The goal was to build the most comprehensive system and price it fairly — not to extract maximum revenue through tiered gating and add-on fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there feature limits at $79.99/mo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Every feature is included at $79.99/mo with no tiers, no feature gates, and no add-on fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about multi-shop pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multi-shop is $129.99 per shop per month, with all features included at every location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there per-user charges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No per-user charges. Add as many technicians and managers as you need at no extra cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Auto1Source add charges to parts orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Parts ordering is included with no markup or per-order fees. You pay the vendor directly.',
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <PricingBody />
    </>
  );
}
