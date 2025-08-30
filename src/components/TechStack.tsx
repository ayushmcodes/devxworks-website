const TechStack = () => {
  const technologies = [
    "C#", "Rails", "Node.js", "Java", "React", ".NET", "Python",
    "Android", "iOS", "Golang", "Vue.js", "C++", "JavaScript", "Swift", "Angular"
  ];

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

        {/* Technology Grid */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="select-none"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '32px',
                  lineHeight: '42px',
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
    </section>
  );
};

export default TechStack;
