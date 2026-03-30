"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

import { Table } from "antd";
import type { TableProps } from "antd";
import { ColumnType } from "antd/es/table";

const sourceHanSerif = localFont({
  src: [
    {
      path: "../../fonts/SourceHanSerifCN-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-han-serif",
  display: "swap",
  preload: true,
});

// 勾选标记单元格组件
function CheckCell({ checked }: { checked: boolean | undefined }) {
  if (checked) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-primary w-5 h-5 rounded-sm overflow-hidden flex items-center justify-center">
          <Image
            src="/icons/check.svg"
            height={16}
            width={16}
            alt="check-icon"
          />
        </div>
      </div>
    );
  }
  return <div className="text-[#B5B5CD] text-base text-center">/</div>;
}

const advantageCards = [
  {
    title: "开箱即用",
    items: [
      "零代码，将预置组件集成到您的页面中",
      "免埋点，自动行为数据采集",
      "免运维，自动扩缩容",
    ],
  },
  {
    title: "超高性能",
    items: ["亿级日PV的超高流量挑战", "P95响应时间80ms", "全链路实时数据更新"],
  },
  {
    title: "白盒化调优",
    items: ["端到端可视化配置", "专家级深度参数调优", "实时在线调试日志"],
  },
  {
    title: "深度算法能力",
    items: [
      "内置多种意图识别能力",
      "行业算法调优最佳实践",
      "深度模型AutoML，自动寻找最优解",
    ],
  },
  {
    title: "全方位报表面板",
    items: ["核心指标实时更新", "全面监控，自动告警", "自动慢查询分析"],
  },
  {
    title: "充分可运营",
    items: [
      "业务想法快速付诸实现",
      "全链路ABTest能力",
      "充分的业务运营干预能力",
    ],
  },
];

interface DataType {
  key: string;
  title: string;
  type?: string;
  tengence?: boolean;
  algolia?: boolean;
  ali?: boolean;
  unbxd?: boolean;
  aws?: boolean;
  elastic?: boolean;
  row?: number;
  categoryId?: string;
  isFirstOfCategory?: boolean;
}

// 功能分类标题映射
const featureCategoryTitles: Record<string, string> = {
  standardPageComp: "标准页面组件",
  searchGuidance: "搜索引导",
  intent: "意图识别",
  recall: "召回",
  sort: "排序",
  intervention: "运营干预",
  dataCollect: "数据采集",
  reportForms: "报表",
  server: "服务",
};

// 创建布尔值列的通用配置
const createBooleanColumn = (
  title: string,
  dataIndex: keyof DataType
): ColumnType<DataType> => ({
  title,
  dataIndex,
  onHeaderCell: () => ({
    className: cn(
      "!text-[#31373D] !text-[20px] font-semibold !text-center",
      sourceHanSerif.className
    ),
  }),
  render: (_: DataType, record: DataType) => (
    <CheckCell checked={!!record[dataIndex]} />
  ),
});

const columns: TableProps<DataType>["columns"] = [
  {
    title: "功能",
    dataIndex: "title",
    colSpan: 2,
    onHeaderCell: () => ({
      className: cn(
        "!text-[#9CA4B1] !text-[20px] font-semibold text-center",
        sourceHanSerif.className
      ),
    }),
    className: "!bg-[#F9FAFB]",
    onCell: (record) => ({
      colSpan: record.type ? 1 : 2,
      rowSpan: record.row ?? 1,
      id: record.isFirstOfCategory ? record.categoryId : undefined,
    }),
  },
  {
    title: "",
    colSpan: 0,
    dataIndex: "type",
    className: "!bg-[#F9FAFB]",
    onCell: (record) => ({
      colSpan: record.type ? 1 : 0,
      rowSpan: 1,
    }),
  },
  createBooleanColumn("通智搜索", "tengence"),
  createBooleanColumn("Algol*a", "algolia"),
  createBooleanColumn("阿*云", "ali"),
  createBooleanColumn("Unb*d", "unbxd"),
  createBooleanColumn("Op*nSearch", "aws"),
  createBooleanColumn("Elast*c Search", "elastic"),
];

