import type { PlateKey } from "@/components/plates";

export const studio = {
  name: "LUMIÈRE INTERIORS",
  tagline: "Interior Design • Architecture • Bespoke Spaces",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/services#process" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

/* ── Services ─────────────────────────────────────────────────────────── */

export const services = [
  {
    n: "01",
    slug: "living-room",
    title: "Living Room",
    desc: "The heart of the home — designed for conversation, comfort and the quiet pleasure of a room that just works.",
    features: ["Furniture layout", "Lighting design", "Custom joinery", "Soft furnishing"],
    image: "/images/rooms/living-room.png",
  },
  {
    n: "02",
    slug: "kitchen",
    title: "Modular Kitchen",
    desc: "Workflows, storage and finishes choreographed around how you cook — not how a catalogue photographs.",
    features: ["Layout planning", "Countertop selection", "Hardware", "Appliance integration"],
    image: "/images/rooms/kitchen.png",
  },
  {
    n: "03",
    slug: "bedroom",
    title: "Bedroom",
    desc: "A room that holds rest. Calm proportion, warm materials and storage that disappears into the architecture.",
    features: ["Wardrobe design", "Lighting layers", "Material palette", "Acoustic comfort"],
    image: "/images/rooms/bedroom.png",
  },
  {
    n: "04",
    slug: "dining",
    title: "Dining Area",
    desc: "Where the table is the anchor — proportioned to the room, lit to flatter, built to last.",
    features: ["Table selection", "Seating design", "Ambient lighting", "Wall treatments"],
    image: "/images/rooms/dining.png",
  },
  {
    n: "05",
    slug: "study",
    title: "Home Office",
    desc: "A workspace that sharpens focus without sacrificing the feeling of home.",
    features: ["Ergonomic planning", "Storage solutions", "Task lighting", "Acoustic treatment"],
    image: "/images/rooms/study.png",
  },
  {
    n: "06",
    slug: "bath",
    title: "Bathroom & Spa",
    desc: "A single vision of luxury — stone, steam and restorative calm in every material decision.",
    features: ["Stone selection", "Fixture design", "Wet room planning", "Lighting atmosphere"],
    image: "/images/rooms/bath.png",
  },
  {
    n: "07",
    slug: "entry",
    title: "Entry & Foyer",
    desc: "The first room is a threshold — it sets the register for the rest of the home.",
    features: ["Threshold design", "Console & art", "Lighting", "Architectural transition"],
    image: "/images/rooms/entry.png",
  },
  {
    n: "08",
    slug: "living-room",
    title: "Full Home Interior",
    desc: "A single vision, carried through every room — consistent material language, unified flow, one accountable team.",
    features: ["Complete design", "Material coordination", "Project management", "Turnkey delivery"],
    image: "/images/signature-living-room.png",
  },
];


/* ── Design Process ───────────────────────────────────────────────────── */

export const process = [
  {
    n: "01",
    title: "Consultation",
    brief: "Listen first. We understand your requirements, lifestyle, property, preferences and budget — the raw material of every good design.",
    detail: "A site visit, a conversation, and a shared brief that ensures we are solving the right problem before a single line is drawn.",
  },
  {
    n: "02",
    title: "Design & Planning",
    brief: "Where ideas take form. Layouts, mood boards, 2D drawings and photoreal 3D visualisations.",
    detail: "We present concepts that are buildable, not just beautiful — every plan is tested against budget, structure and the way you actually live.",
  },
  {
    n: "03",
    title: "Material Selection",
    brief: "Laminates, veneers, hardware, lighting, countertops and finishes — chosen for character, durability and how they age.",
    detail: "Touch, compare, decide. We guide you through a curated material library so every surface earns its place.",
  },
  {
    n: "04",
    title: "Execution",
    brief: "Professional site supervision, trade coordination and installation — the part where drawings become rooms.",
    detail: "A dedicated project manager ensures quality at every stage. Weekly updates, transparent timelines, zero surprises.",
  },
  {
    n: "05",
    title: "Final Handover",
    brief: "Final inspection, finishing touches, handover and post-project support — the last detail matters as much as the first.",
    detail: "We don't leave until every joint is tight, every surface is clean, and the room feels exactly like the vision we started with.",
  },
];

/* ── Philosophy ───────────────────────────────────────────────────────── */

export const philosophy = [
  {
    n: "I",
    word: "Function",
    note: "Every object earns its place. A room must work before it is allowed to be beautiful.",
  },
  {
    n: "II",
    word: "Form",
    note: "Proportion is the quiet luxury. We edit until only the essential line remains.",
  },
  {
    n: "III",
    word: "Material",
    note: "Oak, lime, stone, brass — honest materials allowed to age with dignity.",
  },
  {
    n: "IV",
    word: "Light",
    note: "Light is the first material we pour. It shapes a space before anything is placed in it.",
  },
  {
    n: "V",
    word: "Detail",
    note: "The last millimetre is where character lives. We chase it without compromise.",
  },
];

/* ── Design Styles ────────────────────────────────────────────────────── */

export const styles = [
  {
    name: "Modern",
    desc: "Clean lines, open spaces and a palette that breathes — less ornament, more intention.",
    plate: "arch" as PlateKey,
  },
  {
    name: "Minimal",
    desc: "The art of restraint. Every object earns its place through function and proportion alone.",
    plate: "light" as PlateKey,
  },
  {
    name: "Contemporary",
    desc: "Forward-looking without being trend-driven — a living design language that evolves with the occupant.",
    plate: "plan" as PlateKey,
  },
  {
    name: "Luxury",
    desc: "Rich materials, considered details and an atmosphere of understated opulence.",
    plate: "section" as PlateKey,
  },
  {
    name: "Industrial",
    desc: "Raw honesty — exposed structure, honest materials and the beauty of the unfinished.",
    plate: "arch" as PlateKey,
  },
  {
    name: "Traditional",
    desc: "Timeless proportion and craftsmanship — a language that has endured for centuries.",
    plate: "plan" as PlateKey,
  },
  {
    name: "Modern Indian",
    desc: "Where heritage meets contemporary craft — regional materials, artisan details, modern sensibility.",
    plate: "light" as PlateKey,
  },
];

/* ── Materials ────────────────────────────────────────────────────────── */

export const materials = [
  { category: "Plywood", finish: "Marine, Commercial, BWR", application: "Structural, carcasses, furniture", benefit: "Moisture resistance, durability, load-bearing strength" },
  { category: "Laminates", finish: "Matte, Gloss, Textured, Post-formed", application: "Cabinets, wardrobes, countertops", benefit: "Wide colour range, scratch resistance, easy maintenance" },
  { category: "Veneers", finish: "Natural, Reconstituted, Backed", application: "Feature walls, doors, furniture", benefit: "Real wood grain, warmth, premium finish" },
  { category: "Acrylic", finish: "High-gloss, Matte, Mirror", application: "Kitchen shutters, wardrobes, panels", benefit: "Lustre, depth of colour, seamless surfaces" },
  { category: "Glass", finish: "Tempered, Frosted, Tinted, Bevelled", application: "Partitions, shelving, backsplashes", benefit: "Light transmission, visual depth, easy cleaning" },
  { category: "Marble", finish: "Polished, Honed, Leathered", application: "Flooring, countertops, accent walls", benefit: "Timeless luxury, unique veining, thermal mass" },
  { category: "Quartz", finish: "Polished, Textured, Veined", application: "Kitchen countertops, vanities", benefit: "Non-porous, stain-resistant, consistent colour" },
  { category: "Hardware", finish: "Brass, Chrome, Matte Black, Nickel", application: "Handles, hinges, pulls, fittings", benefit: "Tactile quality, durability, visual accent" },
  { category: "Lighting", finish: "Pendant, Recessed, Track, Floor", application: "Ambient, task, accent lighting", benefit: "Layered illumination, mood control, energy efficiency" },
  { category: "Paint", finish: "Emulsion, Distemper, Texture, Luxury", application: "Walls, ceilings, exterior", benefit: "Colour fidelity, washability, coverage" },
  { category: "Textures", finish: "Stone cladding, Wood panelling, Wallpaper", application: "Feature walls, ceilings, partitions", benefit: "Tactile depth, acoustic absorption, visual interest" },
  { category: "Flooring", finish: "Hardwood, Marble, Vitrified, Vinyl", application: "Living areas, bedrooms, wet areas", benefit: "Wear resistance, aesthetic range, thermal comfort" },
];

/* ── Before / After ───────────────────────────────────────────────────── */

export const beforeAfter = [
  {
    title: "The Living Room",
    subtitle: "From a cramped builder layout with a small window to an open sanctuary of light.",
    beforeNote: "Original 1.2m window opening · Builder beige walls · Unoptimized layout",
    afterNote: "Expanded 4.5m floor-to-ceiling glass · Travertine hearth · Cove lighting",
    beforeImage: "/images/before-after/living-room-before.png",
    afterImage: "/images/before-after/living-room-after.png",
  },
  {
    title: "The Kitchen",
    subtitle: "From a cramped galley layout to a generous, open culinary architecture.",
    beforeNote: "Closed galley wall · Worn laminate counter · Single central bulb",
    afterNote: "Open architectural flow · Nero Marquina marble island · Pocket millwork",
    beforeImage: "/images/before-after/kitchen-before.png",
    afterImage: "/images/before-after/kitchen-after.png",
  },
  {
    title: "The Bedroom",
    subtitle: "From an un-proportioned box to a serene master suite.",
    beforeNote: "Plain un-articulated walls · Cramped bed position · Exposed wiring",
    afterNote: "Fluted walnut acoustic wall · Centered platform bed · Indirect cove light",
    beforeImage: "/images/before-after/bedroom-before.png",
    afterImage: "/images/before-after/bedroom-after.png",
  },
];

/* ── Projects (Featured) ──────────────────────────────────────────────── */

export const projects = [
  {
    n: "01",
    name: "Villa Meridian",
    location: "Palm Springs, California",
    type: "Residential",
    bhk: "Villa",
    area: "520 m²",
    style: "Modern",
    year: "2025",
    desc: "A desert retreat turned on its axis to follow the sun. Lime-washed walls, travertine floors and a sequence of rooms that open one into the next.",
    plate: "arch" as PlateKey,
    image: "/images/projects/villa-meridian.png",
  },
  {
    n: "02",
    name: "Maison Verre",
    location: "Lyon, France",
    type: "Commercial",
    bhk: "Commercial",
    area: "340 m²",
    style: "Contemporary",
    year: "2025",
    desc: "A former glassworks reborn as a gallery and café — raw concrete left honest, daylight admitted through a single monumental clerestory.",
    plate: "light" as PlateKey,
    image: "/images/projects/maison-verre.png",
  },
  {
    n: "03",
    name: "The Loft at Atlas",
    location: "New York, New York",
    type: "Residential",
    bhk: "3 BHK",
    area: "280 m²",
    style: "Industrial",
    year: "2024",
    desc: "A full-floor loft delivered turnkey around a walnut-clad core. Custom joinery throughout; every millimetre accounted for before construction began.",
    plate: "section" as PlateKey,
    image: "/images/projects/loft-at-atlas.png",
  },
  {
    n: "04",
    name: "Hôtel Ombelle",
    location: "Lisbon, Portugal",
    type: "Hospitality",
    bhk: "Commercial",
    area: "1,800 m²",
    style: "Luxury",
    year: "2024",
    desc: "Thirty-eight rooms and a courtyard bar, each planned on paper at full scale before a single trade broke ground. Quiet, tactile, unhurried.",
    plate: "plan" as PlateKey,
    image: "/images/projects/hotel-ombelle.png",
  },
];

export const projectFilters = [
  "All",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "Villa",
  "Commercial",
];

/* ── Why Choose Us ────────────────────────────────────────────────────── */

export const whyChooseUs = [
  {
    n: "01",
    title: "Personalized Design",
    desc: "No templates. Every design is born from your brief, your lifestyle and your space.",
  },
  {
    n: "02",
    title: "One Team, End to End",
    desc: "Design through execution, one accountable studio — no finger-pointing between designers and contractors.",
  },
  {
    n: "03",
    title: "Transparent Pricing",
    desc: "Detailed quotes before work begins. No hidden costs, no surprise invoices.",
  },
  {
    n: "04",
    title: "Quality Materials",
    desc: "Sourced from trusted suppliers, specified for longevity — not just how they photograph on day one.",
  },
  {
    n: "05",
    title: "Detailed Execution",
    desc: "Every joint, every finish, every millimetre matters. We supervise every stage of the build.",
  },
  {
    n: "06",
    title: "Reliable Timelines",
    desc: "A schedule that holds. Weekly updates, milestone tracking, and a handover date you can count on.",
  },
];

/* ── About ────────────────────────────────────────────────────────────── */

export const about = {
  story:
    "Lumière Interiors was founded in 2012 with a simple conviction: a space should be felt before it is seen. What began as a two-person practice in Los Angeles has grown into a studio of architects, designers and project managers who share one belief — that good design is an act of attention, not decoration.",
  philosophy:
    "We don't chase trends. We study proportion, material and light until a room feels inevitable — as though it could not have been any other way. Our work is guided by function first, form always, and an obsession with the details that separate a designed space from a decorated one.",
  mission:
    "To create interiors that hold the shape of the people who live in them — spaces that feel personal, considered and built to endure.",
  approach:
    "Every project begins with listening. We map how you move through your day, what you see when you wake, where light falls at four in the afternoon. From that understanding, we design rooms that work as beautifully as they look.",
  stats: [
    { value: "2012", label: "Founded" },
    { value: "40+", label: "Projects Completed" },
    { value: "6", label: "Countries" },
    { value: "14", label: "Team Members" },
  ],
};

/* ── Team ─────────────────────────────────────────────────────────────── */

export const team = [
  {
    name: "Aria Moreau",
    role: "Founder & Principal Designer",
    desc: "A trained architect with 18 years of experience spanning residential, hospitality and commercial interiors across three continents.",
  },
  {
    name: "Daniel Kirchner",
    role: "Head of Design",
    desc: "Former furniture maker turned spatial designer — obsessed with joinery, proportion and the moment a room comes together.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Interior Designer",
    desc: "Specializes in material-rich residential projects — layering texture, colour and light into rooms that feel warm and considered.",
  },
  {
    name: "Léa Fontaine",
    role: "Project Manager",
    desc: "The person who ensures every project stays on brief, on time and on budget — the calm at the centre of every build.",
  },
];

/* ── Testimonials ─────────────────────────────────────────────────────── */

export const testimonials = [
  {
    name: "Sarah & James Whitfield",
    project: "Villa Meridian — Palm Springs",
    rating: 5,
    text: "Lumière didn't just design our home — they understood how we live. Every room feels like it was made for us, because it was.",
  },
  {
    name: "Thomas Bergström",
    project: "Maison Verre — Lyon",
    rating: 5,
    text: "A rare studio that treats a commercial project with the same care as a private home. The attention to detail was extraordinary.",
  },
  {
    name: "Elena Voss",
    project: "The Loft at Atlas — New York",
    rating: 5,
    text: "We gave them a blank floor and they gave us a home that feels like it has been there for decades. Quiet confidence in every corner.",
  },
];

/* ── Locations ────────────────────────────────────────────────────────── */

export const locations = [
  { city: "Los Angeles", country: "United States", projects: 18 },
  { city: "Lyon", country: "France", projects: 8 },
  { city: "Lisbon", country: "Portugal", projects: 6 },
  { city: "New York", country: "United States", projects: 5 },
  { city: "Palm Springs", country: "United States", projects: 3 },
];

/* ── Blog / Journal ───────────────────────────────────────────────────── */

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  heroImage: string;
  content: {
    introduction: string;
    sections: Array<{ heading: string; body: string }>;
    quote: string;
    takeaways: string[];
  };
}

