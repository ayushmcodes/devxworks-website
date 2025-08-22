import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import devxLogo from "@/assets/devxlogo.png";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center px-4 py-16">
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

          {/* Team Icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-16 h-16 text-primary animate-pulse" />
            </div>
            <Target className="w-8 h-8 text-muted-foreground absolute top-4 right-8 rotate-12" />
            <Lightbulb className="w-8 h-8 text-muted-foreground absolute bottom-4 left-8 -rotate-12" />
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              About Us
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Our Story Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              We're preparing a comprehensive story about our journey, team, mission, and the values 
              that drive us to build exceptional digital products. Stay tuned to learn more about 
              the people behind devXworks.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-sm mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{width: "60%"}}
              />
            </div>
          </div>

          {/* What's Coming */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="p-4 bg-card rounded-lg border">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Our Team</h3>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Our Mission</h3>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Our Values</h3>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 text-sm text-muted-foreground">
            <p>Want to know more about us? Drop us a line at{" "}
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
      <Footer />
    </div>
  );
};

export default AboutUs;