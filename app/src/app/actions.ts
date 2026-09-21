"use server";

import * as z from "zod";
import { headers } from "next/headers";

// Sistem simplu in-memory pentru rate-limiting
const rateLimitMap = new Map<string, number>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const lastSubmit = rateLimitMap.get(ip);
  if (lastSubmit && now - lastSubmit < 30000) { // 30 secunde
    return false;
  }
  rateLimitMap.set(ip, now);
  // Curățăm harta dacă devine prea mare
  if (rateLimitMap.size > 1000) rateLimitMap.clear(); 
  return true;
}

const formSchema = z.object({
  nume: z.string()
    .trim()
    .min(3, "Numele trebuie să conțină cel puțin 3 caractere.")
    .max(100, "Numele este prea lung.")
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s\-]+$/, "Numele poate conține doar litere și spații.")
    .refine((val) => /[aeiouăâîyAEIOUĂÂÎY]/.test(val), "Vă rugăm introduceți un nume valid (lipsesc vocalele).")
    .refine((val) => !/(.)\1{3,}/.test(val), "Numele conține caractere identice consecutive anormale."),
  telefon: z.string()
    .trim()
    .regex(/^[\d\+\s\-\(\)]+$/, "Numărul de telefon este invalid.")
    .refine((val) => {
      const digits = val.replace(/[^0-9]/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Telefonul trebuie să conțină între 10 și 15 cifre.")
    .refine((val) => {
      const digits = val.replace(/[^0-9]/g, "");
      return !/^(.)\1{7,}$/.test(digits);
    }, "Numărul de telefon este invalid (prea multe cifre identice)."),
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
    const ip = headers().get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
       return { success: false, message: "Vă rugăm să așteptați 30 de secunde înainte de a trimite un nou mesaj." };
    }

    const payload = {
      ...parsed.data,
      timestamp: new Date().toISOString()
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not defined");
      return { success: false, message: "Eroare de configurare pe server." };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
       throw new Error(`Google Sheets Webhook error: ${response.statusText}`);
    }

    return { success: true, message: "Mesaj trimis cu succes!" };
  } catch (error) {
    console.error("Eroare la trimiterea formularului spre Google Sheets:", error);
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
    const ip = headers().get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
       return { success: false, message: "Vă rugăm să așteptați 30 de secunde înainte de a trimite un nou mesaj." };
    }

    const payload = {
      ...parsed.data,
      timestamp: new Date().toISOString()
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not defined");
      return { success: false, message: "Eroare de configurare pe server." };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets Webhook error: ${response.statusText}`);
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("Server Action Google Sheets Error:", error);
    return { success: false, message: "A apărut o eroare de rețea. Vă rugăm să încercați din nou mai târziu." };
  }
}
