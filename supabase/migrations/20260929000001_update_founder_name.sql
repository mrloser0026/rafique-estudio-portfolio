-- Update founder name in global_settings
UPDATE public.global_settings
SET value = jsonb_set(
    value,
    '{founder}',
    '"Jahanzaib Rafique"'
)
WHERE key = 'site_config';

-- Update page metadata titles and descriptions
UPDATE public.pages
SET 
  seo_title = REPLACE(seo_title, 'M. Jahanzaib Awan', 'Jahanzaib Rafique'),
  seo_description = REPLACE(seo_description, 'M. Jahanzaib Awan', 'Jahanzaib Rafique');

-- Update page_sections json content
UPDATE public.page_sections
SET content = CAST(REPLACE(CAST(content AS TEXT), 'M. Jahanzaib Awan', 'Jahanzaib Rafique') AS JSONB)
WHERE CAST(content AS TEXT) LIKE '%M. Jahanzaib Awan%';

-- Update seo_settings titles, descriptions, and keywords
UPDATE public.seo_settings
SET 
  title = REPLACE(title, 'M. Jahanzaib Awan', 'Jahanzaib Rafique'),
  description = REPLACE(description, 'M. Jahanzaib Awan', 'Jahanzaib Rafique'),
  keywords = array_replace(keywords, 'M. Jahanzaib Awan', 'Jahanzaib Rafique');

