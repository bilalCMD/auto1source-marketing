import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Is this fast enough for a quick-lube workflow?', a: 'Yes. Built for high-throughput operations — most jobs can be checked in, serviced, invoiced, and closed in under 5 minutes from start to finish.' },
  { q: 'Does it support multi-bay parallel jobs?', a: "Yes. Track multiple vehicles in multiple bays simultaneously with clear bay-by-bay status, so the manager always knows what's holding up the line." },
  { q: 'Can I run mileage-based service reminders?', a: "Yes. Set custom service intervals per vehicle make/model. The system pings the customer automatically when they're due — bringing them back without ad spend." },
  { q: 'Does it support fleet accounts?', a: 'Yes. Set up fleet customers with discounted rates, monthly invoicing, and approval-free service for authorized vehicles.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Quick Lube Shop Management Software | Auto1Source',
  description: 'Run a faster quick lube bay with streamlined work orders, customer tracking and inventory management.',
};

export default function QuickLube() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-quicklube">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Fleet Service.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Quick Lube Shops</h1>
    <p>Speed is everything in quick lube. Auto1Source keeps your bays moving with fast ticket creation, instant invoicing, and streamlined workflows designed for high-volume, quick-turn services.</p>
    <SignUpButton className="btn-navy">Get Started — $79.99/mo →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>Speed Meets Structure</h2><p>Move fast without losing control of your workflow or your numbers.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">⚡</div><h3>Fast Ticket Creation</h3><p>Create work orders in seconds with pre-built quick lube templates. Oil changes, filters, fluids — one click.</p></div>
    <div className="benefit-card"><div className="b-ico">🔄</div><h3>Bay-to-Bay Flow</h3><p>Track every bay in real time. Know which vehicles are in, which are done, and which need upsells.</p></div>
    <div className="benefit-card"><div className="b-ico">💳</div><h3>Instant Invoicing</h3><p>Close out tickets and process payments in under 30 seconds. No bottlenecks at checkout.</p></div>
    <div className="benefit-card"><div className="b-ico">📊</div><h3>Volume Reporting</h3><p>Track cars per hour, average ticket value, and upsell conversion rates across your operation.</p></div>
    <div className="benefit-card"><div className="b-ico">🔩</div><h3>Inventory Alerts</h3><p>Never run out of oil, filters, or fluids. Automated reorder alerts based on usage patterns.</p></div>
    <div className="benefit-card"><div className="b-ico">📣</div><h3>Return Visit Marketing</h3><p>Automated 3,000-mile / 5,000-mile service reminders to drive repeat business.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Quick lube questions" intro="How Auto1Source supports high-volume quick lube operations." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Speed Up Your Shop?</h2>
  <p>Run your quick lube with the speed you need and the structure you deserve.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
