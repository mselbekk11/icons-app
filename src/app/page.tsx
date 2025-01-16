import { AppSidebar } from "~/components/app-sidebar";
import SearchBar from "~/components/search-bar";
import ThemeToggle from "~/components/theme-toggle";
// import GitHubIcon from "~/components/github-icon";
// import { Github } from "lucide-react";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";

export default function HomePage() {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* <GitHubIcon /> */}
              {/* <Github /> */}
              <div>Github</div>
              <div>X</div>
            </div>
          </header>
          <SearchBar />
          <div className="flex flex-1 flex-col gap-4 px-6">
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
              <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2">
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
                <div className="aspect-video rounded-xl bg-[#161617]" />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
