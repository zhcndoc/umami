import PageHeader from '@/components/PageHeader';
import GitHubStats from '@/app/(website)/GitHubStats';

export default function OpenSource() {
  return (
    <section>
      <PageHeader>
        <h1>由开源提供支持</h1>
      </PageHeader>
      <GitHubStats />
    </section>
  );
}
