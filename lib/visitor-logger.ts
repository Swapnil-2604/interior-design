import fs from "fs";
import path from "path";

export interface VisitorLogEntry {
  id: string;
  visitorId: string;
  sessionId: string;
  timestamp: string;
  ip: string;
  path: string;
  referrer: string;
  userAgent: string;
  browser: string;
  os: string;
  device: "Mobile" | "Tablet" | "Desktop" | "Bot" | "Unknown";
  screenResolution?: string;
  language?: string;
  timeZone?: string;
}

export interface VisitorAnalyticsSummary {
  totalPageViews: number;
  uniqueVisitors: number;
  todayViews: number;
  todayUniques: number;
  topPages: { path: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  devices: { device: string; count: number; percentage: number }[];
  browsers: { browser: string; count: number }[];
  recentVisits: VisitorLogEntry[];
  storageType: "Upstash Cloud Redis" | "Local File System";
}

const LOGS_DIR = path.join(process.cwd(), "logs");
const VISITORS_FILE = path.join(LOGS_DIR, "visitors.json");

// Helper to check if Upstash is configured
export function getUpstashConfig(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (url && token && !url.includes("PLACEHOLDER") && !token.includes("PLACEHOLDER")) {
    return { url: url.replace(/\/$/, ""), token };
  }
  return null;
}

// Local filesystem fallback helpers
function getVisitorsFilePath(): string {
  try {
    if (!fs.existsSync(LOGS_DIR)) {
      fs.mkdirSync(LOGS_DIR, { recursive: true });
    }
    if (!fs.existsSync(VISITORS_FILE)) {
      fs.writeFileSync(VISITORS_FILE, JSON.stringify([], null, 2), "utf8");
    }
  } catch {
    // Ignore in read-only environments
  }
  return VISITORS_FILE;
}

function readLocalLogs(): VisitorLogEntry[] {
  try {
    const filePath = getVisitorsFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      if (data.trim()) return JSON.parse(data);
    }
  } catch (err) {
    console.error("[LOCAL_LOG_READ_ERROR]:", err);
  }
  return [];
}

function logLocal(entry: VisitorLogEntry): void {
  try {
    const filePath = getVisitorsFilePath();
    const logs = readLocalLogs();
    logs.unshift(entry);
    const trimmed = logs.slice(0, 10000);
    fs.writeFileSync(filePath, JSON.stringify(trimmed, null, 2), "utf8");
  } catch (err) {
    // Silently handle read-only environments like Vercel Lambda
  }
}

// Read visitor logs from Upstash Redis or Local File
export async function readVisitorLogs(limit = 1000): Promise<VisitorLogEntry[]> {
  const upstash = getUpstashConfig();

  if (upstash) {
    try {
      // LRANGE lumiere:visitors 0 limit-1
      const res = await fetch(`${upstash.url}/lrange/lumiere:visitors/0/${limit - 1}`, {
        headers: {
          Authorization: `Bearer ${upstash.token}`,
        },
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.result)) {
          return json.result
            .map((item: string | object) => {
              if (typeof item === "string") {
                try {
                  return JSON.parse(item);
                } catch {
                  return null;
                }
              }
              return item;
            })
            .filter(Boolean) as VisitorLogEntry[];
        }
      }
    } catch (upstashErr) {
      console.error("[UPSTASH_READ_ERROR]:", upstashErr);
    }
  }

  // Fallback to local files
  return readLocalLogs();
}

// Append a single visit entry to Upstash Redis and local disk
export async function logVisitor(entry: VisitorLogEntry): Promise<void> {
  const upstash = getUpstashConfig();

  if (upstash) {
    try {
      const payloadString = JSON.stringify(entry);

      // 1. LPUSH into Redis list
      await fetch(`${upstash.url}/lpush/lumiere:visitors`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstash.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([payloadString]),
      });

      // 2. LTRIM to keep max 10,000 logs in Redis
      fetch(`${upstash.url}/ltrim/lumiere:visitors/0/9999`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstash.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([]),
      }).catch(() => {});

      console.log(`[UPSTASH LOGGED]: IP ${entry.ip} -> ${entry.path} (${entry.device}/${entry.browser})`);
      return;
    } catch (err) {
      console.error("[UPSTASH_LOG_ERROR]:", err);
    }
  }

  // Fallback to local logs
  logLocal(entry);
}

// Helper to extract IP from Next.js request headers
export function extractClientIp(req: Request): string {
  const headers = req.headers;

  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const ips = xForwardedFor.split(",").map((ip) => ip.trim());
    if (ips.length > 0 && ips[0]) return ips[0];
  }

  const xRealIp = headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  const forwarded = headers.get("forwarded");
  if (forwarded) {
    const match = forwarded.match(/for="?([^;"]+)"?/i);
    if (match && match[1]) return match[1];
  }

  return "127.0.0.1";
}

