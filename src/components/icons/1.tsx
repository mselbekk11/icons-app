"use client";

import { useIconTheme } from "~/context/global-context";

import { useEffect, useState } from "react";

export default function IconOne(props: React.SVGProps<SVGSVGElement>) {
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
        {...props}
      >
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2 2" />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </svg>
    </div>
  );
}
