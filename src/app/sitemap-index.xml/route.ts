export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://www.weespaces.in/sitemap/core.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/blog.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/virtual-office.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/coworking-space.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/private-office.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/meeting-room.xml</loc></sitemap>
  <sitemap><loc>https://www.weespaces.in/sitemap/managed-office.xml</loc></sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
