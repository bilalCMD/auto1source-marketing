import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Does Auto1Source work for mobile mechanics?', a: 'Yes. The entire system runs on a phone or tablet — work orders, estimates, parts ordering, payments, and customer comms — perfect for at-customer service.' },
  { q: 'Can I capture digital signatures on-site?', a: 'Yes. Customers can sign estimates and invoices directly on your phone or tablet. The signed document is automatically attached to the work order.' },
  { q: 'How do I take payments in the field?', a: 'Built-in card payment processing works on any phone or tablet. Send invoices by SMS and let customers pay online if they prefer.' },
  { q: 'Can I schedule routes and dispatch jobs?', a: 'Yes. Route scheduling, job dispatch, and live location tracking help mobile teams maximize jobs per day while keeping customers informed.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Software for Mobile Mechanics | Auto1Source',
  description: 'Manage jobs, estimates and customers on the go with phone-first software built for mobile mechanics.',
};

export default function MobileMechanics() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-mobilemechanics">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Startup Shops.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Mobile Mechanics</h1>
    <p>No fixed location doesn't mean no structure. Auto1Source gives mobile mechanics the same professional workflow tools as brick-and-mortar shops — all from your phone.</p>
    <SignUpButton className="btn-navy">Get Started — $79.99/mo →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>Professional Operations, Anywhere</h2><p>Run your mobile business with the same structure as a full-service shop.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">📱</div><h3>Mobile-First Workflow</h3><p>Create estimates, work orders, and invoices from your phone. No laptop required in the field.</p></div>
    <div className="benefit-card"><div className="b-ico">📍</div><h3>Route Management</h3><p>Plan your day with appointment scheduling and route optimization for maximum efficiency.</p></div>
    <div className="benefit-card"><div className="b-ico">💳</div><h3>On-Site Payments</h3><p>Accept card payments on location. Send digital invoices and collect instantly.</p></div>
    <div className="benefit-card"><div className="b-ico">📋</div><h3>Digital Estimates</h3><p>Build professional estimates on-site and get customer approval with a tap. No paperwork.</p></div>
    <div className="benefit-card"><div className="b-ico">🚗</div><h3>Customer Database</h3><p>Full CRM with vehicle history, contact info, and service records — accessible anywhere.</p></div>
    <div className="benefit-card"><div className="b-ico">📊</div><h3>Business Intelligence</h3><p>Track revenue, job count, and average ticket value. Know your numbers even without a shop.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Mobile mechanic questions" intro="How Auto1Source supports mobile and on-site repair operations." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Go Pro — On the Go?</h2>
  <p>Join mobile mechanics who run their business like a real system, not a side hustle.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
