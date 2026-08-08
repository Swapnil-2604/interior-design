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
    title: "Living Room",
    desc: "The heart of the home — designed for conversation, comfort and the quiet pleasure of a room that just works.",
    features: ["Furniture layout", "Lighting design", "Custom joinery", "Soft furnishing"],
  },
  {
    n: "02",
    title: "Modular Kitchen",
    desc: "Workflows, storage and finishes choreographed around how you cook — not how a catalogue photographs.",
    features: ["Layout planning", "Countertop selection", "Hardware", "Appliance integration"],
  },
  {
    n: "03",
    title: "Bedroom",
    desc: "A room that holds rest. Calm proportion, warm materials and storage that disappears into the architecture.",
    features: ["Wardrobe design", "Lighting layers", "Material palette", "Acoustic comfort"],
  },
  {
    n: "04",
    title: "Dining Area",
    desc: "Where the table is the anchor — proportioned to the room, lit to flatter, built to last.",
    features: ["Table selection", "Seating design", "Ambient lighting", "Wall treatments"],
  },
  {
    n: "05",
    title: "Home Office",
    desc: "A workspace that sharpens focus without sacrificing the feeling of home.",
    features: ["Ergonomic planning", "Storage solutions", "Task lighting", "Acoustic treatment"],
  },
  {
    n: "06",
    title: "Full Home Interior",
    desc: "A single vision, carried through every room — consistent material language, unified flow, one accountable team.",
    features: ["Complete design", "Material coordination", "Project management", "Turnkey delivery"],
  },
  {
    n: "07",
    title: "Renovation",
    desc: "New life for existing spaces — structural clarity, updated systems, and a finish that feels inevitable.",
    features: ["Space reconfiguration", "Structural work", "Systems upgrade", "Finishes"],
  },
  {
    n: "08",
    title: "Commercial Interior",
    desc: "Hospitality, retail and workplace environments that carry a brand's character through material and light.",
    features: ["Brand integration", "Space planning", "Compliance", "Project delivery"],
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
    subtitle: "From bare walls to a curated sanctuary of light and material.",
  },
  {
    title: "The Kitchen",
    subtitle: "From a cramped galley to a generous workspace that invites cooking.",
  },
  {
    title: "The Bedroom",
    subtitle: "From overlooked to the most considered room in the house.",
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

export const blogPosts = [
  {
    title: "Modern 2BHK Interior Ideas That Maximise Every Square Metre",
    category: "Space Planning",
    excerpt: "Small homes deserve big thinking. We break down layout strategies that make a 2BHK feel generous without adding a single wall.",
  },
  {
    title: "L-Shaped vs U-Shaped Kitchen: Which Layout Works for You?",
    category: "Kitchen",
    excerpt: "The kitchen is the most programmed room in a home. Here is how to choose between two of the most common layouts.",
  },
  {
    title: "Small Bedroom Storage Ideas That Disappear Into the Architecture",
    category: "Bedroom",
    excerpt: "Storage should be invisible when closed and effortless when open. These solutions are both.",
  },
  {
    title: "Choosing Laminates: A Material Guide for Interior Surfaces",
    category: "Materials",
    excerpt: "Not all laminates are equal. We walk through grades, finishes and applications so you can specify with confidence.",
  },
  {
    title: "Modern False Ceiling Ideas for Every Room",
    category: "Interior Trends",
    excerpt: "False ceilings do more than hide wiring — they shape acoustics, hold light and define a room's proportions.",
  },
  {
    title: "The Complete Guide to 3BHK Interior Cost",
    category: "Budget",
    excerpt: "What does a full interior actually cost? We break down the real numbers behind a typical 3BHK project.",
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
    title: "Living Room",
    line: "Furniture set for conversation, a hearth of light, nothing that shouts.",
    plate: "plan" as PlateKey,
    feature: true,
  },
  {
    title: "Kitchen",
    line: "Workflows measured in steps, not square feet — cooking choreographed.",
    plate: "section" as PlateKey,
  },
  {
    title: "Bedroom",
    line: "A room that holds rest; storage that disappears into the walls.",
    plate: "light" as PlateKey,
  },
  {
    title: "Dining",
    line: "The table anchored, the ceiling low enough to feel gathered.",
    plate: "arch" as PlateKey,
  },
  {
    title: "Study",
    line: "A desk at the window, a wall of reference, silence by design.",
    plate: "plan" as PlateKey,
  },
  {
    title: "Bath",
    line: "Stone, steam, and a single shaft of light — the smallest room, the longest stays.",
    plate: "section" as PlateKey,
  },
  {
    title: "Entry",
    line: "The first room is a threshold — it sets the register for the rest.",
    plate: "arch" as PlateKey,
  },
];

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
    excerpt:
      "At 900mm a sill reads as a ledge; at 1100 it reads as architecture. Ten centimetres is a decision.",
    plate: "light" as PlateKey,
  },
  {
    title: "Why we specify lime plaster over paint",
    category: "Material",
    excerpt:
      "Paint is a skin; lime is a breath. One peels at the edges, the other takes on the weather of the room.",
    plate: "section" as PlateKey,
  },
  {
    title: "The hallway is not a hallway",
    category: "Proportion",
    excerpt:
      "It is the room you pass through most often — so we design it like one, and the house stops feeling thin.",
    plate: "plan" as PlateKey,
  },
];

export const press = [
  { year: "2026", publication: "Architectural Digest", kind: "Featured", note: "The Courtyard House in the March international edition." },
  { year: "2025", publication: "Dezeen", kind: "Featured", note: "Lightwell Penthouse selected for the residential series." },
  { year: "2025", publication: "Frame Awards", kind: "Shortlisted", note: "Hospitality interior of the year." },
  { year: "2024", publication: "Dwell", kind: "Cover", note: "October issue, photographed at dusk." },
  { year: "2024", publication: "The World of Interiors", kind: "Reviewed", note: "A profile of the Lyon gallery project." },
  { year: "2023", publication: "Interior Design Magazine", kind: "Best of Year", note: "Honouree, residential category." },
];

export const begin = {
  line: "The next room is yours.",
  sub: "Two commissions remain open for the coming season — we hold the calendar small so the work stays human.",
  cta: "Begin a project",
};
