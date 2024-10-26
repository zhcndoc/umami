'use client';
import { Button, Row } from '@umami/react-zen';
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
      <TextBlock align="center" size="lg">
        <header>简单设置</header>
        <h2>在几分钟内启动并运行</h2>
      </TextBlock>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.num}>1</div>
          <div className={styles.action}>注册</div>
          <div className={styles.description}>
            在 Umami Cloud 上创建一个 <Link href={url}>免费</Link> 账户。
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>2</div>
          <div className={styles.action}>安装跟踪代码</div>
          <div className={styles.description}>
            将我们的隐私友好型跟踪代码添加到你的网站上。
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>3</div>
          <div className={styles.action}>查看您的数据</div>
          <div className={styles.description}>
            数据将立即出现在您的仪表板上，就是这么简单。
          </div>
        </div>
      </div>
      <Row justifyContent="center">
        <Button variant="primary" size="lg" asChild>
          <a href={url}>开始使用</a>
        </Button>
      </Row>
    </div>
  );
}
