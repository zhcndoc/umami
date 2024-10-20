'use client';
import { Button, Text } from '@umami/react-zen';
import Link from 'next/link';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './QuickStart.module.css';

export default function QuickStart() {
  const query = useQueryString({ ref: 'umami-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <div className={styles.container}>
      <TextBlock align="center" className={styles.title}>
        <div>在几分钟内启动并运行</div>
      </TextBlock>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>1</div>
          <div>注册</div>
          <div>
            在 Umami Cloud 上创建一个 <Link href={url}>免费</Link> 账户。
          </div>
        </div>
        <div className={styles.step}>
          <div>2</div>
          <div>安装跟踪代码</div>
          <div>将我们的隐私友好型跟踪代码添加到你的网站上。</div>
        </div>
        <div className={styles.step}>
          <div>3</div>
          <div>View your data</div>
          <div>Data will start appearing on your dashboard immediately. It&apos;s that easy.</div>
        </div>
      </div>
      <div className={styles.action}>
        <Button variant="primary" size="lg" asChild>
          <a href={url}>开始使用</a>
        </Button>
      </div>
    </div>
  );
}
