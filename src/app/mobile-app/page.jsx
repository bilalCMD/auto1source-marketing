import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = `

/* ════════════════════════════════
   HERO — dark navy, centered
════════════════════════════════ */
.ma-hero {
  background: linear-gradient(180deg,#04101f 0%,#071e3d 60%,#0a2a50 100%);
  text-align: center;
  padding: 148px 240px 110px;
  position: relative;
  overflow: hidden;
}
.ma-hero::before {
  content:'';
  position:absolute;inset:0;
  background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(3,70,110,.45) 0%,transparent 70%);
  pointer-events:none;
}
.ma-hero h1 {
  font-family:'Sora',sans-serif;
  font-weight:800;
  font-size:44px;
  line-height:52px;
  letter-spacing:-1px;
  color:#fff;
  margin-bottom:0;
  position:relative;z-index:1;
}
.ma-hero h1 .red {
  color:#f53a31;
  display:block;
}
.ma-hero p {
  font-family:'DM Sans',sans-serif;
  font-size:15px;
  line-height:24px;
  color:rgba(255,255,255,.6);
  max-width:480px;
  margin:16px auto 0;
  position:relative;z-index:1;
}

/* ════════════════════════════════
   SECTION 1 — white bg
   text LEFT | card RIGHT
════════════════════════════════ */
.ma-s1 {
  background:#ffffff;
  padding:90px 120px;
}
.ma-row {
  display:flex;
  align-items:center;
  gap:80px;
  max-width:1160px;
  margin:0 auto;
}
.ma-row.rev { flex-direction:row-reverse; }

/* ── text block ── */
.ma-text { flex:0 0 360px; }
.ma-text h2 {
  font-family:'Sora',sans-serif;
  font-weight:800;
  font-size:30px;
  line-height:38px;
  letter-spacing:-.5px;
  color:#111827;
  margin-bottom:12px;
}
.ma-text.white h2 { color:#ffffff; }
.ma-text p {
  font-family:'DM Sans',sans-serif;
  font-size:13px;
  line-height:21px;
  color:#7a8494;
  margin-bottom:20px;
}
.ma-text.white p { color:rgba(255,255,255,.65); }

/* checklist */
.ma-checks {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px 16px;
  list-style:none;padding:0;margin:0;
}
.ma-checks li {
  display:flex;align-items:center;gap:7px;
  font-family:'DM Sans',sans-serif;
  font-size:12.5px;font-weight:500;
  color:#374151;
}
.ma-text.white .ma-checks li { color:rgba(255,255,255,.9); }
.ck-dot {
  width:17px;height:17px;border-radius:50%;
  background:#f53a31;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;
}
.ck-dot svg { width:9px;height:9px;display:block; }

/* ── visual block ── */
.ma-visual {
  flex:1;
  display:flex;align-items:center;justify-content:center;
  position:relative;
}

/* ════════════════════════════════
   MOCK CARD — Vehicle Owner
════════════════════════════════ */
.mock {
  background:#fff;
  border-radius:18px;
  border:1.5px solid #e2e6ee;
  box-shadow:0 12px 48px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06);
  width:360px;
  font-family:'DM Sans',sans-serif;
  position:relative;
  overflow:visible;
}
.mock-inner { border-radius:18px; overflow:hidden; }

.mock-hdr {
  display:flex;align-items:center;justify-content:space-between;
  padding:16px 20px 14px;
  border-bottom:1px solid #f0f2f5;
}
.mock-hdr-title { font-weight:700;font-size:14px;color:#111; }
.mock-ais-logo {
  width:38px;height:38px;border-radius:8px;overflow:hidden;
  display:flex;align-items:center;justify-content:center;
}
.mock-ais-logo img { width:100%;height:100%;object-fit:contain; }
.mock-ais-logo-txt {
  font-family:'Sora',sans-serif;font-weight:800;font-size:9px;color:#fff;
}

/* vehicle pink box */
.mock-veh {
  margin:14px 16px 0;
  background:#fff4f3;
  border-radius:12px;
  padding:14px 16px;
}
.mock-veh-sub { font-size:11px;color:#9ca3af;margin-bottom:3px; }
.mock-veh-name { font-weight:800;font-size:14px;color:#111; }

/* line items */
.mock-lines { padding:12px 16px 0; }
.mock-li {
  display:flex;justify-content:space-between;align-items:center;
  padding:8px 0;
  border-bottom:1px solid #f3f4f6;
  font-size:13px;color:#374151;
}
.mock-li:last-child{border-bottom:none;}
.mock-li.ttl {
  font-weight:700;color:#111;
  border-top:1.5px solid #e5e7eb;
  border-bottom:none;
  padding-top:10px;margin-top:2px;
}
.mock-li-price{color:#f53a31;font-weight:600;}
.mock-li.ttl .mock-li-price{color:#111;}

/* approve btn */
.mock-btn {
  margin:12px 16px 18px;
  background:#111827;color:#fff;
  border-radius:10px;
  padding:13px;
  text-align:center;
  font-weight:700;font-size:13.5px;
}

/* rating badge */
.mock-rating {
  position:absolute;
  right:-18px;bottom:22px;
  background:#fff;
  border-radius:20px;
  padding:7px 13px;
  box-shadow:0 4px 16px rgba(0,0,0,.13);
  font-size:12px;font-weight:700;color:#111;
  display:flex;align-items:center;gap:5px;
  white-space:nowrap;
}
.star{color:#f59e0b;}

/* ════════════════════════════════
   SECTION 2 — dark navy bg
   card LEFT | text RIGHT
════════════════════════════════ */
.ma-s2 {
  background:#071e3d;
  padding:90px 120px;
}

/* jobs mock */
.mock-jobs {
  background:#fff;
  border-radius:18px;
  border:1.5px solid #e2e6ee;
  box-shadow:0 12px 48px rgba(0,0,0,.15),0 2px 8px rgba(0,0,0,.08);
  width:340px;
  font-family:'DM Sans',sans-serif;
  position:relative;
  overflow:hidden;
}
.mock-job-row {
  display:flex;align-items:center;gap:12px;
  padding:13px 20px;
  border-bottom:1px solid #f3f4f6;
}
.j-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
.j-dot.r{background:#f53a31;}
.j-dot.g{background:#10b981;}
.j-dot.y{background:#f59e0b;}
.j-veh{font-weight:700;font-size:13px;color:#111;}
.j-svc{font-size:11.5px;color:#9ca3af;margin-top:1px;}
.j-stat{font-size:12px;font-weight:600;color:#374151;margin-left:auto;white-space:nowrap;}
.j-stat.g{color:#10b981;}
.j-stat.y{color:#f59e0b;}
.mock-labor {
  display:flex;justify-content:space-between;align-items:center;
  padding:12px 20px;background:#f8f9fb;
}
.labor-lbl{font-size:12px;color:#9ca3af;}
.labor-val{font-weight:700;font-size:14px;color:#111;}

.sync-pill {
  position:absolute;
  right:-12px;bottom:18px;
  background:#f53a31;color:#fff;
  border-radius:20px;padding:6px 12px;
  font-size:11px;font-weight:700;
  box-shadow:0 4px 14px rgba(245,58,49,.45);
  white-space:nowrap;
}

/* ════════════════════════════════
   SECTION 3 — light grey bg
   text LEFT | card RIGHT
════════════════════════════════ */
.ma-s3 {
  background:#f8f9fb;
  padding:90px 120px;
}

.mock-dispatch {
  background:#fff;
  border-radius:18px;
  border:1.5px solid #e2e6ee;
  box-shadow:0 12px 48px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06);
  width:360px;
  font-family:'DM Sans',sans-serif;
  position:relative;
  overflow:hidden;
}
.mock-dispatch-alert {
  margin:12px 16px;
  background:#fff8ee;
  border-radius:10px;
  padding:11px 14px;
  font-weight:700;font-size:13px;color:#92400e;
}
.mock-dr {
  display:flex;justify-content:space-between;align-items:center;
  padding:10px 20px;border-bottom:1px solid #f3f4f6;font-size:13px;
}
.mock-dr:last-of-type{border-bottom:none;}
.mock-dl{color:#9ca3af;}
.mock-dv{font-weight:600;color:#111;}

.gps-pill {
  position:absolute;
  left:16px;top:-14px;
  background:#fff;
  border-radius:20px;padding:6px 12px;
  font-size:11px;font-weight:700;color:#111;
  box-shadow:0 4px 14px rgba(0,0,0,.12);
  display:flex;align-items:center;gap:6px;
}
.gps-dot{width:8px;height:8px;border-radius:50%;background:#10b981;}

/* ════════════════════════════════
   EVERYTHING CONNECTED SECTION
════════════════════════════════ */
.ma-connected {
  background:#f0f4f8;
  padding:48px 120px;
}
.ma-connected-inner {
  display:flex;
  align-items:center;
  gap:48px;
  max-width:1160px;
  margin:0 auto;
}
.ma-conn-left { flex:0 0 220px; }
.ma-conn-left h2 {
  font-family:'Sora',sans-serif;
  font-weight:800;
  font-size:19px;
  line-height:26px;
  letter-spacing:-.3px;
  color:#111827;
  margin-bottom:6px;
}
.ma-conn-left p {
  font-family:'DM Sans',sans-serif;
  font-size:11.5px;
  line-height:18px;
  color:#7a8494;
  margin-bottom:16px;
}
.ma-conn-btn {
  display:inline-flex;align-items:center;
  background:#1a2d5a;color:#fff;
  padding:9px 18px;border-radius:8px;
  font-family:'DM Sans',sans-serif;
  font-weight:600;font-size:12.5px;
  border:none;cursor:pointer;
  box-shadow:0 4px 14px rgba(26,45,90,.3);
  transition:opacity .2s;
}
.ma-conn-btn:hover{opacity:.88;}

.ma-conn-feats {
  flex:1;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px 32px;
}
.conn-feat {
  display:flex;align-items:center;gap:10px;
}
.conn-ico {
  width:30px;height:30px;border-radius:8px;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;font-size:14px;
}
.conn-ico.green-light { background:#d1fae5; }
.conn-ico.blue-light  { background:#dbeafe; }
.conn-ico.orange-light{ background:#fef3c7; }

.conn-ico-check {
  width:17px;height:17px;border-radius:50%;
  background:#10b981;
  display:flex;align-items:center;justify-content:center;
}
.conn-ico-check svg{width:9px;height:9px;display:block;}

.conn-feat h4 {
  font-family:'Sora',sans-serif;
  font-weight:700;font-size:12px;color:#111;
  margin-bottom:1px;
}
.conn-feat p {
  font-family:'DM Sans',sans-serif;
  font-size:11px;line-height:16px;color:#7a8494;
}

/* ════════════════════════════════
   CTA
════════════════════════════════ */
.ma-cta {
  background:#03466e;
  padding:80px 0;
  text-align:center;
}
.ma-cta h2 {
  font-family:'Sora',sans-serif;
  font-weight:800;font-size:38px;
  letter-spacing:-.8px;color:#fff;margin-bottom:16px;
}
.ma-cta p {
  font-family:'DM Sans',sans-serif;
  font-size:17px;line-height:28px;
  color:rgba(255,255,255,.8);max-width:480px;margin:0 auto 32px;
}
.ma-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
.btn-wh {
  background:#fff;color:#03466e;padding:14px 28px;border-radius:10px;
  font-family:'DM Sans',sans-serif;
  font-weight:700;font-size:14.7px;
  box-shadow:0 4px 16px rgba(0,0,0,.08);border:none;cursor:pointer;
}
.btn-ol {
  border:2px solid rgba(255,255,255,.4);background:transparent;color:#fff;
  padding:12px 28px;border-radius:10px;
  font-family:'DM Sans',sans-serif;
  font-weight:600;font-size:14.7px;cursor:pointer;
}

/* responsive */
@media(max-width:1100px){
  .ma-s1,.ma-s2,.ma-s3,.ma-connected{padding:60px 40px;}
  .ma-row,.ma-connected-inner{gap:48px;}
  .ma-hero{padding:130px 40px 90px;}
}
@media(max-width:800px){
  .ma-row,.ma-row.rev,.ma-connected-inner{flex-direction:column;}
  .ma-text{flex:none;width:100%;}
  .ma-visual{flex:none;}
  .ma-conn-left{flex:none;width:100%;}
  .ma-checks{grid-template-columns:1fr;}
  .ma-conn-feats{grid-template-columns:1fr;}
  .mock,.mock-jobs,.mock-dispatch{width:100%;max-width:360px;}
  .ma-hero{padding:120px 24px 80px;}
  .ma-hero h1{font-size:32px;line-height:40px;}
}
`;

