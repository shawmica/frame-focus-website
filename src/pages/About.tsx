
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        {/* About Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
              alt="Photographer at work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-white">
            <h1 className="section-title animate-fade-in">About the Photographer</h1>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Photographer portrait" 
                  className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
                />
              </div>
              
              <div className="animate-slide-in">
                <h2 className="font-display text-3xl mb-6">The Story Behind the Lens</h2>
                <p className="text-muted-foreground mb-4">
                  Hello, I'm Alex Morgan, a professional photographer with over 10 years of experience 
                  capturing the beauty of our world. My journey with photography began when I was gifted 
                  my first camera at the age of 16, and I've been obsessed ever since.
                </p>
                <p className="text-muted-foreground mb-4">
                  My work has been featured in National Geographic, Outdoor Photography Magazine, and various 
                  online publications. I specialize in landscape, wildlife, and portrait photography, always 
                  seeking to find the perfect light and composition to tell a compelling story.
                </p>
                <p className="text-muted-foreground">
                  When I'm not behind the camera, you can find me hiking in the mountains, 
                  exploring new destinations, or teaching photography workshops to aspiring photographers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-20 px-6 md:px-12 bg-secondary">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="section-title animate-fade-in">My Photography Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              I believe that photography is about more than just taking pictures—it's about capturing emotions, 
              telling stories, and preserving moments that might otherwise be forgotten.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background p-8 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 8-2 2-6 6"/><path d="M8 14 8 16 10 16"/></svg>
                </div>
                <h3 className="font-display text-xl mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  I focus on capturing authentic moments that reflect genuine emotions and experiences.
                </p>
              </div>
              
              <div className="bg-background p-8 shadow-sm animate-fade-in delay-100">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v1"/><path d="M12 21v1"/><path d="M4.2 4.2l.78.78"/><path d="M19.02 19.02l.78.78"/><path d="M2 12h1"/><path d="M21 12h1"/><path d="M4.2 19.8l.78-.78"/><path d="M19.02 4.98l.78-.78"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <h3 className="font-display text-xl mb-4">Lighting</h3>
                <p className="text-muted-foreground">
                  I believe that great lighting is essential to creating impactful and evocative photography.
                </p>
              </div>
              
              <div className="bg-background p-8 shadow-sm animate-fade-in delay-200">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h.25A2.75 2.75 0 0 1 6 8.75v7.5A2.75 2.75 0 0 1 3.25 19H3"/><path d="M21 6h-.25A2.75 2.75 0 0 0 18 8.75v7.5a2.75 2.75 0 0 0 2.75 2.75H21"/><rect width="10" height="16" x="7" y="4" rx="2"/></svg>
                </div>
                <h3 className="font-display text-xl mb-4">Framing</h3>
                <p className="text-muted-foreground">
                  Thoughtful composition is key to guiding the viewer's eye and telling a compelling visual story.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Equipment Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12 animate-fade-in">My Equipment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="animate-fade-in">
                <h3 className="font-display text-2xl mb-4">Cameras</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Sony Alpha a7 IV</p>
                      <p className="text-sm">Primary camera for portraits and lifestyle shots</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Canon EOS R5</p>
                      <p className="text-sm">High-resolution camera for landscape photography</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Fujifilm X-T4</p>
                      <p className="text-sm">Compact camera for travel and street photography</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="animate-fade-in delay-100">
                <h3 className="font-display text-2xl mb-4">Lenses</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Sony 24-70mm f/2.8 GM</p>
                      <p className="text-sm">Versatile zoom lens for everyday shooting</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Canon RF 15-35mm f/2.8L IS USM</p>
                      <p className="text-sm">Ultra-wide angle lens for landscapes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Sigma 85mm f/1.4 DG HSM Art</p>
                      <p className="text-sm">Portrait lens with beautiful bokeh</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    <div>
                      <p className="font-medium text-foreground">Tamron 150-600mm f/5-6.3 Di VC USD G2</p>
                      <p className="text-sm">Super telephoto zoom for wildlife photography</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
