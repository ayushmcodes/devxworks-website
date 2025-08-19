const BookACall = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a time that works for you. We'll discuss your project and how Supertech can help.
          </p>
        </div>
        
        {/* Calendly Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden border border-border/50 shadow-lg">
            <iframe 
              src="https://calendly.com/ayushmalik24/30min" 
              width="100%" 
              height="600" 
              frameBorder="0"
              className="w-full h-[600px] md:h-[700px]"
              title="Schedule a consultation with Supertech"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookACall;