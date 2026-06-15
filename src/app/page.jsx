import React from 'react';
import Link from 'next/link';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SignUpButton from '@/components/SignUpButton';
const PAGE_CSS = `
  /* ══════════════════════════════════════
     HERO
  ══════════════════════════════════════ */
  .hero {
    background: rgba(255,244,244,.54);
    padding: 100px clamp(20px, 5vw, 80px) 60px;
    min-height: auto;
    overflow: hidden;
    position: relative;
  }
  .hero-inner {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0;
    min-height: auto;
    display: grid;
    grid-template-columns: 460px 1fr;
    gap: 5px;
    align-items: start;
    position: relative;
  }

  .hero-text {
    width: 100%;
    position: relative;
    z-index: 3;
    padding-top: 30px;
  }
  .hero-text h1 {
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: #111827;
  }
  .hero-sub {
    font-size: 15px;
    line-height: 1.6;
    color: #7a8494;
    margin: 22px 0 28px;
    max-width: 420px;
  }
  .hero-sub .r { color: #f53a31; }

  .hero-tagline {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    color: #111827;
    margin-top: 14px;
    letter-spacing: -0.3px;
  }
  .hero-tagline .thrive {
    color: #f53a31;
    font-weight: 800;
    font-style: italic;
  }

  .hero-text .btn-navy {
    margin-bottom: 28px;
    padding: 13px 26px;
    font-size: 15px;
  }

  .hero-quote {
    position: static;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,.07);
    padding: 20px 22px;
    width: 100%;
    max-width: 360px;
  }
  .hero-quote .stars { color: #f59e0b; font-size: 13px; margin-bottom: 10px; letter-spacing: 2px; }
  .hero-quote .qt { font-size: 13.5px; line-height: 1.55; color: #5a6478; margin-bottom: 14px; }
  .hero-quote .au { font-weight: 700; font-size: 13.5px; color: #111827; }

  .hero-visuals {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
  }
  @media (min-width: 1101px) { .hero-visuals { right: -200px; } }
  .hero-visuals img { width: 100%; height: auto; display: block; }

  @media (max-width: 1100px) {
    .hero-inner { grid-template-columns: 1fr; gap: 40px; }
    .hero-text { padding-top: 0; }
    .hero-text h1 { font-size: 46px; }
    .hero-quote { max-width: 480px; }
    .hero-visuals { max-width: 700px; margin: 0 auto; right: 0; }
  }
  @media (max-width: 640px) {
    .hero { padding: 90px 18px 40px; overflow: hidden; }
    .hero-inner { gap: 30px; }
    .hero-text h1 { font-size: 34px; line-height: 1.1; letter-spacing: -1px; }
    .hero-sub { font-size: 14px; margin: 18px 0 22px; max-width: 100%; }
    .hero-quote { padding: 16px 18px; max-width: 100%; }
    .hero-quote .qt { font-size: 13px; }
    .hero-visuals { border-radius: 14px; right: 0; width: 100%; max-width: 100%; }
    .hero-visuals img { width: 100%; height: auto; display: block; border-radius: 14px; }
  }

  /* ══════════════════════════════════════
     FEATURES GRID
  ══════════════════════════════════════ */
  .feat-grid-5 {
    grid-template-columns: 284px 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .feat-grid-5 .fc-dark  { grid-row: 1/3; grid-column: 1; }
  .feat-grid-5 .fc-blue  { grid-column: 2; }
  .feat-grid-5 .fc-green { grid-column: 3; }
  .feat-grid-5 .fc-orange{ grid-column: 4; }
  .feat-grid-5 .fc-purple{ grid-column: 2 / 5; }
  @media (max-width: 1200px) {
    .feat-grid-5 { grid-template-columns: repeat(3,1fr); }
    .feat-grid-5 .fc-dark  { grid-column: 1/-1; grid-row: auto; }
    .feat-grid-5 .fc-blue,
    .feat-grid-5 .fc-green,
    .feat-grid-5 .fc-orange,
    .feat-grid-5 .fc-purple { grid-column: auto; }
  }
  @media (max-width: 960px) { .feat-grid-5 { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 640px) { .feat-grid-5 { grid-template-columns: 1fr; } }

  /* ══════════════════════════════════════
     BLOG & INSIGHTS — HOMEPAGE VERSION
     Fix: full width, proper featured layout
  ══════════════════════════════════════ */
  .home-blogs {
    width: 100%;
    padding: 80px clamp(20px, 6vw, 120px) 80px;
    box-sizing: border-box;
  }
  .home-blogs-inner {
    max-width: 1400px;
    margin: 0 auto;
  }
  .home-blogs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 2px solid #e5e7eb;
    flex-wrap: wrap;
    gap: 12px;
  }
  .home-blogs-header h2 {
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: -.8px;
    margin: 0;
    color: #111827;
  }
  .home-blogs-see {
    font-size: 14px;
    font-weight: 600;
    color: #0d6efd;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
  }
  .home-blogs-see .arrow {
    background: #111827;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }

  /* Featured post — left image, right text side by side */
  .home-blog-featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-bottom: 48px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    text-decoration: none;
    color: inherit;
    transition: box-shadow .2s;
  }
  .home-blog-featured:hover { box-shadow: 0 8px 32px rgba(0,0,0,.09); }

  .home-blog-featured-img {
    overflow: hidden;
    min-height: 300px;
  }
  .home-blog-featured-img img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform .4s ease;
  }
  .home-blog-featured:hover .home-blog-featured-img img { transform: scale(1.03); }

  .home-blog-featured-body {
    padding: 40px 40px 40px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .blog-date-tag {
    font-size: 11px;
    letter-spacing: .07em;
    color: #9ca3af;
    text-transform: uppercase;
    margin-bottom: 12px;
    font-weight: 500;
  }
  .home-blog-featured-body h2 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    font-weight: 700;
    line-height: 1.35;
    color: #111827;
    margin-bottom: 14px;
  }
  .home-blog-featured-body p {
    font-size: 14.5px;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 24px;
  }
  .btn-read-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #111827;
    color: #fff;
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 13.5px;
    font-weight: 600;
    text-decoration: none;
    width: fit-content;
    transition: background .2s;
  }
  .btn-read-more:hover { background: #f53a31; }

  /* 3-card grid */
  .home-blog-grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .home-blog-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: box-shadow .2s, border-color .2s, transform .2s;
  }
  .home-blog-card:hover {
    border-color: #d1d5db;
    box-shadow: 0 6px 20px rgba(0,0,0,.08);
    transform: translateY(-2px);
  }
  .home-blog-card-img {
    overflow: hidden;
    height: 200px;
    flex-shrink: 0;
  }
  .home-blog-card-img img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform .35s ease;
  }
  .home-blog-card:hover .home-blog-card-img img { transform: scale(1.05); }

  .home-blog-card-body {
    padding: 18px 20px 22px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .home-blog-card-body h3 {
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.45;
    color: #111827;
    margin-bottom: 8px;
  }
  .home-blog-card-body p {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.65;
    flex: 1;
    margin-bottom: 14px;
  }
  .read-more-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 600;
    color: #f53a31;
    margin-top: auto;
    text-decoration: none;
  }
  .read-more-arrow { font-size: 14px; }

  /* Responsive blog */
  @media (max-width: 900px) {
    .home-blog-featured { grid-template-columns: 1fr; }
    .home-blog-featured-img { min-height: 220px; }
    .home-blog-featured-body { padding: 24px; }
    .home-blog-grid3 { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .home-blogs { padding: 50px 18px 50px; }
    .home-blog-grid3 { grid-template-columns: 1fr; }
    .home-blog-card-img { height: 160px; }
  }
`;

