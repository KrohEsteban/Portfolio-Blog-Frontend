/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
  },

  images: { 
    domains: ['localhost','api.estebankroh.com'],

  },
}

module.exports = nextConfig
