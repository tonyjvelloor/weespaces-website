import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://weespaces.in'),
  title: "WeeSpaces | Premium Coworking & Managed Offices",
  description: "Top-rated premium coworking spaces, private cabins, and managed offices in Trivandrum, Ernakulam, Calicut, and Coimbatore. Book your workspace today.",
  keywords: ["Coworking space Kerala", "Office space Coimbatore", "Managed offices Trivandrum", "Premium coworking Ernakulam", "Private cabins Calicut"],
  openGraph: {
    title: 'WeeSpaces | Premium Coworking & Managed Offices',
    description: 'Top-rated premium coworking spaces, private cabins, and managed offices in Trivandrum, Ernakulam, Calicut, and Coimbatore.',
    siteName: 'WeeSpaces',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/amenity1.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Premium Coworking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeeSpaces | Premium Coworking & Managed Offices',
    description: 'Top-rated premium coworking spaces, private cabins, and managed offices in South India.',
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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-89N19DEH2N" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-89N19DEH2N');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
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
      </head>
      <body suppressHydrationWarning className="antialiased selection:bg-accent selection:text-navy font-sans bg-navy min-h-screen flex flex-col pt-24 relative">
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1702816221138883&ev=PageView&noscript=1" alt="" />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Floating WhatsApp Widget */}
        <a 
          href="https://wa.me/919207189111" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300"
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
