'use client';
import { Button, Flexbox, Icon, Icons, Text } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import { Blocks } from '@/lib/constants';
import styles from './Features.module.css';
import ScrollBlock from '@/components/ScrollBlock';

const items: any = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.customEvents,
  Blocks.filters,
  Blocks.realtimeData,
  Blocks.reports,
];

export default function Features() {
  return (
    <section className={styles.features}>
      <PageHeader>
        <h1>你所需要的所有功能</h1>
        <p>
          Umami充满了令人惊叹的功能，让你能更好地
          <br /> 了解你的网站流量。
        </p>
      </PageHeader>
      <ScrollBlock items={items} />
      <Flexbox justifyContent="center" alignItems="center">
        <Button variant="secondary" asChild>
          <a href="/features">
            <Text>探索更多功能</Text>
            <Icon size="sm">
              <Icons.Arrow />
            </Icon>
          </a>
        </Button>
      </Flexbox>
    </section>
  );
}
