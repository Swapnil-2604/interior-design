import { NextResponse } from "next/server";
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

    console.log("[LEAD RECEIVED - Automate Reality Labs]:", JSON.stringify(payload, null, 2));

    // If Formspree endpoint or Resend key is configured in env, forward it
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mpwzgqor";

    try {
      if (formspreeEndpoint) {
        await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
      }
    } catch (forwardErr) {
      console.warn("[Formspree Forwarding Warning]:", forwardErr);
      // Still succeed for the user since lead is logged on server
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Swapnil will respond within 24 hours.",
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
