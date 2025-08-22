import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb, TrendingUp, Code } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scrollToContact } from "@/utils/scrollToContact";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Back Button - Floating on image */}
        <div className="absolute top-6 left-4 md:left-8">
          <Button variant="secondary" size="sm" asChild className="bg-background/90 backdrop-blur-sm hover:bg-background">
            <Link to="/case-studies" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {caseStudy.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{caseStudy.client}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.description}
            </p>
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

      {/* Related Case Studies */}
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
                        View Case Study
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
              <Button size="lg" variant="default" asChild>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/case-studies">
                  View All Case Studies
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
