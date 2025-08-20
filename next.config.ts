import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ allow Unsplash images
  },
  eslint: {
    // ✅ allow build to succeed even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
