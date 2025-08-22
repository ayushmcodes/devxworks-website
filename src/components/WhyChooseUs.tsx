import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, Users, Layers } from "lucide-react";
import whyChooseBg from "@/assets/why-choose-bg.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Faster Delivery with AI",
      description: "AI-assisted development to ship MVPs and features in weeks, not months."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Scalable from Day One",
      description: "Backends and DevOps built to grow effortlessly with your business."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Founder-Focused Approach",
      description: "We understand startup needs: speed, cost-efficiency, and user value."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "End-to-End Expertise",
      description: "From MVP to backend, DevOps, and AI — we cover the full tech stack."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whyChooseBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20" />
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose devXworks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another dev shop — we're your partner in building scalable, investor-ready products.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-0 overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {reason.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;