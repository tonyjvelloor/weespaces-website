import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/locations/trivandrum', destination: '/coworking-space-in-trivandrum', permanent: true },
      { source: '/locations/ernakulam', destination: '/coworking-space-in-kochi', permanent: true },
      { source: '/locations/kochi', destination: '/coworking-space-in-kochi', permanent: true },
      { source: '/locations/calicut', destination: '/coworking-space-in-calicut', permanent: true },
      { source: '/locations/coimbatore', destination: '/coworking-space-in-coimbatore', permanent: true },
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
      {
        source: '/_next/static/:path*',
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
