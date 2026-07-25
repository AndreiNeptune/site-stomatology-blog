"use client";

import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

export default function TestimonialVideo() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-primary-50/50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[9/16] max-w-sm mx-auto relative group">
              <video
                src="/images/portofoliu/testimonial-clienta-fatete.mp4"
                poster="/images/portofoliu/testimonial-poster.jpg"
                className="w-full h-full object-cover rounded-3xl shadow-2xl bg-black"
                controls
                playsInline
                preload="metadata"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold border border-primary-100">
              <Star className="w-4 h-4 fill-current" />
              Recenzia pacientului
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              „Un proces <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">fără durere</span> și un rezultat peste așteptări”
            </h2>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Descoperiți experiența Florentinei, pacienta noastră care a ales transformarea zâmbetului prin dinți pe implanturi și fațete dentare. Ea recomandă cu căldură clinica noastră, subliniind cât de mulțumită a fost de întregul proces, care a durat maxim o săptămână, și faptul că totul a decurs complet fără durere.
            </p>
            
            <blockquote className="border-l-4 border-primary-500 pl-6 my-6 italic text-neutral-700 bg-white/50 py-4 pr-4 rounded-r-lg shadow-sm">
              &quot;Recomand cu tot dragul! Tot procesul a durat maxim o săptămână. A fost o experiență minunată, personalul este extraordinar, iar rezultatul este pur și simplu wow. Nu a durut absolut deloc, totul a fost la superlativ!&quot;
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/60">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-xl">
                F
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Florentina</p>
                <p className="text-sm text-neutral-500">Reabilitare orală complexă prin coroane implanto-purtate și fațetare dentară ceramică</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
