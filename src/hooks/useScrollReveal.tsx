import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    delay = 0
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay if specified
        if (delay > 0) {
          setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, delay);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay]);

  return { elementRef, isVisible };
};

// Simple animation helper function
export const getScrollAnimation = (isVisible: boolean, animationType: string = 'slideUp') => {
  const animations = {
    slideUp: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100 translate-y-0',
      hidden: 'opacity-0 translate-y-8'
    },
    slideDown: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100 translate-y-0',
      hidden: 'opacity-0 -translate-y-8'
    },
    slideLeft: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100 translate-x-0',
      hidden: 'opacity-0 translate-x-8'
    },
    slideRight: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100 translate-x-0',
      hidden: 'opacity-0 -translate-x-8'
    },
    fadeIn: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100',
      hidden: 'opacity-0'
    },
    scaleIn: {
      base: 'transition-all duration-700 ease-in-out',
      visible: 'opacity-100 scale-100',
      hidden: 'opacity-0 scale-95'
    }
  };

  const anim = animations[animationType as keyof typeof animations] || animations.slideUp;
  return `${anim.base} ${isVisible ? anim.visible : anim.hidden}`;
};
