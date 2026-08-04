"use client";

import type { MouseEvent, ReactNode } from "react";

type SmoothLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

/** Anchor that smooth-scrolls to an in-page section. href="#" is treated
 *  as a placeholder (no-op) so placeholder socials don't jump to top. */
export default function SmoothLink({
  href,
  children,
  className,
  onNavigate,
}: SmoothLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href === "#") {
      e.preventDefault();
      return;
    }
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      onNavigate?.();
    }
  };
  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
