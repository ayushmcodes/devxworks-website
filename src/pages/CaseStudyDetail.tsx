import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb, TrendingUp, Code, Home, ChevronRight, Calendar, Users, Zap } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scrollToContact } from "@/utils/scrollToContact";

const CaseStudyDetail = () => {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    // You can integrate with your backend or email service
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-start justify-start px-4 pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
      >
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm mb-8">
                <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">
                  Our Work
            </Link>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-white">{caseStudy.client}</span>
              </nav>

              {/* Subtitle */}
              <div className="mb-6">
                <p className="text-sm tracking-widest uppercase text-white/80 font-semibold">
                  {caseStudy.client} Case Study - {caseStudy.category}
                </p>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                {caseStudy.title.split(' – ')[1] || caseStudy.title}
              </h1>
            </div>

            {/* Right Content - Email Capture Form */}
            <div className="lg:justify-self-end w-full max-w-md">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Get this case study in PDF to your inbox.
                </h3>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg text-base"
                  >
                    Send
          </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Summary */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                The summary<span className="text-primary">.</span>
              </h2>
          <div className="space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {caseStudy.overview}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </div>
            
            {/* Right Content - Company Logo/Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <img 
                  src={caseStudy.image}
                  alt={`${caseStudy.client} logo`}
                  className={`w-full h-auto ${
                    caseStudy.id === 'razorpay' || caseStudy.id === 'jpmorgan' 
                      ? 'object-contain max-h-48' 
                      : 'object-contain max-h-64 rounded-2xl'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Engagement Length */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Project Duration</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">{caseStudy.id === 'akamai' ? '18' : 
                       caseStudy.id === 'slice' ? '12' : 
                       caseStudy.id === 'razorpay' ? '24' : '15'}</span> months
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-gray-800 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:bg-gray-900" 
                       style={{width: `${Math.min((caseStudy.id === 'akamai' ? 18 : 
                                                    caseStudy.id === 'slice' ? 12 : 
                                                    caseStudy.id === 'razorpay' ? 24 : 15) / 24 * 100, 100)}%`}}>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Long-term partnership</div>
              </div>
            </div>

            {/* Team Size */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Team Size</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">{caseStudy.id === 'akamai' ? '12' : 
                       caseStudy.id === 'slice' ? '8' : 
                       caseStudy.id === 'razorpay' ? '15' : '10'}</span> people
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {Array.from({ length: Math.min(caseStudy.id === 'akamai' ? 12 : 
                                                 caseStudy.id === 'slice' ? 8 : 
                                                 caseStudy.id === 'razorpay' ? 15 : 10, 10) }).map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-gray-800 rounded-full group-hover:bg-gray-900 transition-colors duration-300 delay-75" 
                         style={{animationDelay: `${index * 0.1}s`}}></div>
                  ))}
                  {(caseStudy.id === 'akamai' ? 12 : 
                    caseStudy.id === 'slice' ? 8 : 
                    caseStudy.id === 'razorpay' ? 15 : 10) > 10 && (
                    <div className="text-xs text-gray-500 ml-1">+{(caseStudy.id === 'akamai' ? 12 : 
                                                                      caseStudy.id === 'slice' ? 8 : 
                                                                      caseStudy.id === 'razorpay' ? 15 : 10) - 10}</div>
                  )}
                </div>
                <div className="text-xs text-gray-500">Dedicated developers</div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Technology Stack</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">{caseStudy.techStack.length}</span> technologies
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {(caseStudy.id === 'akamai' ? ['C++', 'Python', 'K8s'] : 
                    caseStudy.id === 'slice' ? ['Node.js', 'AWS', 'PostgreSQL'] : 
                    caseStudy.id === 'razorpay' ? ['Java', 'React', 'AWS'] : ['Java', 'React', 'K8s']).map((tech, index) => (
                    <div key={tech} className="flex items-center">
                      <span className="px-1.5 py-0.5 bg-gray-50 text-xs font-medium text-gray-700 rounded group-hover:bg-gray-100 transition-colors duration-300">
                        {tech}
                      </span>
                      {index < 2 && <div className="w-1 h-1 bg-gray-300 rounded-full mx-1"></div>}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500">Modern tech stack</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem-Solution-Outcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Problem Statement */}
            <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-start min-h-[400px]">
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-auto"></div>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    The challenge<span className="text-primary">.</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {caseStudy.overview}
                    </p>
                    <div className="space-y-3">
                      {caseStudy.challenges.slice(0, 3).map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-gray-700">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-auto"></div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-12 flex flex-col justify-start min-h-[400px]">
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-auto"></div>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    The solution<span className="text-white/80">.</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-white/90 leading-relaxed">
                      {caseStudy.client} chose our expertise to tackle these complex challenges. We provided a comprehensive approach combining cutting-edge technology with proven methodologies.
                    </p>
                    <div className="space-y-3">
                      {caseStudy.approach.slice(0, 3).map((approach, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-white/90">{approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-auto"></div>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-gray-900 p-8 lg:p-12 flex flex-col justify-start min-h-[400px]">
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-auto"></div>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    The outcome<span className="text-primary">.</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Our collaboration delivered exceptional results, exceeding expectations and establishing a foundation for continued growth and success.
                    </p>
                    <div className="space-y-4">
                      {caseStudy.results.slice(0, 3).map((result, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-auto"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
