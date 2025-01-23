"use client";

import { useIconTheme } from "~/context/global-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AArrowDown() {
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
        className={` ${theme === "dark" ? iconLightTheme : iconDarkTheme}`}
      >
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />
        <path d="M18 7v9" />
        <path d="m14 12 4 4 4-4" />
      </svg>
    </div>
  );
}