const data: DataType[] = [
  {
    key: "1",
    title: "引导页面组件",
    tengence: true,
    algolia: true,
    row: 1,
    categoryId: "standardPageComp",
    isFirstOfCategory: true,
  },
  {
    key: "2",
    title: "结果页面组件",
    tengence: true,
    algolia: true,
    row: 1,
    categoryId: "standardPageComp",
    isFirstOfCategory: false,
  },
  {
    key: "3",
    title: "行为数据",
    type: "自助采集",
    tengence: true,
    algolia: true,
    ali: true,
    row: 2,
    categoryId: "standardPageComp",
    isFirstOfCategory: true,
  },
  {
    key: "4",
    title: "行为数据",
    type: "自助采集",
    tengence: true,
    algolia: true,
    row: 0,
    categoryId: "standardPageComp",
    isFirstOfCategory: false,
  },
  {
    key: "5",
    title: "效果预览",
    tengence: true,
    algolia: true,
    unbxd: true,
    row: 1,
    categoryId: "standardPageComp",
    isFirstOfCategory: true,
  },
  {
    key: "6",
    title: "下拉提示",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "searchGuidance",
    isFirstOfCategory: true,
  },
  {
    key: "7",
    title: "下拉提示",
    type: "自助训练模型",
    tengence: true,
    algolia: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "8",
    title: "下拉提示",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "9",
    title: "热词",
    type: "内置模型",
    tengence: true,
    ali: true,
    row: 3,
    categoryId: "searchGuidance",
    isFirstOfCategory: true,
  },
  {
    key: "10",
    title: "热词",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "11",
    title: "热词",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "12",
    title: "底纹词",
    type: "内置模型",
    tengence: true,
    ali: true,
    row: 3,
    categoryId: "searchGuidance",
    isFirstOfCategory: true,
  },
  {
    key: "13",
    title: "底纹词",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "14",
    title: "底纹词",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "15",
    title: "历史词",
    type: "标准实现",
    tengence: true,
    row: 1,
    categoryId: "searchGuidance",
    isFirstOfCategory: true,
  },
  {
    key: "16",
    title: "相关搜索",
    type: "内置模型",
    tengence: true,
    row: 3,
    categoryId: "searchGuidance",
    isFirstOfCategory: true,
  },
  {
    key: "17",
    title: "相关搜索",
    type: "自助训练模型",
    ali: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "18",
    title: "相关搜索",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "searchGuidance",
    isFirstOfCategory: false,
  },
  {
    key: "19",
    title: "标准化",
    type: "标准实现",
    tengence: true,
    algolia: true,
    ali: true,
    row: 1,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "20",
    title: "分词",
    type: "内置模型",
    tengence: true,
    ali: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "21",
    title: "分词",
    type: "自助训练模型",
    ali: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "22",
    title: "分词",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "23",
    title: "停用词",
    type: "标准实现",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 1,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "24",
    title: "纠错",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "25",
    title: "纠错",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "26",
    title: "纠错",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "27",
    title: "同义词",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "28",
    title: "同义词",
    type: "自助训练模型",
    tengence: true,
    algolia: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "29",
    title: "同义词",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "30",
    title: "命名实体识别",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "31",
    title: "命名实体识别",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "32",
    title: "命名实体识别",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "33",
    title: "类目预测",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "34",
    title: "类目预测",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "35",
    title: "类目预测",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "36",
    title: "词权重",
    type: "内置模型",
    tengence: true,
    ali: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "37",
    title: "词权重",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "38",
    title: "词权重",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "39",
    title: "紧密度",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    row: 3,
    categoryId: "intent",
    isFirstOfCategory: true,
  },
  {
    key: "40",
    title: "紧密度",
    type: "自助训练模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "41",
    title: "紧密度",
    type: "定制模型",
    tengence: true,
    row: 0,
    categoryId: "intent",
    isFirstOfCategory: false,
  },
  {
    key: "42",
    title: "倒排召回",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    aws: true,
    elastic: true,
    row: 1,
    categoryId: "recall",
    isFirstOfCategory: true,
  },
  {
    key: "43",
    title: "多路召回",
    tengence: true,
    ali: true,
    row: 1,
    categoryId: "recall",
    isFirstOfCategory: false,
  },
  {
    key: "44",
    title: "AI语义召回",
    tengence: true,
    ali: true,
    aws: true,
    elastic: true,
    row: 1,
    categoryId: "recall",
    isFirstOfCategory: false,
  },
  {
    key: "45",
    title: "粗排公式",
    tengence: true,
    ali: true,
    aws: true,
    elastic: true,
    row: 1,
    categoryId: "sort",
    isFirstOfCategory: true,
  },
  {
    key: "46",
    title: "粗排模型",
    type: "内置模型",
    tengence: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "47",
    title: "粗排模型",
    type: "自助训练模型",
    tengence: true,
    ali: true,
    row: 0,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "48",
    title: "粗排模型",
    type: "AI精排模型",
    tengence: true,
    row: 0,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "49",
    title: "精排公式",
    tengence: true,
    ali: true,
    aws: true,
    elastic: true,
    row: 1,
    categoryId: "sort",
    isFirstOfCategory: true,
  },
  {
    key: "50",
    title: "精排模型",
    type: "内置模型",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 3,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "51",
    title: "精排模型",
    type: "自助训练模型",
    tengence: true,
    algolia: true,
    ali: true,
    row: 0,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "52",
    title: "精排模型",
    type: "AI精排模型",
    tengence: true,
    row: 0,
    categoryId: "sort",
    isFirstOfCategory: false,
  },
  {
    key: "53",
    title: "固定位置",
    tengence: true,
    algolia: true,
    unbxd: true,
    row: 1,
    categoryId: "intervention",
    isFirstOfCategory: true,
  },
  {
    key: "54",
    title: "屏蔽",
    tengence: true,
    algolia: true,
    row: 1,
    categoryId: "intervention",
    isFirstOfCategory: false,
  },
  {
    key: "55",
    title: "搜索直达",
    tengence: true,
    algolia: true,
    unbxd: true,
    row: 1,
    categoryId: "intervention",
    isFirstOfCategory: false,
  },
  {
    key: "56",
    title: "结果打散",
    tengence: true,
    algolia: true,
    row: 1,
    categoryId: "intervention",
    isFirstOfCategory: false,
  },
  {
    key: "57",
    title: "排序加权",
    tengence: true,
    algolia: true,
    row: 1,
    categoryId: "intervention",
    isFirstOfCategory: false,
  },
  {
    key: "58",
    title: "埋点上报",
    tengence: true,
    algolia: true,
    ali: true,
    row: 1,
    categoryId: "dataCollect",
    isFirstOfCategory: true,
  },
  {
    key: "59",
    title: "实时埋点",
    tengence: true,
    row: 1,
    categoryId: "dataCollect",
    isFirstOfCategory: false,
  },
  {
    key: "60",
    title: "标准报表",
    tengence: true,
    algolia: true,
    ali: true,
    unbxd: true,
    row: 1,
    categoryId: "reportForms",
    isFirstOfCategory: true,
  },
  {
    key: "61",
    title: "无少结果列表",
    tengence: true,
    algolia: true,
    unbxd: true,
    row: 1,
    categoryId: "reportForms",
    isFirstOfCategory: false,
  },
  {
    key: "62",
    title: "慢查询列表",
    tengence: true,
    ali: true,
    aws: true,
    elastic: true,
    row: 1,
    categoryId: "reportForms",
    isFirstOfCategory: false,
  },
  {
    key: "63",
    title: "引导成交报表",
    tengence: true,
    row: 1,
    categoryId: "reportForms",
    isFirstOfCategory: false,
  },
  {
    key: "64",
    title: "AB测试报表",
    tengence: true,
    algolia: true,
    unbxd: true,
    row: 1,
    categoryId: "reportForms",
    isFirstOfCategory: false,
  },
  {
    key: "65",
    title: "自助服务",
    type: "自助调试",
    tengence: true,
    algolia: true,
    ali: true,
    aws: true,
    row: 3,
    categoryId: "server",
    isFirstOfCategory: true,
  },
  {
    key: "66",
    title: "自助服务",
    type: "诊断报告",
    tengence: true,
    row: 0,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "67",
    title: "自助服务",
    type: "智能客服",
    tengence: true,
    ali: true,
    aws: true,
    row: 0,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "68",
    title: "专家服务",
    type: "问题诊断",
    tengence: true,
    ali: true,
    aws: true,
    row: 3,
    categoryId: "server",
    isFirstOfCategory: true,
  },
  {
    key: "69",
    title: "专家服务",
    type: "效果调优",
    tengence: true,
    ali: true,
    aws: true,
    row: 0,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "70",
    title: "专家服务",
    type: "性能调优",
    tengence: true,
    ali: true,
    aws: true,
    row: 0,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "71",
    title: "专属服务",
    type: "专属客户经理",
    tengence: true,
    ali: true,
    aws: true,
    row: 2,
    categoryId: "server",
    isFirstOfCategory: true,
  },
  {
    key: "72",
    title: "专属服务",
    type: "专属服务群",
    tengence: true,
    ali: true,
    row: 0,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "73",
    title: "定制开发",
    tengence: true,
    elastic: true,
    row: 1,
    categoryId: "server",
    isFirstOfCategory: true,
  },
  {
    key: "74",
    title: "私有化部署",
    tengence: true,
    elastic: true,
    row: 1,
    categoryId: "server",
    isFirstOfCategory: false,
  },
  {
    key: "75",
    title: "项目制合作",
    tengence: true,
    row: 1,
    categoryId: "server",
    isFirstOfCategory: false,
  },
];

