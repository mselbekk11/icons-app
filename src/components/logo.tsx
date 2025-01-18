import { BadgeDollarSign } from "lucide-react";
import Lottie from "lottie-react";
import fireOne from "~/assets/fire-outline.json";
export default function Logo() {
  return (
    <div className="flex h-16 items-center justify-center gap-2 border-b">
      {/* <BadgeDollarSign /> */}
      <Lottie animationData={fireOne} className="h-8 w-8" />
      <span className="text-lg">Fire Icons.</span>
      {/* <span>MZY Icons</span> */}
    </div>
  );
}
