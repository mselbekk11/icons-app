"use client";

import { Card, CardContent } from "~/components/ui/card";
import { RotateCcw } from "lucide-react";
import { Slider } from "~/components/ui/slider";
import { useIconTheme } from "~/context/global-context";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useState } from "react";

export function Customizer() {
  // Add these styles to your component
  const colorPickerStyles = {
    position: "absolute",
    top: "calc(100% + 18px)",
    left: "100px",
    zIndex: 50,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    borderRadius: "8px",
    backgroundColor: "white",
  };

  const {
    iconWidth,
    setIconWidth,
    setIconHeight,
    strokeWidth,
    setStrokeWidth,
    setIconLightTheme,
    setIconDarkTheme,
  } = useIconTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#868686");

  function handleReset() {
    // Reset to initial values from global context
    setIconLightTheme("#868686");
    setIconDarkTheme("#868686");
    setIconWidth(24);
    setIconHeight(24);
    setStrokeWidth(2);
    // Reset local state
    setSelectedColor("#868686");
  }

  // Convert size to number for slider
  const sizeValue = iconWidth;

  // Convert stroke width to number for slider
  const strokeValue = strokeWidth;

  // Handler for size changes
  const handleSizeChange = (value: number[]) => {
    const newSize = value?.[0] ?? 0;
    setIconWidth(newSize);
    setIconHeight(newSize); // Keep width and height equal
  };

  // Handler for stroke width changes
  const handleStrokeChange = (value: number[]) => {
    const newStroke = value?.[0] ?? 0;
    setStrokeWidth(newStroke);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setIconLightTheme(color);
    setIconDarkTheme(color);
  };

  return (
    <Card className="mt-6 shadow-none transition-all duration-300 hover:ring-2 hover:ring-[#f56565] dark:bg-[#1b1b1f]">
      <div className="flex items-center justify-between pb-0"></div>
      <CardContent className="grid gap-2.5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold">Customizer</span>
          <RotateCcw
            size={20}
            onClick={() => {
              handleReset();
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="text-xs">Color</div>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-5 w-5 cursor-pointer rounded-full"
                  style={{ backgroundColor: selectedColor }}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                />
                <HexColorInput
                  color={selectedColor}
                  onChange={handleColorChange}
                  prefixed
                  className="w-20 rounded-md border px-2 py-1 text-xs"
                />
              </div>
            </div>

            {showColorPicker && (
              <div
                style={{ ...colorPickerStyles, position: "absolute" as const }}
              >
                <div
                  className="fixed inset-0"
                  style={{ position: "fixed", inset: 0 }}
                  onClick={() => setShowColorPicker(false)}
                />
                <HexColorPicker
                  color={selectedColor}
                  onChange={handleColorChange}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">Stroke width</span>
            <span className="text-xs">{strokeValue}px</span>
          </div>
          <Slider
            defaultValue={[strokeValue]}
            value={[strokeValue]}
            min={0.5}
            max={3}
            step={0.25} // This creates 10 steps between 0.5 and 3
            onValueChange={handleStrokeChange}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs">Size</span>
            <span className="text-xs">{sizeValue}px</span>
          </div>
          <Slider
            defaultValue={[sizeValue]}
            value={[sizeValue]}
            min={16}
            max={48}
            step={1}
            onValueChange={handleSizeChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
