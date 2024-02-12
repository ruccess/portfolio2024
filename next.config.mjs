/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.ruccess.site'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/portfolio/' + process.env.PORTFOLIO_BLOCK_ID,
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
