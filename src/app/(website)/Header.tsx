'use client';
import { Button, Text, Icon, Row } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import HamburgerButton from '@/components/HamburgerButton';
import useQueryString from '@/components/hooks/useQueryString';
import { GITHUB_STARS, GITHUB_URL } from '@/lib/constants';
import useScroll from '@/components/hooks/useScroll';
import Container from '@/components/Container';
import GitHub from '@/assets/github.svg';
import styles from './Header.module.css';

const mobileMenuItems = [
  {
    label: '首页',
    value: '/',
  },
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
    label: '开发者',
    value: '/developers',
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
    <Row className={styles.links} alignItems="center" gap="lg">
      <Link href="/features">特征</Link>
      <Link href="/blog">博客</Link>
      <Link href="/docs" prefetch={false}>
        文档
      </Link>
      <Link href="/pricing">定价</Link>
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <Row alignItems="center" gap="md">
      <Link className={styles.github} href={GITHUB_URL} target="_blank">
        <Row alignItems="center" gap="md">
          <Icon size="md">
            <GitHub />
          </Icon>
          <Text>{GITHUB_STARS}</Text>
        </Row>
      </Link>
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
        <HamburgerButton items={mobileMenuItems} />
      </div>
    </Row>
  );
};
