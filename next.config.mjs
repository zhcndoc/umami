import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: '/docs/v3/index',
      },
      {
        source: '/docs/:path((?!api|guides|cloud|changelog).*)',
        destination: '/docs/v3/:path*',
      },
    ];
  },
};

export default withMDX(config);
