"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, MapPin, Clock, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

// ─── UPDATE THESE ─────────────────────────────────────────────────────────────
const PHONE_DISPLAY  = "07__ ___ ___";              // TODO
const PHONE_LINK     = "tel:07XXXXXXXX";            // TODO
const ADDRESS        = "Str. [Adresa Clinicii], Sector __, București"; // TODO
// ──────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Dr. Bianca Ionescu — Clinică Stomatologică Premium București"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlays — deep rose */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-primary-950/20" />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary-300/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-primary-300/30 text-primary-200 text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 animate-sparkle" />
            Where Beauty Meets Dentistry
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 font-display"
          >
            Zâmbetul tău,{" "}
            <span className="bg-gradient-to-r from-primary-200 via-accent-300 to-primary-300 bg-clip-text text-transparent">
              arta noastră
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Estetică dentară delicată, rezultate vizibile, experiență de wellness.
            La Dr. Bianca Ionescu, fiecare vizită se simte ca o răsfățare — nu ca o procedură medicală.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="/programare"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-white/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              Programare Online
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/servicii"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Descoperă Serviciile
            </a>
          </motion.div>

          {/* Quick Info Strip */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-300" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Telefon</p>
                              <a href={PHONE_LINK} className="text-sm font-semibold text-white hover:text-primary-200 transition-colors">
                    {PHONE_DISPLAY}
                  </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary-300" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Program</p>
                <p className="text-sm font-semibold text-white">Luni – Vineri: 10:00 – 20:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-300" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Adresă</p>
                <p className="text-sm font-semibold text-white">{ADDRESS}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
