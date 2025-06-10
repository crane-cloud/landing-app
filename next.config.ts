import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    // domains: ['tailwindcss.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