// Helper to detect Browser, OS, and Device from User Agent
export function parseUserAgent(uaString: string | null): {
  browser: string;
  os: string;
  device: "Mobile" | "Tablet" | "Desktop" | "Bot" | "Unknown";
} {
  const ua = uaString || "";

  if (/bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot/i.test(ua)) {
    return { browser: "Bot/Crawler", os: "Unknown", device: "Bot" };
  }

  let device: "Mobile" | "Tablet" | "Desktop" | "Unknown" = "Desktop";
  if (/iPad|tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(ua)) {
    device = "Tablet";
  } else if (/Mobile|iPhone|iPod|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated/i.test(ua)) {
    device = "Mobile";
  }

  let os = "Unknown OS";
  if (/windows nt 10/i.test(ua)) os = "Windows 10/11";
  else if (/windows nt 6.3/i.test(ua)) os = "Windows 8.1";
  else if (/windows nt 6.1/i.test(ua)) os = "Windows 7";
  else if (/windows/i.test(ua)) os = "Windows";
  else if (/macintosh|mac os x/i.test(ua)) os = "macOS";
  else if (/iphone/i.test(ua)) os = "iOS (iPhone)";
  else if (/ipad/i.test(ua)) os = "iPadOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/linux/i.test(ua)) os = "Linux";
  else if (/cros/i.test(ua)) os = "ChromeOS";

  let browser = "Unknown Browser";
  if (/edg/i.test(ua)) browser = "Microsoft Edge";
  else if (/opr|opera/i.test(ua)) browser = "Opera";
  else if (/chrome|crios/i.test(ua)) browser = "Chrome";
  else if (/firefox|fxios/i.test(ua)) browser = "Firefox";
  else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) browser = "Safari";
  else if (/msie|trident/i.test(ua)) browser = "Internet Explorer";

  return { browser, os, device };
}

// Compute aggregate metrics for the dashboard
export async function getVisitorAnalytics(): Promise<VisitorAnalyticsSummary> {
  const upstash = getUpstashConfig();
  const logs = await readVisitorLogs(2000);
  const totalPageViews = logs.length;

  const uniqueVisitorSet = new Set<string>();
  const todayUniqueSet = new Set<string>();
  const todayDateStr = new Date().toISOString().split("T")[0];

  let todayViews = 0;
  const pageCounts: Record<string, number> = {};
  const referrerCounts: Record<string, number> = {};
  const deviceCounts: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0, Bot: 0, Unknown: 0 };
  const browserCounts: Record<string, number> = {};

  for (const entry of logs) {
    uniqueVisitorSet.add(entry.visitorId || entry.ip);

    const entryDate = entry.timestamp?.split("T")[0] || "";
    if (entryDate === todayDateStr) {
      todayViews++;
      todayUniqueSet.add(entry.visitorId || entry.ip);
    }

    const p = entry.path || "/";
    pageCounts[p] = (pageCounts[p] || 0) + 1;

    let ref = entry.referrer || "Direct";
    if (ref.includes("google.")) ref = "Google Search";
    else if (ref.includes("instagram.com")) ref = "Instagram";
    else if (ref.includes("facebook.com")) ref = "Facebook";
    else if (ref.includes("whatsapp")) ref = "WhatsApp";
    else if (ref.includes("linkedin.com")) ref = "LinkedIn";
    else if (ref.includes("t.co") || ref.includes("twitter.com") || ref.includes("x.com")) ref = "X (Twitter)";
    else if (ref.includes("youtube.com")) ref = "YouTube";
    referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;

    const dev = entry.device || "Desktop";
    deviceCounts[dev] = (deviceCounts[dev] || 0) + 1;

    const br = entry.browser || "Other";
    browserCounts[br] = (browserCounts[br] || 0) + 1;
  }

  const topPages = Object.entries(pageCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  const topReferrers = Object.entries(referrerCounts)
    .map(([referrer, count]) => ({ referrer, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const devices = Object.entries(deviceCounts)
    .filter(([_, count]) => count > 0)
    .map(([device, count]) => ({
      device,
      count,
      percentage: totalPageViews > 0 ? Math.round((count / totalPageViews) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  const browsers = Object.entries(browserCounts)
    .map(([browser, count]) => ({ browser, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return {
    totalPageViews,
    uniqueVisitors: uniqueVisitorSet.size,
    todayViews,
    todayUniques: todayUniqueSet.size,
    topPages,
    topReferrers,
    devices,
    browsers,
    recentVisits: logs.slice(0, 100),
    storageType: upstash ? "Upstash Cloud Redis" : "Local File System",
  };
}
