'use client';

import React, { useState } from 'react';

/**
 * PageFAQ - reusable FAQ accordion for marketing pages
 * Usage: <PageFAQ title="Frequently asked questions" intro="..." items={[{q, a}, ...]} />
 */
export default function PageFAQ({ title = 'Frequently asked questions', intro = '', items = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="page-faq-section">
      <style>{`
        .page-faq-section {
          background: #fff;
          padding: 80px 20px;
          border-top: 1px solid #f0f0f0;
        }
        .page-faq-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        .page-faq-left h2 {
          font-family: 'Sora', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #111;
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .page-faq-left p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
        .page-faq-list { display: flex; flex-direction: column; gap: 10px; }
        .page-faq-item {
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s;
        }
        .page-faq-item.open { box-shadow: 0 4px 16px rgba(0,0,0,0.04); }
        .page-faq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #111;
          gap: 12px;
          user-select: none;
        }
        .page-faq-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #1a2d5a;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 700;
          flex-shrink: 0; line-height: 1;
          transition: transform 0.2s;
        }
        .page-faq-icon::before { content: "+"; }
        .page-faq-item.open .page-faq-icon::before { content: "−"; }
        .page-faq-item.open .page-faq-icon { background: #111827; }
        .page-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease;
          font-size: 13.5px; color: #555; line-height: 1.65;
          padding: 0 20px;
        }
        .page-faq-item.open .page-faq-a {
          max-height: 500px;
          padding: 14px 20px 18px;
          border-top: 1px solid #f0f0f0;
        }
        @media (max-width: 800px) {
          .page-faq-inner { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
      <div className="page-faq-inner">
        <div className="page-faq-left">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="page-faq-list">
          {items.map((item, i) => (
            <div key={i} className={'page-faq-item' + (openIdx === i ? ' open' : '')}>
              <div className="page-faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="page-faq-icon"></span>
              </div>
              <div className="page-faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NOTE: buildFaqSchema() lives in '@/lib/faqSchema' (a server-safe module) so
// that server components can call it at module scope. It intentionally does NOT
// live here, because this file is a Client Component.
