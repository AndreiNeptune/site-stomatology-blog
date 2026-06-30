import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Portofoliu Cazuri Clinice | Dr. Bianca Ionescu",
  description: "Descoperă rezultatele tratamentelor noastre stomatologice: estetică dentară, implantologie, fațete și reabilitări orale complete.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 lg:pt-32 pb-20 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4 shadow-sm border border-primary-200/50">
            <Sparkles className="w-4 h-4" />
            Cazuri Clinice
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 font-display tracking-tight">
            Zâmbete <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Restaurate</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Explorează portofoliul nostru de cazuri clinice. Fiecare zâmbet reprezintă o poveste de succes și o transformare reală realizată cu pasiune și tehnologie de ultimă generație.
          </p>
        </AnimatedSection>
        
        <PortfolioGrid />
      </div>
    </main>
  );
}
