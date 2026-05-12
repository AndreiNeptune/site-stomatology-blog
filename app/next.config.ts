import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly anchor Turbopack's module resolver to this project directory.
  // process.cwd() is always the directory where `npm run dev` is executed,
  // which is the "app" folder. This prevents Turbopack from walking up to
  // a parent directory that may have a stray package-lock.json or package.json.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
