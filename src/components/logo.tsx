import { BadgeDollarSign } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex gap-2 h-16 items-center justify-center border-b ">
      <BadgeDollarSign />
      <span className="text-lg">Hero Icons</span>
      {/* <span>MZY Icons</span> */}
    </div>
  );
}
