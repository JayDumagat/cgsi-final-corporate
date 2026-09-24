import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_STANDALONE === "1" ? "standalone" : undefined,
  // Preserve existing local image URLs; the new hero uses responsive WebP assets.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
