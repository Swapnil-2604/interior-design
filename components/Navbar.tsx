"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, usePrefersReducedMotion } from "@/lib/animations";
import SmoothLink from "./SmoothLink";
import { nav, studio } from "@/lib/site";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

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
          <SmoothLink
            href="#top"
            className="font-sans text-[13px] font-medium tracking-[0.28em] md:text-sm"
          >
            {studio.name}
          </SmoothLink>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <SmoothLink
                key={item.href}
                href={item.href}
                className="group relative text-[11px] uppercase tracking-luxe text-paper/75 transition-colors duration-300 hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
              </SmoothLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <SmoothLink
              href="#contact"
              className="hidden text-[11px] uppercase tracking-luxe text-paper/75 transition-colors duration-300 hover:text-paper md:inline"
            >
              Start a conversation
            </SmoothLink>

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
            <SmoothLink
              key={item.href}
              href={item.href}
              onNavigate={close}
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-[11px] text-stone">
                0{i + 1}
              </span>
              <span className="font-serif text-4xl italic leading-none text-paper/85 transition-colors duration-300 group-hover:text-brass">
                {item.label}
              </span>
            </SmoothLink>
          ))}
        </nav>
        <div className="flex items-end justify-between border-t border-line-light pt-6">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-stone">New business</p>
            <a
              href="mailto:hello@atelierform.studio"
              className="mt-1 block font-serif text-lg italic text-paper"
            >
              hello@atelierform.studio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
