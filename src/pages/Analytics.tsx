import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Calendar, Eye, Download, Filter } from "lucide-react";

const Analytics = () => {
  const metrics = [
    { label: "Total Events", value: "1,234", change: "+12%", trend: "up" },
    { label: "Active Users", value: "8,421", change: "+8%", trend: "up" },
    { label: "Registrations", value: "24,891", change: "+15%", trend: "up" },
    { label: "Engagement Rate", value: "87%", change: "+3%", trend: "up" }
  ];

  const topEvents = [
    { name: "AI/ML Hackathon 2024", registrations: 1234, category: "Hackathon", engagement: 94 },
    { name: "Web Dev Workshop", registrations: 856, category: "Workshop", engagement: 89 },
    { name: "Tech Conference 2024", registrations: 743, category: "Conference", engagement: 91 },
    { name: "Data Science Bootcamp", registrations: 621, category: "Workshop", engagement: 88 },
    { name: "Startup Pitch Event", registrations: 543, category: "Competition", engagement: 85 }
  ];

  const categoryData = [
    { category: "Hackathons", events: 45, percentage: 32 },
    { category: "Workshops", events: 38, percentage: 27 },
    { category: "Webinars", events: 32, percentage: 23 },
    { category: "Conferences", events: 25, percentage: 18 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">Track event performance and user engagement</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Events */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Events</CardTitle>
                <CardDescription>
                  Events with highest registration and engagement rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{event.name}</h4>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.registrations} registrations
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {event.engagement}% engagement
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">#{index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Event Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Event Categories</CardTitle>
                <CardDescription>
                  Distribution of events by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">{item.events} events</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>
                  Platform performance overview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Avg. Event Duration</span>
                    <span className="text-sm">2.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Peak Registration Time</span>
                    <span className="text-sm">2-4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Most Popular Category</span>
                    <span className="text-sm">Hackathons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">User Retention Rate</span>
                    <span className="text-sm">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
                <CardDescription>
                  Month-over-month growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">New Events</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">+23%</p>
                      <p className="text-xs text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-500" />
                      <span className="text-sm">New Users</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">+18%</p>
                      <p className="text-xs text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Engagement</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">+12%</p>
                      <p className="text-xs text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;