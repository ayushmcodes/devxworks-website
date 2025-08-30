import { Button } from "@/components/ui/button";
import { Phone, Users, Rocket } from "lucide-react";
import { scrollToContact } from "@/utils/scrollToContact";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const ProcessSection = () => {
  const steps = [
    {
      number: "STEP 1",
      icon: <Phone className="w-6 h-6" />,
      title: "Join exploration call.",
      description: "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help."
    },
    {
      number: "STEP 2", 
      icon: <Users className="w-6 h-6" />,
      title: "Discuss solution and team structure.",
      description: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
    },
    {
      number: "STEP 3",
      icon: <Rocket className="w-6 h-6" />,
      title: "Get started and track performance.",
      description: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={heroWorkspace}
                alt="Professional working at laptop" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '40px',
                  lineHeight: '48px',
                  color: 'rgb(39, 46, 52)'
                }}
              >
                Our process.<br />
                Simple,<br />
                seamless,<br />
                streamlined.
              </h2>
            </div>

            {/* Steps */}
            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div 
                      className="text-sm font-medium text-gray-500 mb-2"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 500,
                        letterSpacing: '0.1em'
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 
                      className="mb-3"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '32px',
                        color: 'rgb(39, 46, 52)'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="leading-relaxed"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: 'rgb(104, 117, 128)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-start gap-4">
              {/* Empty space for icon alignment */}
              <div className="flex-shrink-0 w-12"></div>
              
              {/* Button aligned with step content */}
              <div className="flex-1">
                <Button 
                  className="text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                  style={{ 
                    backgroundColor: 'rgb(60, 131, 246)'
                  }}
                  onClick={scrollToContact}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
