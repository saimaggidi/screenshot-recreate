import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, TabletSmartphone, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description: "Premium applications for the Apple ecosystem using Swift and SwiftUI. We ensure strict adherence to Human Interface Guidelines for a flawless user experience on iPhone, iPad, and WatchOS.",
    features: ["Swift & Objective-C", "UI/UX Design for iOS", "App Store Optimization"],
  },
  {
    icon: TabletSmartphone,
    title: "Android App Development",
    description: "Robust and scalable Android applications built with Kotlin and Java. We optimize for the diverse Android device ecosystem to reach the widest possible audience with high performance.",
    features: ["Kotlin & Java", "Material Design Implementation", "Google Play Deployment"],
  },
  {
    icon: Layers,
    title: "Cross-Platform Solutions",
    description: "One codebase, multiple platforms. Using Flutter and React Native, we deliver native-like performance on both iOS and Android while reducing development time and cost significantly.",
    features: ["Flutter & React Native", "Cost-Effective Development", "Fast Time-to-Market"],
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    tags: ["FinTech", "iOS & Android"],
    title: "WealthFlow Mobile",
    description: "A secure personal finance management app with real-time stock tracking and AI-driven investment insights.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tags: ["E-commerce", "Flutter"],
    title: "KartZone App",
    description: "A high-performance shopping app featuring AR product previews and seamless one-click checkout.",
  },
];

const processSteps = [
  { 
    number: 1, 
    title: "Discovery & Strategy", 
    description: "We start by understanding your idea, target audience, and business goals. We create a product roadmap, define feature sets, and select the right technology stack.",
    timeline: "Weeks 1-2"
  },
  { 
    number: 2, 
    title: "UI/UX Design", 
    description: "Our designers create wireframes and high-fidelity prototypes. We focus on intuitive navigation and stunning visuals to ensure users love engaging with your app.",
    timeline: "Weeks 3-4"
  },
  { 
    number: 3, 
    title: "Development", 
    description: "Our engineering team writes clean, scalable code. We work in sprints, providing you with regular builds to review progress and provide feedback.",
    timeline: "Weeks 5-10"
  },
  { 
    number: 4, 
    title: "Testing & Launch", 
    description: "Rigorous QA testing on multiple devices to squash bugs. We then handle the entire submission process to the Apple App Store and Google Play Store.",
    timeline: "Week 12+"
  },
];

const technologies = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Rails", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            ⚡ TOP-RATED MOBILE SOLUTIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Building High-Performance
            <br />
            <span className="text-gradient">Mobile Applications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From native iOS and Android apps to powerful cross-platform solutions. We turn
            your concepts into user-centric mobile experiences that scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-started">
              <Button variant="hero" size="lg">Discuss Your App Idea</Button>
            </Link>
            <Button variant="heroOutline" size="lg">View Portfolio</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom App Development Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build apps that are secure, scalable, and delightful to use.
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
                Featured Mobile Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                We've helped startups and enterprises launch successful apps across various industries.
              </p>
            </div>
            <Link to="/get-started" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-navy-light rounded-2xl overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
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
                  <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </button>
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
              Our App Development Lifecycle
            </h2>
            <p className="text-muted-foreground">A proven agile methodology designed for transparency and velocity.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start p-6 bg-white rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <span className="text-sm text-primary font-medium">{step.timeline}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">POWERED BY MODERN TECHNOLOGIES</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                <span className="font-medium text-foreground hidden sm:inline">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
