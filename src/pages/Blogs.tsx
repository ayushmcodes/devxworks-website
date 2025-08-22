import { Button } from "@/components/ui/button";
import { ArrowLeft, PenTool, BookOpen, Rss } from "lucide-react";
import { Link } from "react-router-dom";
import devxLogo from "@/assets/devxlogo.png";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img 
            src={devxLogo} 
            alt="devXworks" 
            className="h-12 w-auto mr-3"
          />
          <h1 className="text-2xl font-bold text-foreground">
            devXworks
          </h1>
        </div>

        {/* Blog Icon */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <PenTool className="w-8 h-8 text-muted-foreground absolute top-4 right-8 rotate-12" />
          <Rss className="w-8 h-8 text-muted-foreground absolute bottom-4 left-8 -rotate-12" />
        </div>

        {/* Title and Description */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Our Blog
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Insights Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We're preparing thought-provoking articles, technical insights, industry trends, 
            and behind-the-scenes stories from our development journey. Subscribe to stay 
            updated with our latest posts.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>45%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{width: "45%"}}
            />
          </div>
        </div>

        {/* What's Coming */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          <div className="p-4 bg-card rounded-lg border">
            <PenTool className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Tech Articles</h3>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Industry Insights</h3>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <Rss className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Company Updates</h3>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card p-6 rounded-lg border mt-8">
          <h3 className="font-semibold text-foreground mb-2">Get Notified</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Be the first to read our articles when we launch our blog
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-3 py-2 text-sm border rounded-md bg-background"
              disabled
            />
            <Button size="sm" disabled>
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Coming soon - Email signup will be available shortly
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="default" size="lg" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:hello@devxworks.com" className="flex items-center gap-2">
              Contact Us
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-muted-foreground">
          <p>Have topic suggestions or want to contribute? Reach out at{" "}
            <a 
              href="mailto:hello@devxworks.com" 
              className="text-primary hover:underline"
            >
              hello@devxworks.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
