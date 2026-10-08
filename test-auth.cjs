import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  // Try to sign in or sign up
  const email = 'test_admin@example.com';
  const password = 'TestPassword123!';

  console.log('Attempting to sign in...');
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    console.log('Sign in failed, attempting to sign up...');
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      console.error('Sign up error:', signUpError.message);
      return;
    }
    console.log('Sign up successful:', signUpData.user?.id);
    console.log('Please check if email confirmation is required.');
  } else {
    console.log('Sign in successful:', signInData.user?.id);
    console.log('Session:', signInData.session?.access_token.substring(0, 20) + '...');
  }
}

main();
