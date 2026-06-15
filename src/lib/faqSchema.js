// Server-safe helper: build FAQPage JSON-LD schema from FAQ items.
// Kept out of the (client) PageFAQ component so server pages can call it
// at module scope when assembling structured data.
export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
