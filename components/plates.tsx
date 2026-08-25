"use client";

/**
 * Bespoke SVG "technical plates" used as the project visuals.
 * Drawn in the language of an architecture office: thin linework,
 * hatching, dimension ticks and micro-captions. Monochrome via
 * currentColor so they inherit ink/paper from the surrounding section.
 */

const MONO = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: 10,
  letterSpacing: "0.18em",
} as const;

function Caption({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} {...MONO} fill="currentColor" stroke="none">
      {children}
    </text>
  );
}

function Ticks({
  y,
  from,
  to,
  step,
}: {
  y: number;
  from: number;
  to: number;
  step: number;
}) {
  const ticks = [];
  for (let v = from; v <= to + 0.001; v += step) {
    ticks.push(v);
  }
  return (
    <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1">
      {ticks.map((v) => (
        <line key={v} x1={v} y1={y - 3} x2={v} y2={y + 3} />
      ))}
      <line x1={from} y1={y} x2={to} y2={y} strokeOpacity="0.35" strokeDasharray="2 4" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 01 — Elevation study: an arched doorway on a planed wall       */
/* ------------------------------------------------------------------ */
export function PlateArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 01 — ELEVATION</Caption>
      <Caption x={56} y={436}>DOORWAY · Ø120 · R60</Caption>

      {/* doorway arch */}
      <path
        d="M140 460 V272 C140 218 174 196 200 196 C226 196 260 218 260 272 V460"
        strokeWidth="1.5"
      />
      {/* door leaf */}
      <path
        d="M140 460 V280 C140 236 152 216 200 216 M260 460 V280 C260 236 248 216 200 216"
        strokeOpacity="0.4"
      />
      {/* reveals */}
      <line x1="128" y1="196" x2="128" y2="460" strokeOpacity="0.4" strokeDasharray="3 5" />
      <line x1="272" y1="196" x2="272" y2="460" strokeOpacity="0.4" strokeDasharray="3 5" />

      {/* floor plane */}
      <line x1="40" y1="460" x2="360" y2="460" strokeWidth="1.5" />
      <g strokeOpacity="0.35">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={64 + i * 10} y1={460} x2={58 + i * 10} y2={472} />
        ))}
      </g>

      {/* sun arc */}
      <path
        d="M68 118 A52 52 0 0 1 172 118"
        strokeOpacity="0.5"
        strokeDasharray="1 6"
      />
      <circle cx="96" cy="92" r="6" strokeWidth="1" strokeOpacity="0.7" />

      {/* dimension ticks */}
      <Ticks y={484} from={40} to={360} step={80} />
      <Caption x={176} y={502}>4.8 M</Caption>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 02 — Plan study: a ground-floor arrangement                    */
/* ------------------------------------------------------------------ */
export function PlatePlan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 02 — PLAN</Caption>

      {/* external walls (double line) */}
      <g strokeWidth="1.2">
        <rect x="64" y="64" width="272" height="372" />
        <rect x="72" y="72" width="256" height="356" />
      </g>

      {/* internal partitions */}
      <g strokeWidth="1.2" strokeOpacity="0.85">
        <line x1="150" y1="72" x2="150" y2="220" />
        <line x1="158" y1="72" x2="158" y2="220" />
        <line x1="250" y1="220" x2="250" y2="428" />
        <line x1="258" y1="220" x2="258" y2="428" />
      </g>

      {/* door swings */}
      <g strokeOpacity="0.55">
        <path d="M150 200 A42 42 0 0 1 192 158" />
        <path d="M250 300 A40 40 0 0 0 210 340" />
      </g>

      {/* stair */}
      <g strokeWidth="1" strokeOpacity="0.75">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={300 - i * 12} y1={380 - i * 14} x2={300 - (i + 1) * 12} y2={380 - i * 14} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={300 - (i + 1) * 12} y1={380 - i * 14} x2={300 - (i + 1) * 12} y2={380 - (i + 1) * 14} />
        ))}
      </g>

      {/* room labels */}
      <Caption x={86} y={132}>SALON</Caption>
      <Caption x={182} y={132}>GALERIE</Caption>
      <Caption x={182} y={330}>BUREAU</Caption>
      <Caption x={282} y={330}>CELLA</Caption>

      {/* scale bar */}
      <line x1="64" y1="452" x2="184" y2="452" strokeWidth="1.2" />
      <g strokeOpacity="0.5">
        <line x1="64" y1="448" x2="64" y2="456" />
        <line x1="104" y1="448" x2="104" y2="456" />
        <line x1="144" y1="448" x2="144" y2="456" />
        <line x1="184" y1="448" x2="184" y2="456" />
      </g>
      <Caption x={196} y={456}>0·1·2 M</Caption>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 03 — Section study: two levels with a hanging light            */
