"use client";
import { Input } from "~/components/ui/input";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useIconTheme } from "~/context/global-context";
import { Data } from "~/data/data";
import { searchIcons } from "~/utils/search";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const { setSearchQuery, setFilteredIcons } = useIconTheme();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const filteredResults = searchIcons(Data, value);
    if (filteredResults instanceof Error) {
      console.error(filteredResults);
      return;
    }
    setFilteredIcons(filteredResults);
  };

  return (
    <div className="mx-auto w-full bg-[#FFFFFF] py-6 dark:bg-[#1b1b1f]">
      <div
        className={`flex items-center overflow-hidden rounded-lg transition-all duration-300 dark:bg-[#161617] ${
          isFocused ? "shadow-lg ring-2 ring-blue-500" : "shadow"
        }`}
      >
        <div className="p-3 text-gray-400">
          <Search size={20} />
        </div>
        <Input
          type="search"
          placeholder="Search..."
          className="w-full px-4 py-2 leading-tight text-black focus:outline-none dark:text-white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search"
        />
      </div>
    </div>
  );
}
