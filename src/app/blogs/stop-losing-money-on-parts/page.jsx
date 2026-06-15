import React from 'react';
import Link from 'next/link';
import SignUpButton from '@/components/SignUpButton';
const PAGE_CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .blog-hero {
      background: #f7f8fa;
      padding: 100px 20px 0;
      border-bottom: 1px solid #e8e8e8;
    }
    .blog-hero-inner {
      max-width: 860px;
      margin: 0 auto;
      padding: 52px 0 0;
    }
    .blog-breadcrumb {
      font-size: 13px;
      color: #888;
      margin-bottom: 18px;
    }
    .blog-breadcrumb a { color: #e03c3c; text-decoration: none; }
    .blog-breadcrumb a:hover { text-decoration: underline; }
    .blog-hero-title {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.6rem, 4vw, 2.5rem);
      font-weight: 700;
      line-height: 1.25;
      color: #111;
      margin-bottom: 18px;
    }
    .blog-hero-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 13px;
      color: #888;
      margin-bottom: 36px;
    }
    .blog-hero-cover {
      width: 100%;
      max-width: 860px;
      margin: 0 auto;
      border-radius: 14px 14px 0 0;
      overflow: hidden;
      display: block;
    }
    .blog-hero-cover img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      display: block;
    }

    /* Article */
    .blog-article {
      max-width: 860px;
      margin: 0 auto;
      padding: 52px 20px 80px;
    }
    .blog-article p {
      font-size: 16px;
      line-height: 1.85;
      color: #333;
      margin-bottom: 20px;
    }
    .blog-h2 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.15rem, 2.5vw, 1.5rem);
      font-weight: 700;
      color: #111;
      margin: 48px 0 16px;
      padding-top: 8px;
    }
    .blog-h3 {
      font-size: clamp(1rem, 2vw, 1.15rem);
      font-weight: 600;
      color: #1a2d5a;
      margin: 32px 0 12px;
    }
    .blog-article li {
      font-size: 16px;
      line-height: 1.8;
      color: #333;
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
    }
    .blog-article li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #e03c3c;
    }
    .blog-inline-img {
      width: 100%;
      border-radius: 12px;
      margin: 32px 0;
      display: block;
    }

    
    /* FAQ Section */
    .faq-heading {
      margin-top: 56px !important;
      padding-top: 32px !important;
      border-top: 2px solid #f0f0f0 !important;
    }
    .faq-list { margin-top: 24px; margin-bottom: 8px; }
    .faq-item {
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      margin-bottom: 12px;
      overflow: hidden;
      background: #fff;
      transition: box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .faq-item:hover { border-color: #cbd5e1; }
    .faq-item[open] {
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      border-color: #1a2d5a;
    }
    .faq-item summary {
      padding: 18px 22px;
      font-weight: 600;
      font-size: 15px;
      color: #111;
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      user-select: none;
      transition: background 0.15s;
    }
    .faq-item summary:hover { background: #fafbfc; }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item summary::after {
      content: '+';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #1a2d5a;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      flex-shrink: 0;
      line-height: 1;
      transition: transform 0.2s;
    }
    .faq-item[open] summary::after { content: '−'; background: #111827; }
    .faq-ans {
      padding: 4px 22px 20px;
      border-top: 1px solid #f0f0f0;
      font-size: 14.5px;
      line-height: 1.75;
      color: #444;
    }
    .faq-ans p { font-size: 14.5px !important; color: #444 !important; line-height: 1.75 !important; margin-bottom: 12px !important; }
    .faq-ans p:last-child { margin-bottom: 0 !important; }

    /* CTA box */
    .blog-cta {
      background: linear-gradient(135deg, #1a2d5a 0%, #03466e 100%);
      border-radius: 16px;
      padding: 48px 40px;
      text-align: center;
      margin: 52px 0;
      color: #fff;
    }
    .blog-cta h3 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 700;
      color: #fff !important;
      margin-bottom: 12px;
    }
    .blog-cta p {
      font-size: 15px;
      color: #fff !important;
      opacity: .92;
      margin-bottom: 28px;
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;
    }
    .blog-cta a {
      display: inline-block;
      background: #e03c3c;
      color: #fff;
      padding: 14px 32px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px;
      text-decoration: none;
      transition: opacity .2s;
    }
    .blog-cta a:hover { opacity: .88; }

    /* Related */
    .related-section {
      background: #f7f8fa;
      padding: 64px 20px 80px;
      border-top: 1px solid #e8e8e8;
    }
    .related-inner {
      max-width: 1100px;
      margin: 0 auto;
    }
    .related-inner h2 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.2rem, 2.5vw, 1.5rem);
      font-weight: 700;
      margin-bottom: 28px;
      color: #111;
    }
    .related-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .rel-card {
      background: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 12px;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      transition: box-shadow .2s, border-color .2s;
    }
    .rel-card:hover { border-color: #bbb; box-shadow: 0 4px 16px rgba(0,0,0,.07); }
    .rel-img { height: 160px; overflow: hidden; }
    .rel-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s; }
    .rel-card:hover .rel-img img { transform: scale(1.04); }
    .rel-body { padding: 16px 18px 20px; flex: 1; display: flex; flex-direction: column; }
    .rel-body h4 { font-size: 14px; font-weight: 600; line-height: 1.45; margin-bottom: 10px; color: #111; flex: 1; }
    .blog-date { font-size: 11px; letter-spacing: .06em; color: #888; text-transform: uppercase; margin-bottom: 8px; }
    .read-more-link { font-size: 13px; font-weight: 600; color: #e03c3c; display: inline-flex; align-items: center; gap: 4px; margin-top: auto; }

    @media (max-width: 900px) {
      .related-grid { grid-template-columns: repeat(2, 1fr); }
      .blog-hero-cover img { height: 280px; }
    }
    @media (max-width: 600px) {
      .blog-article { padding: 36px 16px 60px; }
      .blog-cta { padding: 32px 20px; }
      .related-grid { grid-template-columns: 1fr; }
      .blog-hero-cover img { height: 220px; }
    }
  `;

export const metadata = {
  title: 'How to Stop Losing Money on Parts at Your Shop',
  description: 'Bad parts pricing can quietly cost you $40K-$70K a year. Here\'s where the money leaks and how to plug it this week. Start tightening your margins today.',
};

export default function BlogStopLosingMoneyOnParts() {
  
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="page-blogstoplosingmoneyonparts">



{/* Hero */}
<div className="blog-hero">
  <div className="blog-hero-inner">
    <div className="blog-breadcrumb">
      <Link href="/blogs">Blog & Insights</Link> &rsaquo; Article
    </div>
    <h1 className="blog-hero-title">How to Stop Losing Money on Parts: A Shop Owner&apos;s Guide</h1>
    <div className="blog-hero-meta">
      <span>Auto1Source Team</span>
      <span>·</span>
      <span>08-APR-2026</span>
    </div>
  </div>
  <div className="blog-hero-cover">
    <img src="/site-assets/images/blog4_cover.webp" alt="How to Stop Losing Money on Parts: A Shop Owner's Guide" loading="eager" />
  </div>
</div>

{/* Article Body */}
<article className="blog-article">
<p>If you own an independent auto repair shop, parts are one of your biggest revenue opportunities  and one of your biggest profit leaks. Most shop owners focus on labor rates and car count, but quietly, month after month, money slips out the door through bad parts pricing, poor ordering habits, and zero visibility into what's sitting on the shelf collecting dust.</p>
<p>Here's the hard truth: a survey of 618 auto repair shop owners found that 67% of shops are not maximizing their profit potential due to poor parts markup practices, and according to the Institute for Automotive Business Excellence, that weakness can cost a shop between $40,000 and $70,000 every single year. That's not a rounding error. That's a technician's salary. That's a down payment on a new bay!</p>
<p>This guide walks through the most common ways shop owners lose money on parts and exactly what to do about each one. No fluff, no theory, just practical steps you can act on this week.</p>
<h2 className="blog-h2">Why Parts Management Is So Hard to Get Right</h2>
<img src="/site-assets/images/blog4_1.webp" alt="" className="blog-inline-img" loading="lazy" />
<p>Parts management sounds simple on the surface. You order a part, mark it up, install it, and charge the customer. But in practice, it's a lot messier than that.</p>
<p>You're dealing with multiple vendors offering different prices on the same part. You've got a tech waiting on an order that hasn't arrived. A customer-supplied part just showed up at your door. You ordered the wrong fitment on a 2019 Chevy Equinox because the catalog gave you two options and your service writer guessed. Sound familiar?</p>
<p>The average independent shop juggles anywhere from 3 to 6 parts vendors at any given time. Without a system that shows you pricing side-by-side and tracks what you ordered, from whom, and at what cost, you're essentially managing your parts business on memory and hope. That's where the money goes.</p>
<h2 className="blog-h2">The 5 Biggest Ways Shops Lose Money on Parts</h2>
<h3 className="blog-h3">1. Not Using a Parts Markup Matrix</h3>
<p>The most common mistake shops make is applying a flat markup across the board, or worse, just doubling the cost on every part. That sounds simple, but it falls apart fast.</p>
<p>Doubling a $4 oil filter to $8? Fine. Doubling a $400 alternator to $800? That's going to cost you the job or send the customer straight to the dealership to price-shop. And doubling a $4,000 transmission? That's not even a real option.</p>
<p>A parts markup matrix solves this by applying different markup percentages based on the cost of the part. Lower-cost parts carry a higher markup percentage; higher-cost parts carry a lower one. The result is a balanced, consistent parts gross profit across your whole shop, not a guessing game on every repair order.</p>
<p>Here's a simple example of how a matrix might look:</p>
<p>Industry consultants generally recommend targeting an overall parts gross profit margin in the range of 50–58%. Shops that hit that range on a consistent basis see meaningfully higher take-home income, we're talking the difference between a shop doing $650,000 in gross sales keeping $115,000 in parts profit versus the same shop keeping $188,000 by running a solid matrix. That's a $73,000 swing from one change in process.</p>
<p>The matrix doesn't have to be complicated. But it does have to exist, be applied to every repair order, and be reviewed when your supplier pricing changes.</p>
<h3 className="blog-h3">2. Ordering from Multiple Vendors Without Price Comparison</h3>
<p>Most shops have a "go-to" parts vendor, usually whoever they built a relationship with first. They call that vendor first, accept whatever price is quoted, and move on. That habit is expensive.</p>
<p>Parts pricing varies significantly across vendors, on the same part, the same brand, the same day. Without a way to compare pricing quickly across your vendors in one place, you're almost certainly overpaying on a significant portion of your orders. Over a month, that adds up to real money.</p>
<p>The fix is to build a habit of multi-vendor price comparison before placing any order, and ideally, to use software that pulls pricing from all your vendors onto one screen at the same time. When a tech is building an estimate or work order and can see all vendor prices side-by-side, they naturally select the best option without any extra steps. That's the kind of system that pays for itself.</p>
<h3 className="blog-h3">3. Letting Customer-Supplied Parts into Your Shop</h3>
<p>This one is worth a direct conversation with your service advisor team. Allowing customers to bring their own parts might seem like a goodwill gesture, but it's one of the fastest ways to undercut your parts revenue, and it creates a liability problem at the same time.</p>
<p>When a customer supplies the part, you lose the markup that funds your overhead. If the part fails, you own the warranty headache even though you had no control over the part quality. Most experienced shop owners eventually land on a firm no-customer-parts policy, and for good reason. Letting customers supply parts doesn't just hurt your margin, it can expose you to quality and warranty risks that cost more than the original job was worth.</p>
<p>If a customer pushes back, a simple explanation goes a long way: "We stand behind every repair we do, and that means we have to control the parts that go into your vehicle."</p>
<h3 className="blog-h3">4. Dead Stock Sitting on the Shelf</h3>
<p>Take a walk through your parts room. How many of those boxes have been sitting there for six months or more? Dead inventory is money frozen on a shelf. Every dollar tied up in a part that isn't moving is a dollar you can't spend on payroll, equipment, or anything else that actually runs your shop.</p>
<p>This happens for a few reasons. Shops order speculatively to avoid rush situations. A job gets cancelled and the part doesn't get returned in time. Receiving is inconsistent and nobody notices the part sitting there. Over time, dead stock accumulates quietly.</p>
<p>Good auto shop parts management means tracking what's on the shelf, flagging slow-moving inventory, and keeping return windows on your radar. Most vendors have a return window, usually 30 to 90 days, and missing it means you're stuck with the part. A proper inventory system should alert you to aging stock before that window closes.</p>
<h3 className="blog-h3">5. Not Tracking COGS on Parts</h3>
<p>Cost of Goods Sold (COGS) is the actual cost of the parts you used to complete jobs. If you don't track COGS separately from your gross revenue, you have no real visibility into whether your parts pricing is working or not.</p>
<p>A shop that grosses $30,000 in a month might feel like it's doing well, until the owner realizes $18,000 of that went to parts and overhead, leaving almost nothing. Without breaking out parts of COGS explicitly, that story never gets told clearly.</p>
<p>Tracking COGS by job, by month, and year-over-year gives you the data to make smart pricing decisions, not just gut-feel adjustments when things feel tight.</p>
<h2 className="blog-h2">How to Build a Better Parts Management System</h2>
<p>You don't need to overhaul everything at once. Start with these concrete steps:</p>
<h3 className="blog-h3">Set Up Your Markup Matrix This Week</h3>
<p>If you don't have one, build a simple tier-based matrix based on part cost ranges. Write it down. Make it official. Train your service advisors to apply it to every single repair order, no exceptions.</p>
<h3 className="blog-h3">Compare Vendor Pricing Before Placing Orders</h3>
<p>Whether you do this manually with a quick phone call to two vendors or with software that pulls it automatically, the habit of comparison will save you money every month. Over a year, the impact is significant.</p>
<h3 className="blog-h3">Do a Quarterly Dead Stock Audit</h3>
<p>Walk the parts room. Pull anything that's been sitting longer than 60 days and check whether you're still inside the return window. Return what you can. Discount what you can't.</p>
<h3 className="blog-h3">Stop Accepting Customer-Supplied Parts</h3>
<p>Create a written policy and post it at the service counter. Your team needs to be consistent on this, one service advisor who "makes exceptions" undermines the whole policy.</p>
<h3 className="blog-h3">Start Tracking Parts COGS by Job</h3>
<p>This doesn't require expensive software. It requires discipline. But the shops that track this number closely are the shops that find out early when something is off, not at year-end when it's too late to adjust.</p>
<h2 className="blog-h2">One Thing That Makes All of This Easier</h2>
<p>Managing parts well is mostly a systems problem. The shops that struggle aren't struggling because their owners are bad at business, they're struggling because they don't have the right tools to manage a parts operation at volume without everything falling through the cracks.</p>
<p>That's where shop management software earns its keep. When you're ordering, pricing, inventory, and COGS tracking all live in the same system, the friction disappears. Your service writer isn't switching between tabs or calling two vendors separately. Your markup matrix is applied automatically. Your dead stock shows up on a report instead of being discovered on a physical shelf walk.</p>
<p>Auto1Source was built with exactly this in mind. It was created by Bill Tyson, a shop owner with over 30 years of running multiple locations in Palm Beach County, Florida, someone who understood the parts management problem firsthand. The platform includes a complete parts management system with one-click ordering from multiple vendors on a single screen, automated restock orders, preferred vendor selection, and COGS tracking built right in. And because it's free to shop owners, there's no monthly subscription eating into the margins you're trying to protect.</p>
<p>If you're still ordering parts by phone or juggling multiple vendor portals in separate browser tabs, it's worth taking a look at how a system like AutoSource can simplify that process, especially if you want to run a tighter markup matrix without adding administrative work.</p>
<h2 className="blog-h2 faq-heading">Frequently Asked Questions</h2>
<div className="faq-list">
<details className="faq-item">
<summary>How much should an auto repair shop mark up parts?</summary>
<div className="faq-ans"><p>Most auto repair shops should target a parts gross profit margin of 50–58%.</p>
<p>This is usually achieved through a sliding markup rather than a flat rate. Lower-cost parts carry higher markups, while expensive parts use lower percentages. For example, a $10 part may be marked up 100%, while a $500 part may be 30 – 40%. The goal is a consistent overall margin across all repair orders.</p></div>
</details>
<details className="faq-item">
<summary>What is a parts markup matrix and does my shop need one?</summary>
<div className="faq-ans"><p>A parts markup matrix standardises how you price parts based on cost ranges.</p>
<p>Instead of guessing or applying a flat percentage, it applies predefined markups automatically, ensuring consistent pricing and protecting margins. Many shops underprice parts due to lack of structure, which leads to lost profit. If you're manually pricing or using a flat markup, a matrix is essential.</p></div>
</details>
<details className="faq-item">
<summary>Should I allow customers to bring their own parts?</summary>
<div className="faq-ans"><p>In most cases, shops should not allow customer-supplied parts.</p>
<p>You lose your parts margin and take on warranty risk for components you didn’t source. If the part fails, the responsibility often falls on you, even if quality is out of your control. It also creates inconsistent policies. A clear “no customer-supplied parts” rule protects both revenue and reputation.</p></div>
</details>
<details className="faq-item">
<summary>What’s the difference between parts markup and parts margin?</summary>
<div className="faq-ans"><p>Parts markup is based on cost, while parts margin is based on selling price.</p>
<p>If you buy a part for $100 and sell it for $150, the markup is 50%, but the margin is 33%. Most industry benchmarks refer to margin, not markup. Understanding the difference is critical when setting pricing targets and evaluating profitability.</p></div>
</details>
<details className="faq-item">
<summary>How do I know if dead stock is hurting my shop?</summary>
<div className="faq-ans"><p>Dead stock becomes a problem when parts sit unused for extended periods.</p>
<p>A common rule is to review anything sitting for more than 60 days. These items tie up cash, take space, and may fall outside vendor return windows. Regular inventory checks and tracking stock age in your software help prevent unnecessary write-offs.</p></div>
</details>
<details className="faq-item">
<summary>How do I calculate COGS for my auto shop?</summary>
<div className="faq-ans"><p>COGS is the total cost of all parts used to complete jobs over a period.</p>
<p>Add up what you paid vendors for parts, then subtract that from your parts revenue to calculate gross profit. Tracking this monthly helps you evaluate whether your pricing strategy is working. Many systems automate this, reducing manual calculations and improving accuracy.</p></div>
</details>
<details className="faq-item">
<summary>Is it worth switching from spreadsheets to shop management software just for parts ordering?</summary>
<div className="faq-ans"><p>Yes, parts management alone often justifies switching to shop software.</p>
<p>Spreadsheets can’t compare vendor pricing, automate markups, track COGS, or flag dead stock effectively. These gaps lead to hidden profit loss over time. Even at moderate volume, proper software improves efficiency and margins enough to outweigh the effort of switching.</p></div>
</details>
</div>{/* CTA Box */}
  <div className="blog-cta">
    <h3>Ready to Run a Smarter Shop?</h3>
    <p>Auto1Source is completely free for shop owners. No subscriptions, no credit card. Just powerful shop management software built by someone who's been in your position.</p>
    <SignUpButton tag="a">Get Started Free</SignUpButton>
  </div>
</article>

{/* Related Posts */}
<section className="related-section">
  <div className="related-inner">
    <h2>More From the Blog</h2>
    <div className="related-grid">
      
      <Link href="/blogs/is-free-auto-repair-shop-software-good" className="rel-card">
        <div className="rel-img"><img src="/site-assets/images/blogcover.webp" alt="If you run an independent auto repair shop, you've probably asked this question at least once: Is free auto repair shop software actually worth anything?" loading="lazy" /></div>
        <div className="rel-body">
          <div className="blog-date">05-APR-2026</div>
          <h4>If you run an independent auto repair shop, you've probably asked this question at least once: Is free auto repair shop software actually worth anything?</h4>
          <span className="read-more-link">Read More <span>↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/switch-spreadsheets-to-software" className="rel-card">
        <div className="rel-img"><img src="/site-assets/images/blog2cover.webp" alt="How to Switch Your Auto Shop from Spreadsheets to Software in 1 Day" loading="lazy" /></div>
        <div className="rel-body">
          <div className="blog-date">02-APR-2026</div>
          <h4>How to Switch Your Auto Shop from Spreadsheets to Software in 1 Day</h4>
          <span className="read-more-link">Read More <span>↗</span></span>
        </div>
      </Link>
      <Link href="/blogs/5-signs-auto-shop-needs-management-software" className="rel-card">
        <div className="rel-img"><img src="/site-assets/images/blog3_cover.webp" alt="5 Signs Your Auto Shop Needs Management Software Right Now" loading="lazy" /></div>
        <div className="rel-body">
          <div className="blog-date">02-APR-2026</div>
          <h4>5 Signs Your Auto Shop Needs Management Software Right Now</h4>
          <span className="read-more-link">Read More <span>↗</span></span>
        </div>
      </Link>
    </div>
  </div>
</section>




      </div>
    </>
  );
}
