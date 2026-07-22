import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import type { Metadata } from "next";
import { bundles } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicii Stomatologice Premium | Dr. Bianca Ionescu",
  description:
    "Descoperă gama de tratamente estetice oferite de Dr. Bianca Ionescu: implanturi dentare, fațete, albire profesională, coroane dentare și ortodonție în București.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-primary-200/30 text-primary-200 text-sm font-semibold mb-6">
              Dr. Bianca Ionescu — Servicii
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight font-display">
              Pachete &{" "}
              <span className="bg-gradient-to-r from-primary-200 via-accent-300 to-primary-300 bg-clip-text text-transparent">
                Servicii
              </span>
            </h1>
            <p className="text-lg text-primary-100/70 max-w-3xl mx-auto leading-relaxed">
              Descoperă pachetele noastre complete pentru un zâmbet sănătos și strălucitor, adaptate nevoilor tale specifice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {bundles.map((service, index) => (
              <AnimatedSection
                key={service.id}
                delay={index * 0.1}
                className="group h-full"
              >
                <div className="flex flex-col h-full bg-white rounded-3xl border border-neutral-100 shadow-soft transition-all duration-500 hover:shadow-card hover:border-primary-200 overflow-hidden">
                  
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image || "/images/placeholder.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Card Header with pricing */}
                  <div className="p-8 pb-0 relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${service.badgeColor || "bg-primary-50 text-primary-600"}`}>
                        {service.badge}
                      </span>
                      {service.highlight && (
                        <Sparkles className="w-5 h-5 text-accent-500 animate-sparkle" />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-6 font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="flex-1 px-8 pb-8">
                    <p className="text-neutral-500 leading-relaxed mb-8 text-base line-clamp-3">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action */}
                  <div className="p-8 pt-0 mt-auto border-t border-neutral-50 bg-neutral-50/10">
                    <div className="flex items-end justify-between gap-4 py-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs line-through text-neutral-400">
                            {service.oldPrice} RON
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold">
                            -{Math.round(((service.oldPrice - service.newPrice) / service.oldPrice) * 100)}%
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-neutral-900 font-display">
                            {service.newPrice}
                          </span>
                          <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                            RON
                          </span>
                        </div>
                      </div>
                      
                      <a
                        href={`/programare?pachet=${encodeURIComponent(service.id)}`}
                        className="p-3.5 rounded-2xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-200 hover:shadow-primary-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-12 bg-primary-50 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">100%</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Fără durere</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">Premium</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Materiale</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">24h</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Timp răspuns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">Top</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Tehnologie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
}
