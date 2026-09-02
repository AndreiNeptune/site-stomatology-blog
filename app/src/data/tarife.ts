export interface TarifItem {
  id: string;
  nume: string;
  pret: string;
}

export interface CategorieTarife {
  id: string;
  nume: string;
  descriere?: string;
  servicii: TarifItem[];
}

export const tarifeData: CategorieTarife[] = [
  {
    id: "consultatie",
    nume: "Consultație",
    servicii: [
      { id: "c1", nume: "Consultație", pret: "40€" },
      { id: "c2", nume: "Urgențe", pret: "100€" },
    ],
  },
  {
    id: "implantologie",
    nume: "Implantologie",
    servicii: [
      { id: "i0", nume: "Implant dentar (fără adiție de os)", pret: "de la 350€" },
      { id: "i4", nume: "Capă de vindecare", pret: "50€" },
      { id: "i6", nume: "Bont multi-unit", pret: "100€" },
      { id: "i_a4m", nume: "All on Four Megagen (4 implanturi + lucrare provizorie)", pret: "1800€" },
      { id: "i_a6m", nume: "All on Six Megagen (6 implanturi)", pret: "2500€" },
    ],
  },
  {
    id: "chirurgie",
    nume: "Chirurgie",
    servicii: [
      { id: "ch1", nume: "Extracție rest radicular", pret: "80€" },
      { id: "ch2", nume: "Extracție simplă monoradiculari", pret: "50€" },
      { id: "ch3", nume: "Extracție simplă pluriradiculari", pret: "80€" },
      { id: "ch4", nume: "Extracție molar Minte", pret: "120€" },
      { id: "ch5", nume: "Extracție molar semiinclus sau inclus (extracție chirurgicală)", pret: "200€" },
      { id: "ch6", nume: "Rezecție aplicală", pret: "140€" },
      { id: "ch7", nume: "Decapușonare", pret: "30€" },
      { id: "ch9", nume: "Extracție dinți parodontotici (dinți mobili)", pret: "40€" },
      { id: "ch10", nume: "Adiție de os", pret: "200€ / gram" },
      { id: "ch11", nume: "Fir sutură", pret: "10€" },
      { id: "ch12", nume: "Frenectomie", pret: "80€" },
      { id: "ch13", nume: "Alungire Coronară/ gingivectomie / dinte", pret: "40€" },
      { id: "ch14", nume: "Premolarizare", pret: "120€" },
      { id: "ch15", nume: "Sinus lift", pret: "500€ / manoperă + os" },
      { id: "ch17", nume: "Membrană", pret: "240€" },
      { id: "ch18", nume: "PRGF", pret: "200€" },
    ],
  },
  {
    id: "endodontie",
    nume: "Endodonție",
    servicii: [
      { id: "e1", nume: "RCR", pret: "50€" },
      { id: "e2", nume: "Tratament / Retratament endodontic primar - 1 canal", pret: "120-350€" },
      { id: "e3", nume: "Tratament / Retratament endodontic primar - 2 canale", pret: "120-350€" },
      { id: "e4", nume: "Tratament / Retratament endodontic primar - 3 canale +", pret: "120-350€" },
      { id: "e8", nume: "Obturație de canal provizorie cu hidroxid de calciu sau antibiotic", pret: "40€" },
      { id: "e9", nume: "Aplicare MTA", pret: "40€" },
    ],
  },

  {
    id: "ortodontie",
    nume: "Ortodonție",
    servicii: [
      { id: "o1", nume: "Consultație lunară optimizare aparate mobile - bimaxilare", pret: "20€" },
      { id: "o2", nume: "Consultație lunară optimizare aparate fixe - ambele arcade", pret: "80€" },
      { id: "o3", nume: "Amprentă model de studiu", pret: "50€" },
      { id: "o0", nume: "Aparat dentar / arcadă", pret: "de la 200€" },
      { id: "o9", nume: "Refixare bracket", pret: "10€" },
      { id: "o10", nume: "Înlocuire bracket aparat metalic", pret: "20€" },
      { id: "o11", nume: "Înlocuire bracket aparat DAMON", pret: "40€" },
      { id: "o12", nume: "Îndepărtare aparat dentar / arcadă", pret: "50€" },
      { id: "o13", nume: "Retainer", pret: "60€" },
      { id: "o14", nume: "Înlocuire arc ortodontic DAMON", pret: "20€" },
      { id: "o15", nume: "Înlocuire arc ortodontic standard", pret: "30€" },
      { id: "o16", nume: "Gutieră de contenție / arcadă", pret: "100€" },
      { id: "o17", nume: "Gutieră de bruxism / arcadă", pret: "100€" },
    ],
  },
  {
    id: "profilaxie",
    nume: "Profilaxie",
    servicii: [
      { id: "pr1", nume: "Detartraj cu airflow inclus", pret: "80€" },
      { id: "pr4", nume: "Fluorizare / per arcadă", pret: "50€" },
      { id: "pr5", nume: "Desensibilizare / per arcadă", pret: "50€" },
    ],
  },
  {
    id: "odontologie",
    nume: "Odontologie",
    servicii: [
      { id: "od1", nume: "Obturații", pret: "de la 50€" },
      { id: "od4", nume: "Coafaj direct / indirect cu preparate de tip hidroxid de calciu", pret: "30€" },
      { id: "od5", nume: "Pansament calmant", pret: "20€" },
    ],
  },
  {
    id: "estetica",
    nume: "Estetică Dentară",
    servicii: [
      { id: "ed1", nume: "Tratament de albire a dinților LASER", pret: "200€" },
      { id: "ed2", nume: "Albire dinte devital", pret: "100€" },
      { id: "ed4", nume: "Bijuterii dentare", pret: "100€" },
    ],
  },
  {
    id: "protetica",
    nume: "Protetică",
    servicii: [
      { id: "pt_zirc", nume: "Coroană zirconiu", pret: "de la 150€" },
      { id: "pt_hw", nume: "Hollywood Smile (20 fațete / coroane dentare)", pret: "3000€ (*la curs bnr în lei)" },
    ],
  },
  {
    id: "parodontologie",
    nume: "Tratament Laser (Parodontoză)",
    servicii: [
      { id: "pd_laser", nume: "Tratament Laser Parodontoză", pret: "400€" },
    ],
  },
];
