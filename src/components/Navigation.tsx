import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/utils/scrollToContact";
import { scrollToServices } from "@/utils/scrollToServices";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === "/") {
      // Already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to homepage
      navigate("/");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="text-2xl font-extrabold text-blue-500">devXworks</span>
          </button>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Button variant="nav" onClick={scrollToServices}>
                Our Services
              </Button>
              <Button variant="nav" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="nav" asChild>
                <Link to="/our-work">Our Work</Link>
              </Button>
              <Button variant="nav" asChild>
                <Link to="/blogs">Blogs</Link>
              </Button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" onClick={scrollToContact}>Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => {
                  scrollToServices();
                  closeMobileMenu();
                }}
              >
                Our Services
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/our-work" onClick={closeMobileMenu}>Our Work</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link>
              </Button>
              <div className="pt-2">
                <Button 
                  variant="cta" 
                  className="w-full" 
                  onClick={() => {
                    scrollToContact();
                    closeMobileMenu();
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>;
};
export default Navigation;