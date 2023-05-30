/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { 
    domains: ['localhost','api.estebankroh.com'],

  },
}

module.exports = nextConfig

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  // Next.js config
});