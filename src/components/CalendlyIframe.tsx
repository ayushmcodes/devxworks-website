import React from 'react';

interface CalendlyIframeProps {
  url: string;
  className?: string;
  height?: number;
}

// Simple iframe-based Calendly component as fallback
export const CalendlyIframe: React.FC<CalendlyIframeProps> = ({
  url,
  className = "",
  height = 700
}) => {
  // Get hostname safely for client-side rendering
  const getEmbedUrl = () => {
    if (typeof window === 'undefined') {
      return url; // Server-side rendering fallback
    }
    
    const hostname = window.location.hostname;
    return url.includes('?') 
      ? `${url}&embed_domain=${hostname}&embed_type=Inline`
      : `${url}?embed_domain=${hostname}&embed_type=Inline`;
  };

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={getEmbedUrl()}
        width="100%"
        height={height}
        frameBorder="0"
        title="Schedule a meeting"
        className="rounded-lg border-0"
        style={{
          minWidth: '320px',
          border: 'none',
          overflow: 'auto'
        }}
        loading="lazy"
        allow="clipboard-write"
      />
    </div>
  );
};
