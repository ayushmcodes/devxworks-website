import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, Users, Layers } from "lucide-react";

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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Supertech
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
              className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {reason.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
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