'use client';
import { Container, Popup, PopupTrigger, Text, useScroll, Icon, Icons } from 'react-basics';
import Link from 'next/link';
import CompanyLogo from 'components/common/CompanyLogo';
import HamburgerButton from 'components/common/HamburgerButton';
import LinkButton from 'components/common/LinkButton';
import useQueryString from 'components/hooks/useQueryString';
import { GITHUB_STARS, GITHUB_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
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
  const query = useQueryString({ ref: 'umami-nav-header' });
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <div className={styles.title}>
            <CompanyLogo />
          </div>
          <nav className={styles.links}>
            <PopupTrigger action="hover">
              <div className={styles.dropdown}>
                <Text>产品</Text>
                <Icon>
                  <Icons.ChevronDown />
                </Icon>
              </div>
              <Popup>{close => <ProductMenu onClose={close} />}</Popup>
            </PopupTrigger>
            <Link href="/blog">博客</Link>
            <Link href="/docs" prefetch={false}>
              文档
            </Link>
            <Link href="/pricing">定价</Link>
          </nav>
          <div className={styles.buttons}>
            <Link href={GITHUB_URL} target="_blank" className={styles.github}>
              <Icon size="lg">
                <GitHub />
              </Icon>
              <Text>{GITHUB_STARS}</Text>
            </Link>
            <Link
              href={`https://cloud.umami.is/login${query}`}
              className={styles.login}
              data-umami-event="login-button-header"
            >
              登录
            </Link>
            <LinkButton
              href={`https://cloud.umami.is/signup${query}`}
              variant="primary"
              data-umami-event="signup-button-header"
            >
              注册
            </LinkButton>
          </div>
          <div className={styles.hamburger}>
            <HamburgerButton items={mobileMenuItems} />
          </div>
        </div>
      </Container>
    </header>
  );
}

const ProductMenu = ({ onClose }) => {
  return (
    <nav className={styles.menu} onClick={onClose}>
      <div className={styles.column}>
        <header>分析</header>
        <Link href="/features">特点</Link>
        <Link href="/docs" prefetch={false}>
          自部署
        </Link>
        <Link href="/docs/cloud">Cloud</Link>
      </div>
      <div className={styles.column}>
        <header>学习</header>
        <Link href="/community">社区</Link>
        <Link href="/developers">开发者</Link>
        <Link href="https://github.com/umami-software/umami/discussions" target="_blank">
          讨论
        </Link>
      </div>
      <div className={styles.column}>
        <header>使用</header>
        <Link href="/product/creators">创作者</Link>
        <Link href="/product/marketers">营销人员</Link>
        <Link href="/product/agencies">机构</Link>
      </div>
    </nav>
  );
};
