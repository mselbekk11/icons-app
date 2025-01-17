// import SearchBar from "~/components/search-bar";

import { Data } from "~/data/data";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
        {Data.map((category, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-lg border p-10 transition-shadow hover:shadow-lg dark:bg-[#161617]"
          >
            <category.icon className="h-8 w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
