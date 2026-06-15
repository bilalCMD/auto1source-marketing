import React from 'react';
import PageFAQ from '@/components/PageFAQ';
import SignUpButton from '@/components/SignUpButton';
import { buildFaqSchema } from '@/lib/faqSchema';
import TestimonialCarousel from '@/components/TestimonialCarousel';
const PAGE_CSS = ``;

const FAQ_ITEMS = [
  { q: 'Is the vehicle owner app branded with my shop?', a: "Yes. The app shows your shop's name, logo, and contact info. Customers see your brand every time they open it — not Auto1Source's." },
  { q: 'What can customers do in the app?', a: 'Book appointments, view vehicle history, approve estimates digitally, view and pay invoices, message your shop, and get service reminders — all from their phone.' },
  { q: 'Do customers have to download an app?', a: 'They can download the native iOS or Android app for the best experience, or access everything through a mobile-friendly web portal — their choice.' },
  { q: 'Does this reduce front counter phone calls?', a: 'Most shops report 30-50% fewer status-check calls within the first month. Customers see live job status, estimate approvals, and invoices without having to call in.' }
];

const JSON_LD = buildFaqSchema(FAQ_ITEMS);

export const metadata = {
  title: 'Vehicle Owner App: Book, Approve & Pay | Auto1Source',
  description: 'Book appointments, view repair history, authorize work and pay invoices — all from the Auto1Source vehicle owner app.',
};

export default function VehicleOwner() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-vehicleowner">



{/* DARK HERO */}
<section className="dark-hero" style={{textAlign: 'center'}}>
  <div style={{maxWidth: '800px', margin: '0 auto'}}>
    <h1 style={{fontSize: '42px'}}>Your Car. Your Records.<br /><span className="r">One Free App.</span></h1>
    <p className="sub" style={{margin: '0 auto', maxWidth: '640px'}}>Handle all of your automobile information, maintenance records, and appointments from anywhere on your phone or tablet in one single, easy-to-use, totally FREE app.</p>
  </div>
</section>

{/* SEAMLESS SECTION */}
<section className="vo-seamless">
  <div className="vo-seamless-inner">
    <div>
      <h2>Auto1Source makes it seamless.<br />Use with participating shops to:</h2>
      <p className="sub" style={{fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '28px'}}>Connect directly with your auto repair shop. No more phone tag, lost paperwork, or surprise bills.</p>
      <div className="vo-seamless-img">
        <img src="/site-assets/images/Mechanic.webp" alt="Mechanic at work" />
      </div>
    </div>
    <div className="vo-feat-list">
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>Schedule Appointments</h4><p>Book service times that work for you, directly from the app. Get reminders so you never miss a visit.</p></div>
      </div>
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>View Estimates</h4><p>See detailed breakdowns of recommended work and costs before anything starts. No surprises.</p></div>
      </div>
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>Authorize Work</h4><p>Approve or decline repairs right from your phone. No need to call the shop or drive back in person.</p></div>
      </div>
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>Maintain Service Records</h4><p>Your complete service history in one place. Know exactly what's been done and when — great for resale value too.</p></div>
      </div>
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>Receive Service Reminders</h4><p>Get notified when it's time for oil changes, tire rotations, and scheduled maintenance. Stay ahead of problems.</p></div>
      </div>
      <div className="vo-feat-item">
        <div className="chk">✓</div>
        <div><h4>Pay Invoices and More</h4><p>View your bill, pay securely from the app, and keep digital receipts. Fast, simple, and paperless.</p></div>
      </div>
    </div>
  </div>
</section>

{/* THREE STEPS */}
<section className="vo-steps">
  <div className="vo-steps-inner">
    <h2>Three steps. That's it.</h2>
    <p className="sub">Getting started takes less time than your morning coffee.</p>
    <div className="vo-steps-row">
      <div className="vo-step-card">
        <div className="vo-step-num">1</div>
        <h3>Download the App</h3>
        <p>Get the free Auto1Source app on your phone or tablet. No credit card needed, no subscription, no strings.</p>
      </div>
      <div className="vo-step-card">
        <div className="vo-step-num">2</div>
        <h3>Connect with Your Shop</h3>
        <p>Find a participating Auto1Source shop near you. Once connected, your vehicle info syncs automatically.</p>
      </div>
      <div className="vo-step-card">
        <div className="vo-step-num">3</div>
        <h3>Manage Everything</h3>
        <p>Schedule, approve, pay, and track — all from one app. Your shop serves you easier than ever before.</p>
      </div>
    </div>
  </div>
</section>

{/* SIMPLIFIED GRID 6 CARDS */}
<section className="vo-simplified">
  <div className="vo-simplified-inner">
    <div className="vo-simplified-title">
      <h2>Car maintenance, finally simplified.</h2>
      <p>Auto1Source bridges the gap between you and your repair shop — no more miscommunication, lost records, or payment hassles.</p>
    </div>
    <div className="vo-grid6">
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Mechanic.webp" alt="Save time" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">⏱</div>
          <h3>Save Time</h3>
          <p>No more phone calls to check on your car, no more driving to the shop just to sign a form. Handle it all from wherever you are.</p>
        </div>
      </div>
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Independent Shops.webp" alt="Transparency" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">👁</div>
          <h3>Total Transparency</h3>
          <p>See every line item on your estimate before saying yes. Know what you're paying for and why — no surprise charges.</p>
        </div>
      </div>
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Multi-Location.webp" alt="History" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">📋</div>
          <h3>Complete History</h3>
          <p>Every service, every part, every date — recorded and accessible. Perfect for warranty claims, resale, or just staying informed.</p>
        </div>
      </div>
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Fleet Service.webp" alt="Maintenance" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">🔔</div>
          <h3>Never Miss Maintenance</h3>
          <p>Automated reminders for oil changes, inspections, and scheduled services. Your car stays healthy, and you stay ahead.</p>
        </div>
      </div>
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Specialty Shops.webp" alt="Payments" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">💳</div>
          <h3>Easy Payments</h3>
          <p>Pay your bill securely through the app. View invoices, keep digital receipts, and skip the counter line.</p>
        </div>
      </div>
      <div className="vo-grid-card">
        <div className="vo-grid-card-img"><img src="/site-assets/images/Startup Shops.webp" alt="Free" /></div>
        <div className="vo-grid-card-body">
          <div className="vic">❤️</div>
          <h3>100% Free. Always</h3>
          <p>Not a trial. Not a teaser. The Auto1Source vehicle owner app is completely free — because your shop uses it to serve you better.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* QUOTE */}
<section className="vo-quote">
  <div className="vo-quote-inner">
    <div className="q">"</div>
    <p>Wouldn't it be great to handle all of your automobile information, maintenance records, and appointments from anywhere on your phone — in one single, totally FREE app? Now you can.</p>
    <p className="author">— The Auto1Source Team</p>
  </div>
</section>



{/* TESTIMONIALS */}
<TestimonialCarousel />

{/* FAQs */}
<PageFAQ title="Vehicle Owner App questions" intro="How the customer-facing app builds loyalty and saves your front counter hours." items={FAQ_ITEMS} />

{/* CTA */}
<section className="cta-sec">
  <h2>Your car deserves better management.</h2>
  <p>Download the free Auto1Source app and take control of your vehicle's service appointments, approvals, payments, and history — all in one place.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started Free</SignUpButton>
    <a href="tel:+15618128906" className="btn-outline">Call Us</a>
  </div>
</section>




      </div>
    </>
  );
}
