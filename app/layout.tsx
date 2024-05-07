import { Footer } from '@/src/components/Footer/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soccer Blog',
  description: 'Information about stock socker',
  icons: {
    icon: '/public/assets/images/icons/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-ZCGN9DMPJN'
        ></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCGN9DMPJN');
          `}
        </Script>
      </head>
      <body className={`${inter.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
