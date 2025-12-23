import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const navItems = ["Services", "Work", "Process", "Clients"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-muted/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">NextStepIT</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="default">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
