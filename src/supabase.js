import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrzughzwgjrosrhqgjyx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyenVnaHp3Z2pyb3NyaHFnanl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMDE3NDYsImV4cCI6MjAxNTU3Nzc0Nn0.q5-SrKd113auZt6fQM6JHkOVCsR91CRuP8qHZGyyFp8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
