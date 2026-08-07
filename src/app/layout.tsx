import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

import { GoogleAnalytics } from '@next/third-parties/google';
import TrackingProvider from '@/components/TrackingProvider';
import { constructMetadata } from '@/utils/metadata';
import ConsentBanner from '@/components/ConsentBanner';
import FloatingWhatsAppWidget from '@/components/FloatingWhatsAppWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.weespaces.in'),
  ...constructMetadata({
    title: "Premium Coworking Spaces in Kochi, Trivandrum, Calicut & Coimbatore | WeeSpaces",
    description: "Premium coworking spaces & managed offices in Trivandrum, Kochi, Calicut & Coimbatore. Book your workspace today.",
    canonicalPath: "/",
  }),
  verification: {
    google: "XN0i_JTKrBVCjj37Hp_zuSl38bfGQR2qhsuUEzWdee4",
    other: {
      'ahrefs-site-verification': 'd3997787cfaac2252dbec64bf63beebe9e91a31a5df4d755b5a570eba7beee86',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N4W8NLQW');
            `,
          }}
        />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        </noscript>
        <link rel="llms-txt" href="/llms.txt" />

        {/* Secure Privacy */}
        <Script strategy="afterInteractive" src="https://app.secureprivacy.ai/script/6a3d33187767b7b58dc06dab.js" />


      </head>
      <body suppressHydrationWarning className="antialiased selection:bg-accent selection:text-navy font-sans bg-navy min-h-screen flex flex-col pt-24 pb-[4.5rem] md:pb-0 relative">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4W8NLQW"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GoogleAnalytics gaId="G-89N19DEH2N" />
        <TrackingProvider>
          {children}
        </TrackingProvider>
        
        <ConsentBanner />
        
        <FloatingWhatsAppWidget />
      </body>
    </html>
  );
}