const JSON_LD = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.auto1source.com/#organization',
          name: 'Auto1Source',
          url: 'https://www.auto1source.com',
          logo: 'https://www.auto1source.com/site-assets/images/logodesktop.svg',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61575418950106',
            'https://x.com/auto1sourcee',
            'https://www.instagram.com/auto1source/',
            'https://www.tiktok.com/@auto1source'
          ]
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Auto1Source',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description: 'Complete operating system for auto repair shops — work orders, payroll, parts ordering, customer communication and more.',
          offers: [
            {
              '@type': 'Offer',
              name: 'Single Shop',
              price: '79.99',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '79.99',
                priceCurrency: 'USD',
                unitText: 'MONTH'
              }
            },
            {
              '@type': 'Offer',
              name: 'Multi-Location',
              price: '129.99',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '129.99',
                priceCurrency: 'USD',
                unitText: 'MONTH'
              }
            }
          ]
        },
        {
          '@type': 'WebSite',
          url: 'https://www.auto1source.com',
          name: 'Auto1Source',
          publisher: { '@id': 'https://www.auto1source.com/#organization' }
        }
      ]
    };

export const metadata = {
  title: 'All-in-One Auto Repair Shop Software | Auto1Source',
  description: 'Run work orders, parts ordering, payroll and scheduling in one platform. Auto1Source is the complete management system for auto repair shops.',
};

