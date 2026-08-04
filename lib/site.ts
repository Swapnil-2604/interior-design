import type { PlateKey } from "@/components/plates";

export const studio = {
  name: "ATELIER FORM",
  tagline: "Interior Design • Architecture • Bespoke Spaces",
};

export const nav = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Studio", href: "#contact" },
];

export const services = [
  {
    n: "01",
    title: "Residential Interiors",
    desc: "Private homes and apartments composed around the way you actually live — not a catalogue of rooms.",
  },
  {
    n: "02",
    title: "Commercial Interiors",
    desc: "Hospitality, retail and workplace environments that carry a brand's character through material and light.",
  },
  {
    n: "03",
    title: "Turnkey Interiors",
    desc: "From first sketch to final handover — a single accountable studio managing every trade and detail.",
  },
  {
    n: "04",
    title: "Custom Furniture",
    desc: "Pieces designed in-house and made to order, so every join, proportion and finish belongs to the room.",
  },
  {
    n: "05",
    title: "Space Planning",
    desc: "Flow before furniture. We plan circulation, sightlines and proportion so a space breathes.",
  },
  {
    n: "06",
    title: "3D Visualization",
    desc: "Photoreal studies of light and material, so you feel the finished room before a single wall is built.",
  },
];

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

export const projects = [
  {
    n: "01",
    name: "Villa Meridian",
    location: "Palm Springs, California",
    type: "Residential · 520 m²",
    year: "2025",
    desc: "A desert retreat turned on its axis to follow the sun. Lime-washed walls, travertine floors and a sequence of rooms that open one into the next.",
    plate: "arch" as PlateKey,
  },
  {
    n: "02",
    name: "Maison Verre",
    location: "Lyon, France",
    type: "Commercial · Gallery & Café",
    year: "2025",
    desc: "A former glassworks reborn as a gallery and café — raw concrete left honest, daylight admitted through a single monumental clerestory.",
    plate: "light" as PlateKey,
  },
  {
    n: "03",
    name: "The Loft at Atlas",
    location: "New York, New York",
    type: "Residential · Turnkey",
    year: "2024",
    desc: "A full-floor loft delivered turnkey around a walnut-clad core. Custom joinery throughout; every millimetre accounted for before construction began.",
    plate: "section" as PlateKey,
  },
  {
    n: "04",
    name: "Hôtel Ombelle",
    location: "Lisbon, Portugal",
    type: "Hospitality · 38 Keys",
    year: "2024",
    desc: "Thirty-eight rooms and a courtyard bar, each planned on paper at full scale before a single trade broke ground. Quiet, tactile, unhurried.",
    plate: "plan" as PlateKey,
  },
];

export const contact = {
  email: "hello@atelierform.studio",
  phone: "+1 (310) 555-0192",
  address: "34 Rue des Ateliers\n1002 Los Angeles, CA",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "Behance", href: "#" },
  ],
};
