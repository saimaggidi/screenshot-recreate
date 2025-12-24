import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cloud, RefreshCw, Shield, Settings, CheckCircle2, ArrowRight, TrendingUp, DollarSign, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description: "We architect and deploy custom cloud environments on AWS, Azure, or Google Cloud. Our setups prioritize high availability, fault tolerance, and cost optimization from day one.",
    features: ["Multi-cloud architecture", "Automated provisioning"],
  },
  {
    icon: RefreshCw,
    title: "Seamless Cloud Migration",
    description: "Move your legacy systems to the cloud with zero downtime. We handle the complex logistics of data transfer, application refactoring, and database migration.",
    features: ["Zero-downtime strategy", "Legacy app modernization"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your critical data with enterprise-grade security protocols. We ensure compliance with GDPR, HIPAA, and SOC2 standards through rigorous monitoring and encryption.",
    features: ["24/7 Threat monitoring", "Automated backups"],
  },
  {
    icon: Settings,
    title: "DevOps & Maintenance",
    description: "Continuous integration and delivery pipelines to speed up your release cycles. We provide round-the-clock maintenance to ensure peak performance.",
    features: ["CI/CD Pipeline setup", "Performance optimization"],
  },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    category: "FINTECH SECTOR",
    icon: Cloud,
    title: "DataFlow Secure Migration",
    description: "Migrated a legacy financial database to AWS, resulting in 50% faster query times and complete SOC2 compliance.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    category: "E-COMMERCE",
    icon: RefreshCw,
    title: "ShopEase Auto-Scaling",
    description: "Implemented Kubernetes auto-scaling for a major retailer, handling 10x traffic spikes during Black Friday with zero downtime.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    category: "HEALTHCARE",
    icon: Shield,
    title: "MediCloud HIPAA Hosting",
    description: "Built a secure, private cloud environment for patient records, ensuring full regulatory compliance and 24/7 availability.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Scalability on Demand",
    description: "Scale up during peak traffic and scale down during quiet periods to optimize costs.",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Pay only for what you use. Eliminate the need for expensive on-premise hardware.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your data and applications securely from anywhere in the world.",
  },
];

const CloudServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            ⚡ ENTERPRISE CLOUD SOLUTIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Scale Without Limits using
            <br />
            <span className="text-gradient">Next-Gen Cloud Infrastructure</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Seamless migration, robust security, and scalable hosting tailored for modern
            businesses. We manage the cloud so you can manage your growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-started">
              <Button variant="hero" size="lg">Schedule a Free Assessment</Button>
            </Link>
            <Button variant="heroOutline" size="lg">Explore Services</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial setup to ongoing maintenance, we provide end-to-end cloud solutions
              designed for performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Move to Cloud Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Why Move to the Cloud?
              </h2>
              <p className="text-muted-foreground mb-8">
                Modern businesses require agility. Our cloud solutions empower you to scale resources instantly, reduce IT overhead, and focus on innovation rather than maintenance.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-light rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </div>
              <div className="bg-navy-light rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Avg. Cost Reduction</p>
              </div>
              <div className="col-span-2 bg-navy-light rounded-2xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Faster Deployment Times</span>
                  <span className="text-primary font-bold">85%</span>
                </div>
                <div className="h-3 bg-navy rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Cloud Success Stories
              </h2>
              <p className="text-muted-foreground mt-2">Real results for real businesses.</p>
            </div>
            <Link to="/get-started" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <study.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{study.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{study.description}</p>
                  <button className="text-foreground font-semibold text-sm hover:text-primary transition-colors">
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServices;
