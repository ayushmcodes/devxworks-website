import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/utils/scrollToContact";

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bold Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Build Your Next
            <span className="block text-primary bg-gradient-primary bg-clip-text text-transparent">
              Breakthrough Product
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We transform your ideas into scalable, high-performance applications. 
            From MVP to enterprise solutions, we deliver excellence at every stage.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" type="button" onClick={scrollToContact}>
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;