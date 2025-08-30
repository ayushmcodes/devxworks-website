import devxLogo from "@/assets/devxlogo.png";
import { Link } from "react-router-dom";
import { scrollToServices } from "@/utils/scrollToServices";

interface FooterLink {
  name: string;
  href: string;
  onClick?: () => void;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { name: "MVP Development", href: "#services", onClick: scrollToServices },
        { name: "Backend Development", href: "#services", onClick: scrollToServices },
        { name: "DevOps Services", href: "#services", onClick: scrollToServices },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Work", href: "/case-studies" },
        { name: "Blog", href: "/blogs" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "hello@devxworks.com", href: "mailto:hello@devxworks.com" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/devxwork/" },
      ]
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : link.onClick ? (
                      <button
                        onClick={(e) => { e.preventDefault(); link.onClick(); }}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm cursor-pointer bg-transparent border-none p-0 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Company Info */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <img 
                src={devxLogo} 
                alt="devXworks" 
                className="h-6 w-auto mr-2"
              />
              <h2 className="text-lg font-bold text-foreground">
                devXworks
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future, one product at a time.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 devXworks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;