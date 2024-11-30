import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yts.mx'],
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
}

export default nextConfig
