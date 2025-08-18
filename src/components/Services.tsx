import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Server, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "MVP Development",
      description: "Transform your idea into a market-ready product. We build scalable MVPs that validate your concept and attract investors.",
      benefits: [
        "Rapid prototyping and validation",
        "User-centric design approach",
        "Agile development methodology",
        "Market-ready in 8-12 weeks"
      ]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description: "Robust, secure, and scalable backend systems that power your applications and handle millions of users seamlessly.",
      benefits: [
        "Microservices architecture",
        "API-first development",
        "Database optimization",
        "Enterprise-grade security"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "DevOps Services",
      description: "Streamline your deployment pipeline with modern DevOps practices that ensure reliability and continuous delivery.",
      benefits: [
        "CI/CD pipeline setup",
        "Cloud infrastructure management",
        "Monitoring and alerting",
        "Automated scaling solutions"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end technology solutions that scale with your business
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;