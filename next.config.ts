import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // --- Old location slug redirects ---
      { source: '/locations/trivandrum', destination: '/coworking-space-trivandrum', permanent: true },
      { source: '/locations/ernakulam', destination: '/coworking-space-kochi', permanent: true },
      { source: '/locations/kochi', destination: '/coworking-space-kochi', permanent: true },
      { source: '/locations/calicut', destination: '/coworking-space-calicut', permanent: true },
      { source: '/locations/coimbatore', destination: '/coworking-space-coimbatore', permanent: true },

      // --- "in" slug → clean slug (Coimbatore stays clean: no "in") ---
      { source: '/coworking-space-in-coimbatore', destination: '/coworking-space-coimbatore', permanent: true },
      { source: '/coworking-space-in-trivandrum', destination: '/coworking-space-trivandrum', permanent: true },
      { source: '/coworking-space-in-kochi', destination: '/coworking-space-kochi', permanent: true },
      { source: '/coworking-space-in-calicut', destination: '/coworking-space-calicut', permanent: true },

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
