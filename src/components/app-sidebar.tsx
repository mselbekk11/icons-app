"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import LogoNav from "~/components/logo";
import { Customizer } from "./customizer";
import Link from "next/link";
import { Data } from "~/data/data";
import { usePathname } from "next/navigation";
import { useIconTheme } from "~/context/global-context";

//   {
//     title: "Icons",
//     url: "/",
//   },
//   {
//     title: "Categories",
//     url: "/categories",
//   },
// ];

// This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "#",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//   ],
// };

// Get unique categories from the data
const uniqueCategories = Array.from(
  new Set(Data.flatMap((item) => item.categories)),
).sort();

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpenMobile } = useIconTheme();

  return (
    <Sidebar className="bg-custom-grey dark:bg-custom-dark" {...props}>
      <SidebarHeader>
        <LogoNav />
      </SidebarHeader>
      <Customizer />

      <SidebarContent>
        <div className="p-4">
          <div className="mb-2 flex flex-col gap-2">
            <Link href="/" onClick={() => setOpenMobile(false)}>
              <span
                className={`text-sm font-medium hover:text-[#f56565] dark:hover:text-[#f56565] ${pathname === "/" ? "text-[#f56565]" : "text-[#3c3c43c7] dark:text-[#ebebf599]"}`}
              >
                Icons
              </span>
            </Link>
            <Link href="/categories" onClick={() => setOpenMobile(false)}>
              <span
                className={`text-sm font-medium hover:text-[#f56565] dark:hover:text-[#f56565] ${pathname === "/categories" ? "text-[#f56565]" : "text-[#3c3c43c7] dark:text-[#ebebf599]"}`}
              >
                Categories
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {uniqueCategories.map((category) => (
              <Link
                key={category}
                href={`/categories/#${category}`}
                onClick={() => setOpenMobile(false)}
                className="text-xs text-[#3c3c43c7] hover:text-[#f56565] dark:text-[#ebebf599] dark:hover:text-[#f56565]"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
