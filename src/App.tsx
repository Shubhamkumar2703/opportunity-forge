import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import AdminPortal from "./pages/AdminPortal";
import SmartCalendar from "./pages/SmartCalendar";
import SmartNotifications from "./pages/SmartNotifications";
import Analytics from "./pages/Analytics";
import AIRecommendations from "./pages/AIRecommendations";
import GlobalReach from "./pages/GlobalReach";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/calendar" element={<SmartCalendar />} />
          <Route path="/notifications" element={<SmartNotifications />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/recommendations" element={<AIRecommendations />} />
          <Route path="/global" element={<GlobalReach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
