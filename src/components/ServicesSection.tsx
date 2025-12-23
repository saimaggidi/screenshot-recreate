import { Megaphone, Cloud, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, Search Engine Marketing, Content Ads, and More. Event & Strategy Management",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud Setup, Migration, Hosting, Security & Maintenance for scalable cloud solutions",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Corporate Websites, App Integrations, E-Commerce Plugins, and dynamic communication portals",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native Android & iOS apps and cross-platform solutions for iOS and Android platforms",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions designed to scale your business infrastructure and reach
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-blue-light flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
