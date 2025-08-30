import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import devopsCloud from "@/assets/devops-cloud.jpg";
import fintechUpi from "@/assets/fintech-upi.jpg";
import backendInfrastructure from "@/assets/backend-infrastructure.jpg";
import aiSolutions from "@/assets/ai-solutions.jpg";

const CaseStudies = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const featuredWork = [
    {
      id: "akamai",
      company: "Akamai",
      image: devopsCloud,
      title: "Global CDN Infrastructure Platform",
      description: "Built high-performance content delivery and security solutions",
      size: "shape1" // reference size (standard)
    },
    {
      id: "netflix",
      company: "Netflix",
      image: aiSolutions,
      title: "Streaming Infrastructure",
      description: "Scalable video streaming and content delivery platform",
      size: "shape2" // smaller width
    },
    {
      id: "razorpay",
      company: "Razorpay", 
      image: fintechUpi,
      title: "Payment Gateway & Financial Services",
      description: "Developed secure payment processing and financial management tools",
      size: "shape1" // same as akamai
    },
    {
      id: "jpmorgan",
      company: "JPMorgan",
      image: backendInfrastructure, 
      title: "Enterprise Banking Solutions",
      description: "Created robust financial systems and trading platforms",
      size: "shape2" // smaller width
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Over 10 Years of
              <br />
              Over Delivering<span className="text-primary">.</span>
            </h1>
          </div>
          
          {/* Stats */}
          <div className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
              500+ active clients with an average relationship of over 3 years. And a 96% retention rate.
            </p>
          </div>

          {/* Featured Work Cards - Pinterest Style Masonry */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 lg:gap-6">
            {featuredWork.map((work) => {
              // Define different card sizes
              const getSizeClasses = (size: string) => {
                switch (size) {
                  case 'shape1':
                    return 'row-span-2 col-span-1 sm:col-span-2 lg:col-span-2'; // standard size (reference - akamai size)
                  case 'shape2':
                    return 'row-span-2 col-span-1 sm:col-span-1 lg:col-span-1'; // smaller width, same height
                  default:
                    return 'row-span-2 col-span-1 sm:col-span-2 lg:col-span-2';
                }
              };

              return (
                <div 
                  key={work.id}
                  className={`group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer ${getSizeClasses(work.size)}`}
                >
                  {/* Background Image */}
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={work.image}
                      alt={`${work.company} project`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className={`absolute inset-0 ${work.size === 'shape2' ? 'p-3 sm:p-4' : 'p-4 sm:p-6'} flex flex-col justify-end`}>
                    {/* Company Logo/Name */}
                    <div className="mb-3">
                      <h3 className={`font-bold text-white mb-1 ${work.size === 'shape2' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl md:text-2xl'}`}>
                        {work.company}
                      </h3>
                      {(work.size === 'shape1') && (
                        <p className="text-white/80 text-xs sm:text-sm line-clamp-2 mb-2">
                          {work.description}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-white group-hover:text-primary transition-colors">
                      <span className={`font-medium mr-2 ${work.size === 'shape2' ? 'text-sm' : 'text-base'}`}>Case study</span>
                      <ArrowRight className={`group-hover:translate-x-1 transition-transform ${work.size === 'shape2' ? 'w-4 h-4' : 'w-5 h-5'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;