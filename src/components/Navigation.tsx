import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Bell, BarChart3, Brain, Globe, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import eventRadarLogo from "@/assets/eventradaar-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: null },
    { name: "Calendar", path: "/calendar", icon: Calendar },
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "AI Recommendations", path: "/recommendations", icon: Brain },
    { name: "Global Reach", path: "/global", icon: Globe },
    { name: "Admin Portal", path: "/admin", icon: Settings }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={eventRadarLogo} alt="EventRadar" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EventRadar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.name}
                </Link>
              );
            })}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Button variant="gradient" className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;