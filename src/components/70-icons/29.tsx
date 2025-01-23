"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Diameter() {
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
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
        <path d="m6.41 6.41 11.18 11.18" />
        <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
      </svg>
    </div>
  );
}
