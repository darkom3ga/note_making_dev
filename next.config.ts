import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
    authInterrupts: true,
  },
  async redirects() {
    return [
      {
        source : '/',
        destination : '/home',
        permanent: true ,
      }
    ]
  },
  /* config options here */
};

export default nextConfig;
