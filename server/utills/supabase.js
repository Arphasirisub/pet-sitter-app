import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wajvygdhtyqvxzpizdqw.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhanZ5Z2RodHlxdnh6cGl6ZHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzY1MjU5NywiZXhwIjoyMDIzMjI4NTk3fQ.WYO3i4-uXP-AQNtMOZO4lF00FIDfaHrtcn8MZYPtBjY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
