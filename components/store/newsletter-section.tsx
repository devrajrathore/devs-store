"use client";

import React, { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-neutral-900 text-white overflow-hidden p-8 sm:p-14 border border-neutral-800">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[10px] font-mono tracking-widest uppercase text-neutral-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>DEV&apos;S STORE · VIP ARCHIVE DISPATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white font-medium">
            Gain Early Access to Archival Drops
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
            Limited editions of 300 pieces sell out within minutes. Members receive private 2-hour early access and archive restock notifications across India.
          </p>

          {subscribed ? (
            <div className="pt-6 flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white">
                You are on the Dev&apos;s Store VIP dispatch list.
              </p>
              <p className="text-xs text-neutral-400 font-mono">
                Check your inbox for your 10% welcome keycode: DEV10
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400 font-sans"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Join Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-neutral-400 font-mono pt-2">
            Strict no-spam policy. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
}
