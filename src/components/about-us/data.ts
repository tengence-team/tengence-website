export interface BusinessCardData {
  description: string;
  image: string;
  alt: string;
}

export interface MissionCardData {
  content: string;
  highlight: string;
}

export interface WhoWeAreCardData {
  title: string;
  description?: string;
  variant: "dark" | "light";
}

export interface ValueCardData {
  icon: string;
  content: string;
  highlight: string;
  highlightColor: string;
  alt: string;
}

export const businessCards: BusinessCardData[] = [
  {
    description:
      "聚焦流量转化、智能营销、商业分析、智能体服务四大核心方向",
    image: "/images/stars.svg",
    alt: "聚焦流量转化、智能营销、商业分析、智能体服务四大核心方向",
  },
  {
    description:
      "提供可落地、可观测、可调优的全栈智能化解决方案",
    image: "/images/lightbulb.svg",
    alt: "提供可落地、可观测、可调优的全栈智能化解决方案",
  },
  {
    description:
      "以低门槛极速接入能力，实现业务快速上线、价值快速验证",
    image: "/images/dataflow.svg",
    alt: "以低门槛极速接入能力，实现业务快速上线、价值快速验证",
  },
  {
    description:
      "以行业级成熟算法与深度数据洞察，精准提效、驱动业务增长",
    image: "/images/eye.svg",
    alt: "以行业级成熟算法与深度数据洞察，精准提效、驱动业务增长",
  },
];

export const missionCards: MissionCardData[] = [
  {
    content: "我们坚持做难而正确的事情，让AI普惠社会",
    highlight: "AI",
  },
  {
    content: "我们坚持用AI提升社会生产力，坚信AI必将造福人类",
    highlight: "造福人类",
  },
  {
    content: "我们将AI业务化，持续推动各行各业的业务AI化",
    highlight: "AI业务化",
  },
  {
    content: "我们为创造价值而生，以推动社会进步为己任",
    highlight: "创造价值",
  },
];

export const whoWeAreCards: WhoWeAreCardData[] = [
  {
    title: "我们是一群极客， 以创新突破为乐，以固步自封为耻",
    variant: "dark",
  },
  {
    title: "我们深耕多年",
    description: "勇于打破常规，难题使我们兴奋",
    variant: "light",
  },
  {
    title: "我们心怀使命感",
    description: "简单相信，傻傻坚持",
    variant: "light",
  },
];

export const valueCards: ValueCardData[] = [
  {
    icon: "/images/check-heart.svg",
    content: "我们敬畏用户的信任，全力以赴交付价值",
    highlight: "敬畏用户的信任",
    highlightColor: "#DD2590",
    alt: "我们敬畏用户的信任，全力以赴交付价值",
  },
  {
    icon: "/images/award.svg",
    content: "我们拥抱变化，在试错中成长",
    highlight: "试错中成长",
    highlightColor: "#DD2590",
    alt: "我们拥抱变化，在试错中成长",
  },
  {
    icon: "/images/face-smile.svg",
    content: "我们以实干为荣，以空谈为耻",
    highlight: "实干为荣",
    highlightColor: "#7839EE",
    alt: "我们以实干为荣，以空谈为耻",
  },
  {
    icon: "/images/beaker.svg",
    content: "我们把产品当成艺术品来雕琢",
    highlight: "当成艺术品",
    highlightColor: "#E62E05",
    alt: "我们把产品当成艺术品来雕琢",
  },
];
