"use client";

import React, { useState } from "react";
import { useCart, parsePrice } from "./cart-context";
import { X, Check, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";

export default function ProductModal() {
  const { quickViewGarment, setQuickViewGarment, addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedAngle, setSelectedAngle] = useState<"front" | "back" | "side">("front");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [added, setAdded] = useState(false);

  if (!quickViewGarment) return null;

  const garment = quickViewGarment;
  const isWishlisted = wishlist.includes(garment.id);

  const currentImage =
    selectedAngle === "back" && garment.backImage
      ? garment.backImage
      : selectedAngle === "side" && garment.sideImage
      ? garment.sideImage
      : garment.image;

  const handleAddToCart = () => {
    addToCart(garment, selectedSize, 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewGarment(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setQuickViewGarment(null)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-background rounded-3xl border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setQuickViewGarment(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-background/80 backdrop-blur-xs border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery View */}
          <div className="relative bg-neutral-100 dark:bg-neutral-900/60 p-8 flex flex-col items-center justify-between min-h-[420px]">
            {/* Angle Switcher */}
            <div className="flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={() => setSelectedAngle("front")}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                  selectedAngle === "front"
                    ? "bg-foreground text-background font-bold"
                    : "bg-background/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                Front View
              </button>
              {garment.backImage && (
                <button
                  type="button"
                  onClick={() => setSelectedAngle("back")}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                    selectedAngle === "back"
                      ? "bg-foreground text-background font-bold"
                      : "bg-background/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Back View
                </button>
              )}
              {garment.sideImage && (
                <button
                  type="button"
                  onClick={() => setSelectedAngle("side")}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                    selectedAngle === "side"
                      ? "bg-foreground text-background font-bold"
                      : "bg-background/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Side Profile
                </button>
              )}
            </div>

            {/* Garment Image */}
            <div className="relative w-full flex-1 flex items-center justify-center p-4">
              <img
                src={currentImage}
                alt={garment.name}
                className="max-h-[340px] w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Color swatch & serial */}
            <div className="flex items-center justify-between w-full text-[11px] font-mono text-muted-foreground pt-4 border-t border-border/40">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20"
                  style={{ backgroundColor: garment.color }}
                />
                <span>TONE REF: {garment.color}</span>
              </div>
              <span>LIMITED EDITION · 300 PCS</span>
            </div>
          </div>

          {/* Product Specifications & Order */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  Category: {garment.kind}
                </span>
                <button
                  type="button"
                  onClick={() => toggleWishlist(garment.id)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  <span>{isWishlisted ? "Saved" : "Save"}</span>
                </button>
              </div>

              <h2 className="text-2xl font-serif text-foreground font-bold mt-2">
                {garment.name}
              </h2>

              <p className="text-2xl font-mono font-bold text-foreground mt-2">
                {garment.tag}
              </p>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                {garment.description}
              </p>

              {/* Garment Highlights */}
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Technical Specifications:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {garment.details?.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-foreground/90 font-mono bg-muted/60 px-3 py-1.5 rounded-lg border border-border/60"
                    >
                      <Sparkles className="w-3 h-3 text-neutral-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold uppercase tracking-wider text-foreground">
                    Select Size:
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500">
                    ● In Stock (Archived Dispatch)
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {["XS", "S", "M", "L", "XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all cursor-pointer ${
                        selectedSize === sz
                          ? "bg-foreground text-background shadow-xs font-bold ring-2 ring-foreground"
                          : "border border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-border">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-md"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Size {selectedSize} to Bag ({garment.tag})</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Free Express Across India over ₹2,499</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>14-Day Easy Exchange / Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
