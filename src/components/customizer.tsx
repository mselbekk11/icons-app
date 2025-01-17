"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SidebarInput } from "~/components/ui/sidebar";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Slider } from "~/components/ui/slider";

export function Customizer() {
  function handleclick() {
    console.log("I have been clicked");
  }

  const [color, setColor] = useState("#aabbcc");

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
            <div className="h-5 w-5 rounded-full bg-black" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">Stroke width</span>
            <span className="text-xs">2px</span>
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className="flex items-center justify-between">
            <span className="text-xs">Size</span>
            <span className="text-xs">24px</span>
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </CardContent>
    </Card>
  );
}
