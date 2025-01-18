import type { IconData } from "~/data/data";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface IconSquareProps {
  index: number;
  icon: IconData;
}

export default function IconSquare({ index, icon }: IconSquareProps) {
  const copyToClipboard = () => {
    void navigator.clipboard
      .writeText(icon.svg)
      .then(() => {
        // alert("Copied to clipboard!");
        toast.success("SVG has been copied", {
          duration: 1000, // 5 seconds, use Infinity to make it stay forever
          position: "top-right",
          // description: "You can now paste it into your code",
        });
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div
      key={index}
      className="bg-custom-grey dark:bg-custom-dark w-25 group relative flex h-24 items-center justify-center rounded-lg border transition-shadow hover:shadow-lg"
    >
      <icon.icon className="h-8 w-8" />
      <div className="absolute inset-0 flex hidden flex-col items-center justify-center gap-2 rounded-lg backdrop-blur-md group-hover:flex">
        <button
          onClick={copyToClipboard}
          className="rounded-md bg-[#f56565] px-2 py-1 text-xs text-[#fff]"
        >
          Copy SVG
        </button>
      </div>
    </div>
  );
}
