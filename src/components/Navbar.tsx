
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      isScrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-display text-xl md:text-2xl">
            Frame Focus
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn("nav-link", location.pathname === "/" && "active")}
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className={cn("nav-link", location.pathname === "/gallery" && "active")}
          >
            Gallery
          </Link>
          <Link 
            to="/about" 
            className={cn("nav-link", location.pathname === "/about" && "active")}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={cn("nav-link", location.pathname === "/contact" && "active")}
          >
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
