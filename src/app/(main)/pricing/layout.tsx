import type { Metadata } from "next";

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Coworking Prices in Kerala & Coimbatore | WeeSpaces",
  description: "View pricing for Hot Desks, Dedicated Desks, Private Cabins, and Virtual Offices in Trivandrum, Ernakulam, Calicut, and Coimbatore.",
  canonicalPath: "/pricing"
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