const FAQ_ITEMS = [
  { q: 'Is there a separate app for technicians?', a: 'Yes. The technician app gives techs clock-in, job-status updates, photo uploads, and labor time tracking from their own phone — without giving them full system access.' },
  { q: 'Is there a separate app for shop owners?', a: 'Yes. The owner/manager app provides live dashboards, approval workflows, and reporting on the go — review estimates and see daily revenue from anywhere.' },
  { q: 'Is the customer app branded with my shop?', a: "Yes. The customer-facing app shows your shop's name and logo. Customers see your brand every time they open the app — not Auto1Source's." },
  { q: 'Do mobile apps cost extra?', a: 'No. All apps — technician, owner, and customer-facing — are included at $79.99/mo. No per-user app fees, no separate licensing.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Shop Management App for iOS & Android | Auto1Source',
  description: 'Run your auto shop from your phone. Auto1Source mobile app lets owners and techs work on the go.',
};

export default function MobileApp() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-mobileapp">



{/* ════════════════════════════════
     HERO
════════════════════════════════ */}
<section className="ma-hero">
  <h1>Built for Every Role In<span className="red">the Shop</span></h1>
  <p>Everyone stays connected. Everyone stays accountable. Three dedicated apps keep your entire operation aligned — from the front desk to the road.</p>
</section>

{/* ════════════════════════════════
     SECTION 1 — Vehicle Owner App
     white bg | text LEFT | card RIGHT
════════════════════════════════ */}
<section className="ma-s1">
  <div className="ma-row">

    {/* TEXT */}
    <div className="ma-text">
      <h2>Your Customers Stay In Control</h2>
      <p>Convenience builds trust. The Vehicle Owner App lets customers review estimates, approve repairs, make payments, and receive service reminders — all from their phone without calling the shop.</p>
      <ul className="ma-checks">
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Review estimates digitally</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Approve or decline services</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Pay invoices from phone</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Receive service reminders</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>2-way communication</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Vehicle history access</li>
      </ul>
    </div>

    {/* CARD */}
    <div className="ma-visual">
      <div style={{position: 'relative', display: 'inline-block'}}>
        <div className="mock">
          <div className="mock-inner">
            <div className="mock-hdr">
              <span className="mock-hdr-title">My Vehicle</span>
              <div className="mock-ais-logo">
                <img src="/site-assets/images/logodesktop.svg" alt="AIS" />
                <span className="mock-ais-logo-txt" style={{display: 'none'}}>A1S</span>
              </div>
            </div>
            <div className="mock-veh">
              <div className="mock-veh-sub">2021 Toyota Camry XSE</div>
              <div className="mock-veh-name">New Estimate Ready</div>
            </div>
            <div className="mock-lines">
              <div className="mock-li">
                <span>Oil Service</span>
                <span className="mock-li-price">$139.99</span>
              </div>
              <div className="mock-li">
                <span>Brakes</span>
                <span className="mock-li-price">$629.85</span>
              </div>
              <div className="mock-li ttl">
                <span>Total</span>
                <span className="mock-li-price" style={{color: '#111827'}}>$769.84</span>
              </div>
            </div>
            <div className="mock-btn">Approve & Pay</div>
          </div>
        </div>
        <div className="mock-rating">
          <span className="star">⭐</span> 4.9 App Rating
        </div>
      </div>
    </div>

  </div>
</section>

{/* ════════════════════════════════
     SECTION 2 — Technician App
     DARK navy bg | card LEFT | text RIGHT
════════════════════════════════ */}
<section className="ma-s2">
  <div className="ma-row rev">

    {/* CARD */}
    <div className="ma-visual">
      <div style={{position: 'relative', display: 'inline-block'}}>
        <div className="mock-jobs">
          <div className="mock-hdr" style={{background: '#fff'}}>
            <span className="mock-hdr-title">My Jobs</span>
            <div className="mock-ais-logo">
              <img src="/site-assets/images/logodesktop.svg" alt="AIS" />
              <span className="mock-ais-logo-txt" style={{display: 'none'}}>A1S</span>
            </div>
          </div>
          <div className="mock-job-row">
            <div className="j-dot r"></div>
            <div style={{flex: '1'}}>
              <div className="j-veh">Ford F-150</div>
              <div className="j-svc">Transmission Flush</div>
            </div>
            <div className="j-stat">1:24 ▶</div>
          </div>
          <div className="mock-job-row">
            <div className="j-dot g"></div>
            <div style={{flex: '1'}}>
              <div className="j-veh">Toyota Camry</div>
              <div className="j-svc">Oil + Filter</div>
            </div>
            <div className="j-stat g">Done ✓</div>
          </div>
          <div className="mock-job-row" style={{borderBottom: 'none'}}>
            <div className="j-dot y"></div>
            <div style={{flex: '1'}}>
              <div className="j-veh">Honda Accord</div>
              <div className="j-svc">Brake Inspection</div>
            </div>
            <div className="j-stat y">Wait</div>
          </div>
          <div className="mock-labor">
            <span className="labor-lbl">Labor Today</span>
            <span className="labor-val">4h 32m</span>
          </div>
        </div>
        <div className="sync-pill">⚡ Real-Time Sync</div>
      </div>
    </div>

    {/* TEXT */}
    <div className="ma-text white">
      <h2>Accountability Built Into Every Job</h2>
      <p>The Technician App improves productivity and accountability. Techs see exactly what they're responsible for, track their own labor time, and update job status in real time — no paper, no guesswork.</p>
      <ul className="ma-checks">
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>View assigned work orders</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Track labor time per job</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Update job status live</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Access job details & notes</li>
      </ul>
    </div>

  </div>
</section>

{/* ════════════════════════════════
     SECTION 3 — Tow Truck Driver App
     light grey bg | text LEFT | card RIGHT
════════════════════════════════ */}
<section className="ma-s3">
  <div className="ma-row">

    {/* TEXT */}
    <div className="ma-text">
      <h2>Shop and Road — Always in Sync</h2>
      <p>The Tow Truck Driver App keeps your roadside team aligned with the shop. Drivers receive dispatch alerts, view pickup details, and update delivery status — keeping operations smooth from pickup to bay.</p>
      <ul className="ma-checks">
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Instant dispatch notifications</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>View full pickup details</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Update delivery status</li>
        <li><span className="ck-dot"><svg viewbox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Communicate with shop</li>
      </ul>
    </div>

    {/* CARD */}
    <div className="ma-visual">
      <div style={{position: 'relative', display: 'inline-block', paddingTop: '22px'}}>
        <div className="gps-pill">
          <span className="gps-dot"></span> GPS Tracking
        </div>
        <div className="mock-dispatch">
          <div className="mock-hdr">
            <span className="mock-hdr-title">Dispatch</span>
            <div className="mock-ais-logo">
              <img src="/site-assets/images/logodesktop.svg" alt="AIS" />
              <span className="mock-ais-logo-txt" style={{display: 'none'}}>A1S</span>
            </div>
          </div>
          <div className="mock-dispatch-alert">🔔 New Pickup Request!</div>
          <div className="mock-dr">
            <span className="mock-dl">Address</span>
            <span className="mock-dv">142 Palmetto Blvd</span>
          </div>
          <div className="mock-dr">
            <span className="mock-dl">Vehicle</span>
            <span className="mock-dv">2018 BMW 3 Series</span>
          </div>
          <div className="mock-dr" style={{borderBottom: 'none'}}>
            <span className="mock-dl">Drop Off</span>
            <span className="mock-dv">Bay 3</span>
          </div>
          <div className="mock-btn" style={{margin: '12px 16px 18px'}}>Accept Dispatch</div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ════════════════════════════════
     EVERYTHING CONNECTED
     white bg | heading+btn LEFT | 2x2 grid RIGHT
════════════════════════════════ */}
<section className="ma-connected">
  <div className="ma-connected-inner">

    {/* LEFT */}
    <div className="ma-conn-left">
      <h2>Everything Connected.<br />Everyone Accountable.</h2>
      <p>Three apps. One platform. Real-time sync across every role.</p>
      <SignUpButton className="ma-conn-btn">Get Started →</SignUpButton>
    </div>

    {/* RIGHT 2x2 */}
    <div className="ma-conn-feats">

      {/* iOS & Android — green check */}
      <div className="conn-feat">
        <div className="conn-ico green-light">
          <div className="conn-ico-check">
            <svg viewbox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </div>
        <div>
          <h4>iOS & Android</h4>
          <p>Available on both platforms</p>
        </div>
      </div>

      {/* Real-Time Sync — blue icon */}
      <div className="conn-feat">
        <div className="conn-ico blue-light" style={{fontSize: '20px'}}>🔄</div>
        <div>
          <h4>Real-Time Sync</h4>
          <p>All data updates instantly</p>
        </div>
      </div>

      {/* Role-Based Access — green check */}
      <div className="conn-feat">
        <div className="conn-ico green-light">
          <div className="conn-ico-check">
            <svg viewbox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </div>
        <div>
          <h4>Role-Based Access</h4>
          <p>Each user sees only their view</p>
        </div>
      </div>

      {/* Push Notifications — orange/yellow bell */}
      <div className="conn-feat">
        <div className="conn-ico orange-light" style={{fontSize: '20px'}}>🔔</div>
        <div>
          <h4>Push Notifications</h4>
          <p>Instant alerts for every update</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ════════════════════════════════
     CTA
════════════════════════════════ */}

{/* TESTIMONIALS */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Mobile app questions" intro="How the Auto1Source mobile apps support shop owners, technicians, and customers." items={FAQ_ITEMS} />

<section className="ma-cta">
  <h2>Ready to Go Mobile?</h2>
  <p>Available on iOS and Android. Download now and run your shop from anywhere.</p>
  <div className="ma-cta-btns">
    <SignUpButton className="btn-wh">Get Started →</SignUpButton>
    <Link href="/shopflow" className="btn-ol">See How It Works</Link>
  </div>
</section>




      </div>
    </>
  );
}
