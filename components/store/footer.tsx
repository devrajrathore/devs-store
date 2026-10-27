"use client";

import React from "react";
import { ArrowUp, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top Brand & Manifesto */}
        <div className="flex flex-col md:flex-row md:items-start justify-between pb-16 border-b border-neutral-800 gap-8">
          <div className="max-w-md space-y-3">
            <h3 className="text-xl sm:text-2xl font-serif tracking-[0.2em] text-white uppercase font-bold">
              DEV&apos;S STORE
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Archival tactile garments engineered from heavyweight 240 GSM Indian organic cotton, lambswool, and custom mineral mill dyes. Built for permanent rotation across India.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer text-[11px] font-mono uppercase tracking-wider"
          >
            <span>Back to Rail</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-neutral-800">
          <div>
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold mb-4">
              Silhouettes
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Heavyweight 240g Tees</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Chunky Lambswool Knits</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Oxford Button-Downs</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Terry Fleece Hoodies</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Piqué Mineral Polos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold mb-4">
              Client Care (India)
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Pan-India Express (2-3 Days)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bluedart / Delhivery Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">14-Day Easy Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Architectural Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garment Preservation & Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold mb-4">
              The Atelier
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#craft" className="hover:text-white transition-colors">Tirupur Mill Partners</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">GOTS Organic Traceability</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Lookbook AW26 Editorial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mumbai & Bengaluru Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers & Collaborations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold mb-4">
              Pan-India Dispatch
            </h4>
            <p className="text-neutral-400 leading-relaxed mb-4 text-[11px]">
              Orders are packaged in serialized breathable canvas archive dust bags.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl">
              <Globe className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>Delivering to 19,000+ Pin Codes in India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Payment Providers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-4">
            <span>© 2026 DEV&apos;S STORE INDIA. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-200">UPI (GPay / PhonePe)</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-200">RuPay</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-200">NetBanking</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-200">Visa / Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-200">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
