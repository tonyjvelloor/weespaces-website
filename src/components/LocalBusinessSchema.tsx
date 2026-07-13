import { CityData } from '@/data/locations';

type LocalBusinessSchemaProps = {
  cityData: CityData;
  areaServed?: string;
};

export default function LocalBusinessSchema({ cityData, areaServed }: LocalBusinessSchemaProps) {
  if (!cityData.contactInfo) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `WeeSpaces ${cityData.name}`,
    "image": cityData.gallery[0] || "",
    "@id": `https://www.weespaces.in/${cityData.slug}`,
    "url": `https://www.weespaces.in/${cityData.slug}`,
    "telephone": cityData.contactInfo.phone,
    "email": cityData.contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": cityData.contactInfo.address,
      "addressLocality": cityData.name,
      "addressRegion": "Kerala", // Can map this dynamically later if expanding outside Kerala/TN
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.contactInfo.coordinates.lat,
      "longitude": cityData.contactInfo.coordinates.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "areaServed": areaServed ? [
      cityData.name,
      areaServed
    ] : cityData.name,
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
