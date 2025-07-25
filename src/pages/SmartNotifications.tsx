import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, Smartphone, Calendar, Users, TrendingUp } from "lucide-react";

const SmartNotifications = () => {
  const notifications = [
    {
      id: 1,
      title: "AI Hackathon Registration Reminder",
      message: "Registration closes in 2 days for the AI/ML Hackathon",
      time: "2 hours ago",
      type: "reminder",
      read: false
    },
    {
      id: 2,
      title: "New Event Recommendation",
      message: "Based on your interests, you might like 'Web Development Workshop'",
      time: "4 hours ago",
      type: "recommendation",
      read: false
    },
    {
      id: 3,
      title: "Event Starting Soon",
      message: "React Fundamentals webinar starts in 30 minutes",
      time: "6 hours ago",
      type: "alert",
      read: true
    },
    {
      id: 4,
      title: "Weekly Event Digest",
      message: "5 new events added this week in your preferred categories",
      time: "1 day ago",
      type: "digest",
      read: true
    }
  ];

  const notificationSettings = [
    { label: "Event Reminders", description: "Get notified before events start", enabled: true },
    { label: "New Event Alerts", description: "Notifications for new events in your interests", enabled: true },
    { label: "Registration Deadlines", description: "Reminders for upcoming registration deadlines", enabled: true },
    { label: "Weekly Digest", description: "Weekly summary of events and activities", enabled: false },
    { label: "Recommendations", description: "AI-powered event recommendations", enabled: true },
    { label: "Event Updates", description: "Changes to events you're registered for", enabled: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bell className="h-8 w-8 text-primary" />
            Smart Notifications
          </h1>
          <p className="text-muted-foreground">Manage your notification preferences and view recent alerts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>
                  Your latest notifications and alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-muted/30 border-primary/20' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <Badge 
                          variant={
                            notification.type === "alert" ? "destructive" :
                            notification.type === "reminder" ? "default" :
                            notification.type === "recommendation" ? "secondary" : "outline"
                          }
                        >
                          {notification.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Customize how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notificationSettings.map((setting, index) => (
                    <div key={index} className="flex items-start justify-between space-x-2">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{setting.label}</p>
                        <p className="text-xs text-muted-foreground">{setting.description}</p>
                      </div>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
                <CardDescription>
                  Choose how you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-sm font-medium">Push Notifications</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <span className="text-sm font-medium">In-App Notifications</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Stats</CardTitle>
                <CardDescription>
                  Your notification activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">This Week</span>
                    </div>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unread</span>
                    </div>
                    <span className="font-semibold">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Engagement Rate</span>
                    </div>
                    <span className="font-semibold">87%</span>
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

export default SmartNotifications;