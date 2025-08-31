export function scrollToServices(): void {
  if (typeof window === "undefined") {
    return;
  }

  // If we're not on the homepage, navigate there first with hash
  if (window.location.pathname !== "/") {
    // Set hash first, then navigate
    window.location.href = "/#services";
    return;
  }

  // If we're already on homepage, scroll to services
  scrollToServicesElement();
}

function scrollToServicesElement(): void {
  const targetElement: HTMLElement | null = document.getElementById("services");

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
    window.location.hash = "#services";
  }
}

// Export function to handle hash navigation on page load
export function handleHashNavigation(): void {
  if (typeof window === "undefined") {
    return;
  }

  // Check if we have a hash for services
  if (window.location.hash === "#services") {
    // Small delay to ensure the page is fully loaded
    window.setTimeout(() => {
      scrollToServicesElement();
    }, 100);
  }
  
  // Check if we have a hash for contact
  if (window.location.hash === "#contact") {
    // Longer delay to ensure all components are mounted and contact section is available
    window.setTimeout(() => {
      scrollToContactElement();
    }, 500);
  }
}

function scrollToContactElement(retryCount: number = 0): void {
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
  } else if (retryCount < 3) {
    // If element not found, retry up to 3 times with increasing delay
    window.setTimeout(() => {
      scrollToContactElement(retryCount + 1);
    }, 300 * (retryCount + 1));
  } else {
    // Final fallback: use hash navigation
    window.location.hash = "#contact";
  }
}
