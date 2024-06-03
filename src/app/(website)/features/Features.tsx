'use client';
import classNames from 'classnames';
import { Text, Icon } from 'react-basics';
import PageHeader from 'components/layout/PageHeader';
import GetStartedBanner from 'components/common/GetStartedBanner';
import TextBlock from 'components/layout/TextBlock';
import User from 'assets/user.svg';
import View from 'assets/view.svg';
import Bounce from 'assets/bounce.svg';
import Traffic from 'assets/traffic.svg';
import Share from 'assets/share.svg';
import Filter from 'assets/filter.svg';
import Location from 'assets/location.svg';
import Language from 'assets/language.svg';
import Realtime from 'assets/realtime.svg';
import Bolt from 'assets/bolt.svg';
import Data from 'assets/data.svg';
import Team from 'assets/team.svg';
import Graph from 'assets/graph.svg';
import Magnet from 'assets/magnet.svg';
import Funnel from 'assets/funnel.svg';
import Privacy from 'assets/privacy.svg';
import Anonymous from 'assets/anonymous.svg';
import Cookie from 'assets/cookie.svg';
import Key from 'assets/key.svg';
import Gear from 'assets/gear.svg';
import Gauge from 'assets/gauge.svg';
import Import from 'assets/import.svg';
import Export from 'assets/export.svg';
import Lightbulb from 'assets/lightbulb.svg';
import Tag from 'assets/tag.svg';
import Target from 'assets/target.svg';
import Device from 'assets/device.svg';
import styles from './Features.module.css';

const items = [
  {
    title: '分析',
    description: `Umami 收集您关心的所有指标，以帮助您做出更好的决策。`,
    items: [
      {
        title: '访客信息',
        description: ['获取有关访问者的详细信息，例如他们的设备、浏览器、操作系统和位置。'],
        icon: <User />,
      },
      {
        title: '页面浏览量',
        description: ['了解哪些页面的流量最大对于改善网站内容至关重要。'],
        icon: <View />,
      },
      {
        title: '跳出率',
        description: ['查看哪些页面让您的访问者参与其中，而不是他们放弃的页面。'],
        icon: <Bounce />,
      },
      {
        title: '流量来源',
        description: ['看看你的流量来自哪里，以更好地了解你应该把精力花在哪里。'],
        icon: <Traffic />,
      },
      {
        title: '位置',
        description: ['了解您的访客来自哪里，包括城市、地区和国家。'],
        icon: <Location />,
      },
      {
        title: '设备',
        description: ['查看访问者使用的最受欢迎的设备，以帮助您优化页面。'],
        icon: <Device />,
      },
      {
        title: '语言',
        description: ['了解哪些语言在您的访问者中最受欢迎，以帮助您定制内容。'],
        icon: <Language />,
      },
      {
        title: '过滤',
        description: ['通过应用国家、浏览器和 URL 等过滤器，进一步了解您的数据。'],
        icon: <Filter />,
      },
      {
        title: '实时数据',
        description: [`数据在几秒钟内可用，而不是几天内。Umami 收集的数据立即在您的仪表板上可用`],
        icon: <Realtime />,
      },
      {
        title: '团队',
        description: ['团队功能允许您与不同的团队成员安全地共享网站访问权限。'],
        icon: <Team />,
      },
      {
        title: '自定义事件',
        description: ['使用自定义事件跟踪您网站上发生的一切，例如注册和购物车结账。'],
        icon: <Bolt />,
      },
      {
        title: '自定义数据',
        description: ['使用自定义数据属性来帮助您进一步分析数据。'],
        icon: <Data />,
      },
      {
        title: 'UTM 跟踪',
        description: ['通过分析自动收集的 UTM 查询参数来衡量广告活动的有效性。'],
        icon: <Tag />,
      },

      {
        title: '共享',
        description: ['通过安全、唯一生成的 URL 轻松与他人共享您的统计数据。'],
        icon: <Share />,
      },
      {
        title: '报告',
        description: ['为特定网站和日期范围构建报告，以满足您的所有数据需求。'],
        icon: <Graph />,
      },
    ],
  },
  {
    title: '报告',
    description: 'Umami 附带开箱即用的报告，使您能够从所有网站数据中获得深刻的见解。',
    items: [
      {
        title: '洞察',
        description: ['通过使用分段和过滤器深入了解您的数据。'],
        icon: <Lightbulb />,
      },
      {
        title: '过滤',
        description: ['了解用户的转化率和下降率。'],
        icon: <Funnel />,
      },
      {
        title: '保留',
        description: ['通过跟踪用户返回的频率来衡量您的网站粘性。'],
        icon: <Magnet />,
      },
      {
        title: '目标',
        description: ['跟踪您的页面浏览量和事件目标。'],
        icon: <Target />,
      },
      {
        title: 'UTM',
        description: ['通过 UTM 参数跟踪您的活动。'],
        icon: <Tag />,
      },
    ],
  },
  {
    title: '隐私',
    description: `默认情况下，Umami 是私有的，可帮助您遵守数据隐私法。`,
    items: [
      {
        title: 'GDPR & CCPA',
        description: ['Umami 从未收集访问者的任何个人信息，因此完全符合 GDPR 和 CCPA。'],
        icon: <Privacy />,
      },
      {
        title: '数据匿名化',
        description: [`所有访问者数据都是匿名的，以保护访问者的隐私。`],
        icon: <Anonymous />,
      },
      {
        title: '没有 Cookie',
        description: [`Umami 不使用任何 cookie，因此不需要烦人的 cookie 横幅。`],
        icon: <Cookie />,
      },
      {
        title: '数据所有权',
        description: [
          `数据始终由您与 Umami 控制。您可以在自己的基础设施上自我托管或从 Umami Cloud 导出数据。`,
        ],
        icon: <Key />,
      },
    ],
  },
  {
    title: 'Cloud',
    description: `Umami Cloud 是一个可靠、高性能的托管解决方案。`,
    cloud: true,
    items: [
      {
        title: '全面托管',
        description: [`当您专注于您的网站时，请将升级、数据库调优和备份管理留给我们。`],
        icon: <Gear />,
      },
      {
        title: '高性能',
        description: [
          `无论您有数百万或数十亿的记录，我们的平台都是为速度而设计的，并将提供快速的结果。`,
        ],
        icon: <Gauge />,
      },
      {
        title: '数据导入',
        description: [`想要将您现有的数据迁移到 Umami 吗？只需使用我们的内置导入工具。`],
        icon: <Import />,
      },
      {
        title: '数据导出',
        description: [`不要满足于汇总数据，获取所有数据的完整数据导出。`],
        icon: <Export />,
      },
    ],
  },
];

export default function Features() {
  return (
    <article>
      <PageHeader>
        <h1>特点</h1>
        <p>Umami 提供的所有核心功能的概述</p>
      </PageHeader>
      <div className={styles.features}>
        {items.map(({ title, description, items, cloud }) => {
          return (
            <TextBlock key={title} className={classNames({ [styles.cloud]: cloud })}>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className={styles.items}>
                {items.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <header className={styles.header}>
                      <Icon size="lg">{item.icon}</Icon>
                      <Text>{item.title}</Text>
                    </header>
                    {item.description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </TextBlock>
          );
        })}
      </div>
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
