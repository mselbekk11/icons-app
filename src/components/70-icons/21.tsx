"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CaptionsOff() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { iconLightTheme, iconDarkTheme, iconWidth, iconHeight, strokeWidth } =
    useIconTheme();

  useEffect(() => {
    setMounted(true); // Ensures the theme matches client-side rendering
  }, []);

  if (!mounted) return null;

  return (
    <div className="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${iconWidth}`}
        height={`${iconHeight}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke={` ${theme === "dark" ? iconDarkTheme : iconLightTheme}`}
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
        <path d="M17 11h-.5" />
        <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
        <path d="m2 2 20 20" />
        <path d="M7 11h4" />
        <path d="M7 15h2.5" />
      </svg>
    </div>
  );
}
