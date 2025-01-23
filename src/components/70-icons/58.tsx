"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GlobeLock() {
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
        <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
        <path d="M2 12h8.5" />
        <path d="M20 6V4a2 2 0 1 0-4 0v2" />
        <rect width="8" height="5" x="14" y="6" rx="1" />
      </svg>
    </div>
  );
}
