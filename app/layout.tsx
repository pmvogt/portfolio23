import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import './globals.css';
import '@radix-ui/themes/styles.css';
import ThemeProvider from './components/themeprovider';

export const metadata: Metadata = {
  title: 'Peter Vogt - Software Designer, Design Engineer',
  description: "Peter Vogt's personal site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider>
          <Theme accentColor="bronze" grayColor="mauve" scaling="100%">
            <main className="font-sans min-h-screen">{children}</main>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
