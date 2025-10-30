/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For username.github.io repos, basePath should be empty
  // If deploying to a subdirectory, uncomment and set the repo name:
  // basePath: process.env.NODE_ENV === 'production' ? '/repo-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/repo-name' : '',
}

module.exports = nextConfig

