import type { Metadata, Viewport } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import { LocaleProvider } from '@/components/locale-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
  title: 'Digital Experience Engineer | Portfolio',
  description:
    'Building modern digital experiences that combine engineering, accessibility, performance, and human-centered design. Scalable, accessible, high-performance solutions with exceptional UX.',
  keywords: [
    'Digital Experience Engineer',
    'Frontend Developer',
    'React Developer',
    'UX Engineer',
    'Accessibility',
    'Performance Optimization',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'Digital Experience Engineer' }],
  creator: 'Digital Experience Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'es_ES'],
    title: 'Digital Experience Engineer | Portfolio',
    description:
      'Building modern digital experiences that combine engineering, accessibility, performance, and human-centered design.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Experience Engineer | Portfolio',
    description:
      'Building modern digital experiences that combine engineering, accessibility, performance, and human-centered design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1c22' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body
        className="font-sans antialiased min-h-screen"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
