"use client";

import CategoryGrid from "~/components/category-grid";

export default function CategoryPage() {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      {/* <div className="space-y-8">
        {uniqueCategories.map((category) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize">{category}</h2>
            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
              {Data.filter((item) => item.categories.includes(category)).map(
                (item, idx) => (
                  <div
                    key={`${category}-${idx}`}
                    className="group relative flex items-center justify-center rounded-lg border p-10 transition-shadow hover:shadow-lg dark:bg-[#161617]"
                  >
                    <item.icon className="h-8 w-8" />
                    <div className="absolute -bottom-[22px] z-10 hidden rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block">
                      {item.title}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div> */}
      <CategoryGrid />
      {/* Is it the category grid? */}
    </div>
  );
}
