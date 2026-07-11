import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    const cities = ['kochi', 'trivandrum', 'calicut', 'coimbatore'];
    const redirectsList = [
      // --- Service redirects ---
      { source: '/services/virtual-office', destination: '/virtual-office', permanent: true },
    ];

    // Build programmatic redirects for legacy flat URLs
    cities.forEach(city => {
      // Coworking
      redirectsList.push({ source: `/coworking-space-in-${city}`, destination: `/coworking-space/${city}`, permanent: true });
      redirectsList.push({ source: `/coworking-space-${city}`, destination: `/coworking-space/${city}`, permanent: true });
      // Private Office
      redirectsList.push({ source: `/private-office-space-in-${city}`, destination: `/private-office/${city}`, permanent: true });
      redirectsList.push({ source: `/private-office-space-${city}`, destination: `/private-office/${city}`, permanent: true });
      // Managed Office
      redirectsList.push({ source: `/managed-office-space-in-${city}`, destination: `/managed-office/${city}`, permanent: true });
      redirectsList.push({ source: `/managed-office-space-${city}`, destination: `/managed-office/${city}`, permanent: true });
      // Locations
      redirectsList.push({ source: `/locations/${city === 'kochi' ? 'ernakulam' : city}`, destination: `/coworking-space/${city}`, permanent: true });
      if (city === 'kochi') {
        redirectsList.push({ source: `/locations/kochi`, destination: `/coworking-space/kochi`, permanent: true });
      }
      
      // Google Ads rescue redirects (e.g., /calicut/virtual_office) -> pointing to the dedicated Monsoon Offer landing pages
      redirectsList.push({ source: `/${city}/virtual_office`, destination: `/monsoon-offer/${city}`, permanent: true });
      redirectsList.push({ source: `/${city}/virtual-office`, destination: `/monsoon-offer/${city}`, permanent: true });
    });

    return [
      ...redirectsList,
      // --- Old domain .co.in → .in (rescues 14 authority backlinks) ---
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'weespaces.co.in' }],
        destination: 'https://www.weespaces.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.weespaces.co.in' }],
        destination: 'https://www.weespaces.in/:path*',
        permanent: true,
      },
      // --- HTTP → HTTPS + non-www → www ---
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'weespaces.in' }],
        destination: 'https://www.weespaces.in/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https:;",
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
