'use client';

import React from 'react';
import SignUpButton from '@/components/SignUpButton';

const PAGE_CSS = `
:root{
  --navy:#1a2d5a;
  --teal:#03466e;
  --red:#f53a31;
  --dark:#111827;
  --muted:#6b7280;
  --border:#e5e7eb;
  --light:#f0f3f8;
  --fh:'Sora',sans-serif;
  --fb:'DM Sans',sans-serif;
}

.pr-hero{
  background:linear-gradient(180deg,#04101f 0%,#071e3d 60%,#0a2a50 100%);
  text-align:center;padding:148px 240px 100px;
  position:relative;overflow:hidden;
}
.pr-hero::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(3,70,110,.45) 0%,transparent 70%);
  pointer-events:none;
}
.pr-hero h1{font-family:var(--fh);font-weight:800;font-size:46px;line-height:54px;letter-spacing:-1px;color:#fff;margin-bottom:14px;position:relative;z-index:1;}
.pr-hero h1 .red{color:#f53a31;}
.pr-hero p{font-family:var(--fb);font-size:15px;line-height:24px;color:rgba(255,255,255,.6);max-width:480px;margin:0 auto;position:relative;z-index:1;}

.pr-plans-wrap{background:var(--light);padding:60px 80px;}
.pr-plans-title{font-family:var(--fh);font-weight:800;font-size:22px;color:var(--dark);margin-bottom:4px;}
.pr-plans-sub{font-family:var(--fb);font-size:13px;color:var(--muted);margin-bottom:24px;}
.pr-plans-box{background:#fff;border-radius:20px;box-shadow:0 4px 32px rgba(0,0,0,.07);display:grid;grid-template-columns:1fr 1fr;overflow:hidden;}
.pr-plans-box .pr-divider{width:1px;background:var(--border);margin:28px 0;}
.pr-card-dark{background:linear-gradient(160deg,#0d1f3c 0%,#152646 50%,#1a2d5a 100%);padding:28px 28px 32px;position:relative;overflow:hidden;}
.pr-card-dark::after{content:'';position:absolute;top:-80px;right:-80px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(245,58,49,.12),transparent 65%);pointer-events:none;}
.pr-badge{display:inline-block;background:var(--red);color:#fff;font-family:var(--fb);font-weight:700;font-size:10px;padding:4px 12px;border-radius:20px;margin-bottom:14px;letter-spacing:.5px;text-transform:uppercase;}
.pr-brand-label{font-family:var(--fb);font-size:10px;font-weight:600;color:rgba(255,255,255,.45);letter-spacing:.8px;text-transform:uppercase;margin-bottom:6px;}
.pr-card-dark h3{font-family:var(--fh);font-weight:800;font-size:22px;color:#fff;margin-bottom:8px;}
.pr-card-dark .pr-desc{font-family:var(--fb);font-size:12.5px;color:rgba(255,255,255,.6);line-height:19px;margin-bottom:12px;}
.pr-save{font-family:var(--fb);font-size:12px;font-weight:600;color:rgba(255,255,255,.65);margin-bottom:12px;}
.pr-price-block{display:flex;align-items:flex-end;gap:0;margin-bottom:4px;}
.pr-cur{font-family:var(--fh);font-weight:800;font-size:26px;color:#fff;line-height:1;align-self:flex-start;padding-top:10px;}
.pr-num{font-family:var(--fh);font-weight:800;font-size:64px;color:#fff;line-height:1;letter-spacing:-2px;}
.pr-dec{font-family:var(--fh);font-weight:800;font-size:26px;color:#fff;line-height:1;align-self:flex-start;padding-top:10px;}
.pr-mo{font-family:var(--fb);font-size:13px;color:rgba(255,255,255,.55);padding-bottom:10px;margin-left:6px;}
.pr-comp-txt{font-family:var(--fb);font-size:11px;color:rgba(255,255,255,.45);margin-bottom:20px;}
.pr-btn-red{width:100%;background:var(--red);color:#fff;border:none;border-radius:10px;padding:14px;font-family:var(--fb);font-weight:700;font-size:14px;cursor:pointer;transition:opacity .2s;box-shadow:0 4px 18px rgba(245,58,49,.45);margin-bottom:20px;}
.pr-btn-red:hover{opacity:.88;}
.pr-list-label{font-family:var(--fb);font-size:10.5px;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;margin-bottom:10px;}
.pr-feat-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:7px;}
.pr-feat-list li{display:flex;align-items:center;gap:8px;font-family:var(--fb);font-size:12px;color:rgba(255,255,255,.8);}
.pr-feat-list li .ck{width:16px;height:16px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.pr-feat-list li .ck svg{width:8px;height:8px;display:block;}
.pr-card-light{padding:28px 28px 32px;display:flex;flex-direction:column;}
.pr-card-light .pr-brand-label{color:var(--muted);}
.pr-card-light h3{font-family:var(--fh);font-weight:800;font-size:22px;color:var(--dark);margin-bottom:8px;}
.pr-card-light .pr-desc{font-family:var(--fb);font-size:12.5px;color:var(--muted);line-height:19px;margin-bottom:14px;}
.pr-pill-tag{display:inline-block;background:#e8f0f7;color:#4b6cb7;font-family:var(--fb);font-weight:600;font-size:11px;padding:5px 14px;border-radius:20px;margin-bottom:14px;}
.pr-card-light .pr-price-block{align-items:flex-end;}
.pr-card-light .pr-cur{color:var(--dark);}
.pr-card-light .pr-num{color:var(--dark);}
.pr-card-light .pr-dec{color:var(--dark);}
.pr-card-light .pr-mo{color:var(--muted);}
.pr-card-light .pr-comp-txt{color:var(--muted);}
.pr-btn-navy{width:100%;background:var(--navy);color:#fff;border:none;border-radius:10px;padding:14px;font-family:var(--fb);font-weight:700;font-size:14px;cursor:pointer;transition:opacity .2s;margin-bottom:20px;}
.pr-btn-navy:hover{opacity:.88;}
.pr-list-label-dark{font-family:var(--fb);font-size:10.5px;font-weight:700;color:var(--muted);letter-spacing:.5px;text-transform:uppercase;margin-bottom:10px;}
.pr-multi-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;flex:1;}
.pr-multi-list li{display:flex;align-items:center;gap:8px;font-family:var(--fb);font-size:12px;color:var(--dark);}
.pr-multi-list li .ck{width:16px;height:16px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.pr-multi-list li .ck svg{width:8px;height:8px;display:block;}

.pr-compare-wrap{background:#f8f9fb;padding:80px 80px;overflow:visible;}
.pr-compare-hdr{text-align:center;margin-bottom:40px;}
.pr-compare-hdr h2{font-family:var(--fh);font-weight:800;font-size:30px;letter-spacing:-.5px;color:var(--dark);margin-bottom:8px;}
.pr-compare-hdr p{font-family:var(--fb);font-size:13.5px;color:var(--muted);line-height:20px;}
.tbl-wrap{position:relative;border-radius:16px;box-shadow:0 2px 16px rgba(0,0,0,.06);overflow:visible;}
@media (max-width:900px){.tbl-wrap{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch;}}

.pr-table{width:100%;border-collapse:separate;border-spacing:0;font-family:var(--fb);font-size:13px;background:#fff;border-radius:16px;}
.pr-table thead tr.tr-brand th{padding:10px 16px 4px;font-size:11px;font-weight:700;text-align:center;border-bottom:none;}
.pr-table thead tr.tr-cols th{padding:10px 16px 12px;font-size:12px;text-align:center;font-weight:700;}
.pr-table thead tr.tr-brand th.th-empty{background:#fff;}
.pr-table thead tr.tr-brand th.th-ais-brand{background:#f53a31;color:#fff;}
.pr-table thead tr.tr-brand th.th-comp-brand{background:#1a2d5a;color:#fff;}
.pr-table thead tr.tr-brand th:first-child{text-align:left;background:#fff;}
.pr-table thead tr.tr-cols th.th-ais-col{background:#1a2d5a;color:#fff;}
.pr-table thead tr.tr-cols th.th-comp-col{background:#1a2d5a;color:#fff;}
.pr-table thead tr.tr-cols th:first-child{text-align:left;background:#fff;font-size:11px;color:var(--muted);font-weight:600;}
.th-name{font-family:var(--fh);font-size:13px;font-weight:800;display:block;}
.th-price{font-size:11px;opacity:.8;font-weight:500;}

.pr-table tbody tr td{padding:10px 16px;color:var(--dark);border-bottom:1px solid #f3f4f6;vertical-align:middle;background:#fff;}
.pr-table tbody tr td:first-child{font-size:13px;color:#374151;}
.pr-table tbody tr td:not(:first-child){text-align:center;}
.pr-table tbody tr:last-child td{border-bottom:none;}
.td-ais{background:#fef9f9 !important;}
.tr-sub td{background:#f3f4f6 !important;font-weight:700;font-size:13px;border-top:1.5px solid var(--border);border-bottom:1.5px solid var(--border);padding:12px 16px;}
.tr-sub .td-ais{background:#fff0ef !important;}
.price-ais{color:var(--red);font-weight:700;}
.price-comp{color:var(--muted);font-weight:700;}
.price-dash{color:var(--muted);}
.tr-bold td{font-weight:700;}
.tr-bold .td-ais{font-weight:700;}
.ic-yes{color:#00b893;font-size:15px;}
.ic-no{color:#d1d5db;font-size:13px;}
.ic-dash{color:#9ca3af;font-size:14px;}
.hidden-txt{font-style:italic;color:var(--red);font-size:12px;font-weight:600;}
.annual-range{color:var(--red);font-weight:700;}

/* ══════════════════════════════════════════════════════════════
   STICKY HEADER CLONE — JS-powered floating header
   ══════════════════════════════════════════════════════════════ */
.sticky-header-clone{
  position:fixed;
  top:80px;
  left:0;
  right:0;
  z-index:999;
  display:none;
  pointer-events:none;
}
.sticky-header-clone.is-visible{display:block;}
.sticky-header-clone-inner{
  position:relative;
  box-sizing:border-box;
  margin:0;
}
.sticky-header-clone table{
  width:100%;
  border-collapse:separate;
  border-spacing:0;
  font-family:var(--fb);
  table-layout:fixed;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
  background:#fff;
}
.sticky-header-clone th{padding:10px 16px;font-weight:700;text-align:center;}
.sticky-header-clone .tr-brand th.th-empty{background:#fff;}
.sticky-header-clone .tr-brand th.th-ais-brand{background:#f53a31;color:#fff;font-size:11px;padding:10px 16px 4px;}
.sticky-header-clone .tr-brand th.th-comp-brand{background:#1a2d5a;color:#fff;font-size:11px;padding:10px 16px 4px;}
.sticky-header-clone .tr-cols th.th-ais-col{background:#1a2d5a;color:#fff;font-size:12px;padding:10px 16px 12px;}
.sticky-header-clone .tr-cols th.th-comp-col{background:#1a2d5a;color:#fff;font-size:12px;padding:10px 16px 12px;}
.sticky-header-clone .tr-cols th:first-child{background:#fff;color:#000;font-size:18px;font-weight:600;text-align:left;padding:10px 16px 12px;}
.sticky-header-clone .tr-brand th:first-child{background:#fff;}
.sticky-header-clone .th-name{font-family:var(--fh);font-size:13px;font-weight:800;display:block;}
.sticky-header-clone .th-price{font-size:11px;opacity:.8;font-weight:500;}
@media (max-width:1100px){.sticky-header-clone{top:72px;}}
@media (max-width:900px){.sticky-header-clone{display:none !important;}}

.pr-gye-wrap{background:#fff;padding:80px 80px;text-align:center;}
.pr-gye-wrap h2{font-family:var(--fh);font-weight:800;font-size:28px;color:var(--dark);margin-bottom:8px;}
.pr-gye-wrap h2 .red{color:var(--red);}
.pr-gye-wrap > p{font-family:var(--fb);font-size:13.5px;color:var(--muted);margin-bottom:48px;line-height:22px;}
.pr-gye-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-bottom:0;}
.pr-gye-item{padding:24px 20px;text-align:center;border-right:1px solid var(--border);border-bottom:1px solid var(--border);}
.pr-gye-item:nth-child(4n){border-right:none;}
.pr-gye-item:nth-last-child(-n+4){border-bottom:none;}
.pr-gye-ico{font-size:28px;margin-bottom:10px;display:block;color:var(--red);}
.pr-gye-ico-wrap{width:52px;height:52px;border-radius:12px;background:#fff5f4;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px;}
.pr-gye-item h4{font-family:var(--fh);font-weight:700;font-size:13px;color:var(--dark);margin-bottom:4px;}
.pr-gye-item p{font-family:var(--fb);font-size:12px;color:var(--muted);line-height:18px;}

.pr-faq-wrap{background:#fff;padding:80px 80px;display:flex;gap:60px;align-items:flex-start;}
.pr-faq-left{flex:0 0 320px;}
.pr-faq-left h2{font-family:var(--fh);font-weight:800;font-size:28px;line-height:36px;letter-spacing:-.4px;color:var(--dark);margin-bottom:10px;}
.pr-faq-left p{font-family:var(--fb);font-size:13px;color:var(--muted);line-height:20px;}
.pr-faq-right{flex:1;}
.faq-item{border:1px solid var(--border);border-radius:12px;margin-bottom:10px;overflow:hidden;background:#fff;}
.faq-q{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;cursor:pointer;font-family:var(--fb);font-weight:600;font-size:13.5px;color:var(--dark);gap:12px;}
.faq-icon-btn{width:26px;height:26px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0;line-height:1;transition:transform 0.2s;}
.faq-icon-btn::before{content:"+";}
.faq-item.open .faq-icon-btn::before{content:"−";}
.faq-item.open .faq-icon-btn{background:#111827;transform:rotate(0);}

.faq-a{display:none;padding:14px 18px 16px;font-family:var(--fb);font-size:13px;color:var(--muted);line-height:20px;}
.faq-item.open .faq-a{display:block;}
.faq-item.open .faq-q{border-bottom:1px solid var(--border);}

.pr-cta-wrap{background:linear-gradient(169deg,#04101f,#071e3d 55%,#041529);padding:80px 100px;text-align:center;}
.pr-cta-wrap h2{font-family:var(--fh);font-weight:800;font-size:32px;letter-spacing:-.7px;color:#fff;margin-bottom:12px;line-height:40px;}
.pr-cta-wrap h2 .red{color:var(--red);}
.pr-cta-wrap p{font-family:var(--fb);font-size:15px;line-height:24px;color:rgba(255,255,255,.7);max-width:500px;margin:0 auto 32px;}
.pr-cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
.btn-cta-wh{background:#fff;color:var(--navy);padding:13px 26px;border-radius:10px;font-family:var(--fb);font-weight:700;font-size:14px;border:none;cursor:pointer;}
.btn-cta-ol{border:2px solid rgba(255,255,255,.35);background:transparent;color:#fff;padding:11px 26px;border-radius:10px;font-family:var(--fb);font-weight:600;font-size:14px;cursor:pointer;}

@media(max-width:1100px){
  .pr-hero{padding:130px 60px 80px;}
  .pr-plans-wrap,.pr-compare-wrap,.pr-gye-wrap,.pr-faq-wrap,.pr-cta-wrap{padding-left:40px;padding-right:40px;}
}
@media(max-width:900px){
  .pr-plans-box{grid-template-columns:1fr;}
  .pr-gye-grid{grid-template-columns:repeat(2,1fr);}
  .pr-faq-wrap{flex-direction:column;gap:32px;}
  .pr-faq-left{flex:none;}
}
@media(max-width:600px){
  .pr-hero{padding:120px 20px 70px;}.pr-hero h1{font-size:30px;line-height:38px;}
  .pr-plans-wrap,.pr-compare-wrap,.pr-gye-wrap,.pr-faq-wrap,.pr-cta-wrap{padding:48px 20px;}
  .pr-gye-grid{grid-template-columns:repeat(2,1fr);}
}
`;

