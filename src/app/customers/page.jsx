import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'What does the customer portal include?', a: 'Customers can view their vehicle history, approve estimates digitally, view invoices, pay online, and book future appointments — all from their phone.' },
  { q: 'Are vehicle history and service records stored permanently?', a: "Yes. Every job, every part, every note stays on the customer record forever. Look back at any vehicle's full history in seconds." },
  { q: 'Does it send automatic service reminders?', a: 'Yes. Auto1Source sends mileage-based and time-based reminders by SMS and email — keeping your customers coming back without you lifting a finger.' },
  { q: 'Can I send digital estimate approvals?', a: 'Yes. Send an estimate by SMS or email, customer approves or declines from their phone, and you get instant notification. Cuts hours off the front-counter approval cycle.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Customer Communication for Auto Shops | Auto1Source',
  description: 'Send one-click texts and emails, share digital estimates and get approvals fast. Keep your customers informed and loyal.',
};

export default function Customers() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-customers">



{/* DARK HERO */}
<section className="dark-hero">
  <div className="dark-hero-grid">
    <div>
      <h1>Modern Communication<br />That <span className="r">Builds Trust</span></h1>
      <p className="sub">Text, email, digital approvals, mobile payments, and a dedicated vehicle owner app — everything your customers need to feel confident and connected.</p>
    </div>
    <div className="dark-hero-visual">
      <div className="dh-dots"><span></span><span></span><span></span></div>
      <div className="dh-title">Customer Messages</div>
      <div className="dh-row">
        <div className="l"><span className="dot"></span>Sarah M. approved estimate $640</div>
        <span className="dh-pill g">Approved ✓</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#3b82f6'}}></span>John D. paid invoice via app</div>
        <span className="dh-pill b">Paid ✓</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f59e0b'}}></span>Maria R. — service reminder sent</div>
        <span className="dh-pill y">Sent</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f97316'}}></span>Tom W. replied to estimate</div>
        <span className="dh-pill o">Review</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 1 */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>No Phone Tag. No Paper. Just Approvals.</h2>
        <p>Customers receive estimates by text or email, approve or decline digitally, and pay from their phone — all tracked and logged inside Auto1Source automatically.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>2-Way Text & Email</h4><p>Send and receive messages from inside Auto1Source — all logged to the customer record.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Digital Estimate Approvals</h4><p>Customers review and approve estimates digitally — faster approvals, higher close rates.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Mobile Payments</h4><p>Customers pay directly from their phone. Funds post faster, friction drops to zero.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/2nd section.webp" alt="Digital approvals" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 2 */}
<section className="content-section alt">
  <div className="content-inner">
    <div className="split-section reverse">
      <div className="text">
        <h2>Your Customers' Own Shop Portal</h2>
        <p>The Vehicle Owner App gives customers a personal portal to their vehicle history, upcoming services, estimates, and payments — building loyalty and reducing inbound calls.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Vehicle Owner App</h4><p>Dedicated app for customers to manage their vehicle, approvals, and payments.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Integrated CRM</h4><p>Complete customer profiles with vehicle history, communication logs, and service records.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Service Reminders</h4><p>Automated maintenance reminders bring customers back on schedule — no manual effort.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Mechanic.webp" alt="Customer portal" />
      </div>
    </div>
  </div>
</section>{/* TESTIMONIAL */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Customer management questions" intro="How Auto1Source helps you keep customers informed and coming back." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Give Customers a Reason to Come Back</h2>
  <p>Modern communication that builds trust and drives retention.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
    <Link href="/pricing" className="btn-outline">See Pricing</Link>
  </div>
</section>




      </div>
    </>
  );
}
