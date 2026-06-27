import { Metadata } from "next";
import { tarifeData } from "@/data/tarife";
import TarifeAccordion from "@/components/TarifeAccordion";
import AppointmentCTA from "@/components/AppointmentCTA";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Tarife & Prețuri | Dr. Bianca Ionescu",
  description: "Lista completă de tarife pentru serviciile estetice dentare ale Dr. Bianca Ionescu: implanturi, fațete, albire, aparate dentare și altele — cu transparență totală.",
};

export default function TarifePage() {
  return (
    <>
      <main className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 text-primary-700 text-sm font-semibold mb-5">
                Transparență Totală
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 font-serif">
                Tarife și Servicii
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Descoperă tarifele noastre atractive și fă primul pas spre un zâmbet perfect. Susținem tratamente complet fără durere, de o calitate excepțională.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <TarifeAccordion categories={tarifeData} />
          </AnimatedSection>
        </div>
      </main>
      <AppointmentCTA />
    </>
  );
}
