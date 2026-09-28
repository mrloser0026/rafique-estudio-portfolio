const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/Shabi/Desktop/Rafique Estudio/Raifque Estudio';

const filesToUpdate = [
  'docs/DEPLOYMENT.md',
  'fiverr-projects-portfolio-HTML.html',
  'fiverr_projects_parsed.json',
  'README.md',
  'supabase/migrations/20260808232820_4b5c511b-dcd9-4d53-bca4-45590eb095b2.sql',
  'supabase/migrations/20260809000000_seed_data.sql',
  'supabase/migrations/20260812000000_global_settings.sql',
  'supabase/migrations/20260813000000_fiverr_data.sql',
  'supabase/migrations/20260814000000_fiverr_seed.sql',
  'supabase/migrations/20260815000000_fiverr_seed_accurate.sql',
  '.lovable/plan/imam-estudio-phase-0-forensic-audit-blocked-on-source-access-2026-08-08.md'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(directory, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Case sensitive replacements
    content = content.replace(/IMAM ESTUDIO/g, 'RAFIQUE ESTUDIO');
    content = content.replace(/IMAM-ESTUDIO/g, 'RAFIQUE-ESTUDIO');
    content = content.replace(/Imam Estudio/g, 'Rafique Estudio');
    content = content.replace(/Imam Studio/g, 'Rafique Estudio');
    content = content.replace(/imam estudio/g, 'rafique estudio');
    content = content.replace(/imam-estudio/g, 'rafique-estudio');
    
    // Fallback for any remaining "imam" (case-insensitive) -> "rafique"
    content = content.replace(/imam/gi, function(match) {
        if (match === 'IMAM') return 'RAFIQUE';
        if (match === 'Imam') return 'Rafique';
        return 'rafique';
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
