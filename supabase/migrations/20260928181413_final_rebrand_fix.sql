-- 1. Default Pages
INSERT INTO public.pages (slug, title, template, is_system, is_published, seo_title, seo_description)
VALUES
  ('home', 'Homepage', 'home', true, true, 'M. Jahanzaib Awan — Rafique Estudio | Full-Stack Engineer', 'Full-stack development, Shopify engineering, AI automation, SaaS and high-performance digital experiences.'),
  ('about', 'About', 'default', true, true, 'About M. Jahanzaib Awan — Rafique Estudio', 'Founder & Full-Stack Engineer helping brands build high-performance platforms.'),
  ('process', 'Process', 'default', true, true, 'Engineering Methodology — Rafique Estudio', 'Engineering methodology for building high-integrity software.'),
  ('contact', 'Contact', 'default', true, true, 'Start a Project — Rafique Estudio', 'Discuss your Shopify commerce, Next.js SaaS, or custom n8n AI automation project.')
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description;

-- 2. Page Sections for Homepage
DO $$
DECLARE
  home_id UUID;
BEGIN
  SELECT id INTO home_id FROM public.pages WHERE slug = 'home';
  
  -- Clear existing sections to re-seed cleanly
  DELETE FROM public.page_sections WHERE page_id = home_id;

  INSERT INTO public.page_sections (page_id, section_type, title, subtitle, content, display_order, is_visible, is_locked)
  VALUES
    (
      home_id,
      'hero',
      'I Build Digital Systems That Move Businesses Forward.',
      'Full-stack development, Shopify engineering, AI automation, and high-conversion digital experiences for ambitious brands.',
      '{
        "eyebrow": "RAFIQUE ESTUDIO",
        "primary_cta_label": "Start a Project",
        "primary_cta_url": "/contact?source=hero",
        "secondary_cta_label": "View Work",
        "secondary_cta_url": "/work"
      }'::jsonb,
      0, true, true
    ),
    (
      home_id,
      'trust_strip',
      'Proven execution across global platforms',
      'Engineered for reliability',
      '{
        "metrics": [
          {"value": "5.0 ★", "label": "Client Rating"},
          {"value": "100%", "label": "App-Free Shopify Liquid"},
          {"value": "<24h", "label": "Direct Turnaround"},
          {"value": "Zero", "label": "Agency Overhead"}
        ]
      }'::jsonb,
      1, true, false
    ),
    (
      home_id,
      'founder',
      'M. Jahanzaib Awan',
      'Founder & Full-Stack Engineer at Rafique Estudio',
      '{
        "portrait_url": "/images/jahanzaib-awan.jpg",
        "bio": "I''m M. Jahanzaib Awan, founder of Rafique Estudio. I design and engineer high-performance digital experiences for brands that need more than a template. From Shopify engineering and conversion-focused websites to full-stack applications and AI automation, I combine design, engineering, and business thinking to build digital systems that are made to perform.",
        "skills": ["Custom Shopify Liquid", "Shopify Store Redesign", "n8n AI Automations", "Next.js / React 19", "Headless Commerce", "Mobile-First UI/UX"]
      }'::jsonb,
      2, true, false
    ),
    (
      home_id,
      'featured_work',
      'Featured Case Studies',
      'Architected for speed, conversion, and scale.',
      '{}'::jsonb,
      3, true, false
    ),
    (
      home_id,
      'capabilities',
      'Engineering Services & Capabilities',
      'From custom Shopify Liquid sections to full-stack Next.js SaaS platforms.',
      '{}'::jsonb,
      4, true, false
    ),
    (
      home_id,
      'approach',
      'Engineering Methodology',
      'Rigorous execution from architecture to production.',
      '{
        "phases": [
          {"step": "01", "name": "Discovery & Architecture", "description": "Analyzing conversion bottlenecks, user flows, data models, and API specifications before writing code."},
          {"step": "02", "name": "Milestone Sprints", "description": "Clean, typed, testable code pushed directly to GitHub with transparent status updates and PR reviews."},
          {"step": "03", "name": "Optimization & Hardening", "description": "Core Web Vitals tuning, mobile responsiveness pass, security hardening, and error boundary testing."},
          {"step": "04", "name": "Production Launch", "description": "CI/CD deployment to Vercel, production database verification, complete documentation, and handover."}
        ]
      }'::jsonb,
      5, true, false
    ),
    (
      home_id,
      'collaboration',
      'Direct Principal Engineering Access',
      'No account managers. No middle layers.',
      '{
        "headline": "Direct collaboration with M. Jahanzaib Awan.",
        "points": [
          "Direct line to the principal engineer scoping and writing your code.",
          "Custom Shopify solutions that eliminate bloated, recurring app fees.",
          "Production-ready CI/CD deployments on Vercel Edge with zero downtime."
        ]
      }'::jsonb,
      6, true, false
    ),
    (
      home_id,
      'final_cta',
      'Ready to build a high-conversion platform?',
      'Let us review your requirements and provide a technical plan.',
      '{
        "button_label": "Start a Project",
        "button_url": "/contact?source=final_cta",
        "whatsapp_label": "Direct WhatsApp",
        "whatsapp_number": "+923191106310"
      }'::jsonb,
      7, true, false
    );
