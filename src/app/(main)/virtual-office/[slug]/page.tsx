import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities } from '@/data/locations';
import CityServicePage, { generateMetadata as cityGenerateMetadata } from '../../[service]/[city]/page';
import { virtualOfficeArticles } from '@/data/virtualOfficeArticles';
import VirtualOfficeArticleTemplate from '@/components/templates/VirtualOfficeArticleTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (cities[slug]) {
    return cityGenerateMetadata({ params: Promise.resolve({ service: 'virtual-office', city: slug }) });
  }

  const article = virtualOfficeArticles[slug];
  if (!article) return notFound();

  return {
    title: `${article.title} | WeeSpaces`,
    description: article.description,
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

  // 2. Generate paths for all knowledge hub articles
  Object.keys(virtualOfficeArticles).forEach(articleSlug => {
    paths.push({ slug: articleSlug });
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

  // Route 2: If slug is an article, render the Article Template
  const article = virtualOfficeArticles[slug];
  
  if (!article) {
    return notFound();
  }

  return <VirtualOfficeArticleTemplate article={article} />;
}
