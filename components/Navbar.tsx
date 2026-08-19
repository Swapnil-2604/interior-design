"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, usePrefersReducedMotion } from "@/lib/animations";
import { nav, studio } from "@/lib/site";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!progressRef.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
        },
      );
    });
    return () => ctx.revert();
  }, [reduced]);

  // Active section tracking — brass indicator slides between nav items
  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator || reduced) return;

    const sections = nav
      .map((item) => {
        const id = item.href.startsWith("#") ? item.href.slice(1) : item.href.slice(1);
        const el = document.getElementById(id);
        return el ? { item, el, id } : null;
      })
      .filter(Boolean) as { item: typeof nav[0]; el: HTMLElement; id: string }[];

    if (sections.length === 0) return;

    const ctx = gsap.context(() => {
      sections.forEach(({ item, el }) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => moveTo(item.href),
          onEnterBack: () => moveTo(item.href),
        });
      });

      // initial position based on current path
      const current = sections.find((s) => `/${s.id}` === pathname || `#${s.id}` === pathname);
      if (current) moveTo(current.item.href, true);
    });

    return () => ctx.revert();
  }, [reduced, pathname]);

  const moveTo = (href: string, instant = false) => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    const target = document.querySelector(`a[href="${href}"]`);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const navRect = target.parentElement?.getBoundingClientRect();
    if (!navRect) return;

    const x = rect.left - navRect.left;
    const w = rect.width;

    if (instant) {
      indicator.style.transform = `translateX(${x}px)`;
      indicator.style.width = `${w}px`;
      indicator.style.opacity = "1";
    } else {
      gsap.to(indicator, {
        x,
        width: w,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[70] h-[2px]">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-brass will-change-transform"
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-[60] mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-paper md:px-10 md:py-6">
          <Link
            href="/"
            className="font-sans text-[13px] font-medium tracking-[0.28em] md:text-sm"
          >
            {studio.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex relative" aria-label="Primary">
            {/* active indicator */}
            <div
              ref={indicatorRef}
              className="absolute -bottom-1 left-0 h-px bg-brass transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] origin-center opacity-0 pointer-events-none"
              aria-hidden="true"
            />
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[11px] uppercase tracking-luxe text-paper/75 transition-colors duration-300 hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden btn-fill relative px-6 py-2.5 text-[11px] uppercase tracking-luxe transition-colors duration-300 md:inline"
            >
              Start a conversation
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center md:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-8 pt-28 text-paper transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-[11px] text-stone">
                0{i + 1}
              </span>
              <span className="font-serif text-4xl italic leading-none text-paper/85 transition-colors duration-300 group-hover:text-brass">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex items-end justify-between border-t border-line-light pt-6">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-stone">New business</p>
            <a
              href="mailto:hello@lumiere-interiors.studio"
              className="mt-1 block font-serif text-lg italic text-paper"
            >
              hello@lumiere-interiors.studio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
