import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NewServices from "@/components/NewServices";
import TechStack from "@/components/TechStack";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { handleHashNavigation } from "@/utils/scrollToServices";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts (e.g., coming from /#contact)
    handleHashNavigation();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <NewServices />
      <TechStack />
      <ProcessSection />
      <TeamSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;