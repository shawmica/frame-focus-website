
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain landscape",
    category: "landscape"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Mountain river",
    category: "landscape"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Deer in forest",
    category: "wildlife"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Forest sunlight",
    category: "landscape"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Pine trees",
    category: "landscape"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Foggy mountain",
    category: "landscape"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Woman with laptop",
    category: "portrait"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Laptop on desk",
    category: "lifestyle"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Woman on bed with laptop",
    category: "lifestyle"
  }
];

const Gallery = () => {
  const categories = ["landscape", "wildlife", "portrait", "lifestyle"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fade-in">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Browse through our collection of high-quality photographs across various categories.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
