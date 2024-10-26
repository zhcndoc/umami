import Infinite from '@/assets/infinity.svg';
import Teams from '@/assets/teams.svg';
import Block from '@/assets/block.svg';
import Feather from '@/assets/feather.svg';
import Share from '@/assets/share.svg';
import Lock from '@/assets/lock.svg';
import Code from '@/assets/code.svg';

export const CONTENT_URL = 'https://static.umami.dev/website';
export const CLOUD_URL = 'https://cloud.umami.is';
export const GITHUB_URL = 'https://github.com/umami-software/umami';
export const DISCORD_URL = 'https://discord.gg/4dz4zcXYrQ';
export const X_URL = 'https://twitter.com/umami_software';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/umami-software/';
export const GITHUB_STARS = '22k';
export const GITHUB_CONTRIBUTORS = '260';
export const GITHUB_DOWNLOADS = '12M';
export const GITHUB_STATS = [
  { label: 'Downloads', value: GITHUB_DOWNLOADS },
  { label: 'GitHub stars', value: GITHUB_STARS },
  { label: 'Contributors', value: GITHUB_CONTRIBUTORS },
];

export const Blocks = {
  simpleAnalytics: {
    title: '简单的分析',
    description: 'Umami 只测量你关心的重要指标，一切都可以一目了然地轻松获取。',
    image: '/images/preview-website-stats.png',
  },
  visitorInsights: {
    title: '访客洞察',
    description: `获取关于您的访客的详细信息，包括他们的位置和使用的设备。`,
    image: '/images/preview-session-stats.png',
  },
  customEvents: {
    title: '自定义事件',
    description: '不仅跟踪页面浏览量，还可以捕捉网站上的任何事件，如按钮点击和表单填写。',
    image: '/images/preview-events.png',
  },
  filters: {
    title: '强大的过滤器',
    description:
      '使用易于应用的过滤器深入了解你的数据。按浏览器、操作系统和国家/地区等任何指标细分你的用户。',
    image: '/images/preview-filters.png',
  },
  realtimeData: {
    title: '实时数据',
    description: '获取你当前网站流量的实时视图。查看访问者落地的确切页面。',
    image: '/images/preview-realtime.png',
  },
  multiLanguage: {
    title: '多语言',
    description: 'Umami 已被热情的开源社区翻译成了许多不同的语言。',
    image: '/images/preview-languages.png',
  },
  mobileFriendly: {
    title: '移动端友好',
    description: 'Umami 界面已针对移动设备进行优化，你可以随时随地查看你的统计数据。',
    image: '/images/preview-mobile.png',
  },
  unlimitedWebsites: {
    title: '无限的网站',
    description: `Umami 能够跟踪无限数量的网站。你甚至可以跟踪子域和单个 URL。`,
    icon: Infinite,
  },
  multipleAccounts: {
    title: '多个帐户',
    description:
      'Umami 可用于为朋友或客户托管数据。只需创建一个单独的帐户，他们就可以开始在自己的仪表板上跟踪自己的网站。',
    icon: Teams,
  },
  bypassAdBlockers: {
    title: '绕过广告拦截器',
    description: 'Umami 由你托管在自己的域名下，因此你可以可靠地避免与谷歌分析不同的广告拦截器。',
    icon: Block,
  },
  lightWeight: {
    title: '轻量级',
    description: '跟踪脚本很小（只有2KB），加载速度快如闪电。它永远不会减慢你的网站速度。',
    icon: Feather,
  },
  shareData: {
    title: '轻松共享数据',
    description: '你可以通过安全的、独一无二的生成的 URL 轻松地与他人分享你的统计数据。',
    icon: Share,
  },
  darkMode: {
    title: '深色模式',
    description: '包括黑暗模式。选择你最喜欢的主题。',
    image: '/images/preview-darkmode.png',
  },
  maximizeValue: {
    title: '最大化价值，最小化时间',
    description: `Umami 帮助你快速入职客户，减少价值时间，保护代理利润率。只需点击几下即可实现 Umami，并在单个页面中获得关键指标和见解。可共享的链接和报告节省了昂贵的配置时间，为客户留出更多时间。`,
    image: '/images/preview-website-stats.png',
  },
  focusOnResults: {
    title: '专注于结果，而不是废话',
    description: `Umami 在复杂性和简单性之间取得了恰到好处的平衡。直观的分析，易于定制的事件跟踪以及实时访客见解，帮助你清晰地传达对客户重要的内容，并且不会被过于复杂的功能集所分散注意力。`,
    image: '/images/preview-events.png',
  },
  protectClientCompliance: {
    title: '保护客户合规性',
    description: `Umami 注重隐私的模式确保你尊重客户和用户的隐私。Umami 不收集任何个人信息，不使用 Cookie，不跟踪用户在网站间的活动，并符合 GDPR 要求。`,
    icon: Lock,
  },
  openSource: {
    title: '开源',
    description: `Umami 致力于开源开发，你永远不需要担心数据所有权或供应商锁定。`,
    icon: Code,
  },
  reports: {
    title: '稳健的报告',
    description: 'Umami 内置了报告，可帮助你更深入地了解数据。',
    image: '/images/preview-reports.png',
  },
};
