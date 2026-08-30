"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import { type ShopItem, shopItems, contact } from "@/lib/site";

const categories = ["All", "Seating", "Tables", "Lighting", "Decor"] as const;

export default function ShopClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const filtered =
    activeCategory === "All"
      ? shopItems
      : shopItems.filter((item) => item.category === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedItem(null);
    }, 2800);
  };

  const getWhatsAppEnquiryUrl = (item: ShopItem) => {
    const cleanPhone = (contact.whatsapp || "+919820012345").replace(/[^0-9]/g, "");
    const msg = `Hello Lumière Interiors, I am inquiring about purchasing the piece: "${item.name}" (Ref: ${item.id}, Est: ${item.priceEstimate}). Could you provide fabrication lead time and delivery details?`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="bg-paper text-ink">
      {/* Inquiry Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 md:p-10 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-xs border border-line-light bg-ink p-6 text-paper md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-6 top-6 font-mono text-xs uppercase tracking-wider text-stone hover:text-paper"
            >
              ✕ Close
            </button>

            {!inquirySent ? (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-luxe text-brass">
                  Studio Furniture Inquiry
                </span>
                <h3 className="mt-2 font-serif text-2xl text-paper md:text-3xl">
                  {selectedItem.name}
                </h3>
                <p className="mt-1 font-mono text-[12px] text-stone">
                  {selectedItem.priceEstimate} &middot; {selectedItem.materials}
                </p>

                <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4 font-sans">
                  <div>
                    <label className="font-mono text-[10px] uppercase text-stone block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="mt-1 w-full rounded-xs border border-line-light bg-paper/5 p-3 text-[13px] text-paper placeholder-stone/60 focus:border-brass focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase text-stone block">Email</label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="mt-1 w-full rounded-xs border border-line-light bg-paper/5 p-3 text-[13px] text-paper placeholder-stone/60 focus:border-brass focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase text-stone block">Phone</label>
                      <input
                        type="tel"
                        required
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="+91 98200..."
                        className="mt-1 w-full rounded-xs border border-line-light bg-paper/5 p-3 text-[13px] text-paper placeholder-stone/60 focus:border-brass focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-fill mt-6 block w-full py-4 text-center text-[11px] uppercase tracking-luxe"
                  >
                    Send Purchase Inquiry →
                  </button>

                  <div className="pt-2 text-center">
                    <span className="font-mono text-[10px] uppercase text-stone block">or instant WhatsApp</span>
                    <a
                      href={getWhatsAppEnquiryUrl(selectedItem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase text-[#25D366] hover:underline"
                    >
                      <span>Inquire via WhatsApp</span>
                      <span>↗</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center">
                <span className="font-mono text-xs uppercase text-brass">Inquiry Logged</span>
                <h4 className="mt-3 font-serif text-3xl text-paper">Thank You</h4>
                <p className="mt-3 text-[13px] text-stone">
                  Our furniture atelier will review stock availability and custom dimension options, contacting you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-stone">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-stone">
                Curated Collection
              </span>
              <span className="h-px flex-1 bg-line-light" />
            </div>
          </Reveal>

          <div className="mt-14 max-w-3xl md:mt-20">
            <Reveal as="div" y={50} duration={1.3} start="top 88%">
              <TextReveal
                as="h1"
                className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.05] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.1}
              >
                <span className="block" data-line>Shop the Look —</span>
                <span className="block" data-line>
                  <em className="italic text-brass">bespoke edition pieces</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                Signature furniture, monolithic travertine tables, and artisanal lighting fixtures designed for our private residential commissions — now available to order individually.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filter Strip & Grid */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 border-b border-line pb-8">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2.5 font-mono text-[11px] uppercase tracking-luxe transition-all duration-300 ${
                  activeCategory === c
                    ? "bg-ink text-paper"
                    : "border border-line text-taupe hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <Reveal
                key={item.id}
                as="div"
                y={30}
                duration={1.1}
                delay={idx * 0.06}
                start="top 90%"
              >
                <div className="group flex h-full flex-col justify-between rounded-xs border border-line bg-paper p-6 transition-all duration-500 hover:border-line-hover hover:bg-paper-2">
                  <div>
                    <div className="overflow-hidden rounded-xs bg-paper-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-taupe">
                      <span className="uppercase">{item.category}</span>
                      <span>{item.leadTime}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl text-ink group-hover:text-brass transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-mono text-[12px] text-brass">
                      {item.priceEstimate}
                    </p>

                    <p className="mt-4 text-[13px] leading-relaxed text-taupe font-sans">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-1.5 border-t border-line pt-4 font-mono text-[11px] text-ink/75">
                      <div className="flex justify-between">
                        <span className="text-taupe">Dimensions:</span>
                        <span>{item.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-taupe">Featured In:</span>
                        <span className="text-right">{item.featuredIn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="block w-full rounded-xs border border-ink py-3 text-center font-mono text-[11px] uppercase tracking-luxe text-ink transition-all duration-300 hover:bg-ink hover:text-paper"
                    >
                      Enquire to Purchase →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
