"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type IconThemeContextType = {
  iconLightTheme: string;
  setIconLightTheme: (theme: string) => void;
  iconDarkTheme: string;
  setIconDarkTheme: (theme: string) => void;
  iconWidth: string;
  setIconWidth: (width: string) => void;
  iconHeight: string;
  setIconHeight: (height: string) => void;
  strokeWidth: string;
  setStrokeWidth: (width: string) => void;
};

// Create the context with a default value
const IconThemeContext = createContext<IconThemeContextType | undefined>(
  undefined,
);

// Create a provider component
export function IconThemeProvider({ children }: { children: ReactNode }) {
  const [iconLightTheme, setIconLightTheme] = useState("white");
  const [iconDarkTheme, setIconDarkTheme] = useState("black");
  const [iconWidth, setIconWidth] = useState("25");
  const [iconHeight, setIconHeight] = useState("25");
  const [strokeWidth, setStrokeWidth] = useState("2");

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