/* ------------------------------------------------------------------ */
export function PlateSection({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 03 — SECTION</Caption>

      {/* upper slab */}
      <g strokeWidth="1.5">
        <line x1="70" y1="150" x2="330" y2="150" />
        <line x1="70" y1="156" x2="330" y2="156" />
      </g>
      {/* left wall */}
      <g strokeWidth="1.5">
        <line x1="70" y1="150" x2="70" y2="420" />
        <line x1="76" y1="150" x2="76" y2="420" />
      </g>
      {/* ground slab */}
      <g strokeWidth="1.5">
        <line x1="70" y1="420" x2="330" y2="420" />
        <line x1="70" y1="426" x2="330" y2="426" />
      </g>

      {/* glazing on the right with mullions */}
      <g strokeWidth="1" strokeOpacity="0.7">
        <line x1="330" y1="156" x2="330" y2="420" />
        {[200, 244, 288, 332, 376].map((y) => (
          <line key={y} x1="326" y1={y} x2="330" y2={y} />
        ))}
      </g>

      {/* pendant light */}
      <g strokeWidth="1" strokeOpacity="0.85">
        <line x1="230" y1="156" x2="230" y2="196" />
        <path d="M210 196 H250 L238 236 H222 Z" fill="currentColor" fillOpacity="0.06" />
      </g>
      <path d="M214 252 L246 252 L256 276 L204 276 Z" strokeOpacity="0.35" strokeDasharray="3 4" />

      {/* chaise silhouette */}
      <g strokeWidth="1.2" strokeOpacity="0.85">
        <path d="M110 420 V388 C110 372 124 366 140 366 C162 366 176 376 182 392 L186 420" />
        <line x1="120" y1="420" x2="120" y2="404" />
        <line x1="140" y1="420" x2="140" y2="400" />
        <line x1="164" y1="420" x2="164" y2="404" />
      </g>

      {/* table + chair */}
      <g strokeWidth="1.1" strokeOpacity="0.8">
        <line x1="276" y1="408" x2="314" y2="408" />
        <line x1="280" y1="408" x2="280" y2="420" />
        <line x1="310" y1="408" x2="310" y2="420" />
        <path d="M288 356 V408" />
        <rect x="278" y="352" width="20" height="4" />
        <rect x="274" y="368" width="6" height="6" />
      </g>

      {/* ceiling fixture + dimension note */}
      <Caption x={212} y={282}>PENDANT · Ø32</Caption>
      <Caption x={86} y={180}>SLAB · 220</Caption>

      <Ticks y={484} from={70} to={330} step={52} />
      <Caption x={180} y={502}>8.4 M</Caption>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 04 — Light study: clerestory shafts on a cool morning          */
/* ------------------------------------------------------------------ */
export function PlateLight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 04 — LIGHT</Caption>

      {/* clerestory window grid */}
      <g strokeWidth="1.2">
        <rect x="72" y="100" width="180" height="120" />
        <line x1="132" y1="100" x2="132" y2="220" />
        <line x1="192" y1="100" x2="192" y2="220" />
        <line x1="72" y1="160" x2="252" y2="160" />
      </g>

      {/* sun */}
      <circle cx="90" cy="70" r="9" strokeWidth="1.2" strokeOpacity="0.8" />
      <g strokeOpacity="0.5">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              x1={90 + Math.cos(a) * 13}
              y1={70 + Math.sin(a) * 13}
              x2={90 + Math.cos(a) * 18}
              y2={70 + Math.sin(a) * 18}
            />
          );
        })}
      </g>

      {/* light shafts into the room */}
      <g strokeOpacity="0.3" strokeDasharray="2 6">
        <line x1="84" y1="220" x2="120" y2="420" />
        <line x1="120" y1="220" x2="180" y2="420" />
        <line x1="156" y1="220" x2="240" y2="420" />
        <line x1="192" y1="220" x2="300" y2="420" />
      </g>

      {/* floor plane */}
      <line x1="40" y1="420" x2="360" y2="420" strokeWidth="1.5" />
      {/* shadow pools */}
      <g strokeOpacity="0.25">
        <polygon points="84,420 300,420 224,420 60,420" />
        <line x1="120" y1="420" x2="180" y2="420" strokeOpacity="0.5" />
      </g>

      {/* lone chair caught in light */}
      <g strokeWidth="1.1" strokeOpacity="0.8">
        <rect x="232" y="396" width="6" height="24" />
        <rect x="222" y="384" width="26" height="6" />
        <line x1="238" y1="384" x2="238" y2="348" />
      </g>

      <Caption x={238} y={462}>NORTH FACADE · AM 9:12</Caption>
      <Caption x={56} y={462}>LVL +0.00</Caption>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 05 — L-Shaped Kitchen Layout Floorplan                        */
