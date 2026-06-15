import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = `
/* ── HERO ── */
.page-hero {
  padding: 160px 240px 120px;
  background: linear-gradient(180deg, #04101f 0%, #071e3d 55%, #0a2a50 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 90% 70% at 50% 50%, rgba(3,70,110,0.5) 0%, transparent 70%);
  pointer-events: none;
}
.page-hero h1 {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.8px;
  color: #ffffff;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}
.page-hero h1 .r {
  color: #f53a31;
}

/* ── BADGE CHIPS ── */
.chips-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 1;
}
.chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid transparent;
  opacity: 0;
  transform: translateY(12px);
  animation: chipIn 0.5s ease forwards;
}
.chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chip-1 {
  background: rgba(245,58,49,0.12);
  border-color: rgba(245,58,49,0.45);
  color: #ff6b63;
  animation-delay: 0.1s;
}
.chip-1 .chip-dot {
  background: #f53a31;
  box-shadow: 0 0 6px 2px rgba(245,58,49,0.6);
}

.chip-2 {
  background: rgba(56,130,246,0.12);
  border-color: rgba(56,130,246,0.45);
  color: #6eaaff;
  animation-delay: 0.35s;
}
.chip-2 .chip-dot {
  background: #3882f6;
  box-shadow: 0 0 6px 2px rgba(56,130,246,0.6);
}

.chip-3 {
  background: rgba(34,211,144,0.10);
  border-color: rgba(34,211,144,0.4);
  color: #4dd9a8;
  animation-delay: 0.6s;
}
.chip-3 .chip-dot {
  background: #22d390;
  box-shadow: 0 0 6px 2px rgba(34,211,144,0.55);
}

.chip-4 {
  background: rgba(251,191,36,0.10);
  border-color: rgba(251,191,36,0.4);
  color: #fcd15a;
  animation-delay: 0.85s;
}
.chip-4 .chip-dot {
  background: #fbbf24;
  box-shadow: 0 0 6px 2px rgba(251,191,36,0.55);
}

@keyframes chipIn {
  to { opacity: 1; transform: translateY(0); }
}

/* ── FEAT ICON ── */
.feat-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: #f1f5f9;
  margin-bottom: 12px;
}

/* ── RESPONSIVE HERO ── */
@media (max-width: 900px) {
  .page-hero {
    padding: 120px 24px 80px;
  }
  .page-hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  .chip {
    font-size: 11px;
    padding: 8px 14px;
  }
}
`;

