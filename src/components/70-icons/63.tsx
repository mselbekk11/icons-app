"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Grape() {
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
        <path d="M22 5V2l-5.89 5.89" />
        <circle cx="16.6" cy="15.89" r="3" />
        <circle cx="8.11" cy="7.4" r="3" />
        <circle cx="12.35" cy="11.65" r="3" />
        <circle cx="13.91" cy="5.85" r="3" />
        <circle cx="18.15" cy="10.09" r="3" />
        <circle cx="6.56" cy="13.2" r="3" />
        <circle cx="10.8" cy="17.44" r="3" />
        <circle cx="5" cy="19" r="3" />
      </svg>
    </div>
  );
}
