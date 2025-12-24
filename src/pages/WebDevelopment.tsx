import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Rocket, CheckCircle2, ArrowRight, Zap, Smartphone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Corporate Websites",
    description: "Establish strong brand authority with a premium corporate site. We focus on storytelling, ease of navigation, and presenting your services professionally to stakeholders.",
    features: ["CMS Integration", "Brand Strategy Alignment", "Investor Relations Portals"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Turn visitors into customers with high-performance online stores. We build secure, inventory-synced storefronts using Shopify, WooCommerce, or custom stacks.",
    features: ["Payment Gateway Setup", "Inventory Management", "Conversion Optimization"],
  },
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    description: "Maximize your ad spend with dedicated landing pages designed for speed and conversion. Perfect for product launches, lead magnets, and PPC campaigns.",
    features: ["A/B Testing Ready", "<1s Load Time", "Mobile-First Design"],
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop",
    tags: ["Architecture", "Portfolio Site"],
    title: "Luxe Interiors",
    description: "A minimalist, image-heavy portfolio website optimized for retina displays. Implemented with a headless CMS for easy updates.",
    techStack: ["Next.js", "Tailwind", "Sanity"],
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tags: ["Retail", "E-commerce"],
    title: "ShopEase Online",
    description: "Complete custom e-commerce build with Stripe integration, handling 10,000+ SKUs and providing a 99.9% uptime during Black Friday.",
    techStack: ["React", "Node.js", "Stripe"],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["SaaS", "Web App"],
    title: "FinTech Analytics Pro",
    description: "A complex single-page application (SPA) featuring real-time data visualization, user authentication, and report generation.",
    techStack: ["Vue.js", "Firebase", "D3.js"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    description: "We optimize every line of code. Our sites score 95+ on Google PageSpeed Insights, ensuring better SEO rankings and user retention.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Design",
    description: "We build mobile-first. Your website will look and function perfectly on desktops, tablets, and smartphones.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SSL implementation, secure authentication flows, and regular vulnerability scanning come standard with our development.",
  },
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "<1.5s", label: "Avg Load Time" },
  { value: "500+", label: "Websites Launched" },
  { value: "3X", label: "ROI Average" },
];

const processSteps = [
  { number: 1, title: "Discovery", description: "Analyzing market & competitors." },
  { number: 2, title: "Wireframe", description: "UX structure & user flows." },
  { number: 3, title: "Development", description: "Clean, semantic coding." },
  { number: 4, title: "QA & SEO", description: "Bug fixes & speed checks." },
  { number: 5, title: "Launch", description: "Deployment & support." },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            ⚡ WEB DEVELOPMENT EXPERTS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Building High-Performance
            <br />
            <span className="text-gradient">Web Experiences that Convert</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From lightning-fast landing pages to complex enterprise web applications, we
            engineer digital solutions tailored for your growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-started">
              <Button variant="hero" size="lg">Get a Quote</Button>
            </Link>
            <Button variant="heroOutline" size="lg">View Web Portfolio</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Web Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just write code; we build scalable, secure, and SEO-friendly web platforms
              tailored to your business model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Projects Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Our Recent Web Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                Award-winning websites delivered for global clients.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                →
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-navy-light rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Our Websites Outperform the Competition
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web Development Lifecycle
            </h2>
            <p className="text-muted-foreground">A structured approach to ensure on-time delivery and code quality.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-4 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-40">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
