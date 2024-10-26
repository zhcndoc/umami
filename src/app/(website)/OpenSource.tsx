import { Column, Row } from '@umami/react-zen';
import GitHubStats from '@/app/(website)/GitHubStats';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';
import { GITHUB_URL } from '@/lib/constants';

export default function OpenSource() {
  return (
    <Column gap="lg">
      <TextBlock size="lg" align="center">
        <header>贡献</header>
        <h2>由开源提供支持</h2>
        <p>
          Umami 自豪地开源，全球数千名开发者可以分享和贡献 Umami 体验。
        </p>
      </TextBlock>
      <Row alignItems="center" justifyContent="center" gap="md">
        <LinkButton href="/docs" variant="outline">
          阅读文档
        </LinkButton>
        <LinkButton href={GITHUB_URL} variant="outline" target="_blank">
          查看代码库
        </LinkButton>
      </Row>
      <GitHubStats />
    </Column>
  );
}
