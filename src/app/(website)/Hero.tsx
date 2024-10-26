'use client';
import Link from 'next/link';
import { Button, Row, Column, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import Companies from './Companies';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="lg" className={styles.hero}>
      <TextBlock size="lg" align="center" style={{ zIndex: 1 }}>
        <h1>
          现代化分析平台
          <br /> 为了轻松的洞察
        </h1>
        <p>
          Umami 使您轻松收集、分析和理解您的网站数据 ——
          这样您就可以专注于<strong>增长</strong>
        </p>
      </TextBlock>
      <Row justifyContent="center" gap="md" style={{ zIndex: 1 }}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`/docs`} data-umami-event="get-started-button">
            <Text weight="bold">开始使用</Text>
          </Link>
        </Button>
        <Button size="lg" asChild>
          <a
            href="https://analytics.ikxin.com/share/aHYOn5YKtcPoS5v7/zhcndoc.com"
            data-umami-event="live-demo-button"
            target="_blank"
            rel="noreferrer"
          >
            查看演示
          </a>
        </Button>
      </Row>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
