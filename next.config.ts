import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - turbopack is a valid option but might be missing from types in this version
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
