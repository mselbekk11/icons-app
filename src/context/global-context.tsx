"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IconData } from "~/data/data";

// Define the context type
type IconThemeContextType = {
  iconLightTheme: string;
  setIconLightTheme: (theme: string) => void;
  iconDarkTheme: string;
  setIconDarkTheme: (theme: string) => void;
  iconWidth: number;
  setIconWidth: (width: number) => void;
  iconHeight: number;
  setIconHeight: (height: number) => void;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredIcons: IconData[];
  setFilteredIcons: (icons: IconData[]) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
};

// Create the context with a default value
const IconThemeContext = createContext<IconThemeContextType | undefined>(
  undefined,
);

// Create a provider component
export function IconThemeProvider({ children }: { children: ReactNode }) {
  const [iconLightTheme, setIconLightTheme] = useState("#868686");
  const [iconDarkTheme, setIconDarkTheme] = useState("#868686");
  const [iconWidth, setIconWidth] = useState(24);
  const [iconHeight, setIconHeight] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIcons, setFilteredIcons] = useState<IconData[]>([]);
  const [openMobile, setOpenMobile] = useState(false);

  const value = {
    iconLightTheme,
    iconDarkTheme,
    iconWidth,
    iconHeight,
    setIconLightTheme,
    setIconDarkTheme,
    setIconWidth,
    setIconHeight,
    strokeWidth,
    setStrokeWidth,
    searchQuery,
    setSearchQuery,
    filteredIcons,
    setFilteredIcons,
    openMobile,
    setOpenMobile,
  };

  return (
    <IconThemeContext.Provider value={value}>
      {children}
    </IconThemeContext.Provider>
  );
}

// Create a custom hook to use the context
export function useIconTheme() {
  const context = useContext(IconThemeContext);
  if (context === undefined) {
    throw new Error("useIconTheme must be used within an IconThemeProvider");
  }
  return context;
}
