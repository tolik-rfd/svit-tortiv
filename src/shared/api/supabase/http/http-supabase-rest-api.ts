import { HttpClient } from "@/shared/lib/http";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../config/env";
import { SupabasePath } from "../config/supabase-paths";

export const httpSupabaseRestApi = new HttpClient({
  baseUrl: `${SUPABASE_URL}${SupabasePath.REST}`,
  params: {
    apikey: SUPABASE_ANON_KEY!,
  },
});
