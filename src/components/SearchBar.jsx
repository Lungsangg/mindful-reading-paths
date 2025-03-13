
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SearchBar = ({ 
  onSearch, 
  className,
  placeholder = "Search reading plans..." 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div 
      className={cn(
        "relative transition-all duration-300 group",
        isFocused ? "ring-2 ring-gold/30" : "",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className={cn(
          "h-4 w-4 transition-colors duration-200",
          isFocused ? "text-gold" : "text-muted-foreground"
        )} />
      </div>
      <input
        type="text"
        className={cn(
          "block w-full rounded-lg border border-input bg-background px-3 py-3 pl-10",
          "text-sm placeholder:text-muted-foreground focus-visible:outline-none",
          "transition-all duration-200 focus-visible:ring-0",
          "hover:border-gold/50"
        )}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {query && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
          onClick={() => setQuery('')}
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
