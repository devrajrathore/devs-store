"use client";

import React, { useState } from "react";
import { RAIL_DEMO_ITEMS } from "@/components/ui/demo";
import { useCart } from "./cart-context";
import { ShoppingBag, Eye, ArrowRight, Sparkles } from "lucide-react";

export default function LookbookSection() {
  const { addToCart, setQuickViewGarment } = useCart();
  const [activeLookIndex, setActiveLookIndex] = useState(0);

  const LOOKS = [
    {
      id: "look-1",
      title: "LOOK 01 · Tonal Heavyweight",
      caption: "Bone 240gsm tee layered beneath the Chunky Olive lambswool cardigan.",
      garmentA: RAIL_DEMO_ITEMS[0], // Bone tee
      garmentB: RAIL_DEMO_ITEMS[3], // Cardigan olive
      location: "Bandra West, Mumbai",
    },
    {
      id: "look-2",
      title: "LOOK 02 · Modern Sartorial",
      caption: "Crisp Oxford Sky button-down paired alongside the Heather Fleece Hoodie.",
      garmentA: RAIL_DEMO_ITEMS[2], // Oxford sky
      garmentB: RAIL_DEMO_ITEMS[4], // Hoodie
      location: "Hauz Khas Village, New Delhi",
    },
    {
      id: "look-3",
      title: "LOOK 03 · Mineral Contrast",
      caption: "Graphic CCgather heavyweight tee styled with Dusty Brick slub Henley.",
      garmentA: RAIL_DEMO_ITEMS[1], // Graphic tee
      garmentB: RAIL_DEMO_ITEMS[7], // Henley brick
      location: "Indiranagar, Bengaluru",
    },
    {
      id: "look-4",
      title: "LOOK 04 · Heritage Nautical",
      caption: "Classic Breton ink stripe knit layered with Forest piqué polo.",
      garmentA: RAIL_DEMO_ITEMS[8], // Breton
      garmentB: RAIL_DEMO_ITEMS[6], // Polo forest
      location: "Koregaon Park, Pune",
    },
  ];

  const currentLook = LOOKS[activeLookIndex];

  return (
    <section id="lookbook" className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-muted-foreground uppercase">
            Dev&apos;s Store Lookbook · Autumn / Winter
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-foreground mt-2">
            Styling & Silhouette Pairings
          </h2>
        </div>

        {/* Look switcher tabs */}
        <div className="mt-6 md:mt-0 flex items-center gap-2">
          {LOOKS.map((look, idx) => (
            <button
              key={look.id}
              onClick={() => setActiveLookIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeLookIndex === idx
                  ? "bg-foreground text-background font-bold"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Look Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-muted/30 rounded-3xl p-6 sm:p-10 border border-border">
        {/* Visual Pair */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-border p-4 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Layer 01
            </span>
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src={currentLook.garmentA.image}
                alt={currentLook.garmentA.name}
                className="max-h-[85%] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/60">
              <span className="text-xs font-medium text-foreground truncate max-w-[120px]">
                {currentLook.garmentA.name}
              </span>
              <span className="text-xs font-mono font-bold text-foreground">
                {currentLook.garmentA.tag}
              </span>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-border p-4 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Layer 02
            </span>
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src={currentLook.garmentB.image}
                alt={currentLook.garmentB.name}
                className="max-h-[85%] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/60">
              <span className="text-xs font-medium text-foreground truncate max-w-[120px]">
                {currentLook.garmentB.name}
              </span>
              <span className="text-xs font-mono font-bold text-foreground">
                {currentLook.garmentB.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Direct Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
              <span>{currentLook.location}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-foreground font-medium">
              {currentLook.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {currentLook.caption}
            </p>
          </div>

          {/* Quick shop both garments */}
          <div className="space-y-3 pt-6 border-t border-border">
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Quick Add Look Pieces:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: currentLook.garmentA.color }}
                />
                <span className="text-xs font-semibold text-foreground">
                  {currentLook.garmentA.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => addToCart(currentLook.garmentA, "M", 1)}
                className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>+ Bag ({currentLook.garmentA.tag})</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: currentLook.garmentB.color }}
                />
                <span className="text-xs font-semibold text-foreground">
                  {currentLook.garmentB.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => addToCart(currentLook.garmentB, "M", 1)}
                className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>+ Bag ({currentLook.garmentB.tag})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
