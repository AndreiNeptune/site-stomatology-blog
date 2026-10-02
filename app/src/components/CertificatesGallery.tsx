"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Clock,
  ExternalLink,
} from "lucide-react";

interface Certificate {
  src: string;
  title: string;
  issuer: string;
  year: string;
  location: string;
  description: string;
  category: "implantology" | "aesthetics" | "periodontology" | "general" | "international";
  highlights?: string[];
}

const certificates: Certificate[] = [
  {
    src: "/images/acreditari/european-endo-resto-perio-conference-2025.webp",
    title: "European Endo-Resto-Perio Conference",
    issuer: "European Endo Learning Academy",
    year: "2025",
    location: "Liverpool, UK",
    description:
      "Conferință europeană de endodonție, restaurativă și parodontologie, acreditată cu 24 CPD/ECMEC. Format hibrid, prezentări de ultimă oră în tratamentul canalelor radiculare și restaurări complexe.",
    category: "periodontology",
    highlights: ["24 CPD / ECMEC", "Format hibrid"],
  },
  {
    src: "/images/acreditari/nyu-dental-leaders-summit-2022.webp",
    title: "Dental Leaders Summit 2022",
    issuer: "New York University College of Dentistry",
    year: "2022",
    location: "New York, SUA",
    description:
      "Strategii clinice avansate pentru maximizarea succesului în parodontologie, estetică dentară și implantologie. Program intensiv de 4 zile cu 2000 de credite Dental Leaders.",
    category: "international",
    highlights: ["2000 credite", "4 zile intensive"],
  },
  {
    src: "/images/acreditari/nyu-current-concepts-aesthetics-implantology-2022.webp",
    title: "Current Concepts in American Dentistry",
    issuer: "NYU College of Dentistry – Linhart Program",
    year: "2022",
    location: "New York City, SUA",
    description:
      "Program de 30 de ore acreditat în concepte actuale din stomatologia americană, cu focus pe progresele în estetică și implantologie. Certificare de la una dintre cele mai prestigioase facultăți de medicină dentară din lume.",
    category: "international",
    highlights: ["30 ore de curs", "Estetică & Implantologie"],
  },
  {
    src: "/images/acreditari/nyu-college-of-dentistry-achievement-2022-v3.webp",
    title: "Certificate of Achievement – Implantology & Aesthetics",
    issuer: "New York University College of Dentistry",
    year: "2022",
    location: "New York, SUA",
    description:
      "Certificat de excelență acordat pentru absolvirea cu succes a programului internațional de educație continuă, cu focus pe implantologie și estetică dentară, sub îndrumarea facultății și a personalului NYU.",
    category: "international",
    highlights: ["Certificat de excelență", "Program internațional"],
  },
  {
    src: "/images/acreditari/durr-dental-vector-paro-pro-2022.webp",
    title: "Terapia Parodontală Non-Chirurgicală cu Vector® Paro Pro",
    issuer: "Dürr Dental Academy",
    year: "2022",
    location: "București, România",
    description:
      "Curs specializat în terapia parodontală non-chirurgicală folosind sistemul cu ultrasunete Vector® Paro Pro. Certificare profesională „Dürr Dental Certified Professional”.",
    category: "periodontology",
    highlights: ["Certificare profesională", "Tehnologie cu ultrasunete"],
  },
  {
    src: "/images/acreditari/adre-sisteme-robotizate-medicina-dentara-2021.webp",
    title: "Sisteme Robotizate în Medicina Românească Actuală",
    issuer: "ADRE – Asociația Dentară Română pentru Educație",
    year: "2021",
    location: "Iași, România",
    description:
      "Simpozion științific de medicină dentară dedicat sistemelor robotizate în practica stomatologică modernă. Acreditat cu 16 credite EMC de către Colegiul Medicilor Stomatologi din România.",
    category: "general",
    highlights: ["16 credite EMC", "Sisteme robotizate"],
  },
  {
    src: "/images/acreditari/glidewell-bruxzir-solid-zirconia-2018.webp",
    title: "BruxZir® Solid Zirconia Training",
    issuer: "Glidewell Europe GmbH",
    year: "2018",
    location: "Irvine, California, SUA",
    description:
      "Certificare completă în tehnologia restaurărilor din zirconiu solid BruxZir®, recunoscută la nivel internațional pentru restaurări de înaltă rezistență și estetică deosebită.",
    category: "aesthetics",
    highlights: ["Certificare completă", "Zirconiu solid"],
  },
  {
    src: "/images/acreditari/resista-toronto-implants-immediate-loading-2018.webp",
    title: "Evolved Toronto pe 4 Implanturi – Încărcare Imediată",
    issuer: "Resista Group & Terra Dent",
    year: "2018",
    location: "București, România",
    description:
      "Workshop practic în tehnica Solidarized Evolved Toronto pe 4 implanturi cu încărcare imediată și gestionarea țesuturilor dure și moi pe modele de simulare, susținut de Dr. Roberto Rossi.",
    category: "implantology",
    highlights: ["Workshop practic", "Încărcare imediată"],
  },
  {
    src: "/images/acreditari/filorga-medical-academy-2017.webp",
    title: "Filorga Medical Academy – Diplomă",
    issuer: "Filorga Laboratories, Paris",
    year: "2017",
    location: "Paris, Franța",
    description:
      "Training complet la Academia Medicală Filorga din Paris, în tehnicile avansate de regenerare și biorevitalizare facială, aplicabile în medicina estetică dentară.",
    category: "aesthetics",
    highlights: ["Training complet", "Academia Paris"],
  },
  {
    src: "/images/acreditari/dental4all-congres-carol-davila-2017.webp",
    title: "Congres Internațional – Facultatea de Medicină Dentară",
    issuer: "Dental4All Congress – UMF Carol Davila",
    year: "2017",
    location: "București, România",
    description:
      "Primul Congres cu participare internațională al Facultății de Medicină Dentară din cadrul Universității de Medicină și Farmacie „Carol Davila” din București. Acreditat cu 24 puncte EMC.",
    category: "general",
    highlights: ["24 puncte EMC", "Participare internațională"],
  },
  {
    src: "/images/acreditari/hyaluronica-rontis-2015.webp",
    title: "Cursul Hyaluronica® T.R.U.S.T",
    issuer: "Vital Esthétique & Rontis",
    year: "2015",
    location: "România",
    description:
      "Certificat de absolvire pentru cursul specializat în utilizarea acidului hialuronic Hyaluronica®, aplicații în estetică facială și regenerare tisulară.",
    category: "aesthetics",
    highlights: ["Acid hialuronic", "Estetică facială"],
  },
  {
    src: "/images/acreditari/megagen-balkanian-bone-tissue-days-2015.webp",
    title: "International Symposium – Balkanian Bone & Tissue Days",
    issuer: "MegaGen & Botiss Biomaterials",
    year: "2015",
    location: "București, România",
    description:
      "Simpozion internațional dedicat regenerării osoase și tisulare, organizat de MegaGen și Botiss. Focus pe inovație, regenerare și estetică în implantologie.",
    category: "implantology",
    highlights: ["Regenerare osoasă", "Simpozion internațional"],
  },
  {
    src: "/images/acreditari/megagen-ridge-split-vs-gbr-bone-augmentation-2015.webp",
    title: "Ridge Split vs. GBR în Augmentare Osoasă",
    issuer: "MegaGen & Botiss – Dr. Samuel Lee",
    year: "2015",
    location: "București, România",
    description:
      "Workshop specializat în tehnicile de augmentare osoasă: Ridge Split versus GBR (Guided Bone Regeneration), susținut de Dr. Samuel Lee în cadrul simpozionului Balkanian Bone & Tissue Days.",
    category: "implantology",
    highlights: ["Workshop specializat", "Augmentare osoasă"],
  },
  {
    src: "/images/acreditari/merz-aesthetics-masterclass-2015-v2.webp",
    title: "Masterclass Merz Romania",
    issuer: "Merz Aesthetics",
    year: "2015",
    location: "România",
    description:
      "Masterclass în estetică facială organizat de Merz Aesthetics, cu traineri internaționali din Germania. Tehnici avansate de rejuvenare și conturare facială.",
    category: "aesthetics",
    highlights: ["Masterclass", "Traineri internaționali"],
  },
  {
    src: "/images/acreditari/simpozion-amsmb-implante-protetica-dentara-2014.webp",
    title: "Simpozion AMSMB – Implante și Protetică Dentară",
    issuer: "Asociația Medicilor Stomatologi din București",
    year: "2014",
    location: "București, România",
    description:
      "Ediția a II-a a Simpozionului AMSMB cu teme: „Implante cu încărcare imediată vs. tardivă” și „Rezolvări estetice prin metode directe și indirecte în protetică dentară”. Acreditat cu 50 ore EMC.",
    category: "implantology",
    highlights: ["50 ore EMC", "Protetică pe implanturi"],
  },
  {
    src: "/images/acreditari/sser-congres-estetica-dentara-2012.webp",
    title: "Congres Internațional de Estetică Dentară – DENT",
    issuer: "Societatea de Stomatologie Estetică din România (SSER)",
    year: "2012",
    location: "București – J.W. Marriott Grand Hotel",
    description:
      "Congres internațional „DENT – Dinamism, Eficiență și Noi Tehnologii în Medicina Dentară”, desfășurat la J.W. Marriott Grand Hotel. Acreditat cu 50 ore EMC și 25 puncte interne SSER.",
    category: "aesthetics",
    highlights: ["50 ore EMC", "25 puncte SSER"],
  },
  {
    src: "/images/acreditari/aesculap-implantology-days-germany-2012.webp",
    title: "Implantology Days Workshop",
    issuer: "Aesculap Akademie GmbH",
    year: "2012",
    location: "Tuttlingen, Germania",
    description:
      "Workshop intensiv de implantologie la prestigioasa Aesculap Akademie din Tuttlingen, Germania — centrul global de excelență în instrumentar chirurgical și implantologie.",
    category: "implantology",
    highlights: ["Workshop intensiv", "Centru de excelență"],
  },
  {
    src: "/images/acreditari/artis-biotech-protetica-fixa-pe-implanturi-2011.webp",
    title: "Secretul Succesului în Implantologie – Protetică Fixă pe Implanturi",
    issuer: "Artis Bio Tech",
    year: "2011",
    location: "București, România",
    description:
      "Curs de perfecționare „Secretul succesului în implantologie – Protetică fixă pe implanturi”, susținut de Dr. Toma Ciocan și Dr. Andi Draguș.",
    category: "implantology",
    highlights: ["Curs de perfecționare", "Protetică fixă"],
  },
  {
    src: "/images/acreditari/geistlich-biomaterials-training-switzerland-2011.webp",
    title: "Distributor Training – Geistlich Bio-Oss®, Bio-Gide® & Mucograft®",
    issuer: "Geistlich Biomaterials",
    year: "2011",
    location: "Root & Wolhusen, Elveția",
    description:
      "Curs intensiv de 3 zile la sediul Geistlich Biomaterials din Elveția, acoperind biologie de bază, anatomie, indicații, proprietăți Bio-Oss® și Bio-Gide®, Mucograft®, și workshop practic hands-on.",
    category: "implantology",
    highlights: ["3 zile intensive", "Hands-on Elveția"],
  },
  {
    src: "/images/acreditari/stomatologie-de-la-a-la-z-2011.webp",
    title: "Congres „Stomatologie de la A la Z”",
    issuer: "Societatea Dentară Română & CMDR",
    year: "2011",
    location: "București, România",
    description:
      "Congres de medicină dentară și masă rotundă cu tema „Legislația românească a CMDR în concordanță cu cea europeană”. Acreditat cu 32 ore EMC.",
    category: "general",
    highlights: ["32 ore EMC", "Legislație CMDR"],
  },
  {
    src: "/images/acreditari/ards-implants-oral-implantology-2010.webp",
    title: "Course of Oral Implantology – ARDS Implants System",
    issuer: "The International Institute of ARDS Implants",
    year: "2010",
    location: "București, România",
    description:
      "Curs educațional complet în implantologie orală pe sistemul ARDS Implants, acreditat FDA, CE și ISO 13485. Certificare internațională cu sediul în Israel.",
    category: "implantology",
    highlights: ["Acreditat FDA & CE", "ISO 13485"],
  },
];

