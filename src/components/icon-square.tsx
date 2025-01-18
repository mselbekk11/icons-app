import type { IconData } from "~/data/data";

interface IconSquareProps {
  index: number;
  icon: IconData;
}

export default function IconSquare({ index, icon }: IconSquareProps) {
  return (
    <div
      key={index}
      className="bg-custom-grey dark:bg-custom-dark w-25 group relative flex h-24 items-center justify-center rounded-lg border transition-shadow hover:shadow-lg"
    >
      <icon.icon className="h-8 w-8" />
      <div className="absolute -bottom-[22px] z-10 hidden truncate rounded-md bg-[#f56565] px-2 py-1 text-xs text-white transition-shadow hover:shadow-lg group-hover:block dark:text-white">
        {icon.title}
      </div>
    </div>
  );
}
