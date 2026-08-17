import { Metadata } from 'next';
import MonsoonOfferTemplate from '@/components/templates/MonsoonOfferTemplate';

export const metadata: Metadata = {
  title: 'Monsoon Offer: Register Your Business Without Renting an Office',
  description: 'Limited period Monsoon Offer! Get a GST-compliant Virtual Office from just ₹7,999/year.',
  robots: { index: false, follow: false },
};

export default function MonsoonOfferPage() {
  return <MonsoonOfferTemplate />;
}
