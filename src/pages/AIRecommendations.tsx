import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Sparkles, TrendingUp, Users, Calendar, Star, Target, Zap } from "lucide-react";

const AIRecommendations = () => {
  const personalizedEvents = [
    {
      id: 1,
      title: "Advanced React Performance Workshop",
      description: "Learn optimization techniques and performance best practices",
      matchScore: 95,
      reason: "Based on your React.js skills and recent workshop attendance",
      type: "Workshop",
      date: "Feb 20, 2024",
      registrations: 234,
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      id: 2,
      title: "AI in Web Development Hackathon",
      description: "Build innovative web apps using AI and machine learning",
      matchScore: 89,
      reason: "Matches your interest in AI and frontend development",
      type: "Hackathon",
      date: "Mar 5, 2024",
      registrations: 156,
      tags: ["AI", "Web Dev", "ML"]
    },
    {
      id: 3,
      title: "Full-Stack Developer Conference",
      description: "Latest trends in full-stack development and best practices",
      matchScore: 82,
      reason: "Recommended for developers with your experience level",
      type: "Conference",
      date: "Mar 15, 2024",
      registrations: 450,
      tags: ["Full-Stack", "JavaScript", "Backend"]
    }
  ];

  const trendingTopics = [
    { topic: "Artificial Intelligence", growth: "+45%", events: 23 },
    { topic: "Web3 & Blockchain", growth: "+38%", events: 18 },
    { topic: "Cloud Computing", growth: "+32%", events: 27 },
    { topic: "Cybersecurity", growth: "+28%", events: 15 },
    { topic: "DevOps", growth: "+25%", events: 21 }
  ];

  const recommendationInsights = [
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description: "Based on your profile, consider events in: Cloud Architecture, DevOps",
      priority: "high"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Events in AI/ML could accelerate your career by 23% based on industry trends",
      priority: "medium"
    },
    {
      icon: Users,
      title: "Network Expansion",
      description: "Attending more conferences can expand your professional network by 40%",
      priority: "medium"
    },
    {
      icon: Zap,
      title: "Trending Skills",
      description: "React Native and TypeScript events are gaining popularity in your area",
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            AI Recommendations
          </h1>
          <p className="text-muted-foreground">Personalized event suggestions powered by machine learning</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Personalized Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Recommended for You
                </CardTitle>
                <CardDescription>
                  Events tailored to your interests and career goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {personalizedEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{event.matchScore}% match</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Progress value={event.matchScore} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{event.reason}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.registrations} registered
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button size="sm" variant="gradient">
                            Register
                          </Button>
                        </div>
                      </div>

                      <div className="flex gap-1 mt-3">
                        {event.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle>AI Insights & Recommendations</CardTitle>
                <CardDescription>
                  Intelligent suggestions to enhance your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendationInsights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        insight.priority === 'high' ? 'bg-red-100 text-red-600' :
                        insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <insight.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{insight.title}</h4>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                      <Badge variant={
                        insight.priority === 'high' ? 'destructive' :
                        insight.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {insight.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>
                  Popular subjects based on global event data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{topic.topic}</p>
                        <p className="text-xs text-muted-foreground">{topic.events} events</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {topic.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Path</CardTitle>
                <CardDescription>
                  Suggested progression based on your interests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">1</div>
                    <div>
                      <p className="font-medium text-sm">Frontend Foundations</p>
                      <p className="text-xs text-muted-foreground">Complete React fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-semibold">2</div>
                    <div>
                      <p className="font-medium text-sm">Backend Integration</p>
                      <p className="text-xs text-muted-foreground">Learn API development</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-semibold">3</div>
                    <div>
                      <p className="font-medium text-sm">Cloud & DevOps</p>
                      <p className="text-xs text-muted-foreground">Deploy and scale applications</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendation Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Customize Recommendations</CardTitle>
                <CardDescription>
                  Fine-tune your AI recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="h-4 w-4 mr-2" />
                    Update Interests
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Career Goals
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Brain className="h-4 w-4 mr-2" />
                    AI Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;