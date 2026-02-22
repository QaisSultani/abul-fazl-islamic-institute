import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import CustomScrollbar from '@/components/ui/CustomScrollbar';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abul Fazl Islamic Institute | Online Quran & Islamic Studies with Certified Aalim & Aalima',
  description: 'Learn Quran, Tajweed, Hifz, and Islamic Studies online with seminary-educated Aalim & Aalima scholars. Serving Muslim families worldwide with flexible scheduling across all time zones. Book your free trial today.',
  keywords: [
    'online Quran classes',
    'Aalim tutor',
    'Aalima teacher',
    'learn Quran online UK',
    'online Quran classes for kids',
    'Tajweed classes',
    'Hifz online',
    'Islamic studies online',
    'Quran memorization',
    'Tafseer classes',
    'online Quran teacher worldwide',
    'international Quran classes',
    'learn Quran from anywhere',
    'global Islamic education',
  ],
  authors: [{ name: 'Abul Fazl Islamic Institute' }],
  metadataBase: new URL('https://abulfazl.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abul Fazl Islamic Institute | Learn from Qualified Scholars',
    description: 'Seminary-educated Aalim & Aalima tutors teaching Quran and Islamic Studies online',
    url: 'https://abulfazl.org',
    siteName: 'Abul Fazl Islamic Institute',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abul Fazl Islamic Institute | Learn from Qualified Scholars',
    description: 'Seminary-educated Aalim & Aalima tutors teaching Quran and Islamic Studies online',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CustomScrollbar />
      </body>
    </html>
  );
}
