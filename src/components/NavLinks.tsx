'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const linkClassName =
  'inline-flex items-center gap-2 text-fd-muted-foreground text-sm transition-colors hover:text-fd-accent-foreground data-[active=true]:font-medium data-[active=true]:text-fd-foreground [&_svg]:size-4';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  isActive: boolean;
}

function NavLink({ href, icon, children, isActive }: NavLinkProps) {
  return (
    <Link href={href} data-active={isActive} className={linkClassName}>
      {icon}
      {children}
    </Link>
  );
}

const excludedPaths = ['/docs/guides', '/docs/api', '/docs/cloud'];

export function DocumentationLink({ icon }: { icon: ReactNode }) {
  const pathname = usePathname();
  const isActive =
    pathname.startsWith('/docs') &&
    !excludedPaths.some((path) => pathname.startsWith(path));

  return (
    <NavLink href="/docs" icon={icon} isActive={isActive}>
      Documentation
    </NavLink>
  );
}

export function GuidesLink({ icon }: { icon: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/docs/guides');

  return (
    <NavLink href="/docs/guides" icon={icon} isActive={isActive}>
      Guides
    </NavLink>
  );
}

export function ApiLink({ icon }: { icon: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/docs/api');

  return (
    <NavLink href="/docs/api" icon={icon} isActive={isActive}>
      API Reference
    </NavLink>
  );
}

export function CloudLink({ icon }: { icon: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/docs/cloud');

  return (
    <NavLink href="/docs/cloud" icon={icon} isActive={isActive}>
      Cloud
    </NavLink>
  );
}

export function ExternalNavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {children}
      <ExternalLink className="size-3" />
    </Link>
  );
}
