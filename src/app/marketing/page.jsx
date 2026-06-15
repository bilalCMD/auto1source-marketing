import React from 'react';
import Link from 'next/link';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import { buildFaqSchema } from '@/lib/faqSchema';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'What marketing features are included?', a: 'Automated service reminders by SMS and email, review requests after every job, customer segmentation for campaigns, and a vehicle owner app that keeps your brand on their phone.' },
  { q: 'Does it help me get more Google reviews?', a: 'Yes. The system automatically requests a review after job completion. Happy customers get redirected to your Google profile; unhappy ones get routed to your private feedback first.' },
  { q: 'Can I send promotions to specific customer groups?', a: 'Yes. Segment by vehicle make, last visit date, total spend, or service type. Send targeted SMS or email campaigns to the right group at the right time.' },
  { q: 'Is marketing really included at $79.99/mo?', a: 'Yes. All marketing features are part of the flat monthly price. No SMS overage fees, no per-message charges, no upgrade tiers.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Auto Shop Marketing & Retention Tools | Auto1Source',
  description: 'Win repeat business with automated reminders, review requests and customer follow-ups built into your shop software.',
};

export default function Marketing() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-marketing">



{/* DARK HERO */}
<section className="dark-hero">
  <div className="dark-hero-grid">
    <div>
      <h1>Retention Is More Profitable<br />Than <span className="r">Acquisition</span></h1>
      <p className="sub">Review nudges, lost sales follow-ups, service reminders, and broadcast messaging — automated marketing that runs while you work.</p>
    </div>
    <div className="dark-hero-visual">
      <div className="dh-dots"><span></span><span></span><span></span></div>
      <div className="dh-title">Marketing Automation</div>
      <div className="dh-row">
        <div className="l"><span className="dot"></span>Service reminder sent — 84 customers</div>
        <span className="dh-pill g">Sent ✓</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#3b82f6'}}></span>Review request — 12 responses</div>
        <span className="dh-pill b">Active</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f59e0b'}}></span>Lost sale follow-up — 6 recovered</div>
        <span className="dh-pill y">Active</span>
      </div>
      <div className="dh-row">
        <div className="l"><span className="dot" style={{background: '#f97316'}}></span>Broadcast — Summer Special</div>
        <span className="dh-pill o">Scheduled</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 1 */}
<section className="content-section">
  <div className="content-inner">
    <div className="split-section">
      <div className="text">
        <h2>Marketing That Runs While You Work</h2>
        <p>Automated service reminders drive repeat visits. Electronic follow-ups and review nudges keep your online reputation growing. Lost sales marketing recovers declined jobs and missed opportunities.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Service Reminders</h4><p>Automated maintenance reminders drive repeat visits without manual effort.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Review Nudges</h4><p>Encourage satisfied customers to leave online reviews — building your reputation automatically.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Lost Sales Marketing</h4><p>Follow up on declined jobs and missed opportunities to recover revenue.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/Mechanic.webp" alt="Automated marketing" />
      </div>
    </div>
  </div>
</section>

{/* SECTION 2 */}
<section className="content-section alt">
  <div className="content-inner">
    <div className="split-section reverse">
      <div className="text">
        <h2>Your Message. Your Customers. Your Way.</h2>
        <p>Send broadcast emails to targeted customer groups. Create completely customizable marketing messages. Track engagement and measure what's working.</p>
        <div className="feat-checks">
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Broadcast Emails</h4><p>Send targeted messages to customer groups — promotions, seasonal offers, updates.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Custom Messaging</h4><p>Create completely customizable customer marketing messages with your brand voice.</p></div></div>
          <div className="feat-check"><div className="chk">✓</div><div className="txt"><h4>Retention Tracking</h4><p>Measure engagement, response rates, and retention performance over time.</p></div></div>
        </div>
      </div>
      <div className="visual">
        <img src="/site-assets/images/2nd section.webp" alt="Custom messaging" />
      </div>
    </div>
  </div>
</section>{/* TESTIMONIAL */}
<TestimonialCarousel />


{/* FAQs */}
<PageFAQ title="Marketing questions" intro="How Auto1Source helps you bring customers back and grow without paid ads." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Keep Customers Coming Back</h2>
  <p>Automated marketing that works while you focus on repairs.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
    <Link href="/pricing" className="btn-outline">See Pricing</Link>
  </div>
</section>




      </div>
    </>
  );
}
