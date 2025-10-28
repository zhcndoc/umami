import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { Book, Map, Terminal, NotebookPen } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div id="docs-layout">
      <DocsLayout
        tree={source.pageTree}
        tabMode="top"
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
          },
          {
            icon: <Terminal />,
            text: 'API Reference',
            url: '/docs/api',
          },
          {
            icon: <NotebookPen />,
            text: 'Changelog',
            url: '/docs/changelog',
          },
        ]}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
