"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { RAIL_DEMO_ITEMS } from "@/components/ui/demo";
import type { RailGarment } from "@/components/ui/product-rail-gallery";
import { useCart, parsePrice } from "./cart-context";
import { Heart, Eye, ShoppingBag, Check, SlidersHorizontal, ArrowUpDown } from "lucide-react";

type CategoryFilter = "all" | "tee" | "knit" | "shirt" | "hoodie";
type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export default function CatalogSection() {
  const { addToCart, wishlist, toggleWishlist, setQuickViewGarment } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Silhouettes", count: RAIL_DEMO_ITEMS.length },
    { id: "tee", label: "Tees & Polos", count: RAIL_DEMO_ITEMS.filter((i) => i.kind === "tee").length },
    { id: "knit", label: "Knits & Sweaters", count: RAIL_DEMO_ITEMS.filter((i) => i.kind === "knit").length },
    { id: "shirt", label: "Woven Shirts", count: RAIL_DEMO_ITEMS.filter((i) => i.kind === "shirt").length },
    { id: "hoodie", label: "Heavy Fleece", count: RAIL_DEMO_ITEMS.filter((i) => i.kind === "hoodie").length },
  ];

  const filteredItems = useMemo(() => {
    let result = [...RAIL_DEMO_ITEMS];

    if (selectedCategory !== "all") {
      result = result.filter((item) => item.kind === selectedCategory);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => parsePrice(a.tag) - parsePrice(b.tag));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => parsePrice(b.tag) - parsePrice(a.tag));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, sortBy]);

  const handleQuickAdd = (garment: RailGarment, size: string) => {
    addToCart(garment, size, 1);
    setAddedItemNotice(`${garment.name} (${size}) added to bag`);
    setTimeout(() => setAddedItemNotice(null), 3000);
  };

  return (
    <section id="catalog" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {addedItemNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs tracking-wider uppercase font-semibold animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{addedItemNotice}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-muted-foreground uppercase">
            Dev&apos;s Store Catalog · Edition 01
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-foreground mt-2">
            The Archival Streetwear Collection
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            Ten bespoke silhouettes built from heavyweight 240 GSM Indian organic cotton, lambswool, and custom-milled fibers. Inspect front, back, and details.
          </p>
        </div>

        {/* Sort & Quick Filter */}
        <div className="mt-6 md:mt-0 flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>SORT:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground font-medium focus:outline-none focus:ring-1 focus:ring-foreground"
          >
            <option value="featured">Featured Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-foreground text-background shadow-xs font-semibold"
                : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredItems.map((garment) => {
          const isWishlisted = wishlist.includes(garment.id);
          const isHovered = hoveredCardId === garment.id;

          return (
            <div
              key={garment.id}
              onMouseEnter={() => setHoveredCardId(garment.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="group relative flex flex-col bg-card rounded-2xl border border-border/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-foreground/20"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[3/4] w-full bg-neutral-100 dark:bg-neutral-900/60 overflow-hidden flex items-center justify-center p-6">
                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(garment.id)}
                  aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-xs border border-border/60 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"
                    }`}
                  />
                </button>

                {/* Garment Tone Pill */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-xs border border-border/60 text-[10px] font-mono tracking-wider uppercase text-foreground">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                    style={{ backgroundColor: garment.color || "#ccc" }}
                  />
                  <span>{garment.kind}</span>
                </div>

                {/* Garment Image with Hover Flip to Back Image */}
                <div
                  className="relative w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => setQuickViewGarment(garment)}
                >
                  <img
                    src={garment.image}
                    alt={`${garment.name} front view`}
                    className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500 ease-out ${
                      isHovered && garment.backImage ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
                    loading="lazy"
                  />
                  {garment.backImage && (
                    <img
                      src={garment.backImage}
                      alt={`${garment.name} back view`}
                      className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500 ease-out ${
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Hover overlay with Quick View & Sizes */}
                <div
                  className={`absolute inset-x-3 bottom-3 z-20 flex flex-col gap-2 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-background/95 backdrop-blur-md p-2.5 rounded-xl border border-border shadow-lg">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground text-center mb-1.5">
                      Select Size to Add:
                    </p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {["S", "M", "L", "XL"].map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => handleQuickAdd(garment, sz)}
                          className="py-1 text-[11px] font-semibold border border-border rounded-md hover:bg-foreground hover:text-background transition-colors text-center cursor-pointer"
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setQuickViewGarment(garment)}
                    className="w-full py-2 bg-foreground/90 hover:bg-foreground text-background text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Specs</span>
                  </button>
                </div>
              </div>

              {/* Garment Metadata */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-card">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => setQuickViewGarment(garment)}
                      className="text-sm font-semibold text-foreground tracking-tight hover:underline cursor-pointer"
                    >
                      {garment.name}
                    </h3>
                    <span className="text-sm font-mono font-bold text-foreground">
                      {garment.tag}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                    {garment.description}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                  {garment.details?.slice(0, 2).map((det, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground font-mono"
                    >
                      {det}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
