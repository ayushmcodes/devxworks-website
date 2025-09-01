import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MessageSquare } from "lucide-react";
import { CalendlyIframe } from "./CalendlyIframe";
import { CALENDLY_CONFIG, CONTACT_CONFIG, API_CONFIG } from "@/constants/config";
import contactPartnership from "@/assets/contact-partnership.jpg";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      projectDetails: formData.get("projectDetails") as string,
    };

    try {
      // Use appropriate endpoint based on environment
      const apiEndpoint = import.meta.env.DEV 
        ? API_CONFIG.CONTACT_ENDPOINT.DEV  // Local development
        : API_CONFIG.CONTACT_ENDPOINT.PROD;  // Production
      
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      toast({
        title: "Message sent successfully!",
        description: result.message || `We'll get back to you within ${CONTACT_CONFIG.RESPONSE_TIME}.`,
      });

      // Reset form
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact" tabIndex={-1}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactPartnership})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Choose how you'd like to connect with us - send a message or book a call directly.
            </p>
          </div>

          {/* Contact Options */}
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-0">
              <Tabs defaultValue="call" className="w-full">
                <div className="p-6 pb-0">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="call" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </TabsTrigger>
                    <TabsTrigger value="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Send Message
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="call" className="p-6">
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-semibold text-foreground">Schedule a call</h3>
                    <p className="text-muted-foreground">
                      Book a {CONTACT_CONFIG.CONSULTATION_DURATION.toLowerCase()} to discuss your project directly with our team.
                    </p>
                  </div>
                  
                  <div className="calendly-container overflow-hidden">
                    <CalendlyIframe 
                      url={CALENDLY_CONFIG.CONSULTATION_URL}
                      height={750}
                      className="bg-gray-50 rounded-lg"
                    />
                    
                    {/* Fallback direct link */}
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Prefer to open in a new tab? 
                      </p>
                      <a 
                        href={CALENDLY_CONFIG.CONSULTATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium underline"
                      >
                        Open calendar in new tab →
                      </a>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="message" className="p-6">
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-semibold text-foreground">Send us a message</h3>
                    <p className="text-muted-foreground">
                      Tell us about your project and we'll get back to you within {CONTACT_CONFIG.RESPONSE_TIME}.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="submitUserQuery">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name (optional)"
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDetails" className="text-foreground font-medium">
                    Project Details *
                  </Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="min-h-[120px] transition-smooth focus:shadow-glow resize-none"
                  />
                </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg py-6"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;