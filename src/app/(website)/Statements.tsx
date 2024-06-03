'use client';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import TextBlock from 'components/layout/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: '易于使用',
    description: `
    Umami易于使用和理解，无需经过繁杂的设置。
    许多功能已准备就绪。
    只需几分钟即可启动并运行。
    `,
    image: <Analytics />,
  },
  {
    title: '拥有你的数据',
    description: `
    数据所有权对于遵守不断变化的隐私法至关重要。
    请放心，您的数据在您的控制之下。
    `,
    image: <Shield />,
  },
  {
    title: '尊重数据隐私',
    description: `
    Umami允许您收集所需的数据，同时尊重用户的隐私。
    所有数据都是匿名的，从未收集过任何个人数据。不需要Cookie横幅。
    `,
    image: <Lock />,
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Umami 是比 Google Analytics 更快、更注重隐私的替代品</h1>
        </TextBlock>
      </div>
      <div className={styles.items}>
        {statements.map(({ title, description, image }) => {
          return (
            <div key={title} className={styles.item}>
              <TextBlock size="sm" align="center">
                <h1>
                  <div className={styles.image}>{image}</div> {title}
                </h1>
                <p>{description}</p>
              </TextBlock>
            </div>
          );
        })}
      </div>
    </section>
  );
}
