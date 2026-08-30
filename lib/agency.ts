export interface AgencyService {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  proofPointTitle: string;
  proofPointHref: string;
  iconName: string;
}

export interface AgencyPricingTier {
  id: string;
  name: string;
  badge?: string;
  priceINR: string;
  priceUSD: string;
  timeline: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  popular?: boolean;
}

export interface AgencyBlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: "Strategy" | "Technology" | "Case Study" | "SEO";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

export const agencyInfo = {
  name: "Automate Reality Labs",
  founder: "Swapnil",
  tagline: "Websites Built for the Business of Design",
  email: "swapnil@automaterealitylabs.in",
  phone: "+91 8605832851",
  whatsappUrl:
    "https://wa.me/918605832851?text=Hi%20Swapnil,%20I%20saw%20the%20Lumiere%20Interiors%20concept%20site%20and%20would%20like%20to%20discuss%20a%20website%20for%20our%20interior%20design%20studio.",
  areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Australia"],
  serviceKeywords: [
    "website design for interior designers",
    "web development agency for architecture studios",
    "interior design portfolio websites",
    "luxury architecture web agency",
    "Next.js interior design website developer",
  ],
};

export const agencyServices: AgencyService[] = [
  {
    slug: "custom-website-development",
    title: "Bespoke Web Design & Next.js Development",
    subtitle: "High-performance digital flagships tailored for architectural aesthetics",
    tagline: "Zero generic WordPress templates. Pure, precision-engineered React & Next.js performance.",
    overview:
      "We design and build bespoke web experiences from the ground up. Utilizing custom GSAP micro-animations, architectural typography systems, and lightning-fast server rendering, we ensure your studio's digital storefront matches the tactile luxury of your physical spaces.",
    deliverables: [
      "Custom Figma UI/UX designed around your studio's brand guidelines",
      "Next.js App Router frontend with sub-second page loads",
      "Dynamic project case study system with responsive image optimization",
      "Mobile-first responsive layouts tested across all viewports",
      "Global CDN deployment and automatic SSL security",
    ],
    proofPointTitle: "See Lumière Flagship Homepage →",
    proofPointHref: "/",
    iconName: "layout",
  },
  {
    slug: "interactive-cost-calculators",
    title: "Interactive Interior Cost Calculators",
    subtitle: "Turn website visitors into pre-qualified, high-intent consultation leads",
    tagline: "Eliminate price ambiguity and filter out low-budget inquiries automatically.",
    overview:
      "Most interior design studios waste dozens of hours on discovery calls with mismatched budgets. Our custom interactive estimation engines allow prospective clients to calculate real-time estimates based on their configuration (BHK, square footage, finish tier, and room scopes) before requesting a meeting.",
    deliverables: [
      "Multi-variable calculation logic tailored to your studio's pricing formula",
      "BHK, square-footage, and finish tier selectors (Essential, Signature, Bespoke)",
      "Instant PDF estimate generation and email lead capture gating",
      "Seamless CRM and direct WhatsApp lead dispatching",
    ],
    proofPointTitle: "Test Live Interactive Calculator →",
    proofPointHref: "/calculator",
    iconName: "calculator",
  },
  {
    slug: "case-study-cms-systems",
    title: "Architectural Case Study & Drawing Plate CMS",
    subtitle: "Transform static photos into deep, compelling design narratives",
    tagline: "Showcase the thinking, technical detailing, and craftsmanship behind every square foot.",
    overview:
      "High-net-worth clients don't just buy finished photos—they buy your design process. We build deep project case study templates featuring architectural drawing plate toggles, before-and-after renovation sliders, material specification tags, and spatial narrative breakdowns.",
    deliverables: [
      "Interactive Before/After slider components",
      "Technical drawing plate switcher (Floor Plans, Sections, Lighting Schematics)",
      "Material specification tables with finish and manufacturer roles",
      "Client quote and thesis callout formatting",
      "Headless CMS integration for effortless in-house publishing",
    ],
    proofPointTitle: "Explore Villa Meridian Case Study →",
    proofPointHref: "/work/villa-meridian",
    iconName: "layers",
  },
  {
    slug: "local-seo-architecture",
    title: "Multi-City Programmatic Local SEO",
    subtitle: "Dominate Google search results in your target luxury real estate markets",
    tagline: "Rank for high-intent searches without relying solely on social media algorithms.",
    overview:
      "We architect crawlable, programmatic city and room-specific landing hubs (e.g., 'Luxury 3 BHK Interior Designer in Bandra, Mumbai' or 'Villa Architecture Firm in South Delhi'). By structuring localized metadata, schema markup, and neighborhood-focused content, we drive steady organic client inquiries.",
    deliverables: [
      "Programmatic city and service routing taxonomy",
      "Structured Schema.org JSON-LD (ProfessionalService, FAQPage, BreadcrumbList)",
      "Fast-loading localized project portfolios for each target market",
      "Google Search Console & Google Business Profile alignment",
      "Automated XML sitemaps and semantic heading hierarchies",
    ],
    proofPointTitle: "Inspect Mumbai Local SEO Hub →",
    proofPointHref: "/locations/mumbai",
    iconName: "map-pin",
  },
  {
    slug: "digital-twin-3d-walkthroughs",
    title: "3D Spatial Walkthroughs & Digital Twins",
    subtitle: "Integrate immersive 3D dollhouse scans directly into case study pages",
    tagline: "Let prospective clients walk through completed projects in full 3D.",
    overview:
      "Whether embedding real Matterport scans, BIM digital twins, or high-definition spatial walkthrough previews, we engineer responsive viewports with clean fullscreen controls, floor plan mini-maps, and confidential access gating for private client reviews.",
    deliverables: [
      "Responsive Matterport, BIM, or 360 WebGL iframe integrations",
      "Fullscreen toggle and customized spatial control chrome",
      "Honest fallback states for upcoming or confidential projects",
      "Optimized lazy-loading to prevent initial page weight bloat",
    ],
    proofPointTitle: "See Spatial Walkthrough Module →",
    proofPointHref: "/work/villa-meridian#spatial-twin",
    iconName: "box",
  },
  {
    slug: "curated-shop-modules",
    title: "Curated Studio Shop & Material Catalogues",
    subtitle: "Monetize custom furniture, lighting collections, and imported finishes",
    tagline: "Expand your studio revenue beyond billable hours with e-commerce capability.",
    overview:
      "Many leading interior designers design custom bespoke furniture, lighting fixtures, and decor pieces. We build high-aesthetic e-commerce catalogue modules with category filtering, material swatches, inquiry drawers, and checkout integrations.",
    deliverables: [
      "Fast product filtering by room, category, and material",
      "High-resolution product galleries with dimensions and finish specs",
      "Custom quote inquiry drawer or direct Stripe/Razorpay checkout",
      "Sample ordering workflows for architects and trade clients",
    ],
    proofPointTitle: "Browse Studio Shop Experience →",
    proofPointHref: "/shop",
    iconName: "shopping-bag",
  },
];

