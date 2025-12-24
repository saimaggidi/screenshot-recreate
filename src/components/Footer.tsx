import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const footerServices = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Cloud Solutions", href: "/cloud-services" },
  { name: "Web Development", href: "/web-development" },
  { name: "App Development", href: "/app-development" },
];

const footerCompany = [
  { name: "About Us", href: "/#" },
  { name: "Our Work", href: "/#work" },
  { name: "Careers", href: "/#" },
  { name: "Contact", href: "/get-started" },
];

const footerLegal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">NextStepIT</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering businesses with cutting-edge technology solutions for tomorrow's challenges.
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

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLegal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 NextStepIT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed for Growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
