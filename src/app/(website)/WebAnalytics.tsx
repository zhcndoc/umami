'use client';
import { ReactNode, CSSProperties } from 'react';
import Link from 'next/link';
import { Button, Flexbox, Icon, Icons, Text, Column } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import ImageBlock from '@/components/ImageBlock';
import styles from './WebAnalytics.module.css';

export default function WebAnalytics() {
  return (
    <Column gap="lg">
      <TextBlock size="lg">
        <header>网络分析</header>
        <h2>一个完整的分析解决方案，拥有您所需的所有功能。</h2>
        <p>Umami 拥有丰富的功能，使您能够更好地了解您的网站流量。</p>
      </TextBlock>
      <div className={styles.items}>
        <Feature title="流量分析" image="/images/feature-stats.png">
          获取流量洞察，以便优化增长。轻松一目了然地查看所有指标。
        </Feature>
        <Feature title="访客分析" image="/images/feature-visitors.png" style={{ top: 30 }}>
          获取有关访客的详细信息，包括他们的位置和使用的设备。
        </Feature>
        <Feature title="自定义事件" image="/images/feature-events.png" style={{ bottom: 30 }}>
          跟踪的不仅仅是页面浏览量。捕捉您网站上的任何事件，例如按钮点击和表单输入。
        </Feature>
        <Feature
          title="强大的过滤器"
          image="/images/feature-filters.png"
          style={{ left: 70, top: 50 }}
        >
          使用易于应用的过滤器深入挖掘您的数据。按浏览器、操作系统和国家等任何指标对用户进行细分。
        </Feature>
        <Feature title="实时数据" image="/images/feature-realtime.png" style={{ top: 40 }}>
          获取您当前网站流量的实时视图。查看访客正在访问的确切页面。
        </Feature>
        <Feature title="趋势检测" image="/images/feature-compare.png">
          比较日期周期以发现流量中的关键趋势。轻松衡量您活动的成功。
        </Feature>
      </div>
      <Flexbox justifyContent="center" alignItems="center">
        <Button variant="secondary" asChild>
          <Link href="/src/app/(website)/WebAnalytics">
            <Text>探索更多功能</Text>
            <Icon size="sm">
              <Icons.Arrow />
            </Icon>
          </Link>
        </Button>
      </Flexbox>
    </Column>
  );
}

const Feature = ({
  title,
  image,
  style,
  children,
}: {
  title: string;
  image: string;
  style?: CSSProperties;
  children: ReactNode;
}) => {
  return (
    <TextBlock className={styles.item}>
      <ImageBlock className={styles.image}>
        <img src={image} style={style} alt={title} />
      </ImageBlock>
      <h3>{title}</h3>
      <p>{children}</p>
    </TextBlock>
  );
};
