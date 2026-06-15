import '@/styles/style.css';
import '@/styles/responsive.css';
import '@/styles/header.css';
import '@/styles/footer.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.auto1source.com'),
  title: 'Auto1Source — Auto Repair Shop Management Software',
  description:
    'Auto1Source is a complete auto repair shop management system — work orders, payroll, parts ordering, and more. All features included for one simple price.',
  keywords: [
    'Auto1Source',
    'auto shop management software',
    'auto repair shop software',
    'work orders',
    'shop management system',
  ],
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
