import { Metadata } from 'next';
import MonsoonOfferTemplate from '@/components/templates/MonsoonOfferTemplate';

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return [
    { city: 'kochi' },
    { city: 'trivandrum' },
    { city: 'calicut' },
    { city: 'coimbatore' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const cityStr = resolvedParams.city;
  const city = cityStr.charAt(0).toUpperCase() + cityStr.slice(1);
  return {
    title: `Monsoon Offer: Register Your Business in ${city} Without Renting an Office`,
    description: `Limited period Monsoon Offer! Get a GST-compliant Virtual Office in ${city} from just ₹7,999/year.`,
    robots: { index: false, follow: false },
  };
}

export default async function MonsoonOfferCityPage({ params }: Props) {
  const resolvedParams = await params;
  return <MonsoonOfferTemplate city={resolvedParams.city} />;
}
