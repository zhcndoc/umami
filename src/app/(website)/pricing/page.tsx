import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GetStartedBanner from '@/components/GetStartedBanner';
import Plans from './Plans';
import Features from './Features';
import Questions from './Questions';

export default function PricingPage() {
  return (
    <article>
      <PageHeader>
        <h1>定价</h1>
        <p>
          <strong>Umami Cloud</strong> 是一个可靠、高性能的托管解决方案
        </p>
      </PageHeader>
      <Plans />
      <Features />
      <Questions />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {
  title: '定价',
};
