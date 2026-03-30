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

      // 如果没有找到 currentCategory， 默认选中第一个
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
        <p className={cn("text-[40px] font-semibold", sourceHanSerif.className)}>
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
    </div>
  );
}
