/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./base.scss";`,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
