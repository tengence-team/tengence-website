export interface FeatureData {
  highlight: string;
  title: string;
  description: string;
  image: string;
}

export interface AdvantageData {
  highlight: string;
  title: string;
  image?: string;
  items: { text: string }[];
}

export const featureCards: FeatureData[] = [
  {
    highlight: "一分钟",
    title: "创建应用",
    description: "从模板一键生成云搜索服务实例，免去繁琐的环境搭建与配置。",
    image: "/images/create-app.png",
  },
  {
    highlight: "一小时",
    title: "接入数据",
    description: "支持多源数据同步，可视化配置，无需写代码。",
    image: "/images/create-dataset.png",
  },
  {
    highlight: "一天",
    title: "接入产品",
    description: "通过快速集成搜索能力，当天即可在业务系统中上线试用。",
    image: "/images/use-component.png",
  },
  {
    highlight: "一周",
    title: "评估效果",
    description: "提供搜索质量分析仪表盘与A/B测试工具，一周内完成效果验证与调优。",
    image: "/images/evaluation-effect.png",
  },
];

export const advantageCards: AdvantageData[] = [
  {
    highlight: "「快」",
    title: "唯快不破",
    items: [
      { text: "0代码低门槛，1天极速上线" },
      { text: "弹性扩缩容，峰值流量平稳承接" },
      { text: "灰度发布验证，业务优化无扰动" },
    ],
  },
  {
    highlight: "「准」",
    title: "精准提效",
    image: "/images/efficiency-improvement.png",
    items: [
      { text: "行业专属模型，冷启效果起点高" },
      { text: "洞察用户行为，千人千面精准触达" },
      { text: "零代码智能调优，及时适配业务变化" },
    ],
  },
  {
    highlight: "「稳」",
    title: "安心运营",
    image: "/images/stability.png",
    items: [
      { text: "99.99% 高可用，业务全天候稳定在线" },
      { text: "弹性扩缩容，峰值流量平稳承接" },
      { text: "灰度发布验证，业务优化无扰动" },
    ],
  },
  {
    highlight: "「省」",
    title: "降本增效",
    items: [
      { text: "0 成本入门，成熟方案开箱即用" },
      { text: "按需付费免运维，全链路降本增效" },
      { text: "多模式灵活合作，适配企业不同发展阶段" },
    ],
  },
];
