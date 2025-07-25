import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowRight
} from "lucide-react";
import eventRadarLogo from "@/assets/eventradaar-logo.png";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Events", href: "#events" },
      { label: "Calendar", href: "#calendar" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "API", href: "#api" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Press", href: "#press" },
      { label: "Partners", href: "#partners" }
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Status", href: "#status" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified about the latest events, features, and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="gradient" className="flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={eventRadarLogo} alt="EventRadar" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EventRadar
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate platform for discovering hackathons, webinars, internships, and professional events. 
              Never miss an opportunity again.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@eventradaar.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for the developer community</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-primary/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <IconComponent className="w-4 h-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 text-center text-xs text-muted-foreground border-t">
          <p>© 2024 EventRadar. All rights reserved. Built for hackathon showcase.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;