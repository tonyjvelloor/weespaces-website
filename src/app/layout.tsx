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

        {/* Secure Privacy */}
        <Script strategy="afterInteractive" src="https://app.secureprivacy.ai/script/6a3d33187767b7b58dc06dab.js" />

        {/* JSON-LD Schemas */}
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://weespaces.in/#organization",
                "name": "WeeSpaces",
                "url": "https://weespaces.in",
                "logo": "https://weespaces.in/images/weespaces-logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9207189111",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Malayalam", "Hindi", "Tamil"]
                },
                "sameAs": [
                  "https://www.instagram.com/weespaces.in/",
                  "https://in.linkedin.com/company/weespaces-coworking",
                  "https://www.facebook.com/WeeSpaces/"
                ]
              },
              {
                "@type": "CoworkingSpace",
                "name": "WeeSpaces Trivandrum",
                "image": "https://weespaces.in/images/branches/trivandrum/image4.jpg",
                "telephone": "+91-9207189111",
                "url": "https://weespaces.in/coworking-space/trivandrum",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor, Relcon Plaza, Pattom",
                  "addressLocality": "Thiruvananthapuram",
                  "addressRegion": "Kerala",
                  "postalCode": "695004",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "CoworkingSpace",
                "name": "WeeSpaces Ernakulam",
                "image": "https://weespaces.in/images/branches/kochi/workspace2.jpg",
                "telephone": "+91-9207189111",
                "url": "https://weespaces.in/coworking-space/kochi",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram",
                  "addressLocality": "Kochi",
                  "addressRegion": "Kerala",
                  "postalCode": "682016",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "CoworkingSpace",
                "name": "WeeSpaces Calicut",
                "image": "https://weespaces.in/images/branches/calicut/reception.jpg",
                "telephone": "+91-9207189111",
                "url": "https://weespaces.in/coworking-space/calicut",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Door No. 2951/A, Ground floor, Neeloth Plaza, Wayanad Rd, East Nadakkave",
                  "addressLocality": "Kozhikode",
                  "addressRegion": "Kerala",
                  "postalCode": "673001",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "CoworkingSpace",
                "name": "WeeSpaces Coimbatore",
                "image": "https://weespaces.in/images/branches/coimbatore/exterior-tall.jpg",
                "telephone": "+91-9207189111",
                "url": "https://weespaces.in/coworking-space/coimbatore",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vidyanagar 3rd street, Civil Aerodrome Post, Kalapatti",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "641014",
                  "addressCountry": "IN"
                }
              }
            ]
          })}
        </Script>
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
        
        {/* Floating WhatsApp Widget */}
        <a 
          href="https://wa.me/919207189111" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