export const blogPosts: JournalArticle[] = [
  {
    slug: "modern-2bhk-interior-ideas",
    title: "Modern 2BHK Interior Ideas That Maximise Every Square Metre",
    category: "Space Planning",
    date: "February 14, 2026",
    readTime: "5 min read",
    author: "Aria Moreau, Principal Designer",
    excerpt: "Small homes deserve big thinking. We break down layout strategies that make a 2BHK feel generous without adding a single wall.",
    heroImage: "/images/rooms/living-room/1.png",
    content: {
      introduction:
        "Designing a 2BHK apartment is not about shrinking full-scale villa furniture to fit smaller rooms. It is an exercise in spatial intelligence — discovering how light, proportion, and continuous material transitions can turn 90 square metres into an expansive, uncluttered home.",
      sections: [
        {
          heading: "01. Establish Uninterrupted Sightlines",
          body: "When entering a compact home, the eye should meet continuous plane transitions rather than immediate wall partitions. Using low-profile credenzas, pocketing glass doors, and unified travertine floor tiles allows visual depth to extend uninterrupted across living and dining zones.",
        },
        {
          heading: "02. Millwork That Disappears Into the Shell",
          body: "Standard freestanding wardrobes fragment small rooms. By engineering full-height floor-to-ceiling cabinetry painted to match the adjacent lime-plaster wall tone, storage capacity doubles while visual bulk completely vanishes into the background.",
        },
        {
          heading: "03. Layered Cove & Architectural Lighting",
          body: "Single central ceiling lights flatten small spaces and create harsh shadows. Perimeter warm LED coves and indirect low-level wash lighting visually push ceiling planes upward, giving compact rooms volumetric depth after dusk.",
        },
      ],
      quote: "Space is created not by adding square metres, but by eliminating visual friction.",
      takeaways: [
        "Use monolithic neutral floor finishes across all living and circulation zones.",
        "Integrate handleless full-height millwork flush with wall surfaces.",
        "Replace solid partition walls with reeded glass or open timber dividers.",
      ],
    },
  },
  {
    slug: "l-shaped-vs-u-shaped-kitchen",
    title: "L-Shaped vs U-Shaped Kitchen: Which Layout Works for You?",
    category: "Kitchen",
    date: "February 02, 2026",
    readTime: "6 min read",
    author: "Daniel Kirchner, Head of Design",
    excerpt: "The kitchen is the most programmed room in a home. Here is how to choose between two of the most common layouts.",
    heroImage: "/images/rooms/kitchen/2.png",
    content: {
      introduction:
        "Every kitchen layout is an answer to a fundamental question: how do you move between cold storage, prep surfaces, and heat? Understanding the ergonomic physics of L-shaped versus U-shaped configurations ensures your culinary space balances workflow precision with social warmth.",
      sections: [
        {
          heading: "01. The L-Shaped Layout: Social Integration & Open Flow",
          body: "The L-shaped kitchen anchors two adjacent walls, leaving the central floor area open. This layout excels in open-plan homes where an island counter or dining table creates a seamless transition between prep and living zones.",
        },
        {
          heading: "02. The U-Shaped Layout: Maximum Counter Continuous Efficiency",
          body: "Wrapping three walls in continuous stone and cabinetry, the U-shaped configuration provides maximum counter surface area and dedicated storage runs. It creates a private, focused culinary zone ideal for passionate home cooks.",
        },
        {
          heading: "03. Material Selection & Concealed Appliances",
          body: "Regardless of layout geometry, specifying monolithic marble islands, smoked oak pocket door systems, and integrated panel appliances keeps hard working zones looking serene and architectural.",
        },
      ],
      quote: "A well-designed kitchen measures workflow in fluid human steps, not static square feet.",
      takeaways: [
        "Choose L-shaped layouts for multi-user open plan entertaining spaces.",
        "Opt for U-shaped configurations when maximum prep counter run is required.",
        "Incorporate appliance garages to keep counter surfaces free of clutter.",
      ],
    },
  },
  {
    slug: "small-bedroom-storage-ideas",
    title: "Small Bedroom Storage Ideas That Disappear Into the Architecture",
    category: "Bedroom",
    date: "January 24, 2026",
    readTime: "4 min read",
    author: "Priya Sharma, Senior Interior Designer",
    excerpt: "Storage should be invisible when closed and effortless when open. These solutions are both.",
    heroImage: "/images/rooms/bedroom/1.png",
    content: {
      introduction:
        "A master bedroom should hold quiet, not clutter. When bedroom square footage is limited, smart storage design ensures practical storage capacity exists without imposing upon the room's serene visual atmosphere.",
      sections: [
        {
          heading: "01. Headboard Niche & Integrated Nightstand Ledges",
          body: "Rather than adding bulky bedside tables, we recess continuous timber ledges directly into padded headboard wall panels. Dimmable warm reading lights and hidden wireless charging pads maintain clean bedside lines.",
        },
        {
          heading: "02. Cantilevered Platform Bed Storage",
          body: "Elevating the bed frame on a recessed shadow-gap pedestal creates the illusion of floating while housing hydraulic lift-up storage compartments beneath the mattress platform.",
        },
        {
          heading: "03. Full-Height Wardrobes With Touch Latches",
          body: "Eliminating external drawer pulls and hardware in favor of push-to-open touch latches lets wardrobe fronts read as refined architectural paneling rather than heavy furniture.",
        },
      ],
      quote: "True luxury in the bedroom is waking up to uncluttered, serene proportions.",
      takeaways: [
        "Build headboard walls with recessed niches and concealed charging ports.",
        "Specify flush push-latch wardrobe doors matching room wall paint colors.",
        "Utilize bed platform bases for integrated hydraulic linen storage.",
      ],
    },
  },
  {
    slug: "choosing-laminates-material-guide",
    title: "Choosing Laminates: A Material Guide for Interior Surfaces",
    category: "Materials",
    date: "January 15, 2026",
    readTime: "7 min read",
    author: "Daniel Kirchner, Head of Design",
    excerpt: "Not all laminates are equal. We walk through grades, finishes and applications so you can specify with confidence.",
    heroImage: "/images/material-smoked-oak.png",
    content: {
      introduction:
        "Modern surface laminates have evolved from basic synthetic sheets into sophisticated engineered materials. Understanding the distinctions between high-pressure laminates, anti-fingerprint matte surfaces, and post-formed edges is key to specifying durable, beautiful interiors.",
      sections: [
        {
          heading: "01. High-Pressure Laminate (HPL) vs Low-Pressure (LPL)",
          body: "HPL is manufactured under extreme pressure and heat, offering superior impact resistance, scratch tolerance, and moisture proofing — essential for kitchen shutters and high-use cabinetry.",
        },
        {
          heading: "02. Anti-Fingerprint Thermal Matte Surfaces",
          body: "Advanced acrylic-backed super-matte laminates use nanotech coatings that absorb light without reflecting glare, while repelling oils and fingerprints for effortless daily maintenance.",
        },
        {
          heading: "03. Edge Banding & Seamless Corner Detailing",
          body: "The hallmark of premium millwork is seamless edge banding. Utilizing 2mm solid ABS edge tapes with hot-melt PUR adhesives prevents moisture ingress and eliminates dark glue lines.",
        },
      ],
      quote: "Materials should be specified for how gracefully they perform and age over years of touch.",
      takeaways: [
        "Use 1mm+ HPL grade laminates for heavy-traffic kitchen and wardrobe doors.",
        "Specify anti-fingerprint super-matte finishes for dark joinery surfaces.",
        "Ensure PUR hot-melt edge banding is used to prevent moisture peeling.",
      ],
    },
  },
  {
    slug: "modern-false-ceiling-ideas",
    title: "Modern False Ceiling Ideas for Every Room",
    category: "Interior Trends",
    date: "December 28, 2025",
    readTime: "5 min read",
    author: "Aria Moreau, Principal Designer",
    excerpt: "False ceilings do more than hide wiring — they shape acoustics, hold light and define a room's proportions.",
    heroImage: "/images/rooms/dining/1.png",
    content: {
      introduction:
        "The fifth wall of any room — the ceiling — defines the atmospheric envelope of space. Modern ceiling design moves away from heavy decorative drop steps toward subtle perimeter shadow gaps, acoustic micro-perforations, and linear light slots.",
      sections: [
        {
          heading: "01. The 10mm Negative Shadow Reveal",
          body: "Detailing a 10mm recessed shadow channel around ceiling edges detaches the ceiling plane from vertical walls, making room heights feel visually lighter and taller.",
        },
        {
          heading: "02. Concealed Linear Light Slots & Warm Perimeter Coves",
          body: "Recessing architectural LED magnetic tracks into dark linear ceiling slots provides flexible spotlighting while keeping the main white plaster ceiling clean of visible fixtures.",
        },
        {
          heading: "03. Acoustic Plaster & Micro-Perforated Timber Trims",
          body: "In open dining and living areas, seamless acoustic ceiling plasters absorb reverberation, creating intimate acoustic conditions during dinner conversations.",
        },
      ],
      quote: "Light should flow from the architecture itself, never from intrusive fixtures.",
      takeaways: [
        "Detail 10mm shadow gaps at wall-ceiling junctions for architectural levity.",
        "Integrate recessed magnetic light tracks flush with gypsum plasterboards.",
        "Incorporate acoustic absorption materials above ceiling planes in high rooms.",
      ],
    },
  },
  {
    slug: "complete-guide-to-3bhk-interior-cost",
    title: "The Complete Guide to 3BHK Interior Cost",
    category: "Budget",
    date: "December 10, 2025",
    readTime: "8 min read",
    author: "Léa Fontaine, Project Manager",
    excerpt: "What does a full interior actually cost? We break down the real numbers behind a typical 3BHK project.",
    heroImage: "/images/rooms/living-room/4.png",
    content: {
      introduction:
        "Commissioning an interior design team for a 3BHK home requires clarity on financial allocations. Budget transparently splits across civil works, custom joinery, loose furniture, lighting scenography, and professional project supervision.",
      sections: [
        {
          heading: "01. Civil & Structural Modifications (15–20%)",
          body: "Demolition, electrical re-wiring, plumbing upgrades, plastering, and false ceiling works form the physical foundation upon which all surface finishes rest.",
        },
        {
          heading: "02. Custom Millwork & Built-in Joinery (40–45%)",
          body: "Modular kitchen systems, living room media consoles, bedroom wardrobes, and bathroom vanities represent the largest investment component in a turnkey home.",
        },
        {
          heading: "03. Materials, Loose Furniture & Lighting (30–35%)",
          body: "Stone countertops, engineered hardwood or marble flooring, lounge seating, dining sets, architectural fixtures, and soft textiles define the tactile experience.",
        },
      ],
      quote: "A clear, itemised budget schedule built upfront prevents cost overrun during execution.",
      takeaways: [
        "Allocate 40-45% of total budget to custom built-in millwork and kitchen.",
        "Maintain a 10% contingency reserve for unforeseen structural modifications.",
        "Request itemized unit rate breakdowns before issuing purchase orders.",
      ],
    },
  },
];

