import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Does it handle tire-specific workflows?', a: 'Yes. Tire-size selection, tread-depth tracking, road-hazard warranty management, and rotation reminders are built in. Designed for tire-first shops.' },
  { q: 'Can I manage tire inventory in the system?', a: 'Yes. Track tire stock by size, brand, and DOT date. Get reorder alerts and link tires directly to the work order at point of sale.' },
  { q: 'Does it integrate with tire vendors?', a: 'Yes. Major national and regional tire vendors integrate with Auto1Source for one-click ordering, live pricing, and stock visibility.' },
  { q: 'Can I sell tire packages and bundles?', a: 'Yes. Build standard tire packages (4 tires + install + balance + alignment) and apply them to estimates and invoices in one click.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Tire & Specialty Shop Software | Auto1Source',
  description: 'Manage tire and specialty auto shops with work orders, inventory and customer tools built for your service mix.',
};

export default function TireShop() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-tireshop">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Specialty Shops.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Tire & Specialty Shops</h1>
    <p>Transmission shops, body shops, tire centers, and niche service providers need specialized workflows. Auto1Source gives you advanced tools without the bloat of general-purpose software.</p>
    <SignUpButton className="btn-navy">Get Started — $79.99/mo →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>Advanced Tools for Niche Services</h2><p>Purpose-built features for shops that specialize.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">🛞</div><h3>Tire Inventory Management</h3><p>Track tire stock by size, brand, and type. Integrated ordering from ATD, US Auto Force, and more.</p></div>
    <div className="benefit-card"><div className="b-ico">🔧</div><h3>Specialty Job Templates</h3><p>Pre-built workflows for transmission rebuilds, alignments, body work, and custom services.</p></div>
    <div className="benefit-card"><div className="b-ico">📋</div><h3>Detailed Estimates</h3><p>Labor guide integration with specialty-specific rates. Send digital approvals instantly.</p></div>
    <div className="benefit-card"><div className="b-ico">🔩</div><h3>Vendor-Specific Ordering</h3><p>Direct integration with specialty parts suppliers for faster turnaround on niche components.</p></div>
    <div className="benefit-card"><div className="b-ico">💰</div><h3>Service-Level Profitability</h3><p>Track margins by service type. Know exactly which specialties drive your bottom line.</p></div>
    <div className="benefit-card"><div className="b-ico">📣</div><h3>Seasonal Marketing</h3><p>Automated campaigns for tire season changes, alignment specials, and seasonal service reminders.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Tire shop questions" intro="How Auto1Source serves tire shops and tire-focused operations." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Specialize Smarter?</h2>
  <p>Run your specialty shop with the same structure as the best general repair shops — plus tools built for your niche.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
