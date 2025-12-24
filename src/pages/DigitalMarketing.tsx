import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Share2, Target, Palette, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results with our technical and content-driven SEO strategies. We optimize your site structure, build high-authority backlinks, and create content that ranks.",
    features: ["Keyword Strategy & Research", "Technical SEO Audits", "Link Building & Outreach"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a loyal community and amplify your brand voice. We create engaging content calendars, manage communities, and drive brand awareness across all major platforms.",
    features: ["Content Creation & Curation", "Community Management", "Influencer Collaborations"],
  },
  {
    icon: Target,
    title: "Performance Advertising (PPC)",
    description: "Maximize your ROI with targeted ad campaigns. From Google Ads to Facebook & LinkedIn advertising, we optimize every cent of your budget for conversions.",
    features: ["Google Search & Display Ads", "Social Media Paid Acquisition", "Retargeting Campaigns"],
  },
  {
    icon: Palette,
    title: "Branding & Strategy",
    description: "Define who you are. We help you articulate your value proposition, design your visual identity, and position your brand to resonate with your target audience.",
    features: ["Logo & Visual Identity", "Brand Voice & Messaging", "Market Positioning"],
  },
];

const stats = [
  { value: "$50M+", label: "Revenue Generated" },
  { value: "300%", label: "Avg. Traffic Growth" },
  { value: "12k+", label: "Leads Delivered" },
  { value: "40%", label: "Lower CPA" },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["E-COMMERCE", "PPC"],
    title: "Scaling FreshFashion to $2M/Year",
    description: "Through aggressive Facebook Ads and Google Shopping campaigns, we helped FreshFashion achieve a 4.5x ROAS and double their yearly revenue.",
    metrics: [
      { value: "450%", label: "ROAS" },
      { value: "2x", label: "Revenue" },
      { value: "-30%", label: "CPA" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    tags: ["SAAS", "SEO"],
    title: "TechCorp's Organic Growth Engine",
    description: "A complete content strategy overhaul focused on bottom-of-funnel keywords led to a massive increase in organic demo requests for this B2B SaaS.",
    metrics: [
      { value: "+300%", label: "Traffic" },
      { value: "1.5k", label: "New Leads" },
      { value: "#1", label: "Rankings" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    tags: ["BRANDING", "SOCIAL"],
    title: "Rebranding UrbanEats",
    description: "We refreshed the visual identity and launched a viral social media campaign that revitalized this food delivery startup's market presence.",
    metrics: [
      { value: "1M+", label: "Impressions" },
      { value: "+50k", label: "Followers" },
      { value: "+25%", label: "App Installs" },
    ],
  },
];

const processSteps = [
  { number: 1, title: "Audit", description: "Analyzing your current market position & gaps." },
  { number: 2, title: "Strategy", description: "Creating a custom roadmap for your KPIs." },
  { number: 3, title: "Execution", description: "Launching campaigns & creating content." },
  { number: 4, title: "Optimization", description: "A/B testing and data-driven tweaking." },
  { number: 5, title: "Scaling", description: "Expanding reach and increasing budgets." },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            ⚡ DATA-DRIVEN GROWTH
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Scale Your Brand with
            <br />
            <span className="text-gradient">Precision Marketing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We turn traffic into revenue through SEO, PPC, Social Media, and strategic
            branding that puts your business on the map.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-started">
              <Button variant="hero" size="lg">Get Free Strategy Call</Button>
            </Link>
            <Button variant="heroOutline" size="lg">View Success Stories</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Digital Marketing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just run ads; we build comprehensive ecosystems that drive sustainable growth.
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

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">OUR PORTFOLIO</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
                Digital Success Stories
              </h2>
              <p className="text-muted-foreground mt-2">
                Real results for real businesses. See how we've helped companies scale.
              </p>
            </div>
            <Link to="/get-started" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-navy rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-muted/20">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Marketing Methodology
            </h2>
            <p className="text-muted-foreground">A systematic approach to predictable growth.</p>
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

export default DigitalMarketing;
