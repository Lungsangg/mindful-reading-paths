
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import PlanCard from "@/components/PlanCard";
import { getAllPlans, getPlansByCategory, searchPlans } from "@/data/plans";
import { Link } from "react-router-dom";
import "./Plans.css";

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
    <div className="plans-container">
      <Header />
      
      {/* Page header */}
      <section className="page-header">
        <div className="page-header-content">
          <div>
            <h1 className="page-title">
              All Reading Plans
            </h1>
            <p className="page-subtitle">
              Browse our entire collection of mindful reading plans
            </p>
          </div>
          
          {/* Search bar */}
          <div className="search-container">
            <SearchBar 
              onSearch={setSearchQuery} 
              placeholder="Search all plans..."
            />
          </div>
        </div>
      </section>
      
      {/* Categories section */}
      <section className="categories-section">
        <CategoryFilter 
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </section>
      
      {/* Plans section */}
      <section className="plans-section">
        {isLoading ? (
          <div className="plans-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="plan-skeleton"></div>
            ))}
          </div>
        ) : filteredPlans.length > 0 ? (
          <div className="plans-grid">
            {filteredPlans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        ) : (
          <div className="no-plans-message">
            <h3 className="no-plans-title">No plans found</h3>
            <p className="no-plans-subtitle">
              Try adjusting your search or category filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery("");
              }}
              className="reset-button"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="footer-logo-icon"
            >
              <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" />
            </svg>
            <span className="footer-logo-text">MindfulReads</span>
          </div>
          
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} MindfulReads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Plans;
