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
    <div className="mx-auto w-full pt-6">
      <div
        className={`bg-custom-grey dark:bg-custom-dark flex items-center overflow-hidden rounded-lg border ring-blue-500 drop-shadow-md transition-all duration-300 hover:ring-2 hover:ring-[#f56565] ${
          isFocused ? "ring-2 ring-[#f56565]" : ""
        }`}
      >
        <div className="p-3 text-gray-400">
          <Search size={20} />
        </div>
        <Input
          type="search"
          placeholder="Search..."
          className="bg-custom-grey dark:bg-custom-dark w-full px-4 py-2 leading-tight text-black focus:outline-none dark:text-white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search"
        />
      </div>
    </div>
  );
}
