"use client";
import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";

export default function IconGrid() {
  const { filteredIcons, searchQuery } = useIconTheme();
  const iconsToDisplay = searchQuery ? filteredIcons : Data;

  return (
    <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {Array.from({ length: 40 }, (_, arrayIndex) =>
        iconsToDisplay.map((icon, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center rounded-lg border bg-[#F6F6F7] p-10 transition-shadow hover:shadow-lg dark:bg-[#161617]"
          >
            <icon.icon className="h-8 w-8" />
            {/* <span className="mt-2 text-sm">{icon.title}</span> */}
            <div className="absolute -bottom-[22px] z-10 hidden truncate rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block">
              {icon.title}
            </div>
          </div>
        )),
      )}
    </div>
  );
}
