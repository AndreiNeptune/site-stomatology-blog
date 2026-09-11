import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies | Dr. Bianca Ionescu",
  description: "Informații despre utilizarea modulelor cookie pe site-ul nostru.",
};

export default function CookiesPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Politica de Cookies</h1>
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p className="text-sm text-neutral-500">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">1. Ce sunt cookie-urile?</h2>
          <p>Un fișier cookie este un text special, de cele mai multe ori codificat, trimis de un server unui navigator web și apoi trimis înapoi (nemodificat) de către navigator, de fiecare dată când accesează acel server. Cookie-urile sunt folosite pentru autentificare, precum și pentru urmărirea comportamentului utilizatorilor.</p>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">2. Cum folosim cookie-urile?</h2>
          <p>Folosim cookie-uri pentru a îmbunătăți experiența de navigare pe site-ul nostru, pentru a înțelege cum interacționați cu conținutul nostru și pentru a personaliza afișarea informațiilor. Acestea includ:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookie-uri strict necesare:</strong> Esențiale pentru funcționarea site-ului.</li>
            <li><strong>Cookie-uri de performanță:</strong> Ne ajută să înțelegem modul în care vizitatorii folosesc site-ul.</li>
            <li><strong>Cookie-uri de funcționalitate:</strong> Permit site-ului să rețină alegerile pe care le faceți.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">3. Cookie-uri terță parte</h2>
          <p>Este posibil să folosim servicii oferite de terțe părți (ex. Google Analytics) care pot plasa propriile cookie-uri pentru a analiza traficul și performanța site-ului.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">4. Cum puteți controla cookie-urile?</h2>
          <p>Puteți controla sau șterge cookie-urile după preferințe. Puteți șterge toate cookie-urile care sunt deja pe calculatorul dumneavoastră și puteți seta majoritatea browserelor să blocheze plasarea acestora. Totuși, dacă faceți acest lucru, este posibil să fiți nevoit să ajustați manual unele preferințe de fiecare dată când vizitați site-ul, iar unele servicii sau funcționalități ar putea să nu funcționeze.</p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">5. Modificări ale politicii</h2>
          <p>Ne rezervăm dreptul de a actualiza această politică de cookie-uri pentru a reflecta schimbările aduse practicilor noastre sau din alte motive operaționale, legale sau de reglementare.</p>
        </div>
      </div>
    </div>
  );
}
