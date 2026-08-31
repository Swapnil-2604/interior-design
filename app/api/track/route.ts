import { NextResponse } from "next/server";
import {
  extractClientIp,
  parseUserAgent,
  logVisitor,
  getVisitorAnalytics,
  readVisitorLogs,
  VisitorLogEntry,
} from "@/lib/visitor-logger";

export async function POST(req: Request) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const clientIp = extractClientIp(req);
    const userAgentHeader = req.headers.get("user-agent") || "";
    const { browser, os, device } = parseUserAgent(userAgentHeader);

    // Build the log entry
    const entry: VisitorLogEntry = {
      id: "v_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      visitorId: body.visitorId || "anon_" + Math.random().toString(36).substring(2, 10),
      sessionId: body.sessionId || "sess_" + Math.random().toString(36).substring(2, 10),
      timestamp: new Date().toISOString(),
      ip: clientIp,
      path: body.path || "/",
      referrer: body.referrer || (req.headers.get("referer") || "Direct"),
      userAgent: userAgentHeader,
      browser: body.browser || browser,
      os: body.os || os,
      device: body.device || device,
      screenResolution: body.screenResolution || "Unknown",
      language: body.language || (req.headers.get("accept-language")?.split(",")[0] || "Unknown"),
      timeZone: body.timeZone || "Unknown",
    };

    // Save visit log in background
    await logVisitor(entry);

    return NextResponse.json({ success: true, recordedId: entry.id }, { status: 200 });
  } catch (error) {
    console.error("[VISITOR_TRACK_ERROR]:", error);
    return NextResponse.json({ success: false, error: "Failed to log visit" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const summary = searchParams.get("summary");
    const download = searchParams.get("download");

    if (download === "csv") {
      const logs = await readVisitorLogs(5000);
      const headers = ["Timestamp", "IP Address", "Path", "Device", "OS", "Browser", "Referrer", "Visitor ID", "Screen Resolution", "Language", "Timezone"];
      const rows = logs.map((l) => [
        `"${l.timestamp}"`,
        `"${l.ip}"`,
        `"${l.path}"`,
        `"${l.device}"`,
        `"${l.os}"`,
        `"${l.browser}"`,
        `"${(l.referrer || "").replace(/"/g, '""')}"`,
        `"${l.visitorId}"`,
        `"${l.screenResolution || ""}"`,
        `"${l.language || ""}"`,
        `"${l.timeZone || ""}"`,
      ]);

      const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

      return new Response(csvContent, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="visitors-${new Date().toISOString().split("T")[0]}.csv"`,
        },
      });
    }

    if (download === "json") {
      const logs = await readVisitorLogs(5000);
      return new Response(JSON.stringify(logs, null, 2), {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Disposition": `attachment; filename="visitors-${new Date().toISOString().split("T")[0]}.json"`,
        },
      });
    }

    if (summary === "true" || summary === "1") {
      const analytics = await getVisitorAnalytics();
      return NextResponse.json({ success: true, data: analytics }, { status: 200 });
    }

    // Default: return raw logs with limit
    const limit = parseInt(searchParams.get("limit") || "100", 10);
    const allLogs = await readVisitorLogs(Math.min(limit, 1000));
    return NextResponse.json(
      {
        success: true,
        total: allLogs.length,
        logs: allLogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[VISITOR_GET_ERROR]:", error);
    return NextResponse.json({ success: false, error: "Failed to read logs" }, { status: 500 });
  }
}
