import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Server, Settings, Brain } from "lucide-react";
import aiSolutionsImg from "@/assets/ai-solutions.jpg";
import mvpDevelopmentImg from "@/assets/mvp-development.jpg";
import backendInfrastructureImg from "@/assets/backend-infrastructure.jpg";
import devopsCloudImg from "@/assets/devops-cloud.jpg";
import servicesHeroImg from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      image: aiSolutionsImg,
      title: "AI Solutions",
      description: "Integrate cutting-edge AI and machine learning capabilities to automate processes and unlock intelligent insights.",
      benefits: [
        "Custom AI agents tailored to your workflows",
        "Integrations with leading AI tools",
        "AI automation that cuts costs, reduces manual effort & improves efficiency",
      ]
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      image: mvpDevelopmentImg,
      title: "MVP Development",
      description: "Transform your idea into a market-ready product. We build scalable MVPs that validate your concept and attract investors.",
      benefits: [
        "Rapid prototyping that saves time & costs",
        "User-focused design for real customer adoption",
        "Agile development for faster market entry"
      ]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      image: backendInfrastructureImg,
      title: "Backend Development",
      description: "Robust, secure, and scalable backend systems that power your applications and handle millions of users seamlessly.",
      benefits: [
        "Clean, reliable API development for seamless integrations",
        "Optimized backend systems built for speed and growth",
        "Scalable architectures that evolve with your business",
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      image: devopsCloudImg,
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesHeroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-0 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
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