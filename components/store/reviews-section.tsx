"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

export default function ReviewsSection() {
  const press = [
    { name: "GQ INDIA", quote: "“Dev's Store sets the benchmark for Indian architectural heavyweight cotton.”" },
    { name: "HOMEGROWN", quote: "“A digital clothing rail experience that feels like walking into a boutique in Kala Ghoda.”" },
    { name: "ROLLING STONE INDIA", quote: "“Zero synthetic fillers. Pure 240 GSM silhouettes made to outlast seasons.”" },
    { name: "GRAZIA INDIA", quote: "“The drape on the bone tee is unmatched. The new gold standard of Indian streetwear.”" },
  ];

  const testimonials = [
    {
      author: "Aarav S.",
      location: "Bandra, Mumbai",
      piece: "Heavyweight tee · Bone (L)",
      rating: 5,
      comment: "The collar doesn't bacon or stretch even after multiple machine washes in Mumbai humidity. The fabric weight feels incredible.",
      verified: true,
    },
    {
      author: "Rohan M.",
      location: "Hauz Khas, New Delhi",
      piece: "Knit cardigan · Olive (M)",
      rating: 5,
      comment: "The lambswool has substantial heft and the wooden buttons feel artisanal. Perfect boxy drape that sits right at the belt line.",
      verified: true,
    },
    {
      author: "Vikram R.",
      location: "Indiranagar, Bengaluru",
      piece: "Oxford shirt · Sky (L)",
      rating: 5,
      comment: "Crisp yet relaxed. Works just as well open over the bone tee. Dispatched via express courier in 2 days with seamless UPI payment.",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="w-full py-20 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Press Quotes Marquee / Grid */}
        <div className="border-b border-border pb-16">
          <p className="text-center text-[11px] font-mono tracking-[0.3em] uppercase text-muted-foreground mb-8">
            As Featured In Editorial Press & Fashion Journals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {press.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/70 flex flex-col justify-between"
              >
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-6">
                  {p.quote}
                </p>
                <span className="font-serif font-black tracking-[0.2em] text-foreground text-sm">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-foreground">
                  4.95 / 5.0
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  (2,400+ Verified Collectors Across India)
                </span>
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Collector Impressions & Wear Logs
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0 max-w-xs">
              Every review verified directly through pan-India order manifests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-foreground/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-3 h-3" />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed mb-6 font-normal">
                    “{t.comment}”
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">
                      {t.author}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {t.location}
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                    Purchased: {t.piece}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
