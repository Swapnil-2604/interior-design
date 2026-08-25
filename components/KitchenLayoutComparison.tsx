"use client";

import { useState } from "react";
import { PlateKitchenL, PlateKitchenU } from "./plates";

export default function KitchenLayoutComparison() {
  const [activeLayout, setActiveLayout] = useState<"both" | "L" | "U">("both");

  return (
    <div className="my-10 border border-line bg-paper-2 p-6 sm:p-8 rounded-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6 mb-8">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block">
            Architectural Floorplan Comparison
          </span>
          <h3 className="font-serif text-2xl font-light italic text-ink">
            L-Shaped vs U-Shaped Kitchen Layout Geometry
          </h3>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 bg-paper p-1 border border-line rounded-xs">
          <button
            onClick={() => setActiveLayout("both")}
            className={`font-mono text-[10px] uppercase tracking-luxe px-3 py-1.5 transition-colors rounded-xs ${
              activeLayout === "both" ? "bg-brass text-ink font-bold" : "text-taupe hover:text-ink"
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setActiveLayout("L")}
            className={`font-mono text-[10px] uppercase tracking-luxe px-3 py-1.5 transition-colors rounded-xs ${
              activeLayout === "L" ? "bg-brass text-ink font-bold" : "text-taupe hover:text-ink"
            }`}
          >
            L-Shaped Plan
          </button>
          <button
            onClick={() => setActiveLayout("U")}
            className={`font-mono text-[10px] uppercase tracking-luxe px-3 py-1.5 transition-colors rounded-xs ${
              activeLayout === "U" ? "bg-brass text-ink font-bold" : "text-taupe hover:text-ink"
            }`}
          >
            U-Shaped Plan
          </button>
        </div>
      </div>

      {/* Diagrams Grid */}
      <div
        className={`grid gap-8 ${
          activeLayout === "both" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-xl mx-auto"
        }`}
      >
        {/* L-Shaped Layout Plate & Photography */}
        {(activeLayout === "both" || activeLayout === "L") && (
          <div className="flex flex-col border border-line bg-paper p-6 rounded-xs space-y-4">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-xs uppercase tracking-luxe text-brass font-bold">
                01. L-Shaped Kitchen Layout
              </span>
              <span className="font-mono text-[10px] text-taupe">Open Plan Flow</span>
            </div>

            {/* Real Authentic Interior Photography */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xs border border-line bg-paper-2 shadow-sm">
              <img
                src="/images/kitchen-l-shaped-real.jpg"
                alt="Real Authentic L-Shaped Kitchen Interior Photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floorplan Plate */}
            <PlateKitchenL className="h-[220px] sm:h-[260px] w-full text-ink border-t border-line pt-4" />

            <div className="space-y-1.5 text-[12px] leading-relaxed text-taupe border-t border-line pt-3">
              <p className="font-medium text-ink">• Anchors 2 perpendicular perimeter walls at 90°.</p>
              <p>• Leaves central floor open for island or dining transition.</p>
              <p>• Best for open plan living & entertaining spaces.</p>
            </div>
          </div>
        )}

        {/* U-Shaped Layout Plate & Photography */}
        {(activeLayout === "both" || activeLayout === "U") && (
          <div className="flex flex-col border border-line bg-paper p-6 rounded-xs space-y-4">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-xs uppercase tracking-luxe text-brass font-bold">
                02. U-Shaped Kitchen Layout
              </span>
              <span className="font-mono text-[10px] text-taupe">3-Side Continuous Enclosure</span>
            </div>

            {/* Real Authentic Interior Photography */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xs border border-line bg-paper-2 shadow-sm">
              <img
                src="/images/kitchen-u-shaped-real.jpg"
                alt="Real Authentic U-Shaped Kitchen Interior Photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floorplan Plate */}
            <PlateKitchenU className="h-[220px] sm:h-[260px] w-full text-ink border-t border-line pt-4" />

            <div className="space-y-1.5 text-[12px] leading-relaxed text-taupe border-t border-line pt-3">
              <p className="font-medium text-ink">• Wraps 3 continuous perimeter walls.</p>
              <p>• Provides maximum counter surface & dedicated storage runs.</p>
              <p>• Best for passionate home cooks & dedicated prep zones.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
