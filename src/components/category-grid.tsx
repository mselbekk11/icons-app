"use client";

import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";

export default function CategoryGrid() {
  const { searchQuery, filteredIcons } = useIconTheme();

  // Use filtered icons if there's a search query, otherwise use all Data
  const iconsToUse = searchQuery ? filteredIcons : Data;

  // Get unique categories from filtered icons
  const uniqueCategories = Array.from(
    new Set(iconsToUse.flatMap((item) => item.categories)),
  );

  return (
    <div className="space-y-8">
      {uniqueCategories.map((category) => {
        // Get icons for this category
        const categoryIcons = iconsToUse.filter((item) =>
          item.categories.includes(category),
        );

        // Only show categories that have icons
        if (categoryIcons.length === 0) return null;

        return (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize" id={category}>
              {category}
            </h2>
            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
              {categoryIcons.map((item, idx) => (
                <div
                  key={`${category}-${idx}`}
                  className="w-25 group relative flex h-24 items-center justify-center rounded-lg border transition-shadow hover:shadow-lg dark:bg-[#161617]"
                >
                  <item.icon className="h-8 w-8" />
                  <div className="absolute -bottom-[22px] z-10 hidden truncate rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
