import { useEffect } from "react";
import { Button } from "@/components/ui/button";

import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Target,
  Eye,
  Users,
  Calendar,
  Award,
  Globe,
  Code,
  Home,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
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



  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-start justify-start px-4 pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
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
                <span className="text-white">About Us</span>
              </nav>

              {/* Subtitle */}
              <div className="mb-6">
                <p className="text-sm tracking-widest uppercase text-white/80 font-semibold">
                  Company Story - Who We Are
                </p>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Building the Tech Backbone
                <br />
                for Tomorrow's Leaders<span className="text-primary">.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Speed, scalability, and reliability — the tech foundation every ambitious company deserves.
              </p>
            </div>

            {/* Right Content - Company Stats */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">30+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Story */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Our story<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  devXworks was born from a simple belief: every ambitious idea deserves the technical foundation to succeed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've seen too many startups struggle with technical debt, enterprises held back by legacy systems, 
                  and brilliant ideas that never reached their potential due to poor execution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's why we exist — to be the technology backbone that empowers startups and enterprises to turn 
                  their vision into reality. We combine cutting-edge technology with startup-focused thinking, 
                  delivering solutions that don't just work today, but scale for tomorrow.
                </p>
              </div>
            </div>
            
            {/* Right Content - Story Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <img 
                  src={storyInnovation} 
                  alt="Innovation and startup journey" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              By the numbers<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Results that speak for themselves — the foundation of trust with every client partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Projects Delivered */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Projects Delivered</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">50</span>+ projects
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Code className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-gray-800 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:bg-gray-900" 
                       style={{width: "85%"}}>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Across multiple industries</div>
              </div>
            </div>

            {/* Years Experience */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Years Experience</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">5</span>+ years
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-gray-800 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:bg-gray-900" 
                       style={{width: "75%"}}>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Deep expertise gained</div>
              </div>
            </div>

            {/* Happy Clients */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Happy Clients</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">30</span>+ clients
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-gray-800 rounded-full group-hover:bg-gray-900 transition-colors duration-300 delay-75" 
                         style={{animationDelay: `${index * 0.1}s`}}></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500">Long-term partnerships</div>
              </div>
            </div>

            {/* Success Rate */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Success Rate</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-3xl">99</span>% success
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Award className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-gray-800 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:bg-gray-900" 
                       style={{width: "99%"}}>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Project completion rate</div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Problem-Solution-Outcome Style Section for Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Our Mission */}
            <div className="bg-gray-50 p-8 lg:p-12 min-h-[400px]">
              <div className="h-full flex flex-col">
                {/* Fixed Header Section */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Our mission<span className="text-primary">.</span>
                  </h2>
                </div>
                
                {/* Flexible Content Section */}
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the technology backbone for startups and enterprises, delivering solutions 
                    that combine innovation with execution.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Empowering ambitious ideas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Building scalable foundations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Delivering reliable solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-12 min-h-[400px]">
              <div className="h-full flex flex-col">
                {/* Fixed Header Section */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Our vision<span className="text-white/80">.</span>
                  </h2>
                </div>
                
                {/* Flexible Content Section */}
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-white/90 leading-relaxed">
                    A world where every idea, big or small, can scale without limits — powered by technology that just works.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Unlimited scalability for all</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Global impact through tech</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Accessible innovation</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>

            {/* Our Approach */}
            <div className="bg-gray-900 p-8 lg:p-12 min-h-[400px]">
              <div className="h-full flex flex-col">
                {/* Fixed Header Section */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Our approach<span className="text-primary">.</span>
                  </h2>
                </div>
                
                {/* Flexible Content Section */}
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Startup mindset meets enterprise standards — delivering speed without compromising quality or security.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium">Rapid development cycles</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium">Built for scale from day one</span>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
                  
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to build something amazing?
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Let's turn your vision into reality.
            </p>
            <div className="mt-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Start Your Project
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