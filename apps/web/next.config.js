/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  transpilePackages: ['@repo/ui'],

  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 120,
    },
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['chalk'] = false;
    }
    return config;
  },
};
