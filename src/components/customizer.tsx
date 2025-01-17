"use client";

import { Card, CardContent } from "~/components/ui/card";
import { RotateCcw } from "lucide-react";
import { Slider } from "~/components/ui/slider";
import { useIconTheme } from "~/context/global-context";

export function Customizer() {
  const {
    iconWidth,
    setIconWidth,
    setIconHeight,
    strokeWidth,
    setStrokeWidth,
  } = useIconTheme();

  function handleclick() {
    console.log("I have been clicked");
  }

  // Convert size to number for slider
  const sizeValue = parseInt(iconWidth);

  // Convert stroke width to number for slider
  const strokeValue = parseFloat(strokeWidth);

  // Handler for size changes
  const handleSizeChange = (value: number[]) => {
    const newSize = (value?.[0] ?? 0).toString();
    setIconWidth(newSize);
    setIconHeight(newSize); // Keep width and height equal
  };

  // Handler for stroke width changes
  const handleStrokeChange = (value: number[]) => {
    const newStroke = (value?.[0] ?? 0).toString();
    setStrokeWidth(newStroke);
  };

  return (
    <Card className="mt-4 shadow-none dark:bg-[#1b1b1f]">
      <div className="flex items-center justify-between pb-0"></div>
      <CardContent className="grid gap-2.5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold">Customizer</span>
          <RotateCcw
            size={20}
            onClick={() => {
              handleclick();
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs">Color</span>
            <div className="flex h-5 w-5 rounded-full bg-[#000]"></div>
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
