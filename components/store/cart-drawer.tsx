"use client";

import React, { useState } from "react";
import { useCart, parsePrice } from "./cart-context";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CheckCircle2, Tag } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discount,
    discountCode,
    applyDiscountCode,
    freeShippingThreshold,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingLeft = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingCost = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 149;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyDiscountCode(promoInput);
    setPromoFeedback(res.message);
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1800);
  };

  const handleResetCheckout = () => {
    setOrderComplete(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-background border-l border-border shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-serif font-bold uppercase tracking-wider text-foreground">
                Your Bag
              </span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* If Order Completed */}
          {orderComplete ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">
                Order Confirmed!
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                Order Manifest #DEV-2026-{Math.floor(100000 + Math.random() * 900000)}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                Your garments are being packed in custom dust bags with care instructions. Courier dispatch details and live tracking will be sent via SMS / WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleResetCheckout}
                className="mt-4 px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Meter */}
              <div className="px-6 py-3.5 bg-muted/40 border-b border-border text-xs">
                <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                  {freeShippingLeft > 0 ? (
                    <span className="text-muted-foreground">
                      Add <strong className="text-foreground">₹{Math.round(freeShippingLeft).toLocaleString("en-IN")}</strong> for Free Pan-India Express
                    </span>
                  ) : (
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <span>✓ Free Pan-India Express Unlocked</span>
                    </span>
                  )}
                  <span className="text-muted-foreground">{Math.round(freeShippingProgress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-border/60">
                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <p className="text-sm text-muted-foreground">Your shopping bag is currently empty.</p>
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="px-5 py-2 rounded-full bg-foreground text-background text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Browse The Rail
                    </button>
                  </div>
                ) : (
                  items.map((item) => {
                    const price = parsePrice(item.garment.tag);
                    return (
                      <div
                        key={`${item.garment.id}-${item.size}`}
                        className="pt-4 first:pt-0 flex gap-4 items-center"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-20 bg-muted/60 rounded-xl border border-border p-1 flex items-center justify-center shrink-0">
                          <img
                            src={item.garment.image}
                            alt={item.garment.name}
                            className="max-h-full object-contain"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs font-semibold text-foreground truncate">
                              {item.garment.name}
                            </h4>
                            <span className="text-xs font-mono font-bold text-foreground">
                              ₹{(price * item.quantity).toLocaleString("en-IN")}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground font-mono">
                            <span className="px-1.5 py-0.5 rounded bg-muted border border-border">
                              Size {item.size}
                            </span>
                            <span>₹{price.toLocaleString("en-IN")} each</span>
                          </div>

                          {/* Stepper & Trash */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-border rounded-lg bg-background">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.garment.id, item.size, -1)}
                                className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 text-xs font-mono font-semibold text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.garment.id, item.size, 1)}
                                className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.garment.id, item.size)}
                              className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer / Summary */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border bg-card space-y-3">
                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-muted-foreground" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="Discount code (e.g. DEV10)"
                        className="w-full pl-9 pr-3 py-2 text-xs bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-foreground uppercase font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-foreground text-background text-xs font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {promoFeedback && (
                    <p className="text-[10px] font-mono text-emerald-500">{promoFeedback}</p>
                  )}

                  {/* Calculations */}
                  <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="font-mono text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-500 font-mono">
                        <span>Discount ({discountCode})</span>
                        <span>-₹{Math.round(discount).toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-muted-foreground">
                      <span>Pan-India Courier</span>
                      <span className="font-mono text-foreground">
                        {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-foreground pt-2 border-t border-border">
                      <span>Estimated Total</span>
                      <span className="font-mono font-bold text-base">₹{Math.round(grandTotal).toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Checkout CTA */}
                  <button
                    type="button"
                    disabled={isCheckingOut}
                    onClick={handleSimulateCheckout}
                    className="w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <span className="animate-pulse">Securing Manifest...</span>
                    ) : (
                      <>
                        <span>Proceed to Pay (UPI / Cards / COD)</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-muted-foreground pt-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>UPI (GPAY, PHONEPE, PAYTM) · RUPAY · NETBANKING · COD</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
