import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.weespaces.in'),
  title: "WeeSpaces | Premium Coworking & Managed Offices",
  description: "Premium coworking spaces & managed offices in Trivandrum, Kochi, Calicut & Coimbatore. Book your workspace today.",
  keywords: ["Coworking space Kerala", "Office space Coimbatore", "Managed offices Trivandrum", "Premium coworking Ernakulam", "Private cabins Calicut"],
  alternates: {
    canonical: 'https://www.weespaces.in',
    languages: {
      'en-IN': 'https://www.weespaces.in',
    },
  },
  verification: {
    google: "XN0i_JTKrBVCjj37Hp_zuSl38bfGQR2qhsuUEzWdee4",
    other: {
      'ahrefs-site-verification': 'd3997787cfaac2252dbec64bf63beebe9e91a31a5df4d755b5a570eba7beee86',
    },
  },
  openGraph: {
    title: 'WeeSpaces | Premium Coworking & Managed Offices',
    description: 'Premium coworking spaces & managed offices in Trivandrum, Kochi, Calicut & Coimbatore.',
    siteName: 'WeeSpaces',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/amenity1.jpg',
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Premium Coworking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeeSpaces | Premium Coworking & Managed Offices',
    description: 'Premium coworking spaces & managed offices in South India.',
    images: ['/images/amenity1.jpg'],
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
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        </noscript>
        {/* Google Analytics */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-89N19DEH2N" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-89N19DEH2N', { send_page_view: true });

            /* Fire location_view on page load for city pages */
            var path = window.location.pathname;
            if (path.indexOf('coworking-space') !== -1 || path.indexOf('virtual-office') !== -1 || path.indexOf('private-office') !== -1 || path.indexOf('managed-office') !== -1) {
              gtag('event', 'location_view', { event_category: 'engagement', page: path });
            }
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1702816221138883');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script id="ahrefs-analytics" strategy="lazyOnload">
          {`
            var ahrefs_analytics_script = document.createElement('script');
            ahrefs_analytics_script.async = true;
            ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
            ahrefs_analytics_script.setAttribute('data-key', 'EoDkvoeJsqmIyH1dOOZ37w');
            document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
          `}
        </Script>

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
                  "https://www.instagram.com/weespaces.coworking/",
                  "https://www.linkedin.com/company/wee-spaces-coworking/",
                  "https://www.facebook.com/weespaces/",
                  "https://www.youtube.com/@weespaces",
                  "https://x.com/weespaces"
                ]
              },
              {
                "@type": "CoworkingSpace",
                "name": "WeeSpaces Trivandrum",
                "image": "https://weespaces.in/images/branches/trivandrum/image4.jpg",
                "telephone": "+91-9207189111",
                "url": "https://weespaces.in/coworking-space-in-trivandrum",
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
                "url": "https://weespaces.in/coworking-space-in-kochi",
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
                "url": "https://weespaces.in/coworking-space-in-calicut",
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
                "url": "https://weespaces.in/coworking-space-in-coimbatore",
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
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1702816221138883&ev=PageView&noscript=1" alt="" aria-hidden="true" />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyCTA />
        
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
