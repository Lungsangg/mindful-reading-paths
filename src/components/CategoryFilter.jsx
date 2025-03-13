
import { useEffect, useState } from 'react';
import { categories } from '@/data/plans';
import { cn } from '@/lib/utils';

const CategoryFilter = ({ onSelectCategory, selectedCategory }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add animation to category chips when they appear
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach((chip, index) => {
      setTimeout(() => {
        chip.style.opacity = '1';
        chip.style.transform = 'translateY(0)';
      }, 50 + index * 30);
    });
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-lg font-medium mb-4 text-center">Explore by Category</h2>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        <button
          className={cn(
            "category-chip",
            "bg-secondary text-secondary-foreground border border-border/50",
            "hover:border-gold/50 hover:bg-secondary",
            selectedCategory === null ? "bg-gold text-white border-gold hover:bg-gold-dark hover:border-gold-dark" : "",
            mounted ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}
          style={{ 
            transitionDelay: `${0 * 30}ms`,
            opacity: 0,
            transform: 'translateY(10px)'
          }}
          onClick={() => onSelectCategory(null)}
        >
          All
        </button>
        
        {categories.map((category, index) => (
          <button
            key={category}
            className={cn(
              "category-chip",
              "bg-secondary text-secondary-foreground border border-border/50",
              "hover:border-gold/50 hover:bg-secondary",
              selectedCategory === category ? "bg-gold text-white border-gold hover:bg-gold-dark hover:border-gold-dark" : "",
              mounted ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
            style={{ 
              transitionDelay: `${(index + 1) * 30}ms`,
              opacity: 0,
              transform: 'translateY(10px)'
            }}
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
