import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
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
  metadataBase: new URL('https://weespaces.co.in'),
  title: "WeeSpaces | Premium Coworking & Managed Offices",
  description: "Top-rated premium coworking spaces, private cabins, and managed offices in Trivandrum, Ernakulam, Calicut, and Coimbatore. Book your workspace today.",
  keywords: ["Coworking space Kerala", "Office space Coimbatore", "Managed offices Trivandrum", "Premium coworking Ernakulam", "Private cabins Calicut"],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'WeeSpaces | Premium Coworking & Managed Offices',
    description: 'Top-rated premium coworking spaces, private cabins, and managed offices in Trivandrum, Ernakulam, Calicut, and Coimbatore.',
    url: 'https://weespaces.co.in',
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
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-accent selection:text-navy font-sans bg-navy min-h-screen flex flex-col pt-24">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
