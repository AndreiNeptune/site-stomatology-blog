"use server";

import * as z from "zod";

const formSchema = z.object({
  nume: z.string()
    .trim()
    .min(3, "Numele trebuie să conțină cel puțin 3 caractere.")
    .max(100, "Numele este prea lung.")
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s\-]+$/, "Numele poate conține doar litere și spații."),
  telefon: z.string()
    .trim()
    .min(10, "Numărul de telefon este prea scurt.")
    .max(20, "Numărul de telefon este prea lung.")
    .regex(/^[\d\+\s\-\(\)]+$/, "Numărul de telefon este invalid.")
    .refine((val) => val.replace(/[^0-9]/g, "").length >= 10, "Telefonul trebuie să conțină minim 10 cifre.")
    .refine((val) => val.replace(/[^0-9]/g, "").length <= 15, "Telefonul trebuie să conțină maxim 15 cifre."),
  email: z.string().trim().email("Email invalid.").optional().or(z.literal("")).nullable(),
  pachet: z.string().optional().nullable(),
  mesaj: z.string().trim().max(1000, "Mesajul este prea lung (maxim 1000 caractere).").optional().nullable(),
});

export async function submitContactForm(formData: FormData) {
  const honeypot = formData.get("bot-field");
  if (honeypot) {
    return { success: true, message: "Mesaj trimis cu succes." };
  }

  const rawData = {
    nume: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    telefon: formData.get("phone")?.toString() || "",
    mesaj: formData.get("message")?.toString() || "",
  };

  const parsed = formSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, message: "Datele introduse nu sunt valide. Verificați numărul de telefon și numele." };
  }

  try {
    const supabaseAdmin = (await import("@/lib/supabase")).getSupabaseAdmin();
    const { error } = await supabaseAdmin
      .from("programari")
      .insert([parsed.data]);

    if (error) {
      console.error("Supabase Error:", error);
      if (error.message?.includes("URL") || error.message?.includes("key")) {
         return { success: false, message: "Eroare de configurare pe server." };
      }
      throw error;
    }

    return { success: true, message: "Mesaj trimis cu succes!" };
  } catch (error) {
    console.error("Eroare la trimiterea formularului spre Supabase:", error);
    return { 
      success: false, 
      message: "A apărut o eroare la trimiterea mesajului."
    };
  }
}

export async function submitAppointmentFormServer(data: {
  nume: string;
  telefon: string;
  email?: string | null;
  pachet?: string | null;
  mesaj?: string | null;
}) {
  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Datele introduse nu sunt valide. Verificați numărul de telefon și numele." };
  }

  try {
    const supabaseAdmin = (await import("@/lib/supabase")).getSupabaseAdmin();
    const { error } = await supabaseAdmin
      .from("programari")
      .insert([parsed.data]);

    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error("Server Action Supabase Error:", error);
    return { success: false, message: "A apărut o eroare de rețea. Vă rugăm să încercați din nou mai târziu." };
  }
}
