import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';
import styles from './page.module.css';
import PageLinks from 'app/(website)/docs/[[...id]]/PageLinks';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string[] };
}): Promise<Metadata> {
  const doc = await getDoc(id?.join('/'));

  return {
    title: {
      absolute: `${doc?.title} – Umami 中文文档`,
      default: 'Umami 中文文档',
    },
  };
}

export default async function ({ params: { id = [] } }: { params: { id: string[] } }) {
  const doc = await getDoc(id?.join('/'));

  if (!doc) {
    return <h1>Page not found</h1>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Markdown>{doc?.body}</Markdown>
      </div>
      <PageLinks items={doc?.anchors} offset={150} />
    </div>
  );
}
