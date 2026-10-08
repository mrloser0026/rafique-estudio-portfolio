import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function cleanEnv(val: string | undefined): string {
  if (!val) return "";
  return val
    .replace(/^\uFEFF/, "")
    .replace(/[\r\n\t]/g, "")
    .trim();
}

export function adminClient(authToken?: string) {
  const url = cleanEnv(process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]);
  const anonKey = cleanEnv(
    process.env["SUPABASE_ANON_KEY"] ||
      process.env["SUPABASE_PUBLISHABLE_KEY"] ||
      process.env["VITE_SUPABASE_PUBLISHABLE_KEY"],
  );
  if (!url || !anonKey) throw new Error("Supabase credentials not configured");

  let finalToken = authToken;
  if (!finalToken) {
    try {
      const req = getRequest();
      if (req) {
        const authHeader = req.headers.get("authorization");
        if (authHeader && authHeader.startsWith("Bearer ")) {
          finalToken = authHeader.replace("Bearer ", "");
        }
      }
    } catch (e) {
      /* ignore parsing error */
    }
  }

  const headers: Record<string, string> = {};
  if (finalToken) {
    headers["Authorization"] = `Bearer ${cleanEnv(finalToken)}`;
  }

  return createClient<Database>(url, anonKey, {
    global: { headers },
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
  });
}
