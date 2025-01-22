"use client";

import { useEffect, useState } from "react";
import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";
import IconSquare from "./icon-square";

export default function CategoryGrid() {
  const { searchQuery, filteredIcons } = useIconTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted (client-side)
  if (!isMounted) {
    return null;
  }

  // Use filtered icons if there's a search query, otherwise use all Data
  const iconsToUse = searchQuery ? filteredIcons : Data;

  // Get unique categories from filtered icons and sort them alphabetically
  const uniqueCategories = Array.from(
    new Set(iconsToUse.flatMap((item) => item.categories)),
  ).sort();

  return (
    <div className="space-y-8 py-6">
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
                <IconSquare key={idx} index={idx} icon={icon} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