export default function Home() {
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{PAGE_CSS}</style>
      <div className="page-home">



{/* ══ HERO ══ */}
<section className="hero">
  <div className="hero-inner">
    <div className="hero-text">
      <h1>Running a Shop Shouldn't Feel Like Chaos.</h1>
      <p className="hero-tagline">Don't Survive… <span className="thrive">Thrive!</span></p>
      <p className="hero-sub">
        Auto<span className="r">1</span>Source is a professional operating system built for auto
        repair shops like yours that require structure, control, and long term profitability,
        not just a regular ticket-writing software.
      </p>
      <SignUpButton className="btn-navy">Sign Up Now →</SignUpButton>

      <div className="hero-quote">
        <div className="stars">★★★★★</div>
        <p className="qt">"Super easy to use and has made managing our shop so much more efficient.
          From scheduling to invoicing, everything just works smoothly. Highly recommend!"</p>
        <p className="au">Shop Owner</p>
      </div>
    </div>

    <div className="hero-visuals">
      <img src="/site-assets/images/hero.webp" alt="Auto1Source Dashboard" width="634" height="512" fetchpriority="high" loading="eager" decoding="async" />
    </div>
  </div>
</section>

{/* ══ PAIN POINTS ══ */}
<section className="pain">
  <div className="pain-grid">
    <div className="pain-left">
      <h2>Run Your Shop Like a System.</h2>
      <p className="sub">If you're dealing with any of these, you don't need another feature. You need a
        system that connects everything and runs itself.</p>
      <div className="pi">
        <div className="pi-row"><span className="t">✕ Inconsistent workflow & lost jobs</span><span className="p">92%</span></div>
        <div className="bar"><div className="bar-f" style={{width: '92%'}}></div></div>
      </div>
      <div className="pi">
        <div className="pi-row"><span className="t">✕ Technicians without accountability</span><span className="p">88%</span></div>
        <div className="bar"><div className="bar-f" style={{width: '88%'}}></div></div>
      </div>
      <div className="pi">
        <div className="pi-row"><span className="t">✕ Parts delays & ordering confusion</span><span className="p">85%</span></div>
        <div className="bar"><div className="bar-f" style={{width: '85%'}}></div></div>
      </div>
      <div className="pi">
        <div className="pi-row"><span className="t">✕ Poor visibility into profitability</span><span className="p">90%</span></div>
        <div className="bar"><div className="bar-f" style={{width: '90%'}}></div></div>
      </div>
      <div className="pi">
        <div className="pi-row"><span className="t">✕ Disconnected software tools</span><span className="p">87%</span></div>
        <div className="bar"><div className="bar-f" style={{width: '87%'}}></div></div>
      </div>
      <Link href="/auto-repair-shop" className="pain-btn">See the Solution →</Link>
      <div className="pain-stats">
        <div className="ps"><span className="n">100</span><span className="plus">+</span><div className="l">Satisfied<br/>Customers</div></div>
        <div className="ps"><span className="n">6</span><span className="plus">+</span><div className="l">Modules Fully<br/>Integrated</div></div>
        <div className="ps"><span className="n">$79</span><span className="u">/mo</span><div className="l">All Features<br/>Included</div></div>
      </div>
    </div>
    <div className="pain-right">
      <img src="/site-assets/images/asds.webp" alt="Auto1Source shop management dashboard for auto repair shops" width="672" height="409" loading="lazy" decoding="async" />
      <div className="badge-row">
        <div className="badge-r"><span>💰</span>Auto1Source will make you money</div>
        <div className="badge-r"><span>⏱ </span>Auto1Source will save your time</div>
      </div>
    </div>
  </div>
</section>

{/* ══ MORE THAN SOFTWARE ══ */}
<section className="more">
  <div className="more-grid">
    <div className="more-imgs">
      <div className="more-img1">
        <img src="/site-assets/images/Mechanic.webp" alt="Mechanic working" width="600" height="400" loading="lazy" decoding="async" />
      </div>
      <div className="more-img2">
        <img src="/site-assets/images/Independent Shops.webp" alt="Auto shop tools" width="400" height="300" loading="lazy" decoding="async" />
      </div>
      <div className="more-price">
        <div className="amt">$79.99</div>
        <div className="per">ALL FEATURES / MONTH</div>
      </div>
    </div>
    <div className="more-right">
      <h2>Auto<span className="r">1</span>Source is more than just a shop management software.</h2>
      <div className="ci">
        <div className="ci-ico">✓</div>
        <div className="ci-txt">
          <h4>Yes, of course it writes tickets.</h4>
          <p>Create and manage work orders from start to finish with a structured, consistent workflow every time.</p>
        </div>
      </div>
      <div className="ci">
        <div className="ci-ico">✓</div>
        <div className="ci-txt">
          <h4>Yes, of course it builds estimates.</h4>
          <p>Professional estimates with labor guide, canned jobs, and digital approvals — all in one place.</p>
        </div>
      </div>
      <div className="ci">
        <div className="ci-ico">✓</div>
        <div className="ci-txt">
          <h4>Yes, of course it manages technicians and payroll.</h4>
          <p>Full payroll module, HR features, technician access, and paysheet distribution — built right in.</p>
        </div>
      </div>
      <p className="more-tip">That's just the tip of the iceberg!</p>
      <Link href="/shopflow" style={{textDecoration: 'none'}}>
  <button className="btn-navy" style={{width: '100%', justifyContent: 'center'}}>
    See How It Works →
  </button>
</Link>
    </div>
  </div>
</section>

{/* ══ FEATURES ══ */}
<section className="feat" id="features">
  <div className="feat-inner">
    <div className="sec-hdr">
      <h2>Everything Your Shop Needs In One Place.</h2>
      <p>no need to open 6 more tabs in your browser.</p>
    </div>
    <div className="feat-grid feat-grid-5">
      <Link href="/shopflow" className="fc fc-dark">
        <div className="emoji">🔄</div>
        <h3>Shop Flow</h3>
        <p>Work orders, labor guide, activity desktop, canned jobs, permissions, appointments —
          all structured for consistency and zero dropped balls.</p>
        <div className="lnk">Explore Shop Flow →</div>
      </Link>
      <Link href="/employees" className="fc fc-blue">
        <div className="iw">👤</div>
        <h3>Employees</h3>
        <p>Payroll module, paysheet distribution, HR features, reviews, technician access.</p>
        <div className="arr">→</div>
      </Link>
      <Link href="/customers" className="fc fc-green">
        <div className="iw">🚗</div>
        <h3>Customers</h3>
        <p>Text & email communication, digital approvals, mobile payments, integrated CRM.</p>
        <div className="arr">→</div>
      </Link>
      <Link href="/parts" className="fc fc-orange">
        <div className="iw">🔩</div>
        <h3>Parts</h3>
        <p>Multi-vendor search, online ordering, zero added charges, core & warranty tracking.</p>
        <div className="arr">→</div>
      </Link>
      <Link href="/marketing" className="fc fc-purple">
        <div className="iw">📣</div>
        <h3>Marketing</h3>
        <p>Review nudges, lost sales follow-ups, service reminders, broadcast messaging.</p>
        <div className="arr">→</div>
      </Link>
    </div>
  </div>
</section>

{/* ══ SHOP TYPES ══ */}
<section className="shops" id="shop-types">
  <div className="shops-inner">
    <div className="sec-hdr">
      <h2>Built for Shops That Want to Grow.</h2>
      <p>Whether you're one bay or multiple locations — the system scales with you.</p>
    </div>
    <div className="shops-grid">
      <div className="sc">
        <div className="sc-img">
          <img src="/site-assets/images/Independent Shops.webp" alt="Independent Shops" width="400" height="300" loading="lazy" decoding="async" />
          <div className="sc-badge">🔧</div>
        </div>
        <div className="sc-body">
          <h3>Independent Shops</h3>
          <p>Structure without complexity. Build consistent workflows from day one.</p>
          <Link href="/auto-repair-shop" className="lnk">View Service →</Link>
        </div>
      </div>
      <div className="sc">
        <div className="sc-img">
          <img src="/site-assets/images/Multi-Location.webp" alt="Multi-Location" width="400" height="300" loading="lazy" decoding="async" />
          <div className="sc-badge">📦</div>
        </div>
        <div className="sc-body">
          <h3>Multi-Location</h3>
          <p>Centralized control over every store. Unified reporting and operations.</p>
          <Link href="/multi-location" className="lnk">View Service →</Link>
        </div>
      </div>
      <div className="sc">
        <div className="sc-img">
          <img src="/site-assets/images/Specialty Shops.webp" alt="Specialty Shops" width="400" height="300" loading="lazy" decoding="async" />
          <div className="sc-badge">🛠</div>
        </div>
        <div className="sc-body">
          <h3>Specialty Shops</h3>
          <p>Advanced tools for transmission, body, tires, and niche service shops.</p>
          <Link href="/tire-shop" className="lnk">View Service →</Link>
        </div>
      </div>
      <div className="sc">
        <div className="sc-img">
          <img src="/site-assets/images/Startup Shops.webp" alt="Startup Shops" width="400" height="300" loading="lazy" decoding="async" />
          <div className="sc-badge">🚀</div>
        </div>
        <div className="sc-body">
          <h3>Startup Shops</h3>
          <p>Build on the right foundation. Start structured and grow fast.</p>
          <Link href="/startup-shops" className="lnk">View Service →</Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══ STEPS ══ */}
