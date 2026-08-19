"use client";

import { useLayoutEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsap, usePrefersReducedMotion } from "@/lib/animations";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Lines per second reveal speed */
  speed?: number;
  /** Stagger between lines in seconds */
  stagger?: number;
  /** Delay before starting (seconds) */
  delay?: number;
  /** Easing for each line */
  ease?: string;
};

/**
 * Masks each line (consumer wraps lines in <span data-line>) and reveals them
 * by sliding up from behind the mask. Respects prefers-reduced-motion.
 */
export default function TextReveal({
  children,
  className,
  as: Tag = "div",
  speed = 1,
  stagger = 0.08,
  delay = 0,
  ease = "power3.out",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) {
      if (el) gsap.set(el, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
      if (lines.length === 0) return;

      // Wrap each line in an overflow-hidden mask so it slides up from behind.
      lines.forEach((line) => {
        if (line.parentElement?.classList.contains("text-reveal-mask")) return;
        const wrapper = document.createElement("div");
        wrapper.className = "text-reveal-mask";
        wrapper.style.cssText = "overflow:hidden; display:block; width:100%;";
        line.parentElement?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        line.style.display = "block";
      });

      gsap.fromTo(
        lines,
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: 1 / speed,
          ease,
          stagger,
          delay,
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, speed, stagger, delay, ease]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}