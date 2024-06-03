'use client';
import { Container } from 'react-basics';
import Link from 'next/link';
import classNames from 'classnames';
import CompanyLogo from 'components/common/CompanyLogo';
import SocialMedia from 'components/common/SocialMedia';
import styles from './Footer.module.css';
import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, X_URL } from 'lib/constants';

const data = [
  {
    title: '产品',
    items: [
      { text: '特点', href: '/features' },
      { text: '定价', href: '/pricing' },
      { text: 'Cloud', href: 'https://cloud.umami.is/?ref=umami-nav-footer' },
    ],
  },
  {
    title: '学习',
    items: [
      { text: '文档', href: '/docs' },
      { text: '指南', href: '/docs/guides' },
      { text: 'API 参考', href: '/docs/api' },
      { text: '发布说明', href: 'https://github.com/umami-software/umami/releases' },
    ],
  },
  {
    title: '资源',
    items: [
      { text: '开发者', href: '/developers' },
      { text: '社区', href: '/community' },
      { text: 'GitHub', href: GITHUB_URL },
      { text: 'Discord', href: DISCORD_URL },
      { text: 'X', href: X_URL },
    ],
  },
  {
    title: '关于',
    items: [
      { text: '公司', href: '/about' },
      { text: '博客', href: '/blog' },
      { text: '联系我们', href: '/contact' },
      { text: '领英', href: LINKEDIN_URL },
      { text: '隐私', href: '/privacy' },
      { text: '条款', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div className={classNames(styles.col, styles.logo)}>
            <CompanyLogo />
          </div>
          {data.map(({ title, items }) => (
            <div key={title} className={classNames(styles.col, styles.links)}>
              <header>{title}</header>
              {items.map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                >
                  {text}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <SocialMedia />
          <div className={styles.copy}>
            <div>&copy; {new Date().getFullYear()} Umami Software, Inc.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
