import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Handshake,
  Target,
  Eye,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scrollToContact } from "@/utils/scrollToContact";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Zap,
      title: "Speed",
      description: "Launch faster, validate quicker.",
      gradient: "from-yellow-400/20 to-orange-400/20"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Architected for long-term growth.",
      gradient: "from-green-400/20 to-emerald-400/20"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Systems that don't break under pressure.",
      gradient: "from-blue-400/20 to-indigo-400/20"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We grow when our clients grow.",
      gradient: "from-purple-400/20 to-pink-400/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Speed, scalability, and reliability — the tech foundation every company deserves.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-12 md:p-16">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
                  devXworks was born from a simple belief: every ambitious idea deserves the technical foundation to succeed. 
                  We've seen too many startups struggle with technical debt, enterprises held back by legacy systems, 
                  and brilliant ideas that never reached their potential due to poor execution.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                  That's why we exist — to be the technology backbone that empowers startups and enterprises to turn 
                  their vision into reality. We combine cutting-edge technology with startup-focused thinking, 
                  delivering solutions that don't just work today, but scale for tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-12 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four principles that guide everything we build and every relationship we forge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/60 backdrop-blur-sm overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-4">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-muted-foreground text-base font-medium">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Mission */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl"></div>
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-6">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the technology backbone for startups and enterprises, delivering solutions 
                    that combine innovation with execution.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl"></div>
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-6">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every idea, big or small, can scale without limits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Have a project in mind?
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8">
            Let's build it together.
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to turn your vision into reality? We're here to provide the technical foundation 
            your success deserves.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            onClick={(e) => { 
              e.preventDefault(); 
              if (window.location.pathname !== "/") {
                window.location.href = "/#contact";
              } else {
                scrollToContact();
              }
            }}
          >
            <span className="inline-flex items-center gap-3">
              Get Started
              <ArrowRight className="w-6 h-6" />
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;