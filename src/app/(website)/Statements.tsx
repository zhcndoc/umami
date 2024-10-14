'use client';
import Block from 'assets/block.svg';
import Code from 'assets/code.svg';
import Analytics from 'assets/analytics.svg';
import TextBlock from '@/components/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: '易于使用',
    description: `
Umami 功能强大而简单，易于使用和理解，不需要复杂的设置或标签配置。
    `,
    image: <Analytics />,
  },
  {
    title: 'UTM 和自定义事件',
    description: `
Umami 会自动理解带有 UTM 参数的链接，并允许您根据 UTM 查看和过滤您的网站数据。此外，您还可以跟踪网站上的任何事件，例如按钮点击、表单提交、购买、新闻通讯注册等。
    `,
    image: <Code />,
  },
  {
    title: '没有 Cookie 横幅',
    description: `
所有数据都经过 Umami 匿名处理，您的网站用户永远不会收集个人信息。您可以在无需选择性接受 Cookie 横幅的情况下跟踪网站的表现，为用户提供更好、更可信赖的体验。Umami 默认符合 GDPR 和 CCPA 标准。
    `,
    image: <Block />,
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Umami 使分析您的数据变得毫不费力</h1>
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
