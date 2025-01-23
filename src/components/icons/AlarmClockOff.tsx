"use client";

import { useIconTheme } from "~/context/global-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AlarmClockOff() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { iconLightTheme, iconDarkTheme, iconWidth, iconHeight, strokeWidth } =
    useIconTheme();

  useEffect(() => {
    setMounted(true);
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
        <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
        <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
        <path d="m22 6-3-3" />
        <path d="M6.26 18.67 4 21" />
        <path d="m2 2 20 20" />
        <path d="M4 4 2 6" />
      </svg>
    </div>
  );
}
