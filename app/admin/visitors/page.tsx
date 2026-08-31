"use client";

import React, { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { VisitorAnalyticsSummary, VisitorLogEntry } from "@/lib/visitor-logger";

export default function VisitorAnalyticsPage() {
  const [data, setData] = useState<VisitorAnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deviceFilter, setDeviceFilter] = useState("all");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState<VisitorLogEntry | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/track?summary=true");
      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      }
    } catch (err) {
      console.error("Failed to fetch analytics", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      startTransition(() => {
        fetchAnalytics();
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const filteredLogs = (data?.recentVisits || []).filter((entry) => {
    const matchesSearch =
      entry.ip.toLowerCase().includes(search.toLowerCase()) ||
      entry.path.toLowerCase().includes(search.toLowerCase()) ||
      entry.browser.toLowerCase().includes(search.toLowerCase()) ||
      entry.os.toLowerCase().includes(search.toLowerCase()) ||
      (entry.referrer && entry.referrer.toLowerCase().includes(search.toLowerCase())) ||
      (entry.visitorId && entry.visitorId.toLowerCase().includes(search.toLowerCase()));

    const matchesDevice = deviceFilter === "all" || entry.device.toLowerCase() === deviceFilter.toLowerCase();
    return matchesSearch && matchesDevice;
  });

  const formatTimestamp = (ts: string) => {
    try {
      const d = new Date(ts);
      return {
        date: d.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
        time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
      };
    } catch {
      return { date: ts, time: "" };
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0c0b] text-[#f4efe6] pt-28 pb-20 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#c5a880] selection:text-black">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#2a2622] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-mono">Live Telemetry & Logs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#fdfbf7]">
              Website Visitor Logs
            </h1>
            <p className="text-sm text-[#a3988c] mt-1 max-w-2xl">
              Automatic stealth tracking of visitor IP addresses, devices, operating systems, visit timestamps, referral sources, and page paths.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-4 py-2 text-xs font-mono rounded border transition-all ${
                autoRefresh
                  ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
                  : "bg-[#1c1917] border-[#38332e] text-[#8e8275]"
              }`}
            >
              {autoRefresh ? "● Auto-refresh (8s)" : "○ Auto-refresh Off"}
            </button>

            <button
              onClick={() => {
                setLoading(true);
                fetchAnalytics();
              }}
              className="px-4 py-2 text-xs font-mono bg-[#1c1917] hover:bg-[#282420] border border-[#38332e] text-[#e0d6c9] rounded transition"
            >
              Refresh Now
            </button>

            <a
              href="/api/track?download=csv"
              download
              className="px-4 py-2 text-xs font-mono bg-[#c5a880] text-black font-semibold rounded hover:bg-[#d6bc96] transition"
            >
              Export CSV
            </a>

            <a
              href="/api/track?download=json"
              download
              className="px-4 py-2 text-xs font-mono bg-[#282420] hover:bg-[#342f2a] border border-[#443d35] text-[#e0d6c9] rounded transition"
            >
              Export JSON
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#141210] border border-[#26221d] p-5 rounded-lg">
            <span className="text-xs uppercase font-mono tracking-wider text-[#918577]">Total Page Views</span>
            <div className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] mt-2">
              {loading && !data ? "..." : data?.totalPageViews || 0}
            </div>
            <div className="text-xs text-[#70665b] mt-1">All logged visits</div>
          </div>

          <div className="bg-[#141210] border border-[#26221d] p-5 rounded-lg">
            <span className="text-xs uppercase font-mono tracking-wider text-[#c5a880]">Unique Visitors</span>
            <div className="text-3xl sm:text-4xl font-serif text-[#c5a880] mt-2">
              {loading && !data ? "..." : data?.uniqueVisitors || 0}
            </div>
            <div className="text-xs text-[#70665b] mt-1">Unique IP / Browser IDs</div>
          </div>

          <div className="bg-[#141210] border border-[#26221d] p-5 rounded-lg">
            <span className="text-xs uppercase font-mono tracking-wider text-emerald-400">Visits Today</span>
            <div className="text-3xl sm:text-4xl font-serif text-emerald-400 mt-2">
              {loading && !data ? "..." : data?.todayViews || 0}
            </div>
            <div className="text-xs text-[#70665b] mt-1">{data?.todayUniques || 0} unique today</div>
          </div>

          <div className="bg-[#141210] border border-[#26221d] p-5 rounded-lg">
            <span className="text-xs uppercase font-mono tracking-wider text-[#918577]">Top Traffic Source</span>
            <div className="text-xl sm:text-2xl font-serif text-[#e0d6c9] mt-2 truncate">
              {loading && !data ? "..." : data?.topReferrers?.[0]?.referrer || "Direct"}
            </div>
            <div className="text-xs text-[#70665b] mt-1">
              {data?.topReferrers?.[0]?.count ? `${data.topReferrers[0].count} hits` : "No referrers yet"}
            </div>
          </div>
        </div>

        {/* Analytics Breakdown Grid (Top Pages & Devices) */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Pages */}
            <div className="bg-[#141210] border border-[#26221d] p-6 rounded-lg md:col-span-2">
              <h3 className="text-base font-serif text-[#fdfbf7] mb-4 flex items-center justify-between">
                <span>Top Visited Pages</span>
                <span className="text-xs font-mono text-[#8a7f72]">Ranked by views</span>
              </h3>
              <div className="space-y-3">
                {data.topPages.length === 0 ? (
                  <p className="text-xs text-[#70665b] italic">No page data recorded yet.</p>
                ) : (
                  data.topPages.map((page, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-[#1f1b17] last:border-0">
                      <span className="font-mono text-[#c5a880] truncate max-w-[70%]">{page.path}</span>
                      <span className="bg-[#1e1a16] text-[#e0d6c9] px-2.5 py-1 rounded font-mono font-medium">
                        {page.count} view{page.count > 1 ? "s" : ""}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Devices & Browsers */}
            <div className="bg-[#141210] border border-[#26221d] p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-base font-serif text-[#fdfbf7] mb-3">Device Breakdown</h3>
                <div className="space-y-2.5">
                  {data.devices.map((d, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#a3988c]">{d.device}</span>
                        <span className="text-[#fdfbf7] font-semibold">{d.percentage}% ({d.count})</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#221e1a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#c5a880] rounded-full"
                          style={{ width: `${d.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-serif text-[#fdfbf7] mb-3">Top Browsers</h3>
                <div className="space-y-1.5">
                  {data.browsers.map((b, i) => (
                    <div key={i} className="flex justify-between text-xs font-mono py-1 border-b border-[#1f1b17] last:border-0">
                      <span className="text-[#a3988c]">{b.browser}</span>
                      <span className="text-[#e0d6c9]">{b.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Visitors Log Table */}
        <div className="bg-[#141210] border border-[#26221d] rounded-lg overflow-hidden">
          <div className="p-5 border-b border-[#26221d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif text-[#fdfbf7]">Detailed Visitor Log Feed</h2>
              <p className="text-xs text-[#8a7f72] mt-0.5">
                Showing {filteredLogs.length} of {data?.totalPageViews || 0} recorded visits (latest on top)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search IP, Path, Browser, OS..."
                className="bg-[#0e0d0c] border border-[#2f2b25] text-xs font-mono px-3 py-2 rounded text-[#f4efe6] placeholder-[#5c544a] focus:outline-none focus:border-[#c5a880]"
              />

              <select
                value={deviceFilter}
                onChange={(e) => setDeviceFilter(e.target.value)}
                className="bg-[#0e0d0c] border border-[#2f2b25] text-xs font-mono px-3 py-2 rounded text-[#f4efe6] focus:outline-none focus:border-[#c5a880]"
              >
                <option value="all">All Devices</option>
                <option value="desktop">Desktop</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
                <option value="bot">Bot / Crawler</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#181613] text-[#9c9082] border-b border-[#26221d] uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">IP Address</th>
                  <th className="py-3 px-4">Page Visited</th>
                  <th className="py-3 px-4">Device & OS</th>
                  <th className="py-3 px-4">Browser</th>
                  <th className="py-3 px-4">Referrer Source</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1c1916]">
                {loading && !data ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#6e6459]">
                      Loading logs...
                    </td>
                  </tr>
                ) : filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#6e6459]">
                      No visitor records matching your filter.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((entry) => {
                    const { date, time } = formatTimestamp(entry.timestamp);
                    return (
                      <tr key={entry.id} className="hover:bg-[#191613] transition group">
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="text-[#e0d6c9]">{time}</div>
                          <div className="text-[10px] text-[#6b6257]">{date}</div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-semibold text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                            {entry.ip}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-[#c5a880] font-medium bg-[#1e1a16] px-2 py-0.5 rounded">
                            {entry.path}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="text-[#ded6cb]">{entry.device}</div>
                          <div className="text-[10px] text-[#736a5f]">{entry.os}</div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-[#b0a597]">
                          {entry.browser}
                        </td>
                        <td className="py-3 px-4 max-w-xs truncate text-[#8c8173]" title={entry.referrer}>
                          {entry.referrer || "Direct"}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => setSelectedEntry(entry)}
                            className="text-[#c5a880] hover:text-[#f4efe6] underline text-[11px]"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for Inspecting Full Visitor Telemetry */}
        {selectedEntry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="bg-[#161412] border border-[#332c25] rounded-xl max-w-2xl w-full p-6 space-y-5 text-sm shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#28231d] pb-3">
                <h3 className="font-serif text-lg text-[#fdfbf7]">Visitor Telemetry Breakdown</h3>
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-[#8e8275] hover:text-white font-mono text-base"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-[#786e62] block">IP Address:</span>
                  <span className="text-emerald-400 font-semibold text-sm">{selectedEntry.ip}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Timestamp:</span>
                  <span className="text-[#f4efe6]">{selectedEntry.timestamp}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Path Visited:</span>
                  <span className="text-[#c5a880] font-semibold">{selectedEntry.path}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Referrer:</span>
                  <span className="text-[#f4efe6] break-all">{selectedEntry.referrer || "Direct"}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Device / OS:</span>
                  <span className="text-[#f4efe6]">{selectedEntry.device} ({selectedEntry.os})</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Browser:</span>
                  <span className="text-[#f4efe6]">{selectedEntry.browser}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Screen Resolution:</span>
                  <span className="text-[#f4efe6]">{selectedEntry.screenResolution || "Unknown"}</span>
                </div>
                <div>
                  <span className="text-[#786e62] block">Language / Timezone:</span>
                  <span className="text-[#f4efe6]">{selectedEntry.language} / {selectedEntry.timeZone}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#786e62] block">Visitor UUID:</span>
                  <span className="text-[#968c7e] text-[11px] break-all">{selectedEntry.visitorId}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#786e62] block">User-Agent:</span>
                  <span className="text-[#968c7e] text-[10px] break-all bg-[#0e0d0c] p-2 rounded block mt-1">
                    {selectedEntry.userAgent}
                  </span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="px-4 py-2 bg-[#282420] text-[#f4efe6] text-xs font-mono rounded hover:bg-[#38332c]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
