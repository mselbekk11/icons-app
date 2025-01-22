"use client";

import type { IconData } from "~/data/data";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface IconSquareProps {
  index: number;
  icon: IconData;
}

export default function IconSquare({ index, icon }: IconSquareProps) {
  const copyToClipboard = () => {
    void navigator.clipboard
      .writeText(icon.svg)
      .then(() => {
        toast.success("SVG has been copied", {
          duration: 1000,
          position: "top-right",
        });
      })
      // .then(() => {
      //   toast(
      //     <div className="bg-[#000] text-sm">
      //       A custom toast with default styling
      //     </div>,
      //     {
      //       duration: 5000,
      //       position: "top-right",
      //     },
      //   );
      // })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
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
