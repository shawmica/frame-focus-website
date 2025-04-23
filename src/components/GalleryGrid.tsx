
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export const GalleryGrid = ({ images, categories = [] }: GalleryGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);
    
  const allCategories = ["all", ...categories];
  
  return (
    <div>
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 text-sm capitalize transition-colors",
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="gallery-grid animate-fade-in">
        {filteredImages.map(image => (
          <div key={image.id} className="gallery-item aspect-[3/4]">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
