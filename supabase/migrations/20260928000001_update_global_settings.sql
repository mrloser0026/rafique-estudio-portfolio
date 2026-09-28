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
