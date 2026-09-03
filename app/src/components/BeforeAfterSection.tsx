"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, ArrowLeftRight, ArrowRight } from "lucide-react";

interface BeforeAfterPair {
  beforeImg: string;
  afterImg: string;
  label: string;
}

const cases: BeforeAfterPair[] = [
  {
    beforeImg: "/images/portofoliu/IMG_6557.webp",
    afterImg: "/images/portofoliu/IMG_6559.webp",
    label: "Restaurare Implante",
  },
  {
    beforeImg: "/images/portofoliu/IMG_6533.webp",
    afterImg: "/images/portofoliu/IMG_6535.webp",
    label: "Zâmbet Complet",
  },
  {
    beforeImg: "/images/portofoliu/IMG_6456.webp",
    afterImg: "/images/portofoliu/IMG_6457.webp",
    label: "Reabilitare Estetică",
  },
];

function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: globalThis.MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: globalThis.TouchEvent) => handleMove(e.touches[0].clientX);
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated cursor-ew-resize select-none bg-neutral-100"
        onMouseDown={(e: ReactMouseEvent) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e: ReactTouchEvent) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background) */}
        <Image
          src={pair.afterImg}
          alt={`După ${pair.label}`}
          fill
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Before Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={pair.beforeImg}
            alt={`Înainte ${pair.label}`}
            fill
            className="object-cover object-center pointer-events-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-500 border border-neutral-100">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          Înainte
        </div>
        <div className="absolute top-4 right-4 bg-primary-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
          După
        </div>
      </div>
      <h3 className="text-center font-display font-bold text-lg text-neutral-800">{pair.label}</h3>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-50/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Portofoliu Zâmbete
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5 font-display">
            Transformări care <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Inspiră</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Descoperă rezultatele tratamentelor noastre estetice. Trage de cursor pentru a vedea diferența spectaculoasă dintre starea inițială și zâmbetul final.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {cases.map((pair, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <BeforeAfterSlider pair={pair} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="mt-16 flex justify-center">
          <Link
            href="/portofoliu"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-500 text-neutral-900 font-bold text-lg hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300"
          >
            Vezi mai multe cazuri
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
