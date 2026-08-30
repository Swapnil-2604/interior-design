import type { MetadataRoute } from "next";
import { projects, services, blogPosts, locationsData } from "@/lib/site";
import { agencyBlogPosts } from "@/lib/agency";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://lumiereinteriors.automaterealitylabs.in";

  const now = new Date();

  // 1. Core Top-Level Routes
  const coreRoutes = [
    "",
    "/about",
    "/calculator",
    "/contact",
    "/faq",
    "/journal",
    "/pricing",
    "/process",
    "/services",
    "/shop",
    "/work",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Project Case Studies (/work/[slug])
  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 3. Service Detail Pages (/services/[slug])
  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 4. Journal / Blog Articles (/journal/[slug])
  const journalRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 5. Local SEO City Hubs (/locations/[city])
  const cityKeys = Object.keys(locationsData);
  const cityRoutes = cityKeys.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 6. Local SEO City × Service Pages (/locations/[city]/[service])
  const cityServiceRoutes: MetadataRoute.Sitemap = [];
  for (const city of cityKeys) {
    for (const service of services) {
      cityServiceRoutes.push({
        url: `${baseUrl}/locations/${city}/${service.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      });
    }
  }

  // 7. Agency Section Hubs (/work-with-us/*)
  const agencyCoreRoutes = [
    "/work-with-us",
    "/work-with-us/portfolio/lumiere-interiors",
    "/work-with-us/services",
    "/work-with-us/pricing",
    "/work-with-us/blog",
    "/work-with-us/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/work-with-us" ? 0.95 : 0.85,
  }));

  // 8. Agency Blog Articles (/work-with-us/blog/[slug])
  const agencyBlogRoutes = agencyBlogPosts.map((post) => ({
    url: `${baseUrl}/work-with-us/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...coreRoutes,
    ...projectRoutes,
    ...serviceRoutes,
    ...journalRoutes,
    ...cityRoutes,
    ...cityServiceRoutes,
    ...agencyCoreRoutes,
    ...agencyBlogRoutes,
  ];
}
