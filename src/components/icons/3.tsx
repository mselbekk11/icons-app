"use client";

import { useIconTheme } from "~/context/global-context";

import { useEffect, useState } from "react";

export default function IconThree() {
  const [mounted, setMounted] = useState(false);

  const { iconWidth, iconHeight, strokeWidth, currentThemeColor } =
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
        stroke={currentThemeColor}
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={currentThemeColor}
      >
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <circle cx="12" cy="5" r="3" />
      </svg>
    </div>
  );
}
