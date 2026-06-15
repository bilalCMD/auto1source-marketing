import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Is this affordable for a brand-new shop?', a: 'Yes. At $79.99/mo with no per-user, per-job, or feature-gate fees, Auto1Source is one of the most affordable full systems for a startup shop.' },
  { q: 'Will it scale as my shop grows?', a: 'Yes. Add technicians, customers, and jobs without changing tiers or paying more per user. When you open a second location, multi-shop unlocks at $129.99/shop.' },
  { q: 'Do I need an IT person to set this up?', a: 'No. Setup is web-based — no servers, no installs, no IT. If you can use a smartphone, you can run your shop on Auto1Source.' },
  { q: "What if I'm not sure how big my shop will get?", a: 'No long-term contract, no setup fees, no termination fees. Start at $79.99/mo and scale as the shop grows — or pause if business slows seasonally.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Shop Software for Startup Shops | Auto1Source',
  description: 'Just opened an auto repair shop? Get software for work orders, parts, payroll and customers — all in one platform.',
};

export default function StartupShops() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-startupshops">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Startup Shops.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Startup Shops</h1>
    <p>Starting a shop? Build on the right foundation from day one. Auto1Source gives you enterprise-level structure at a startup-friendly price — so you grow fast and grow right.</p>
    <SignUpButton className="btn-navy">Get Started — $79.99/mo →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>Start Right, Grow Fast</h2><p>Build your shop on a professional foundation from the very beginning.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">🚀</div><h3>Quick Setup</h3><p>Go from signup to first work order in under an hour. Pre-built templates get you started immediately.</p></div>
    <div className="benefit-card"><div className="b-ico">📋</div><h3>Professional Estimates</h3><p>Send branded, professional estimates from day one. Digital approvals build customer confidence.</p></div>
    <div className="benefit-card"><div className="b-ico">💰</div><h3>Price Right from Day One</h3><p>Labor guide integration ensures you're charging correctly. No more guessing on rates.</p></div>
    <div className="benefit-card"><div className="b-ico">📊</div><h3>Know Your Numbers</h3><p>Built-in reporting shows you exactly where you stand financially — even in your first month.</p></div>
    <div className="benefit-card"><div className="b-ico">🚗</div><h3>Build Your Customer Base</h3><p>CRM and marketing tools help you acquire and retain customers from the start.</p></div>
    <div className="benefit-card"><div className="b-ico">📈</div><h3>Scale-Ready Architecture</h3><p>Start with one bay, grow to ten. The system scales with you — no migration needed.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Startup shop questions" intro="Auto1Source is built to scale from your first car to your hundredth." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Launch Your Shop the Right Way?</h2>
  <p>Don't start with spreadsheets and sticky notes. Start with a system.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
