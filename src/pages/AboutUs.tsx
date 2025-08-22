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
import heroWorkspace from "@/assets/hero-workspace.jpg";
import storyInnovation from "@/assets/story-innovation.jpg";
import missionGrowth from "@/assets/mission-growth.jpg";
import visionFuture from "@/assets/vision-future.jpg";

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
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroWorkspace})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    devXworks was born from a simple belief: every ambitious idea deserves the technical foundation to succeed. 
                    We've seen too many startups struggle with technical debt, enterprises held back by legacy systems, 
                    and brilliant ideas that never reached their potential due to poor execution.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    That's why we exist — to be the technology backbone that empowers startups and enterprises to turn 
                    their vision into reality. We combine cutting-edge technology with startup-focused thinking, 
                    delivering solutions that don't just work today, but scale for tomorrow.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={storyInnovation} 
                  alt="Innovation and startup journey" 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-pulse delay-500"></div>
        
        <div className="container mx-auto relative z-10">
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
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm h-full overflow-hidden">
                {/* Mission Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={missionGrowth} 
                    alt="Mission - Growth and Analytics" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
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
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm h-full overflow-hidden">
                {/* Vision Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={visionFuture} 
                    alt="Vision - Future Technology" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every idea, big or small, can scale without limits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="default" onClick={scrollToContact} className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;