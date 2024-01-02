import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://uoryqjjdlxpdwkeduysj.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcnlxampkbHhwZHdrZWR1eXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NTg1NDIsImV4cCI6MjAxMDEzNDU0Mn0.iKDltwwP5x_hMU59NzgulY7sdxTqhq_BMhLFl0U1AGU";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
