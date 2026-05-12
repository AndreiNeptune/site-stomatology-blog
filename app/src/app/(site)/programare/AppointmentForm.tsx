"use client";

import { useState, FormEvent, useTransition, useEffect } from "react";
import { Send, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";

import { useSearchParams } from "next/navigation";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const initialPachet = searchParams.get("pachet");

  // Decode the pachet slug back to a readable label
  // e.g. "Pachet-Albire-Profesionala" → "Pachet Albire Profesionala"
  const pachetLabel = initialPachet
    ? decodeURIComponent(initialPachet).replace(/-/g, " ")
    : "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get("bot-field");
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("EROARE CONFIGURARE: Variabilele Supabase lipsesc!");
      alert("A apărut o eroare de configurare. Vă rugăm să ne contactați telefonic.");
      return;
    }

    startTransition(async () => {
      try {
        const data = {
          nume: formData.get("name"),
          telefon: formData.get("phone"),
          email: formData.get("email"),
          pachet: formData.get("pachet") || null,
          mesaj: formData.get("message"),
        };

        const { error } = await supabase.from("programari").insert([data]);

        if (error) {
          if ((error as any).message?.toLowerCase().includes("fetch") || !(error as any).status) {
            console.error("EROARE CORS/NETWORK DETECTATĂ: Verifică Supabase Dashboard → Authentication → Settings.");
          }
          throw error;
        }

        setSubmitted(true);
        form.reset();
      } catch (error: any) {
        console.error("Eroare la trimiterea formularului:", error);
        let detailedError = error.message || "A apărut o problemă la trimiterea datelor.";
        if (error.details) detailedError += `\nDetails: ${error.details}`;
        if (error.hint) detailedError += `\nHint: ${error.hint}`;
        alert("Eroare: " + detailedError);
      }
    });
  };

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <Send className="w-8 h-8 text-primary-600" />
        </div>
        <h4 className="text-xl font-bold text-neutral-900 mb-2">Cerere trimisă cu succes!</h4>
        <p className="text-neutral-600">
          Vă mulțumim pentru interes. Veți fi contactat de echipa noastră în cel mai scurt timp pentru confirmare.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors"
        >
          Trimite o altă cerere
        </button>
      </div>
    );
  }

  return (
    <form name="programare" onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="programare" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* ── Pachet pre-fill field (shown only when pachet param exists) ── */}
      {pachetLabel && (
        <div>
          <label htmlFor="pachet" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Pachet Selectat
          </label>
          <div className="relative">
            <input
              type="text"
              id="pachet"
              name="pachet"
              value={pachetLabel}
              readOnly
              className="w-full px-4 py-3 pr-10 rounded-xl bg-primary-50 border border-primary-200 text-primary-800 font-semibold text-sm cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-300/30"
            />
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400 pointer-events-none" />
          </div>
          <p className="text-xs text-neutral-400 mt-1.5 ml-1">
            Pachetul a fost pre-completat din selecția ta. Poți adăuga detalii în câmpul de mai jos.
          </p>
        </div>
      )}

      {/* ── Name & Phone ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="Maria Popescu"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="07XX XXX XXX"
          />
        </div>
      </div>

      {/* ── Email ── */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          placeholder="email@exemplu.ro"
        />
      </div>

      {/* ── Message ── */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Detalii suplimentare
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
          placeholder={pachetLabel ? `Detalii suplimentare pentru ${pachetLabel}...` : "Cum vă putem ajuta?"}
        />
      </div>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary-400/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {isPending ? "Se procesează..." : "Solicită Programare"}
      </button>

      <p className="text-center text-xs text-neutral-500 mt-4">
        Prin trimiterea acestui formular ești de acord cu{" "}
        <a href="/termeni-si-conditii" className="underline hover:text-neutral-700">Termenii și Condițiile</a> și{" "}
        <a href="/politica-de-confidentialitate" className="underline hover:text-neutral-700">Politica de Confidențialitate</a>.
      </p>
    </form>
  );
}
