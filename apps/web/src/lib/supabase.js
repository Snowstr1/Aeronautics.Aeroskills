import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase is not configured: set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in apps/web/.env'
  );
}

// createClient throws on an empty URL, which would blank the whole site.
// Fall back to a placeholder so public pages still render; auth calls will fail.
export const supabase = createClient(
  supabaseUrl || 'https://missing-supabase-url.invalid',
  supabaseKey || 'missing-supabase-key'
);
