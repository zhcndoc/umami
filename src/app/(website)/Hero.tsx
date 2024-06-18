'use client';
import LinkButton from 'components/common/LinkButton';
import TextBlock from 'components/layout/TextBlock';
// import { CLOUD_URL } from 'lib/constants';
// import useQueryString from 'components/hooks/useQueryString';
import styles from './Hero.module.css';

export default function Hero() {
  // const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>为速度和效率而构建的网站分析</h1>
        <p className={styles.subtitle}>Umami 网站分析提供您需要的数据，帮助您实时做出决策。</p>
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
        <img src="/images/app.jpg" alt="umami" />
      </div>
    </div>
  );
}
