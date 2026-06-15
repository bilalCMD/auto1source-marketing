import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Which parts vendors does Auto1Source integrate with?', a: 'Auto1Source connects to all the major national and regional parts vendors. Once your accounts are linked, ordering happens directly from the work order with live pricing and availability.' },
  { q: 'Does Auto1Source mark up my parts prices?', a: 'No. There are no markups, no per-order fees, and no transaction charges. You pay vendors directly and keep 100% of your parts margin.' },
  { q: 'Can I compare prices across vendors before ordering?', a: 'Yes. Search by part number or vehicle and see live prices and stock from multiple vendors side by side. Pick the best option in seconds.' },
  { q: 'What happens if a part is wrong or delayed?', a: 'Returns and credits are tracked against the original work order. You always have a paper trail and can see live delivery status without making phone calls.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Multi-Vendor Auto Parts Ordering Software | Auto1Source',
  description: 'Order parts from every vendor on one screen with one-click pricing and live availability. Stop juggling 6 tabs.',
};

export default function Parts() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-parts">



{/* DARK HERO */}
<section className="dark-hero">
  <div className="dark-hero-grid">
    <div>
      <h1>Multi-Vendor Ordering.<br /><span className="r">Zero Added Charges.</span></h1>
      <p className="sub">Search, compare, and order parts from all your vendors without leaving Auto1Source — and pay exactly what your vendor charges. No markup, ever.</p>
    </div>
    <div className="dark-hero-visual">
      <div className="dh-dots"><span></span><span></span><span></span></div>
      <div className="dh-title">Parts Search — Brake Pads 2021 Camry</div>
      <div className="dh-row">
        <div className="l"><span className="dot"></span>AutoZone Pro — $38.99 {'\u00A0'}In Stock</div>
        <span className="dh-pill g">Order</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#3b82f6'}}></span>O'Reilly — $34.50 {'\u00A0'}In Stock</div>
        <span className="dh-pill b">Best Price</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f59e0b'}}></span>NAPA — $41.00 {'\u00A0'}2hr Delivery</div>
        <span className="dh-pill y">Order</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f97316'}}></span>RepairLink OEM — $67.00</div>
        <span className="dh-pill o">OEM</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 1 */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>All Your Vendors in One Search</h2>
        <p>Stop jumping between supplier portals. Auto1Source searches all your connected vendors simultaneously — compare pricing, availability, and delivery time in one place and order with a single click.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Multi-Vendor Parts Search</h4><p>Compare pricing and availability across all your vendors in one tab with a single click.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>RepairLink Integration</h4><p>Direct connection to OEM and aftermarket parts catalogs for fast, accurate ordering.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Zero Markup on Orders</h4><p>Your vendor, your price matrix. Auto1Source adds absolutely zero charges to your parts orders.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/2nd section.webp" alt="Parts search on tablet" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 2 */}
<section className="content-section alt">
  <div className="content-inner">
    <div className="split-section reverse">
      <div className="text">
        <h2>Every Part. Tracked. Accounted For.</h2>
        <p>Track cores, warranties, and returns. Set preferred brand preferences so your go-to parts always surface first. Fitment guidance reduces ordering errors and costly returns.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Core & Warranty Tracking</h4><p>Track returns, manage defects, and ensure you get every credit you're owed.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Preferred Parts Brands</h4><p>Set brand preferences so your go-to parts always surface first in search results.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Fitment Guidance</h4><p>Reduce ordering errors with vehicle-specific fitment verification built into search.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Mechanic.webp" alt="Parts tracking" />
      </div>
    </div>
  </div>
</section>{/* TESTIMONIAL */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Parts ordering questions" intro="How one-click parts ordering protects your margin and saves you hours every week." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Simplify Your Parts Ordering</h2>
  <p>One search. Every vendor. Zero added charges.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
    <Link href="/pricing" className="btn-outline">See Pricing</Link>
  </div>
</section>




      </div>
    </>
  );
}
