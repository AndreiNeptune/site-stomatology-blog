"use client";

import { useState, useEffect } from "react";
import { Send, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// --- STRATUL 1: SCHEMA DE VALIDARE (Zod) ---
const formSchema = z.object({
  name: z.string().trim().min(3, "Numele trebuie să conțină cel puțin 3 caractere."),
  phone: z.string().trim().min(10, "Numărul de telefon trebuie să conțină cel puțin 10 cifre.").max(15, "Numărul de telefon este prea lung."),
  email: z.string().trim().email("Adresa de email nu este validă.").optional().or(z.literal("")),
  pachet: z.string().optional(),
  message: z.string().trim().optional(),
  // STRATUL 3: TEHNICA HONEYPOT (câmp ascuns)
  hp_company: z.string().max(0, "Bot detectat").optional(),
});

type FormValues = z.infer<typeof formSchema>;

// STRATUL 4: IGIENIZARE ANTI-XSS
const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  
  // STRATUL 3: VALIDAREA TIMPULUI
  const [mountTime, setMountTime] = useState<number>(0);
  
  const searchParams = useSearchParams();
  const initialPachet = searchParams.get("pachet");
  const pachetLabel = initialPachet ? decodeURIComponent(initialPachet).replace(/-/g, " ") : "";

  // STRATUL 2: GESTIONAREA STĂRII (React Hook Form)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      pachet: pachetLabel,
      message: "",
      hp_company: "",
    },
  });

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    // STRATUL 3: PROTECȚIE ANTI-BOT (Honeypot)
    if (data.hp_company) {
      console.warn("Honeypot triggered");
      setSubmitted(true); // Simulăm succesul
      return;
    }

    // STRATUL 3: PROTECȚIE ANTI-BOT (Timestamp)
    const timeElapsed = Date.now() - mountTime;
    if (timeElapsed < 3000) {
      console.warn("Formular trimis prea rapid (posibil bot)");
      setSubmitted(true); // Simulăm succesul
      return;
    }

    // Pre-verificare variabile de mediu
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      setGlobalError("A apărut o eroare de configurare. Vă rugăm să ne contactați telefonic.");
      return;
    }

    try {
      // STRATUL 4: IGIENIZARE ANTI-XSS PENTRU MESAJ
      const sanitizedMessage = data.message ? escapeHtml(data.message) : null;

      const payload = {
        nume: data.name,
        telefon: data.phone,
        email: data.email || null,
        pachet: data.pachet || null,
        mesaj: sanitizedMessage,
      };

      const { error } = await supabase.from("programari").insert([payload]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Eroare la trimiterea formularului spre Supabase:", error);
      // STRATUL 4: MASCĂ PENTRU ERORI (Information Disclosure Prevention)
      setGlobalError("A apărut o eroare de rețea. Vă rugăm să încercați din nou mai târziu.");
    }
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
    <form name="programare" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="hidden" name="form-name" value="programare" />
      
      {/* STRATUL 3: HONEYPOT (Invizibil CSS) */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label>
          Company (do not fill):
          <input type="text" {...register("hp_company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {globalError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
          {globalError}
        </div>
      )}

      {pachetLabel && (
        <div>
          <label htmlFor="pachet" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Pachet Selectat
          </label>
          <div className="relative">
            <input
              type="text"
              id="pachet"
              {...register("pachet")}
              readOnly
              className="w-full px-4 py-3 pr-10 rounded-xl bg-primary-50 border border-primary-200 text-primary-800 font-semibold text-sm cursor-not-allowed focus:outline-none"
            />
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400 pointer-events-none" />
          </div>
          <p className="text-xs text-neutral-400 mt-1.5 ml-1">
            Pachetul a fost pre-completat din selecția ta.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="Maria Popescu"
          />
          {/* STRATUL 2: AFIȘAREA ERORILOR */}
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="07XX XXX XXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          placeholder="email@exemplu.ro"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Detalii suplimentare
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
          placeholder={pachetLabel ? `Detalii suplimentare pentru ${pachetLabel}...` : "Cum vă putem ajuta?"}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary-400/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {isSubmitting ? "Se trimite..." : "Solicită Programare"}
      </button>

      <p className="text-center text-xs text-neutral-500 mt-4">
        Prin trimiterea acestui formular ești de acord cu{" "}
        <a href="/termeni-si-conditii" className="underline hover:text-neutral-700">Termenii și Condițiile</a> și{" "}
        <a href="/politica-de-confidentialitate" className="underline hover:text-neutral-700">Politica de Confidențialitate</a>.
      </p>
    </form>
  );
}
