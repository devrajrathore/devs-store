"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "./cart-context";
import { ShoppingBag, Search, Heart, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { totalCount, setIsCartOpen, wishlist, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/60 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-foreground/80 hover:text-foreground rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
            <button
              onClick={() => scrollToSection("rail-hero")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              The Rail
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Catalog
            </button>
            <button
              onClick={() => scrollToSection("craft")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Materials & Craft
            </button>
            <button
              onClick={() => scrollToSection("lookbook")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Reviews
            </button>
          </nav>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-initial flex items-center justify-center lg:justify-start">
            <a
              href="#"
              className="group flex flex-col items-center text-center tracking-[0.28em] font-serif uppercase"
            >
              <span className="text-xl sm:text-2xl font-bold text-foreground tracking-[0.2em] transition-transform duration-300 group-hover:scale-[1.02]">
                DEV&apos;S STORE
              </span>
              <span className="text-[9px] tracking-[0.3em] text-muted-foreground font-sans uppercase -mt-0.5">
                Archival Streetwear · India
              </span>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 p-2 text-foreground/80 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
              title="Search garments"
              aria-label="Search garments"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-muted-foreground border border-border px-1.5 py-0.5 rounded">
                ⌘K
              </span>
            </button>

            {/* Wishlist Indicator */}
            <button
              type="button"
              onClick={() => scrollToSection("catalog")}
              className="relative p-2 text-foreground/80 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full ring-2 ring-background animate-pulse" />
              )}
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-xs"
              aria-label={`Shopping Bag (${totalCount} items)`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-white text-black dark:bg-black dark:text-white rounded-full text-[10px] font-mono font-bold">
                {totalCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-6 transition-all animate-in fade-in">
          <div className="flex flex-col space-y-4 text-sm font-medium tracking-[0.2em] uppercase">
            <button
              onClick={() => scrollToSection("rail-hero")}
              className="text-left py-2 border-b border-border/40 hover:text-neutral-500 flex items-center justify-between"
            >
              <span>The Rail (Hero)</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-left py-2 border-b border-border/40 hover:text-neutral-500 flex items-center justify-between"
            >
              <span>Product Catalog</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("craft")}
              className="text-left py-2 border-b border-border/40 hover:text-neutral-500 flex items-center justify-between"
            >
              <span>Materials & Craft</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("lookbook")}
              className="text-left py-2 border-b border-border/40 hover:text-neutral-500 flex items-center justify-between"
            >
              <span>Lookbook 2026</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-left py-2 border-b border-border/40 hover:text-neutral-500 flex items-center justify-between"
            >
              <span>Reviews & Press</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Free Express Shipping across India over ₹2,499</span>
            <span className="font-mono">INR ₹</span>
          </div>
        </div>
      )}
    </header>
  );
}
