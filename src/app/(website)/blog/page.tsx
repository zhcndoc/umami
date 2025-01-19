import config from '@/app/shiso.config.json';
import { next } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';
import PageHeader from '@/components/PageHeader';

const { generateMetadata, generateStaticParams, renderCollection } = next('blog', config);

export { generateMetadata, generateStaticParams };

export default renderCollection(props => {
  return (
    <>
      <PageHeader
        title="博客"
        description="分享我们对分析、营销和开源的看法"
      />
      <Shiso {...props} />
    </>
  );
});
