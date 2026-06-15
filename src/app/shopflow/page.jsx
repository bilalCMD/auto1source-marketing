import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'How does ShopFlow handle work orders from start to finish?', a: 'ShopFlow tracks every job from the moment a vehicle is checked in through inspection, estimate approval, parts ordering, technician assignment, completion, and invoicing. Each stage has a clear handoff so nothing falls through the cracks.' },
  { q: 'Can technicians update job status from their phone?', a: 'Yes. Technicians can update job stages, attach photos, and log labor time from any device. Managers see live progress on the dashboard without having to walk the floor.' },
  { q: 'Does it integrate with parts ordering?', a: 'Yes. One-click parts ordering is built into the workflow. Order parts directly from the work order without leaving the screen, and track delivery status against the job.' },
  { q: 'Will it replace my current scheduling and dispatch tools?', a: 'For most shops, yes. ShopFlow includes scheduling, dispatch, work-order management, technician assignments, and customer communications — so you can consolidate multiple tools into one.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Shop Work Order & Management System | Auto1Source',
  description: 'Run work orders, scheduling and shop workflow in one system. Built for auto repair shops that need structure and speed.',
};

export default function ShopFlow() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-shopflow">



{/* DARK HERO */}
<section className="dark-hero">
  <div className="dark-hero-grid">
    <div>
      <h1>The <span className="r">Operational Backbone</span><br />of Your Shop</h1>
      <p className="sub">Auto1Source structures your daily workflow so nothing falls through the cracks — from appointment to final invoice.</p>
    </div>
    <div className="dark-hero-visual">
      <div className="dh-dots"><span></span><span></span><span></span></div>
      <div className="dh-title">Work Orders Dashboard</div>
      <div className="dh-row">
        <div className="l"><span className="dot"></span>RO #4721 — Toyota Camry</div>
        <span className="dh-pill g">In Progress</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#3b82f6'}}></span>RO #4722 — Ford F-150</div>
        <span className="dh-pill b">Awaiting Parts</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f59e0b'}}></span>RO #4723 — Honda Civic</div>
        <span className="dh-pill y">Estimate Sent</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f97316'}}></span>RO #4724 — BMW 330i</div>
        <span className="dh-pill o">Scheduled</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 1: Create, Track, Manage */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>Create, Track, and Manage Every Job</h2>
        <p>Every job moves through a structured process so your team always knows the next step. Build detailed, professional estimates that clearly explain recommended work — improving customer trust and approval rates.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Work Orders</h4><p>Create, track, and manage repair orders with complete visibility across your shop.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Estimate Creation</h4><p>Build professional estimates that clearly explain recommended work to customers.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Job Conversion Tracking</h4><p>Track estimate approvals and declined work. Measure closing ratios and identify revenue.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Mechanic.webp" alt="Mechanic creating work order" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 2: See Entire Shop */}
<section className="content-section alt">
  <div className="content-inner">
    <div className="split-section reverse">
      <div className="text">
        <h2>See Your Entire Shop at a Glance</h2>
        <p>A real-time operational dashboard shows what's happening across your shop. Monitor job progress, technician activity, parts status, and workflow — all from one screen.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">🔍</div><div className="txt"><h4>Activity Desktop</h4><p>Monitor job progress, technician activity, and workflow at a glance in real time.</p></div></div>
          <div className="feat-check"><div className="chk">🔗</div><div className="txt"><h4>Parts Status Tracking</h4><p>Track ordered parts, arrival status, and installation updates. Eliminate delays from miscommunication.</p></div></div>
          <div className="feat-check"><div className="chk">📅</div><div className="txt"><h4>Appointment Scheduling</h4><p>Structured calendar management prevents overbooking and workflow bottlenecks.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/2nd section.webp" alt="Dashboard activity view" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 3: Consistency */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>Consistency Without Extra Effort</h2>
        <p>Pre-built service templates speed up estimates while maintaining pricing consistency. Permission controls protect sensitive information while keeping operations clear.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Canned Jobs</h4><p>Pre-built service templates for common repairs. Speed up estimates while maintaining pricing.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Permissions & Role Controls</h4><p>Define access levels for advisors, technicians, managers, and owners.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Customizable Workflow</h4><p>Tailor the workflow to your shop's specific process. Drag, drop, organize.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Independent Shops.webp" alt="Consistent workflow" />
      </div>
    </div>
  </div>
</section>
{/* FEATURES (Built-in modules that work together) */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>⚙️ Features</h3>
  <p>Everything your shop needs — built in and fully connected. No third-party logins, no extra tabs.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <div className="feat-icon">👥</div>
    <h3>CRM</h3>
    <p>Customer profiles, vehicle history, and communication — all in one place.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">💳</div>
    <h3>Invoice & Payment</h3>
    <p>Send invoices, accept payments, and track receivables without leaving the workflow.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">📊</div>
    <h3>Reports & Analytics</h3>
    <p>Real-time dashboards for revenue, job profitability, tech performance, and more.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">🔩</div>
    <h3>Parts & Inventory</h3>
    <p>Multi-vendor parts lookup, ordering, and live inventory tracking across suppliers.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">💬</div>
    <h3>Customer Comms</h3>
    <p>Two-way text, email, and status updates — customers stay informed automatically.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">📋</div>
    <h3>Digital Inspections</h3>
    <p>Photo and video inspections built right into the work order — approvals in minutes.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">👷</div>
    <h3>Team Management</h3>
    <p>Payroll, time tracking, HR, and technician performance — one integrated module.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">🔄</div>
    <h3>Data Migration</h3>
    <p>Seamless switch from your old system — we move your data for you.</p>
  </div>
  <div className="integ-card">
    <div className="feat-icon">💰</div>
    <h3>Financing</h3>
    <p>Offer customers flexible financing options at checkout — boost ticket size instantly.</p>
  </div>
</div>{/* TESTIMONIAL */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="ShopFlow questions" intro="Everything you need to know about how Auto1Source structures your daily workflow." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Structure Your Workflow Today</h2>
  <p>Stop letting jobs fall through the cracks. See how Auto1Source brings clarity to every step.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
    <Link href="/pricing" className="btn-outline">See Pricing</Link>
  </div>
</section>




      </div>
    </>
  );
}
