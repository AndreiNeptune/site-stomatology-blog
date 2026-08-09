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
      { id: "c2", nume: "Urgențe", pret: "50€" },
    ],
  },
  {
    id: "implantologie",
    nume: "Implantologie",
    servicii: [
      { id: "i0", nume: "Implant dentar", pret: "de la 350€" },
      { id: "i1", nume: "Implant dentar ALPHA BIO", pret: "500€" },
      { id: "i2", nume: "Implant dentar MEGAGEN", pret: "600€" },
      { id: "i3", nume: "Implant dentar STRAUMAN", pret: "900€" },
      { id: "i_laser", nume: "Tratament Laser / Parodontoză", pret: "de la 400€" },
      { id: "i4", nume: "Bont de vindecare", pret: "50€" },
      { id: "i5", nume: "Bont protetic", pret: "100€" },
      { id: "i6", nume: "Bont multi-unit", pret: "100€" },
      { id: "i_a4m", nume: "All on Four Megagen (4 implanturi + lucrare provizorie)", pret: "1800€" },
      { id: "i_a6m", nume: "All on Six Megagen (6 implanturi)", pret: "2500€" },
      { id: "i_a4s", nume: "All on Four SIN (4 implanturi + lucrare provizorie)", pret: "1600€" },
      { id: "i_a6s", nume: "All on Six SIN (6 implanturi)", pret: "1800€" },
    ],
  },
  {
    id: "chirurgie",
    nume: "Chirurgie",
    servicii: [
      { id: "ch1", nume: "Extracție rest radicular", pret: "30€" },
      { id: "ch2", nume: "Extracție simplă monoradiculari", pret: "50€" },
      { id: "ch3", nume: "Extracție simplă pluriradiculari", pret: "80€" },
      { id: "ch4", nume: "Extracție molar Minte", pret: "120€" },
      { id: "ch5", nume: "Extracție molar semiinclus sau inclus (extracție chirurgicală)", pret: "200€" },
      { id: "ch6", nume: "Rezecție aplicală", pret: "140€" },
      { id: "ch7", nume: "Decapușonare", pret: "30€" },
      { id: "ch8", nume: "Incizie abces dentar", pret: "30€" },
      { id: "ch9", nume: "Extracție dinți parodontotici (dinți mobili)", pret: "40€" },
      { id: "ch10", nume: "Adiție de os", pret: "200€ / gram" },
      { id: "ch11", nume: "Fir sutură", pret: "10€" },
      { id: "ch12", nume: "Frenectomie", pret: "80€" },
      { id: "ch13", nume: "Alungire Coronară/ gingivectomie", pret: "40€" },
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
      { id: "e1", nume: "Ablație RCR/ pivot fibră", pret: "50€" },
      { id: "e2", nume: "Tratament endodontic primar - 1 canal", pret: "120€" },
      { id: "e3", nume: "Tratament endodontic primar - 2 canale", pret: "140€" },
      { id: "e4", nume: "Tratament endodontic primar - 3 canale +", pret: "170€" },
      { id: "e5", nume: "Retratament endodontic primar - 1 canal", pret: "120€" },
      { id: "e6", nume: "Retratament endodontic primar - 2 canale", pret: "140€" },
      { id: "e7", nume: "Retratament endodontic primar - 3 canale +", pret: "170€" },
      { id: "e8", nume: "Obturație de canal provizorie cu hidroxid de calciu sau antibiotic", pret: "20€" },
      { id: "e9", nume: "Aplicare MTA", pret: "20€" },
    ],
  },
  {
    id: "pedodontie",
    nume: "Pedodonție",
    servicii: [
      { id: "p1", nume: "Sigilare șanțuri și fosete / dinte (include periaj)", pret: "40€" },
      { id: "p2", nume: "Preparare și obturare cavități dinți temporari (de lapte)", pret: "30€" },
      { id: "p3", nume: "Tratament endodontic dinți temporari (de lapte)", pret: "40€" },
      { id: "p4", nume: "Extracție dinți temporari mobili (doar cu anestezie locală)", pret: "30€" },
      { id: "p5", nume: "Refacere perete", pret: "20€" },
    ],
  },
  {
    id: "ortodontie",
    nume: "Ortodonție",
    servicii: [
      { id: "o1", nume: "Consultație lunară optimizare aparate mobile - bimaxilare", pret: "20€" },
      { id: "o2", nume: "Consultație lunară optimizare aparate fixe - bimaxilare", pret: "40€" },
      { id: "o3", nume: "Amprentă model de studiu", pret: "50€" },
      { id: "o0", nume: "Aparat dentar / arcadă (de la 300€)", pret: "de la 300€" },
      { id: "o4", nume: "Aparat dentar fix metalic / arcadă", pret: "500€" },
      { id: "o5", nume: "Aparat dentar fix safir / arcadă", pret: "700€" },
      { id: "o6", nume: "Aparat dentar mobil / arcadă", pret: "500€" },
      { id: "o7", nume: "Aparat dentar DAMON", pret: "900€" },
      { id: "o8", nume: "Aparat dentar Invisalign / arcadă", pret: "1400€" },
      { id: "o9", nume: "Refixare bracket", pret: "10€" },
      { id: "o10", nume: "Înlocuire bracket aparat metalic", pret: "20€" },
      { id: "o11", nume: "Înlocuire bracket aparat DAMON", pret: "40€" },
      { id: "o12", nume: "Îndepărtare aparat dentar / arcadă", pret: "30€" },
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
      { id: "pr1", nume: "AirFlow", pret: "30€" },
      { id: "pr2", nume: "Profilaxie adult (detartraj și periaj profesional) + AirFlow", pret: "60€" },
      { id: "pr3", nume: "Profilaxie copil (detartraj sumar)", pret: "30€" },
      { id: "pr4", nume: "Fluorizare / dinte", pret: "10€" },
      { id: "pr5", nume: "Desensibilizare / dinte", pret: "20€" },
    ],
  },
  {
    id: "odontologie",
    nume: "Odontologie",
    servicii: [
      { id: "od1", nume: "Obturație 1 suprafață", pret: "50€" },
      { id: "od2", nume: "Obturație 2 suprafețe", pret: "60€" },
      { id: "od3", nume: "Obturație 3 suprafețe", pret: "70€" },
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
      { id: "ed3", nume: "Pachet Albire dentară + detartraj și periaj profesional + AirFlow", pret: "290€" },
      { id: "ed4", nume: "Bijuterii dentare", pret: "100€" },
      { id: "ed5", nume: "Fațetare compozit (în cabinet)", pret: "140€" },
    ],
  },
  {
    id: "protetica",
    nume: "Protetică",
    servicii: [
      { id: "pt1", nume: "Coroană metalo-ceramică / dinte", pret: "140€" },
      { id: "pt_implant", nume: "Coroană pe implant dentar", pret: "de la 250€" },
      { id: "pt_zirc", nume: "Coroană zirconiu", pret: "200€" },
      { id: "pt_hw", nume: "Hollywood Smile (20 fațete / coroane dentare)", pret: "3000€ (*la curs bnr în lei)" },
      { id: "pt2", nume: "Fațetă / coroană full zirconiu / dinte", pret: "300€" },
      { id: "pt3", nume: "Fațetă / coroană zirconiu stratificat / dinte", pret: "360€" },
      { id: "pt4", nume: "Fațetă / coroană presată E-MAX / dinte", pret: "360€" },
      { id: "pt5", nume: "Ablație RCR (îndepărtare pivot)", pret: "30€" },
      { id: "pt6", nume: "Coroană acrilică provizorie", pret: "20€" },
      { id: "pt7", nume: "Kemmeny", pret: "100€" },
      { id: "pt8", nume: "Proteză acrilică totală", pret: "400€" },
      { id: "pt9", nume: "Proteză elastică totală", pret: "500€" },
      { id: "pt10", nume: "Proteză scheletată cu sisteme speciale", pret: "700€" },
      { id: "pt11", nume: "Reparație proteză (adăugare dinte / croșet)", pret: "50€" },
      { id: "pt12", nume: "Proteză fixă maxilar superior pe 6 implanturi", pret: "6900€" },
      { id: "pt13", nume: "Proteză fixă mandibulară (maxilar inferior) pe 4 implanturi", pret: "5500€" },
      { id: "pt14", nume: "Rebazare proteză acrilică", pret: "60€" },
      { id: "pt15", nume: "Rebazare proteză elastică", pret: "80€" },
      { id: "pt16", nume: "Cimentare / element", pret: "20€" },
      { id: "pt17", nume: "Ablație / element", pret: "10€" },
      { id: "pt18", nume: "Reconstrucție bont", pret: "50€" },
      { id: "pt19", nume: "Pivot fibră de sticlă", pret: "60€" },
      { id: "pt20", nume: "PMMA", pret: "40€" },
    ],
  },
  {
    id: "parodontologie",
    nume: "Tratament Laser (Parodontoză)",
    servicii: [
      { id: "pd_laser", nume: "Tratament Laser Parodontoză", pret: "400€" },
      { id: "pd1", nume: "Imobilizare dinți parodontotici / bară compozit armată", pret: "50€" },
      { id: "pd2", nume: "Tratament injectabil NEY-PULL", pret: "180€" },
    ],
  },
];
