import React from 'react';
import Link from 'next/link';
export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px 60px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0 0 8px', fontFamily: 'Sora, sans-serif', color: '#111827' }}>404</h1>
      <p style={{ fontSize: '18px', color: '#7a8494', marginBottom: '28px' }}>
        We couldn't find the page you were looking for.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          background: '#1a1a2e',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