/* ── Cost Calculator Config ───────────────────────────────────────────── */

export const costCalculator = {
  propertyTypes: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa", "Commercial"],
  designStyles: ["Modern", "Minimal", "Contemporary", "Luxury", "Industrial", "Traditional"],
  budgetRanges: ["Essential", "Premium", "Luxury"],
  // Base cost per sq ft for each style (configurable)
  styleRates: {
    Modern: { Essential: 1800, Premium: 2800, Luxury: 4200 },
    Minimal: { Essential: 1600, Premium: 2600, Luxury: 3800 },
    Contemporary: { Essential: 2000, Premium: 3000, Luxury: 4500 },
    Luxury: { Essential: 2500, Premium: 3800, Luxury: 5500 },
    Industrial: { Essential: 1700, Premium: 2700, Luxury: 4000 },
    Traditional: { Essential: 2200, Premium: 3200, Luxury: 4800 },
  } as Record<string, Record<string, number>>,
  // Approximate area ranges per property type (sq ft)
  areaRanges: {
    "1 BHK": [400, 650],
    "2 BHK": [650, 1100],
    "3 BHK": [1100, 1700],
    "4 BHK": [1700, 2500],
    Villa: [2500, 6000],
    Commercial: [1000, 10000],
  } as Record<string, [number, number]>,
};

