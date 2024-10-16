'use client';
import LinkButton from '@/components/LinkButton';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import styles from './Hero.module.css';

export default function Hero() {
  // const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>
          轻松的分析和
          <br /> 实时洞察
        </h1>
        <p className={styles.subtitle}>
          Umami 可以轻松收集、分析和理解您的数据 &mdash; 因此您可以专注于
          <strong>增长</strong>
        </p>
      </TextBlock>
      <div className={styles.buttons}>
        <LinkButton
          href={`/docs`}
          data-umami-event="get-started-button"
          variant="primary"
          size="lg"
        >
          开始使用
        </LinkButton>
        <LinkButton
          href="https://analytics.ikxin.com/share/aHYOn5YKtcPoS5v7/zhcndoc.com"
          data-umami-event="live-demo-button"
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          查看演示
        </LinkButton>
      </div>
      <div className={styles.features}>
        <div>没有 Cookie 横幅</div>
        <div>简化的仪表板</div>
        <div>轻松设置和使用</div>
      </div>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
    </div>
  );
}
