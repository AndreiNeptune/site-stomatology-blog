import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții | Dr. Bianca Ionescu",
  description: "Termenii și condițiile de utilizare ale site-ului.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Termeni și Condiții</h1>
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p className="text-sm text-neutral-500">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">1. Condiții Generale</h2>
          <p>Prin accesarea și utilizarea acestui site, acceptați și sunteți de acord să respectați termenii și condițiile prezentate mai jos. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați acest site.</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">2. Servicii Medicale</h2>
          <p>Informațiile prezentate pe acest site au rol pur informativ și nu înlocuiesc un consult medical de specialitate. Diagnosticul și planul de tratament pot fi stabilite doar în urma unui consult clinic la cabinet.</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">3. Drepturi de Autor</h2>
          <p>Întregul conținut al acestui site (text, imagini, elemente grafice) este proprietatea Dr. Bianca Ionescu și este protejat de legislația privind drepturile de autor. Reproducerea, preluarea sau utilizarea acestora fără acordul scris este strict interzisă.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">4. Programări și Anulări</h2>
          <p>Programările se pot face telefonic, prin email sau prin intermediul formularului de contact. Vă rugăm să anunțați orice anulare sau reprogramare cu cel puțin 24 de ore în avans.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">5. Limitarea Răspunderii</h2>
          <p>Nu ne asumăm răspunderea pentru daunele directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizării informațiilor de pe acest site. Ne rezervăm dreptul de a modifica conținutul și structura site-ului în orice moment, fără notificare prealabilă.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">6. Legislație Aplicabilă</h2>
          <p>Acești termeni și condiții sunt guvernați de legislația română în vigoare. Orice litigiu care decurge din sau în legătură cu utilizarea acestui site se va soluționa pe cale amiabilă sau, dacă nu este posibil, de către instanțele judecătorești competente.</p>
        </div>
      </div>
    </div>
  );
}
