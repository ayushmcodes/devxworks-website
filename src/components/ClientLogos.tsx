import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";

const ClientLogos = () => {
  const logos = [
    { src: clientLogo1, alt: "Client 1" },
    { src: clientLogo2, alt: "Client 2" },
    { src: clientLogo3, alt: "Client 3" },
    { src: clientLogo4, alt: "Client 4" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-muted-foreground">
            Trusted by founders worldwide
          </h2>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;