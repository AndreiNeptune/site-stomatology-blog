import { CheckCircle2, CircleDot, Sparkles, Sun, Crown, AlignLeft, ShieldCheck, Microscope, HeartPulse, Siren } from "lucide-react";
import React from "react";

export interface Bundle {
  id: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  description?: string;
  features: string[];
  oldPrice: number;
  newPrice: number;
  highlight?: boolean;
  icon?: React.ReactNode;
  image?: string;
}

export const bundles: Bundle[] = [
  {
    id: "Aparat-Dentar",
    badge: "🦷 Ortodonție",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Aparat Dentar",
    subtitle: "Zâmbet perfect aliniat și sănătos",
    image: "/images/services/aparat dentar.jpg",
    description: "Dispozitive ortodontice care aliniază și îndreaptă dinții. Esențiale pentru sănătatea dentară și estetica facială.",
    features: [
      "Consultație ortodontică de specialitate",
      "Plan de tratament digital 3D",
      "Aparat dentar fix sau mobil",
      "Monitorizare periodică și ajustări",
    ],
    oldPrice: 3500,
    newPrice: 2800,
  },
  {
    id: "Coroane-Dentare",
    badge: "⚙️ Restaurativ",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Coroane Dentare",
    subtitle: "Restaurează funcționalitatea și estetica dintelui",
    image: "/images/services/coroane-dentare-v3.png",
    description: "Calote dentare care acoperă și protejează dinții deteriorați. Restabilesc rezistența și oferă funcționalitate uimitoare.",
    features: [
      "Evaluare clinică și radiologică",
      "Coroane din zirconiu sau ceramică premium",
      "Adaptare perfectă pe bont sau implant",
      "Estetică naturală de durată",
    ],
    oldPrice: 1500,
    newPrice: 1200,
  },
  {
    id: "Implant-Dentar",
    badge: "💎 Cel mai popular",
    badgeColor: "bg-white text-primary-700 border border-primary-200",
    title: "Implant Dentar",
    subtitle: "Soluția permanentă pentru dinții lipsă",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    description: "Operația de implant dentar înlocuiește rădăcinile dinților cu stâlpi metalici biocompatibili.",
    features: [
      "Consultație implantologie avansată",
      "Analiză completă CBCT (3D)",
      "Implant din titan biocompatibil",
      "Intervenție minim invazivă fără durere",
    ],
    oldPrice: 3000,
    newPrice: 2500,
    highlight: true,
  },
  {
    id: "Endodontie",
    badge: "🔬 Precizie",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Endodonție",
    subtitle: "Tratamente de canal precise sub microscop",
    image: "/images/services/endodontie-v3.jpg",
    description: "Salvarea dintelui natural prin curățarea riguroasă a canalelor radiculare folosind tehnologii microscopice.",
    features: [
      "Diagnostic precis cu Rx",
      "Tratament nedureros de nerv",
      "Curățare și obturare 3D",
      "Salvarea dintelui natural pentru viitor",
    ],
    oldPrice: 800,
    newPrice: 600,
  },
  {
    id: "Albirea-Dintilor",
    badge: "✨ Estetică",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Albirea Dinților",
    subtitle: "Până la 8 nuanțe mai alb, într-o singură ședință",
    image: "/images/services/albire.PNG",
    description: "Procedură dentară cosmetică realizată sub supraveghere medicală pentru un zâmbet strălucitor imediat.",
    features: [
      "Consultație pre-albire",
      "Tratament profesional cu lampă LED",
      "Gel de albire premium, sigur pentru smalț",
      "Zâmbet strălucitor garantat",
    ],
    oldPrice: 900,
    newPrice: 650,
  },
  {
    id: "Detartraj",
    badge: "💧 Igienizare",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Detartraj",
    subtitle: "Curățenie profundă și respirație proaspătă",
    image: "/images/services/detartraj-v3.jpg",
    description: "Înlăturarea depozitelor de tartru și placă bacteriană pentru a preveni cariile și bolile gingivale.",
    features: [
      "Detartraj cu ultrasunete nedureros",
      "Îndepărtarea completă a plăcii bacteriene",
      "Periaj profesional și Airflow",
      "Tratament de remineralizare a smalțului",
    ],
    oldPrice: 350,
    newPrice: 249,
  },
  {
    id: "Parodontologie",
    badge: "🌿 Sănătate",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Parodontologie",
    subtitle: "Tratamente specializate pentru sănătatea gingiilor",
    image: "/images/services/parodontologie.jpg",
    description: "Diagnosticarea și tratarea afecțiunilor țesuturilor de susținere ale dinților.",
    features: [
      "Evaluare parodontală detaliată",
      "Tratament antimicrobian",
      "Chiuretaj subgingival atraumatic",
      "Stabilizarea dinților mobili",
    ],
    oldPrice: 1200,
    newPrice: 900,
  },
  {
    id: "Fatete-Dentare",
    badge: "🌟 Hollywood Smile",
    badgeColor: "bg-white text-primary-700 border border-primary-200",
    title: "Fațete Dentare",
    subtitle: "Transformă zâmbetul fără sacrificii",
    image: "/images/services/fatete.jpg",
    description: "Foițe ultra-subțiri din ceramică aplicate pe suprafața dintelui pentru o estetică de vis.",
    features: [
      "Digital Smile Design (DSD)",
      "Fațete din e.max, ultra subțiri",
      "Fără șlefuirea extensivă a dintelui",
      "Proiectare și armonie facială completă",
    ],
    oldPrice: 1800,
    newPrice: 1299,
    highlight: true,
  },
];
