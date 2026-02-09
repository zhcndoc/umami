import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/components/svg/Logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Logo className="w-4 h-4" />
          <b>Umami 中文文档</b>
        </>
      ),
      url: '/docs',
    },
    githubUrl: 'https://github.com/umami-software/umami',
  };
}
