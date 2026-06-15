'use client';

import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    text: "This isn't just software — it changed how we operate. Before Auto1Source, we were constantly reacting to problems. Now we have structure. The workflow is clear, payroll is organized, parts are easier to manage, and I finally understand my numbers.",
    name: "Independent Shop Owner",
    location: "Palm Beach County, FL"
  },
  {
    text: "We tried three other platforms before Auto1Source. The flat-price model and built-in payroll were the deal-clinchers. Our techs love the app, and we cut our parts-research time by half.",
    name: "Multi-Location Owner",
    location: "Houston, TX"
  },
  {
    text: "The vehicle owner portal was a game-changer for our customer experience. Approvals come in faster, no-shows are way down, and repeat business is up. Plus the one-flat-price means no surprises at renewal.",
    name: "Specialty Shop Owner",
    location: "Phoenix, AZ"
  },
  {
    text: "We switched from spreadsheets and a basic POS. Within 30 days we had real reporting, clean payroll, and a parts ordering workflow that actually works. Worth every penny of $79.99.",
    name: "Startup Shop Owner",
    location: "Nationwide, USA"
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[index];

  return (
    <section className="testi">
      <div className="testi-inner">
        <div className="sec-hdr">
          <h2>Trusted by Repair Shops That Want More Than Basic Software</h2>
        </div>
        <div className="testi-wrap">
          <button className="t-arr" aria-label="Previous" onClick={prev} type="button">‹</button>
          <div className="t-card" key={index}>
            <div className="bq"><img src="/site-assets/images/op.webp" alt="Quote" width="40" height="40" style={{maxWidth: '7%'}} /></div>
            <p className="tx">{t.text}</p>
            <p className="nm">{t.name}</p>
            <p className="loc">{t.location}</p>
          </div>
          <button className="t-arr" aria-label="Next" onClick={next} type="button">›</button>
        </div>
        <div className="t-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`d ${i === index ? 'on' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
