import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworking Prices in Kerala & Coimbatore | WeeSpaces",
  description: "View pricing for Hot Desks, Dedicated Desks, Private Cabins, and Virtual Offices in Trivandrum, Ernakulam, Calicut, and Coimbatore.",
  keywords: ["Coworking prices Kerala", "Office space cost Coimbatore", "Private cabin price Trivandrum", "Virtual office pricing Ernakulam", "Hot desk rates Calicut"],
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: "Coworking Prices in Kerala & Coimbatore | WeeSpaces",
    description: "View pricing for Hot Desks, Dedicated Desks, Private Cabins, and Virtual Offices in Trivandrum, Ernakulam, Calicut, and Coimbatore.",
    url: '/pricing',
    images: [{ url: '/images/exterior.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/exterior.jpg'],
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
