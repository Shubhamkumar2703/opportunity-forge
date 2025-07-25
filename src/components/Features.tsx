import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  Calendar, 
  Bell, 
  BarChart, 
  Users, 
  Brain,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Unified Event Feed",
      description: "Aggregates events from multiple platforms in a clean, chronological format.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Filter by type, mode, date range, and skills. Find exactly what you need.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Visual calendar view with Google Calendar sync and smart scheduling.",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Email, in-app, and push notifications for events you care about.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track engagement, popularity metrics, and your participation history.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Admin Portal",
      description: "Verified organizations can post events and track registrations.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Smart recommendations based on your interests and participation history.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Discover events worldwide with multi-language support coming soon.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Never Miss Out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EventRadar provides comprehensive tools to discover, track, and participate in opportunities that matter to your growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-3 text-white font-medium shadow-medium hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
            <span>Ready to get started?</span>
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;