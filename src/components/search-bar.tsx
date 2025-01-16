"use client";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mx-auto w-full py-6 bg-[#FFFFFF] dark:bg-[#1b1b1f]">
      <div
        className={`dark:bg-[#161617] flex items-center overflow-hidden rounded-lg  transition-all duration-300 ${
          isFocused ? "shadow-lg ring-2 ring-blue-500" : "shadow"
        }`}
      >
        <div className="p-3 text-gray-400">
          <Search size={20} />
        </div>
        <Input
          type="search"
          placeholder="Search..."
          className="w-full px-4 py-2 leading-tight text-gray-700 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Search"
        />
      </div>
    </div>
  );
}
