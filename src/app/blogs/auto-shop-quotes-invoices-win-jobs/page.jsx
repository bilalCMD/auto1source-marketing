import React from 'react';
import Link from 'next/link';
import SignUpButton from '@/components/SignUpButton';
const PAGE_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .blog-hero { background: #f7f8fa; padding: 100px 20px 0; border-bottom: 1px solid #e8e8e8; }
  .blog-hero-inner { max-width: 860px; margin: 0 auto; padding: 52px 0 0; }
  .blog-breadcrumb { font-size: 13px; color: #888; margin-bottom: 18px; }
  .blog-breadcrumb a { color: #e03c3c; text-decoration: none; }
  .blog-breadcrumb a:hover { text-decoration: underline; }
  .blog-hero-title { font-family: 'Sora', sans-serif; font-size: clamp(1.6rem, 4vw, 2.5rem); font-weight: 700; line-height: 1.25; color: #111; margin-bottom: 18px; }
  .blog-hero-meta { display: flex; align-items: center; gap: 16px; font-size: 13px; color: #888; margin-bottom: 36px; }
  .blog-hero-cover { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 14px 14px 0 0; overflow: hidden; display: block; }
  .blog-hero-cover img { width: 100%; height: 420px; object-fit: cover; display: block; }

  .blog-article { max-width: 860px; margin: 0 auto; padding: 52px 20px 80px; }
  .blog-article p { font-size: 16px; line-height: 1.85; color: #333; margin-bottom: 20px; }
  .blog-h2 { font-family: 'Sora', sans-serif; font-size: clamp(1.2rem, 2.5vw, 1.55rem); font-weight: 800; color: #111; margin: 48px 0 16px; padding-top: 8px; }
  .blog-h3 { font-size: clamp(1rem, 2vw, 1.18rem); font-weight: 700; color: #1a2d5a; margin: 28px 0 12px; }

  .blog-callout { background: linear-gradient(135deg, #f0f7ff, #e6f0ff); border-left: 4px solid #1a2d5a; border-radius: 10px; padding: 20px 24px; margin: 32px 0; }
  .blog-callout-label { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #1a2d5a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .blog-callout-text { font-size: 16px; line-height: 1.7; color: #1a2d5a; font-weight: 500; }

  .blog-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 36px 0; }
  .blog-stat-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px 18px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: transform 0.2s, box-shadow 0.2s; }
  .blog-stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
  .blog-stat-value { font-family: 'Sora', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: #e03c3c; margin-bottom: 8px; line-height: 1.1; word-break: break-word; }
  .blog-stat-label { font-size: 13px; line-height: 1.5; color: #555; font-weight: 500; }

  .blog-table-wrap { overflow-x: auto; margin: 36px 0; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .blog-table { width: 100%; border-collapse: collapse; font-size: 14.5px; background: #fff; }
  .blog-table thead { background: #1a2d5a; color: #fff; }
  .blog-table th { padding: 14px 16px; text-align: left; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 13.5px; text-transform: uppercase; letter-spacing: 0.5px; }
  .blog-table td { padding: 14px 16px; border-top: 1px solid #f0f0f0; color: #333; line-height: 1.5; }
  .blog-table tbody tr:nth-child(even) { background: #fafbfc; }
  .blog-table tbody tr:hover { background: #f5f7fa; }
  .blog-table td:first-child { font-weight: 600; color: #1a2d5a; }

  .blog-cta { background: linear-gradient(135deg, #1a2d5a, #03466e); color: #fff; padding: 36px 28px; border-radius: 14px; margin-top: 48px; text-align: center; }
  .blog-cta h3 { font-family: 'Sora', sans-serif; font-size: 1.4rem; color: #fff !important;
      margin-bottom: 12px; }
  .blog-cta p { color: #fff !important; opacity: .92; margin-bottom: 22px; font-size: 15px; }

  .related-section { background: #f7f8fa; padding: 60px 20px; border-top: 1px solid #e8e8e8; }
  .related-inner { max-width: 1100px; margin: 0 auto; }
  .related-inner h2 { font-family: 'Sora', sans-serif; font-size: 1.5rem; margin-bottom: 28px; }
  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .rel-card { background: #fff; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: transform 0.15s, box-shadow 0.15s; }
  .rel-card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
  .rel-img img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .rel-body { padding: 16px 18px 20px; }
  .blog-date { font-size: 11px; color: #888; margin-bottom: 6px; letter-spacing: .5px; }
  .rel-body h4 { font-size: 14.5px; font-weight: 700; color: #111; margin-bottom: 8px; line-height: 1.4; }
  .read-more-link { font-size: 13px; color: #e03c3c; font-weight: 600; }

  @media (max-width: 800px) {
    .related-grid { grid-template-columns: 1fr; }
    .blog-hero-cover img { height: 260px; }
    .blog-stats-row { grid-template-columns: 1fr; gap: 12px; }
    .blog-table { font-size: 13px; }
    .blog-table th, .blog-table td { padding: 10px 12px; }
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
`;

export const metadata = {
  title: 'Auto Shop Quotes & Invoices That Win Jobs | Auto1Source',
  description: 'Clear, fast quotes and invoices win more approved jobs and reduce disputes. Here\'s how to speed up your front counter and get paid faster at your auto shop.',
};

export default function BlogAutoShopQuotesInvoicesWinJobs() {
  
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div>

  <section className="blog-hero">
    <div className="blog-hero-inner">
      <div className="blog-breadcrumb"><Link href="/blogs">Blog</Link> / Article</div>
      <h1 className="blog-hero-title">{`Quotes and Invoices That Win Jobs: Speeding Up the Front Counter`}</h1>
      <div className="blog-hero-meta">
        <span>28-MAY-2026</span>
        <span>•</span>
        <span>Auto1Source Team</span>
      </div>
    </div>
    <div className="blog-hero-cover">
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=860&h=420&fit=crop&q=80" alt={`Quotes and Invoices That Win Jobs: Speeding Up the Front Counter`} loading="eager" />
    </div>
  </section>

  <article className="blog-article">
    <div className="blog-callout">
      <div className="blog-callout-label">Quick Answer</div>
      <div className="blog-callout-text">{`Fast, clear, itemized quotes win more approvals and fewer "why is it so expensive?" calls, and clean digital invoices get you paid sooner. The keys are removing friction (send a quote the customer can approve from their phone), being transparent (separate parts and labor in plain language), and never being limited by per-document or per-user software fees.`}</div>
    </div>
    <div className="blog-stats-row">
      <div className="blog-stat-card">
        <div className="blog-stat-value">{`~10 min`}</div>
        <div className="blog-stat-label">{`Digital approval time vs. hours of phone tag`}</div>
      </div>
      <div className="blog-stat-card">
        <div className="blog-stat-value">{`Unlimited`}</div>
        <div className="blog-stat-label">{`Quotes and invoices on Auto1Source — no caps`}</div>
      </div>
      <div className="blog-stat-card">
        <div className="blog-stat-value">{`Faster`}</div>
        <div className="blog-stat-label">{`Clear digital invoices get the shop paid sooner`}</div>
      </div>
    </div>
    <h2 className="blog-h2">{`The front counter is where jobs are won or lost`}</h2>
    <p>{`A quote isn't paperwork — it's a sales document. If it's slow to produce, hard to read, or stuck in a voicemail, you lose the job or the momentum. Speed and clarity are what turn an estimate into approved work.`}</p>
    <p>{`A quote a customer can approve from their phone closes in minutes; phone tag stretches it into hours and stalls the bay.`}</p>
    <h2 className="blog-h2">{`What a job-winning quote looks like`}</h2>
    <p>{`Itemized — a line for every job, with parts and labor separated.`}</p>
    <p>{`Plain-language — "replace front brake pads and resurface rotors," not codes.`}</p>
    <p>{`Prioritized — what's needed now versus what can wait.`}</p>
    <p>{`One-tap to approve — sent digitally so the customer can say yes from anywhere.`}</p>
    <h2 className="blog-h2">{`Why "unlimited" matters`}</h2>
    <p>{`Some platforms meter what you can do — capping documents or charging per user. That turns a busy day into a cost decision, which is backwards. Auto1Source includes unlimited quotes and invoices in its flat $79.99/month plan, so the front counter never hits a wall and you're never penalized for being busy.`}</p>
    <h2 className="blog-h2">{`Get paid faster, too`}</h2>
    <p>{`A clean digital invoice with integrated payment lets the customer pay on pickup — or from their phone — instead of "I'll call you with my card later." Closing the loop between invoice and payment in one system is the difference between getting paid today and chasing it next week.`}</p>
    <h2 className="blog-h2 faq-heading">{`Frequently Asked Questions`}</h2>
    <div className="faq-list">
    <details className="faq-item">
      <summary>{`How do I write a quote that gets approved?`}</summary>
      <div className="faq-ans">
      <p>{`Make it itemized, plain-language, prioritized, and approvable from the customer's phone.`}</p>
      <p>{`Separating parts and labor in plain terms builds trust, prioritizing tells the customer what's urgent, and one-tap digital approval removes the delay of phone tag.`}</p>
      </div>
    </details>
    <details className="faq-item">
      <summary>{`Why does "unlimited quotes and invoices" matter?`}</summary>
      <div className="faq-ans">
      <p>{`So a busy day never becomes a cost decision or hits a software cap.`}</p>
      <p>{`Platforms that meter documents or charge per user penalize growth. Auto1Source includes unlimited quotes and invoices in its flat plan.`}</p>
      </div>
    </details>
    <details className="faq-item">
      <summary>{`How can my shop get paid faster?`}</summary>
      <div className="faq-ans">
      <p>{`Use clean digital invoices with integrated payment so customers pay at pickup or from their phone.`}</p>
      <p>{`Closing the gap between invoice and payment in one system avoids "I'll call with my card later" and the follow-up that rarely happens promptly.`}</p>
      </div>
    </details>
    <details className="faq-item">
      <summary>{`Do digital quotes really speed up approvals?`}</summary>
      <div className="faq-ans">
      <p>{`Yes — a phone-friendly quote can be approved in minutes instead of hours.`}</p>
      <p>{`Voicemails and callbacks stretch approvals across a day while the bay sits. A tap-to-approve quote keeps work moving.`}</p>
      </div>
    </details>
    </div>
<div className="blog-cta">
      <h3>Ready to Run a Smarter Shop?</h3>
      <p>Auto1Source is the complete operating system for auto repair shops — for one flat price of $79.99/month. All features included.</p>
      <SignUpButton tag="a">Get Started Free</SignUpButton>
    </div>
  </article>

  <section className="related-section">
    <div className="related-inner">
      <h2>More From the Blog</h2>
      <div className="related-grid">
        <Link href="/blogs/auto-shop-management-software-cost-2026" className="rel-card">
          <div className="rel-img"><img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&q=75" alt="Software Cost" loading="lazy" /></div>
          <div className="rel-body">
            <div className="blog-date">05-MAY-2026</div>
            <h4>What Does Auto Shop Management Software Really Cost in 2026?</h4>
            <span className="read-more-link">Read More <span>↗</span></span>
          </div>
        </Link>
        <Link href="/blogs/auto1source-vs-tekmetric-vs-shopmonkey-2026" className="rel-card">
          <div className="rel-img"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=75" alt="Comparison" loading="lazy" /></div>
          <div className="rel-body">
            <div className="blog-date">08-MAY-2026</div>
            <h4>Auto1Source vs Tekmetric vs Shopmonkey: An Honest 2026 Comparison</h4>
            <span className="read-more-link">Read More <span>↗</span></span>
          </div>
        </Link>
        <Link href="/blogs/the-story-behind-auto1source" className="rel-card">
          <div className="rel-img"><img src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=400&h=200&fit=crop&q=75" alt="Story" loading="lazy" /></div>
          <div className="rel-body">
            <div className="blog-date">02-JUN-2026</div>
            <h4>Built by a Shop Owner: The Story Behind Auto1Source</h4>
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
