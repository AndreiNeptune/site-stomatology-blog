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
      { id: "c1", nume: "Consultație", pret: "200 RON" },
      { id: "c2", nume: "Urgențe", pret: "250 RON" },
    ],
  },
  {
    id: "implantologie",
    nume: "Implantologie",
    servicii: [
      { id: "i0", nume: "Implant dentar", pret: "de la 1750 RON" },
      { id: "i1", nume: "Implant dentar ALPHA BIO", pret: "2500 RON" },
      { id: "i2", nume: "Implant dentar MEGAGEN", pret: "3000 RON" },
      { id: "i3", nume: "Implant dentar STRAUMAN", pret: "4500 RON" },
      { id: "i_laser", nume: "Tratament Laser / Parodontoză", pret: "de la 2000 RON" },
      { id: "i4", nume: "Bont de vindecare", pret: "250 RON" },
      { id: "i5", nume: "Bont protetic", pret: "500 RON" },
      { id: "i6", nume: "Bont multi-unit", pret: "500 RON" },
    ],
  },
  {
    id: "chirurgie",
    nume: "Chirurgie",
    servicii: [
      { id: "ch1", nume: "Extracție rest radicular", pret: "150 RON" },
      { id: "ch2", nume: "Extracție simplă monoradiculari", pret: "250 RON" },
      { id: "ch3", nume: "Extracție simplă pluriradiculari", pret: "400 RON" },
      { id: "ch4", nume: "Extracție molar Minte", pret: "600 RON" },
      { id: "ch5", nume: "Extracție molar semiinclus sau inclus (extracție chirurgicală)", pret: "1000 RON" },
      { id: "ch6", nume: "Rezecție aplicală", pret: "700 RON" },
      { id: "ch7", nume: "Decapușonare", pret: "150 RON" },
      { id: "ch8", nume: "Incizie abces dentar", pret: "150 RON" },
      { id: "ch9", nume: "Extracție dinți parodontotici (dinți mobili)", pret: "200 RON" },
      { id: "ch10", nume: "Adiție de os după extracție", pret: "800 RON" },
      { id: "ch11", nume: "Fir sutură", pret: "50 RON" },
      { id: "ch12", nume: "Frenectomie", pret: "400 RON" },
      { id: "ch13", nume: "Alungire Coronară/ gingivectomie", pret: "200 RON" },
      { id: "ch14", nume: "Premolarizare", pret: "600 RON" },
      { id: "ch15", nume: "Sinus lift intern", pret: "2000 RON" },
      { id: "ch16", nume: "Sinus lift extern", pret: "2500 RON" },
      { id: "ch17", nume: "Membrană", pret: "1200 RON" },
      { id: "ch18", nume: "PRGF", pret: "1000 RON" },
    ],
  },
  {
    id: "endodontie",
    nume: "Endodonție",
    servicii: [
      { id: "e1", nume: "Ablație RCR/ pivot fibră", pret: "250 RON" },
      { id: "e2", nume: "Tratament endodontic primar - 1 canal", pret: "600 RON" },
      { id: "e3", nume: "Tratament endodontic primar - 2 canale", pret: "700 RON" },
      { id: "e4", nume: "Tratament endodontic primar - 3 canale +", pret: "850 RON" },
      { id: "e5", nume: "Retratament endodontic primar - 1 canal", pret: "600 RON" },
      { id: "e6", nume: "Retratament endodontic primar - 2 canale", pret: "700 RON" },
      { id: "e7", nume: "Retratament endodontic primar - 3 canale +", pret: "850 RON" },
      { id: "e8", nume: "Obturație de canal provizorie cu hidroxid de calciu sau antibiotic", pret: "100 RON" },
      { id: "e9", nume: "Aplicare MTA", pret: "100 RON" },
    ],
  },
  {
    id: "pedodontie",
    nume: "Pedodonție",
    servicii: [
      { id: "p1", nume: "Sigilare șanțuri și fosete / dinte (include periaj)", pret: "200 RON" },
      { id: "p2", nume: "Preparare și obturare cavități dinți temporari (de lapte)", pret: "150 RON" },
      { id: "p3", nume: "Tratament endodontic dinți temporari (de lapte)", pret: "200 RON" },
      { id: "p4", nume: "Extracție dinți temporari mobili (doar cu anestezie locală)", pret: "150 RON" },
      { id: "p5", nume: "Refacere perete", pret: "100 RON" },
    ],
  },
  {
    id: "ortodontie",
    nume: "Ortodonție",
    servicii: [
      { id: "o1", nume: "Consultație lunară optimizare aparate mobile - bimaxilare", pret: "100 RON" },
      { id: "o2", nume: "Consultație lunară optimizare aparate fixe - bimaxilare", pret: "200 RON" },
      { id: "o3", nume: "Amprentă model de studiu", pret: "250 RON" },
      { id: "o0", nume: "Aparat dentar / arcadă (începând de la 300€)", pret: "de la 1500 RON" },
      { id: "o4", nume: "Aparat dentar fix metalic / arcadă", pret: "2500 RON" },
      { id: "o5", nume: "Aparat dentar fix safir / arcadă", pret: "3500 RON" },
      { id: "o6", nume: "Aparat dentar mobil / arcadă", pret: "2500 RON" },
      { id: "o7", nume: "Aparat dentar DAMON", pret: "4500 RON" },
      { id: "o8", nume: "Aparat dentar Invisalign / arcadă", pret: "7000 RON" },
      { id: "o9", nume: "Refixare bracket", pret: "50 RON" },
      { id: "o10", nume: "Înlocuire bracket aparat metalic", pret: "100 RON" },
      { id: "o11", nume: "Înlocuire bracket aparat DAMON", pret: "200 RON" },
      { id: "o12", nume: "Îndepărtare aparat dentar / arcadă", pret: "150 RON" },
      { id: "o13", nume: "Retainer", pret: "300 RON" },
      { id: "o14", nume: "Înlocuire arc ortodontic DAMON", pret: "100 RON" },
      { id: "o15", nume: "Înlocuire arc ortodontic standard", pret: "150 RON" },
      { id: "o16", nume: "Gutieră de contenție / arcadă", pret: "500 RON" },
      { id: "o17", nume: "Gutieră de bruxism / arcadă", pret: "500 RON" },
    ],
  },
  {
    id: "profilaxie",
    nume: "Profilaxie",
    servicii: [
      { id: "pr1", nume: "AirFlow", pret: "150 RON" },
      { id: "pr2", nume: "Profilaxie adult (detartraj și periaj profesional) + AirFlow", pret: "300 RON" },
      { id: "pr3", nume: "Profilaxie copil (detartraj sumar)", pret: "150 RON" },
      { id: "pr4", nume: "Fluorizare / dinte", pret: "50 RON" },
      { id: "pr5", nume: "Desensibilizare / dinte", pret: "100 RON" },
    ],
  },
  {
    id: "odontologie",
    nume: "Odontologie",
    servicii: [
      { id: "od1", nume: "Obturație 1 suprafață", pret: "250 RON" },
      { id: "od2", nume: "Obturație 2 suprafețe", pret: "300 RON" },
      { id: "od3", nume: "Obturație 3 suprafețe", pret: "350 RON" },
      { id: "od4", nume: "Coafaj direct / indirect cu preparate de tip hidroxid de calciu", pret: "150 RON" },
      { id: "od5", nume: "Pansament calmant", pret: "100 RON" },
    ],
  },
  {
    id: "estetica",
    nume: "Estetică Dentară",
    servicii: [
      { id: "ed1", nume: "Tratament de albire a dinților LASER", pret: "1000 RON" },
      { id: "ed2", nume: "Albire dinte devital", pret: "500 RON" },
      { id: "ed3", nume: "Pachet Albire dentară + detartraj și periaj profesional + AirFlow", pret: "1450 RON" },
      { id: "ed4", nume: "Bijuterii dentare", pret: "500 RON" },
      { id: "ed5", nume: "Fațetare compozit (în cabinet)", pret: "700 RON" },
    ],
  },
  {
    id: "protetica",
    nume: "Protetică",
    servicii: [
      { id: "pt1", nume: "Coroană metalo-ceramică / dinte", pret: "700 RON" },
      { id: "pt_implant", nume: "Coroană pe implant dentar", pret: "de la 1250 RON" },
      { id: "pt_zirc", nume: "Coroană zirconiu", pret: "1000 RON" },
      { id: "pt_hw", nume: "Hollywood Smile (20 coroane)", pret: "15000 RON (3000€)" },
      { id: "pt2", nume: "Fațetă / coroană full zirconiu / dinte", pret: "1500 RON" },
      { id: "pt3", nume: "Fațetă / coroană zirconiu stratificat / dinte", pret: "1800 RON" },
      { id: "pt4", nume: "Fațetă / coroană presată E-MAX / dinte", pret: "1800 RON" },
      { id: "pt5", nume: "Ablație RCR (îndepărtare pivot)", pret: "150 RON" },
      { id: "pt6", nume: "Coroană acrilică provizorie", pret: "100 RON" },
      { id: "pt7", nume: "Kemmeny", pret: "500 RON" },
      { id: "pt8", nume: "Proteză acrilică totală", pret: "2000 RON" },
      { id: "pt9", nume: "Proteză elastică totală", pret: "2500 RON" },
      { id: "pt10", nume: "Proteză scheletată cu sisteme speciale", pret: "3500 RON" },
      { id: "pt11", nume: "Reparație proteză (adăugare dinte / croșet)", pret: "250 RON" },
      { id: "pt12", nume: "Proteză fixă maxilar superior pe 6 implanturi", pret: "34500 RON" },
      { id: "pt13", nume: "Proteză fixă mandibulară (maxilar inferior) pe 4 implanturi", pret: "27500 RON" },
      { id: "pt14", nume: "Rebazare proteză acrilică", pret: "300 RON" },
      { id: "pt15", nume: "Rebazare proteză elastică", pret: "400 RON" },
      { id: "pt16", nume: "Cimentare / element", pret: "100 RON" },
      { id: "pt17", nume: "Ablație / element", pret: "50 RON" },
      { id: "pt18", nume: "Reconstrucție bont", pret: "250 RON" },
      { id: "pt19", nume: "Pivot fibră de sticlă", pret: "300 RON" },
      { id: "pt20", nume: "PMMA", pret: "200 RON" },
    ],
  },
  {
    id: "parodontologie",
    nume: "Tratament Laser (Parodontoză)",
    servicii: [
      { id: "pd_laser", nume: "Tratament Laser Parodontoză", pret: "2000 RON" },
      { id: "pd1", nume: "Imobilizare dinți parodontotici / bară compozit armată", pret: "250 RON" },
      { id: "pd2", nume: "Tratament injectabil NEY-PULL", pret: "900 RON" },
    ],
  },
];
