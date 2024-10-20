'use client';
import Link from 'next/link';
import { Button, Row, Column, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="lg" className={styles.hero}>
      <TextBlock size="xl" align="center">
        <div>
          轻松分析
          <br /> 实时洞察
        </div>
        <div className={styles.subtitle}>
          Umami 让收集、分析和理解您的网站数据变得简单。
        </div>
      </TextBlock>
      <Row justifyContent="center" gap="md">
        <Button variant="primary" size="xl" asChild>
          <Link href={`/docs`} data-umami-event="get-started-button">
            <Text weight="bold">开始使用</Text>
          </Link>
        </Button>
        <Button size="xl" asChild>
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
      <div className={styles.features}>
        <div>没有 Cookie 横幅</div>
        <div>简化的仪表板</div>
        <div>轻松设置和使用</div>
      </div>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
    </Column>
  );
}
