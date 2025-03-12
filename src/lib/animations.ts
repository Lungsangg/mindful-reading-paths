
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const slideDown = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const blurIn = {
  initial: { opacity: 0, filter: "blur(4px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.7 }
};

// Apply staggered animations to children elements
export function staggerItems(elements: HTMLElement[], delay = 50) {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('stagger-animate');
    }, index * delay);
  });
}

// Function to apply animations when elements enter viewport
export function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// Create smooth page transitions
export function pageTransition(element: HTMLElement, direction: 'in' | 'out') {
  const animations = {
    in: [
      { opacity: 0, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    out: [
      { opacity: 1 },
      { opacity: 0 }
    ]
  };

  element.animate(animations[direction], {
    duration: direction === 'in' ? 500 : 300,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fill: 'forwards'
  });
}
