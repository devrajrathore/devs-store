"use client";

import React from "react";
import { CartProvider } from "@/components/store/cart-context";
import AnnouncementBar from "@/components/store/announcement-bar";
import Navbar from "@/components/store/navbar";
import HeroRailSection from "@/components/store/hero-rail-section";
import CatalogSection from "@/components/store/catalog-section";
import MaterialsSection from "@/components/store/materials-section";
import LookbookSection from "@/components/store/lookbook-section";
import ReviewsSection from "@/components/store/reviews-section";
import NewsletterSection from "@/components/store/newsletter-section";
import Footer from "@/components/store/footer";
import CartDrawer from "@/components/store/cart-drawer";
import ProductModal from "@/components/store/product-modal";
import SearchModal from "@/components/store/search-modal";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen w-full bg-background text-foreground flex flex-col antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
        {/* Top Ticker Bar */}
        <AnnouncementBar />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Store Content */}
        <main className="flex-1 w-full">
          {/* Base: The Interactive Clothing Rail Hero */}
          <HeroRailSection />

          {/* Curated Product Grid */}
          <CatalogSection />

          {/* Material & Craftsmanship Story */}
          <MaterialsSection />

          {/* Editorial Lookbook & Styling Pairings */}
          <LookbookSection />

          {/* Press Quotes & Verified Reviews */}
          <ReviewsSection />

          {/* VIP Drop Newsletter */}
          <NewsletterSection />
        </main>

        {/* Comprehensive Luxury Footer */}
        <Footer />

        {/* Interactive Overlays */}
        <CartDrawer />
        <ProductModal />
        <SearchModal />
      </div>
    </CartProvider>
  );
}
