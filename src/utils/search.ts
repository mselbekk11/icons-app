import { IconData } from "~/data/data";

export function searchIcons(icons: IconData[], query: string): IconData[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return icons;

  return icons.filter((icon) => {
    const titleMatch = icon.title.toLowerCase().includes(searchTerm);
    const categoryMatch = icon.categories.some(category => 
      category.toLowerCase().includes(searchTerm)
    );
    const tagMatch = icon.tags.some(tag => 
      tag.toLowerCase().includes(searchTerm)
    );

    return titleMatch || categoryMatch || tagMatch;
  });
}