// 修正每个分类的第一行标记
const seenCategories = new Set<string>();
data.forEach((item) => {
  if (item.categoryId) {
    if (!seenCategories.has(item.categoryId)) {
      item.isFirstOfCategory = true;
      seenCategories.add(item.categoryId);
    } else {
      item.isFirstOfCategory = false;
    }
  }
});

// 从 data 中动态生成功能分类导航
const featureCategories = Array.from(
  new Set(data.filter((d) => d.categoryId).map((d) => d.categoryId as string))
).map((id) => ({
  id,
  title: featureCategoryTitles[id] || id,
}));

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

  // 点击导航项跳转到对应位置
  const scrollToCategory = useCallback((categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      isScrollingProgrammatically.current = true;
      const tableContainer = tableRef.current;
      if (tableContainer) {
        const tableTop =
          tableContainer.getBoundingClientRect().top + window.scrollY;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const offset = elementTop - tableTop + tableContainer.offsetTop - 120;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      setActiveCategory(categoryId);
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 500);
    }
  }, []);

  // 监听滚动，更新当前激活的导航项
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const scrollPosition = window.scrollY + 150;

      // 找到当前滚动位置对应的分类
      let currentCategory: string | null = null;
      for (const category of featureCategories) {
        const element = document.getElementById(category.id);
        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            currentCategory = category.id;
          }
        }
      }

      setActiveCategory((prev) =>
        currentCategory && currentCategory !== prev ? currentCategory : prev
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-30">
      <section className="max-w-360 mx-auto flex items-center justify-between gap-22.5 px-40 pb-22.5">
        <div>
          <Image
            src="/images/tengence-search-title.png"
            alt="通智搜索"
            width={236}
            height={31}
          />
          <h1
            className={cn(
              "text-[60px] font-semibold pt-1 text-black",
              sourceHanSerif.className
            )}
          >
            通智搜索
          </h1>

          <p className="text-[#373850] text-base pt-9">
            通智搜索，是 AI
            时代专为企业业务增长而打造的新一代智能搜索产品。我们依托多年沉淀的行业数据基座，使用前沿大模型技术与深度学习技术，结合反复打磨的行业最佳实践，深度洞察用户行为偏好，实现精准内容与目标用户的智能匹配，做到真正的千人千面个性化触达。
          </p>
          <p className="text-[#373850] text-base pt-9">
            我们致力于打造使用门槛低、性能强劲、搜索效果精准可控、超高性价比的智能搜索产品，配套全维度可视化数据报表、灵活丰富的运营干预能力，同时提供专属专家调优服务与产品深度定制化服务，让智能搜索真正成为
            AI 时代企业提升流量转化、驱动业务持续增长的核心利器。
          </p>
        </div>
        <Image src="/images/search.png" alt="搜索" width={384} height={413} />
      </section>

      <section className="max-w-360 mx-auto p-10">
        <p
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          产品优势
        </p>

        <div className="grid grid-cols-3 gap-3 mt-9">
          {advantageCards.map((card) => (
            <div
              key={card.title}
              className="shadow-card-border bg-white rounded-[20px] py-7.5 px-10"
            >
              <h2
                className={cn(
                  "text-[24px] font-semibold",
                  sourceHanSerif.className
                )}
              >
                {card.title}
              </h2>
              {card.items.map((item) => (
                <div key={item} className="flex items-center mt-1 first:mt-3">
                  <Image
                    src="/icons/check-circle-success.svg"
                    alt="check"
                    width={18}
                    height={18}
                  />
                  <p className="text-[#555E67] text-base ml-2">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-360 mx-auto p-10">
        <p
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          产品功能对比
        </p>
        <div className="flex gap-6 mt-6">
          {/* 侧边导航 */}
          <div className="w-40 shrink-0">
            <div className="sticky top-18">
              <nav className="flex flex-col">
                {featureCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={cn(
                      "w-full text-left text-base px-5 py-3 cursor-pointer font-semibold",
                      activeCategory === category.id
                        ? "text-primary bg-[#EBEFFF] rounded-xl"
                        : "text-[#5E5F83]",
                      sourceHanSerif.className
                    )}
                  >
                    {category.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 表格区域 */}
          <div ref={tableRef} className="flex-1">
            <Table<DataType>
              columns={columns}
              dataSource={data}
              pagination={false}
              className="shadow-card-border rounded-[20px] overflow-hidden"
              onRow={(record, index) => ({
                className: cn(
                  "text-center text-base text-[#31373D]",
                  sourceHanSerif.className,
                  index !== 0 &&
                    record.isFirstOfCategory &&
                    "[&>td]:border-t-[1.5px] [&>td]:border-t-[#C0C8D5]"
                ),
              })}
              bordered
            />
          </div>
        </div>
      </section>
    </div>
  );
}