const categoryConfig = {
  implantology: {
    label: "Implantologie",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  aesthetics: {
    label: "Estetică",
    color: "bg-pink-50 text-pink-700 border-pink-200",
    dot: "bg-pink-500",
  },
  periodontology: {
    label: "Parodontologie",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  general: {
    label: "Generală",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  international: {
    label: "Internațional",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
  },
};

type CategoryKey = keyof typeof categoryConfig;

export default function CertificatesGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryKey | "all">("all");

  const filteredCerts =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredCerts.length : null
    );
  }, [filteredCerts.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredCerts.length) % filteredCerts.length
        : null
    );
  }, [filteredCerts.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  // Group certificates by year for the stats
  const years = [...new Set(certificates.map((c) => c.year))];
  const totalYears = Number(years[0]) - Number(years[years.length - 1]) + 1;

  return (
    <LazyMotion features={domAnimation} strict>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          {
            icon: <GraduationCap className="w-5 h-5" />,
            value: certificates.length,
            label: "Certificări",
          },
          {
            icon: <Clock className="w-5 h-5" />,
            value: `${totalYears}+`,
            label: "Ani de formare",
          },
          {
            icon: <MapPin className="w-5 h-5" />,
            value: "7",
            label: "Țări",
          },
          {
            icon: <Award className="w-5 h-5" />,
            value: "3",
            label: "Certificări NYU",
          },
        ].map((stat, i) => (
          <m.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-primary-100/40 text-center hover:shadow-card transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 mb-3">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-neutral-900 font-display">
              {stat.value}
            </p>
            <p className="text-sm text-neutral-500 mt-0.5">{stat.label}</p>
          </m.div>
        ))}
      </div>

      {/* Filter Pills */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-8 justify-center"
      >
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeFilter === "all"
              ? "bg-primary-500 text-white border-primary-500 shadow-sm"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
          }`}
        >
          Toate ({certificates.length})
        </button>
        {(Object.keys(categoryConfig) as CategoryKey[]).map((key) => {
          const count = certificates.filter((c) => c.category === key).length;
          if (count === 0) return null;
          const cfg = categoryConfig[key];
          return (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === key
                  ? "bg-primary-500 text-white border-primary-500 shadow-sm"
                  : `bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600`
              }`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </m.div>

      {/* Certificates Timeline List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => {
            const catCfg = categoryConfig[cert.category];
            // Show year separator
            const showYear =
              index === 0 ||
              filteredCerts[index - 1]?.year !== cert.year;

            return (
              <m.div
                key={cert.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.3),
                  layout: { duration: 0.3 },
                }}
              >
                {/* Year Separator */}
                {showYear && (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 mb-4 mt-2"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-500 text-white text-sm font-bold shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent" />
                  </m.div>
                )}

                {/* Certificate Card */}
                <div
                  className="group bg-white rounded-2xl border border-neutral-100 hover:border-primary-200/60 shadow-sm hover:shadow-card transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Certificate Image Thumbnail */}
                    <div className="relative sm:w-48 md:w-56 lg:w-64 flex-shrink-0 overflow-hidden bg-neutral-50">
                      <div className="aspect-[4/3] sm:aspect-auto sm:h-full relative">
                        <Image
                          src={cert.src}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, 256px"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors duration-500 flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${catCfg.color}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${catCfg.dot}`}
                          />
                          {catCfg.label}
                        </span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {cert.location}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-1 leading-tight">
                        {cert.title}
                      </h3>

                      <p className="text-sm text-primary-600 font-medium mb-2">
                        {cert.issuer}
                      </p>

                      <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-3">
                        {cert.description}
                      </p>

                      {/* Highlights */}
                      {cert.highlights && cert.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {cert.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-neutral-50 text-neutral-600 text-xs font-medium border border-neutral-100"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedIndex !== null && (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden"
                onClick={closeLightbox}
              >
                {/* Close button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="absolute top-20 right-4 z-[10000] text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Închide"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation - Previous */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 sm:left-4 z-[10000] text-white/70 hover:text-white transition-colors p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                {/* Navigation - Next */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 sm:right-4 z-[10000] text-white/70 hover:text-white transition-colors p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Următor"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                {/* Image container */}
                <m.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative max-h-[65vh] flex items-center justify-center overflow-hidden">
                    <Image
                      src={filteredCerts[selectedIndex].src}
                      alt={filteredCerts[selectedIndex].title}
                      width={1400}
                      height={1000}
                      className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Info bar */}
                  <div className="mt-4 text-center max-w-2xl px-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          categoryConfig[filteredCerts[selectedIndex].category]
                            .color
                        }`}
                      >
                        {
                          categoryConfig[filteredCerts[selectedIndex].category]
                            .label
                        }
                      </span>
                      <span className="text-white/50 text-xs">•</span>
                      <span className="text-white/60 text-xs font-medium">
                        {filteredCerts[selectedIndex].year}
                      </span>
                      <span className="text-white/50 text-xs">•</span>
                      <span className="text-white/60 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {filteredCerts[selectedIndex].location}
                      </span>
                    </div>
                    <p className="text-white text-sm sm:text-base font-semibold mb-1">
                      {filteredCerts[selectedIndex].title}
                    </p>
                    <p className="text-white/50 text-xs">
                      {filteredCerts[selectedIndex].issuer}
                    </p>
                  </div>

                  {/* Counter */}
                  <p className="mt-3 text-white/40 text-xs font-medium">
                    {selectedIndex + 1} / {filteredCerts.length}
                  </p>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </LazyMotion>
  );
}
