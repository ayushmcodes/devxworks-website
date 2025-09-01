import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/utils/scrollToContact";
import { QuickScheduleButton } from "./CalendlyComponents";
import { CALENDLY_CONFIG } from "@/constants/config";

const TeamSection = () => {
  const teamMembers = [
    {
      role: "Software developers",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-200"
    },
    {
      role: "QA engineers", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-purple-200"
    },
    {
      role: "UX designers",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-blue-200"
    },
    {
      role: "Data scientists",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-green-200"
    },
    {
      role: "Project managers",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Members */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Human photo with background shape */}
              <div className="relative mb-6">
                <div 
                  className={`absolute inset-0 w-32 h-32 md:w-40 md:h-40 ${member.bgColor} rounded-full transform rotate-45 opacity-30`}
                  style={{ top: '-10px', left: '-10px' }}
                />
                <img 
                  src={member.image}
                  alt={member.role}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Role */}
              <h3 
                className="max-w-24 md:max-w-32 mx-auto"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(108, 117, 125)',
                  textAlign: 'center'
                }}
              >
                {member.role}
              </h3>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '60px',
              color: 'rgb(115, 115, 115)',
              textAlign: 'center'
            }}
          >
            Let's assemble your team.
          </h2>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuickScheduleButton
              url={CALENDLY_CONFIG.CONSULTATION_URL}
              text="Schedule a Call"
              className="text-xl px-12 py-6"
              prefill={CALENDLY_CONFIG.DEFAULT_PREFILL}
              utm={{
                utmCampaign: CALENDLY_CONFIG.UTM_CAMPAIGNS.TEAM_SECTION,
                utmMedium: 'website'
              }}
            />
            <Button
              variant="outline"
              className="text-xl px-12 py-6 font-semibold"
              onClick={scrollToContact}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