export const agencyPricingTiers: AgencyPricingTier[] = [
  {
    id: "studio-showcase",
    name: "Studio Showcase",
    priceINR: "₹1,45,000",
    priceUSD: "$1,850",
    timeline: "3–4 Weeks",
    description: "Ideal for boutique interior designers and architects seeking an elevated, custom digital presence.",
    bestFor: "Solo designers & boutique practices looking to upgrade from templates",
    deliverables: [
      "Custom Figma UI/UX Design (Tailored to your aesthetic)",
      "Next.js App Router Responsive Frontend",
      "Up to 8 Core Pages (Home, Work, Services, About, Process, FAQ, Contact)",
      "Dynamic Case Study CMS with Before/After Sliders",
      "Mobile-Optimized Lead Form + Direct WhatsApp Trigger",
      "Core SEO Setup & Google Search Console Verification",
      "Fast Global CDN Deployment & Domain Configuration",
    ],
  },
  {
    id: "signature-growth",
    name: "Signature Platform",
    badge: "Most Popular for Growth",
    popular: true,
    priceINR: "₹2,75,000",
    priceUSD: "$3,450",
    timeline: "5–6 Weeks",
    description: "Complete conversion engine with interactive calculators, deep case studies, and multi-city SEO.",
    bestFor: "Established studios wanting to pre-qualify clients and rank in multiple cities",
    deliverables: [
      "Everything in Studio Showcase",
      "Custom Interactive Interior Cost Calculator (BHK/Sqft/Tier)",
      "Multi-City Programmatic Local SEO Architecture (5 Target Cities)",
      "Room-by-Room Service Taxonomy & Silo Pages (7+ Categories)",
      "Architectural Drawing Plate & Spatial Walkthrough Modules",
      "Editorial Journal CMS with Category Filtering",
      "Advanced Schema.org Structured Data Implementation",
      "Automated Email Lead Routing & Zapier/CRM Sync",
    ],
  },
  {
    id: "flagship-bespoke",
    name: "Flagship Architecture",
    priceINR: "₹4,50,000+",
    priceUSD: "$5,500+",
    timeline: "8–10 Weeks",
    description: "Enterprise-grade digital infrastructure for multi-city luxury architecture & interior firms.",
    bestFor: "High-end multi-partner firms requiring e-commerce, custom 3D viewports, and internationalization",
    deliverables: [
      "Everything in Signature Platform",
      "Curated E-Commerce Shop Module for Furniture & Decor",
      "Client Portal for Real-Time Project Milestone Tracking",
      "Interactive 3D / WebGL / BIM Viewport Integrations",
      "Multi-Currency & International Location Routing",
      "Custom Motion Design & Cinematic Scroll Sequence Integration",
      "Dedicated Quarterly Performance, Content & SEO Retainer (First 3 Months)",
    ],
  },
];

