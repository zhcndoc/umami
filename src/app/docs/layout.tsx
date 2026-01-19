import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { Book, Cloud, MapIcon, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import {
  ApiLink,
  CloudLink,
  DocumentationLink,
  ExternalNavLink,
  GuidesLink,
} from '@/components/NavLinks';

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
            type: 'custom',
            children: <DocumentationLink icon={<Book />} />,
          },
          {
            type: 'custom',
            children: <GuidesLink icon={<MapIcon />} />,
          },
          {
            type: 'custom',
            children: <ApiLink icon={<Terminal />} />,
          },
          {
            type: 'custom',
            children: <CloudLink icon={<Cloud />} />,
          },
          {
            type: 'custom',
            children: <ExternalNavLink href="https://v2.umami.is">v2</ExternalNavLink>,
          },
        ]}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
