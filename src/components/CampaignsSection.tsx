import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const campaigns = [
  {
    title: "TechCorp Growth Strategy",
    category: "Video Campaign",
    views: "10.3K",
    likes: "4.4K",
    color: "from-purple-600 to-indigo-600",
    hasVideo: true,
  },
  {
    title: "ShopEase UX Redesign",
    category: "E-commerce App",
    views: "8.4K",
    likes: "2.1K",
    color: "from-emerald-500 to-teal-500",
    hasVideo: true,
  },
  {
    title: "Luxe Interiors Identity",
    category: "UI and Design",
    views: "12.1K",
    likes: "5.2K",
    color: "from-amber-500 to-orange-500",
    hasVideo: true,
  },
  {
    title: "FinTech Pro Interface",
    category: "SaaS Product",
    views: "7.8K",
    likes: "3.9K",
    color: "from-blue-600 to-cyan-500",
    hasVideo: true,
  },
];

const CampaignsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              MARKETING HIGHLIGHTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recent Campaigns & Reels
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore our best client growth showcases, app walkthroughs, and business stories presented on interactive formats
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="default" size="icon" className="rounded-full">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Campaigns Grid - Horizontal scroll on mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {campaigns.map((campaign) => (
            <div
              key={campaign.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-[260px] md:w-auto"
            >
              {/* Background */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${campaign.color} relative`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-300" />
                
                {/* Play button */}
                {campaign.hasVideo && (
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Play className="w-4 h-4 text-primary-foreground fill-current" />
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/80 text-primary-foreground rounded">
                      {campaign.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                    {campaign.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
                    <span>👁 {campaign.views}</span>
                    <span>❤ {campaign.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
