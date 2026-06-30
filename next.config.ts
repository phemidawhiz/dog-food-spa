import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enforces static site generation (SSG)
  
  // Optional optimizations for static exports
  trailingSlash: true, // Appends a slash to URLs (useful for hosting on S3/GitHub Pages)
  images: {
    unoptimized: true, // Required because the default Image optimization relies on a live server
  },
};

export default nextConfig;
