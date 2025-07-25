import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Users, Calendar, TrendingUp, Clock, Building, Award } from "lucide-react";

const GlobalReach = () => {
  const globalStats = [
    { label: "Countries", value: "45+", icon: Globe },
    { label: "Cities", value: "200+", icon: MapPin },
    { label: "Global Users", value: "50K+", icon: Users },
    { label: "International Events", value: "1.2K+", icon: Calendar }
  ];

  const popularRegions = [
    { region: "North America", events: 342, growth: "+23%", flag: "🇺🇸" },
    { region: "Europe", events: 289, growth: "+18%", flag: "🇪🇺" },
    { region: "Asia Pacific", events: 256, growth: "+35%", flag: "🌏" },
    { region: "Latin America", events: 134, growth: "+28%", flag: "🌎" },
    { region: "Middle East & Africa", events: 98, growth: "+42%", flag: "🌍" }
  ];

  const featuredEvents = [
    {
      title: "Global Tech Summit 2024",
      location: "San Francisco, CA",
      attendees: "2,500+",
      timezone: "PST",
      type: "Conference",
      virtual: true,
      languages: ["English", "Spanish", "Mandarin"]
    },
    {
      title: "European Startup Pitch",
      location: "Berlin, Germany",
      attendees: "800+",
      timezone: "CET",
      type: "Competition",
      virtual: false,
      languages: ["English", "German", "French"]
    },
    {
      title: "Asia-Pacific DevCon",
      location: "Singapore",
      attendees: "1,200+",
      timezone: "SGT",
      type: "Conference",
      virtual: true,
      languages: ["English", "Japanese", "Korean"]
    }
  ];

  const partnerships = [
    { name: "Global University Network", type: "Education", members: "500+ universities" },
    { name: "Tech Giants Alliance", type: "Corporate", members: "50+ companies" },
    { name: "Startup Incubators", type: "Innovation", members: "200+ incubators" },
    { name: "Government Initiatives", type: "Public", members: "25+ countries" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            Global Reach
          </h1>
          <p className="text-muted-foreground">Connecting opportunities across continents and cultures</p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {globalStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-6">
                <stat.icon className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Regional Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Regional Performance</CardTitle>
                <CardDescription>
                  Event distribution and growth across global regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularRegions.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{region.flag}</span>
                        <div>
                          <h4 className="font-medium">{region.region}</h4>
                          <p className="text-sm text-muted-foreground">{region.events} events</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {region.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured International Events */}
            <Card>
              <CardHeader>
                <CardTitle>Featured International Events</CardTitle>
                <CardDescription>
                  Upcoming global events with multilingual support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredEvents.map((event, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{event.title}</h4>
                            <Badge variant="outline">{event.type}</Badge>
                            {event.virtual && (
                              <Badge variant="secondary">Virtual</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees} attendees
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.timezone}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {event.languages.map((lang, langIndex) => (
                            <Badge key={langIndex} variant="secondary" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Global Partnerships */}
            <Card>
              <CardHeader>
                <CardTitle>Global Partnerships</CardTitle>
                <CardDescription>
                  Our worldwide network of collaborators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partnerships.map((partnership, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="h-4 w-4 text-primary" />
                        <h4 className="font-medium text-sm">{partnership.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{partnership.members}</p>
                      <Badge variant="outline" className="text-xs">
                        {partnership.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Zones */}
            <Card>
              <CardHeader>
                <CardTitle>Live Event Times</CardTitle>
                <CardDescription>
                  Current time in major event hubs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { city: "San Francisco", time: "10:30 AM", zone: "PST" },
                    { city: "New York", time: "1:30 PM", zone: "EST" },
                    { city: "London", time: "6:30 PM", zone: "GMT" },
                    { city: "Singapore", time: "2:30 AM", zone: "SGT" },
                    { city: "Tokyo", time: "3:30 AM", zone: "JST" }
                  ].map((timezone, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{timezone.city}</span>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{timezone.time}</p>
                        <p className="text-xs text-muted-foreground">{timezone.zone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Language Support */}
            <Card>
              <CardHeader>
                <CardTitle>Multilingual Support</CardTitle>
                <CardDescription>
                  Platform available in multiple languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "🇺🇸 English", "🇪🇸 Español", "🇫🇷 Français", "🇩🇪 Deutsch",
                    "🇨🇳 中文", "🇯🇵 日本語", "🇰🇷 한국어", "🇮🇳 हिंदी"
                  ].map((language, index) => (
                    <Badge key={index} variant="outline" className="justify-center text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Global Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Global Impact</CardTitle>
                <CardDescription>
                  Our contribution to the global tech community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Awards Won</span>
                    </div>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Career Advancements</span>
                    </div>
                    <span className="font-semibold">15K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Connections Made</span>
                    </div>
                    <span className="font-semibold">250K+</span>
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

export default GlobalReach;