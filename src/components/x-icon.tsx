"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function XIcon() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures the theme matches client-side rendering
  }, []);

  if (!mounted) return null;

  return (
    <div className="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="25px"
        height="25px"
        className={`transition-colors duration-200 ${
          theme === "dark"
            ? "fill-[#95959E] hover:fill-white"
            : "fill-[#67676C] hover:fill-black"
        }`}
      >
        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z" />
      </svg>
    </div>
  );
}
