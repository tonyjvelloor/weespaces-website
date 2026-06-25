import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { branchData } from '@/data/branches';

export const dynamic = 'force-static';

const cityUrlMap: Record<string, string> = {
  trivandrum: '/coworking-space-trivandrum',
  ernakulam: '/coworking-space-kochi',
  calicut: '/coworking-space-calicut',
  coimbatore: '/coworking-space-coimbatore',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.weespaces.in';

  const staticRoutes = [
    '',
    '/locations',
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
    '/coworking-vs-traditional-office',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // New SEO city pages (high priority)
  const cityRoutes = Object.keys(branchData).map((branchId) => ({
    url: `${baseUrl}${cityUrlMap[branchId]}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  // Blog posts from filesystem
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = getAllPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch {
    // Gracefully handle if blog content dir doesn't exist yet
  }

  const landingRoutes = Object.keys(branchData).map((branchId) => ({
    url: `${baseUrl}/landing/${branchId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceRoutes = [
    '/services/conference-hall',
    '/services/coworking',
    '/virtual-office-kochi-gst-registration',
    '/virtual-office-trivandrum',
    '/virtual-office-calicut',
    '/office-space-for-rent-coimbatore',
    '/private-office-space-coimbatore',
    '/coworking-space-near-infopark-kochi',
    '/coworking-space-near-technopark-trivandrum',
    '/private-office-space-kochi',
    '/managed-office-space-kochi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...blogRoutes,
    ...landingRoutes,
    ...serviceRoutes,
  ];
}