/* ── Contact ──────────────────────────────────────────────────────────── */

export const contact = {
  email: "hello@lumiere-interiors.studio",
  phone: "+1 (310) 555-0192",
  whatsapp: "+1 (310) 555-0192",
  address: "34 Rue des Ateliers\n1002 Los Angeles, CA",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

/* ── Homepage ────────────────────────────────────────────────────────── */
/* Exclusive to the homepage — never rendered on the sub-pages. */

export const signatureWorks = [
  {
    n: "I",
    title: "The Courtyard House",
    location: "Marrakech, Morocco",
    year: "2025",
    type: "Residence",
    note: "A house arranged around weather.",
    detail:
      "Rooms open to the rain court in the wet season and fold shut for the afternoon sun — the plan is the climate, and the walls are simply its instrument.",
    plate: "arch" as PlateKey,
  },
  {
    n: "II",
    title: "The Lightwell Penthouse",
    location: "Los Angeles, California",
    year: "2024",
    type: "Residence",
    note: "A single clerestory, three floors of it.",
    detail:
      "One slot of sky carved through the whole section, so the afternoon sun lands somewhere new in the room each hour and never stays long enough to bore.",
    plate: "light" as PlateKey,
  },
  {
    n: "III",
    title: "The Gallery on Rue Vieille",
    location: "Lyon, France",
    year: "2024",
    type: "Cultural",
    note: "Whitewashed plaster, unlit.",
    detail:
      "The collection supplies the colour; the room supplies only the quiet. A low, even light from one north wall, and nothing to argue with the work.",
    plate: "section" as PlateKey,
  },
];

export const rooms = [
  {
    slug: "living-room",
    title: "Living Room",
    line: "Furniture set for conversation, a hearth of light, nothing that shouts.",
    plate: "plan" as PlateKey,
    feature: true,
    image: "/images/rooms/living-room.png",
  },
  {
    slug: "kitchen",
    title: "Kitchen",
    line: "Workflows measured in steps, not square feet — cooking choreographed.",
    plate: "section" as PlateKey,
    image: "/images/rooms/kitchen.png",
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    line: "A room that holds rest; storage that disappears into the walls.",
    plate: "light" as PlateKey,
    image: "/images/rooms/bedroom.png",
  },
  {
    slug: "dining",
    title: "Dining",
    line: "The table anchored, the ceiling low enough to feel gathered.",
    plate: "arch" as PlateKey,
    image: "/images/rooms/dining.png",
  },
  {
    slug: "study",
    title: "Study",
    line: "A desk at the window, a wall of reference, silence by design.",
    plate: "plan" as PlateKey,
    image: "/images/rooms/study.png",
  },
  {
    slug: "bath",
    title: "Bath",
    line: "Stone, steam, and a single shaft of light — the smallest room, the longest stays.",
    plate: "section" as PlateKey,
    image: "/images/rooms/bath.png",
  },
  {
    slug: "entry",
    title: "Entry",
    line: "The first room is a threshold — it sets the register for the rest.",
    plate: "arch" as PlateKey,
    image: "/images/rooms/entry.png",
  },
];

export const roomDetails: Record<
  string,
  {
    slug: string;
    title: string;
    tagline: string;
    subtitle: string;
    heroImage: string;
    specifications: {
      type: string;
      location: string;
      area: string;
      year: string;
      style: string;
      materials: string;
      lighting: string;
      furniture: string;
      approach: string;
    };
    caseStudy: {
      type: string;
      approach: string;
      materials: string;
      lighting: string;
      furniture: string;
      concept: string;
    };
    gallery: Array<{ src: string; caption: string; alt: string }>;
    materialsPalette: Array<{ name: string; type: string; desc: string; image: string }>;
    lightingStory: {
      title: string;
      daylight: string;
      afternoon: string;
      evening: string;
    };
    detailsCraftsmanship: Array<{ title: string; desc: string; image: string }>;
    story: {
      idea: string;
      materials: string;
      light: string;
      details: string;
    };
    finalStatement: {
      quote: string;
      image: string;
    };
  }
> = {
  "living-room": {
    slug: "living-room",
    title: "Living Room",
    tagline: "THE HEARTH OF CONVERSATION",
    subtitle: "A refined living environment shaped around proportion, natural light and quiet architectural luxury.",
    heroImage: "/images/rooms/living-room.png",
    specifications: {
      type: "Residential Living Suite",
      location: "Palm Springs, CA",
      area: "140 m²",
      year: "2025",
      style: "Warm Contemporary Minimal",
      materials: "Italian Travertine, Smoked Walnut, Textured Bouclé, Brushed Bronze",
      lighting: "Concealed Perimeter Cove, Soft Diffused Pendants, Direct Window Light",
      furniture: "Custom Low-Profile Sectional, Sculptural Bronze Coffee Table",
      approach: "Framing space around human gesture and light, eliminating decorative clutter.",
    },
    caseStudy: {
      type: "Residential Living Suite",
      approach: "Spatial & Architectural Editing",
      materials: "Italian Travertine, Smoked Walnut, Textured Bouclé, Brushed Bronze",
      lighting: "Concealed Perimeter LED, Soft Diffused Pendants, Direct Window Daylight",
      furniture: "Custom Low-Profile Sectional, Sculptural Bronze Coffee Table",
      concept: "Framing space around human gesture and light, eliminating decorative clutter.",
    },
    gallery: [
      { src: "/images/rooms/living-room/1.png", caption: "Establishing wide architectural view framed by travertine feature wall", alt: "Living room wide angle" },
      { src: "/images/rooms/living-room/2.png", caption: "Seating lounge with bespoke bouclé sofa and afternoon light", alt: "Seating area" },
      { src: "/images/rooms/living-room/3.png", caption: "Custom hearth detailing integrated into book-matched stone", alt: "Fireplace detail" },
      { src: "/images/rooms/living-room/4.png", caption: "Material joinery transition between walnut panelling and limestone", alt: "Material joinery" },
      { src: "/images/rooms/living-room/5.png", caption: "Evening lighting atmosphere with perimeter cove glow", alt: "Evening atmosphere" },
      { src: "/images/rooms/living-room/6.png", caption: "Architectural perspective towards full-height floor glazing", alt: "Glazing perspective" },
      { src: "/images/rooms/living-room/7.png", caption: "Bespoke lounge chair in charcoal shearling and low walnut side table", alt: "Lounge chair" },
      { src: "/images/rooms/living-room/8.png", caption: "Integrated media wall with concealed sliding acoustic panels", alt: "Media wall" },
      { src: "/images/rooms/living-room/9.png", caption: "Close-up of hand-honed travertine texture and flush shadow gap", alt: "Travertine detail" },
      { src: "/images/rooms/living-room/10.png", caption: "Dusk perspective showing warm interior glow against city skyline", alt: "Dusk perspective" },
    ],
    materialsPalette: [
      { name: "Italian Travertine", type: "Natural Stone", desc: "Honed porous surface capturing natural sunlight softly.", image: "/images/rooms/living-room/1.png" },
      { name: "Smoked Walnut", type: "Architectural Timber", desc: "Deep warm grain providing acoustic dampening and warmth.", image: "/images/rooms/living-room/4.png" },
      { name: "Textured Bouclé", type: "Textile", desc: "Tactile wool weave upholstery engineered for extended seating.", image: "/images/rooms/living-room/2.png" },
      { name: "Brushed Bronze", type: "Hardware & Metal", desc: "Unlacquered metallic detail that ages into a rich patina.", image: "/images/rooms/living-room/9.png" },
    ],
    lightingStory: {
      title: "Natural Daylight & Cove Scenography",
      daylight: "Floor-to-ceiling glass admits direct morning sun, creating dynamic shadow patterns across limestone floor slabs.",
      afternoon: "Filtered light through linen drapes softens contrast, maintaining glare-free reading conditions throughout the lounge.",
      evening: "Concealed LED coves along ceiling slots and wall bases wash vertical surfaces in warm 2700K ambient illumination.",
    },
    detailsCraftsmanship: [
      { title: "Flush Shadow Gap", desc: "10mm negative reveal where stone wall meets oak ceiling, eliminating traditional skirtings.", image: "/images/rooms/living-room/9.png" },
      { title: "Book-Matched Stone", desc: "Precision CNC cut travertine slabs mirrored along central hearth seam.", image: "/images/rooms/living-room/3.png" },
      { title: "Concealed Acoustics", desc: "Sound-absorbing micro-perforated walnut panels integrated behind fabric wall segments.", image: "/images/rooms/living-room/8.png" },
    ],
    story: {
      idea: "The living room is planned around pause and conversation rather than passive viewing. Every architectural volume is scaled to create warmth within openness.",
      materials: "Monolithic Italian travertine floors ground the space, while smoked walnut panels introduce acoustic softness and rich visual weight.",
      light: "Light enters through floor-to-ceiling frameless glass during the day and transitions to atmospheric perimeter cove lighting after sunset.",
      details: "Bespoke furniture pieces are designed at custom lower proportions so sightlines across the architectural horizon remain uninterrupted.",
    },
    finalStatement: {
      quote: "A room that holds light without capturing it — designed for unhurried conversations.",
      image: "/images/rooms/living-room/10.png",
    },
  },
  kitchen: {
    slug: "kitchen",
    title: "Modular Kitchen",
    tagline: "CHOREOGRAPHED CULINARY ARCHITECTURE",
    subtitle: "Workflows, storage and stone surfaces choreographed around how you cook and entertain.",
    heroImage: "/images/rooms/kitchen.png",
    specifications: {
      type: "Culinary & Dining Suite",
      location: "Lyon, France",
      area: "85 m²",
      year: "2025",
      style: "Architectural Minimalist",
      materials: "Nero Marquina Marble, Smoked Oak, Brushed Brass, Matte Lacquer",
      lighting: "Linear Task Strips, Sculptural Counter Pendant Grid",
      furniture: "Monolithic Marble Island, Concealed Pocket Pantry",
      approach: "Functional performance encased in monolithic stone and warm timber architectural volumes.",
    },
    caseStudy: {
      type: "Culinary & Dining Suite",
      approach: "Precision Millwork & Integrated Systems",
      materials: "Nero Marquina Marble, Smoked Oak, Brushed Brass, Matte Lacquer",
      lighting: "Linear Task Strips, Sculptural Counter Pendant Grid",
      furniture: "Monolithic Marble Island, Concealed Pocket Pantry",
      concept: "Functional performance encased in monolithic stone and warm timber architectural volumes.",
    },
    gallery: [
      { src: "/images/rooms/kitchen/1.png", caption: "Monolithic Nero Marquina marble island with waterfall edge", alt: "Kitchen island" },
      { src: "/images/rooms/kitchen/2.png", caption: "Handleless smoked oak cabinetry with integrated pocket pantry", alt: "Cabinetry millwork" },
      { src: "/images/rooms/kitchen/3.png", caption: "Brushed bronze fittings and seamless countertop detailing", alt: "Brass fittings" },
      { src: "/images/rooms/kitchen/4.png", caption: "Linear architectural task lighting illuminating work surfaces", alt: "Task lighting" },
      { src: "/images/rooms/kitchen/5.png", caption: "Integrated appliances concealed behind full-height timber doors", alt: "Concealed appliances" },
      { src: "/images/rooms/kitchen/6.png", caption: "Breakfast counter seating facing central courtyard window", alt: "Breakfast counter" },
      { src: "/images/rooms/kitchen/7.png", caption: "Wine storage cellar niche with climate control and brass racks", alt: "Wine storage" },
      { src: "/images/rooms/kitchen/8.png", caption: "Detail of undercut stone lip and touch-open drawer joinery", alt: "Undercut stone detail" },
      { src: "/images/rooms/kitchen/9.png", caption: "Prep sink area with pull-out bronze faucet and marble backsplash", alt: "Prep sink" },
      { src: "/images/rooms/kitchen/10.png", caption: "Evening ambiance showing under-island illumination glow", alt: "Under-island lighting" },
    ],
    materialsPalette: [
      { name: "Nero Marquina Marble", type: "Natural Stone", desc: "Deep black marble with striking white veins carved for island surfaces.", image: "/images/rooms/kitchen/1.png" },
      { name: "Smoked Oak", type: "Timber Veneer", desc: "Matte lacquered smoked oak providing warmth against hard stone.", image: "/images/rooms/kitchen/2.png" },
      { name: "Brushed Brass", type: "Hardware", desc: "Precision machined fittings and linear trim details.", image: "/images/rooms/kitchen/3.png" },
      { name: "Textured Glass", type: "Architectural Glass", desc: "Reeded glass doors softening display pantry backlights.", image: "/images/rooms/kitchen/7.png" },
    ],
    lightingStory: {
      title: "Focused Workflows & Ambient Warmth",
      daylight: "Sunlight from adjacent courtyard glass highlights stone grain without creating harsh counter glare.",
      afternoon: "Indirect ceiling slots illuminate prep zones evenly for precise cooking workflows.",
      evening: "Under-counter LEDs and warm pendant dimmers transform the workspace into an intimate bar setting.",
    },
    detailsCraftsmanship: [
      { title: "Mitred Waterfall Edge", desc: "Seamless 45-degree corner joints making stone island appear carved from a single block.", image: "/images/rooms/kitchen/1.png" },
      { title: "Pocket Door Hardware", desc: "German engineered slide-away cabinet fronts concealing work stations.", image: "/images/rooms/kitchen/2.png" },
      { title: "Integrated Drainage", desc: "Custom sloped stone grooves carved directly into countertop.", image: "/images/rooms/kitchen/9.png" },
    ],
    story: {
      idea: "We treat the kitchen not as a collection of appliances, but as a sculpted architectural piece where culinary prep is effortless.",
      materials: "Bold black marble with sharp white veining creates a focal anchor, balanced by natural open-grain oak that ages gracefully.",
      light: "Direct task lighting washes working counters, while ambient under-cabinet LEDs warm the backsplash at night.",
      details: "All hardware and appliances disappear behind flush-fitting pocket doors for a clean, monolithic visual register.",
    },
    finalStatement: {
      quote: "Cooking choreographed around stone, light and precision — where workflow meets hospitality.",
      image: "/images/rooms/kitchen/10.png",
    },
  },
  bedroom: {
    slug: "bedroom",
    title: "Master Suite Bedroom",
    tagline: "SANCTUARY OF SILENCE",
    subtitle: "A tranquil master suite designed with warm materials, calm proportions and concealed storage.",
    heroImage: "/images/rooms/bedroom.png",
    specifications: {
      type: "Private Master Suite",
      location: "Los Angeles, CA",
      area: "95 m²",
      year: "2025",
      style: "Tactile Luxury Minimal",
      materials: "Taupe Suede, Fluted Walnut, Limestone, Belgian Linen",
      lighting: "Soft Headboard Backlight, Low-Level Night Lighting",
      furniture: "Custom King Platform Bed, Floating Oak Nightstands, Shearling Chair",
      approach: "An sanctuary designed to lower sensory stress and promote deep rest.",
    },
    caseStudy: {
      type: "Private Master Suite",
      approach: "Acoustic Comfort & Atmospheric Layering",
      materials: "Taupe Suede, Fluted Walnut, Limestone, Belgian Linen",
      lighting: "Soft Headboard Backlight, Low-Level Night Lighting",
      furniture: "Custom King Platform Bed, Floating Oak Nightstands, Shearling Chair",
      concept: "An sanctuary designed to lower sensory stress and promote deep rest.",
    },
    gallery: [
      { src: "/images/rooms/bedroom/1.png", caption: "Full-height upholstered headboard with fluted walnut paneling", alt: "Bedroom headboard wall" },
      { src: "/images/rooms/bedroom/2.png", caption: "Platform bed with layered Belgian linen and morning daylight", alt: "Platform bed" },
      { src: "/images/rooms/bedroom/3.png", caption: "Floating nightstand with integrated dimmable reading light", alt: "Floating nightstand" },
      { src: "/images/rooms/bedroom/4.png", caption: "Shearling reading chair by terrace glazing", alt: "Reading lounge" },
      { src: "/images/rooms/bedroom/5.png", caption: "Concealed floor-to-ceiling wardrobe with integrated LED lighting", alt: "Concealed wardrobe" },
      { src: "/images/rooms/bedroom/6.png", caption: "En-suite bathroom transition through fluted glass sliding door", alt: "En-suite transition" },
      { src: "/images/rooms/bedroom/7.png", caption: "Dressing vanity console with framed bronze mirror", alt: "Dressing vanity" },
      { src: "/images/rooms/bedroom/8.png", caption: "Custom wool rug detail and floating timber platform base", alt: "Rug detail" },
      { src: "/images/rooms/bedroom/9.png", caption: "Nighttime scene with warm low-level perimeter illumination", alt: "Night ambiance" },
      { src: "/images/rooms/bedroom/10.png", caption: "Terrace view perspective from bed at sunrise", alt: "Sunrise perspective" },
    ],
    materialsPalette: [
      { name: "Taupe Suede", type: "Acoustic Wall Covering", desc: "Soft padded wall panels reducing room echo and adding warmth.", image: "/images/rooms/bedroom/1.png" },
      { name: "Fluted Walnut", type: "Architectural Timber", desc: "Linear timber slats creating subtle vertical shadow rhythms.", image: "/images/rooms/bedroom/1.png" },
      { name: "Belgian Linen", type: "Textile", desc: "Breathable natural bedding linens washed for relaxed drape.", image: "/images/rooms/bedroom/2.png" },
      { name: "Limestone Slabs", type: "Flooring", desc: "Honed neutral stone floors providing thermal mass and cool comfort.", image: "/images/rooms/bedroom/8.png" },
    ],
    lightingStory: {
      title: "Glare-Free Ambient Rest",
      daylight: "Deep window recesses diffuse direct sunlight into a soft perimeter glow.",
      afternoon: "Motorized linen shades filter sunlight for midday rest while maintaining outdoor foliage views.",
      evening: "Warm backlight behind the headboard provides gentle reading light without overhead brightness.",
    },
    detailsCraftsmanship: [
      { title: "Floating Cantilever", desc: "Wall-mounted bedside tables with concealed wireless charging surfaces.", image: "/images/rooms/bedroom/3.png" },
      { title: "Flush Closet Doors", desc: "Floor-to-ceiling wardrobe fronts engineered to match plaster wall color exactly.", image: "/images/rooms/bedroom/5.png" },
      { title: "Seamless Glass Partition", desc: "Acoustic fluted glass doors connecting bedroom to master bath.", image: "/images/rooms/bedroom/6.png" },
    ],
    story: {
      idea: "Rest requires visual silence. The bedroom hides all practical storage so only soft texture, warm timber and daylight remain.",
      materials: "Acoustically absorbent suede panels wrap the headboard wall, grounded by cool limestone flooring and warm silk-wool rugs.",
      light: "Glare-free indirect illumination flows from behind the headboard and window drapes, ensuring zero harsh bulbs overhead.",
      details: "Wardrobe doors align flush with the plaster wall, opening via concealed push catches to maintain architectural purity.",
    },
    finalStatement: {
      quote: "Visual silence and tactile softness — a master suite built for restorative rest.",
      image: "/images/rooms/bedroom/10.png",
    },
  },
  dining: {
    slug: "dining",
    title: "Dining Room",
    tagline: "THE GATHERED TABLE",
    subtitle: "A proportioned dining space anchored by stone, lit to flatter, and built for unhurried gatherings.",
    heroImage: "/images/rooms/dining.png",
    specifications: {
      type: "Formal Dining Suite",
      location: "New York, NY",
      area: "70 m²",
      year: "2025",
      style: "Sculptural Luxury",
      materials: "Calacatta Viola Marble, Venetian Plaster, Dark Leather, Brass",
      lighting: "Custom Blown-Glass Chandelier, Accent Niche Spotlights",
      furniture: "Monolithic 10-Seater Stone Table, Sculptural Armchairs",
      approach: "Creating intimacy in large rooms through ceiling height, warm tone, and focused dining light.",
    },
    caseStudy: {
      type: "Formal Dining Architecture",
      approach: "Acoustic Warmth & Lighting Scenography",
      materials: "Calacatta Viola Marble, Venetian Plaster, Dark Leather, Brass",
      lighting: "Custom Blown-Glass Chandelier, Accent Niche Spotlights",
      furniture: "Monolithic 10-Seater Stone Table, Sculptural Armchairs",
      concept: "Creating intimacy in large rooms through ceiling height, warm tone, and focused dining light.",
    },
    gallery: [
      { src: "/images/rooms/dining/1.png", caption: "Monolithic Calacatta Viola marble dining table under brass chandelier", alt: "Dining table centerpiece" },
      { src: "/images/rooms/dining/2.png", caption: "Sculptural dark leather dining armchairs and coffered ceiling", alt: "Dining chairs" },
      { src: "/images/rooms/dining/3.png", caption: "Fluted timber wall paneling with lit display niches", alt: "Display niches" },
      { src: "/images/rooms/dining/4.png", caption: "Venetian plaster wall finish capturing soft evening light", alt: "Venetian plaster wall" },
      { src: "/images/rooms/dining/5.png", caption: "Detail of veined stone table edge and bespoke tableware", alt: "Stone table edge" },
      { src: "/images/rooms/dining/6.png", caption: "Buffet credenza in smoked oak with marble top", alt: "Buffet credenza" },
      { src: "/images/rooms/dining/7.png", caption: "Sculptural wall sconces illuminating textured plaster wall", alt: "Wall sconces" },
      { src: "/images/rooms/dining/8.png", caption: "Wide perspective towards adjacent wine display room", alt: "Wine room perspective" },
      { src: "/images/rooms/dining/9.png", caption: "Close-up of leather stitching and solid wood chair joints", alt: "Chair joinery detail" },
      { src: "/images/rooms/dining/10.png", caption: "Candlelit evening setting creating warm intimate dining atmosphere", alt: "Evening candlelit setting" },
    ],
    materialsPalette: [
      { name: "Calacatta Viola Marble", type: "Natural Stone", desc: "Rare violet-veined marble forming the central dining table monolith.", image: "/images/rooms/dining/1.png" },
      { name: "Venetian Plaster", type: "Wall Finish", desc: "Hand-troweled lime plaster providing velvet-like depth.", image: "/images/rooms/dining/4.png" },
      { name: "Full-Grain Leather", type: "Upholstery", desc: "Supple dark leather seating tailored for long dinner conversations.", image: "/images/rooms/dining/2.png" },
      { name: "Aged Brass", type: "Hardware", desc: "Hand-burnished metallic accents on lighting fixtures and credenza.", image: "/images/rooms/dining/1.png" },
    ],
    lightingStory: {
      title: "Hospitality Lighting Scenography",
      daylight: "Soft side illumination flatters guests while highlighting marble table veining.",
      afternoon: "Directional ceiling spots bring out warm tones in Venetian plaster walls.",
      evening: "A low-hung chandelier and warm wall sconces cast focused light onto the table surface.",
    },
    detailsCraftsmanship: [
      { title: "Sculpted Stone Bullnose", desc: "Hand-carved rounded edges making heavy marble table feel approachable.", image: "/images/rooms/dining/5.png" },
      { title: "Coffered Ceiling Acoustics", desc: "Recessed ceiling panels fitted with hidden acoustic absorption felt.", image: "/images/rooms/dining/2.png" },
      { title: "Custom Leather Stitching", desc: "Saddle-stitched seams on dining chair upholstery for enduring beauty.", image: "/images/rooms/dining/9.png" },
    ],
    story: {
      idea: "The dining table is the anchor of hospitality. We tune ceiling height, room acoustic, and light to bring people together naturally.",
      materials: "Rare violet-veined marble paired with dark hand-finished plaster creates a dramatic yet welcoming visual depth.",
      light: "A low-slung custom chandelier casts warm focused light over the tabletop while keeping guests' eyes comfortably in shade.",
      details: "Chairs are ergonomically upholstered in matte full-grain leather for extended dining comfort.",
    },
    finalStatement: {
      quote: "Proportioned around hospitality — where the table anchors the room and light flatters conversation.",
      image: "/images/rooms/dining/10.png",
    },
  },
  study: {
    slug: "study",
    title: "Home Office & Study",
    tagline: "SILENCE BY DESIGN",
    subtitle: "A quiet workspace designed to sharpen focus, hold reference, and integrate seamlessly into the home.",
    heroImage: "/images/rooms/study.png",
    specifications: {
      type: "Executive Workspace",
      location: "Lisbon, Portugal",
      area: "55 m²",
      year: "2025",
      style: "Intellectual Luxury",
      materials: "Dark Walnut, Saddle Leather, Steel, Textured Stone",
      lighting: "Architectural Task Lamp, Integrated Bookshelf Strips",
      furniture: "Bespoke Leather Desk, Mid-Century Executive Chair",
      approach: "Balancing intellectual rigour with domestic warmth.",
    },
    caseStudy: {
      type: "Executive Home Office",
      approach: "Ergonomic & Acoustic Planning",
      materials: "Dark Walnut, Saddle Leather, Steel, Textured Stone",
      lighting: "Architectural Task Lamp, Integrated Bookshelf Strips",
      furniture: "Bespoke Leather Desk, Mid-Century Executive Chair",
      concept: "Balancing intellectual rigour with domestic warmth.",
    },
    gallery: [
      { src: "/images/rooms/study/1.png", caption: "Custom dark walnut library bookshelf with integrated warm lighting", alt: "Library wall" },
      { src: "/images/rooms/study/2.png", caption: "Bespoke leather-topped desk positioned by floor-to-ceiling window", alt: "Executive desk" },
      { src: "/images/rooms/study/3.png", caption: "Architectural task lamp and curated art canvas backdrop", alt: "Desk lamp detail" },
      { src: "/images/rooms/study/4.png", caption: "Acoustic wall paneling and parquet oak flooring", alt: "Parquet flooring" },
      { src: "/images/rooms/study/5.png", caption: "Integrated wire management and concealed credenza", alt: "Concealed credenza" },
      { src: "/images/rooms/study/6.png", caption: "Reading armchair nook with brass floor lamp and garden window view", alt: "Reading nook" },
      { src: "/images/rooms/study/7.png", caption: "Detail of saddle leather desk mat with blind debossed logo", alt: "Leather desk mat" },
      { src: "/images/rooms/study/8.png", caption: "Concealed print and storage station behind walnut pocket doors", alt: "Concealed storage" },
      { src: "/images/rooms/study/9.png", caption: "High-CRI desk illumination for drafting and document reading", alt: "Task illumination" },
      { src: "/images/rooms/study/10.png", caption: "Evening study atmosphere with warm shelf backlights and quiet silence", alt: "Evening study" },
    ],
    materialsPalette: [
      { name: "Dark Walnut", type: "Architectural Millwork", desc: "Acoustically dampening timber lining shelves and walls.", image: "/images/rooms/study/1.png" },
      { name: "Saddle Leather", type: "Desk Surface", desc: "Supple writing leather providing quiet warmth under wrist.", image: "/images/rooms/study/2.png" },
      { name: "Patinated Steel", type: "Window Frames", desc: "Slim-line metal framing maximizing natural window daylight.", image: "/images/rooms/study/2.png" },
      { name: "Oak Parquet", type: "Flooring", desc: "Herringbone timber pattern adding classical floor movement.", image: "/images/rooms/study/4.png" },
    ],
    lightingStory: {
      title: "Precision Task & Ambient Balance",
      daylight: "Side window daylight illuminates desk surfaces without screen reflection.",
      afternoon: "Concealed shelf LED strips cast soft warm light onto book spines.",
      evening: "High-CRI architectural desk lamp provides focused 3000K light for drafting.",
    },
    detailsCraftsmanship: [
      { title: "Wire Conduit Legs", desc: "Desk legs engineered with hollow channels hiding all power cables.", image: "/images/rooms/study/5.png" },
      { title: "Integrated Leather Inlay", desc: "Hand-set desk mat flush with walnut timber border.", image: "/images/rooms/study/7.png" },
      { title: "Acoustic Wall Felt", desc: "Micro-perforated backing behind bookshelves dampening room echo.", image: "/images/rooms/study/4.png" },
    ],
    story: {
      idea: "A great study is a sanctuary of clear thought. We align the desk with natural light and surround it with accessible reference.",
      materials: "Rich dark walnut millwork provides acoustic insulation and tactile warmth during long working hours.",
      light: "Glare-free daylight enters from the side, supplemented by soft warm shelf lighting and a high-CRI task fixture.",
      details: "All power cables and hardware connections drop invisibly through hollow desk legs into sub-floor conduits.",
    },
    finalStatement: {
      quote: "A workspace designed for deep focus — where reference is at hand and silence reigns.",
      image: "/images/rooms/study/10.png",
    },
  },
  bath: {
    slug: "bath",
    title: "Spa Master Bath",
    tagline: "THE STONE & STEAM SANCTUARY",
    subtitle: "Honed stone, steam, and a single shaft of light — designed for slow, restorative rituals.",
    heroImage: "/images/rooms/bath.png",
    specifications: {
      type: "Master Bath Spa Suite",
      location: "Morocco / Marrakech Residence",
      area: "48 m²",
      year: "2025",
      style: "Monolithic Spa Sanctuary",
      materials: "Arabescato Marble, Travertine, Fluted Glass, Brushed Bronze",
      lighting: "Vertical Skylight Shaft, Indirect Floating Vanity Glow",
      furniture: "Carved Travertine Bathtub, Floating Double Vanity",
      approach: "A sanctuary inspired by ancient stone thermal baths.",
    },
    caseStudy: {
      type: "Master Bath Spa",
      approach: "Monolithic Stone & Wet Room Engineering",
      materials: "Arabescato Marble, Travertine, Fluted Glass, Brushed Bronze",
      lighting: "Vertical Skylight Shaft, Indirect Floating Vanity Glow",
      furniture: "Carved Travertine Bathtub, Floating Double Vanity",
      concept: "A sanctuary inspired by ancient stone thermal baths.",
    },
    gallery: [
      { src: "/images/rooms/bath/1.png", caption: "Monolithic travertine bathtub carved from a single block", alt: "Travertine tub" },
      { src: "/images/rooms/bath/2.png", caption: "Honed Arabescato marble walls with vertical skylight shaft", alt: "Marble walls skylight" },
      { src: "/images/rooms/bath/3.png", caption: "Floating double vanity with integrated marble basins and backlit mirror", alt: "Double vanity" },
      { src: "/images/rooms/bath/4.png", caption: "Walk-in steam shower with frameless glass and bronze fixtures", alt: "Steam shower" },
      { src: "/images/rooms/bath/5.png", caption: "Close-up of brushed bronze hardware against natural stone", alt: "Bronze fixture detail" },
      { src: "/images/rooms/bath/6.png", caption: "Rain shower head integrated seamlessly into marble slab ceiling", alt: "Ceiling rain shower" },
      { src: "/images/rooms/bath/7.png", caption: "Towel warming niche with concealed radiant heating panel", alt: "Towel warming niche" },
      { src: "/images/rooms/bath/8.png", caption: "Water closet enclosure with fluted glass privacy door", alt: "Water closet glass" },
      { src: "/images/rooms/bath/9.png", caption: "Detail of honed travertine grain under warm water stream", alt: "Travertine water detail" },
      { src: "/images/rooms/bath/10.png", caption: "Night atmosphere showing subtle floor-level perimeter lighting", alt: "Night bath glow" },
    ],
    materialsPalette: [
      { name: "Honed Arabescato Marble", type: "Wall Lining", desc: "Smooth matte stone with dramatic organic grey veining.", image: "/images/rooms/bath/2.png" },
      { name: "Beige Travertine", type: "Bathtub & Floor", desc: "Porous natural stone carved into monolithic bath fixture.", image: "/images/rooms/bath/1.png" },
      { name: "Brushed Bronze", type: "Water Fixtures", desc: "Unlacquered metal that patinates beautifully with steam and water.", image: "/images/rooms/bath/5.png" },
      { name: "Fluted Privacy Glass", type: "Partitions", desc: "Soft textured glass diffusing light between shower and room.", image: "/images/rooms/bath/8.png" },
    ],
    lightingStory: {
      title: "Light & Steam Dynamics",
      daylight: "Vertical skylight slices sunlight through rising steam during morning baths.",
      afternoon: "Diffused window glass maintains privacy while filling stone surfaces with soft daylight.",
      evening: "Backlit vanity mirrors and floor step lights provide gentle non-glare night illumination.",
    },
    detailsCraftsmanship: [
      { title: "Single-Block Carving", desc: "Bathtub milled from one continuous 4-tonne travertine block.", image: "/images/rooms/bath/1.png" },
      { title: "Flush Floor Drain", desc: "Linear slot drain concealed beneath marble floor slab seam.", image: "/images/rooms/bath/4.png" },
      { title: "Backlit Mirror Ring", desc: "Warm halo lighting built behind circular vanity mirrors.", image: "/images/rooms/bath/3.png" },
    ],
    story: {
      idea: "We elevate bathing from a daily task into a meditative ritual by combining tactile stone, steam, and sky light.",
      materials: "Monolithic travertine and Arabescato marble create a continuous waterproof envelope that will age with timeless dignity.",
      light: "A slot skylight casts a moving beam of natural light across stone walls throughout the morning.",
      details: "Fixtures are specified in unlacquered brushed bronze to develop a rich, organic patina over time.",
    },
    finalStatement: {
      quote: "Stone, steam, and sky — an atmospheric sanctuary built for slow restorative rituals.",
      image: "/images/rooms/bath/10.png",
    },
  },
  entry: {
    slug: "entry",
    title: "Entrance Foyer",
    tagline: "THE THRESHOLD REGISTER",
    subtitle: "The initial architectural threshold — setting the register of craft and atmosphere for the entire home.",
    heroImage: "/images/rooms/entry.png",
    specifications: {
      type: "Architectural Threshold",
      location: "Paris, France",
      area: "40 m²",
      year: "2025",
      style: "Grand Minimalist Entry",
      materials: "Terrazzo with Brass Inlay, Lime Plaster, Bronze, Glass",
      lighting: "Recessed Architectural Spotlights, Linear Step Strips",
      furniture: "Sculptural Bronze Console Table, Custom Pivot Door",
      approach: "A dramatic yet welcoming transition between the outside world and private retreat.",
    },
    caseStudy: {
      type: "Architectural Threshold",
      approach: "Spatial Transition & Material Prelude",
      materials: "Terrazzo with Brass Inlay, Lime Plaster, Bronze, Glass",
      lighting: "Recessed Architectural Spotlights, Linear Step Strips",
      furniture: "Sculptural Bronze Console Table, Custom Pivot Door",
      concept: "A dramatic yet welcoming transition between the outside world and private retreat.",
    },
    gallery: [
      { src: "/images/rooms/entry/1.png", caption: "Double-height entrance foyer with floating travertine staircase", alt: "Foyer staircase" },
      { src: "/images/rooms/entry/2.png", caption: "Polished terrazzo floor with hand-set brass inlay geometry", alt: "Terrazzo floor" },
      { src: "/images/rooms/entry/3.png", caption: "Monolithic bronze console table with organic ceramic vase", alt: "Console table" },
      { src: "/images/rooms/entry/4.png", caption: "Large-scale abstract oil painting on textured lime plaster wall", alt: "Plaster wall art" },
      { src: "/images/rooms/entry/5.png", caption: "Custom full-height timber pivot door with bronze pull", alt: "Pivot door" },
      { src: "/images/rooms/entry/6.png", caption: "Concealed coat check closet concealed within timber wall paneling", alt: "Concealed coat closet" },
      { src: "/images/rooms/entry/7.png", caption: "Sculptural bronze door handle detail with textured grip", alt: "Bronze door handle" },
      { src: "/images/rooms/entry/8.png", caption: "Floating staircase tread lighting illuminating terrazzo floor", alt: "Staircase step light" },
      { src: "/images/rooms/entry/9.png", caption: "Perspective looking into main living salon through portal", alt: "Salon portal view" },
      { src: "/images/rooms/entry/10.png", caption: "Evening entrance lighting setting a warm welcoming register", alt: "Evening foyer light" },
    ],
    materialsPalette: [
      { name: "Terrazzo Flooring", type: "Poured Stone", desc: "Custom marble aggregate terrazzo with polished finish.", image: "/images/rooms/entry/2.png" },
      { name: "Brass Inlay Strips", type: "Floor Detail", desc: "Hand-set metal dividers creating subtle geometric flooring lines.", image: "/images/rooms/entry/2.png" },
      { name: "Lime Plaster", type: "Wall Finish", desc: "Tactile textured wall surface capturing soft spotlighting.", image: "/images/rooms/entry/4.png" },
      { name: "Cast Bronze", type: "Console & Door Pull", desc: "Sculptural heavy metal elements creating a memorable tactile entrance.", image: "/images/rooms/entry/3.png" },
    ],
    lightingStory: {
      title: "Threshold Arrival Scenography",
      daylight: "Natural top light from double-height void washes floor and staircase treads.",
      afternoon: "Focused narrow spotlights highlight large-scale artwork on lime plaster walls.",
      evening: "Discreet step lights under floating treads guide steps softly towards living areas.",
    },
    detailsCraftsmanship: [
      { title: "Heavy Timber Pivot", desc: "3-metre tall entrance door balanced on heavy-duty floor pivot hinge.", image: "/images/rooms/entry/5.png" },
      { title: "Brass Inlay Geometry", desc: "4mm brass strips laid into terrazzo before final diamond polishing.", image: "/images/rooms/entry/2.png" },
      { title: "Floating Staircase Treads", desc: "Cantilevered travertine treads anchored into reinforced core wall.", image: "/images/rooms/entry/1.png" },
    ],
    story: {
      idea: "First impressions establish expectations. The entry introduces the residence's material palette in a single dramatic space.",
      materials: "Hard-wearing terrazzo with custom brass inlay borders provides durable beauty under foot.",
      light: "Targeted ceiling spots illuminate artwork while subtle step lights guide movement into the main living areas.",
      details: "A custom pivot door closes with acoustic seals, cutting out street noise the moment you step inside.",
    },
    finalStatement: {
      quote: "The first threshold — setting the architectural register of craft and light for the home.",
      image: "/images/rooms/entry/10.png",
    },
  },
};

export const journey = [
  {
    n: "I",
    phase: "The Brief",
    weeks: "Wk1–2",
    line: "A site visit, a long listen, and a written brief that names the problem exactly.",
    deliverable: "Brief + scope",
  },
  {
    n: "II",
    phase: "The Concept",
    weeks: "Wk3–6",
    line: "Layouts and material studies — one idea tested against structure, budget and light.",
    deliverable: "Concept boards",
  },
  {
    n: "III",
    phase: "The Drawings",
    weeks: "Wk7–10",
    line: "Working drawings, joinery detail, and a schedule of quantities you can price.",
    deliverable: "Full set",
  },
  {
    n: "IV",
    phase: "The Making",
    weeks: "Wk11–18",
    line: "Site supervision, trades coordinated, weekly notes — no surprises, ever.",
    deliverable: "Weekly reports",
  },
  {
    n: "V",
    phase: "The Handover",
    weeks: "Wk19–20",
    line: "A final walkthrough, a few days of living in it, and the keys.",
    deliverable: "Keys + care notes",
  },
];

export const fieldNotes = [
  {
    title: "On the height of a window sill",
    category: "Observation",
    slug: "modern-2bhk-interior-ideas",
    excerpt:
      "At 900mm a sill reads as a ledge; at 1100 it reads as architecture. Ten centimetres is a decision.",
    plate: "light" as PlateKey,
  },
  {
    title: "Why we specify lime plaster over paint",
    category: "Material",
    slug: "choosing-laminates-material-guide",
    excerpt:
      "Paint is a skin; lime is a breath. One peels at the edges, the other takes on the weather of the room.",
    plate: "section" as PlateKey,
  },
  {
    title: "The hallway is not a hallway",
    category: "Proportion",
    slug: "modern-false-ceiling-ideas",
    excerpt:
      "It is the room you pass through most often — so we design it like one, and the house stops feeling thin.",
    plate: "plan" as PlateKey,
  },
];

export const press = [
  { year: "2026", publication: "Architectural Digest", kind: "Featured", note: "The Courtyard House in the March international edition.", image: "/images/projects/courtyard-house.png" },
  { year: "2025", publication: "Dezeen", kind: "Featured", note: "Lightwell Penthouse selected for the residential series.", image: "/images/projects/lightwell-penthouse.png" },
  { year: "2025", publication: "Frame Awards", kind: "Shortlisted", note: "Hospitality interior of the year.", image: "/images/projects/hotel-ombelle.png" },
  { year: "2024", publication: "Dwell", kind: "Cover", note: "October issue, photographed at dusk.", image: "/images/projects/villa-meridian.png" },
  { year: "2024", publication: "The World of Interiors", kind: "Reviewed", note: "A profile of the Lyon gallery project.", image: "/images/projects/maison-verre.png" },
  { year: "2023", publication: "Interior Design Magazine", kind: "Best of Year", note: "Honouree, residential category.", image: "/images/projects/loft-at-atlas.png" },
];

export const begin = {
  line: "The next room is yours.",
  sub: "Two commissions remain open for the coming season — we hold the calendar small so the work stays human.",
  cta: "Begin a project",
};
