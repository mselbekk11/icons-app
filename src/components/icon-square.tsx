"use client";

import type { IconData } from "~/data/data";
import { toast } from "sonner";
import { useIconTheme } from "~/context/global-context";

interface IconSquareProps {
  index: number;
  icon: IconData;
}

export default function IconSquare({ index, icon }: IconSquareProps) {
  const { iconLightTheme, iconWidth, iconHeight, strokeWidth } = useIconTheme();

  const copyToClipboard = () => {
    // Create a temporary div to parse the SVG
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = icon.svg;
    const svgElement = tempDiv.querySelector("svg");

    if (svgElement) {
      // Apply current customizations
      svgElement.setAttribute("width", iconWidth.toString());
      svgElement.setAttribute("height", iconHeight.toString());
      svgElement.setAttribute("stroke-width", strokeWidth.toString());
      svgElement.setAttribute("stroke", iconLightTheme);

      // Get the modified SVG code
      const modifiedSvg = svgElement.outerHTML;

      void navigator.clipboard
        .writeText(modifiedSvg)
        .then(() => {
          toast.success("Customized SVG has been copied", {
            duration: 1000,
            position: "top-right",
          });
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  };

  return (
    <div
      key={index}
      className="w-25 group relative flex h-24 items-center justify-center rounded-lg border bg-custom-grey transition-shadow hover:shadow-lg dark:bg-custom-dark"
    >
      <icon.icon className="h-8 w-8" />
      <div className="absolute inset-0 flex hidden flex-col items-center justify-center gap-2 rounded-lg backdrop-blur-md group-hover:flex">
        <button
          onClick={copyToClipboard}
          className="rounded-md bg-[#f56565] px-2 py-1 text-xs text-[#fff]"
        >
          Copy SVG
        </button>
      </div>
    </div>
  );
}
