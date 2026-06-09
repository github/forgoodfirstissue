/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;