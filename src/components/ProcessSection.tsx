const processSteps = [
  {
    number: "1",
    title: "Requirement",
    description: "We gather, analyze and define all project details & goals.",
  },
  {
    number: "2",
    title: "Strategy",
    description: "Planning the roadmap and tech stack required.",
  },
  {
    number: "3",
    title: "Design & Dev",
    description: "Build the solution with user experience first in mind.",
  },
  {
    number: "4",
    title: "Testing",
    description: "Rigorous quality QA, performance & security testing.",
  },
  {
    number: "5",
    title: "Delivery",
    description: "Live deployment and ongoing support.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A transparent workflow from concept to delivery
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Number circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-background border-2 border-border flex items-center justify-center group hover:border-primary transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
