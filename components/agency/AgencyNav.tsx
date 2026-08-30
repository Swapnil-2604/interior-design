"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { agencyInfo } from "@/lib/agency";

const navLinks = [
  { href: "/work-with-us", label: "Overview" },
  { href: "/work-with-us/portfolio/lumiere-interiors", label: "Case Study" },
  { href: "/work-with-us/services", label: "Services" },
  { href: "/work-with-us/pricing", label: "Pricing" },
  { href: "/work-with-us/blog", label: "Insights" },
  { href: "/work-with-us/contact", label: "Contact" },
];

export default function AgencyNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      {/* Top Demo Bar */}
      <div className="border-b border-line/60 bg-paper-2 px-6 py-2 text-center text-[11px] text-taupe font-mono flex items-center justify-between md:px-10 lg:px-16">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-ink font-sans font-medium">Automate Reality Labs</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-stone">Web Development for Architecture &amp; Interior Studios</span>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-brass hover:text-ink transition-colors font-sans text-[11px] font-medium"
        >
          <span>← Back to Lumière Interiors Demo</span>
        </Link>
      </div>

      {/* Main Agency Nav */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/work-with-us" className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-xs bg-ink flex items-center justify-center text-paper font-mono text-xs font-bold shadow-md">
            AR
          </div>
          <div>
            <span className="font-sans text-sm font-semibold tracking-wider text-ink block leading-none">
              AUTOMATE REALITY
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brass block mt-0.5">
              Design Systems &amp; Web Lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === pathname ||
              (item.href !== "/work-with-us" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] uppercase font-mono tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-ink font-semibold border-b border-brass pb-0.5"
                    : "text-taupe hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link
            href="/work-with-us/contact"
            className="hidden btn-fill px-5 py-2 text-[10px] uppercase tracking-luxe sm:inline-flex"
          >
            Start Your Studio Site
          </Link>

          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xs border border-line md:hidden"
          >
            <span className="font-mono text-xs">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-line bg-paper-2 px-6 py-6 md:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-[13px] uppercase tracking-wider text-ink hover:text-brass"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-line flex flex-col gap-3">
              <Link
                href="/work-with-us/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-fill text-center py-3 text-[11px] uppercase tracking-luxe"
              >
                Book Discovery Consultation
              </Link>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center font-mono text-[11px] text-taupe hover:text-ink py-2"
              >
                ← Return to Lumière Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
