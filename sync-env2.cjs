const { spawnSync, execSync } = require('child_process');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf8');
const lines = envFile.split('\n');

for (const line of lines) {
  if (!line.trim() || line.startsWith('#')) continue;
  const [key, ...rest] = line.split('=');
  const value = rest.join('=').trim();
  if (key && value) {
    console.log(`Setting ${key}...`);
    try {
      execSync(`npx vercel env rm ${key} production -y`);
      execSync(`npx vercel env rm ${key} preview -y`);
      execSync(`npx vercel env rm ${key} development -y`);
    } catch(e) {}
    
    // Use spawnSync to pass value directly via stdin, avoiding shell echo issues
    spawnSync('npx', ['vercel', 'env', 'add', key, 'production'], { input: value, shell: true });
    spawnSync('npx', ['vercel', 'env', 'add', key, 'preview'], { input: value, shell: true });
    spawnSync('npx', ['vercel', 'env', 'add', key, 'development'], { input: value, shell: true });
  }
}
console.log('Environment variables re-synced.');
