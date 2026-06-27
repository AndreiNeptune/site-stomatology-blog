"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Logo from "./Logo";
import { useState, FormEvent, useTransition } from "react";
import { usePathname } from "next/navigation";
import { submitContactForm } from "../app/actions";
import { cn } from "@/lib/utils";

// ─── CONTACT DETAILS — UPDATE THESE ─────────────────────────────────────────
const PHONE_DISPLAY   = "07__ ___ ___";                       // TODO
const PHONE_LINK      = "tel:07XXXXXXXX";                     // TODO
const EMAIL           = "contact@drbiancaionescu.ro";              // TODO
const ADDRESS_LINE1   = "Str. [Adresa Clinicii]";             // TODO
const ADDRESS_LINE2   = "Sector __, București";               // TODO
const MAPS_QUERY      = "Dr+Bianca+Ionescu+Bucuresti";              // TODO: Google Maps query
const MAPS_EMBED_SRC  = "";                                   // TODO: paste Google Maps embed URL
const INSTAGRAM_URL   = "#";                                  // TODO: Instagram link
const FACEBOOK_URL    = "#";                                  // TODO: Facebook link
// ─────────────────────────────────────────────────────────────────────────────

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const quickLinks = [
  { label: "Acasă", href: "/#acasa" },
  { label: "Servicii", href: "/#servicii" },
  { label: "De Ce Noi", href: "/#de-ce-noi" },
  { label: "Despre Medic", href: "/#doctor" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  "Fațete Dentare",
  "Implanturi Dentare",
  "Albire Profesională",
  "Coroane Dentare",
  "Aparate Dentare",
  "Protetică Dentară",
];

const legalLinks = [
  { label: "Politica de Confidențialitate", href: "/politica-de-confidentialitate" },
  { label: "Politica de Cookies", href: "/politica-de-cookies" },
  { label: "Termeni și Condiții", href: "/termeni-si-conditii" },
  { label: "ANPC", href: "https://anpc.ro/" },
];

export default function Footer() {
  const pathname = usePathname();
  const isAppointmentPage = pathname === "/programare";
  const [submitted, setSubmitted] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(result.message);
      }
    });
  };

  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:gap-8",
          isAppointmentPage ? "lg:grid-cols-3 gap-12" : "lg:grid-cols-4 gap-12"
        )}>
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="lg" />
            <p className="text-neutral-400 text-sm leading-relaxed mt-5 mb-6">
              Where Beauty Meets Dentistry. La Dr. Bianca Ionescu, fiecare zâmbet
              este o operă de artă creată cu grijă, rafinament și pasiune.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target={INSTAGRAM_URL !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 text-neutral-400 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-400 hover:to-primary-600 hover:text-white transition-all duration-300"
                aria-label="Instagram Dr. Bianca Ionescu"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target={FACEBOOK_URL !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 text-neutral-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Facebook Dr. Bianca Ionescu"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links + Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navigare
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact & Locație
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href={`https://maps.google.com/?q=${MAPS_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-400 group-hover:text-primary-400 transition-colors">
                    {ADDRESS_LINE1},
                    <br />{ADDRESS_LINE2}
                  </span>
                </a>
              </li>
              <li>
                <a href={PHONE_LINK} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                  <span className="text-sm text-neutral-400 group-hover:text-primary-400 transition-colors">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                  <span className="text-sm text-neutral-400 group-hover:text-primary-400 transition-colors">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm text-neutral-400">
                  Luni – Vineri: 10:00 – 20:00
                </span>
              </li>
            </ul>
            
            {/* Embedded Google Map */}
            <div className="mt-auto rounded-xl overflow-hidden h-[150px] border border-neutral-800 relative group">
              {MAPS_EMBED_SRC ? (
                <iframe
                  src={MAPS_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.3] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800/50">
                  <span className="text-neutral-500 text-xs">Hartă — adaugă link embed Google Maps</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 4: Netlify Contact Form */}
          {!isAppointmentPage && (
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                Scrie-ne un Mesaj
              </h4>

              {submitted ? (
                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-3">
                    <Send className="w-5 h-5 text-primary-500" />
                  </div>
                  <p className="text-primary-700 font-semibold mb-1">Mesaj trimis!</p>
                  <p className="text-neutral-400 text-sm">
                    Vă vom contacta în cel mai scurt timp.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <input
                    type="text"
                    name="name"
                    placeholder="Nume complet"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  <textarea
                    name="message"
                    placeholder="Mesajul tău..."
                    rows={3}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm transition-all duration-300 hover:from-primary-400 hover:to-primary-500 hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Se trimite..." : "Trimite Mesajul"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} Dr. Bianca Ionescu. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
