import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import akamaiImg from "@/assets/akamai-logo-og-default.avif";
import jpmorganImg from "@/assets/jpmorgan-img.png";
import razorpayImg from "@/assets/razorpayimg.jpeg";
import sliceImg from "@/assets/sliceimg.webp";

const CaseStudies = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const featuredWork = [
    {
      id: "akamai",
      company: "Akamai",
      image: akamaiImg,
      title: "Global CDN Infrastructure Platform",
      description: "Built high-performance content delivery and security solutions"
    },
    {
      id: "netflix",
      company: "Slice",
      image: sliceImg,
      title: "Streaming Infrastructure",
      description: "Scalable video streaming and content delivery platform"
    },
    {
      id: "razorpay",
      company: "Razorpay", 
      image: razorpayImg,
      title: "Payment Gateway & Financial Services",
      description: "Developed secure payment processing and financial management tools"
    },
    {
      id: "jpmorgan",
      company: "JPMorgan",
      image: jpmorganImg, 
      title: "Enterprise Banking Solutions",
      description: "Created robust financial systems and trading platforms"
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
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {featuredWork.map((work, index) => {
              // Define different card heights for masonry effect
              const getCardHeight = (index: number) => {
                const heights = ['h-64', 'h-80', 'h-72', 'h-96'];
                return heights[index % heights.length];
              };

              return (
                <div 
                  key={work.id}
                  className={`group relative overflow-hidden rounded-2xl bg-card cursor-pointer transition-all duration-300 hover:shadow-[0_0_0_4px_white,_0_0_0_8px_black] break-inside-avoid mb-4 ${getCardHeight(index)}`}
                >
                  {/* Background Image Container */}
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={work.image}
                      alt={`${work.company} project`}
                      className={`w-full h-full ${work.id === 'razorpay' || work.id === 'jpmorgan' ? 'object-contain' : 'object-cover scale-90'}`}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    {/* Company Logo/Name - Hidden by default, visible on hover */}
                    <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                        {work.company}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2 mb-2">
                        {work.description}
                      </p>
                    </div>

                    {/* CTA - Always visible */}
                    <div className="flex items-center text-white group-hover:text-black transition-colors">
                      <span className="font-bold mr-2 text-lg">Case study</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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