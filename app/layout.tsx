import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-ibm-mono',
});

export const metadata: Metadata = {
  title: 'Kinetik - Motion primitives for the modern web',
  description: 'A curated registry of physics-driven, copy-paste UI components built with Framer Motion, Tailwind CSS, and TypeScript.',
  keywords: ['react', 'components', 'animation', 'framer-motion', 'tailwind', 'ui', 'motion'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} ${ibmMono.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
