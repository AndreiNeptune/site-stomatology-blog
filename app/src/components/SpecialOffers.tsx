"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Sparkles, Tag, ArrowRight, Flame } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { bundles } from "@/lib/constants";
import Image from "next/image";
import { getBnrRate } from "@/actions/getBnrRate";

function DiscountBadge({ oldPrice, newPrice }: { oldPrice: number; newPrice: number }) {
  const pct = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
      <Flame className="w-3 h-3" />
      -{pct}%
    </span>
  );
}

export default function SpecialOffers() {
  const [bnrRate, setBnrRate] = useState<number>(5.00);

  useEffect(() => {
    getBnrRate().then(setBnrRate);
  }, []);

  return (
    <section id="oferte" className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            <Tag className="w-3.5 h-3.5" />
            Oferte Speciale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5 font-display">
            Pachete{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Dr. Bianca Ionescu
            </span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Tratamente premium reunite în pachete cu prețuri speciale.
            Rezervă acum și beneficiezi de ofertele noastre limitate.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {bundles.map((bundle, index) => (
            <AnimatedSection key={bundle.id} delay={index * 0.1}>
              <div
                className={`
                  relative flex flex-col h-full rounded-3xl border transition-all duration-500
                  hover:-translate-y-2 hover:shadow-card
                  ${bundle.highlight
                    ? "bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 border-primary-700 shadow-elevated"
                    : "bg-white border-neutral-100 shadow-soft"
                  }
                  overflow-hidden
                `}
              >
                {/* Bundle Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={bundle.image || "/images/placeholder.jpg"}
                    alt={bundle.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${bundle.highlight ? "bg-primary-950/20" : "bg-black/5"}`} />
                </div>

                {/* Top badge */}
                {bundle.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${bundle.badgeColor}`}>
                      {bundle.badge}
                    </span>
                  </div>
                )}

                {/* Sparkle decoration for highlight card */}
                {bundle.highlight && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 text-primary-300 animate-sparkle" />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-7 flex flex-col h-full">

                  {/* Title block */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-extrabold mb-1 font-display ${bundle.highlight ? "text-white" : "text-neutral-900"}`}>
                      {bundle.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${bundle.highlight ? "text-primary-200/70" : "text-neutral-400"}`}>
                      {bundle.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 ${bundle.highlight ? "bg-white/10" : "bg-neutral-100"}`} />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {bundle.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 shrink-0 ${bundle.highlight ? "text-primary-300" : "text-primary-500"}`}
                        />
                        <span className={`text-sm leading-snug ${bundle.highlight ? "text-white/85" : "text-neutral-600"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className={`h-px mb-5 ${bundle.highlight ? "bg-white/10" : "bg-neutral-100"}`} />

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1">
                      {bundle.oldPrice > bundle.newPrice && (
                        <>
                          <span className={`text-sm line-through ${bundle.highlight ? "text-primary-300/60" : "text-neutral-400"}`}>
                            {bundle.oldPrice} €
                          </span>
                          <DiscountBadge oldPrice={bundle.oldPrice} newPrice={bundle.newPrice} />
                        </>
                      )}
                    </div>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                          <span className={`text-3xl font-extrabold font-display ${bundle.highlight ? "text-white" : "text-neutral-900"}`}>
                            {bundle.newPrice}
                          </span>
                          <span className={`text-sm font-medium ${bundle.highlight ? "text-primary-200/70" : "text-neutral-400"}`}>
                            €
                          </span>
                        </div>
                        <span className={`text-sm font-medium leading-tight mt-1 ${bundle.highlight ? "text-primary-200/90" : "text-neutral-500"}`}>
                          {bundle.pricePrefix ? `${bundle.pricePrefix} ` : ""}{Math.round(bundle.newPrice * bnrRate)} LEI{bundle.priceSuffix ? ` ${bundle.priceSuffix}` : ""}
                        </span>
                      </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`/programare?pachet=${encodeURIComponent(bundle.id)}`}
                    className={`
                      group w-full inline-flex items-center justify-center gap-2.5
                      px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300
                      hover:scale-[1.02] active:scale-[0.98]
                      ${bundle.highlight
                        ? "bg-white text-primary-700 hover:bg-primary-50 hover:shadow-lg"
                        : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 hover:shadow-lg hover:shadow-primary-300/30"
                      }
                    `}
                  >
                    Rezervă Acum
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-sm text-neutral-400">
            * Prețurile sunt valabile pentru o perioadă limitată. Contactează-ne pentru detalii.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
