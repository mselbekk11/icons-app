// import SearchBar from "~/components/search-bar";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      {/* <div className="sticky top-0 z-10">
        <SearchBar />
      </div> */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
        {Array(1000)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-xl bg-[#F6F6F7] dark:bg-[#161617]"
            />
          ))}
      </div>
    </div>
  );
}
