const TechStack = () => {
  const line1Technologies = ["C#", "Rails", "Node.js", "Java", "React", ".NET"];
  const line2Technologies = ["Python", "iOS", "Golang", "Vue.js", "JavaScript", "Swift"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
            Yes. We cover your tech stack.
          </h2>
          
          <p 
            className="max-w-lg mx-auto"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              color: 'rgb(104, 117, 128)'
            }}
          >
            Our team has expertise in almost every<br />
            programming language.
          </p>
        </div>

        {/* Technology Animation Lines */}
        <div className="relative overflow-hidden">
          {/* Line 1 - Moving Left */}
          <div className="relative overflow-hidden mb-4">
            <div 
              className="flex whitespace-nowrap animate-scroll-left"
              style={{ width: 'max-content' }}
            >
              {/* Duplicate content for seamless loop */}
              {[...line1Technologies, ...line1Technologies, ...line1Technologies].map((tech, index) => (
                <div
                  key={index}
                  className="select-none mx-4 md:mx-6 lg:mx-8"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '52px',
                    lineHeight: '64px',
                    color: 'rgba(108, 117, 125, 0.4)',
                    opacity: 0.6
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Line 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <div 
              className="flex whitespace-nowrap animate-scroll-right"
              style={{ width: 'max-content' }}
            >
              {/* Duplicate content for seamless loop */}
              {[...line2Technologies, ...line2Technologies, ...line2Technologies].map((tech, index) => (
                <div
                  key={index}
                  className="select-none mx-4 md:mx-6 lg:mx-8"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '52px',
                    lineHeight: '64px',
                    color: 'rgba(108, 117, 125, 0.4)',
                    opacity: 0.6
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
