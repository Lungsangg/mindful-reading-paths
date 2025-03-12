
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPlanById, Plan } from "@/data/plans";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl animate-fade-in">
        <div className="mb-6">
          <Link
            to="/plans"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all plans
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <div className={`w-full h-full ${!imageLoaded ? "image-loading" : ""}`}>
              <img
                src={plan.image}
                alt={plan.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {plan.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-block text-xs px-2 py-1 rounded-full bg-white/80 text-gray-800"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-medium text-white mb-2">{plan.title}</h1>
              <p className="text-white/90 text-sm">
                {plan.days.length} {plan.days.length === 1 ? "day" : "days"}
              </p>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">About this plan</h2>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            
            <Link
              to={`/plan/${plan.id}/read`}
              className="button-hover w-full md:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-gold-dark/90 h-11 px-6 py-3 bg-gold"
            >
              Start the Plan
            </Link>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-4">What you'll learn</h2>
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden p-6">
            <ul className="space-y-4">
              {plan.days.slice(0, 3).map((day) => (
                <li key={day.number} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-medium mb-1">Day {day.number}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {day.content.substring(0, 120)}...
                  </p>
                </li>
              ))}
              {plan.days.length > 3 && (
                <li className="text-center pt-2">
                  <p className="text-sm text-gold">
                    +{plan.days.length - 3} more days
                  </p>
                </li>
              )}
            </ul>
          </div>
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

export default PlanDetail;
