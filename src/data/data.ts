import Two from "~/components/icons/2";
import Three from "~/components/icons/3";
import Four from "~/components/icons/4";
import Five from "~/components/icons/5";
import AArrowUp from "~/components/icons/AArrowUp";
import AArrowDown from "~/components/icons/AArrowDown";
import ALargeSmall from "~/components/icons/ALargeSmall";
import Accessibility from "~/components/icons/Accessibility";
import Activity from "~/components/icons/Activity";
import AirVent from "~/components/icons/AirVent";
import Airplay from "~/components/icons/Airplay";
import AlarmClockCheck from "~/components/icons/AlarmClockCheck";
import AlarmClockMinus from "~/components/icons/AlarmClockMinus";
import AlarmClockOff from "~/components/icons/AlarmClockOff";
import AlarmClockPlus from "~/components/icons/AlarmClockPlus";
import AlarmClock from "~/components/icons/AlarmClock";
import AlarmSmoke from "~/components/icons/AlarmSmoke";
import Album from "~/components/icons/Album";
import Aligncenterhorizontal from "~/components/icons/align-center-horizontal";

export interface IconData {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  svg: string;
  categories: string[];
  tags: string[];
}

// Export the data as an array
export const Data: IconData[] = [
  { 
    title: "Alarm Clock", 
    icon: AlarmClock,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /></svg>`,
    categories: ["devices", "notifications", "time"],
    tags: ["morning"]
  },
  { 
    title: "Apple", 
    icon: Two,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>`,
    categories: ["food-beverage"],
    tags: ["fruit", "food"] // Example categories
  },
  { 
    title: "Anchor", 
    icon: Three,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>`,
    categories: ["transportation",
    "text"],
    tags: ["ship"]
  },
  { 
    title: "Atom", 
    icon: Four,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>`,
    categories: ["science"],
    tags: ["atomic","nuclear","physics","particle","element","molecule","electricity","energy","chemistry"]
  },
  { 
    title: "Badge Dollar Sign", 
    icon: Five,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>`,
    categories: ["shopping",
    "finance"],
    tags: ["atomic","nuclear","physics","particle","element","molecule","electricity","energy","chemistry"]
  },
  {
    title: "A Arrow Up",
    icon: AArrowUp,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 13h6" /><path d="m2 16 4.5-9 4.5 9" /><path d="M18 16V7" /><path d="m14 11 4-4 4 4" /></svg>`,
    categories: ["text", "design"],
    tags: ["letter", "font size", "text", "formatting", "larger", "bigger"]
  },
  {
    title: "A Arrow Down",
    icon: AArrowDown,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 13h6" /><path d="m2 16 4.5-9 4.5 9" /><path d="M18 7v9" /><path d="m14 12 4 4 4-4" /></svg>`,
    categories: ["text", "design"],
    tags: ["letter", "font size", "text", "formatting", "smaller"]
  },
  {
    title: "A Large Small",
    icon: ALargeSmall,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14h-5" /><path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" /><path d="M4.5 13h6" /><path d="m3 16 4.5-9 4.5 9" /></svg>`,
    categories: ["text", "design"],
    tags: ["letter", "font size", "text", "formatting"]
  },
  {
    title: "Accessibility",
    icon: Accessibility,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" /></svg>`,
    categories: ["accessibility", "medical"],
    tags: ["disability", "disabled", "dda", "wheelchair"]
  },
  {
    title: "Activity",
    icon: Activity,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>`,
    categories: ["medical", "account", "social", "science", "multimedia"],
    tags: ["pulse", "action", "motion", "movement", "exercise", "fitness", "healthcare", "heart rate monitor", "vital signs", "vitals", "emergency room", "er", "intensive care", "hospital", "defibrillator", "earthquake", "siesmic", "magnitude", "richter scale", "aftershock", "tremor", "shockwave", "audio", "waveform", "synthesizer", "synthesiser", "music"]
  },
  {
    title: "Air Vent",
    icon: AirVent,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 8h12" /><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" /><path d="M6.6 15.6A2 2 0 1 0 10 17v-5" /></svg>`,
    categories: ["home"],
    tags: ["air conditioner", "ac", "central air", "cooling", "climate-control"]
  },
  {
    title: "Airplay",
    icon: Airplay,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><path d="m12 15 5 6H7Z" /></svg>`,
    categories: ["multimedia", "connectivity", "devices", "brands"],
    tags: ["stream", "cast", "mirroring", "screen", "monitor", "macos", "osx"]
  },
  {
    title: "Alarm Clock Check",
    icon: AlarmClockCheck,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /><path d="m9 13 2 2 4-4" /></svg>`,
    categories: ["devices", "notifications", "time"],
    tags: ["done", "todo", "tick", "complete", "task"]
  },
  {
    title: "Alarm Clock Minus",
    icon: AlarmClockMinus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /><path d="M9 13h6" /></svg>`,
    categories: ["devices", "notifications", "time"],
    tags: ["remove"]
  },
  {
    title: "Alarm Clock Off",
    icon: AlarmClockOff,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" /><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" /><path d="m22 6-3-3" /><path d="M6.26 18.67 4 21" /><path d="m2 2 20 20" /><path d="M4 4 2 6" /></svg>`,
    categories: ["devices", "notifications", "time"],
    tags: ["morning", "turn-off"]
  },
  {
    title: "Alarm Clock Plus",
    icon: AlarmClockPlus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /><path d="M12 10v6" /><path d="M9 13h6" /></svg>`,
    categories: ["devices", "notifications", "time"],
    tags: ["add"]
  },
  {
    title: "Alarm Smoke",
    icon: AlarmSmoke,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" /><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" /><path d="m22 6-3-3" /><path d="M6.26 18.67 4 21" /><path d="m2 2 20 20" /><path d="M4 4 2 6" /></svg>`,
    categories: ["home", "devices", "travel"],
    tags: ["fire", "alert", "warning", "detector", "carbon monoxide", "safety", "equipment", "amenities"]
  },
  {
    title: "Album",
    icon: Album,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><polyline points="11 3 11 11 14 8 17 11 17 3" /></svg>`,
    categories: ["photography", "multimedia"],
    tags: ["photo", "book"]
  },
  {
    title: "Align Center Horizontal",
    icon: Aligncenterhorizontal,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20" />
  <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
  <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
  <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
  <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" /></svg>`,
    categories: ["", ""],
    tags: ["", ""]
  },
];