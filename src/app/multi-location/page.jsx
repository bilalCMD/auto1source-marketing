import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'How is multi-shop pricing structured?', a: 'Multi-shop is $129.99 per shop per month with all features included at every location. No setup fees, no per-user charges, and no add-on costs.' },
  { q: 'Can I see consolidated reports across all locations?', a: 'Yes. Roll up revenue, parts, labor, and customer data across all shops or drill into a single location. Permission controls let managers see only what they need.' },
  { q: 'Do customers and vehicles transfer between locations?', a: 'Yes. Customer and vehicle records are shared across your network, so a customer servicing at Shop A can be picked up seamlessly at Shop B with full history.' },
  { q: 'Can I run a franchise or partnership model?', a: 'Yes. Role-based permissions, location-specific pricing, and per-shop reporting support both corporate-owned multi-shop and franchise/partnership structures.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Multi-Location Auto Shop Software | Auto1Source',
  description: 'Manage multiple auto repair shop locations from one platform. Centralized control, unified reporting and operations.',
};

export default function MultiLocation() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-multilocation">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Multi-Location.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Multi-Location Operations</h1>
    <p>Centralized control without micromanagement. Auto1Source lets you manage every location from one dashboard — with unified reporting, consistent workflows, and per-store visibility.</p>
    <SignUpButton className="btn-navy">Get Started →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>Centralized Control, Per-Store Visibility</h2><p>Manage multiple locations without losing sight of any single one.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">🏢</div><h3>Multi-Store Dashboard</h3><p>See all locations in one view. Compare revenue, job volume, and technician performance across stores.</p></div>
    <div className="benefit-card"><div className="b-ico">🔄</div><h3>Unified Workflows</h3><p>Set standard operating procedures once. Deploy them across all locations for consistency.</p></div>
    <div className="benefit-card"><div className="b-ico">📊</div><h3>Cross-Location Reporting</h3><p>Consolidated and per-location P&L;, service mix analysis, and performance benchmarking.</p></div>
    <div className="benefit-card"><div className="b-ico">👥</div><h3>Role-Based Access</h3><p>Store managers see their location. Regional managers see their territory. Owners see everything.</p></div>
    <div className="benefit-card"><div className="b-ico">🔩</div><h3>Centralized Purchasing</h3><p>Negotiate better parts pricing with volume across locations. Central vendor management.</p></div>
    <div className="benefit-card"><div className="b-ico">💰</div><h3>Location Profitability</h3><p>Identify your most and least profitable locations. Make data-driven expansion decisions.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Multi-location questions" intro="How Auto1Source handles multiple shops under one roof." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Unify Your Operations?</h2>
  <p>Run multiple locations with the same structure and visibility as one well-managed shop.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
