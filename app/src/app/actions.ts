import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
  const honeypot = formData.get("bot-field");
  if (honeypot) {
    // Dacă honeypot-ul este completat, este probabil un bot.
    return { success: true, message: "Mesaj trimis cu succes." };
  }

  const nume = formData.get("name");
  const email = formData.get("email");
  const telefon = formData.get("phone");
  const mesaj = formData.get("message");

  if (!nume || !email || !mesaj) {
    return { success: false, message: "Te rugăm să completezi toate câmpurile obligatorii." };
  }

  try {
    const { error } = await supabase
      .from("programari")
      .insert([
        {
          nume,
          email,
          telefon,
          mesaj,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      
      // Special handle for missing configuration which we check in supabase.ts
      if (error.message?.includes("URL") || error.message?.includes("key")) {
         return { success: false, message: "Eroare de configurare pe server." };
      }
      
      throw error;
    }

    return { success: true, message: "Mesaj trimis cu succes!" };
  } catch (error) {
    console.error("Eroare la trimiterea formularului spre Supabase:", error);
    const message = error instanceof Error ? error.message : "A apărut o eroare la trimiterea mesajului.";
    return { 
      success: false, 
      message: message
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
  const supabaseAdmin = (await import("@/lib/supabase")).getSupabaseAdmin();
  
  try {
    const { error } = await supabaseAdmin
      .from("programari")
      .insert([{
        nume: data.nume,
        telefon: data.telefon,
        email: data.email || null,
        pachet: data.pachet || null,
        mesaj: data.mesaj || null,
      }]);

    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error("Server Action Supabase Error:", error);
    return { success: false, message: "A apărut o eroare de rețea. Vă rugăm să încercați din nou mai târziu." };
  }
}
