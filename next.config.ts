import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
       unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        // Añade pathname si es necesario
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // ← Agrega esto
      }
    ]

  }
};

export default nextConfig;
