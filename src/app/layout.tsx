import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { AppSidebar } from "~/components/app-sidebar";
import SearchBar from "~/components/search-bar";
// import ThemeToggle from "~/components/theme-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import GitHubIcon from "~/components/github-icon";
import XIcon from "~/components/x-icon";
import { SelectTheme } from "~/components/select-theme";
import { Separator } from "~/components/ui/separator";
import { IconThemeProvider } from "~/context/global-context";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class">
          <IconThemeProvider>
            <div className="bg-[#F6F6F7] dark:bg-[#161617]">
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <div className="flex h-screen flex-col">
                    <header className="bg-mainpage sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-[#FFFFFF] px-4 dark:border-[#161617] dark:bg-[#1b1b1f]">
                      <SidebarTrigger className="-ml-1" />
                      <div className="flex items-center gap-2">
                        <SelectTheme />
                        {/* <div className="h-5 w-1 bg-black"/>
                         */}
                        <Separator orientation="vertical" className="h-4" />
                        <GitHubIcon />
                        <XIcon />
                      </div>
                    </header>
                    <div className="sticky top-0 z-10 px-6 dark:bg-[#1b1b1f]">
                      <SearchBar />
                    </div>
                    <div className="flex-1 overflow-y-auto bg-[#FFFFFF] dark:bg-[#1b1b1f]">
                      <div className="flex flex-col gap-4 px-6">{children}</div>
                    </div>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </IconThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
