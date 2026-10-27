"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";

const ANNOUNCEMENTS = [
  "FREE EXPRESS SHIPPING ACROSS INDIA ON ORDERS OVER ₹2,499",
  "DEV'S STORE ARCHIVE · LIMITED EDITION STREETWEAR DROP LIVE",
  "100% INDIAN SUPIMA & ORGANIC COTTON · PRE-SHRUNK SILHOUETTES",
  "USE CODE 'DEV10' AT CHECKOUT FOR FLAT 10% OFF YOUR FIRST ORDER",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Announcement" className="relative w-full bg-neutral-950 text-neutral-300 border-b border-neutral-800 text-[11px] uppercase tracking-[0.2em] font-medium z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-neutral-400">
          <Globe className="w-3.5 h-3.5 text-neutral-400" />
          <span>PAN-INDIA COURIER · 2-3 DAYS</span>
        </div>

        <div className="flex-1 flex items-center justify-center text-center transition-all duration-500 ease-out">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse hidden sm:inline-block" />
            <span className="font-semibold text-neutral-100">{ANNOUNCEMENTS[index]}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-neutral-400">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
          <span>UPI / COD / 14-DAY RETURNS</span>
        </div>
      </div>
    </aside>
  );
}
