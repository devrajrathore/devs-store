"use client";

import React, { useState } from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { RAIL_DEMO_ITEMS } from "@/components/ui/demo";
import { useCart } from "./cart-context";
import { Play, Pause, ArrowDown, Sparkles, SlidersHorizontal, ShieldCheck, Feather } from "lucide-react";

export default function HeroRailSection() {
  const [autoplay, setAutoplay] = useState(true);
  const [activeGarmentIndex, setActiveGarmentIndex] = useState<number | null>(null);
  const { addToCart, setQuickViewGarment } = useCart();

  const handleOpenCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickAdd = () => {
    const targetItem =
      activeGarmentIndex !== null && RAIL_DEMO_ITEMS[activeGarmentIndex]
        ? RAIL_DEMO_ITEMS[activeGarmentIndex]
        : RAIL_DEMO_ITEMS[0];
    addToCart(targetItem, "M", 1);
  };

  const handleInspectCurrent = () => {
    const targetItem =
      activeGarmentIndex !== null && RAIL_DEMO_ITEMS[activeGarmentIndex]
        ? RAIL_DEMO_ITEMS[activeGarmentIndex]
        : RAIL_DEMO_ITEMS[0];
    setQuickViewGarment(targetItem);
  };

  return (
    <section id="rail-hero" className="relative w-full border-b border-border bg-gradient-to-b from-background via-background/90 to-muted/20">
      {/* Top micro badges */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between text-xs text-muted-foreground">
        <div className="inline-flex items-center gap-2 bg-muted/60 border border-border/80 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>LIVE ARCHIVE · 10 RUN SILHOUETTES</span>
        </div>

        {/* Autoplay controller toggle */}
        <button
          type="button"
          onClick={() => setAutoplay(!autoplay)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider bg-background border border-border hover:bg-muted transition-colors cursor-pointer"
          title={autoplay ? "Pause Rail Autoplay" : "Resume Rail Autoplay"}
        >
          {autoplay ? (
            <>
              <Pause className="w-3 h-3 text-neutral-500" />
              <span>PAUSE RAIL</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-neutral-500" />
              <span>AUTOPLAY</span>
            </>
          )}
        </button>
      </div>

      {/* Centerpiece Hero Rail */}
      <div className="w-full">
        <ClothingRailHero
          items={RAIL_DEMO_ITEMS}
          hanger="none"
          eyebrow="Dev's Store Archive 01 · 10 Silhouettes on the Rail"
          heading="A tactile rail you can handle directly on the page."
          caption="Brush along the rail, lift any piece to inspect the embroidery, cut, Indian cotton density and back drape."
          autoplay={autoplay}
          onOpenChange={(idx) => setActiveGarmentIndex(idx)}
          action={
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                type="button"
                onClick={handleOpenCatalog}
                className="rounded-full bg-foreground px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-background shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
              >
                Explore Full Catalog
              </button>
              <button
                type="button"
                onClick={handleQuickAdd}
                className="rounded-full bg-background border border-border px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-foreground transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 cursor-pointer"
              >
                Quick Add To Bag
              </button>
              <button
                type="button"
                onClick={handleInspectCurrent}
                className="rounded-full bg-muted px-4 py-2.5 text-xs font-semibold tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
              >
                Inspect Specs
              </button>
            </div>
          }
        />
      </div>

      {/* Feature pillars under rail */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-border/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-1">
            <Feather className="w-4 h-4 text-neutral-700 dark:text-neutral-300 mb-1" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              240 GSM Heavyweight
            </h4>
            <p className="text-[11px] text-muted-foreground">Indian organic ring-spun cotton</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <SlidersHorizontal className="w-4 h-4 text-neutral-700 dark:text-neutral-300 mb-1" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Pre-shrunk Drape
            </h4>
            <p className="text-[11px] text-muted-foreground">Retains architectural boxy fit</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <ShieldCheck className="w-4 h-4 text-neutral-700 dark:text-neutral-300 mb-1" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Tirupur & Surat Craft
            </h4>
            <p className="text-[11px] text-muted-foreground">Precision mill-dyed mineral wash</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Sparkles className="w-4 h-4 text-neutral-700 dark:text-neutral-300 mb-1" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Numbered Archive
            </h4>
            <p className="text-[11px] text-muted-foreground">Strict 300 unit run per drop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
