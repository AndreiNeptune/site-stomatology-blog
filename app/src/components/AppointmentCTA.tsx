"use client";

import { Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function AppointmentCTA() {
  return (
    <section id="programare" className="pt-8 pb-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-300/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-20 text-center">
              <div className="max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-primary-200/30 text-primary-200 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Programare Rapidă
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
                  Pregătită pentru{" "}
                  <br />
                  <span className="bg-gradient-to-r from-primary-200 via-accent-300 to-primary-300 bg-clip-text text-transparent">
                    transformarea ta?
                  </span>
                </h2>

                <p className="text-primary-100/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                  Fă primul pas spre zâmbetul pe care ți l-ai dorit.
                  Te contactăm în maximum 24 de ore pentru a stabili
                  detaliile vizitei tale la Luna Dental.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/programare"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-white/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Programare Online
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="tel:0724542600"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                  >
                    <Phone className="w-5 h-5" />
                    0724.542.600
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
