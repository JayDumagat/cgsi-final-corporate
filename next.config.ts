import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites does not provide a Cloudflare Images binding for this project.
  // Keep the locally hosted, licensed editorial assets on their direct static
  // URLs so they remain reliable in production.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
