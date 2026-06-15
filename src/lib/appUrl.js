// Base URL of the logged-in application (separate project, served from a
// dedicated subdomain). Every "Login" / "Sign Up" CTA on the marketing site
// sends the user here. Configured via NEXT_PUBLIC_APP_URL.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.auto1source.com';

// Build an absolute URL into the application, e.g. appHref('owner', 'login')
// => https://app.auto1source.com/owner/login
export function appHref(role, action) {
  const path = [role, action].filter(Boolean).join('/');
  return `${APP_URL}/${path}`;
}
