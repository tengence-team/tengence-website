"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import {
  ProductIntro,
  AdvantageSection,
  CategoryNav,
  ComparisonTable,
} from "./components";
import { featureCategories, sourceHanSerif } from "./constants";
import { cn } from "@/lib/utils";
import { SuccessCases } from "./components/SuccessCases";
import Image from "next/image";
import Link from "next/link";

const versionList = [
  {
    id: "SEARCH_FREE",
    title: "免费版",
    monthFree: "¥ 0",
    yearFree: "¥ 0",
    desc: "零成本入门，适合个人开发者、产品试用和网店等标准搜索场景",
    searchVolume:
      "月调用量配额：<span style='color:#242430'> 10万 次免费</span>，达额即止",
    dataVolume:
      "存储配额：<span style='color:#242430'> 1GB 免费</span>，达额即止",
    qps: "并发限制(QPS)：<span style='color:#242430'> 10 </span>",
    advantage: [
      "零成本入门：免费获得智能化效果",
      "零代码接入：简单配置，快速集成",
      "全功能搜索：标准化搜索功能，满足常规业务场景需求",
      "内置行业级算法：针对电商和内容行业的行业级数据积累和算法优化",
    ],
    example: [
      {
        title: "某个人博客网站",
        desc: "文章数量 <span style='font-weight: bold;'>343+</span> 篇，博客日PV在 <span style='font-weight: bold;'>3000</span> 左右，日搜索次数不足 <span style='font-weight: bold;'>1000</span>，使用通智搜索基础版的内容行业方案，免费获得智能搜索能力",
        fee: "免费",
        specs: ["3万 请求/月", "343 条记录"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["3万 请求/月", "343 条记录"],
            fee: "免费(被限流)",
          },
          {
            title: "阿*云",
            specs: ["存储：1GB", "计算：200LCU"],
            fee: "约 ¥555 / 月",
          },
          {
            title: "Op*nSearch",
            specs: ["t2.medium.search", "vCPU：2", "内存：4G"],
            fee: "约 $53 / 月",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
      {
        title: "某知名C2C电商平台的个人店铺",
        desc: "上架商品数量 <span style='font-weight: bold;'>459</span> 件，店铺做了一定推广，日PV在 <span style='font-weight: bold;'>6000</span>  左右，日搜索次数不足 <span style='font-weight: bold;'>2000</span> ，使用通智搜索基础版的电商行业方案，免费获得智能搜索的高效流量转化能力",
        fee: "免费",
        specs: ["6万 请求/月", "459 条记录"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["6万 请求/月", "459 条记录"],
            fee: "免费(被限流)",
          },
          {
            title: "阿*云",
            specs: ["存储：4GB", "计算：200LCU"],
            fee: "约 ¥713 / 月",
          },
          {
            title: "Op*nSearch",
            specs: ["m7i.large.search", "vCPU：2", "内存：8G"],
            fee: "约 $116 / 月",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
    ],
  },
  {
    id: "SEARCH_BASIC",
    title: "基础版",
    monthFree: "¥ 199",
    monthSourceFree: "¥ 798",
    monthDiscount: "2.5折",
    yearFree: "¥ 1,999",
    yearSourceFree: "¥ 7,998",
    yearDiscount: "2.5 折",
    desc: "成本友好，功能全面，满足初创团队和成长型业务的弹性需求",
    searchVolume:
      "月调用量配额：<span style='color:#242430'>30万 次免费</span>，超出 2.0元 / 千次",
    dataVolume:
      "存储配额：<span style='color:#242430'>3GB 免费</span>，超出 1.0元 / GB",
    qps: "并发限制(QPS)：<span style='color:#242430'>20</span>",
    advantage: [
      "按量付费：成本友好，按需使用",
      "业务定制化：使用标准化API，自定义产品形态",
      "运营干预：根据业务需要动态干预搜索结果",
      "基础数据报表：流量转化心中有数，业务效果看得见",
    ],
    example: [
      {
        title: "Shopify 平台某婚纱店铺",
        desc: "上架商品数量 <span style='font-weight: bold;'>336</span> 款，在特定地区投入资源做推广引流，高峰期日UV在 <span style='font-weight: bold;'>10万+</span>，日搜索次数 <span style='font-weight: bold;'>5万+</span>，使用通智搜索专业版的电商行业方案，对于季节性流量波动，按量付费在成本上较为友好，并且具备自动化采集行为数据进行算法自动迭代优化的能力，无需额外投入资源进行针对性的优化",
        fee: "约 ¥2700 / 月",
        specs: ["150万 请求 / 月", "336 条记录"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["150万 请求/月", "336 条记录"],
            fee: "约 $745 / 月",
          },
          {
            title: "阿*云",
            specs: ["存储：10GB", "计算：1000LCU"],
            fee: "约 ¥8812 / 月",
          },
          {
            title: "Op*nSearch",
            specs: ["m7g.4xlarge.search", "vCPU：16", "内存：64G"],
            fee: "约 $780 / 月",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "约 $800 / 月",
          },
        ],
      },
      {
        title: "某跨境无人机商家",
        desc: "采用开源方案自建独立站，上架商品数量 <span style='font-weight: bold;'>500款</span> 左右，长期坚持投入SEO，高峰期日PV在 <span style='font-weight: bold;'>15万+</span>，日搜索次数 <span style='font-weight: bold;'>3万+</span>，搜索效果存在较多badcase，自家人员无力做搜索优化，但具备一定技术能力，使用通智搜索专业版的电商行业方案，对意图识别能力做了大量定制化配置，仔细调优了精排逻辑，安排业务做了相关性评测，取得了各方都较为满意的效果",
        fee: "约 ¥1500 / 月",
        specs: ["90万 请求/月", "500 条记录"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["90万 请求/月", "500 条记录"],
            fee: "约 $445 / 月",
          },
          {
            title: "阿*云",
            specs: ["存储：10GB", "计算：1000LCU"],
            fee: "约 ¥8812 / 月",
          },
          {
            title: "Op*nSearch",
            specs: ["m7g.2xlarge.search", "vCPU：8", "内存：32G"],
            fee: "约 $390 / 月",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "约 $600 / 月",
          },
        ],
      },
    ],
  },
  {
    id: "SEARCH_PRO",
    title: "专业版",
    monthFree: "¥ 499",
    monthSourceFree: "¥ 998",
    monthDiscount: "5折",
    yearFree: "¥ 4,999",
    yearSourceFree: "¥ 9,998",
    yearDiscount: "5折",
    desc: "让算法理解业务，适合业务稳定，体量大，对流量转化效率有较高诉求的成熟业务",
    searchVolume:
      "月调用量配额：<span style='color:#242430'>50万 次免费</span>，超出 1.5元 / 千次",
    dataVolume:
      "存储配额：<span style='color:#242430'>5GB 免费</span>，超出 0.8元 / GB",
    qps: "并发限制(QPS)：<span style='color:#242430'>50</span>",
    advantage: [
      "全链路数据闭环：自动化采集行为数据，形成优化和反馈的数据闭环",
      "完整报表功能：多维度数据分析与展示，业务表现一览无遗",
      "自动算法优化：自动使用行为数据迭代训练，优化算法效果",
      "专属算法模型：使用业务数据训练专属算法模型",
    ],
    example: [
      {
        title: "某企业内部知识平台",
        desc: "<span style='font-weight: bold;'>10+</span> 个业务线的各类业务文档，积累 <span style='font-weight: bold;'>10年</span> 以上，数据量 <span style='font-weight: bold;'>800万+</span>，包含大量业务术语，需要解决内部员工快速查找，精准获取知识的问题，通过使用通智搜索企业版，针对不同业务场景建立对应搜索应用，进行针对性的意图识别优化和业务干预，取得了较满意的效果",
        fee: "-",
        specs: ["-"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "阿*云",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Op*nSearch",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
      {
        title: "某知名知识社区平台",
        desc: "存在博客文章、论坛帖子、问答记录等多种内容，数据量 <span style='font-weight: bold;'>4000万+</span>，日PV在 <span style='font-weight: bold;'>800万+</span>，包含大量专业术语，需要解决多种内容融合搜索的问题，并且在合适的时候引入广告内容，提高整体的点击率，通过使用通智搜索企业版，借助搜索报表和AB测试报表分析优化点，对意图识别、排序和运营干预做了深入调优，取得了较满意的效果",
        fee: "-",
        specs: ["-"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "阿*云",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Op*nSearch",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
    ],
  },
  {
    id: "SEARCH_ENT",
    title: "企业版",
    monthFree: "¥ 999",
    monthSourceFree: "¥ 1,998",
    monthDiscount: "5折",
    yearFree: "¥ 9,999",
    yearSourceFree: "¥ 19,998",
    yearDiscount: "5折",
    desc: "面向复杂业务场景，深度整合多方数据，适合多业务线、多搜索场景的大型企业或集团公司",
    searchVolume:
      "月调用量配额：<span style='color:#242430'>100万 次免费</span>，超出 1.0元 / 千次",
    dataVolume:
      "存储配额：<span style='color:#242430'>10GB 免费</span>，超出 0.5元 / GB",
    qps: "并发限制(QPS)：<span style='color:#242430'>100</span>",
    advantage: [
      "全功能算法能力：开放所有算法能力，全面智能化效果",
      "精细化算法调参：融入业务数据，自助式调参，让搜索深入业务场景",
      "千人千面：理解用户点击序列，根据用户偏好做个性化分发",
      "企业级服务：问题诊断、效果调优、性能调优，提供深度优化意见",
    ],
    example: [
      {
        title: "某跨境电商企业",
        desc: "自建独立站平台，在 <span style='font-weight: bold;'>10+</span> 个国家开展业务，同时运营 <span style='font-weight: bold;'>10+</span> 个网站，商品数量 <span style='font-weight: bold;'>10万+</span>，日PV在 百万级，年营业额在 <span style='font-weight: bold;'>十亿级</span>，投入较大资源进行推广引流，迫切需要提高流量转化效率，通过与通智搜索合作进行定制化优化，建立 <span style='font-weight: bold;'>10+</span> 个网站对应的搜索实例，针对不同语言和不同地区的行为特点，结合业务做了深度的算法优化，取得了较好的ROI成果",
        fee: "-",
        specs: ["-"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "阿*云",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Op*nSearch",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
      {
        title: "某知名电商平台的信息流种草社区",
        desc: "在东南亚 <span style='font-weight: bold;'>6</span> 个国家开展业务，投入大量资源扶植本地KOL和KOC，与本地MCN合作生产优质内容，其中的短视频、图文等内容数据量在 <span style='font-weight: bold;'>2亿</span> 左右，日搜索次数 <span style='font-weight: bold;'>8000万</span> 左右，迫切需要提高这些种草内容的成交转化率，通过与通智搜索的合作，建立 <span style='font-weight: bold;'>10+</span> 个搜索实例，针对多模态的内容特点，不同国家和不同文化的用户行为特点，进行深入定制优化，取得了不错的流量转化成果",
        fee: "-",
        specs: ["-"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "阿*云",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Op*nSearch",
            specs: ["-"],
            fee: "-",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "-",
          },
        ],
      },
    ],
  },
  {
    id: "SEARCH_CUSTOM",
    title: "定制版",
    monthFree: "协商定价",
    yearFree: "协商定价",
    desc: "专属部署，专有资源，专项定制，适合对合规、安全、性能、效果要求较高的场景",
    advantage: [
      "专属部署：无合规和安全顾虑，支持混合云/私有云部署",
      "专有资源：独享集群，针对性做性能调优",
      "专家服务：专人投入，优化无所不用其极",
      "数据充分授权：算法优化无盲区，深度定制化",
    ],
    example: [
      {
        title: "某企业集团公司",
        desc: "<span style='font-weight: bold;'>10+</span> 条业务线，<span style='font-weight: bold;'>3</span> 个电商平台场景、近 <span style='font-weight: bold;'>10</span> 个博客/论坛/帮助文档/业务知识库等内容场景、<span style='font-weight: bold;'>9</span> 个订单/审计等大数据加速场景、<span style='font-weight: bold;'>1</span> 个企业知识社区的综合型企业搜索引擎场景，完全定制化合作，项目制落地，驻场开发，在企业多个场景的效率提升和业务转化都取得了较好的效果",
        fee: "洽谈",
        specs: ["-"],
        colleagues: [
          {
            title: "Algol*a",
            specs: ["-"],
            fee: "不支持",
          },
          {
            title: "阿*云",
            specs: ["-"],
            fee: "不支持",
          },
          {
            title: "Op*nSearch",
            specs: ["-"],
            fee: "不支持",
          },
          {
            title: "Unb*d",
            specs: ["-"],
            fee: "不支持",
          },
        ],
      },
    ],
  },
];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

  const [versionId, setVersionId] = useState("SEARCH_FREE");
  const [payCycle, setPayCycle] = useState("month");

  const selectedVersion = useMemo(() => {
    return versionList.find((item) => item.id === versionId)!;
  }, [versionId]);

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

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const scrollPosition = window.scrollY + 150;

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

      setActiveCategory(currentCategory || featureCategories[0]?.id || null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-30">
      <ProductIntro />
      <AdvantageSection />

      <section className="max-w-360 mx-auto p-10">
        <p
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          产品功能对比
        </p>
        <div className="flex gap-6 mt-6">
          <CategoryNav
            activeCategory={activeCategory}
            onCategoryClick={scrollToCategory}
          />
          <ComparisonTable ref={tableRef} />
        </div>
      </section>

      <SuccessCases />

      <section className="max-w-360 mx-auto p-10">
        <h2
          className={cn("text-[40px] font-semibold", sourceHanSerif.className)}
        >
          案例适配
        </h2>

        <div className="grid grid-cols-2 gap-5 mt-8">
          <div className="flex flex-col">
            <div className="flex items-center text-[#31373D] text-[16px] font-medium gap-3">
              {versionList.map((version) => (
                <button
                  key={version.id}
                  className={cn(
                    "py-4.25 px-7.25 rounded-xl cursor-pointer",
                    versionId === version.id
                      ? "bg-[#EBEFFF] text-primary"
                      : "bg-[#F3F4F8]"
                  )}
                  onClick={() => setVersionId(version.id)}
                >
                  {version.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-9 flex-1">
              <div className="shadow-card-border p-10 rounded-[20px] flex-1 h-full">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-[#31373D] text-[20px] font-medium">
                      {selectedVersion.title}
                    </p>
                    <p className="text-black text-[40px] font-semibold pt-3">
                      {payCycle === "month"
                        ? selectedVersion.monthFree
                        : selectedVersion.yearFree}
                      {payCycle === "month" ? (
                        selectedVersion.monthSourceFree ? (
                          <span className="text-[#7B7C9E] text-[24px] font-semibold line-through px-4">
                            {selectedVersion.monthSourceFree}
                          </span>
                        ) : (
                          <></>
                        )
                      ) : selectedVersion.yearSourceFree ? (
                        <span className="text-[#7B7C9E] text-[24px] font-semibold line-through px-4">
                          {selectedVersion.yearSourceFree}
                        </span>
                      ) : (
                        <></>
                      )}
                      {payCycle === "month" ? (
                        selectedVersion.monthDiscount ? (
                          <span className="text-[#FB595C] text-[14px] px-1.5 py-1 rounded-md bg-[#FFF1F1]">
                            {selectedVersion.monthDiscount}
                          </span>
                        ) : (
                          <></>
                        )
                      ) : selectedVersion.yearDiscount ? (
                        <span className="text-[#FB595C] text-[14px] px-1.5 py-1 rounded-md bg-[#FFF1F1]">
                          {selectedVersion.yearDiscount}
                        </span>
                      ) : (
                        <></>
                      )}
                    </p>
                  </div>

                  <div className="bg-[#F3F4F8] rounded-[50px] p-1 text-[16px] text-[#7B7C9E] flex items-center">
                    <button
                      className={cn(
                        "cursor-pointer rounded-[40px] py-2 px-3 ",
                        payCycle === "month" ? "bg-white text-black" : ""
                      )}
                      onClick={() => setPayCycle("month")}
                    >
                      月付
                    </button>
                    <button
                      className={cn(
                        "cursor-pointer rounded-[40px] py-2 px-3 ",
                        payCycle === "year" ? "bg-white text-black" : ""
                      )}
                      onClick={() => setPayCycle("year")}
                    >
                      年付
                    </button>
                  </div>
                </div>

                <p className="text-[#373850] text-[16px] pt-3 pb-6">
                  {selectedVersion.desc}
                </p>

                {selectedVersion.searchVolume ? (
                  <div className="flex items-center">
                    <Image
                      src="/icons/check-circle-success.svg"
                      width={18}
                      height={18}
                      alt="月调用量配额"
                    />
                    <div
                      className="pl-2 text-[#373850] text-[16px] font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: selectedVersion.searchVolume,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}

                {selectedVersion.dataVolume ? (
                  <div className="flex items-center">
                    <Image
                      src="/icons/check-circle-success.svg"
                      width={18}
                      height={18}
                      alt="存储配额"
                    />
                    <div
                      className="pl-2 text-[#373850] text-[16px] font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: selectedVersion.dataVolume,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}

                {selectedVersion.qps ? (
                  <div className="flex items-center">
                    <Image
                      src="/icons/check-circle-success.svg"
                      width={18}
                      height={18}
                      alt="并发限制(QPS)"
                    />
                    <div
                      className="pl-2 text-[#373850] text-[16px] font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: selectedVersion.qps,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}

                <Link
                  href="//console.mossego.cn/#/login"
                  className="bg-primary text-white text-[16px] text-center w-full py-2 rounded-lg mt-6 block"
                  target="_blank"
                >
                  立刻试用
                </Link>

                <div className="border-t border-solid border-[#DDE] mt-8 pt-7 text-[16px] text-[#373850]">
                  {selectedVersion.advantage.map((item) => (
                    <p
                      key={item}
                      className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#CBCBE2] before:rounded-full before:top-3.25 before:left-0 pt-1"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <Image
                src="/images/direction.svg"
                width={44}
                height={29}
                alt="案例适配"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {selectedVersion.example?.map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-[#F3F4F8] rounded-[20px] p-7.5 flex flex-col"
              >
                <p className="text-[#31373D] text-[20px] font-medium">
                  {item.title}
                </p>

                <p
                  className="text-[#555E67] text-[16px] pt-3"
                  dangerouslySetInnerHTML={{
                    __html: item.desc,
                  }}
                ></p>

                <div className="mt-5 flex flex-1 gap-2.5 max-h-45">
                  <div className="h-full flex flex-col bg-white rounded-xl px-4 py-3 w-35">
                    <p className="text-[#31373D] text-[16px] font-medium">
                      通智搜索
                    </p>

                    <div className="mt-4 mb-3 flex-1">
                      {item.specs.map((spec, index) => (
                        <p key={index} className="text-[#555E67] text-xs">
                          {spec}
                        </p>
                      ))}
                    </div>

                    <div>
                      <span className="text-primary px-1.5 py-1 bg-[#EBEFFF] rounded-sm font-medium text-[12px] leading-6 whitespace-nowrap">
                        {item.fee}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl flex overflow-x-auto">
                    {item.colleagues.map((colleague, index) => (
                      <div
                        key={index}
                        className={cn(
                          "h-full flex flex-col bg-white px-4 py-3 w-40",
                          index !== 0
                            ? "border-l border-solid border-[#F2F4F7]"
                            : ""
                        )}
                      >
                        <p className="text-[#31373D] text-[16px] font-medium">
                          {colleague.title}
                        </p>

                        <div className="mt-4 mb-3 flex-1">
                          {colleague.specs.map((spec, index) => (
                            <p key={index} className="text-[#555E67] text-xs">
                              {spec}
                            </p>
                          ))}
                        </div>

                        <div>
                          <span className="text-[#555E67] px-1.5 bg-[#F3F4F8] py-1 rounded-sm font-medium text-[12px] leading-6 whitespace-nowrap">
                            {colleague.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/square-bg.png')] bg-size-[100%] p-10 mt-10 bg-[#EBEFFF]">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2
                className={cn(
                  "text-[40px] font-semibold text-[#373850]",
                  sourceHanSerif
                )}
              >
                <span className="text-primary">预约</span>
                为您提供贴身解决方案
              </h2>
              <p
                className={cn(
                  "text-[#373850] text-[16px] font-semibold",
                  sourceHanSerif
                )}
              >
                我们的顾问将给您回电，提供业务场景解决方案，安排产品演示，做POC测试
              </p>
            </div>
            <Link
              href="/contact-us"
              className="text-[16px] text-black bg-white font-medium px-6 py-3.5 border border-solid border-[#373850] rounded-xl"
              target="_blank"
            >
              联系我们
            </Link>
          </div>

          <div className="flex flex-wrap text-white text-[14px] mt-10 gap-x-2 gap-y-3">
            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/shopping-bag.svg"
                width={14}
                height={14}
                alt="电商网站商品/订单/店铺/卖家/评论搜索"
              />
              <span className="pl-1.5">
                电商网站商品/订单/店铺/卖家/评论搜索
              </span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/globe.svg"
                width={14}
                height={14}
                alt="跨境电商多站点/多地区搜索平台"
              />
              <span className="pl-1.5">跨境电商多站点/多地区搜索平台</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/clapperboard.svg"
                width={14}
                height={14}
                alt="信息流/多媒体/短视频/图文社区搜索"
              />
              <span className="pl-1.5">信息流/多媒体/短视频/图文社区搜索</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/message-smile-square.svg"
                width={14}
                height={14}
                alt="知识社区/博客/论坛/内容搜索"
              />
              <span className="pl-1.5">知识社区/博客/论坛/内容搜索</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/building.svg"
                width={14}
                height={14}
                alt="企业多业务线搜索平台"
              />
              <span className="pl-1.5">企业多业务线搜索平台</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/search-refraction.svg"
                width={14}
                height={14}
                alt="企业知识管理平台搜索/企业内部搜索引擎"
              />
              <span className="pl-1.5">企业知识管理平台/企业内部搜索引擎</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/database.svg"
                width={14}
                height={14}
                alt="大数据查询加速/数据分析/时序数据库"
              />
              <span className="pl-1.5">大数据查询加速/数据分析/时序数据库</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/server.svg"
                width={14}
                height={14}
                alt="向量库/RAG/以图搜图/语义向量检索"
              />
              <span className="pl-1.5">向量库/RAG/以图搜图/语义向量检索</span>
            </div>

            <div className="bg-[#4C70FF] rounded-lg flex items-center px-4 py-2">
              <Image
                src="/icons/film.svg"
                width={14}
                height={14}
                alt="广告平台智能搜索"
              />
              <span className="pl-1.5">广告平台智能搜索</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
