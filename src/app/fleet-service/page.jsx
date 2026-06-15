import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';

import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Can I set up fleet accounts with custom pricing?', a: 'Yes. Set negotiated labor rates and parts discounts per fleet account. Apply automatically to every job for that customer.' },
  { q: 'How does monthly fleet invoicing work?', a: 'Combine all jobs for a fleet account into one monthly statement. Customer pays one invoice instead of dozens — clean for them, clean for your books.' },
  { q: 'Do drivers need approval for every job?', a: 'You decide. Set per-vehicle or per-driver approval rules — some fleets pre-authorize maintenance, others require manager sign-off on each job.' },
  { q: 'Can I track vehicle history across the fleet?', a: 'Yes. Complete service history per vehicle and per fleet — useful for warranty claims, lease returns, and showing the customer their preventive maintenance ROI.' }
];

export default function FleetService() {
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="page-fleetservice">



<section className="shop-detail-hero">
  <div className="bg"><img src="/site-assets/images/Fleet Service.webp" alt="" /><div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.3))'}}></div></div>
  <div className="content">
    <h1>Built for Fleet Service Operations</h1>
    <p>High-volume fleet work demands efficiency at every step. Auto1Source keeps fleets rolling with structured workflows, fast turnaround tracking, and fleet-level reporting.</p>
    <SignUpButton className="btn-navy">Get Started →</SignUpButton>
  </div>
</section>
<section className="benefits-section">
  <div className="sec-hdr"><h2>High-Volume Efficiency</h2><p>Keep fleets rolling with structured, repeatable processes.</p></div>
  <div className="benefits-grid">
    <div className="benefit-card"><div className="b-ico">🚚</div><h3>Fleet Account Management</h3><p>Manage fleet accounts with custom pricing, PO numbers, and centralized billing per fleet.</p></div>
    <div className="benefit-card"><div className="b-ico">🔄</div><h3>Batch Work Orders</h3><p>Create multiple work orders at once for fleet vehicles. Standardized inspections and PM schedules.</p></div>
    <div className="benefit-card"><div className="b-ico">📊</div><h3>Fleet-Level Reporting</h3><p>Report by fleet, by vehicle, by service type. Give fleet managers the data they need.</p></div>
    <div className="benefit-card"><div className="b-ico">⏱</div><h3>Turnaround Tracking</h3><p>Track time from drop-off to pickup per vehicle. Identify bottlenecks and optimize throughput.</p></div>
    <div className="benefit-card"><div className="b-ico">🔩</div><h3>Bulk Parts Ordering</h3><p>Order parts in bulk for fleet PMs. Track inventory against fleet schedules automatically.</p></div>
    <div className="benefit-card"><div className="b-ico">📋</div><h3>Compliance Documentation</h3><p>Generate inspection reports, maintenance logs, and compliance documents for fleet audits.</p></div>
  </div>
</section>

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Fleet service questions" intro="How Auto1Source supports fleet customer management and B2B accounts." items={FAQ_ITEMS} />

<section className="cta-sec">
  <h2>Ready to Scale Your Fleet Operations?</h2>
  <p>Run high-volume fleet service with the structure and visibility your operation demands.</p>
  <div className="cta-btns"><SignUpButton className="btn-white">Get Started →</SignUpButton></div>
</section>




      </div>
    </>
  );
}
