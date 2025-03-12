
import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPlanById, Plan } from "@/data/plans";
import Header from "@/components/Header";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const PlanProgression = () => {
  const { planId } = useParams<{ planId: string }>();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (planId) {
      // Simulate API loading
      setLoading(true);
      setTimeout(() => {
        const foundPlan = getPlanById(planId);
        if (foundPlan) {
          setPlan(foundPlan);
        } else {
          toast({
            title: "Plan not found",
            description: "The reading plan you're looking for doesn't exist.",
            variant: "destructive",
          });
          navigate("/plans");
        }
        setLoading(false);
      }, 500);
    }
  }, [planId, navigate]);

  // Scroll content into view when day changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedDay]);

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  const handlePreviousDay = () => {
    if (selectedDay > 1) {
      setSelectedDay(selectedDay - 1);
    }
  };

  const handleNextDay = () => {
    if (plan && selectedDay < plan.days.length) {
      setSelectedDay(selectedDay + 1);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Plan not found</h2>
            <Link
              to="/plans"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-gold-dark/90 h-9 px-4 py-2 bg-gold"
            >
              Browse All Plans
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentDay = plan.days.find((day) => day.number === selectedDay);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl animate-fade-in">
        <div className="mb-6 flex justify-between items-center">
          <Link
            to={`/plan/${plan.id}`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to plan
          </Link>
          
          <div className="text-sm font-medium">
            Day {selectedDay} of {plan.days.length}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="relative h-40 overflow-hidden">
            <div className={`w-full h-full ${!imageLoaded ? "image-loading" : ""}`}>
              <img
                src={plan.image}
                alt={plan.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl font-medium text-white">
                {plan.title}
              </h1>
            </div>
          </div>
          
          <div className="p-6">
            {/* Day navigation */}
            <div className="my-4 flex flex-wrap gap-2 justify-center">
              {plan.days.map((day) => (
                <button
                  key={day.number}
                  onClick={() => handleDaySelect(day.number)}
                  className={cn(
                    "day-number",
                    selectedDay === day.number
                      ? "bg-gold text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  {day.number}
                </button>
              ))}
            </div>
            
            {/* Day content */}
            <div className="mt-8" ref={contentRef}>
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handlePreviousDay}
                  className={cn(
                    "inline-flex items-center text-sm transition-colors px-2 py-1 rounded",
                    selectedDay === 1
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-foreground hover:text-gold hover:bg-secondary"
                  )}
                  disabled={selectedDay === 1}
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Previous
                </button>
                
                <div className="text-lg font-medium">Day {selectedDay}</div>
                
                <button
                  onClick={handleNextDay}
                  className={cn(
                    "inline-flex items-center text-sm transition-colors px-2 py-1 rounded",
                    selectedDay === plan.days.length
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-foreground hover:text-gold hover:bg-secondary"
                  )}
                  disabled={selectedDay === plan.days.length}
                >
                  Next
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                {currentDay ? (
                  <div className="animate-fade-in">
                    <p className="text-foreground leading-relaxed">{currentDay.content}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Content for this day is not available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Day navigation buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePreviousDay}
            className={cn(
              "button-hover inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              selectedDay === 1
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
            disabled={selectedDay === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Day
          </button>
          
          <button
            onClick={handleNextDay}
            className={cn(
              "button-hover inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              selectedDay === plan.days.length
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-gold text-white hover:bg-gold-dark"
            )}
            disabled={selectedDay === plan.days.length}
          >
            Next Day
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-gold mr-2"
            >
              <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" />
            </svg>
            <span className="font-medium">MindfulReads</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MindfulReads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlanProgression;
