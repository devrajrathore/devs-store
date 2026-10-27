"use client";

import React from "react";
import { Sparkles, Layers, Scissors, ShieldCheck, ArrowRight } from "lucide-react";

export default function MaterialsSection() {
  const pillars = [
    {
      icon: Layers,
      title: "240 GSM Indian Cotton",
      desc: "Twice the density of standard streetwear. Woven from long-staple organic Indian fibers in Tirupur that eliminate pill and drape with sculptural rigidity.",
      spec: "100% GOTS Certified Organic",
    },
    {
      icon: Scissors,
      title: "Flatlock Reinforced Seaming",
      desc: "Engineered 4-needle 6-thread stitching that sits flush against skin, preventing chafe and guaranteed against seam blowout.",
      spec: "Zero Distortion Post-Wash",
    },
    {
      icon: Sparkles,
      title: "Mineral Garment Dyeing",
      desc: "Each garment is small-batch submerged in botanical mineral pigments, creating an aged tonal patina unique to every individual cut.",
      spec: "Low-Impact Non-Toxic Pigments",
    },
    {
      icon: ShieldCheck,
      title: "Strict 300-Unit Edition",
      desc: "To eliminate waste and guarantee exclusivity, each silhouette is strictly serialized. Once archived, colorways are never re-issued.",
      spec: "Individually Numbered Labels",
    },
  ];

  return (
    <section id="craft" className="w-full py-24 bg-neutral-950 text-neutral-100 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-neutral-800">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
              Materiality & Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mt-3">
              Crafted for Permanent Rotation.
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 max-w-md text-sm text-neutral-400 leading-relaxed">
            We reject seasonal obsolescence. Every silhouette on our rail is engineered from heavy-gauge yarns to retain its architectural structure through years of daily wear.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-200 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-white tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  <span>{item.spec}</span>
                  <span className="text-neutral-300 font-bold">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif text-white">
              “Clothes should be tangible, tactile, and built to survive trends.”
            </h4>
            <p className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              Dev&apos;s Store Design Manifesto · Mumbai / Bengaluru / Tirupur
            </p>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            <span>Inspect All Fabrics</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
