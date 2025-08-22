export function scrollToContact(): void {
  if (typeof window === "undefined") {
    return;
  }

  // Check if we're on the homepage
  const isHomepage = window.location.pathname === "/" || window.location.pathname === "";
  
  if (!isHomepage) {
    // If not on homepage, use window.location for full navigation to homepage with hash
    // This will trigger a page change and then scroll to the contact section
    window.location.assign("/#contact");
    return;
  }

  // If on homepage, scroll to contact section
  const targetElement: HTMLElement | null = document.getElementById("contact");

  if (targetElement) {
    try {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus after a short delay to ensure scroll positioning is applied
      window.setTimeout(() => {
        if (typeof (targetElement as any).focus === "function") {
          (targetElement as HTMLElement).focus({ preventScroll: true } as any);
        }
      }, 250);
    } catch {
      // Fallback without smooth behavior
      targetElement.scrollIntoView();
      (targetElement as HTMLElement).focus?.();
    }
  } else {
    // Fallback to hash navigation if element is missing
    window.location.hash = "#contact";
  }
}