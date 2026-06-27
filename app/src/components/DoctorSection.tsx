"use client";

import Image from "next/image";
import { Award, GraduationCap, Sparkles, Heart, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// ─── UPDATE THESE VALUES ──────────────────────────────────────────────────────
const DOCTOR_NAME     = "Dr. Bianca Ionescu";         // TODO: replace
const DOCTOR_TITLE    = "Medic Specialist Estetică Dentară"; // TODO: replace
const DOCTOR_SUBTITLE = "Fondatoare Dr. Bianca Ionescu";       // TODO: replace
const INSTAGRAM_URL   = "#";   // TODO: add Instagram link
const FACEBOOK_URL    = "#";   // TODO: add Facebook link
// ─────────────────────────────────────────────────────────────────────────────

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const achievements = [
  { icon: <Award className="w-4 h-4" />, label: "Specialist Estetică Dentară" },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Formare Internațională" },
  { icon: <Star className="w-4 h-4" />, label: "10+ Ani de Experiență" },
  { icon: <Heart className="w-4 h-4" />, label: "2500+ Clienți Fericiți" },
];

export default function DoctorSection() {
  return (
    <section id="doctor" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section label */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Despre Fondatoare
          </span>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── IMAGE COLUMN ── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Blush background layers */}
              <div className="absolute -top-8 -left-8 w-3/4 h-3/4 bg-primary-100/60 rounded-[3rem] -z-10" />
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-accent-100/60 rounded-[3rem] -z-10" />

              {/* Photo card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated aspect-[3/4]">
                <Image
                  src="/images/portofoliu/IMG_6546.webp"
                  alt={`${DOCTOR_NAME} — ${DOCTOR_TITLE}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={90}
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-transparent to-transparent" />

                {/* Bottom name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl px-5 py-4 border border-white/20">
                    <p className="text-white font-bold text-lg font-display leading-tight">
                      {DOCTOR_NAME}
                    </p>
                    <p className="text-primary-200 text-sm mt-0.5">{DOCTOR_TITLE}</p>
                  </div>
                </div>

                {/* Floating sparkle badge top-right */}
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-200" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── CONTENT COLUMN ── */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-3 leading-tight font-display">
                {DOCTOR_NAME}
              </h2>

              <p className="text-lg text-primary-500 font-semibold mb-1">{DOCTOR_TITLE}</p>
              <p className="text-sm text-neutral-400 font-medium mb-8 tracking-wide uppercase">
                {DOCTOR_SUBTITLE}
              </p>

              {/* Bio */}
              <div className="space-y-4 text-neutral-600 text-[15px] leading-relaxed mb-10 border-l-2 border-primary-100 pl-5">
                <p>
                  Pasionată de frumusețea autentică și de transformările care schimbă vieți,
                  a fondat Dr. Bianca Ionescu cu o misiune simplă: stomatologia trebuie să fie o
                  experiență plăcută, nu una de temut.
                </p>
                <p>
                  Specializată în fațete dentare cu aspect ultra-natural, albire profesională
                  și implanturi estetice, îmbină precizia tehnică cu un simț artistic rafinat.
                  Fiecare zâmbet creat este unic — la fel ca persoana din spatele lui.
                </p>
                <p>
                  Crede că fiecare client merită atenție completă, empatie autentică și
                  rezultate care depășesc așteptările.
                </p>
              </div>

              {/* Achievement chips */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {achievements.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-primary-50 border border-primary-100 hover:bg-primary-100 transition-colors duration-200"
                  >
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary-500 shrink-0 shadow-soft">
                      {a.icon}
                    </span>
                    <span className="text-sm font-medium text-primary-800">{a.label}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
                <span className="text-neutral-400 text-sm">Urmărește-ne:</span>
                <a
                  href={INSTAGRAM_URL}
                  target={INSTAGRAM_URL !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label="Instagram Dr. Bianca Ionescu"
                  className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-400 hover:to-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target={FACEBOOK_URL !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label="Facebook Dr. Bianca Ionescu"
                  className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
