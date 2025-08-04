import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

// ✅ تحسين الـ SEO Metadata
export const metadata: Metadata = {
  title: 'Omar Ahmed Habib | Full Stack Developer',
  description: 'Portfolio of Omar Ahmed Habib - Full Stack Developer specializing in modern web applications with Next.js, React, and Node.js.',
  keywords: [
    'Omar Ahmed Habib',
    'Full Stack Developer',
    'Next.js Portfolio',
    'React Developer',
    'Frontend Backend Developer',
    'Web Developer Cairo',
    'Modern Web Applications',
  ],
  authors: [{ name: 'Omar Ahmed Habib', url: 'https://omarahmedhabib.vercel.app' }],
  creator: 'Omar Ahmed Habib',
  openGraph: {
    title: 'Omar Ahmed Habib | Full Stack Developer',
    description: 'Showcasing modern web applications and creative UI/UX designs.',
    url: 'https://omarahmedhabib.vercel.app',
    siteName: 'Omar Ahmed Habib Portfolio',
    images: [
      {
        url: '/og-image.png', // ضع صورة OG في public
        width: 1200,
        height: 630,
        alt: 'Omar Ahmed Habib Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Ahmed Habib | Full Stack Developer',
    description: 'Explore the portfolio of a Full Stack Developer passionate about modern web applications.',
    images: ['/og-image.png'],
    creator: '@OmarAhmedHabib', // لو عندك حساب تويتر
  },
  icons: {
    icon: '/favicon.svg', // ✅ أيقونة في مجلد public
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ دعم SEO إضافي + manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
