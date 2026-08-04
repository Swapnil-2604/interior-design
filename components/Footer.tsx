import SmoothLink from "./SmoothLink";
import { contact, nav, studio } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-sans text-sm font-medium tracking-[0.28em]">
              {studio.name}
            </span>
            <p className="mt-4 max-w-xs text-[11px] uppercase leading-loose tracking-luxe text-taupe">
              {studio.tagline}
            </p>
            <p className="mt-8 max-w-xs font-serif text-lg italic leading-snug text-ink/70">
              &ldquo;We don&rsquo;t just design spaces — we design how they
              feel.&rdquo;
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:col-span-2 md:col-start-7">
            <span className="text-[10px] uppercase tracking-luxe text-taupe">
              Studio
            </span>
            {nav.map((item) => (
              <SmoothLink
                key={item.href}
                href={item.href}
                className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </SmoothLink>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-[10px] uppercase tracking-luxe text-taupe">
              Connect
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
            >
              {contact.email}
            </a>
            {contact.socials.map((s) => (
              <SmoothLink
                key={s.label}
                href={s.href}
                className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
              >
                {s.label}
              </SmoothLink>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-[10px] uppercase tracking-luxe text-taupe">
            &copy; {new Date().getFullYear()} {studio.name}
          </span>
          <span className="text-[10px] uppercase tracking-luxe text-taupe">
            Los Angeles &middot; Lyon &middot; Lisbon
          </span>
        </div>
      </div>
    </footer>
  );
}
