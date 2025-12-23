import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Services: ["Digital Marketing", "Cloud Services", "Web Development", "App Development"],
  Company: ["About Us", "Our Work", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">NextStepIT</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering businesses with cutting-edge digital solutions and innovative technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 NextStepIT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed with ❤️ by NextStepIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
