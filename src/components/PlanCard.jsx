
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PlanCard = ({ plan, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.style.opacity = '1';
              cardRef.current.style.transform = 'translateY(0)';
            }
          }, index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="card-hover opacity-0 transform translate-y-4 transition-all duration-500"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Link to={`/plan/${plan.id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300">
          <div 
            className={cn(
              "relative w-full h-48 overflow-hidden",
              !imageLoaded && "image-loading"
            )}
          >
            <img
              src={plan.image}
              alt={plan.title}
              className={cn(
                "w-full h-full object-cover transition-all duration-700",
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              )}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex flex-wrap gap-2">
                {plan.categories.slice(0, 2).map((category) => (
                  <span 
                    key={category} 
                    className="inline-block text-xs px-2 py-1 rounded-full bg-white/80 text-gray-800"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                ))}
                {plan.categories.length > 2 && (
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-white/80 text-gray-800">
                    +{plan.categories.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-2 text-foreground leading-tight">
              {plan.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {plan.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                {plan.days.length} {plan.days.length === 1 ? 'day' : 'days'}
              </span>
              <span className="text-sm text-gold font-medium">Read more</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;
