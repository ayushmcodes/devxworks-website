import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone } from 'lucide-react';

// Declare Calendly types for TypeScript
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      initPopupWidget: (options: {
        url: string;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      showPopupWidget: (url: string) => void;
      closePopupWidget: () => void;
    };
  }
}

interface CalendlyInlineProps {
  url: string;
  className?: string;
  prefill?: Record<string, any>;
  utm?: Record<string, any>;
}

interface CalendlyPopupButtonProps {
  url: string;
  text?: string;
  className?: string;
  prefill?: Record<string, any>;
  utm?: Record<string, any>;
  variant?: "default" | "outline" | "ghost" | "cta";
  size?: "default" | "sm" | "lg";
  icon?: boolean;
}

// Inline Calendly Widget Component
export const CalendlyInline: React.FC<CalendlyInlineProps> = ({
  url,
  className = "calendly-inline-widget",
  prefill = {},
  utm = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeCalendly = () => {
      if (window.Calendly && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Initialize the widget
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill,
          utm
        });
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initializeCalendly();
    } else {
      // Wait for Calendly to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initializeCalendly();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkCalendly);
      }, 10000);

      return () => clearInterval(checkCalendly);
    }
  }, [url, prefill, utm]);

  return (
    <div 
      ref={containerRef}
      className={`${className} min-h-[630px] w-full bg-gray-50 rounded-lg`}
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
};

// Calendly Popup Button Component
export const CalendlyPopupButton: React.FC<CalendlyPopupButtonProps> = ({
  url,
  text = "Schedule a Call",
  className = "",
  prefill = {},
  utm = {},
  variant = "default",
  size = "default",
  icon = true
}) => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        prefill,
        utm
      });
    }
  };

  return (
    <Button 
      variant={variant}
      size={size}
      onClick={openCalendly}
      className={`${className} flex items-center gap-2`}
    >
      {icon && <Calendar className="w-4 h-4" />}
      {text}
    </Button>
  );
};

// Quick Schedule Button (with specific styling for CTAs)
export const QuickScheduleButton: React.FC<Omit<CalendlyPopupButtonProps, 'variant' | 'size'>> = ({
  url,
  text = "Schedule a Call",
  className = "",
  prefill = {},
  utm = {},
  icon = true
}) => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        prefill,
        utm
      });
    }
  };

  return (
    <Button 
      onClick={openCalendly}
      className={`bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 ${className}`}
    >
      {icon && <Calendar className="w-5 h-5" />}
      {text}
    </Button>
  );
};

// Schedule Now CTA Component (for hero sections)
export const ScheduleNowCTA: React.FC<{
  url: string;
  className?: string;
  prefill?: Record<string, any>;
}> = ({ url, className = "", prefill = {} }) => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        prefill,
        utm: {
          utmCampaign: 'hero-cta',
          utmMedium: 'website'
        }
      });
    }
  };

  return (
    <div className={`text-center space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={openCalendly}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-3"
        >
          <Clock className="w-5 h-5" />
          Schedule a Call
        </Button>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Phone className="w-4 h-4" />
          <span>15-minute consultation • Free</span>
        </div>
      </div>
    </div>
  );
};
