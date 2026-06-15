'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { appHref } from '@/lib/appUrl';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [hoverMenu, setHoverMenu] = useState(null); // 'features' | 'shoptypes' | null
  const pathname = usePathname();

  // Close drawer / auth on route change
  useEffect(() => {
    setDrawerOpen(false);
    setAuthOpen(false);
    setHoverMenu(null);
  }, [pathname]);

  // Lock scroll when drawer / auth open
  useEffect(() => {
    if (drawerOpen || authOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [drawerOpen, authOpen]);

  // Close auth on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setAuthOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openAuth = (tab) => {
    setAuthTab(tab || 'login');
    setAuthOpen(true);
  };

  // Navigate to the appropriate login/signup page in the application (subdomain).
  // Slugs match EModuleId enum: owner | employee | customer | vendor.
  const goToAuth = (role) => {
    const roleSlug = {
      'Auto Shop': 'owner',          // Shop owner -> /owner/login
      'Employee': 'employee',         // Auto tech -> /employee/login
      'Parts Vendor': 'vendor',       // Parts vendor -> /vendor/login
      'Vehicle Owner': 'customer',    // Vehicle owner -> /customer/login
    }[role] || 'owner';
    const action = authTab === 'signup' ? 'sign-up' : 'login';
    setAuthOpen(false);
    window.location.href = appHref(roleSlug, action);
  };

  const [selectedRole, setSelectedRole] = useState('Auto Shop');
  const handleSubmit = () => {
    goToAuth(selectedRole);
  };

  const isActive = (path) => pathname === path;

  // Hover handlers with delay so menu doesn't disappear when moving between trigger and menu
  const hoverTimer = useRef(null);
  const showMenu = (name) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoverMenu(name);
  };
  const hideMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverMenu(null), 100);
  };

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <img src="/site-assets/images/logodesktop.svg" alt="Auto1Source" width="180" height="60" />
        </Link>

        <div className="nav-links">

          {/* FEATURES */}
          <div
            className="nav-item"
            onMouseEnter={() => showMenu('features')}
            onMouseLeave={hideMenu}
          >
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Features <span className="chev">▾</span>
            </span>
            <div
              className="mega-menu"
              style={{ display: hoverMenu === 'features' ? 'block' : 'none' }}
              onMouseEnter={() => showMenu('features')}
              onMouseLeave={hideMenu}
            >
              <div className="mega-inner">
                <div>
                  <div className="mega-col-label">Features</div>
                  <Link className="mega-row" href="/shopflow">
                    <div className="mega-icon ic-green">🔧</div>
                    <div><div className="mrt">Shop Flow</div><div className="mrd">Work orders &amp; workflow</div></div>
                  </Link>
                  <Link className="mega-row" href="/employees">
                    <div className="mega-icon ic-blue">👤</div>
                    <div><div className="mrt">Employees</div><div className="mrd">Payroll &amp; HR</div></div>
                  </Link>
                  <Link className="mega-row" href="/customers">
                    <div className="mega-icon ic-purple">👥</div>
                    <div><div className="mrt">Customers</div><div className="mrd">CRM &amp; communication</div></div>
                  </Link>
                  <Link className="mega-row" href="/parts">
                    <div className="mega-icon ic-orange">🔩</div>
                    <div><div className="mrt">Parts</div><div className="mrd">Multi-vendor ordering</div></div>
                  </Link>
                  <Link className="mega-row" href="/marketing">
                    <div className="mega-icon ic-pink">📣</div>
                    <div><div className="mrt">Marketing</div><div className="mrd">Retention &amp; reviews</div></div>
                  </Link>
                </div>

                <div className="mega-vline"></div>

                <div>
                  <div className="mega-col-label">Shop Types</div>
                  <Link className="mega-row" href="/auto-repair-shop">
                    <div className="mega-icon ic-indigo">🏢</div>
                    <div><div className="mrt">Independent Shops</div><div className="mrd">Structure without complexity</div></div>
                  </Link>
                  <Link className="mega-row" href="/multi-location">
                    <div className="mega-icon ic-sky">📦</div>
                    <div><div className="mrt">Multi-Location</div><div className="mrd">Centralized control</div></div>
                  </Link>
                  <Link className="mega-row" href="/tire-shop">
                    <div className="mega-icon ic-yellow">🛠</div>
                    <div><div className="mrt">Specialty Shops</div><div className="mrd">Advanced tools</div></div>
                  </Link>
                  <Link className="mega-row" href="/startup-shops">
                    <div className="mega-icon ic-rose">🚀</div>
                    <div><div className="mrt">Startup Shops</div><div className="mrd">Build right from day one</div></div>
                  </Link>
                </div>

                <div className="mega-vline"></div>

                <div className="mega-promo">
                  <div className="mega-promo-emoji">🏎️</div>
                  <div className="mega-promo-title">All-in-one shop management</div>
                  <div className="mega-promo-desc">Everything your shop needs, in one powerful platform.</div>
                  <Link href="/pricing" className="mega-promo-btn">See Plans →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* SHOP TYPES */}
          <div
            className="nav-item"
            onMouseEnter={() => showMenu('shoptypes')}
            onMouseLeave={hideMenu}
          >
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Shop Types <span className="chev">▾</span>
            </span>
            <div
              className="shop-mega"
              style={{ display: hoverMenu === 'shoptypes' ? 'block' : 'none' }}
              onMouseEnter={() => showMenu('shoptypes')}
              onMouseLeave={hideMenu}
            >
              <div className="shop-inner">
                <div>
                  <div className="mega-col-label">Built for every shop</div>
                  <Link className="mega-row" href="/auto-repair-shop">
                    <div className="mega-icon ic-blue">🚗</div>
                    <div><div className="mrt">Auto Repair Shop</div><div className="mrd">General repair &amp; diagnostics</div></div>
                  </Link>
                  <Link className="mega-row" href="/tire-shop">
                    <div className="mega-icon ic-gray">⚙️</div>
                    <div><div className="mrt">Tire Shop</div><div className="mrd">Sales, fitting &amp; balancing</div></div>
                  </Link>
                  <Link className="mega-row" href="/quick-lube">
                    <div className="mega-icon ic-yellow">⚡</div>
                    <div><div className="mrt">Quick Lube</div><div className="mrd">Fast oil &amp; fluid service</div></div>
                  </Link>
                </div>
                <div>
                  <div className="mega-col-label" style={{ visibility: 'hidden' }}>_</div>
                  <Link className="mega-row" href="/mobile-mechanics">
                    <div className="mega-icon ic-orange">📍</div>
                    <div><div className="mrt">Mobile Mechanics</div><div className="mrd">On-site jobs &amp; GPS dispatch</div></div>
                  </Link>
                  <Link className="mega-row" href="/startup-shops">
                    <div className="mega-icon ic-green">🌱</div>
                    <div><div className="mrt">Startup Shops</div><div className="mrd">Lean setup, scale as you grow</div></div>
                  </Link>
                </div>
              </div>
              <div style={{ height: '1px', background: '#f0f0f0', margin: '.9rem 0' }}></div>
              <Link className="mega-row" href="/pricing" style={{ background: '#f8f9ff', borderRadius: '9px', padding: '10px 12px' }}>
                <div className="mega-icon ic-indigo">💎</div>
                <div style={{ flex: 1 }}>
                  <div className="mrt">View all plans &amp; pricing</div>
                  <div className="mrd">Find the right plan for your shop</div>
                </div>
                <span style={{ color: '#aaa', fontSize: '15px' }}>→</span>
              </Link>
            </div>
          </div>

          <Link className={`nav-link ${isActive('/integrations') ? 'active' : ''}`} href="/integrations">Integrations</Link>
          <Link className={`nav-link ${isActive('/mobile-app') ? 'active' : ''}`} href="/mobile-app">Mobile Apps</Link>
          <Link className={`nav-link ${isActive('/vehicleowner') ? 'active' : ''}`} href="/vehicleowner">Vehicle Owner</Link>
          <Link className={`nav-link ${isActive('/pricing') ? 'active' : ''}`} href="/pricing">Pricing</Link>
          <Link className={`nav-link ${isActive('/blogs') ? 'active' : ''}`} href="/blogs">Blogs</Link>
        </div>

        <div className="nav-auth-group">
          <button className="nav-btn-login" onClick={() => openAuth('login')}>Login</button>
          <button className="nav-btn-signup" onClick={() => openAuth('signup')}>Sign Up →</button>
        </div>

        <button className="nav-hamburger" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-mobile-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <img src="/site-assets/images/logodesktop.svg" alt="Auto1Source" width="120" height="32" style={{ height: '32px', display: 'block' }} />
          </Link>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        <div className="drawer-section-title">Features</div>
        <Link className="drawer-item" href="/shopflow" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-green">🔧</div>
          <div><div className="drawer-item-title">Shop Flow</div><div className="drawer-item-desc">Work orders &amp; workflow</div></div>
        </Link>
        <Link className="drawer-item" href="/employees" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-blue">👤</div>
          <div><div className="drawer-item-title">Employees</div><div className="drawer-item-desc">Payroll &amp; HR</div></div>
        </Link>
        <Link className="drawer-item" href="/customers" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-purple">👥</div>
          <div><div className="drawer-item-title">Customers</div><div className="drawer-item-desc">CRM &amp; communication</div></div>
        </Link>
        <Link className="drawer-item" href="/parts" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-orange">🔩</div>
          <div><div className="drawer-item-title">Parts</div><div className="drawer-item-desc">Multi-vendor ordering</div></div>
        </Link>
        <Link className="drawer-item" href="/marketing" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-pink">📣</div>
          <div><div className="drawer-item-title">Marketing</div><div className="drawer-item-desc">Retention &amp; reviews</div></div>
        </Link>

        <div className="drawer-divider"></div>

        <div className="drawer-section-title">Shop Types</div>
        <Link className="drawer-item" href="/auto-repair-shop" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-indigo">🏢</div>
          <div><div className="drawer-item-title">Independent Shops</div></div>
        </Link>
        <Link className="drawer-item" href="/multi-location" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-sky">📦</div>
          <div><div className="drawer-item-title">Multi-Location</div></div>
        </Link>
        <Link className="drawer-item" href="/tire-shop" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-yellow">🛠</div>
          <div><div className="drawer-item-title">Specialty Shops</div></div>
        </Link>
        <Link className="drawer-item" href="/quick-lube" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-yellow">⚡</div>
          <div><div className="drawer-item-title">Quick Lube</div></div>
        </Link>
        <Link className="drawer-item" href="/mobile-mechanics" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-orange">📍</div>
          <div><div className="drawer-item-title">Mobile Mechanics</div></div>
        </Link>
        <Link className="drawer-item" href="/startup-shops" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-icon ic-rose">🚀</div>
          <div><div className="drawer-item-title">Startup Shops</div></div>
        </Link>

        <div className="drawer-divider"></div>

        <Link className="drawer-link" href="/integrations" onClick={() => setDrawerOpen(false)}>Integrations</Link>
        <Link className="drawer-link" href="/mobile-app" onClick={() => setDrawerOpen(false)}>Mobile Apps</Link>
        <Link className="drawer-link" href="/vehicleowner" onClick={() => setDrawerOpen(false)}>Vehicle Owner App</Link>
        <Link className="drawer-link" href="/pricing" onClick={() => setDrawerOpen(false)}>Pricing</Link>
        <Link className="drawer-link" href="/blogs" onClick={() => setDrawerOpen(false)}>Blogs</Link>

        <div style={{ display: 'none' }}>
          <button
            className="nav-btn-login"
            style={{ flex: 1 }}
            onClick={() => { openAuth('login'); setDrawerOpen(false); }}
          >Login</button>
          <button
            className="nav-btn-signup"
            style={{ flex: 1 }}
            onClick={() => { openAuth('signup'); setDrawerOpen(false); }}
          >Sign Up</button>
        </div>
      </div>

      {/* AUTH MODAL */}
      <div
        className={`auth-overlay ${authOpen ? 'open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setAuthOpen(false); }}
      >
        <div className="auth-modal">
          <button className="auth-close" onClick={() => setAuthOpen(false)}>✕</button>
          <div className="auth-logo">
            <img src="/site-assets/images/logodesktop.svg" alt="Auto1Source" width="180" height="60" />
          </div>
          <div className="auth-title">
            {authTab === 'login' ? 'Welcome back' : 'Get started with Auto1Source'}
          </div>
          <div className="auth-subtitle">
            {authTab === 'login'
              ? 'Choose your account type to continue'
              : 'Choose your account type to register'}
          </div>

          <div className="auth-tabs">
            <button
              className={`auth-tab ${authTab === 'login' ? 'active' : ''}`}
              onClick={() => setAuthTab('login')}
            >Login</button>
            <button
              className={`auth-tab ${authTab === 'signup' ? 'active' : ''}`}
              onClick={() => setAuthTab('signup')}
            >Sign Up</button>
          </div>

          {/* LOGIN — role picker only (real login happens on the dedicated page) */}
          <div className={`auth-form ${authTab === 'login' ? 'active' : ''}`}>
            <div className="auth-field">
              <label className="auth-label">I am a...</label>
              <select
                className="auth-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option>Auto Shop</option>
                <option>Vehicle Owner</option>
                <option>Parts Vendor</option>
                <option>Employee</option>
              </select>
            </div>
            <button className="auth-submit" onClick={handleSubmit}>Continue to Login →</button>
            <div className="auth-switch">
              Don't have an account?{' '}
              <a onClick={() => setAuthTab('signup')}>Sign up</a>
            </div>
          </div>

          {/* SIGNUP — role picker only */}
          <div className={`auth-form ${authTab === 'signup' ? 'active' : ''}`}>
            <div className="auth-field">
              <label className="auth-label">Register Your Auto Shop</label>
              <p style={{fontSize:'13px', color:'#6b7280', marginTop:'8px'}}>Sign up is for <strong>Auto Shop owners only</strong>. Vehicle owners can <Link href="/vehicleowner" style={{color:'#f53a31'}}>register here</Link>.</p>
            </div>
            <button className="auth-submit" onClick={handleSubmit}>Continue to Sign Up →</button>
            <div className="auth-switch">
              Already have an account?{' '}
              <a onClick={() => setAuthTab('login')}>Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
