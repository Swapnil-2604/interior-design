import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { agencyInfo } from "@/lib/agency";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      studio,
      email,
      phone,
      website,
      location,
      package: selectedPackage,
      timeline,
      goals,
      source = "Agency Contact Form",
    } = data;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 },
      );
    }

    const payload = {
      name,
      studio: studio || "Not provided",
      email,
      phone: phone || "Not provided",
      website: website || "Not provided",
      location: location || "Not provided",
      package: selectedPackage || "Custom Scope",
      timeline: timeline || "Not specified",
      goals: goals || "No specific notes provided",
      source,
      timestamp: new Date().toISOString(),
      recipient: agencyInfo.email,
    };

    // 1. Permanent Safety Net: Append lead to local logs/leads.json
    try {
      const logsDir = path.join(process.cwd(), "logs");
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      const leadsFilePath = path.join(logsDir, "leads.json");
      let existingLeads: any[] = [];
      if (fs.existsSync(leadsFilePath)) {
        try {
          const raw = fs.readFileSync(leadsFilePath, "utf8");
          existingLeads = JSON.parse(raw);
        } catch {
          existingLeads = [];
        }
      }
      existingLeads.push(payload);
      fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf8");
      console.log(`[LEAD SAVED TO DISK]: ${leadsFilePath} | Total leads: ${existingLeads.length}`);
    } catch (fsErr) {
      console.error("[LEAD FILE SYSTEM LOGGING ERROR]:", fsErr);
    }

    // 2. Formspree Email Delivery via Environment Variable
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    let emailDelivered = false;

    if (formspreeEndpoint && !formspreeEndpoint.includes("PLACEHOLDER")) {
      try {
        const formspreeRes = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (formspreeRes.ok) {
          emailDelivered = true;
          console.log("[FORMSPREE EMAIL DISPATCH SUCCESS]: Forwarded to Formspree.");
        } else {
          console.warn("[FORMSPREE HTTP WARNING]:", formspreeRes.status, await formspreeRes.text());
        }
      } catch (forwardErr) {
        console.warn("[FORMSPREE NETWORK ERROR]:", forwardErr);
      }
    } else {
      console.log(
        "[FORMSPREE SKIPPED]: FORMSPREE_ENDPOINT not configured yet in .env.local. Lead is preserved safely in logs/leads.json.",
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Swapnil will respond within 24 hours.",
        emailDelivered,
        data: payload,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please contact directly via email or WhatsApp." },
      { status: 500 },
    );
  }
}
