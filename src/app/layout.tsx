import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { AppSidebar } from "~/components/app-sidebar";
import SearchBar from "~/components/search-bar";
import { Toaster } from "~/components/ui/sonner";
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
import Script from "next/script";

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://fireicons.io"),
  title: "Fire Icons",
  description: "Free SVG icons",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    title: "Fire Icons",
    description: "Free SVG icons",
    images: "/og-image.png",
    url: "https://fireicons.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Icons",
    description: "Free SVG icons",
    images: "/og-image-twitter.png",
  },
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <IconThemeProvider>
            <div className="bg-[#F6F6F7] dark:bg-[#161617]">
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <div className="flex h-screen flex-col">
                    <header className="bg-mainpage sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-[#FFFFFF] px-4 dark:border-[#161617] dark:bg-custom-light">
                      <SidebarTrigger className="ml-1" />
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
                    <div className="flex-1 overflow-y-auto bg-[#FFFFFF] dark:bg-custom-light">
                      <div className="flex flex-col gap-4 px-6">{children}</div>
                    </div>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </IconThemeProvider>
        </ThemeProvider>
        <Toaster />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
