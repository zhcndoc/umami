import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { Book, Cloud, MapIcon, ShareIcon, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="docs-layout">
      <DocsLayout
        tree={source.pageTree}
        sidebar={{
          tabs: false,
        }}
        themeSwitch={{
          mode: 'light-dark',
        }}
        links={[
          {
            icon: <Book />,
            text: 'Documentation',
            url: '/docs',
            active: 'url',
          },
          {
            icon: <MapIcon />,
            text: 'Guides',
            url: '/docs/guides',
            active: 'nested-url',
          },
          {
            icon: <Terminal />,
            text: 'API Reference',
            url: '/docs/api',
            active: 'nested-url',
          },
          {
            icon: <Cloud />,
            text: 'Cloud',
            url: '/docs/cloud',
            active: 'nested-url',
          },
          {
            text: 'v2.x 🡕',
            url: 'https://v2.umami.is',
            external: true,
          },
        ]}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
