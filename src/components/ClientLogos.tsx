import akamaiLogo from "@/assets/akamai-logo.png";
import jpmorganLogo from "@/assets/jpmorgan-logo.png";
import razorpayLogo from "@/assets/razorpay-logo.png";
const ClientLogos = () => {
  const logos = [{
    src: akamaiLogo,
    alt: "Akamai"
  }, {
    src: jpmorganLogo,
    alt: "JPMorgan"
  }, {
    src: razorpayLogo,
    alt: "Razorpay"
  }];
  return <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-muted-foreground">Trusted by clients worldwide</h2>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => <div key={index} className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default ClientLogos;