export const agencyBlogPosts: AgencyBlogPost[] = [
  {
    slug: "what-every-interior-design-website-needs-2026",
    title: "What Every Luxury Interior Design Website Needs in 2026",
    metaTitle: "What Every Interior Design Website Needs in 2026 | Automate Reality Labs",
    description:
      "From transparent cost calculators to technical drawing plates and sub-second performance, discover the essential features top interior design studios are using to convert high-net-worth clients.",
    publishDate: "August 2026",
    readTime: "6 min read",
    category: "Strategy",
    author: {
      name: "Swapnil",
      role: "Founder & Lead Architect, Automate Reality Labs",
      avatar: "/images/team/member-1.png",
    },
    content: `
### The Shift in High-Net-Worth Client Behavior

High-net-worth individuals (HNIs) and luxury residential clients in 2026 research architects and interior designers differently than they did five years ago. While Instagram and Pinterest remain valuable discovery channels, serious clients who are ready to commission eight-figure residential transformations evaluate your studio through your **website**.

If your site is a slow WordPress theme with unorganized photo dumps and zero pricing context, prospective clients move on to a practice that presents clear process, deep technical craft, and transparent engagement tiers.

Here are the critical elements modern interior design websites must have to stay competitive:

---

### 1. Interactive Budget & Cost Estimation Tools
Price ambiguity is the number one reason high-budget clients hesitate to inquire, and the number one reason design principals waste time on discovery calls with mismatched leads.

By embedding an **interactive cost calculator** that lets clients configure their space (apartment vs. villa, BHK count, square footage, and finish tier), you achieve two critical outcomes:
- You anchor client expectations to realistic, premium fee structures before the first meeting.
- You capture qualified contact information from serious buyers who have already explored your pricing model.

---

### 2. Deep Case Studies with Technical Drawing Plates
Finished photography is table stakes. Every competitor has professional photoshoot images. What sets elite architecture and interior design firms apart is showing the **intellectual rigor** behind the project:
- **Architectural Drawing Plates**: High-resolution floor plans, sections, and reflected ceiling lighting plans that clients can toggle.
- **Before & After Renovation Comparisons**: Interactive sliders that showcase the dramatic structural transformation of dark, fragmented spaces.
- **Material Narratives**: Detailed breakdowns of Roman travertine, smoked oak millwork, and custom unlacquered brass joinery.

---

### 3. Programmatic Local SEO for Target Neighborhoods
Luxury homeowners search with geographic intent: *"Luxury 4 BHK interior designer in Bandra West"* or *"Contemporary villa architect in Golf Course Road Gurgaon"*.

Rather than hoping one generic homepage ranks for everything, leading studios deploy **programmatic local landing hubs** tailored to each high-value micro-market, complete with localized case study references and schema markup.

---

### 4. Direct 1-Click WhatsApp & Frictionless Consultation Flows
High-intent clients want immediate, discreet access to your design team. Integrating a polished WhatsApp consultation widget alongside a structured multi-step inquiry form increases inbound lead conversion by over 40% compared to generic mailto links.

---

### Ready to Build a Conversion Engine for Your Practice?
Explore our custom web development packages for architecture and design studios on our [Pricing Page](/work-with-us/pricing) or review the [Lumière Interiors Case Study](/work-with-us/portfolio/lumiere-interiors) to see these systems in action.
    `,
  },
  {
    slug: "how-much-should-you-budget-for-interior-design-website",
    title: "How Much Should You Budget for a Website as an Interior Designer?",
    metaTitle: "Website Budget Guide for Interior Designers (2026) | Automate Reality Labs",
    description:
      "A realistic breakdown of website costs for interior design practices — comparing DIY builders, generalist freelancers, and specialized agency development.",
    publishDate: "August 2026",
    readTime: "7 min read",
    category: "Strategy",
    author: {
      name: "Swapnil",
      role: "Founder & Lead Architect, Automate Reality Labs",
      avatar: "/images/team/member-1.png",
    },
    content: `
### Understanding the True ROI of Your Studio's Digital Storefront

For an interior design practice where a single turnkey residential commission can range from **₹25 Lakhs to ₹3+ Crores ($30k – $350k+)**, your website is not an administrative cost center—it is your highest-leverage sales asset.

A website that captures just **one additional high-tier villa project** per year pays for its entire design and engineering budget multiple times over.

Let's break down the realistic budget tiers available to interior design studios in 2026:

---

### Tier 1: DIY Templates (Squarespace / Wix)
- **Budget Range**: ₹15,000 – ₹40,000 / year ($200 – $500)
- **Best For**: First-year solo decorators with fewer than 3 completed projects.
- **Limitations**: Slow page speeds, rigid layouts, inability to build custom cost calculators or multi-city programmatic SEO hubs, and generic aesthetic that fails to justify premium fee structures.

---

### Tier 2: Generalist Freelancers / Basic WordPress
- **Budget Range**: ₹50,000 – ₹1,20,000 ($650 – $1,500)
- **Best For**: Studios needing basic digital brochure updates.
- **Limitations**: Often relies on heavy pre-built Elementor/Divi themes with plugin bloat, frequent maintenance headaches, security vulnerabilities, and generic layouts without deep architectural understanding.

---

### Tier 3: Specialized Bespoke Web Development (Next.js & Tailored Architecture)
- **Budget Range**: ₹1,45,000 – ₹4,50,000 ($1,850 – $5,500)
- **Best For**: Established interior design firms and luxury architecture practices looking to scale client acquisition and pre-qualify HNI inquiries.
- **Key Deliverables**: Custom Figma design systems, sub-second Next.js performance, custom interactive cost calculators, programmatic local SEO for multiple cities, before/after case study tools, and headless CMS integrations.

---

### Key Questions to Ask When Budgeting
1. *Does our current website communicate the true value of our ₹5,000/sq.ft luxury builds?*
2. *Are we losing high-value organic search traffic in top neighborhoods to competing firms?*
3. *How much principal designer time is wasted on discovery calls with clients who cannot afford our minimum budget threshold?*

---

### Transparent Studio Packages
At **Automate Reality Labs**, we offer fixed-scope, transparent pricing packages specifically engineered for interior design studios. View our complete [Agency Pricing Matrix](/work-with-us/pricing) or [Book a Strategy Call](/work-with-us/contact).
    `,
  },
  {
    slug: "squarespace-vs-custom-development-interior-design",
    title: "Squarespace vs. Custom Development: What’s Right for Your Design Studio?",
    metaTitle: "Squarespace vs Custom Web Development for Interior Designers | Automate Reality Labs",
    description:
      "Compare the pros, cons, performance ceilings, and SEO implications of template builders versus custom Next.js platforms for interior design practices.",
    publishDate: "August 2026",
    readTime: "8 min read",
    category: "Technology",
    author: {
      name: "Swapnil",
      role: "Founder & Lead Architect, Automate Reality Labs",
      avatar: "/images/team/member-1.png",
    },
    content: `
### The Dilemma: Template Speed vs. Custom Performance

When starting an interior design practice, almost every designer begins with a visual template builder like Squarespace, Wix, or Shopify. They offer drag-and-drop interfaces, low upfront costs, and immediate setup.

However, as a studio scales from small styling consultations to full-scale architectural builds and HNI turnkey projects, template platforms inevitably hit severe technical and commercial ceilings.

Let's evaluate how Squarespace compares to custom **Next.js & React** development across the criteria that matter most to luxury studios:

---

### Comparison Matrix

| Evaluation Criteria | Squarespace / Template Builders | Custom Next.js & React Architecture |
|---|---|---|
| **Page Speed & Core Web Vitals** | Typically scores 35–60 on Google Mobile PageSpeed due to heavy bundled JS scripts. | Consistently scores **90–100** with sub-second Time-to-First-Byte (TTFB) and automatic image optimization. |
| **Interactive Tools (Calculators, Filters)** | Extremely limited; requires clunky third-party iframes or costly monthly plugin subscriptions. | **Fully custom-built**: real-time BHK estimators, finish sliders, dynamic scope matrices, and drawing plate toggles. |
| **Local Multi-City SEO Architecture** | Manual, slow to scale; difficult to create hundreds of indexed neighborhood and room landing hubs. | **Programmatic SEO engine**: automatically generates structured, crawlable city and service pages with clean schema markup. |
| **Visual Uniqueness & Luxe Feel** | Recognizable grid patterns and standard typography; easily looks like other template sites. | **100% bespoke editorial design**: fluid typography, custom GSAP micro-animations, and uncompromised brand alignment. |
| **Lead Capture & CRM Automation** | Basic contact forms with limited routing logic. | Multi-step qualification flows with direct WhatsApp triggers, instant PDF dossier generation, and CRM webhooks. |

---

### When Should You Stick with Squarespace?
- You are in your first 6 months of independent practice.
- You have fewer than 2 completed projects photographed.
- Your project budgets are under ₹5 Lakhs ($6k).

### When Should You Upgrade to Custom Architecture?
- Your studio is competing for signature residential villas, luxury penthouses, or commercial hospitality commissions.
- You want to eliminate price ambiguity with custom estimation tools.
- You are expanding into multiple cities (e.g. Mumbai, Delhi, Bengaluru, Goa) and need organic search dominance.
- You want your website to reflect the same level of bespoke craft as your physical interior commissions.

---

### See What Custom Development Looks Like
Explore our deep teardown in the [Lumière Interiors Case Study](/work-with-us/portfolio/lumiere-interiors) or review our [Custom Studio Packages](/work-with-us/pricing).
    `,
  },
  {
    slug: "case-study-building-lumiere-interiors",
    title: "Case Study Breakdown: Engineering Lumière Interiors",
    metaTitle: "Case Study: Building Lumière Interiors | Automate Reality Labs",
    description:
      "A complete architectural and engineering breakdown of how we built Lumière Interiors — 72 static routes, 60fps canvas sequences, interactive estimation engines, and multi-city SEO.",
    publishDate: "August 2026",
    readTime: "10 min read",
    category: "Case Study",
    author: {
      name: "Swapnil",
      role: "Founder & Lead Architect, Automate Reality Labs",
      avatar: "/images/team/member-1.png",
    },
    content: `
### The Vision Behind Lumière Interiors

**Lumière Interiors** was designed and engineered by **Automate Reality Labs** as a flagship demonstration of what happens when high-end editorial aesthetics meet enterprise-grade web development for the architecture and design industry.

Rather than creating a basic 3-page template mockup, we built a complete, production-ready digital ecosystem spanning **72 routes**, programmatic city hubs, interactive calculation engines, and deep multi-media case studies.

---

### Architectural & Technical Highlights

#### 1. 60FPS Frame-Sequence Canvas Hero
Instead of heavy auto-playing video files that consume massive mobile data and stutter on low bandwidth, we engineered an HTML5 **2D Canvas Frame Scrubber** bound to GSAP ScrollTrigger across 300 sequential cinematic frames.
- Instant initial paint of frame 0 with sub-second DOMContentLoaded.
- Tiered background preloading (instant tier, keyframe tier, and idle streaming).
- Automatic nearest-frame visual fallbacks ensuring zero flicker.

#### 2. Real-Time Interior Cost Estimation Engine
We created a multi-variable calculation engine that instantly translates:
$$\\text{Estimated Cost} = \\text{Area (sq.ft)} \\times \\text{Tier Rate (Essential/Signature/Bespoke)} + \\sum \\text{Room Scope Additions}$$
This empowers prospective clients to explore transparent pricing and pre-qualifies incoming inquiries.

#### 3. Programmatic Local SEO Engine
Covering 5 major luxury real estate markets (Mumbai, New Delhi, Bengaluru, Hyderabad, Goa) across 7 primary service categories (Living Room, Kitchen, Bedroom, Study, Bath, Dining, Entry), generating **35+ indexed, crawlable landing pages** with Schema.org JSON-LD structured data.

#### 4. Deep Project Case Study Infrastructure
Each project case study features:
- Architectural Drawing Plate Switcher (Floor Plans, Lighting Schematics, Joinery Details).
- Interactive Before/After renovation comparison slider.
- Material specification tables with roles and surface finishes.
- Spatial digital twin preview module.

---

### Verified Performance & Build Stats
- **Total Static & SSG Routes**: 72 Pages
- **Build Time**: Under 3 seconds with Next.js Turbopack
- **TypeScript Type Safety**: 100% strict verification, 0 runtime errors
- **Mobile Responsiveness**: Fully responsive across 320px to 4K displays

---

### Build a Similar Platform for Your Studio
Read the complete [Long-Form Technical Case Study](/work-with-us/portfolio/lumiere-interiors) or [Get in Touch with Swapnil](/work-with-us/contact) to discuss building your studio's custom digital flagship.
    `,
  },
];
