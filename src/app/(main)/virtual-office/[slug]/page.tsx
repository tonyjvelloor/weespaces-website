import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities } from '@/data/locations';
import CityServicePage, { generateMetadata as cityGenerateMetadata } from '../../[service]/[city]/page';
import { virtualOfficeContent } from '@/data/virtualOfficeContent';
import VirtualOfficeLandingTemplate from '@/components/templates/VirtualOfficeLandingTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (cities[slug]) {
    return cityGenerateMetadata({ params: Promise.resolve({ service: 'virtual-office', city: slug }) });
  }

  const content = virtualOfficeContent[slug];
  if (!content) return notFound();

  return {
    title: `${content.seo.title} | WeeSpaces`,
    description: content.seo.description,
    alternates: {
      canonical: `https://weespaces.in/virtual-office/${slug}`,
    }
  };
}

export function generateStaticParams() {
  const paths: { slug: string }[] = [];
  
  // 1. Generate paths for all cities for virtual-office
  Object.keys(cities).forEach(citySlug => {
    paths.push({ slug: citySlug });
  });

  // 2. Generate paths for all commercial landing pages
  Object.keys(virtualOfficeContent).forEach(contentSlug => {
    paths.push({ slug: contentSlug });
  });

  return paths;
}

export default async function VirtualOfficeSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Route 1: If slug is a city, render the CityServicePage
  if (cities[slug]) {
    return <CityServicePage params={Promise.resolve({ service: 'virtual-office', city: slug })} />;
  }

  // Route 2: If slug is a commercial landing page, render the Landing Template
  const content = virtualOfficeContent[slug];
  
  if (!content) {
    return notFound();
  }

  return <VirtualOfficeLandingTemplate content={content} />;
}
