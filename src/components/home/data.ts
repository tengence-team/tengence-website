import { type StaticImageData } from "next/image";
import createAppImg from "@/assets/images/create-app.png";
import createDatasetImg from "@/assets/images/create-dataset.png";
import useComponentImg from "@/assets/images/use-component.png";
import evaluationEffectImg from "@/assets/images/evaluation-effect.png";
import bookIcon from "@/assets/icons/book.svg";
import fileSearchIcon from "@/assets/icons/file-search.svg";
import shieldTickIcon from "@/assets/icons/shield-tick.svg";
import umbrellaIcon from "@/assets/icons/umbrella.svg";
import efficiencyImg from "@/assets/images/efficiency-improvement.png";
import stabilityImg from "@/assets/images/stability.png";

export interface FeatureData {
  highlight: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface AdvantageData {
  highlight: string;
  title: string;
  image?: StaticImageData;
  items: { text: string }[];
}

export interface TrialStepData {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string[];
}

export const featureCards: FeatureData[] = [
  {
    highlight: "一分钟",
    title: "创建应用",
    description: "从模板一键创建应用，免去繁琐的环境搭建与配置。",
    image: createAppImg,
  },
  {
    highlight: "一小时",
    title: "接入数据",
    description: "支持多种数据源接入，可视化配置，无需写代码。",
    image: createDatasetImg,
  },
  {
    highlight: "一天",
    title: "接入产品",
    description: "快速集成产品能力，当天即可在业务系统上线试用。",
    image: useComponentImg,
  },
  {
    highlight: "一周",
    title: "评估效果",
    description: "提供详尽报表和 A/B 测试工具，一周内评估业务效果。",
    image: evaluationEffectImg,
  },
];

export const trialSteps: TrialStepData[] = [
  {
    id: "entry",
    icon: bookIcon,
    title: "零门槛入门",
    description: ["0 成本免费开通", "0 风险极速验证"],
  },
  {
    id: "diagnosis",
    icon: fileSearchIcon,
    title: "定制化诊断",
    description: ["全维度业务诊断", "一对一专家把脉"],
  },
  {
    id: "verification",
    icon: shieldTickIcon,
    title: "全场景验证",
    description: ["全场景 POC 实测", "全流程落地陪跑"],
  },
  {
    id: "escort",
    icon: umbrellaIcon,
    title: "全周期护航",
    description: ["全链路数据闭环", "全周期持续增长"],
  },
];

export const advantageCards: AdvantageData[] = [
  {
    highlight: "「快」",
    title: "唯快不破",
    items: [
      { text: "0 代码低门槛，1 天极速上线" },
      { text: "弹性扩缩容，峰值流量平稳承接" },
      { text: "灰度发布验证，业务优化无扰动" },
    ],
  },
  {
    highlight: "「准」",
    title: "精准提效",
    image: efficiencyImg,
    items: [
      { text: "行业专属模型，冷启效果起点高" },
      { text: "洞察用户行为，千人千面精准触达" },
      { text: "零代码智能调优，及时适配业务变化" },
    ],
  },
  {
    highlight: "「稳」",
    title: "安心运营",
    image: stabilityImg,
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
