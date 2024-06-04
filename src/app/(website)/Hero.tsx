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
        <h1>
          赋予洞察力
          <br />
          保护隐私
        </h1>
        <p className={styles.subtitle}>
          Umami 使您可以轻松收集、分析和理解您的网络数据，同时维护
          <strong>访问者的隐私</strong>和<strong>数据所有权</strong>。
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
        <div>没有 Cookie</div>
        <div>GDPR 和 CCPA合规</div>
        <div>开放源代码</div>
      </div>
      <div className={styles.image}>
        <img src="/images/app.jpg" alt="umami" />
      </div>
    </div>
  );
}
