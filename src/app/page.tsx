"use client";

import IconGrid from "~/components/icon-grid";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      {/* <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
        {Array.from({ length: 40 }, (_, arrayIndex) =>
          Data.map((category, idx) => (
            <div
              key={`${arrayIndex}-${idx}`}
              className="group relative flex items-center justify-center rounded-lg border p-10 transition-shadow hover:shadow-lg dark:bg-[#161617]"
            >
              <category.icon className="h-8 w-8" />
              <div className="absolute -bottom-[22px] z-10 hidden rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block">
                {category.title}
              </div>
            </div>
          )),
        )}
      </div> */}
      <IconGrid />
    </div>
  );
}
