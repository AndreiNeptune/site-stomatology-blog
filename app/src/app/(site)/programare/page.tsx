import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AppointmentForm from "./AppointmentForm";

// ─── CONTACT DETAILS — UPDATE THESE ─────────────────────────────────────────
const PHONE_DISPLAY  = "07__ ___ ___";                    // TODO
const PHONE_LINK     = "tel:07XXXXXXXX";                  // TODO
const EMAIL          = "contact@lunadental.ro";           // TODO
const ADDRESS_LINE1  = "Str. [Adresa Clinicii]";          // TODO
const ADDRESS_LINE2  = "Sector __, București";            // TODO
const MAPS_URL       = "https://maps.google.com/?q=Luna+Dental+Bucuresti"; // TODO
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Programare Online | Luna Dental",
  description: "Programează-te online la Luna Dental. Te vom contacta în cel mai scurt timp pentru a stabili detaliile vizitei tale.",
};

import { Suspense } from "react";

export default function ProgramarePage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 font-display">
              Să vorbim despre{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                zâmbetul tău
              </span>
            </h1>
            <p className="text-lg text-neutral-600">
              Completează formularul de mai jos și echipa Luna Dental
              te va contacta în cel mai scurt timp, cu căldură și profesionalism.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-elevated border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-6 font-display">Contact & Locație</h3>
                <ul className="space-y-6">
                  <li>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">Adresă</p>
                        <p className="text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                          {ADDRESS_LINE1},<br />{ADDRESS_LINE2}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={PHONE_LINK} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                        <Phone className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">Telefon</p>
                        <p className="text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                          {PHONE_DISPLAY}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">Email</p>
                        <p className="text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                          {EMAIL}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Program</p>
                      <p className="text-sm text-neutral-600">
                        Luni – Vineri: 10:00 – 20:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-elevated border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-6 font-display">Formular de Programare</h3>
                <Suspense fallback={<div className="p-4 text-center">Se încarcă formularul...</div>}>
                  <AppointmentForm />
                </Suspense>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
