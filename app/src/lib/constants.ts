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
  priceDisclaimer?: string;
}

export const bundles: Bundle[] = [
  {
    id: "Aparat-Dentar",
    badge: "🦷 Ortodonție",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Aparat Dentar",
    subtitle: "Zâmbet perfect aliniat și sănătos",
    image: "/images/services/aparat%20dentar.jpg",
    description: "Dispozitive ortodontice care aliniază și îndreaptă dinții. Esențiale pentru sănătatea dentară și estetica facială.",
    features: [
      "Consultație ortodontică de specialitate",
      "Plan de tratament digital 3D",
      "Aparat dentar fix sau mobil",
      "Monitorizare periodică și ajustări",
    ],
    oldPrice: 1800,
    newPrice: 1500,
    priceDisclaimer: "începând de la 300€ / arcadă",
  },
  {
    id: "Coroane-Zirconiu",
    badge: "⚙️ Restaurativ",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Coroane Zirconiu",
    subtitle: "Restaurează funcționalitatea și estetica dintelui",
    image: "/images/services/coroane-dentare-v3.png",
    description: "Calote dentare care acoperă și protejează dinții deteriorați. Restabilesc rezistența și oferă funcționalitate uimitoare.",
    features: [
      "Evaluare clinică și radiologică",
      "Coroane din zirconiu premium",
      "Adaptare perfectă pe bont sau implant",
      "Estetică naturală de durată",
    ],
    oldPrice: 1400,
    newPrice: 1000,
    priceDisclaimer: "200€",
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
    oldPrice: 2200,
    newPrice: 1750,
    priceDisclaimer: "începând de la 350€",
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
    priceDisclaimer: "120€",
  },
  {
    id: "Albirea-Dintilor",
    badge: "✨ Estetică",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Albirea Dinților",
    subtitle: "Tratament Laser, nu lampă LED",
    image: "/images/services/albire.PNG",
    description: "Procedură dentară cosmetică realizată sub supraveghere medicală cu tehnologie laser pentru un zâmbet strălucitor imediat.",
    features: [
      "Consultație pre-albire",
      "Tratament profesional cu LASER",
      "Gel de albire premium, sigur pentru smalț",
      "Zâmbet strălucitor garantat",
    ],
    oldPrice: 1400,
    newPrice: 1000,
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
    oldPrice: 450,
    newPrice: 300,
  },
  {
    id: "Hollywood-Smile",
    badge: "🌟 Estetică",
    badgeColor: "bg-white text-primary-700 border border-primary-200",
    title: "Hollywood Smile",
    subtitle: "20 Coroane Dentare / Fațete",
    image: "/images/services/fatete-dentare-v2.png",
    description: "Transformă-ți zâmbetul cu un pachet complet pentru o estetică de vis, cu dinți albi și frumoși.",
    features: [
      "Digital Smile Design (DSD)",
      "Coroane din ceramică premium",
      "Armonie facială completă",
      "Rezultat permanent și natural",
    ],
    oldPrice: 20000,
    newPrice: 15000,
    priceDisclaimer: "3000€ (20 coroane)",
    highlight: true,
  },
  {
    id: "Tratament-Laser",
    badge: "🔬 Inovator",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Tratament Laser / Parodontoză",
    subtitle: "Tratăm parodontoza, fără durere și cu vindecare rapidă",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    description: "Folosim tehnologia laser pentru tratamente minim invazive ale parodontozei, cu rezultate excepționale.",
    features: [
      "Tratamentul parodontozei",
      "Decontaminare bacteriană eficientă",
      "Vindecare accelerată a țesuturilor",
      "Biostimulare pentru recuperare rapidă",
    ],
    oldPrice: 2500,
    newPrice: 2000,
  },
];
