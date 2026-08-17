import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import { virtualOfficeAlternatives } from '@/data/comparisons';
import VirtualOfficeAlternativeTemplate from '@/components/templates/VirtualOfficeAlternativeTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const comparison = virtualOfficeAlternatives[resolvedParams.slug];
  
  if (!comparison) return notFound();

  return constructMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    canonicalPath: `/virtual-office/alternatives/${resolvedParams.slug}`,
  });
}

export function generateStaticParams() {
  return Object.keys(virtualOfficeAlternatives).map(slug => ({
    slug
  }));
}

export default async function VirtualOfficeAlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const comparison = virtualOfficeAlternatives[resolvedParams.slug];
  
  if (!comparison) return notFound();

  return <VirtualOfficeAlternativeTemplate comparison={comparison} />;
}
