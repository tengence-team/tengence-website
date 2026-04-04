"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

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
          <div>
            <div className="flex items-center text-[#31373D] text-[16px] font-medium gap-3">
              <button className="py-4.25 px-7.25 rounded-xl bg-[#EBEFFF] text-primary cursor-pointer">
                免费版
              </button>
              <button className="py-4.25 px-7.25 rounded-xl bg-[#F3F4F8] cursor-pointer">
                专业版
              </button>
            </div>

            <div className="flex items-center gap-5 mt-9">
              <div className="shadow-card-border p-10 rounded-[20px]">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-[#31373D] text-[20px] font-medium">
                      免费版
                    </p>
                    <p className="text-black text-[40px] font-semibold pt-3">
                      ¥0
                    </p>
                  </div>

                  <div className="bg-[#F3F4F8] rounded-[50px] p-1 text-[16px] text-[#7B7C9E] flex items-center">
                    <button className="cursor-pointer rounded-[40px] py-2 px-3 bg-white text-black">
                      月付
                    </button>
                    <button className="cursor-pointer rounded-[40px] py-2 px-3">
                      年付
                    </button>
                  </div>
                </div>

                <p className="text-[#373850] text-[16px] pt-3 pb-6">
                  零成本体验智能搜索产品，简单配置快速集成，内置行业级算法，适合个人开发者、产品试用和网店等标准搜索场景
                </p>

                <div className="flex items-center">
                  <Image
                    src="/icons/check-circle-success.svg"
                    width={18}
                    height={18}
                    alt="月调用量配额"
                  />
                  <p className="pl-2 text-[#373850] text-[16px] font-semibold">
                    月调用量配额{" "}
                    <span className="text-[#242430]">10万次免费</span>
                    ，达额即止
                  </p>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/icons/check-circle-success.svg"
                    width={18}
                    height={18}
                    alt="存储配额"
                  />
                  <p className="pl-2 text-[#373850] text-[16px] font-semibold">
                    存储配额
                    <span className="text-[#242430]">1GB免费</span>，达额即止
                  </p>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/icons/check-circle-success.svg"
                    width={18}
                    height={18}
                    alt="并发限制(QPS)"
                  />
                  <p className="pl-2 text-[#373850] text-[16px] font-semibold">
                    并发限制(QPS)
                    <span className="text-[#242430]">10</span>
                  </p>
                </div>

                <button className="bg-primary text-white text-[16px] text-center w-full py-2 rounded-lg mt-6">
                  立刻试用
                </button>

                <div className="border-t border-solid border-[#DDE] mt-8 pt-7 text-[16px] text-[#373850]">
                  <p className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#CBCBE2] before:rounded-full before:top-3.25 before:left-0 pt-1">
                    零成本入门：免费获得智能化效果
                  </p>
                  <p className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#CBCBE2] before:rounded-full before:top-3.25 before:left-0 pt-1">
                    零代码接入：简单配置，快速集成
                  </p>
                  <p className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#CBCBE2] before:rounded-full before:top-3.25 before:left-0 pt-1">
                    全功能搜索：标准化搜索功能，满足常规业务场景需求
                  </p>
                  <p className="pl-4 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#CBCBE2] before:rounded-full before:top-3.25 before:left-0 pt-1">
                    内置行业级算法：针对电商和内容行业的行业级数据积累和算法优化
                  </p>
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
            <div className="flex-1 bg-[#F3F4F8] rounded-[20px] p-7.5 flex flex-col">
              <p className="text-[#31373D] text-[20px] font-medium">
                个人博客网站
              </p>

              <p className="text-[#555E67] text-[16px] pt-3">
                文章数量343篇，博客日PV在3000左右，日搜索次数不足1000，使用通智搜索基础版的内容行业方案，免费获得智能搜索能力
              </p>

              <div className="mt-5 flex flex-1 gap-2.5">
                <div className="h-full flex flex-col bg-white rounded-xl px-4 py-3 w-35">
                  <p className="text-[#31373D] text-[16px] font-medium">
                    通智搜索
                  </p>

                  <div className="mt-4 mb-3 flex-1">
                    <p className="text-[#555E67] text-xs">3万请求/月</p>
                    <p className="text-[#555E67] text-xs">343条记录</p>
                  </div>

                  <div>
                    <span className="text-primary px-1.5 py-1 bg-[#EBEFFF] rounded-sm font-medium text-[16px] leading-6">
                      免费
                    </span>
                  </div>
                </div>

                <div className="mt-3 rounded-xl flex overflow-hidden">
                  <div className="h-full flex flex-col bg-white px-4 py-3 w-33.5">
                    <p className="text-[#31373D] text-[16px] font-medium">
                      Algolia
                    </p>

                    <div className="mt-4 mb-3 flex-1">
                      <p className="text-[#555E67] text-xs">3万请求/月</p>
                      <p className="text-[#555E67] text-xs">343条记录</p>
                    </div>

                    <div>
                      <span className="text-[#555E67] px-1.5 bg-[#F3F4F8] py-1 rounded-sm font-medium text-[12px] leading-6">
                        免费(被限流)
                      </span>
                    </div>
                  </div>
                  <div className="h-full flex flex-col bg-white px-4 py-3 w-33.5 border-l border-solid border-[#F2F4F7]">
                    <p className="text-[#31373D] text-[16px] font-medium">
                      阿里云
                    </p>

                    <div className="mt-4 mb-3 flex-1">
                      <p className="text-[#555E67] text-xs">存储容量：1GB</p>
                      <p className="text-[#555E67] text-xs">计算资源：200LCU</p>
                    </div>

                    <div>
                      <span className="text-[#555E67] px-1.5 bg-[#F3F4F8] py-1 rounded-sm font-medium text-[12px] leading-6">
                        约¥555/月
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#F3F4F8] rounded-[20px] p-7.5 flex flex-col">
              <p className="text-[#31373D] text-[20px] font-medium">
                知名C2C电商平台的个人店铺
              </p>

              <p className="text-[#555E67] text-[16px] pt-3">
                上架商品数量459件，店铺做了一定推广，日PV在6000左右，日搜索次数不足2000，使用通智搜索基础版的电商行业方案，免费获得智能搜索的高效流量转化能力
              </p>

              <div className="mt-3 flex flex-1 gap-2.5">
                <div className="h-full flex flex-col bg-white rounded-xl px-4 py-3 w-35">
                  <p className="text-[#31373D] text-[16px] font-medium">
                    通智搜索
                  </p>

                  <div className="mt-4 mb-3 flex-1">
                    <p className="text-[#555E67] text-xs">3万请求/月</p>
                    <p className="text-[#555E67] text-xs">343条记录</p>
                  </div>

                  <div>
                    <span className="text-primary px-1.5 py-1 bg-[#EBEFFF] rounded-sm font-medium text-[16px] leading-6">
                      免费
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl flex overflow-hidden">
                  <div className="h-full flex flex-col bg-white px-4 py-3 w-33.5">
                    <p className="text-[#31373D] text-[16px] font-medium">
                      Algolia
                    </p>

                    <div className="mt-4 mb-3 flex-1">
                      <p className="text-[#555E67] text-xs">3万请求/月</p>
                      <p className="text-[#555E67] text-xs">343条记录</p>
                    </div>

                    <div>
                      <span className="text-[#555E67] px-1.5 bg-[#F3F4F8] py-1 rounded-sm font-medium text-[12px] leading-6">
                        免费(被限流)
                      </span>
                    </div>
                  </div>
                  <div className="h-full flex flex-col bg-white px-4 py-3 w-33.5 border-l border-solid border-[#F2F4F7]">
                    <p className="text-[#31373D] text-[16px] font-medium">
                      阿里云
                    </p>

                    <div className="mt-4 mb-3 flex-1">
                      <p className="text-[#555E67] text-xs">存储容量：1GB</p>
                      <p className="text-[#555E67] text-xs">计算资源：200LCU</p>
                    </div>

                    <div>
                      <span className="text-[#555E67] px-1.5 bg-[#F3F4F8] py-1 rounded-sm font-medium text-[12px] leading-6">
                        约¥555/月
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              href="//console.mossego.cn/#/login"
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
              <span className="pl-1.5">
                企业知识管理平台搜索/企业内部搜索引擎
              </span>
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
