const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "MVP Development", href: "#services" },
        { name: "Backend Development", href: "#services" },
        { name: "DevOps Services", href: "#services" },
        { name: "Consulting", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Case Studies", href: "#case-study" },
        { name: "Blog", href: "#blogs" },
        { name: "Careers", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "hello@supertech.dev", href: "mailto:hello@supertech.dev" },
        { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
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
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Company Info */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-foreground">
              supertech<span className="text-primary">®</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future, one product at a time.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 supertech®. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;