import { 
  Code, 
  CheckCircle, 
  Brain,
  Smartphone, 
  Grid3x3,
  Database
} from "lucide-react";

const NewServices = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: (
        <>
          Custom Software<br />
          Development
        </>
      ),
      description: (
        <>
          Create <u>custom software</u> tailored for your unique needs, including <u>front-end</u>, and core back-end technology.
        </>
      )
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: (
        <>
          QA and<br />
          Testing
        </>
      ),
      description: (
        <>
          Make your technology <u>bulletproof</u>, with <u>manual and automated</u> testing.
        </>
      )
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: (
        <>
          AI and<br />
          Data Science
        </>
      ),
      description: (
        <>
          Use leading <u>AI</u>, <u>machine learning</u>, and data engineering technologies to unlock business value.
        </>
      )
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: (
        <>
          Mobile App<br />
          Development
        </>
      ), 
      description: (
        <>
          Build performant, <u>scalable</u>, and secure <u>mobile applications</u> for iOS and Android devices.
        </>
      )
    },
    {
      icon: <Grid3x3 className="w-8 h-8 text-teal-500" />,
      title: (
        <>
          UX/UI<br />
          Design
        </>
      ),
      description: (
        <>
          Create beautiful, <u>pixel-perfect</u>, and <u>easy-to-use designs</u> that delight your end users.
        </>
      )
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: (
        <>
          Platform and<br />
          Infrastructure
        </>
      ),
      description: (
        <>
          Ensure applications are <u>secure</u>, fault tolerant and highly available with our <u>DevOps</u> and Security engineers.
        </>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <h2 
              className="text-black leading-[48px]"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '48px',
                color: 'rgb(0, 0, 0)'
              }}
            >
              From Concept to Completion: Our Full-Stack 
              <span className="text-primary"> Expertise</span>.
            </h2>
          </div>
          <div className="hidden md:flex items-center text-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-lg font-medium mr-2">Everything we do</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 
                className="mb-4 group-hover:text-primary transition-colors"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '38px',
                  color: 'rgb(0, 0, 0)'
                }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'rgb(61, 71, 81)'
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
