'use client';
import { Button, Text, Icon, Row, Container } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import MobileMenu from '@/components/MobileMenu';
import useQueryString from '@/components/hooks/useQueryString';
import { GITHUB_STARS, GITHUB_URL } from '@/lib/constants';
import useScroll from '@/components/hooks/useScroll';
import { Github } from 'src/components/svg';
import styles from './Header.module.css';

const mobileMenuItems = [
  {
    label: '特点',
    value: '/features',
  },
  {
    label: '价格',
    value: '/pricing',
  },
  {
    label: '文档',
    value: '/docs',
  },
  {
    label: '博客',
    value: '/blog',
  },
  {
    label: '社区',
    value: '/community',
  },
  {
    label: '联系',
    value: '/contact',
  },
];

export default function Header() {
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <Row justifyContent="space-between">
          <CompanyLogo />
          <NavLinks />
          <ActionLinks />
        </Row>
      </Container>
    </header>
  );
}

const NavLinks = () => {
  return (
    <Row className={styles.links} alignItems="center" gap="6">
      <Link href="/features">特征</Link>
      <Link href="/blog">博客</Link>
      <Link href="/docs" prefetch={false}>
        文档
      </Link>
      <Link href="/pricing">定价</Link>
      <Link href="/contact">联系</Link>
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <Row className={styles.actions} alignItems="center" gap="2">
      <Button variant="quiet" asChild>
        <Link className={styles.github} href={GITHUB_URL} target="_blank">
          <Row alignItems="center" gap="2">
            <Icon size="sm">
              <Github />
            </Icon>
            <Text weight="bold">{GITHUB_STARS}</Text>
          </Row>
        </Link>
      </Button>
      <Button className={styles.login} variant="quiet" asChild>
        <Link href={`https://cloud.umami.is/login${query}`} data-umami-event="login-button-header">
          Log in
        </Link>
      </Button>
      <Button className={styles.signup} variant="primary" asChild>
        <Link
          href={`https://cloud.umami.is/signup${query}`}
          data-umami-event="signup-button-header"
        >
          Sign up
        </Link>
      </Button>
      <div className={styles.hamburger}>
        <MobileMenu items={mobileMenuItems} />
      </div>
    </Row>
  );
};
