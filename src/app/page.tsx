export default function HomePage() {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2">
        {Array(48)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="aspect-video rounded-xl bg-[#161617]" />
          ))}
      </div>
    </div>
  );
}
