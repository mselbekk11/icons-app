"use client";

import LogoTwo from "./logo-two";

export default function LogoNav() {
  return (
    <div className="flex h-16 items-center justify-center gap-2 border-b">
      {/* <Lottie animationData={fireOne} className="h-8 w-8" /> */}
      <LogoTwo />
      <span className="text-lg">Fire Icons</span>
    </div>
  );
}
