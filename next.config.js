// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['a0.muscache.com', 'placeimg.com', 'picsum.photos', 'i.picsum.photos'],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'hooks', 'scripts'],
  },
}

module.exports = nextConfig
