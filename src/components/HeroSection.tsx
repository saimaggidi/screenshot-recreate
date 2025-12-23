import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
  //   <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden"
  //   style={{
  //   backgroundImage: "url('/images/hero-bg.jpg')",
  //   }}
  // >
  //     {/* Background pattern */}
  //     <div className="absolute inset-0 opacity-30">
  //       <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
  //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
  //     </div>

  //     <div className="container mx-auto px-6 pt-24 relative z-10">
  //       <div className="max-w-4xl mx-auto text-center">
  //         {/* Badge */}
  //         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
  //           <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
  //           <span className="text-sm text-primary font-medium">Digital Marketing Pro Agency</span>
  //         </div>

  //         {/* Main heading */}
  //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
  //           Helping Businesses Take the{" "}
  //           <span className="text-gradient">Next Step</span> in Digital Growth
  //         </h1>

  //         {/* Subtitle */}
  //         <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
  //           Digital Marketing • Cloud Solutions • Web & App Development
  //         </p>

  //         {/* CTA buttons */}
  //         <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
  //           <Button variant="hero" size="lg">
  //             Get Free Consultation
  //           </Button>
  //           <Button variant="heroOutline" size="lg">
  //             View Our Work
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50 z-[1]" />

  {/* Background pattern */}
  <div className="absolute inset-0 opacity-30 z-[2]">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-6 pt-24 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-sm text-primary font-medium">
          Digital Marketing Pro Agency
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
        Helping Businesses Take the{" "}
        <span className="text-gradient">Next Step</span> in Digital Growth
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        Digital Marketing • Cloud Solutions • Web & App Development
      </p>

      {/* CTA */}
      <div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <Button variant="hero" size="lg">
          Get Free Consultation
        </Button>
        <Button variant="heroOutline" size="lg">
          View Our Work
        </Button>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
