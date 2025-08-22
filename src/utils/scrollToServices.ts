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
}
