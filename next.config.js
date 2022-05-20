/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["grafs.no"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
