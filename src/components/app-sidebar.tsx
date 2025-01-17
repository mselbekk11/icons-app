import * as React from "react";

import { SearchForm } from "~/components/search-form";
import { VersionSwitcher } from "~/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import Logo from "./logo";
import { Customizer } from "./customizer";
import { url } from "inspector";
import Link from "next/link";

// const navItems = [
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

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      heading: "Icons",
      url: "/",
      items: [],
    },
    {
      heading: "Categories",
      url: "/categories",
      items: [
        { title: "Animals", url: "/categories/animals" },
        { title: "Architecture", url: "/categories/architecture" },
        { title: "Arrows", url: "/categories/arrows" },
        { title: "Business", url: "/categories/business" },
        { title: "Communication", url: "/categories/communication" },
        { title: "Design", url: "/categories/design" },
        { title: "Development", url: "/categories/development" },
        { title: "Education", url: "/categories/education" },
        { title: "Entertainment", url: "/categories/entertainment" },
        { title: "Finance", url: "/categories/finance" },
        { title: "Food & Drink", url: "/categories/food-drink" },
        { title: "Health", url: "/categories/health" },
        { title: "Household", url: "/categories/household" },
        { title: "Industry", url: "/categories/industry" },
        { title: "Maps", url: "/categories/maps" },
        { title: "Nature", url: "/categories/nature" },
        { title: "People", url: "/categories/people" },
        { title: "Sports", url: "/categories/sports" },
        { title: "Technology", url: "/categories/technology" },
        { title: "Weather", url: "/categories/weather" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <Customizer />

      {/* <div className="px-4">
        {navItems.map((item, idx) => (
          <div key={idx}>{item.title}</div>
        ))}
      </div> */}

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <div className="p-4">
          {data.navMain.map((item) => (
            <div key={item.heading}>
              <div className="mb-2">
                <Link href={item.url} className="text-sm font-semibold">
                  {item.heading}
                </Link>
              </div>

              <div className="flex flex-col gap-1">
                {item.items.map((item) => (
                  <div key={item.title} className="text-xs">
                    <Link href={item.url}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