export default function PricingBody() {
  
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="page-pricing">



{/* STICKY HEADER CLONE - JS controlled */}
<div className="sticky-header-clone" id="stickyHeaderClone" aria-hidden="true">
  <div className="sticky-header-clone-inner" id="stickyHeaderInner">
    <table id="stickyHeaderTable">
      <thead>
        <tr className="tr-brand">
          <th className="th-empty"></th>
          <th className="th-ais-brand">AutoSource</th>
          <th className="th-comp-brand" colSpan="3">Other Competitors</th>
        </tr>
        <tr className="tr-cols">
          <th>Features</th>
          <th className="th-ais-col"><span className="th-name">Single Package</span><span className="th-price">$79.99/mo</span></th>
          <th className="th-comp-col"><span className="th-name">Basic</span><span className="th-price">$179/mo</span></th>
          <th className="th-comp-col"><span className="th-name">Clever</span><span className="th-price">$292/mo</span></th>
          <th className="th-comp-col"><span className="th-name">Genius</span><span className="th-price">$427/mo</span></th>
        </tr>
      </thead>
    </table>
  </div>
</div>

<section className="pr-hero">
  <h1>Simple Pricing. <span className="red">Real Savings.</span></h1>
  <p>One price. Every feature. No tiers, no add-on fees, no per-user charges.<br />See how Auto1Source compares to what you're probably paying now.</p>
</section>

<section className="pr-plans-wrap">
  <div className="pr-plans-title">Plans & Pricing</div>
  <div className="pr-plans-sub">One flat price. Every feature included. No tiers, no add-ons, no per user fees.</div>
  <div className="pr-plans-box">
    <div className="pr-card-dark">
      <div className="pr-badge">MOST POPULAR</div>
      <div className="pr-brand-label">AUTO1SOURCE</div>
      <h3>Single Shop</h3>
      <p className="pr-desc">Everything your shop needs — fully connected. No limits, no tiers, no feature gates.</p>
      <div className="pr-save">Save up to $395/mo vs competitors</div>
      <div className="pr-price-block"><span className="pr-cur">$</span><span className="pr-num">79</span><span className="pr-dec">.99</span><span className="pr-mo">/month</span></div>
      <p className="pr-comp-txt">Competitors charge $179 – $427/mo for similar features</p>
      <SignUpButton className="pr-btn-red">Get Started →</SignUpButton>
      <div className="pr-list-label">EVERYTHING INCLUDED AT $79.99</div>
      <ul className="pr-feat-list">
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>2-Way Text & Email</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Unlimited Quotes & Invoices</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Shop Workflow & Reporting</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Integrated Payments (Lowest Rates)</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Parts Lookup & Ordering</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Mobile Apps for Techs</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Digital Vehicle Inspections</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Time Clocks & Inventory</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Customizable Workflow</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>QuickBooks Online & Desktop</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>E-Signatures</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Coupons & Labor Guides</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Vehicle Lookup & Quick Ref Guides</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Audit Logs & Preferred Parts Brands</li>
      </ul>
    </div>
    <div className="pr-card-light">
      <div className="pr-brand-label">AUTO1SOURCE</div>
      <h3>Multi-Shop</h3>
      <p className="pr-desc">All features included per location. Centralized reporting, standardized operations across every store.</p>
      <div className="pr-pill-tag">Transparent per-shop pricing</div>
      <div className="pr-price-block"><span className="pr-cur">$</span><span className="pr-num">129</span><span className="pr-dec">.99</span><span className="pr-mo">/shop/month</span></div>
      <p className="pr-comp-txt">Competitors hide multi-shop pricing entirely</p>
      <SignUpButton className="pr-btn-navy">Get Started →</SignUpButton>
      <div className="pr-list-label-dark">EVERYTHING IN SINGLE SHOP, PLUS</div>
      <ul className="pr-multi-list">
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>All Single Shop features included</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Centralized reporting across locations</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Cross-location performance tracking</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Standardized workflows & labor pricing</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Unified payroll management</li>
        <li><span className="ck"><svg viewbox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>Transparent pricing — no secret quotes</li>
      </ul>
    </div>
  </div>
</section>

<section className="pr-compare-wrap">
  <div className="pr-compare-hdr">
    <h2>One Price. Every Feature. No Surprises.</h2>
    <p>See exactly what you get at $79.99/mo vs what competitors charge<br />across 3 separate tiers.</p>
  </div>
  <div className="tbl-wrap" id="tblWrap">
  <table className="pr-table" id="prTable">
    <thead>
      <tr className="tr-brand">
        <th className="th-empty"></th>
        <th className="th-ais-brand" colSpan="1">AutoSource</th>
        <th className="th-comp-brand" colSpan="3">Other Competitors</th>
      </tr>
      <tr className="tr-cols">
        <th style={{background: '#fff', color: 'black', fontSize: '24px', fontWeight: '600', textAlign: 'left', padding: '10px 16px'}}>Features</th>
        <th className="th-ais-col"><span className="th-name">Single Package</span><span className="th-price">$79.99/mo</span></th>
        <th className="th-comp-col"><span className="th-name">Basic</span><span className="th-price">$179/mo</span></th>
        <th className="th-comp-col"><span className="th-name">Clever</span><span className="th-price">$292/mo</span></th>
        <th className="th-comp-col"><span className="th-name">Genius</span><span className="th-price">$427/mo</span></th>
      </tr>
    </thead>
    <tbody>
      <tr><td>2-Way Text & Email</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Unlimited Quotes & Invoices</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Reporting</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Shop Workflow</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Integrated Payments</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Parts Lookup & Ordering</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Mobile Apps for Techs</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>RepairLink Integration</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr className="tr-sub"><td>Price for above features</td><td className="td-ais"><span className="price-ais">$79.99</span></td><td><span className="price-comp">$179</span></td><td><span className="price-dash">—</span></td><td><span className="price-dash">—</span></td></tr>
      <tr><td>Digital Vehicle Inspections</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Time Clocks</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Inventory Management</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Customizable Workflow</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>QuickBooks Online Integration</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>QuickBooks Desktop Integration*</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>E-Signatures*</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr className="tr-sub"><td>Price for above features</td><td className="td-ais"><span className="price-ais">$79.99</span></td><td><span className="price-dash">—</span></td><td><span className="price-comp">$292</span></td><td><span className="price-dash">—</span></td></tr>
      <tr><td>Coupons</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Labor Guides</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Vehicle Lookup</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Quick Reference Guides</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Audit Logs</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Preferred Parts Brands</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr><td>Lowest Payment Rates</td><td className="td-ais"><span className="ic-yes">✓</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-no">✕</span></td><td><span className="ic-yes">✓</span></td></tr>
      <tr className="tr-sub"><td>Price for ALL features</td><td className="td-ais"><span className="price-ais">$79.99</span></td><td><span className="price-dash">—</span></td><td><span className="price-dash">—</span></td><td><span className="price-comp">$427</span></td></tr>
      <tr className="tr-bold"><td>Multi-Shop</td><td className="td-ais" style={{fontWeight: '700'}}>$129.99/shop</td><td colSpan="3" style={{textAlign: 'center'}}><span style={{fontStyle: 'italic', color: 'var(--red)', fontSize: '12px', fontWeight: '600'}}>"A big secret"</span></td></tr>
      <tr className="tr-bold" style={{background: '#f8f9fb'}}><td><strong>Annual Cost (all features)</strong></td><td className="td-ais"><strong>$959.88</strong></td><td colSpan="3" style={{textAlign: 'center'}}><span className="annual-range">$2,148 – $5,124</span></td></tr>
    </tbody>
  </table>
  </div>
</section>

<section className="pr-gye-wrap">
  <h2><span className="red">$79.99/mo</span> Gets You Everything!</h2>
  <p>Competitors make you pay $427/mo to unlock what Auto1Source<br />includes at $79.99.</p>
  <div className="pr-gye-grid">
    <div className="pr-gye-item"><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" /></svg></div><h4>Shop Flow</h4><p>Work orders, scheduling, workflow, canned jobs</p></div>
    <div className="pr-gye-item"><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></div><h4>Parts</h4><p>Lookup, ordering, preferred brands, RepairLink</p></div>
    <div className="pr-gye-item"><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg></div><h4>Reporting</h4><p>Audit logs, QuickBooks, inventory</p></div>
    <div className="pr-gye-item"><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg></div><h4>Mobile Apps</h4><p>Tech apps, DVIs, time clocks</p></div>
    <div className="pr-gye-item" style={{borderBottom: 'none'}}><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg></div><h4>Payments</h4><p>Integrated, lowest rates</p></div>
    <div className="pr-gye-item" style={{borderBottom: 'none'}}><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg></div><h4>E-Signatures</h4><p>Digital approvals included</p></div>
    <div className="pr-gye-item" style={{borderBottom: 'none'}}><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><circle cx="7" cy="7" r="1.5" fill="#f53a31" stroke="none" /></svg></div><h4>Coupons & Labor</h4><p>Guides, vehicle lookup, QR guides</p></div>
    <div className="pr-gye-item" style={{borderBottom: 'none', borderRight: 'none'}}><div className="pr-gye-ico-wrap"><svg width="26" height="26" viewbox="0 0 24 24" fill="none" stroke="#f53a31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div><h4>Multi-Shop</h4><p>$129.99/shop — transparent pricing</p></div>
  </div>
</section>

<section className="pr-faq-wrap">
  <div className="pr-faq-left">
    <h2>Frequently asked questions</h2>
    <p>Everything you need to know about Auto1Source pricing. No hidden fees, no surprises — just straightforward pricing for powerful shop management.</p>
  </div>
  <div className="pr-faq-right">
    <div className="faq-item open"><div className="faq-q" onClick={(e) => { const item = e.currentTarget.closest('.faq-item'); if (item) item.classList.toggle('open'); }}>Why is Auto1Source so much cheaper?<div className="faq-icon-btn"></div></div><div className="faq-a">Auto1Source was built by a shop owner who ran multiple repair shops for 30+ years. The goal was to build the most comprehensive system and price it fairly — not to extract maximum revenue through tiered gating and add-on fees.</div></div>
    <div className="faq-item"><div className="faq-q" onClick={(e) => { const item = e.currentTarget.closest('.faq-item'); if (item) item.classList.toggle('open'); }}>Are there feature limits at $79.99/mo?<div className="faq-icon-btn"></div></div><div className="faq-a">No. Every feature is included at $79.99/mo with no tiers, no feature gates, and no add-on fees.</div></div>
    <div className="faq-item"><div className="faq-q" onClick={(e) => { const item = e.currentTarget.closest('.faq-item'); if (item) item.classList.toggle('open'); }}>What about multi-shop pricing?<div className="faq-icon-btn"></div></div><div className="faq-a">Multi-shop is $129.99 per shop per month, with all features included at every location.</div></div>
    <div className="faq-item"><div className="faq-q" onClick={(e) => { const item = e.currentTarget.closest('.faq-item'); if (item) item.classList.toggle('open'); }}>Are there per-user charges?<div className="faq-icon-btn"></div></div><div className="faq-a">No per-user charges. Add as many technicians and managers as you need at no extra cost.</div></div>
    <div className="faq-item"><div className="faq-q" onClick={(e) => { const item = e.currentTarget.closest('.faq-item'); if (item) item.classList.toggle('open'); }}>Does Auto1Source add charges to parts orders?<div className="faq-icon-btn"></div></div><div className="faq-a">No. Parts ordering is included with no markup or per-order fees. You pay the vendor directly.</div></div>
  </div>
</section>

<section className="pr-cta-wrap">
  <h2>$79.99/mo for What Others Charge <span className="red">$427/mo.</span></h2>
  <p>Every feature. No tiers. No add-ons. No per-user fees. See why shops are switching to Auto1Source.</p>
  <div className="pr-cta-btns">
    <SignUpButton className="btn-cta-wh">Get Started →</SignUpButton>
    <button className="btn-cta-ol" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>See All Features</button>
  </div>
</section>





      </div>
    </>
  );
}
