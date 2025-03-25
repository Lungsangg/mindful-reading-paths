
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PlanDetail from "./pages/PlanDetail";
import PlanProgression from "./pages/PlanProgression";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// PageTransition component to handle page transitions
function PageTransition({ children }) {
  const location = useLocation();

  // Use effect to animate page transitions
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.add('animate-fade-in');
      
      return () => {
        main.classList.remove('animate-fade-in');
      };
    }
  }, [location]);

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Plans />} />
            <Route path="/home" element={<Index />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plan/:planId" element={<PlanDetail />} />
            <Route path="/plan/:planId/read" element={<PlanProgression />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
