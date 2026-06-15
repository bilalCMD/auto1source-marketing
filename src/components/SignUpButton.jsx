'use client';

import React, { useState } from 'react';
import { appHref } from '@/lib/appUrl';

// Reusable CTA button that opens a role picker modal and routes to the existing
// signup/login page in the application (now on app.auto1source.com). Used for all
// "Sign Up", "Get Started", "Start Free" type CTAs across the marketing site so
// every button actually does something.
//
// Props:
//   - children: button label (defaults to "Sign Up")
//   - className: CSS class (so it matches the surrounding page's styling)
//   - mode: 'signup' (default) or 'login'
//   - tag: 'button' (default) or 'a' (renders as <a> for inline link styling)
export default function SignUpButton({
  children = 'Sign Up',
  className = '',
  mode = 'signup',
  tag = 'button',
  style,
}) {
  const [open, setOpen] = useState(false);

  const handleRole = (role) => {
    setOpen(false);
    const action = mode === 'signup' ? 'sign-up' : 'login';
    window.location.href = appHref(role, action);
  };

  // Stop bubbling so clicking the button doesn't trigger parent handlers
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const trigger = tag === 'a' ? (
    <a href="#!" className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  ) : (
    <button type="button" className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );

  return (
    <>
      {trigger}

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem 1.75rem',
              width: 'min(420px, calc(100vw - 2rem))',
              boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: '#f5f5f5',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                cursor: 'pointer',
                fontSize: 16,
                color: '#555',
              }}
            >
              ✕
            </button>
            <div style={{ textAlign: 'center', marginBottom: '0.4rem', fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>
              {mode === 'signup' ? 'Create your account' : 'Welcome back'}
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#888', marginBottom: '1.5rem' }}>
              Pick your role to continue
            </div>
            {[
              { slug: 'owner', label: 'Auto Shop Owner' },
              { slug: 'employee', label: 'Auto Tech / Employee' },
              { slug: 'vendor', label: 'Parts Vendor' },
              { slug: 'customer', label: 'Vehicle Owner' },
            ].map((r) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => handleRole(r.slug)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 14px',
                  marginBottom: '8px',
                  background: '#fff',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#111',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#111';
                  e.currentTarget.style.background = '#f8f8f8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e5e5';
                  e.currentTarget.style.background = '#fff';
                }}
              >
                {r.label} →
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
