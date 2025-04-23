
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoplaySpeed?: number;
}

export const HeroSlider = ({ 
  slides, 
  autoplaySpeed = 5000 
}: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [slides, autoplaySpeed]);
  
  return (
    <div className="hero-slider-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "hero-slide",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 animate-fade-in">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-100" : "bg-white/50 scale-75"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
