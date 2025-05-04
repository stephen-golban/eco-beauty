import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  ignoreDuringBuilds: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
