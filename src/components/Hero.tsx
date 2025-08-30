import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/utils/scrollToContact";
import heroBackground from "@/assets/home-hero-bg.jpg";

const Hero = () => {
  const engineerTypes = ["ai engineers", "data engineers", "backend engineers", "full stack engineers"];
  const [currentEngineerType, setCurrentEngineerType] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEngineerType((prev) => (prev + 1) % engineerTypes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [engineerTypes.length]);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bold Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            <span className="block">
              accelerate your product
            </span>
            <span className="block text-foreground">
              development with our
            </span>
              <div className="block text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 text-center">
                <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <div 
                    className="slide-up-text"
                    key={currentEngineerType}
                  >
                    {engineerTypes[currentEngineerType]}
                  </div>
                </div>
              </div>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We transform your ideas into scalable, high-performance applications. 
            From MVP to enterprise solutions, we deliver excellence at every stage.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="xl" 
              className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transform font-semibold text-xl border-0 shadow-elegant hover:shadow-glow" 
              type="button" 
              onClick={scrollToContact}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          className="relative block w-full h-20 md:h-24 lg:h-28" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,120 C720,40 720,40 1440,120 L1440,120 L0,120 Z" 
            fill="currentColor" 
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;