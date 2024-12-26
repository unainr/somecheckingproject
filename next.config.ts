import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Allow all remote images
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  async headers() {
    return [
      {
        source: '/', // Apply to the home page
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate', // Prevent caching on the home page
          },
        ],
      },
    ];
  },
};

export default nextConfig;
