import React from 'react';
import Link from 'next/link';
const PAGE_CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .hero-center { background: var(--bg-secondary, #f5f5f5); padding: 64px 20px; text-align: center; border-bottom: 1px solid var(--border, #e0e0e0); }
    .hero-center-inner h1 { font-size: clamp(1.7rem, 4vw, 2.6rem); font-weight: 600; line-height: 1.25; margin-bottom: 16px; }
    .hero-center-inner p  { font-size: clamp(0.95rem, 2vw, 1.1rem); color: #555; max-width: 580px; margin: 0 auto; line-height: 1.75; }

    .sec { padding: 52px 0 72px; }
    .container { max-width: 1600px; margin: 0 auto; padding: 0 20px; }

    .sec-heading { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 600; margin-bottom: 28px; }
    .sec-divider  { border: none; border-top: 2px solid var(--border, #e0e0e0); margin-bottom: 44px; }

    /* ── Featured post ── */
    .blog-featured {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      margin-bottom: 52px;
      border: 1px solid var(--border, #e0e0e0);
      border-radius: 14px;
      overflow: hidden;
      background: #fff;
    }
    .blog-featured-img {
      overflow: hidden;
      min-height: 280px;
    }
    .blog-featured-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .blog-featured-content {
      padding: 36px 36px 36px 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .blog-featured-content h2 { font-size: clamp(1.1rem, 2.2vw, 1.45rem); font-weight: 600; line-height: 1.4; margin-bottom: 12px; }
    .blog-featured-content p  { font-size: 15px; color: #555; line-height: 1.7; margin-bottom: 22px; }

    .read-more-btn {
      display: inline-block;
      padding: 11px 26px;
      background: var(--red, #e03c3c);
      color: #fff;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      width: fit-content;
      transition: opacity .2s;
    }
    .read-more-btn:hover { opacity: .87; }

    .blog-date { font-size: 11px; letter-spacing: .06em; color: #888; text-transform: uppercase; margin-bottom: 10px; }

    /* ── 3-column card grid ── */
    .blog-grid3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
      margin-bottom: 28px;
    }

    /* ── Blog card ── */
    .blog-card {
      display: flex;
      flex-direction: column;
      background: #fff;
      border: 1px solid var(--border, #e0e0e0);
      border-radius: 14px;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: box-shadow .2s, border-color .2s;
    }
    .blog-card:hover { border-color: #bbb; box-shadow: 0 4px 16px rgba(0,0,0,.07); }

    .blog-card-img {
      overflow: hidden;
      height: 230px;
      flex-shrink: 0;
    }
    .blog-card-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform .3s ease;
    }
    .blog-card:hover .blog-card-img img {
      transform: scale(1.04);
    }

    .blog-card-body {
      padding: 18px 20px 22px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .blog-card-body h3 {
      font-size: clamp(0.88rem, 1.4vw, 0.98rem);
      font-weight: 600;
      line-height: 1.45;
      margin-bottom: 8px;
    }
    .blog-card-body p {
      font-size: 13px;
      color: #666;
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
      color: var(--red, #e03c3c);
      margin-top: auto;
    }
    .read-more-arrow { font-size: 14px; }

    /* ════════════════════════════
       RESPONSIVE
    ════════════════════════════ */
    @media (max-width: 900px) {
      .blog-grid3 { grid-template-columns: repeat(2, 1fr); }
      .blog-featured { grid-template-columns: 1fr; }
      .blog-featured-img { min-height: 220px; }
      .blog-featured-content { padding: 24px 24px; }
    }

    @media (max-width: 640px) {
      .hero-center { padding: 44px 16px; }
      .sec { padding: 36px 0 56px; }
      .blog-featured-content { padding: 20px 18px; }
      .blog-featured-content h2 { font-size: 1.05rem; }
      .blog-card-img { height: 150px; }
    }

    @media (max-width: 480px) {
      .blog-grid3 { grid-template-columns: 1fr; }
      .blog-featured { border-radius: 10px; }
      .blog-card { border-radius: 10px; }
      .container { padding: 0 14px; }
    }
  `;

export const metadata = {
  title: 'Auto Repair Shop Blog & Tips | Auto1Source',
  description: 'Practical tips on running, growing and managing an auto repair shop. Read articles by industry experts.',
};

export default function Blogs() {
  
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="page-blogs">



<section className="sec" style={{paddingTop: '100px'}}>
  <div className="container">
    <h2 className="sec-heading reveal">Blog & Insights</h2>
    <hr className="sec-divider" />

    {/* Featured Post */}
    <div className="blog-featured reveal" style={{marginBottom: '52px'}}>
      <div className="blog-featured-img">
        <img src="/site-assets/images/blog1.webp" alt="How to Switch Your Auto Shop from Spreadsheets to Software in 1 Day" />
      </div>
      <div className="blog-featured-content">
        <div className="blog-date">02-APR-2026</div>
        <h2>How to Switch Your Auto Shop from Spreadsheets to Software in 1 Day</h2>
        <p>If you own an independent auto repair shop, parts are one of your biggest revenue opportunities — and one of your biggest profit leaks.</p>
        <Link href="/blogs/switch-spreadsheets-to-software" className="read-more-btn">Read More</Link>
      </div>
    </div>

    {/* Row 1 */}
    <div className="blog-grid3 reveal">
      <Link href="/blogs/is-free-auto-repair-shop-software-good" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog2.webp" alt="Is Free Auto Repair Shop Software Actually Good?" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">05-APR-2026</div>
          <h3>Is Free Auto Repair Shop Software Actually Good? (Honest Review)</h3>
          <p>If you run an independent auto repair shop, you've probably asked this question at least once: Is free auto repair shop software actually worth anything?</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/5-signs-auto-shop-needs-management-software" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog3.webp" alt="5 Signs Your Auto Shop Needs Management Software" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">02-APR-2026</div>
          <h3>5 Signs Your Auto Shop Needs Management Software Right Now</h3>
          <p>Recognizing the warning signs before your workflow completely breaks down and costs you customers.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/stop-losing-money-on-parts" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog4.webp" alt="How to Stop Losing Money on Parts" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">08-APR-2026</div>
          <h3>How to Stop Losing Money on Parts: A Shop Owner's Guide</h3>
          <p>If you own an independent auto repair shop, parts are one of your biggest revenue opportunities — and one of your biggest profit leaks.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 2 */}
    <div className="blog-grid3 reveal">
      <Link href="/blogs/auto-repair-shop-payroll" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog5.webp" alt="Auto Repair Shop Payroll" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">05-APR-2026</div>
          <h3>Auto Repair Shop Payroll: How to Stop Doing It in QuickBooks on Weekends</h3>
          <p>If you're an auto repair shop owner, there's a good chance you've spent at least one Saturday morning hunched over a laptop trying to reconcile your technicians.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/one-click-parts-ordering" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog6.webp" alt="One Click Parts Ordering" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">02-APR-2026</div>
          <h3>One-Click Parts Ordering: What It Means for Your Shop's Efficiency</h3>
          <p>If you're running an independent auto repair shop, you already know that time is money — and nowhere does that money bleed faster than in the parts ordering process.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/average-repair-order-aro" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog7.webp" alt="Average Repair Order ARO" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">08-APR-2026</div>
          <h3>What Is Average Repair Order (ARO) and How to Increase Yours in 2026</h3>
          <p>If you've been running an auto repair shop for any length of time, you've probably heard the term ARO thrown around.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 3 */}
    <div className="blog-grid3 reveal">
      <Link href="/blogs/run-auto-repair-shop-houston" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog8.webp" alt="How to Run an Auto Repair Shop in Houston" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">05-APR-2026</div>
          <h3>How to Run an Auto Repair Shop in Houston: Tips from a 30-Year Veteran</h3>
          <p>If you own or manage an independent auto repair shop in Houston, you're sitting in one of the best markets in the entire country for this business.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/auto-shop-management-florida" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog9.webp" alt="Auto Shop Management Tips for Florida Owners" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">02-APR-2026</div>
          <h3>Auto Shop Management Tips for Florida Owners: Seasonal Demand & Growth</h3>
          <p>Running an independent auto repair shop in Florida is nothing like running one in Ohio or Michigan. The climate is different, the customers are different.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/best-scheduling-apps-auto-mechanics-2026" className="blog-card">
        <div className="blog-card-img">
          <img src="/site-assets/images/blog1.webp" alt="Best Scheduling Apps for Auto Mechanics 2026" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">08-APR-2026</div>
          <h3>Best Scheduling Apps for Auto Mechanics in 2026 (Free vs Paid)</h3>
          <p>If you're an auto mechanic or a shop owner still juggling a whiteboard and a phone to manage the day's work, you're not alone.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 4 - New Posts */}
    <div className="blog-grid3 reveal" style={{marginTop: '32px'}}>
      <Link href="/blogs/auto-shop-management-software-cost-2026" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=75" alt="Calculator and financial documents" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">05-MAY-2026</div>
          <h3>What Does Auto Shop Management Software Really Cost in 2026?</h3>
          <p>A transparent breakdown of auto shop management software pricing — what the tiers and add-ons really cost.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/auto1source-vs-tekmetric-vs-shopmonkey-2026" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=75" alt="Laptop business dashboard" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">08-MAY-2026</div>
          <h3>Auto1Source vs Tekmetric vs Shopmonkey: An Honest 2026 Comparison</h3>
          <p>Compare the three platforms on price, included features, and transparency — to help you choose what fits.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/hidden-auto-shop-software-fees" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop&q=75" alt="Receipts and invoices" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">12-MAY-2026</div>
          <h3>Hidden Software Fees: How Per-User and Add-On Charges Inflate Your Bill</h3>
          <p>Per-user fees, add-on modules, and integration charges that quietly inflate your shop's software bill.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 5 - New Posts */}
    <div className="blog-grid3 reveal" style={{marginTop: '32px'}}>
      <Link href="/blogs/integrated-payments-auto-shop" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=75" alt="Credit card payment terminal" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">15-MAY-2026</div>
          <h3>Integrated Payments for Auto Shops: Stop Losing Margin to Card Fees</h3>
          <p>How card-processing rates quietly eat your margin — and how integrated payments help you take it back.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/multi-shop-management-software-guide" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop&q=75" alt="Mechanic in busy shop" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">18-MAY-2026</div>
          <h3>Running Multiple Locations: A Guide to Multi-Shop Management Software</h3>
          <p>What multi-shop owners need from their software — centralized control, unified reporting, and consistency.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/auto-shop-software-buyers-checklist-2026" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=75" alt="Checklist notebook" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">22-MAY-2026</div>
          <h3>How to Choose Auto Shop Management Software: A 2026 Buyer's Checklist</h3>
          <p>The questions to ask, the features to demand, and the pricing red flags to watch when shopping for shop software.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 6 - New Posts */}
    <div className="blog-grid3 reveal" style={{marginTop: '32px'}}>
      <Link href="/blogs/vehicle-owner-app-auto-repair" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=75" alt="Using mobile app" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">25-MAY-2026</div>
          <h3>The Vehicle Owner App: How Online Booking, Approvals, and Payments Win Repeat Business</h3>
          <p>How giving customers a self-service app for booking, approvals, and payments builds loyalty.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/auto-shop-quotes-invoices-win-jobs" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=75" alt="Paperwork on desk" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">28-MAY-2026</div>
          <h3>Quotes and Invoices That Win Jobs: Speeding Up the Front Counter</h3>
          <p>How fast, professional, digitally-signable quotes and invoices win more jobs — and clean up your front counter.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/standardized-labor-pricing-auto-shop" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=600&h=400&fit=crop&q=75" alt="Mechanic working" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">01-JUN-2026</div>
          <h3>Standardized Labor Pricing: How a Labor Matrix Protects Your Margin</h3>
          <p>Why a standardized labor matrix is the single biggest margin-protection tool for an auto repair shop.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

    {/* Row 7 - Story */}
    <div className="blog-grid3 reveal" style={{marginTop: '32px'}}>
      <Link href="/blogs/the-story-behind-auto1source" className="blog-card">
        <div className="blog-card-img">
          <img src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=600&h=400&fit=crop&q=75" alt="Shop owner in garage" />
        </div>
        <div className="blog-card-body">
          <div className="blog-date">02-JUN-2026</div>
          <h3>Built by a Shop Owner: The Story Behind Auto1Source</h3>
          <p>The story behind Auto1Source — how a shop owner built the platform he wished he had, then made it affordable.</p>
          <span className="read-more-link">Read More <span className="read-more-arrow">↗</span></span>
        </div>
      </Link>
    </div>

  </div>
</section>




      </div>
    </>
  );
}
