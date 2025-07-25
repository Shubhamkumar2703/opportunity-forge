import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ExternalLink,
  Bookmark,
  Heart
} from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  mode: "online" | "offline" | "hybrid";
  type: string;
  registrations: number;
  maxRegistrations?: number;
  tags: string[];
  organization: string;
  featured?: boolean;
}

const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  mode, 
  type, 
  registrations, 
  maxRegistrations,
  tags, 
  organization,
  featured = false 
}: EventCardProps) => {
  const getModeColor = (mode: string) => {
    switch(mode) {
      case "online": return "bg-event-online text-white";
      case "offline": return "bg-event-offline text-white";
      case "hybrid": return "bg-event-hybrid text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-primary shadow-medium' : 'shadow-soft'}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge className={getModeColor(mode)} variant="secondary">
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Badge>
            <Badge variant="outline">{type}</Badge>
            {featured && (
              <Badge className="bg-gradient-primary text-white">Featured</Badge>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{organization}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
            <span>
              {registrations} registered
              {maxRegistrations && ` / ${maxRegistrations} max`}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button className="flex-1" variant="gradient">
            Register Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;