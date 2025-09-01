// Global configuration constants for devXworks website

export const CALENDLY_CONFIG = {
  // TEMPORARY: Using a demo Calendly URL for testing - replace with your actual URL
  CONSULTATION_URL: "https://calendly.com/ayush-devxworks/intro-call-with-devxworks",
  
  // Optional: Different meeting types if you have them
  DISCOVERY_CALL_URL: "https://calendly.com/your-actual-username/30min", 
  STRATEGY_SESSION_URL: "https://calendly.com/your-actual-username/60min",
  
  // Default prefill and UTM parameters
  DEFAULT_PREFILL: {},
  
  // UTM campaigns for different sections
  UTM_CAMPAIGNS: {
    HERO: 'hero-cta',
    TEAM_SECTION: 'team-section', 
    PROCESS_SECTION: 'process-section',
    CONTACT_FORM: 'website-contact',
    CASE_STUDIES: 'case-study-cta',
    ABOUT_US: 'about-us-cta',
  }
} as const;

export const CONTACT_CONFIG = {
  // Contact form settings
  RESPONSE_TIME: "24 hours",
  EMAIL: "ayush@devxworks.com",
  
  // Consultation settings  
  CONSULTATION_DURATION: "15-minute consultation",
  CONSULTATION_PRICE: "Free"
} as const;

export const COMPANY_CONFIG = {
  NAME: "devXworks",
  TAGLINE: "MVP Development, Backend & DevOps Services",
  DESCRIPTION: "Transform your ideas into scalable, high-performance applications. Expert MVP development, backend systems, and DevOps solutions for startups and enterprises."
} as const;

// API Endpoints
export const API_CONFIG = {
  CONTACT_ENDPOINT: {
    DEV: '/.netlify/functions/submitClientQuery',
    PROD: 'https://devxworks.com/.netlify/functions/submitClientQuery'
  }
} as const;
