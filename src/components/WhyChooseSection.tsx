import { Target, MessageSquare, Clock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Result Driven Approach",
    description: "We don't just build software, we build solutions that impact your bottom line.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Weekly updates and direct access to your project manager.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and follow agile methodologies to keep on track.",
  },
];

const stats = [
  { value: "300%", label: "Avg Growth Rate" },
  { value: "50+", label: "Enterprise Projects" },
  { value: "99.9%", label: "Service Availability" },
  { value: "24/7", label: "Support Available" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Industry Leaders Choose{" "}
              <span className="text-primary">NextStepIT</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
