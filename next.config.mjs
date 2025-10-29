import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path((?!v2|v1|api|guides|cloud|changelog).*)',
        destination: '/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
