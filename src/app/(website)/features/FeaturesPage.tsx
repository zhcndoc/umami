'use client';
import { Box, Column, Grid, Heading, Icon, Text, Row } from '@umami/react-zen';
import GetStartedBanner from '@/components/GetStartedBanner';
import PageHeader from '@/components/PageHeader';
import {
  Anonymous,
  Bolt,
  Bounce,
  Compare,
  Cookie,
  Data,
  Device,
  Export,
  Filter,
  Funnel,
  Gauge,
  Gear,
  Graph,
  Import,
  Key,
  Language,
  Lightbulb,
  Location,
  Magnet,
  Money,
  Network,
  Path,
  Privacy,
  Realtime,
  Reports,
  Share,
  Tag,
  Target,
  Team,
  Traffic,
  User,
  View,
} from 'src/components/svg';

const items = [
  {
    title: '分析',
    description: `Umami 收集您关心的所有指标，帮助您做出更好的决策。`,
    items: [
      {
        title: '页面浏览量',
        description: [
          '了解哪些页面流量最高，对于改进网站内容至关重要。',
        ],
        icon: <View />,
      },
      {
        title: '访客',
        description: [
          '获取有关访客的详细信息，如他们的设备、浏览器、操作系统和位置。',
        ],
        icon: <User />,
      },
      {
        title: '跳出率',
        description: [
          '查看哪些页面让访客保持参与，哪些页面让他们离开。',
        ],
        icon: <Bounce />,
      },
      {
        title: '流量来源',
        description: [
          '查看您的流量来自哪里，以便更好地了解您应该在哪里投入精力。',
        ],
        icon: <Traffic />,
      },
      {
        title: '位置',
        description: [
          '了解访客来自哪里，包括城市、地区和国家。',
        ],
        icon: <Location />,
      },
      {
        title: '设备',
        description: [
          '查看访客使用的最流行的设备，帮助您优化页面。',
        ],
        icon: <Device />,
      },
      {
        title: '语言',
        description: [
          '了解访客中最流行的语言，帮助您定制内容。',
        ],
        icon: <Language />,
      },
      {
        title: '比较',
        description: ['查看您的指标表现与之前日期范围的对比。'],
        icon: <Compare />,
      },
      {
        title: '过滤',
        description: [
          '通过应用国家、浏览器和URL等过滤器，进一步深入了解您的数据。',
        ],
        icon: <Filter />,
      },
      {
        title: '实时数据',
        description: [
          `数据在几秒钟内即可获得，而不是几天。Umami 收集的数据会立即显示在您的仪表板上。`,
        ],
        icon: <Realtime />,
      },
      {
        title: '团队',
        description: [
          '团队功能允许您安全地与不同的团队成员共享网站访问权限。',
        ],
        icon: <Team />,
      },
      {
        title: '自定义事件',
        description: [
          '使用自定义事件跟踪网站上发生的所有事情，如注册和购物车结账。',
        ],
        icon: <Bolt />,
      },
      {
        title: '自定义数据',
        description: ['使用自定义数据属性帮助您进一步分析数据。'],
        icon: <Data />,
      },
      {
        title: 'UTM 跟踪',
        description: [
          '通过分析自动收集的UTM查询参数来衡量您的广告活动效果。',
        ],
        icon: <Tag />,
      },

      {
        title: '分享',
        description: [
          '通过安全生成的唯一URL轻松与他人分享您的统计数据。',
        ],
        icon: <Share />,
      },
      {
        title: '报告',
        description: [
          '为特定网站和日期范围构建报告，以满足您的所有数据需求。',
        ],
        icon: <Graph />,
      },
    ],
  },
  {
    title: '报告',
    description:
      'Umami 提供开箱即用的报告功能，使您能够从所有网站数据中获得深入洞察。',
    items: [
      {
        title: '洞察',
        description: ['通过使用细分和过滤器深入挖掘您的数据。'],
        icon: <Lightbulb />,
      },
      {
        title: '漏斗',
        description: ['了解用户的转化率和流失率。'],
        icon: <Funnel />,
      },
      {
        title: '留存',
        description: ['通过跟踪用户返回的频率来衡量您网站的粘性。'],
        icon: <Magnet />,
      },
      {
        title: 'UTM',
        description: ['通过UTM参数跟踪您的广告活动。'],
        icon: <Tag />,
      },
      {
        title: '目标',
        description: ['跟踪您的页面浏览量和事件目标。'],
        icon: <Target />,
      },
      {
        title: '旅程',
        description: ['查看您的收入数据以及用户的消费情况。'],
        icon: <Path />,
      },
      {
        title: '收入',
        description: ['了解用户如何浏览您的网站。'],
        icon: <Money />,
      },
      {
        title: '归属',
        description: ['查看用户如何与您的营销互动以及什么推动了转化。'],
        icon: <Network />,
      },
    ],
  },
  {
    title: '隐私',
    description: `Umami 默认是私密的，帮助您遵守数据隐私法律。`,
    items: [
      {
        title: 'GDPR & CCPA',
        description: [
          'Umami 从不收集访客的任何个人信息，因此完全符合 GDPR 和 CCPA。',
        ],
        icon: <Privacy />,
      },
      {
        title: '数据匿名化',
        description: [`所有访客数据都经过匿名化处理，以保护访客的隐私。`],
        icon: <Anonymous />,
      },
      {
        title: '无 Cookie',
        description: [`Umami 不使用任何 Cookie，因此不需要烦人的 Cookie 横幅。`],
        icon: <Cookie />,
      },
      {
        title: '数据所有权',
        description: [
          `使用 Umami，数据始终在您的控制之中。您可以在自己的基础设施上自托管，或从 Umami Cloud 导出数据。`,
        ],
        icon: <Key />,
      },
    ],
  },
  {
    title: 'Cloud',
    description: `Umami Cloud 是一个可靠、高性能的托管解决方案。`,
    items: [
      {
        title: '完全托管',
        description: [
          `将升级、备份和性能调优交给我们，您只需专注于结果。`,
        ],
        icon: <Gear />,
      },
      {
        title: '高性能',
        description: [
          `无论您有数百万还是数十亿条记录，我们的平台都设计为快速交付结果。`,
        ],
        icon: <Gauge />,
      },
      {
        title: '数据导入',
        description: [
          `想将现有数据迁移到 Umami 吗？只需使用我们内置的导入工具。`,
        ],
        icon: <Import />,
      },
      {
        title: '数据导出',
        description: [`不要满足于汇总数据。获取所有数据的完整导出。`],
        icon: <Export />,
      },
      {
        title: '电子邮件报告',
        description: [
          `向任何人发送预定的电子邮件报告。以简洁易懂的电子邮件发送网站摘要。`,
        ],
        icon: <Reports />,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="功能"
        description="Umami 提供的所有核心功能概述。"
      />
      <Column gap="6">
        {items.map(({ title, description, items }) => {
          return (
            <Box key={title}>
              <Heading size="3">{title}</Heading>
              <Box paddingY="6" maxWidth="600px">
                <Text color="muted" size="3">
                  {description}
                </Text>
              </Box>
              <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4">
                {items.map((item, index) => (
                  <Box key={index} borderRadius="2" padding="4" backgroundColor="2">
                    <Row gap="3" alignItems="center">
                      <Icon size="md">{item.icon}</Icon>
                      <Text weight="bold">{item.title}</Text>
                    </Row>
                    {item.description.map((text, index) => (
                      <Text key={index} as="p" color="muted">
                        {text}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Grid>
            </Box>
          );
        })}
        <section>
          <GetStartedBanner />
        </section>
      </Column>
    </>
  );
}
