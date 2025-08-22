import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { scrollToContact } from "@/utils/scrollToContact";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we help startups and enterprises build scalable, investor-ready products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <a href="#case-studies">Explore Our Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fintech innovations to healthcare solutions, discover how we've helped our clients achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary border-primary/20"
                  >
                    {study.category}
                  </Badge>
                  <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardHeader className="space-y-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Tech Stack Preview */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {study.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          +{study.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button asChild variant="default" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={`/case-studies/${study.id}`} className="flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="default" asChild>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@devxworks.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
