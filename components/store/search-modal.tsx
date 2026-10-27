"use client";

import React, { useState, useEffect } from "react";
import { RAIL_DEMO_ITEMS } from "@/components/ui/demo";
import { useCart } from "./cart-context";
import { Search, X, ArrowRight } from "lucide-react";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewGarment } = useCart();
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = RAIL_DEMO_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q) ||
      item.kind?.toLowerCase().includes(q) ||
      item.tag?.toLowerCase().includes(q) ||
      item.details?.some((d) => d.toLowerCase().includes(q))
    );
  });

  const handleSelect = (item: (typeof RAIL_DEMO_ITEMS)[0]) => {
    setIsSearchOpen(false);
    setQuickViewGarment(item);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative z-10 w-full max-w-xl bg-background rounded-2xl border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-border flex items-center gap-3">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silhouette, material (e.g. 240 gsm, oxford, wool)..."
            className="w-full text-sm bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-border/60 p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-muted-foreground">
              No archival silhouettes matched &ldquo;{query}&rdquo;
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="p-3 rounded-xl flex items-center justify-between hover:bg-muted/70 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-muted rounded-lg border border-border/80 p-1 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground group-hover:underline">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground truncate max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold text-foreground">
                    {item.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-muted/30 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>{results.length} archival pieces available</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
