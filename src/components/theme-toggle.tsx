"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures the theme matches client-side rendering
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
      variant="outline"
    >
      {theme === "dark" ? <Moon className="size-8" /> : <Sun className="" />}
    </Button>
  );
};

export default ThemeToggle;
