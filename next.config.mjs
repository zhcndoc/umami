import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import { withAxiom } from 'next-axiom';
import rehypeHighlight from 'rehype-highlight';
import path from 'path';

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const headers = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  output: undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.resolve.alias['public'] = path.resolve('./public');

    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/docs/getting-started', destination: '/docs' },
      { source: '/analytics', destination: '/' },
      { source: '/website-analytics', destination: '/' },
      { source: '/open-source-website-analytics', destination: '/' },
      { source: '/privacy-analytics', destination: '/' },
      { source: '/linkedin', destination: '/' },
      { source: '/reddit', destination: '/' },
      { source: '/apollo', destination: '/' },
      { source: '/apollo-ga', destination: '/google-analytics' },
      { source: '/a/script.js', destination: 'https://analytics.eu.umami.is/script.js' },
      { source: '/discord', destination: 'https://discord.gg/4dz4zcXYrQ' },
    ];
  },
};

export default withAxiom(withMDX(nextConfig));
