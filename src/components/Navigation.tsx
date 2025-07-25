import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Search, User, Settings } from "lucide-react";
import eventRadarLogo from "@/assets/eventradaar-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Events", href: "#events", icon: Search },
    { label: "Calendar", href: "#calendar", icon: Calendar },
    { label: "Dashboard", href: "#dashboard", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={eventRadarLogo} alt="EventRadar" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EventRadar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="gradient" className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;