END
$$;

-- 3. Update Services categories to match the user's request
-- 01 — Shopify Engineering, 02 — High-Conversion Websites, 03 — Full-Stack Web Applications, 04 — AI Automation

UPDATE public.services SET category = '01 — Shopify Engineering' WHERE slug IN ('custom-shopify-liquid-sections', 'shopify-store-redesign-conversion-ui-ux', 'app-free-custom-liquid-sections', 'headless-shopify-hydrogen');
UPDATE public.services SET category = '04 — AI Automation' WHERE slug = 'n8n-ai-automations-workflows';
UPDATE public.services SET category = '03 — Full-Stack Web Applications' WHERE slug = 'high-performance-nextjs-saas-web-app';
UPDATE public.services SET category = '02 — High-Conversion Websites' WHERE slug = 'framer-interactive-websites';

-- 4. Default SEO Settings
INSERT INTO public.seo_settings (route, title, description, keywords, noindex)
VALUES
  ('/', 'M. Jahanzaib Awan — Rafique Estudio | Full-Stack Engineer', 'Full-stack development, Shopify engineering, AI automation, SaaS and high-performance digital experiences.', ARRAY['Shopify Developer', 'React Engineer', 'Next.js SaaS', 'n8n AI Automations', 'UI/UX Architect'], false),
  ('/work', 'Selected Case Studies — Rafique Estudio', 'Case studies across Shopify commerce, Next.js SaaS applications, n8n AI automations, and UI/UX design.', ARRAY['Case Studies', 'Shopify Projects', 'Next.js Apps', 'n8n Workflows'], false),
  ('/services', 'Engineering Capabilities — Rafique Estudio', 'Custom Shopify Liquid, Next.js SaaS development, n8n AI workflow automations, and UI/UX architecture.', ARRAY['Shopify Services', 'n8n Automations', 'Next.js Development', 'Framer Sites'], false),
  ('/about', 'About M. Jahanzaib Awan', 'Founder & Full-Stack Engineer at Rafique Estudio building high performance platforms.', ARRAY['Rafique Estudio', 'M. Jahanzaib Awan', 'UI UX Architect'], false),
  ('/process', 'Engineering Process — Rafique Estudio', 'Engineering methodology for building high-integrity software and conversion platforms.', ARRAY['Methodology', 'Engineering Process'], false),
  ('/contact', 'Start a Project — Rafique Estudio', 'Start a project directly with M. Jahanzaib Awan.', ARRAY['Contact', 'Hire Shopify Developer', 'Hire Next.js Developer'], false)
ON CONFLICT (route) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  keywords = EXCLUDED.keywords,
  noindex = EXCLUDED.noindex;
UPDATE public.global_settings SET value = '{
  "name": "RAFIQUE ESTUDIO",
  "founder": "M. Jahanzaib Awan",
  "role": "Founder & Full-Stack Engineer",
  "handle": "",
  "whatsapp": "923091925177",
  "email": "malikshahzaib1809@gmail.com",
  "rating": "5.0",
  "fiverrReviews": 1,
  "location": "Pakistan",
  "languages": ["English", "Urdu"]
}'::jsonb
WHERE key = 'site_config';
