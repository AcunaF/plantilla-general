import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hhdgpzmvtgohvkxvmgab.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZGdwem12dGdvaHZreHZtZ2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NDExMDMsImV4cCI6MjAzMDMxNzEwM30.jERLllNgb92QjGn0CRanFnDcqT1EbXgqzXsRSAtA22s';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };