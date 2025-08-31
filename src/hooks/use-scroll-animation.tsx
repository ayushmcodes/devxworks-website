import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
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
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Animation variants for different scroll effects
export const scrollAnimationVariants = {
  slideUpFade: {
    initial: 'opacity-0 translate-y-8 blur-sm',
    animate: 'opacity-100 translate-y-0 blur-0',
    transition: 'transition-all duration-700 ease-out'
  },
  slideUpFadeDelay: {
    initial: 'opacity-0 translate-y-8 blur-sm',
    animate: 'opacity-100 translate-y-0 blur-0',
    transition: 'transition-all duration-700 ease-out delay-200'
  },
  slideUpFadeDelayLong: {
    initial: 'opacity-0 translate-y-8 blur-sm',
    animate: 'opacity-100 translate-y-0 blur-0',
    transition: 'transition-all duration-700 ease-out delay-400'
  },
  scaleUp: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  slideLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  slideRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  }
};
