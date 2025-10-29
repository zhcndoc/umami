import { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { Book, Map, Terminal, Cloud } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="docs-layout">
      <DocsLayout
        tree={source.pageTree}
        sidebar={{
          tabs: false,
        }}
        links={[
          {
            icon: <Book />,
            text: 'Documentation',
            url: '/docs',
            active: 'url',
          },
          {
            icon: <Map />,
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
        ]}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
