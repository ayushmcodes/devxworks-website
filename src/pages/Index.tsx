import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { handleHashNavigation } from "@/utils/scrollToServices";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    handleHashNavigation();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;