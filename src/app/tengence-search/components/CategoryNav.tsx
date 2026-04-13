import { cn } from "@/lib/utils";
import { sourceHanSerif, featureCategories } from "../constants";
import type { FeatureCategory } from "../types";

interface CategoryNavProps {
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryNav({
  activeCategory,
  onCategoryClick,
}: CategoryNavProps) {
  return (
    <div className="w-40 shrink-0">
      <div className="sticky top-18">
        <nav className="flex flex-col">
          {featureCategories.map((category: FeatureCategory) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
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
  );
}