<section className="steps">
  <div className="steps-inner">
    <div className="sec-hdr">
      <h2 style={{color: '#fff'}}>What Happens When You Run a Real System?</h2>
      <p>This isn't about doing more work. It's about running smarter.</p>
    </div>
    <div className="steps-row">
      <div className="step"><div className="step-n">1</div><div className="step-t">Clear Daily Workflow</div></div>
      <div className="step"><div className="step-n">2</div><div className="step-t">Higher Job Approval Rates</div></div>
      <div className="step"><div className="step-n">3</div><div className="step-t">Better Technician Performance</div></div>
      <div className="step"><div className="step-n">4</div><div className="step-t">Stronger Financial Visibility</div></div>
      <div className="step"><div className="step-n">5</div><div className="step-t">Long-Term Operational Discipline</div></div>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════
     BLOG & INSIGHTS — FIXED SECTION
     - Working links to all blog pages
     - Proper featured + 3-card layout
     - Full width, no awkward narrow padding
════════════════════════════════════════ */}
<section className="home-blogs">
  <div className="home-blogs-inner">

    {/* Header row */}
    <div className="home-blogs-header">
      <h2>Blog & Insights</h2>
      <Link href="/blogs" className="home-blogs-see">See All <span className="arrow">→</span></Link>
    </div>

    {/* Featured Post (full link, working href) */}
    <Link href="/blogs/switch-spreadsheets-to-software" className="home-blog-featured">
      <div className="home-blog-featured-img">
        <img src="/site-assets/images/blog1.webp" alt="How to Switch Your Auto Shop from Spreadsheets to Software" width="400" height="250" loading="lazy" decoding="async" />
      </div>
      <div className="home-blog-featured-body">
        <div className="blog-date-tag">02-APR-2026</div>
        <h2>How to Switch Your Auto Shop from Spreadsheets to Software in 1 Day</h2>
        <p>If you own an independent auto repair shop, parts are one of your biggest revenue opportunities — and one of your biggest profit leaks. Making the switch doesn't have to take weeks.</p>
        <span className="btn-read-more">Read More →</span>
      </div>
    </Link>

    {/* 3 Blog Cards Row */}
    <div className="home-blog-grid3">
      <Link href="/blogs/is-free-auto-repair-shop-software-good" className="home-blog-card">
        <div className="home-blog-card-img">
          <img src="/site-assets/images/blog2.webp" alt="Is Free Auto Repair Shop Software Actually Good?" width="400" height="250" loading="lazy" decoding="async" />
        </div>
        <div className="home-blog-card-body">
          <div className="blog-date-tag">05-APR-2026</div>
          <h3>Is Free Auto Repair Shop Software Actually Good? (Honest Review)</h3>
          <p>If you run an independent auto repair shop, you've probably asked this question at least once: Is free auto repair shop software actually worth anything?</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>

      <Link href="/blogs/5-signs-auto-shop-needs-management-software" className="home-blog-card">
        <div className="home-blog-card-img">
          <img src="/site-assets/images/blog3.webp" alt="5 Signs Your Auto Shop Needs Management Software" width="400" height="250" loading="lazy" decoding="async" />
        </div>
        <div className="home-blog-card-body">
          <div className="blog-date-tag">02-APR-2026</div>
          <h3>5 Signs Your Auto Shop Needs Management Software Right Now</h3>
          <p>If paperwork eats your day and you're unsure you're making money, it might be time. Here are 5 clear signs to watch for.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>

      <Link href="/blogs/stop-losing-money-on-parts" className="home-blog-card">
        <div className="home-blog-card-img">
          <img src="/site-assets/images/blog4.webp" alt="How to Stop Losing Money on Parts" width="400" height="250" loading="lazy" decoding="async" />
        </div>
        <div className="home-blog-card-body">
          <div className="blog-date-tag">08-APR-2026</div>
          <h3>How to Stop Losing Money on Parts: A Shop Owner's Guide</h3>
          <p>If you own an independent auto repair shop, parts are one of your biggest revenue opportunities — and one of your biggest profit leaks.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

  </div>
</section>

{/* ══ TESTIMONIALS ══ */}
{/* TESTIMONIAL */}
<TestimonialCarousel />

{/* ══ CTA ══ */}
<section className="cta-sec">
  <h2>Ready to See It in Action?</h2>
  <p>Stop juggling tools. Stop guessing at numbers. Stop reacting to problems.
    Start running your shop like a professional system.</p>
  <div className="cta-btns">
    <SignUpButton className="btn-white">Get Started →</SignUpButton>
  </div>
</section>






      </div>
    </>
  );
}
