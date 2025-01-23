"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Grab() {
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
        <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
        <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
        <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
        <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
      </svg>
    </div>
  );
}
