'use client';
import { Button, Column, Heading, Row, Text } from '@umami/react-zen';
import Link from 'next/link';
import ContentImage from '@/components/ContentImage';
import useQueryString from '@/components/hooks/useQueryString';
import { CLOUD_URL } from '@/lib/constants';
import Companies from './Companies';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="6" className={styles.hero} alignItems="center">
      <Heading size="6" align="center">
        现代分析平台
        <br /> 为了轻松的洞察
      </Heading>
      <Text color="muted" size="4" as="p">
        Umami 使您轻松收集、分析和理解您的网站数据 ——
        这样您就可以专注于<strong>增长</strong>
      </Text>
      <Row justifyContent="center" gap="3" style={{ zIndex: 1 }}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`/docs`}>
            开始使用
          </Link>
        </Button>
      </Row>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
