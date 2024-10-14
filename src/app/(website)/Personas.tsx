'use client';
import { Icon, Icons, Text } from 'react-basics';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';
import styles from './Personas.module.css';

const items = [
  {
    title: '创作者',
    description: '衡量你所需的一切，以帮助改进你的网站。',
    image: '/images/creators.jpg',
    url: '/product/creators',
  },
  {
    title: '营销人员',
    description: '轻松衡量你的活动的有效性。',
    image: '/images/marketers.jpg',
    url: '/product/marketers',
  },
  {
    title: '机构',
    description: '通过提供对客户数据的深入洞察，为你的客户带来价值。',
    image: '/images/agencies.jpg',
    url: '/product/agencies',
  },
];

export default function Personas() {
  return (
    <section className={styles.container}>
      <TextBlock align="center" size="lg">
        <h1>为你打造</h1>
      </TextBlock>
      <div className={styles.items}>
        {items.map(({ title, description, image, url }) => {
          return (
            <div key={title} className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
              <TextBlock size="sm" align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
              <div className={styles.button}>
                <LinkButton href={url} variant="secondary">
                  <Text>了解更多</Text>
                  <Icon>
                    <Icons.ArrowRight />
                  </Icon>
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
