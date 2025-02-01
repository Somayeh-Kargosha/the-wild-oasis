import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ytjkyrxxwvibvbpogzou.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0amt5cnh4d3ZpYnZicG9nem91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MTM0NTcsImV4cCI6MjA0NjM4OTQ1N30.ZMwfjWm1Q_DCoYVnc45bfudLfDliZGqDYvtExCghaZ0";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cWh5ZWFsc2RkdWZoc2V6aGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MzY3NTAsImV4cCI6MjAyNDUxMjc1MH0.3DuT4Wq_aV4AOnMI0YFZUpSiQDFMn4nAJiM8x8rJCyA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
