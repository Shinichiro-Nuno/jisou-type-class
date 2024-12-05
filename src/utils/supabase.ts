import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.VITE_SUPBASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);
