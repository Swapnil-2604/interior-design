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
}

const LOGS_DIR = path.join(process.cwd(), "logs");
const VISITORS_FILE = path.join(LOGS_DIR, "visitors.json");

// Ensure logs directory and file exist
export function getVisitorsFilePath(): string {
  if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
  }
  if (!fs.existsSync(VISITORS_FILE)) {
    fs.writeFileSync(VISITORS_FILE, JSON.stringify([], null, 2), "utf8");
  }
  return VISITORS_FILE;
}

// Read all visitor logs safely
export function readVisitorLogs(): VisitorLogEntry[] {
  try {
    const filePath = getVisitorsFilePath();
    const data = fs.readFileSync(filePath, "utf8");
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error("[VISITOR_LOGGER_READ_ERROR]:", err);
    return [];
  }
}

// Append a single visit entry safely (keeps latest 10,000 entries)
export function logVisitor(entry: VisitorLogEntry): void {
  try {
    const filePath = getVisitorsFilePath();
    const logs = readVisitorLogs();
    
    // Add to beginning for reverse-chronological order
    logs.unshift(entry);

    // Keep max 10,000 to prevent unbounded file growth
    const trimmed = logs.slice(0, 10000);

    fs.writeFileSync(filePath, JSON.stringify(trimmed, null, 2), "utf8");
    console.log(`[VISIT LOGGED]: IP ${entry.ip} -> ${entry.path} (${entry.device}/${entry.browser}) at ${entry.timestamp}`);
  } catch (err) {
    console.error("[VISITOR_LOGGER_WRITE_ERROR]:", err);
  }
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

  return "127.0.0.1 (Localhost)";
}

// Helper to detect Browser, OS, and Device from User Agent
export function parseUserAgent(uaString: string | null): {
  browser: string;
  os: string;
  device: "Mobile" | "Tablet" | "Desktop" | "Bot" | "Unknown";
} {
  const ua = uaString || "";

  // Bot detection
  if (/bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot/i.test(ua)) {
    return { browser: "Bot/Crawler", os: "Unknown", device: "Bot" };
  }

  // Device detection
  let device: "Mobile" | "Tablet" | "Desktop" | "Unknown" = "Desktop";
  if (/iPad|tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(ua)) {
    device = "Tablet";
  } else if (/Mobile|iPhone|iPod|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated/i.test(ua)) {
    device = "Mobile";
  }

  // OS detection
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

  // Browser detection
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
export function getVisitorAnalytics(): VisitorAnalyticsSummary {
  const logs = readVisitorLogs();
  const totalPageViews = logs.length;

  const uniqueVisitorSet = new Set<string>();
  const todayUniqueSet = new Set<string>();
  const todayDateStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  let todayViews = 0;
  const pageCounts: Record<string, number> = {};
  const referrerCounts: Record<string, number> = {};
  const deviceCounts: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0, Bot: 0, Unknown: 0 };
  const browserCounts: Record<string, number> = {};

  for (const entry of logs) {
    uniqueVisitorSet.add(entry.visitorId || entry.ip);

    const entryDate = entry.timestamp.split("T")[0];
    if (entryDate === todayDateStr) {
      todayViews++;
      todayUniqueSet.add(entry.visitorId || entry.ip);
    }

    // Page frequency
    const p = entry.path || "/";
    pageCounts[p] = (pageCounts[p] || 0) + 1;

    // Referrer frequency
    let ref = entry.referrer || "Direct / Bookmark";
    if (ref.includes("google.")) ref = "Google Search";
    else if (ref.includes("instagram.com")) ref = "Instagram";
    else if (ref.includes("facebook.com")) ref = "Facebook";
    else if (ref.includes("whatsapp")) ref = "WhatsApp";
    else if (ref.includes("linkedin.com")) ref = "LinkedIn";
    else if (ref.includes("t.co") || ref.includes("twitter.com") || ref.includes("x.com")) ref = "X (Twitter)";
    else if (ref.includes("youtube.com")) ref = "YouTube";
    referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;

    // Device
    const dev = entry.device || "Desktop";
    deviceCounts[dev] = (deviceCounts[dev] || 0) + 1;

    // Browser
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
  };
}
