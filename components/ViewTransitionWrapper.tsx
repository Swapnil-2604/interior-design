"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/animations";

/**
 * Wraps page content in a View Transition for smooth cross-fade between routes.
 * Respects prefers-reduced-motion — instant swap when reduced.
 */
export default function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { reducedRef.current = mq.matches; };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Page transition on pathname change
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || reducedRef.current) return;

    const transitionName = "page-crossfade";

    // Start the view transition
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        // The content swap happens here (Next.js handles it)
      });

      // We can hook into the transition lifecycle if needed
      transition.finished.then(() => {
        // Cleanup after transition completes
        ScrollTrigger.refresh();
      });
    }
  }, [pathname]);

  // Ensure GSAP ScrollTrigger is ready
  useEffect(() => {
    const raf1 = requestAnimationFrame(() => requestAnimationFrame(() => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }));
    return () => cancelAnimationFrame(raf1);
  }, [pathname]);

  return (
    <div
      ref={wrapperRef}
      style={{
        viewTransitionName: "page-crossfade",
      }}
      className="view-transition-wrapper"
    >
      {children}
    </div>
  );
}

// Import ScrollTrigger here to avoid circular deps
import { ScrollTrigger } from "gsap/ScrollTrigger";