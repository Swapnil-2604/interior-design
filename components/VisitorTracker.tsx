"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function getOrSetVisitorId(): string {
  if (typeof window === "undefined") return "";
  try {
    let vid = localStorage.getItem("lumiere_vid");
    if (!vid) {
      vid = "vid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("lumiere_vid", vid);
    }
    return vid;
  } catch {
    return "vid_" + Math.random().toString(36).substring(2, 10);
  }
}

function getOrSetSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("lumiere_sid");
    if (!sid) {
      sid = "sid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8);
      sessionStorage.setItem("lumiere_sid", sid);
    }
    return sid;
  } catch {
    return "sid_" + Math.random().toString(36).substring(2, 8);
  }
}

function TrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : "";
    const fullPath = (pathname || "/") + queryString;

    // Prevent duplicate triggers for the same path in immediate succession
    if (lastTrackedRef.current === fullPath) return;
    lastTrackedRef.current = fullPath;

    try {
      const visitorId = getOrSetVisitorId();
      const sessionId = getOrSetSessionId();
      const referrer = document.referrer || "Direct";
      const screenResolution = `${window.screen?.width || 0}x${window.screen?.height || 0}`;
      const language = navigator.language || "Unknown";
      let timeZone = "Unknown";
      try {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
        // Ignore fallback
      }

      const payload = {
        path: fullPath,
        referrer,
        visitorId,
        sessionId,
        screenResolution,
        language,
        timeZone,
      };

      const dataString = JSON.stringify(payload);

      // Attempt sendBeacon first for maximum background reliability
      let beaconSent = false;
      if (navigator.sendBeacon) {
        const blob = new Blob([dataString], { type: "application/json" });
        beaconSent = navigator.sendBeacon("/api/track", blob);
      }

      // Fallback to fetch with keepalive if beacon failed or is unsupported
      if (!beaconSent) {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataString,
          keepalive: true,
        }).catch(() => {
          // Silent swallow - visitor tracking never disrupts UX
        });
      }
    } catch {
      // Completely silent failover
    }
  }, [pathname, searchParams]);

  return null;
}

export default function VisitorTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
