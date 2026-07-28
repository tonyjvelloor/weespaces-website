import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export interface MetadataProps {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  ogType?: 'website' | 'article';
}

/**
 * Helper utility to construct consistent Next.js Metadata objects with fully-populated Open Graph and Twitter tags.
 */
export function constructMetadata({
  title,
  description,
  canonicalPath,
  image = '/images/amenity1.jpg',
  noIndex = false,
  keywords,
  ogType = 'website',
}: MetadataProps): Metadata {
  const images = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  // Ensure the canonical path is fully absolute to prevent trailing-slash mismatch indexing issues on Vercel
  const absoluteCanonical = canonicalPath.startsWith('http') 
    ? canonicalPath 
    : `https://www.weespaces.in${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: absoluteCanonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      title,
      description,
      url: absoluteCanonical,
      siteName: 'WeeSpaces',
      locale: 'en_IN',
      type: ogType as any,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
