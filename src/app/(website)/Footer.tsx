'use client';
import { Grid, Row, Column, Heading, Text, Container } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import SocialMedia from '@/components/SocialMedia';

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
    title: '资源',
    items: [
      { text: '文档', href: '/docs' },
      { text: '指南', href: '/docs/guides' },
      { text: 'API 参考', href: '/docs/api' },
      { text: '发布说明', href: 'https://github.com/umami-software/umami/releases' },
      { text: '社区', href: '/community' },
      { text: '支持', href: '/support' },
    ],
  },
  {
    title: '公司',
    items: [
      { text: '关于我们', href: '/about' },
      { text: '博客', href: '/blog' },
      { text: '联系', href: '/contact' },
      { text: '隐私', href: '/privacy' },
      { text: '条款', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <Row as="footer" backgroundColor="2" paddingY="8">
      <Container>
        <Grid
          columns={{ xs: '1fr', md: '1fr minmax(auto, 200px) minmax(auto, 200px) auto' }}
          gap="6"
          marginBottom="6"
        >
          <Column>
            <CompanyLogo />
          </Column>
          {data.map(({ title, items }) => (
            <Column key={title} gap>
              <Heading size="5">{title}</Heading>
              {items.map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                >
                  {text}
                </Link>
              ))}
            </Column>
          ))}
        </Grid>
        <Row justifyContent="space-between">
          <SocialMedia />
          <Text size="2">
              <a target="__blank" href="https://www.zhcndoc.com/?ref=umami">
                简中文档
              </a>
              <a
                style={{ marginLeft: '12px' }}
                rel="nofollow"
                target="__blank"
                href="https://beian.miit.gov.cn"
              >
                沪ICP备2024070610号-3
              </a>
            </Text>
        </Row>
      </Container>
    </Row>
  );
}
