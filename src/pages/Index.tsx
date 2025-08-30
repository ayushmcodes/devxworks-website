import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NewServices from "@/components/NewServices";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <NewServices />
      <TechStack />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;