/* ------------------------------------------------------------------ */
export function PlateKitchenL({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 05 — L-SHAPED KITCHEN</Caption>

      {/* Room outer perimeter walls */}
      <rect x="64" y="80" width="272" height="340" strokeWidth="1.5" />
      <rect x="72" y="88" width="256" height="324" strokeWidth="1" strokeDasharray="3 3" />

      {/* L-Shaped Counter Run (Top & Left walls) */}
      <path
        d="M72 88 H290 V148 H132 V360 H72 Z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="1.5"
      />

      {/* Sink (Wasch) on Top Run */}
      <rect x="150" y="96" width="48" height="36" strokeWidth="1.2" />
      <circle cx="164" cy="114" r="5" strokeWidth="1" />
      <circle cx="184" cy="114" r="5" strokeWidth="1" />
      <Caption x={154} y={144}>SINK</Caption>

      {/* Cooktop/Hob (Herd) on Left Run */}
      <rect x="80" y="210" width="40" height="48" strokeWidth="1.2" />
      <circle cx="92" cy="224" r="6" strokeWidth="1" />
      <circle cx="108" cy="224" r="6" strokeWidth="1" />
      <circle cx="92" cy="244" r="6" strokeWidth="1" />
      <circle cx="108" cy="244" r="6" strokeWidth="1" />
      <Caption x={80} y={272}>HOB</Caption>

      {/* Fridge (Kühl) at Left End */}
      <rect x="76" y="300" width="50" height="52" strokeWidth="1.5" />
      <line x1="76" y1="326" x2="126" y2="326" strokeWidth="1" />
      <Caption x={82} y={320}>FRIDGE</Caption>

      {/* Work Triangle (Dashed Brass Line) */}
      <path
        d="M174 114 L100 234 L101 326 Z"
        stroke="#c5a059"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* Open Dining/Living Flow Arrow */}
      <path d="M220 260 H300 M280 250 L300 260 L280 270" strokeWidth="1.2" strokeOpacity="0.7" />
      <Caption x={200} y={245}>OPEN PLAN FLOW</Caption>
      <Caption x={210} y={290}>DINING ZONE &rarr;</Caption>

      {/* Scale & Caption */}
      <Ticks y={444} from={64} to={336} step={68} />
      <Caption x={160} y={462}>LAYOUT: 4.2M x 3.6M</Caption>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 06 — U-Shaped Kitchen Layout Floorplan                        */
/* ------------------------------------------------------------------ */
export function PlateKitchenU({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <Caption x={56} y={60}>FIG. 06 — U-SHAPED KITCHEN</Caption>

      {/* Room outer perimeter walls */}
      <rect x="64" y="80" width="272" height="340" strokeWidth="1.5" />

      {/* U-Shaped Counter Run (Left, Top, Right walls) */}
      <path
        d="M72 360 V88 H328 V360 H268 V148 H132 V360 Z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="1.5"
      />

      {/* Cooktop/Hob on Top Center Run */}
      <rect x="176" y="94" width="48" height="40" strokeWidth="1.2" />
      <circle cx="190" cy="106" r="6" strokeWidth="1" />
      <circle cx="210" cy="106" r="6" strokeWidth="1" />
      <circle cx="190" cy="122" r="6" strokeWidth="1" />
      <circle cx="210" cy="122" r="6" strokeWidth="1" />
      <Caption x={186} y={144}>HOB</Caption>

      {/* Sink on Left Run */}
      <rect x="80" y="180" width="40" height="50" strokeWidth="1.2" />
      <circle cx="100" cy="195" r="5" strokeWidth="1" />
      <circle cx="100" cy="215" r="5" strokeWidth="1" />
      <Caption x={80} y={244}>SINK</Caption>

      {/* Fridge on Right Run */}
      <rect x="280" y="180" width="42" height="50" strokeWidth="1.5" />
      <line x1="280" y1="205" x2="322" y2="205" strokeWidth="1" />
      <Caption x={282} y={200}>FRIDGE</Caption>

      {/* Central Prep Island (Optional) */}
      <rect x="160" y="240" width="80" height="70" strokeWidth="1.2" strokeDasharray="3 3" />
      <Caption x={170} y={280}>PREP ISLAND</Caption>

      {/* Work Triangle (Dashed Brass Line) */}
      <path
        d="M100 205 L200 114 L301 205 Z"
        stroke="#c5a059"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      <Caption x={140} y={350}>ENCLOSED WORK TRIANGLE</Caption>

      {/* Scale & Caption */}
      <Ticks y={444} from={64} to={336} step={68} />
      <Caption x={160} y={462}>LAYOUT: 3.8M x 3.8M</Caption>
    </svg>
  );
}

export const PLATES = {
  arch: PlateArch,
  plan: PlatePlan,
  section: PlateSection,
  light: PlateLight,
  kitchenL: PlateKitchenL,
  kitchenU: PlateKitchenU,
} as const;

export type PlateKey = keyof typeof PLATES;
  