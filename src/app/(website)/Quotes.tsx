'use client';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import X from 'assets/x.svg';
import styles from './Quotes.module.css';

const items = [
  {
    name: 'khoi',
    username: '@khoiuna',
    quote: [
      '刚刚设置了我的 umami.is 自托管分析页面。设置花了我不到10分钟！超级简单！',
      '来自@umami_software的优秀Google Analytics替代品！',
    ],
  },
  {
    name: 'Sylvain',
    username: '@_maoosi',
    quote: [
      `Umami（@umami_software）是我新的分析平台！`,
      `奇妙的开源产品，注重隐私，刚刚推出了最具吸引力的托管分析定价模型！`,
    ],
  },
  {
    name: 'Pauline AI',
    username: '@Pauline_Cx',
    quote: [
      `它是开源的，符合 GDPR 规定，比 Google Analytics 更好。`,
      `将其安装在 @vercel 上，数据库托管在 @supabase 上，您将获得一个免费的完整应用分析解决方案。`,
    ],
  },
  {
    name: 'Abdullah Bashir',
    username: '@digitaldrreamer',
    quote: [
      `今天尝试了 Umami，换个口味。它的简单性令人上瘾 🙃。对我来说够好了。迫不及待想要融入我的项目。`,
    ],
  },
  {
    name: 'Filip @ Studio',
    username: '@filipatstudio',
    quote: [
      `今天在我的服务器上为 studio.dev 和 rectangles.dev 安装了 @umami_software。`,
      `简单易行的安装。我喜欢这些文档！💅`,
      `合适我需求的良好且美丽的软件 🤝`,
    ],
  },
  {
    name: 'Stefan Judis',
    username: '@stefanjudis',
    quote: [
      `在周末，我设置了 umami.is，以启用不依赖于 Google Analytics 的跟踪。这只花了一个小时。👏`,
      `谢谢 @umami_software 构建它！🙇‍♂️`,
    ],
  },
];

export default function Quotes() {
  return (
    <div className={styles.container}>
      <TextBlock size="lg" align="center">
        <div>人们喜欢 Umami</div>
      </TextBlock>
      <div className={styles.list}>
        {items.map(({ name, username, quote }) => {
          return (
            <div key={name} className={styles.card}>
              <div className={styles.pic}>
                <ContentImage src={`/images/${username}.jpg`} alt="" />
              </div>
              <div className={styles.header}>
                <div className={styles.user}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.username}>{username}</div>
                </div>
                <div className={styles.logo}>
                  <X />
                </div>
              </div>
              <div className={styles.body}>
                {quote.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
