/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['framerusercontent.com'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
