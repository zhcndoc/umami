'use client';
import styles from './GetStartedBanner.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function GetStartedBanner() {
  const query = useQueryString({ ref: 'umami-get-started-banner' });

  return (
    <div className={styles.banner}>
      <div className={styles.text}>你准备好接受更好的分析了吗？</div>
      <div className={styles.buttons}>
        <LinkButton
          href={`${CLOUD_URL}/signup${query}`}
          data-umami-event="get-started-banner-button"
          variant="primary"
          size="lg"
        >
          尝试 14 天免费试用
        </LinkButton>
      </div>
    </div>
  );
}
