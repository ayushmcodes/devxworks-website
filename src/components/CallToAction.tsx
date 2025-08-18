import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss your project and explore how we can help you achieve your goals. 
            Schedule a free consultation with our team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Schedule a Meeting
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;