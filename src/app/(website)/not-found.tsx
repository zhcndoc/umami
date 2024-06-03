import PageHeader from 'components/layout/PageHeader';

export default function NotFoundPage() {
  return (
    <PageHeader>
      <h1>未找到页面</h1>
      <p>{`抱歉，我们找不到您要查找的页面。`}</p>
    </PageHeader>
  );
}
