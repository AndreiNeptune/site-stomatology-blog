import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  const isServer = typeof window === 'undefined';
  const environment = isServer ? 'Server-side' : 'Client-side';
  console.warn(`[Supabase Config] WARNING: Missing credentials in ${environment}. Using placeholders for build stability.`);

  if (!isServer) {
    console.warn('Supabase configuration missing! Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.');
  }
}

// We use placeholders during build if variables are missing to prevent "supabaseUrl is required" errors
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export const getSupabaseAdmin = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    console.warn("[Supabase] WARNING: SUPABASE_SERVICE_ROLE_KEY is missing. Admin operations might fail.");
    return createClient(supabaseUrl, 'placeholder-admin-key');
  }
  return createClient(supabaseUrl, serviceRoleKey);
};
