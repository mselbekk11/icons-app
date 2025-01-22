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
import Six from "~/components/70-icons/6";
import Seven from "~/components/70-icons/7";
import Eight from "~/components/70-icons/8";
import Nine from "~/components/70-icons/9";
import Ten from "~/components/70-icons/10";
import Eleven from "~/components/70-icons/11";
import Twelve from "~/components/70-icons/12";
import Thirteen from "~/components/70-icons/13";
import Fourteen from "~/components/70-icons/14";
import Fifteen from "~/components/70-icons/15";
import Camera from "~/components/70-icons/16";
import CandyCane from "~/components/70-icons/17";
import CandyOff from "~/components/70-icons/18";
import Candy from "~/components/70-icons/19";
import Cannabis from "~/components/70-icons/20";
import CaptionsOff from "~/components/70-icons/21";
import Captions from "~/components/70-icons/22";
import CarFront from "~/components/70-icons/23";
import CarTaxiFront from "~/components/70-icons/24";
import Car from "~/components/70-icons/25";
import Database from "~/components/70-icons/26";
import Delete from "~/components/70-icons/27";
import Dessert from "~/components/70-icons/28";
import Diameter from "~/components/70-icons/29";
import DiamondMinus from "~/components/70-icons/30";
import DiamondPercent from "~/components/70-icons/31";
import DiamondPlus from "~/components/70-icons/32";
import Diamond from "~/components/70-icons/33";
import DiceOne from "~/components/70-icons/34";
import DiceTwo from "~/components/70-icons/35";

import Ear from "~/components/70-icons/36";
import EarthLock from "~/components/70-icons/37";
import Earth from "~/components/70-icons/38";
import Eclipse from "~/components/70-icons/39";
import EggFried from "~/components/70-icons/40";
import EggOff from "~/components/70-icons/41";
import Egg from "~/components/70-icons/42";
import EllipsisVertical from "~/components/70-icons/43";
import Ellipsis from "~/components/70-icons/44";
import EqualApproximately from "~/components/70-icons/45";

import Flower from "~/components/70-icons/46";
import Focus from "~/components/70-icons/47";
import FoldHorizontal from "~/components/70-icons/48";
import FoldVertical from "~/components/70-icons/49";
import FolderArchive from "~/components/70-icons/50";
import FolderCheck from "~/components/70-icons/51";
import FolderClock from "~/components/70-icons/52";
import FolderClosed from "~/components/70-icons/53";
import FolderCode from "~/components/70-icons/54";
import FolderCog from "~/components/70-icons/55";

import GlassWater from "~/components/70-icons/56";
import Glasses from "~/components/70-icons/57";
import GlobeLock from "~/components/70-icons/58";
import Globe from "~/components/70-icons/59";
import Goal from "~/components/70-icons/60";
import Grab from "~/components/70-icons/61";
import GraduationCap from "~/components/70-icons/62";
import Grape from "~/components/70-icons/63";
import GridCheck from "~/components/70-icons/64";
import GridPlus from "~/components/70-icons/65";

