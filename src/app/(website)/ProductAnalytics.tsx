'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Column, Row } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import ImageBlock from '@/components/ImageBlock';
import styles from './ProductAnalytics.module.css';

const images = [
  `/images/feature-user-journeys.png`,
  `/images/feature-user-retention.png`,
  `/images/feature-funnels.png`,
];

const items = [
  { name: '用户旅程', description: '了解用户如何在您的产品中导航。' },
  {
    name: '用户留存',
    description: '通过跟踪用户返回的频率来衡量您网站的粘性。',
  },
  { name: '漏斗', description: '了解用户的转化率和流失率。' },
];

export default function ProductAnalytics() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => setNum(num => num + 1), 3000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <Row gap="6" className={styles.row}>
      <ImageBlock className={styles.block}>
        {images.map((src, index) => {
          return (
            <img
              key={src}
              src={src}
              alt="screenshot"
              className={classNames(styles.image, num % 3 === index && styles.selected)}
            />
          );
        })}
      </ImageBlock>
      <Column gap="6">
        <TextBlock align="center" size="lg">
          <header>产品分析</header>
          <h2>将用户行为转化为洞察</h2>
          <p>Umami 帮助您理解用户为什么会这样做，以便您可以优化转化路径。</p>
        </TextBlock>
        <Column gap="3">
          {items.map(({ name, description }, index) => {
            return (
              <TextBlock
                key={name}
                className={classNames(styles.item, num % 3 === index && styles.selected)}
                onClick={() => setNum(index)}
              >
                <h3>{name}</h3>
                <p>{description}</p>
              </TextBlock>
            );
          })}
        </Column>
      </Column>
    </Row>
  );
}
