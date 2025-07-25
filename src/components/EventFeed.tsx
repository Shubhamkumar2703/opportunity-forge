import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import EventCard from "./EventCard";
import { Search, Filter, SlidersHorizontal, Calendar, MapPin } from "lucide-react";

const EventFeed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");

  const mockEvents = [
    {
      title: "HackIndia 2024 - National Level Hackathon",
      description: "Join India's largest hackathon with 48 hours of coding, mentorship, and innovation. Build solutions for real-world problems.",
      date: "March 15, 2024",
      time: "09:00 AM",
      location: "IIT Delhi, New Delhi",
      mode: "offline" as const,
      type: "Hackathon",
      registrations: 1250,
      maxRegistrations: 2000,
      tags: ["AI/ML", "Web Dev", "Mobile App", "Blockchain"],
      organization: "IIT Delhi",
      featured: true
    },
    {
      title: "AI in Healthcare: Future Perspectives",
      description: "Industry experts discuss the latest trends and applications of artificial intelligence in healthcare and medical research.",
      date: "March 12, 2024",
      time: "07:00 PM",
      location: "Online via Zoom",
      mode: "online" as const,
      type: "Webinar",
      registrations: 890,
      tags: ["AI/ML", "Healthcare", "Research"],
      organization: "MedTech Institute"
    },
    {
      title: "Summer Internship Program 2024",
      description: "6-month paid internship program for computer science students. Work on cutting-edge technology projects.",
      date: "Applications open",
      time: "Rolling basis",
      location: "Bangalore, Mumbai, Hyderabad",
      mode: "hybrid" as const,
      type: "Internship",
      registrations: 2340,
      tags: ["Internship", "Software Dev", "Full-time"],
      organization: "TechCorp Solutions"
    },
    {
      title: "React Native Workshop",
      description: "Hands-on workshop covering React Native fundamentals, navigation, state management, and deployment strategies.",
      date: "March 18, 2024",
      time: "02:00 PM",
      location: "Online + Local Centers",
      mode: "hybrid" as const,
      type: "Workshop",
      registrations: 567,
      maxRegistrations: 1000,
      tags: ["React Native", "Mobile Dev", "JavaScript"],
      organization: "CodeCraft Academy"
    },
    {
      title: "Global Startup Conference 2024",
      description: "Connect with entrepreneurs, investors, and industry leaders. Pitch competitions, networking sessions, and keynote speakers.",
      date: "March 25, 2024",
      time: "10:00 AM",
      location: "Mumbai Convention Center",
      mode: "offline" as const,
      type: "Conference",
      registrations: 1890,
      maxRegistrations: 3000,
      tags: ["Entrepreneurship", "Startup", "Networking", "Investment"],
      organization: "Startup India"
    },
    {
      title: "Cybersecurity Bootcamp",
      description: "Intensive 3-day bootcamp covering ethical hacking, penetration testing, and security frameworks.",
      date: "March 20, 2024",
      time: "09:00 AM",
      location: "Online Learning Platform",
      mode: "online" as const,
      type: "Bootcamp",
      registrations: 445,
      maxRegistrations: 500,
      tags: ["Cybersecurity", "Ethical Hacking", "Security"],
      organization: "CyberSafe Institute"
    }
  ];

  const eventTypes = ["Hackathon", "Webinar", "Internship", "Workshop", "Conference", "Bootcamp"];
  const eventModes = ["online", "offline", "hybrid"];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = !selectedType || selectedType === "all" || event.type === selectedType;
    const matchesMode = !selectedMode || selectedMode === "all" || event.mode === selectedMode;
    
    return matchesSearch && matchesType && matchesMode;
  });

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore curated opportunities from top organizations and institutions
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events, skills, or organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {eventTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Mode Filter */}
            <Select value={selectedMode} onValueChange={setSelectedMode}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modes</SelectItem>
                {eventModes.map(mode => (
                  <SelectItem key={mode} value={mode}>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedType && selectedType !== "all" && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedType}</span>
                <button onClick={() => setSelectedType("all")} className="ml-1">×</button>
              </Badge>
            )}
            {selectedMode && selectedMode !== "all" && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedMode}</span>
                <button onClick={() => setSelectedMode("all")} className="ml-1">×</button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Found {filteredEvents.length} events
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventFeed;