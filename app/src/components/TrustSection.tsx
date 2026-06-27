"use client";

import { useEffect, useState, useRef } from "react";
import { Award, Gem, SmilePlus, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface TrustPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pillars: TrustPillar[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Experiență & Rafinament",
    description: "Medici specializați în estetică dentară, cu formare internațională și un ochi artistic pentru detaliu.",
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Materiale de Lux",
    description: "Utilizăm exclusiv materiale premium — porțelan, zirconiu și composite de înaltă calitate — pentru rezultate de lungă durată.",
  },
  {
    icon: <SmilePlus className="w-8 h-8" />,
    title: "Experiență Fără Durere",
    description: "Tehnici moderne și o abordare caldă, grijulie, care transformă fiecare vizită într-o experiență relaxantă și plăcută.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Îngrijire Personalizată",
    description: "Fiecare client primește un plan unic de tratament. Ascultăm, înțelegem și adaptăm fiecare detaliu nevoilor tale.",
  },
];

interface CounterStat {
  value: number;
  suffix: string;
  label: string;
}

const stats: CounterStat[] = [
  { value: 10, suffix: "+", label: "Ani de Experiență" },
  { value: 2500, suffix: "+", label: "Clienți Fericiți" },
  { value: 5000, suffix: "+", label: "Transformări Realizate" },
  { value: 100, suffix: "%", label: "Dedicare & Pasiune" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(value / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section id="de-ce-noi" className="pt-10 pb-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
            De Ce Dr. Bianca Ionescu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5 font-display">
            De ce alegi{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Dr. Bianca Ionescu
            </span>
            ?
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Ne dedicăm frumuseții și sănătății zâmbetului tău cu profesionalism,
            căldură și cele mai avansate tehnologii disponibile.
          </p>
        </AnimatedSection>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.12}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-soft text-primary-500 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-card group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">
                  {pillar.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Counter */}
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 trust-bg bg-cover bg-center opacity-10" />

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-300/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 lg:p-14">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-200/80 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
