import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { branchData } from '@/data/branches';

export const dynamic = 'force-static';

const subareasMap: Record<string, string[]> = {
  trivandrum: ['technopark', 'kazhakootam', 'pattom'],
  ernakulam: ['kadavanthra', 'mg-road', 'kaloor', 'kakkanad'],
  calicut: ['cyberpark', 'nadakkavu', 'thondayad'],
  coimbatore: ['rs-puram', 'peelamedu', 'kalapatti'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weespaces.in';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/enterprise',
    '/privacy-policy',
    '/faq',
    '/terms',
    '/blog',
    '/pricing',
    '/services/virtual-office',
    '/services/incubation',
    '/investors',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const branchRoutes = Object.keys(branchData).map((branchId) => ({
    url: `${baseUrl}/locations/${branchId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const landingRoutes = Object.keys(branchData).map((branchId) => ({
    url: `${baseUrl}/landing/${branchId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceRoutes = [
    '/services/conference-hall',
    '/services/coworking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productRoutes = [
    '/products/workstation',
    '/products/work-lounge',
    '/products/premium-cabin',
    '/products/executive-cabin',
    '/products/office-desk',
    '/products/individual-desk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const subareas: MetadataRoute.Sitemap = [];
  for (const [branch, areas] of Object.entries(subareasMap)) {
    for (const area of areas) {
      subareas.push({
        url: `${baseUrl}/locations/${branch}/${area}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  return [
    ...staticRoutes,
    ...branchRoutes,
    ...blogRoutes,
    ...landingRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...subareas,
  ];
}
