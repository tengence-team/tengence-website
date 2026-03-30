import type { TableProps } from "antd";
import { ColumnType } from "antd/es/table";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import type { DataType, AdvantageCard, FeatureCategory } from "./types";
import { CheckCell } from "./components/CheckCell";
import { comparisonData } from "./comparison-data";

export const sourceHanSerif = localFont({
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

export const advantageCards: AdvantageCard[] = [
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

export const featureCategoryTitles: Record<string, string> = {
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

export const data = comparisonData;

export const featureCategories: FeatureCategory[] = Array.from(
  new Set(data.filter((d) => d.categoryId).map((d) => d.categoryId as string))
).map((id) => ({
  id,
  title: featureCategoryTitles[id] || id,
}));

export const createBooleanColumn = (
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

export const createColumns = (): TableProps<DataType>["columns"] => [
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
    onCell: (record, index) => ({
      colSpan: record.type ? 1 : 2,
      rowSpan: record.row ?? 1,
      id:
        index &&
        record.categoryId &&
        (index === 0 || data[index - 1]?.categoryId !== record.categoryId)
          ? record.categoryId
          : undefined,
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
