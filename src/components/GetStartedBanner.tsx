'use client';
import { Button } from '@umami/react-zen';
import styles from './GetStartedBanner.module.css';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function GetStartedBanner() {
  const query = useQueryString({ ref: 'umami-get-started-banner' });

  return (
    <div className={styles.banner}>
      <div className={styles.text}>你准备好接受更好的分析了吗？</div>
      <div className={styles.buttons}>
        <Button variant="primary" size="lg" asChild>
          <a href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-banner-button">
            尝试 14 天免费试用
          </a>
        </Button>
      </div>
    </div>
  );
}
