import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/locations/trivandrum', destination: '/coworking-space-in-trivandrum', permanent: true },
      { source: '/locations/ernakulam', destination: '/coworking-space-in-kochi', permanent: true },
      { source: '/locations/kochi', destination: '/coworking-space-in-kochi', permanent: true },
      { source: '/locations/calicut', destination: '/coworking-space-in-calicut', permanent: true },
      { source: '/locations/coimbatore', destination: '/coworking-space-coimbatore', permanent: true },
      { source: '/coworking-space-in-coimbatore', destination: '/coworking-space-coimbatore', permanent: true },
      // Force non-www to www 301 redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'weespaces.in',
          },
        ],
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
