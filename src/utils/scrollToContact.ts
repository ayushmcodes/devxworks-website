export function scrollToContact(): void {
  if (typeof document === "undefined") {
    return;
  }

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
    if (typeof window !== "undefined") {
      window.location.hash = "#contact";
    }
  }
}