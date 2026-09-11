import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Dr. Bianca Ionescu",
  description: "Politica de confidențialitate privind prelucrarea datelor cu caracter personal.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Politica de Confidențialitate</h1>
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p className="text-sm text-neutral-500">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">1. Introducere</h2>
          <p>Această Politică de Confidențialitate explică modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale atunci când utilizați site-ul nostru și serviciile clinicii stomatologice Dr. Bianca Ionescu.</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">2. Datele pe care le colectăm</h2>
          <p>Colectăm următoarele tipuri de informații:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Date de identificare (nume, prenume)</li>
            <li>Date de contact (număr de telefon, adresă de email)</li>
            <li>Informații comunicate prin intermediul formularului de contact</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">3. Scopul prelucrării datelor</h2>
          <p>Datele dumneavoastră sunt folosite exclusiv pentru:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Programarea și gestionarea vizitelor la clinică</li>
            <li>Răspunsul la solicitările trimise prin formularul de contact</li>
            <li>Îndeplinirea obligațiilor legale</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">4. Protecția datelor</h2>
          <p>Implementăm măsuri de securitate tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, divulgării sau distrugerii.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">5. Drepturile dumneavoastră</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dreptul de acces la date</li>
            <li>Dreptul la rectificarea datelor</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul de a vă opune prelucrării</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">6. Contact</h2>
          <p>Pentru orice întrebări privind prelucrarea datelor personale, ne puteți contacta la adresa de email: <strong>contact@drbiancaionescu.ro</strong>.</p>
        </div>
      </div>
    </div>
  );
}
