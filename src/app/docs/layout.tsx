import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { Book, Map, Terminal, NotebookPen, Cloud } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
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
          },
          {
            icon: <Map />,
            text: 'Guides',
            url: '/docs/guides',
            secondary: true,
          },
          {
            icon: <Terminal />,
            text: 'API Reference',
            url: '/docs/api',
          },
          {
            icon: <Cloud />,
            text: 'Cloud',
            url: '/docs/cloud',
          },
        ]}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
