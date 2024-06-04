'use client';
import TextBlock from 'components/layout/TextBlock';
import Link from 'next/link';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from './QuickStart.module.css';
import LinkButton from 'components/common/LinkButton';

export default function QuickStart() {
  const query = useQueryString({ ref: 'umami-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <TextBlock align="center" className={styles.container}>
      <h1>在几分钟内启动并运行</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>1</div>
          <h3>注册</h3>
          <p>
            在 Umami Cloud 上创建一个 <Link href={url}>免费</Link> 账户。
          </p>
        </div>
        <div className={styles.step}>
          <div>2</div>
          <h3>安装跟踪代码</h3>
          <p>将我们的隐私友好型跟踪代码添加到你的网站上。</p>
        </div>
        <div className={styles.step}>
          <div>3</div>
          <h3>查看你的数据</h3>
          <p>数据将立即开始出现在你的仪表板上，就是这么简单。</p>
        </div>
      </div>
      <div className={styles.action}>
        <LinkButton href={url} variant="primary">
          开始使用
        </LinkButton>
      </div>
    </TextBlock>
  );
}
