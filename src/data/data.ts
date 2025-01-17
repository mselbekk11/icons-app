
import One from "~/components/icons/1";
import Two from "~/components/icons/2";
import Three from "~/components/icons/3";
import Four from "~/components/icons/4";
import Five from "~/components/icons/5";

export interface IconData {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  categories: string[];
  tags: string[];
}

// Export the data as an array
export const Data: IconData[] = [
  { 
    title: "Alarm Clock", 
    icon: One,
    categories: ["one", "two", "three"],
    tags: ["morning"]
  },
  { 
    title: "Apple", 
    icon: Two,
    categories: ["one", "four", "seven"],
    tags: ["fruit", "food"] // Example categories
  },
  { 
    title: "Anchor", 
    icon: Three,
    categories: ["seven", "one", "eight"],
    tags: ["ship"]
  },
  { 
    title: "Atom", 
    icon: Four,
    categories: ["three", "four", "five","seven", "one", "eight"],
    tags: ["atomic","nuclear","physics","particle","element","molecule","electricity","energy","chemistry"]
  },
  { 
    title: "Badge Dollar Sign", 
    icon: Five,
    categories: ["two", "three", "seven", "five"],
    tags: ["atomic","nuclear","physics","particle","element","molecule","electricity","energy","chemistry"]
  },

];