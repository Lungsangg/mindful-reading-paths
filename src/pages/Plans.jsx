
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import PlanCard from "@/components/PlanCard";
import { getAllPlans, getPlansByCategory, searchPlans } from "@/data/plans";
import { Link } from "react-router-dom";

const Plans = () => {
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Apply filters when category or search query changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API loading
    setTimeout(() => {
      let results;
      
      // First filter by category if selected
      if (selectedCategory) {
        results = getPlansByCategory(selectedCategory);
      } else {
        results = getAllPlans();
      }
      
      // Then apply search if query exists
      if (searchQuery) {
        results = searchPlans(searchQuery);
        
        // If category is selected, filter the search results by category
        if (selectedCategory) {
          results = results.filter(plan => 
            plan.categories.includes(selectedCategory)
          );
        }
      }
      
      setFilteredPlans(results);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Page header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-foreground mb-2 animate-slide-down">
              All Reading Plans
            </h1>
            <p className="text-muted-foreground mb-4 md:mb-0 animate-slide-up">
              Browse our entire collection of mindful reading plans
            </p>
          </div>
          
          {/* Search bar */}
          <div className="w-full md:w-64 lg:w-80 animate-fade-in">
            <SearchBar 
              onSearch={setSearchQuery} 
              className="w-full"
              placeholder="Search all plans..."
            />
          </div>
        </div>
      </section>
      
      {/* Categories section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <CategoryFilter 
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </section>
      
      {/* Plans section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex-grow">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-80 rounded-lg bg-muted/30 animate-pulse"></div>
            ))}
          </div>
        ) : filteredPlans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No plans found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or category filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery("");
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-gold-dark/90 h-9 px-4 py-2 bg-gold"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t mt-16">
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

export default Plans;
