import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Is Auto1Source built for independent shops?', a: 'Yes. Auto1Source was built by a 30-year independent shop owner. Every feature is designed around the realities of running a single-location independent shop without an IT department.' },
  { q: 'Can I migrate from my current system?', a: "Yes. Auto1Source supports data migration from Mitchell 1, Shop-Ware, Tekmetric, Shopmonkey, and most spreadsheet setups. The team handles the import so you don't lose history." },
  { q: 'How long does setup typically take?', a: 'Most independent shops are fully operational within 1-3 days, including staff training. The interface is designed for tech-comfortable shop owners — no consultant needed.' },
  { q: 'What if I have only 1-2 technicians?', a: 'Auto1Source works just as well for a 1-tech shop as a 10-tech shop. There are no per-user fees, so adding (or having only) a few users costs the same — $79.99/mo flat.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Software for Independent Auto Repair Shops | Auto1Source',
  description: 'Management software built for independent auto repair shops. Structure, control and growth without the complexity.',
};

export default function AutoRepairShop() {
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-autorepairshop">



{/* HERO */}
<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Independent Shops.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Independent Repair Shops</h1>
    <p>You don't need enterprise complexity. You need a structured system that keeps every job on track, every technician accountable, and every dollar visible — without the overhead.</p>
    <SignUpButton className="btn-navy">Get Started — $79.99/mo →</SignUpButton>
  </div>
</section>

{/* BENEFITS */}
<section className="benefits-section">
  <div className="sec-hdr">
    <h2>Structure Without Complexity</h2>
    <p>Everything an independent shop needs to run professionally — from day one.</p>
  </div>
  <div className="benefits-grid">
    <div className="benefit-card">
      <div className="b-ico">🔄</div>
      <h3>Consistent Daily Workflow</h3>
      <p>Every job follows the same structured process. No more chaos, missed steps, or forgotten follow-ups.</p>
    </div>
    <div className="benefit-card">
      <div className="b-ico">💰</div>
      <h3>Profitability Visibility</h3>
      <p>See exactly where your money goes. Track margins per job, per technician, and per service type.</p>
    </div>
    <div className="benefit-card">
      <div className="b-ico">👥</div>
      <h3>Technician Accountability</h3>
      <p>Assign jobs, track hours, measure productivity, and run payroll — all from one system.</p>
    </div>
    <div className="benefit-card">
      <div className="b-ico">🔩</div>
      <h3>Parts Without the Hassle</h3>
      <p>Search multiple vendors, order with one click, track deliveries, and manage core returns.</p>
    </div>
    <div className="benefit-card">
      <div className="b-ico">🚗</div>
      <h3>Customer Retention</h3>
      <p>Automated service reminders, review nudges, and digital approvals keep customers coming back.</p>
    </div>
    <div className="benefit-card">
      <div className="b-ico">📊</div>
      <h3>Books That Balance</h3>
      <p>Built-in bookkeeping with QuickBooks sync, sales tax tracking, and financial reporting.</p>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section className="steps">
  <div className="sec-hdr">
    <h2 style={{color: '#fff'}}>How Independent Shops Win with Auto1Source</h2>
    <p>From first login to long-term growth — here's the path.</p>
  </div>
  <div className="steps-row">
    <div className="step"><div className="step-n">1</div><div className="step-t">Set Up Your Shop Profile</div></div>
    <div className="step"><div className="step-n">2</div><div className="step-t">Build Your Workflow Templates</div></div>
    <div className="step"><div className="step-n">3</div><div className="step-t">Add Techs & Start Jobs</div></div>
    <div className="step"><div className="step-n">4</div><div className="step-t">Track Revenue & Performance</div></div>
    <div className="step"><div className="step-n">5</div><div className="step-t">Scale With Confidence</div></div>
  </div>
</section>


{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Independent auto shop questions" intro="How Auto1Source fits independent auto repair shops." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Ready to Run Your Shop Like a System?</h2>
  <p>Join 100+ independent shops that stopped reacting and started operating with structure.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
