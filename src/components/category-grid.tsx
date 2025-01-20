"use client";

import { useEffect, useState } from "react";
import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";
import IconSquare from "./icon-square";

export default function CategoryGrid() {
  const { searchQuery, filteredIcons } = useIconTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted (client-side)
  if (!mounted) {
    return null;
  }

  // Use filtered icons if there's a search query, otherwise use all Data
  const iconsToUse = searchQuery ? filteredIcons : Data;

  // Get unique categories from filtered icons and sort them alphabetically
  const uniqueCategories = Array.from(
    new Set(iconsToUse.flatMap((item) => item.categories)),
  ).sort();

  return (
    <div className="space-y-8 pt-6">
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
              {categoryIcons.map((icon, idx) => (
                // <div
                //   key={`${category}-${idx}`}
                //   className="w-25 group relative flex h-24 items-center justify-center rounded-lg border transition-shadow hover:shadow-lg dark:bg-[#161617]"
                // >
                //   <item.icon className="h-8 w-8" />
                //   <div className="absolute -bottom-[22px] z-10 hidden truncate rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block">
                //     {item.title}
                //   </div>
                // </div>
                <IconSquare key={idx} index={idx} icon={icon} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
