"use client";

import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";
import IconSquare from "./icon-square";

export default function IconGrid() {
  const { filteredIcons, searchQuery } = useIconTheme();
  const iconsToDisplay = searchQuery ? filteredIcons : Data;

  return (
    <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 py-6">
      {Array.from({ length: 10 }, (_, arrayIndex) =>
        iconsToDisplay.map((icon, index) => (
          <IconSquare key={index} index={index} icon={icon} />
        )),
      )}
    </div>
  );
}
