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
    '/services/incubation',
    '/investors',
    '/coworking-vs-traditional-office',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // High-priority national SEO pages
  const nationalSeoRoutes = [
    { url: `${baseUrl}/virtual-office`, priority: 0.9 },
  ].map((r) => ({
    ...r,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
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
    '/virtual-office-coimbatore',
    '/office-space-for-rent-coimbatore',
    '/private-office-space-coimbatore',
    '/coworking-space-near-infopark-kochi',
    '/coworking-space-near-technopark-trivandrum',
    '/private-office-space-kochi',
    '/managed-office-space-kochi',
    '/office-space-kalapatti-coimbatore',
    '/office-space-for-rent-kochi',
    '/coworking-space-kadavanthra-kochi',
    '/office-space-for-rent-trivandrum',
    '/coworking-space-pattom-trivandrum',
    '/office-space-for-rent-calicut',
    '/coworking-space-kozhikode',
    '/virtual-office-for-gst-registration',
    '/best-coworking-spaces-coimbatore',
    '/best-coworking-spaces-kochi',
    '/best-coworking-spaces-trivandrum',
    '/best-coworking-spaces-calicut',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...nationalSeoRoutes,
    ...cityRoutes,
    ...blogRoutes,
    ...landingRoutes,
    ...serviceRoutes,
  ];
}
