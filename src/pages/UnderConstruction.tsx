import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import devxLogo from "@/assets/devxlogo.png";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img 
            src={devxLogo} 
            alt="devXworks" 
            className="h-12 w-auto mr-3"
          />
          <h1 className="text-2xl font-bold text-foreground">
            devXworks
          </h1>
        </div>

        {/* Construction Icon */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Construction className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <Wrench className="w-8 h-8 text-muted-foreground absolute top-4 right-8 rotate-12" />
        </div>

        {/* Title and Description */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Under Construction
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Case Studies Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We're crafting detailed case studies to showcase our work and client success stories. 
            Check back soon to see how we've helped businesses transform their ideas into reality.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{width: "75%"}}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="default" size="lg" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:hello@devxworks.com" className="flex items-center gap-2">
              Get Notified
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-muted-foreground">
          <p>Questions? Reach out to us at{" "}
            <a 
              href="mailto:hello@devxworks.com" 
              className="text-primary hover:underline"
            >
              hello@devxworks.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
