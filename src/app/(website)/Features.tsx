'use client';
import PageHeader from '@/components/PageHeader';
import { Blocks } from '@/lib/constants';
import LinkButton from '@/components/LinkButton';
import { Flexbox, Icon, Icons, Text } from 'react-basics';
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
        <LinkButton href="/features" variant="secondary">
          <Text>探索更多功能</Text>
          <Icon>
            <Icons.ArrowRight />
          </Icon>
        </LinkButton>
      </Flexbox>
    </section>
  );
}
