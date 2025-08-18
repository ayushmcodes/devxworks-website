import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">
              supertech<span className="text-primary">®</span>
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Button variant="nav" asChild>
                <a href="#services">Our Services</a>
              </Button>
              <Button variant="nav" asChild>
                <a href="#about">About Us</a>
              </Button>
              <Button variant="nav" asChild>
                <a href="#case-study">Case Study</a>
              </Button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" asChild>
              <a href="#blogs">Blogs</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;