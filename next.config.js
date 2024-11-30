const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yts.mx'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