import Heart from "~/components/70-icons/66";
import Heater from "~/components/70-icons/67";
import Hexagon from "~/components/70-icons/68";
import Highlighter from "~/components/70-icons/69";
import History from "~/components/70-icons/70";

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
    categories: ["medical", "account", "shapes", "science", "multimedia"],
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
    categories: ["multimedia", "devices", "brands"],
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
    categories: ["home", "devices", "time"],
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
    categories: ["shapes"],
    tags: ["", ""]
  },
  {
    title: "Badge Euro",
    icon: Six,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "eur", "europe"]
  },
  {
    title: "Badge Indian Rupee",
    icon: Seven,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "inr", "india"]
  },
  {
    title: "Badge Info",
    icon: Eight,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["notifications", "interface"],
    tags: ["information", "help", "details"]
  },
  {
    title: "Badge Israeli Shekel",
    icon: Nine,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "ils", "israel"]
  },
  {
    title: "Badge Japanese Yen",
    icon: Ten,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "jpy", "japan"]
  },
  {
    title: "Badge Minus",
    icon: Eleven,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["interface", "math"],
    tags: ["remove", "subtract", "delete"]
  },
  {
    title: "Badge Percent",
    icon: Twelve,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["math", "finance"],
    tags: ["percentage", "ratio", "discount"]
  },
  {
    title: "Badge Plus",
    icon: Thirteen,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["interface", "math"],
    tags: ["add", "new", "create"]
  },
  {
    title: "Badge Pound Sterling",
    icon: Fourteen,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "gbp", "uk", "british"]
  },
  {
    title: "Badge Russian Ruble",
    icon: Fifteen,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>`,
    categories: ["finance", "currency"],
    tags: ["money", "payment", "rub", "russia"]
  },
  {
    title: "Camera",
    icon: Camera,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>`,
    categories: ["multimedia", "devices"],
    tags: ["photo", "picture", "image", "capture"]
  },
  {
    title: "Candy Cane",
    icon: CandyCane,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" /><path d="M17.75 7 15 2.1" /><path d="M10.9 4.8 13 9" /><path d="m7.9 9.7 2 4.4" /><path d="M4.9 14.7 7 18.9" /></svg>`,
    categories: ["food-beverage", "holidays"],
    tags: ["sweet", "christmas", "peppermint", "treat"]
  },
  {
    title: "Candy Off",
    icon: CandyOff,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" /><path d="M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657" /><path d="M14 16.5V14" /><path d="M14 6.5v1.843" /><path d="M10 10v7.5" /><path d="m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1" /><path d="m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,
    categories: ["food-beverage"],
    tags: ["sweet", "disabled", "no sugar", "sugar free"]
  },
  {
    title: "Candy",
    icon: Candy,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" /><path d="M14 6.5v10" /><path d="M10 7.5v10" /><path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" /><path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" /></svg>`,
    categories: ["food-beverage"],
    tags: ["sweet", "sugar", "treat", "dessert"]
  },
  {
    title: "Cannabis",
    icon: Cannabis,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-4" /><path d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" /></svg>`,
    categories: ["medical", "plants"],
    tags: ["marijuana", "weed", "hemp", "leaf", "medical"]
  },
  {
    title: "Captions Off",
    icon: CaptionsOff,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" /><path d="M17 11h-.5" /><path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" /><path d="m2 2 20 20" /><path d="M7 11h4" /><path d="M7 15h2.5" /></svg>`,
    categories: ["multimedia", "accessibility"],
    tags: ["subtitles", "closed captions", "cc", "disabled"]
  },
  {
    title: "Captions",
    icon: Captions,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="5" rx="2" ry="2" /><path d="M7 15h4M15 15h2M7 11h2M13 11h4" /></svg>`,
    categories: ["multimedia", "accessibility"],
    tags: ["subtitles", "closed captions", "cc"]
  },
  {
    title: "Car Front",
    icon: CarFront,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" /><path d="M7 14h.01" /><path d="M17 14h.01" /><rect width="18" height="8" x="3" y="10" rx="2" /><path d="M5 18v2" /><path d="M19 18v2" /></svg>`,
    categories: ["transportation"],
    tags: ["vehicle", "automobile", "front view"]
  },
  {
    title: "Car Taxi Front",
    icon: CarTaxiFront,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4" /><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" /><path d="M7 14h.01" /><path d="M17 14h.01" /><rect width="18" height="8" x="3" y="10" rx="2" /><path d="M5 18v2" /><path d="M19 18v2" /></svg>`,
    categories: ["transportation"],
    tags: ["cab", "taxi", "vehicle", "automobile", "front view"]
  },
  {
    title: "Car",
    icon: Car,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>`,
    categories: ["transportation"],
    tags: ["vehicle", "automobile", "side view"]
  },
  {
    title: "Database",
    icon: Database,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>`,
    categories: ["development", "technology"],
    tags: ["storage", "data", "server", "sql"]
  },
  {
    title: "Delete",
    icon: Delete,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" /><path d="m12 9 6 6" /><path d="m18 9-6 6" /></svg>`,
    categories: ["interface", "actions"],
    tags: ["remove", "backspace", "erase"]
  },
  {
    title: "Dessert",
    icon: Dessert,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2" /><path d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8" /><path d="M3.2 14.8a9 9 0 0 0 17.6 0" /></svg>`,
    categories: ["food-beverage"],
    tags: ["sweet", "cake", "ice cream", "pudding"]
  },
  {
    title: "Diameter",
    icon: Diameter,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="19" cy="19" r="2" /><circle cx="5" cy="5" r="2" /><path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" /><path d="m6.41 6.41 11.18 11.18" /><path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" /></svg>`,
    categories: ["math", "design"],
    tags: ["measurement", "circle", "radius", "geometry"]
  },
  {
    title: "Diamond Minus",
    icon: DiamondMinus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" /><path d="M8 12h8" /></svg>`,
    categories: ["shapes", "math"],
    tags: ["remove", "subtract", "geometry"]
  },
  {
    title: "Diamond Percent",
    icon: DiamondPercent,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" /><path d="M9.2 9.2h.01" /><path d="m14.5 9.5-5 5" /><path d="M14.7 14.8h.01" /></svg>`,
    categories: ["shapes", "math"],
    tags: ["percentage", "ratio", "geometry"]
  },
  {
    title: "Diamond Plus",
    icon: DiamondPlus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v8" /><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" /><path d="M8 12h8" /></svg>`,
    categories: ["shapes", "math"],
    tags: ["add", "new", "geometry"]
  },
  {
    title: "Diamond",
    icon: Diamond,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" /></svg>`,
    categories: ["shapes"],
    tags: ["geometry", "jewel", "gem"]
  },
  {
    title: "Dice One",
    icon: DiceOne,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["games"],
    tags: ["gambling", "random", "game", "number"]
  },
  {
    title: "Dice Two",
    icon: DiceTwo,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["games"],
    tags: ["gambling", "random", "game", "number"]
  },
  {
    title: "Ear",
    icon: Ear,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: [
      "medical",
      "accessibility"
    ],
    tags: [
      "hearing",
      "noise",
      "audio",
      "accessibility"
    ]
  },
  {
    title: "Earth Lock",
    icon: EarthLock,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: [
      "security",
      "development",
      "devices"
    ],
    tags: [
      "vpn",
      "private",
      "privacy",
      "network",
      "world",
      "browser",
      "security",
      "encryption",
      "protection",
      "connection"
    ]
  },
  {
    title: "Earth",
    icon: Earth,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: [
      "navigation"
    ],
    tags: [
      "world",
      "browser",
      "language",
      "translate",
      "globe"
    ]
  },
  {
    title: "Eclipse",
    icon: Eclipse,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: [
      "science",
      "design",
      "development",
      "accessibility",
      "photography"
    ],
    tags: [""]
  },
  {
    title: "Egg Fried",
    icon: EggFried,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["food-beverage"],
    tags: [""]
  },
  {
    title: "Egg Off",
    icon: EggOff,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["food-beverage"],
    tags: [""]
  },
  {
    title: "Egg",
    icon: Egg,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["food-beverage"],
    tags: [""]
  },
  {
    title: "Ellipsis Vertical",
    icon: EllipsisVertical,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Ellipsis",
    icon: Ellipsis,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Equal Approximatley",
    icon: EqualApproximately,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Flower",
    icon: Flower,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["plants"],
    tags: [""]
  },
  {
    title: "Focus",
    icon: Focus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["photography"],
    tags: [""]
  },
  {
    title: "Fold Horizontal",
    icon: FoldHorizontal,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Fold Vertical",
    icon: FoldVertical,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Folder Archive",
    icon: FolderArchive,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Folder Check",
    icon: FolderCheck,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Folder Clock",
    icon: FolderClock,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Folder Closed",
    icon: FolderClosed,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Folder Code",
    icon: FolderCode,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Folder Cog",
    icon: FolderCog,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["files"],
    tags: [""]
  },
  {
    title: "Glass Water",
    icon: GlassWater,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["food-beverage"],
    tags: [""]
  },
  {
    title: "Glasses",
    icon: Glasses,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["accessibility"],
    tags: [""]
  },
  {
    title: "Globe Lock",
    icon: GlobeLock,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["development"],
    tags: [""]
  },
  {
    title: "Globe",
    icon: Globe,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["development"],
    tags: [""]
  },
  {
    title: "Goal",
    icon: Goal,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["gaming"],
    tags: [""]
  },
  {
    title: "Grab",
    icon: Grab,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "GraduationCap",
    icon: GraduationCap,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["buildings"],
    tags: [""]
  },
  {
    title: "Grape",
    icon: Grape,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["food-beverage"],
    tags: [""]
  },
  {
    title: "Grid Check",
    icon: GridCheck,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "GridPlus",
    icon: GridPlus,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["layout"],
    tags: [""]
  },
  {
    title: "Heart",
    icon: Heart,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["medical"],
    tags: [""]
  },
  {
    title: "Heater",
    icon: Heater,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["devices"],
    tags: [""]
  },
  {
    title: "Hexagon",
    icon: Hexagon,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["shapes"],
    tags: [""]
  },
  {
    title: "Highlighter",
    icon: Highlighter,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["design"],
    tags: [""]
  },
  {
    title: "History",
    icon: History,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M12 12h.01" /></svg>`,
    categories: ["time"],
    tags: [""]
  },
];