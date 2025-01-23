"use client";

import { useIconTheme } from "~/context/global-context";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FolderCog() {
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
        <circle cx="18" cy="18" r="3" />
        <path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" />
        <path d="m21.7 19.4-.9-.3" />
        <path d="m15.2 16.9-.9-.3" />
        <path d="m16.6 21.7.3-.9" />
        <path d="m19.1 15.2.3-.9" />
        <path d="m19.6 21.7-.4-1" />
        <path d="m16.8 15.3-.4-1" />
        <path d="m14.3 19.6 1-.4" />
        <path d="m20.7 16.8 1-.4" />
      </svg>
    </div>
  );
}
