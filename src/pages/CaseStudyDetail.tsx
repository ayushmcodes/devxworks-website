import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb, TrendingUp, Code, Home, ChevronRight } from "lucide-react";
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
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center justify-start px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${caseStudy.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
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

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Project Overview */}
          <Card className="border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.overview}
              </p>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Our Approach */}
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Code className="w-6 h-6 text-blue-600" />
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {caseStudy.approach.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{approach}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50/50 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Code className="w-6 h-6 text-purple-600" />
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm py-2 px-4 border-purple-200 text-purple-700 bg-purple-50/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Our Work */}
      <section className="bg-secondary/30 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            More Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies
              .filter(study => study.id !== caseStudy.id)
              .slice(0, 3)
              .map((study) => (
                <Card key={study.id} className="group hover:shadow-lg transition-all duration-300 bg-card overflow-hidden">
                  {/* Small Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-primary border-primary/20 text-xs"
                    >
                      {study.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={`/case-studies/${study.id}`}>
                        View Our Work
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to start your project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="default" onClick={scrollToContact} className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/case-studies">
                  View All Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
