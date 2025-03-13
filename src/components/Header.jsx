
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-xl font-medium text-gold hover:text-gold-dark transition-colors"
          >
            <span className="sr-only">Return to homepage</span>
            <span className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" />
              </svg>
              <span className="font-semibold tracking-tight">MindfulReads</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                location.pathname === "/" ? "text-gold" : "text-foreground/80"
              )}
            >
              Home
            </Link>
            <a 
              href="#categories" 
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              Categories
            </a>
            <a 
              href="#plans" 
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              Plans
            </a>
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/plans" 
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                "text-primary-foreground shadow hover:bg-gold-dark/90 h-9 px-4 py-2 bg-gold"
              )}
            >
              Browse All Plans
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
