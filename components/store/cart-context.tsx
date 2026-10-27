"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { RailGarment } from "@/components/ui/product-rail-gallery";
import { RAIL_DEMO_ITEMS } from "@/components/ui/demo";

export interface CartItem {
  garment: RailGarment;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (garment: RailGarment, size?: string, quantity?: number) => void;
  removeFromCart: (garmentId: string, size: string) => void;
  updateQuantity: (garmentId: string, size: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  totalCount: number;
  subtotal: number;
  discount: number;
  discountCode: string;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  freeShippingThreshold: number;
  quickViewGarment: RailGarment | null;
  setQuickViewGarment: (garment: RailGarment | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function parsePrice(tag?: string): number {
  if (!tag) return 1999;
  const clean = tag.replace(/[^0-9.]/g, "");
  return clean ? parseFloat(clean) : 1999;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      garment: RAIL_DEMO_ITEMS[0],
      size: "M",
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(["oxford-sky"]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [quickViewGarment, setQuickViewGarment] = useState<RailGarment | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const freeShippingThreshold = 2499;

  const addToCart = (garment: RailGarment, size: string = "M", quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.garment.id === garment.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.garment.id === garment.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { garment, size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (garmentId: string, size: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.garment.id === garmentId && item.size === size))
    );
  };

  const updateQuantity = (garmentId: string, size: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.garment.id === garmentId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const applyDiscountCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "DEV10" || clean === "ARCHIVE10" || clean === "ANTIGRAVITY" || clean === "WELCOME10") {
      setDiscountCode(clean);
      setDiscountPercent(0.1);
      return { success: true, message: "10% off promotional code applied!" };
    }
    if (clean === "DEV20" || clean === "VIP20") {
      setDiscountCode(clean);
      setDiscountPercent(0.2);
      return { success: true, message: "VIP 20% discount code applied!" };
    }
    return { success: false, message: "Invalid promo code. Try 'DEV10'" };
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const price = parsePrice(item.garment.tag);
    return sum + price * item.quantity;
  }, 0);

  const discount = subtotal * discountPercent;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        totalCount,
        subtotal,
        discount,
        discountCode,
        applyDiscountCode,
        freeShippingThreshold,
        quickViewGarment,
        setQuickViewGarment,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
