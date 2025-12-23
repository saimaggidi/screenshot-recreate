import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "FinTech Analytics Pro",
    category: "SaaS",
    tags: ["Dashboard", "Analytics"],
    description: "Enterprise business analytics dashboard for data-driven decision making",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "ShopEase Mobile",
    category: "App",
    tags: ["E-commerce", "Mobile"],
    description: "Seamless mobile shopping app with smart recommendations",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "TechCorp Growth",
    category: "Marketing",
    tags: ["Strategy", "SEO"],
    description: "200% organic traffic increase with brand new social and SEO strategy",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Luxe Interiors",
    category: "Web",
    tags: ["Design", "Development"],
    description: "Premium interior design showcase with immersive experience",
    color: "from-amber-500 to-yellow-500",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              What We Build
            </h2>
            <p className="text-muted-foreground">
              Selected works from our portfolio of digital projects
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full border-muted-foreground/30 text-muted-foreground hover:bg-muted/10 hover:text-primary-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-muted-foreground/30 text-muted-foreground hover:bg-muted/10 hover:text-primary-foreground">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`aspect-[4/5] bg-gradient-to-br ${item.color} p-6 flex flex-col justify-end`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                
                {/* Tags */}
                <div className="relative z-10 flex gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary-foreground/20 text-primary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