const FAQ_ITEMS = [
  { q: 'Which accounting software does Auto1Source integrate with?', a: 'Auto1Source integrates with QuickBooks Online for clean two-way sync of customers, invoices, and payments. No manual reconciliation needed.' },
  { q: 'Does it integrate with parts vendors?', a: 'Yes. Major national and regional parts suppliers integrate for one-click ordering, live pricing, and stock availability — all from inside the work order.' },
  { q: 'Can I integrate with my existing card payment processor?', a: 'Yes. Auto1Source supports multiple card processors. You can keep your current processor or switch to the built-in option for better rates.' },
  { q: 'Are there extra fees for integrations?', a: 'No. Every integration listed is included in the $79.99/mo flat price. No per-integration fees, no setup charges.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Shop Software Integrations | Auto1Source',
  description: 'Connect Auto1Source to QuickBooks and the tools that run your shop — payments, parts, accounting, all in sync.',
};

export default function Integrations() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-integrations">



{/* PAGE HERO */}
<section className="page-hero">
  <h1>Connected to the Tools<br /><span className="r">That Power Your Shop</span></h1>

  <div className="chips-row">
    <div className="chip chip-1"><span className="chip-dot"></span>No more multi tabs</div>
    <div className="chip chip-2"><span className="chip-dot"></span>No more manual entry</div>
    <div className="chip chip-3"><span className="chip-dot"></span>No more back and forth</div>
    <div className="chip chip-4"><span className="chip-dot"></span>Log in and go</div>
  </div>
</section>

{/* ACCOUNTING & BOOKKEEPING */}
<div className="integ-category">
  <h3 style={{paddingTop: '50px !important'}}>📊 Accounting & Bookkeeping</h3>
  <p>Keep your books accurate and up to date — automatically synced with every invoice and payment.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/QuickBooks1.webp" alt="QuickBooks Online" />
    <h3>QuickBooks Online</h3>
    <p>Auto-sync invoices, payments, and expenses to your QBO account.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/Quickbooks.webp" alt="QuickBooks Desktop" />
    <h3>QuickBooks Desktop</h3>
    <p>Full two-way sync with QuickBooks Desktop for on-premise accounting.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/autologo.svg" alt="Why Pay Extra" />
    <h3>Why Pay Extra</h3>
    <p>AIS built-in accounting — no third-party subscription needed.</p>
  </div>
</div>

{/* PARTS PROCUREMENT */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>🔩 Parts Procurement</h3>
  <p>Search, order, and track parts from multiple vendors — all from one screen. Zero added charges.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/AutoZone.svg" alt="AutoZone" />
    <h3>AutoZone</h3>
    <p>Access AutoZone's professional parts catalog from your dashboard.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/Advance Auto Parts.svg" alt="Advance Auto Parts" />
    <h3>Advance Auto Parts</h3>
    <p>Real-time inventory lookup and ordering directly from your work order.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/Repairlink Integration.svg" alt="RepairLink" />
    <h3>RepairLink</h3>
    <p>OEM parts ordering from dealership networks.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/NAPA Auto Parts.svg" alt="NAPA Auto Parts" />
    <h3>NAPA Auto Parts</h3>
    <p>Direct integration with NAPA's catalog for fast, accurate ordering.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/WorldPac.svg" alt="WorldPac" />
    <h3>WorldPac</h3>
    <p>Premium OE and import parts with same-day delivery integration.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/or1.webp" alt="O'Reilly Auto Parts" style={{height: '85px !important', margin: '0 auto 1px'}} />
    <h3>O'Reilly Auto Parts</h3>
    <p>Search O'Reilly's full catalog, check local availability, and order — right from your work order.</p>
  </div>
</div>

{/* TIRES & DISTRIBUTION */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>🚗 Tires & Distribution</h3>
  <p>Tire inventory, pricing, and ordering from top distributors — built right in.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/American Tire Distributor.svg" alt="American Tire Distributor" />
    <h3>American Tire Distributor</h3>
    <p>Tire inventory, pricing, and ordering built right in.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/US Auto Force.svg" alt="US Auto Force" />
    <h3>US Auto Force</h3>
    <p>Access US Auto Force's full catalog for tires and parts.</p>
  </div>
</div>

{/* REPAIR DATA & LABOR GUIDES */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>📋 Repair Data & Labor Guides</h3>
  <p>Accurate labor times and repair data built into your estimate workflow.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/AllData.svg" alt="AllData" />
    <h3>AllData</h3>
    <p>OEM repair data, labor times, and technical service bulletins.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/ProDemand.svg" alt="ProDemand" />
    <h3>ProDemand</h3>
    <p>Mitchell 1 ProDemand integration for labor guide and diagnostic data.</p>
  </div>
</div>

{/* PAYMENT PROCESSING */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>💳 Payment Processing</h3>
  <p>Accept payments in-store or remotely — fast, secure, and hassle-free.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/Stax Payments.svg" alt="Stax Payments" />
    <h3>Stax Payments</h3>
    <p>Flat-rate payment processing with no hidden fees.</p>
  </div>
  <div className="integ-card">
    <img src="/site-assets/images/Clover Payments.svg" alt="Clover Payments" />
    <h3>Clover Payments</h3>
    <p>In-store and remote payment processing with Clover terminals.</p>
  </div>
</div>

{/* TAX & COMPLIANCE */}
<div className="integ-category" style={{marginTop: '32px'}}>
  <h3>🧾 Tax & Compliance</h3>
  <p>Stay compliant with automated tax calculations — no manual work needed.</p>
</div>
<div className="integrations-grid">
  <div className="integ-card">
    <img src="/site-assets/images/Florida Dept. of Revenue.svg" alt="Florida Dept. of Revenue" />
    <h3>Florida Dept. of Revenue</h3>
    <p>Automated sales tax calculation and compliance for FL-based shops.</p>
  </div>
</div>


{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Integrations questions" intro="How Auto1Source connects with the tools and vendors you already use." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec" style={{marginTop: '80px'}}>
  <h2>Need an Integration We Don't Have?</h2>
  <p>We're constantly adding new partners. Let us know what tools you use and we'll work on connecting them.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
  </div>
</section>




      </div>
    </>
  );
}
