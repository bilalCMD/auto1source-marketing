import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Is payroll really included at $79.99/mo?', a: 'Yes. Full payroll module — tech hours, commissions, paysheet distribution, and HR features — is included at no extra cost. No add-on fees, no per-user charges.' },
  { q: 'How does technician time tracking work?', a: 'Technicians clock in and out per job from any device. Hours are automatically attributed to the right work order, making payroll and labor cost analysis simple.' },
  { q: 'Can I set different commission structures per technician?', a: 'Yes. Set flat commission, percentage, or flag-hour rates per technician. The system calculates pay automatically based on completed jobs and approved hours.' },
  { q: 'Does the system handle paysheet distribution?', a: 'Yes. Generate paysheets in one click and distribute them via email or print. Technicians can view their own paysheets through the mobile app.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Technician App: Payroll & HR | Auto1Source',
  description: 'Give techs an app for schedules, paychecks, time-off and ASE certifications. Full HR and payroll module built in.',
};

export default function Employees() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-employees">



{/* DARK HERO */}
<section className="dark-hero">
  <div className="dark-hero-grid">
    <div>
      <h1>Accountability &<br />Performance <span className="r">Built In</span></h1>
      <p className="sub">Payroll, HR, reviews, and technician access — managed from one system designed specifically for auto repair shops.</p>
    </div>
    <div className="dark-hero-visual">
      <div className="dh-dots"><span></span><span></span><span></span></div>
      <div className="dh-title">Payroll Summary</div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '14px'}}>
        <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 12px', textAlign: 'center'}}>
          <div style={{fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: '700', marginBottom: '2px'}}>Technicians</div>
          <div style={{fontFamily: '\'Sora\',sans-serif', fontWeight: '800', fontSize: '20px'}}>8</div>
          <div style={{fontSize: '10px', color: '#15803d', fontWeight: '600'}}>Active</div>
        </div>
        <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 12px', textAlign: 'center'}}>
          <div style={{fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: '700', marginBottom: '2px'}}>Payroll</div>
          <div style={{fontFamily: '\'Sora\',sans-serif', fontWeight: '800', fontSize: '20px'}}>$14.2k</div>
          <div style={{fontSize: '10px', color: '#888'}}>This Week</div>
        </div>
        <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 12px', textAlign: 'center'}}>
          <div style={{fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: '700', marginBottom: '2px'}}>Efficiency</div>
          <div style={{fontFamily: '\'Sora\',sans-serif', fontWeight: '800', fontSize: '20px'}}>87%</div>
          <div style={{fontSize: '10px', color: '#15803d', fontWeight: '600'}}>↑ 4%</div>
        </div>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot"></span>Mike R. — Flat Rate 42hrs</div>
        <span style={{fontWeight: '700', fontSize: '12px'}}>$1,840</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#3b82f6'}}></span>Dave S. — Hourly 38hrs</div>
        <span style={{fontWeight: '700', fontSize: '12px'}}>$1,520</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f59e0b'}}></span>Alex T. — Commission</div>
        <span style={{fontWeight: '700', fontSize: '12px'}}>$2,100</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 1: Payroll Built for Shops */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>Payroll Built for Auto Repair Shops</h2>
        <p>Integrated payroll designed specifically for auto repair compensation models — hourly, flat rate, commission, 401k, health insurance, vacation tracking, and more. Calculates accurately in seconds.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Flexible Compensation Models</h4><p>Hourly, flat rate, commission, salary — all supported with automatic calculation.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Paysheet Distribution</h4><p>Generate and distribute paysheets to each technician automatically with full transparency.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Time Clocks & Labor Tracking</h4><p>Track actual labor hours per job. Time clock integration ties directly to payroll.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Mechanic.webp" alt="Mechanics at work" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 2: Manage Team */}
<section className="content-section alt">
  <div className="content-inner">
    <div className="split-section reverse">
      <div className="text">
        <h2>Manage Your Team Like a Professional</h2>
        <p>HR features include employee reviews, incident tracking, raise history, and employment records — all stored in one organized system so you always have what you need.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Employee Reviews</h4><p>Structured performance reviews with documented history for every team member.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Technician Access App</h4><p>Techs view their own jobs, track labor, and update status from their own mobile app.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Employee Records</h4><p>Complete employment records, raise history, incident logs, and HR documentation.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Independent Shops.webp" alt="Team management" />
      </div>
    </div>
  </div>
</section>{/* TESTIMONIAL */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Employee management questions" intro="How Auto1Source helps you manage technicians, payroll, and HR — all in one place." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Build a High-Performance Team</h2>
  <p>Payroll and HR that removes the administrative burden — so you can focus on running your shop.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
    <Link href="/pricing" className="btn-outline">See Pricing</Link>
  </div>
</section>




      </div>
    </>
  );
}
