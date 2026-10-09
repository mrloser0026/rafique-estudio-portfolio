import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

import fs from 'fs';

async function cleanup() {
  let token = null;
  try {
    const authData = JSON.parse(fs.readFileSync('./.auth/admin.json', 'utf8'));
    token = authData.origins[0].localStorage.find(item => item.name.includes('-auth-token')).value;
    token = JSON.parse(token).access_token;
  } catch (e) {
    console.log("No admin token found, using anon.");
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    }
  });

  const { data: services, error } = await supabase.from('services').select('*').like('title', 'E2E Test Service%');
  if (error) {
    console.error("Error fetching services:", error);
    return;
  }
  
  if (services && services.length > 0) {
    console.log(`Found ${services.length} test services. Deleting...`);
    for (const s of services) {
      await supabase.from('services').delete().eq('id', s.id);
      console.log(`Deleted test service: ${s.title}`);
    }
  } else {
    console.log("No test services found.");
  }

  const { data: projects, error: pError } = await supabase.from('projects').select('*').like('title', 'E2E Test Project%');
  if (projects && projects.length > 0) {
    console.log(`Found ${projects.length} test projects. Deleting...`);
    for (const p of projects) {
      await supabase.from('projects').delete().eq('id', p.id);
      console.log(`Deleted test project: ${p.title}`);
    }
  } else {
    console.log("No test projects found.");
  }
}
cleanup();
