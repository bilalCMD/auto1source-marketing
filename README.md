# Auto1Source — Marketing Website (Next.js)

The Auto1Source **public marketing website**, rebuilt on **Next.js (App Router)** as a
standalone, server-rendered project — implementing **Path 2** of the Dart Marketing
technical assessment.

This project contains **only** the marketing site (landing pages + blog). The
logged-in **application is a separate project** and is served from its own
subdomain (`app.auto1source.com`). Nothing in the application's code was touched.

```
auto1source.com        → this project   (marketing, server-rendered, SEO-critical)
app.auto1source.com    → the application (React SPA behind login — unchanged)
```

## Why this rebuild

On the old setup the marketing pages were rendered inside the React application, so
crawlers received a near-empty HTML shell and per-page `<title>`/`<meta>` tags were set
late in the browser. This project fixes that at the source:

- **Every page is statically pre-rendered to full HTML** (`next build` → 41 static routes).
- **Per-page `<title>` and `<meta name="description">`** come from each route's
  `export const metadata` — present in the server response, no JS required.
- **JSON-LD structured data** is rendered server-side into the HTML.
- First Load JS is ~100 kB (the marketing pages no longer pull in the application bundle).

Verified in the raw (no-JavaScript) HTML response for `/`, `/pricing`, and blog routes.

## Project structure

```
src/
  app/
    layout.jsx                 Root layout: fonts, global CSS, <Header>/<Footer>
    page.jsx                   Home ('/')
    <route>/page.jsx           One server component per landing page
    blogs/page.jsx             Blog index
    blogs/<slug>/page.jsx      20 blog posts
    pricing/
      page.jsx                 Server: metadata + JSON-LD
      PricingBody.jsx          Client: interactive comparison table + FAQ accordion
    not-found.jsx              404
  components/                  Header, Footer, SignUpButton, TestimonialCarousel, PageFAQ
  lib/
    appUrl.js                  Builds links into the application (NEXT_PUBLIC_APP_URL)
    faqSchema.js               Server-safe buildFaqSchema() for FAQ JSON-LD
  styles/                      style.css, responsive.css, header.css, footer.css (unchanged)
public/site-assets/images/     All marketing images (unchanged)
```

Pages are **server components** (smallest JS, SEO-first). Only genuinely interactive
pieces are client components: `Header`, `SignUpButton`, `TestimonialCarousel`,
`PageFAQ`, and `pricing/PricingBody`.

## What changed from the original marketing source

The UI is intentionally **identical** — same markup, same CSS, same images. Only the
plumbing changed:

- `@reach/router` → `next/link` (`<Link href>`) and `next/navigation` (`usePathname`).
- Client-side `useSeo()` hook → `export const metadata` + server-rendered JSON-LD.
- `lazy()`/`<Suspense>` wrappers removed (Next handles per-route code splitting).
- "Login / Sign Up" CTAs now point at the application subdomain via `NEXT_PUBLIC_APP_URL`.
- A few `navigate('/x')` buttons became `<Link href="/x">`; the `tel:` button became `<a>`.

## Environment variables

| Variable               | Purpose                                      | Default                     |
| ---------------------- | -------------------------------------------- | --------------------------- |
| `NEXT_PUBLIC_APP_URL`  | Base URL of the application (login/sign-up). | `https://app.auto1source.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of this marketing site.        | `https://www.auto1source.com` |

## Develop / build

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes pre-rendered)
npm run start    # serve the production build
```

## Old-link redirects (handled here)

Per Bao's note, old links on the main domain that belong to the application now
**308-redirect to `app.auto1source.com`**. Configured in `next.config.js`
(`APP_ROUTE_PREFIXES`). These prefixes do **not** collide with marketing routes
(`/customers`, `/employees`, `/parts`, `/marketing` stay on the marketing site).

Currently redirected: `owner`, `employee`, `vendor`, `customer`, `advertisement`,
`agreement`, `pay`, `workorder`, `upload`, `docs`, `mobile-payment`, `payment`,
`video`, `in-shop`, `payroll`, `preferences`.

> ⚠️ **TODO (Bao / infra):** confirm this list against the application's full route
> table before go-live and add any other customer-facing deep links. Going forward,
> newly generated customer links should use `app.auto1source.com` directly.

## Remaining infra tasks (outside this codebase)

These are deployment/DNS items, not code — listed here for the handoff:

1. **DNS / SSL** — point `auto1source.com` (apex + `www`) at this Next.js deployment;
   point `app.auto1source.com` at the existing application. Issue SSL certs for both.
2. **Clover / payment callback URLs** — update return/callback URLs to
   `app.auto1source.com` (payments live in the application, not the marketing site).
3. **Login session cookie** — keep scoped to the apex domain so a signed-in user
   carries across both hosts automatically (as the assessment notes).
4. **Hosting note** — `next.config.js` redirects require a Node host (`next start`,
   Vercel, Azure App Service, etc.). On a static-only host, replicate these redirects
   in the platform's redirect config.
