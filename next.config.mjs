import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  assetPrefix: '/docs',
  reactStrictMode: true,
  env: {
    trackerId: process.env.TRACKER_ID || '',
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/docs/d.js', destination: 'https://cloud.umami.is/script.js' },
      {
        source: '/docs/:path((?!api|guides|cloud|changelog).*)',
        destination: '/docs/:path*',
      },
    ];
  },
  async redirects() {
    return [{ source: '/', destination: '/docs', permanent: true }];
  },
};

export default withMDX(config);
