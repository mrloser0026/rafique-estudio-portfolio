-- Update global_settings
UPDATE public.global_settings
SET value = jsonb_set(
    value,
    '{founder}',
    '"M. Jahanzaib Rafique"'
)
WHERE key = 'site_config';

-- Update SEO settings titles and descriptions
UPDATE public.seo_settings
SET title = REPLACE(title, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique'),
    description = REPLACE(description, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique');

-- Update pages content
UPDATE public.pages
SET seo_title = REPLACE(seo_title, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique'),
    seo_description = REPLACE(seo_description, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique');

-- Update page_sections JSON content
UPDATE public.page_sections
SET 
  content = COALESCE((
    SELECT jsonb_object_agg(
      key,
      CASE 
        WHEN jsonb_typeof(value) = 'string' THEN 
          to_jsonb(REPLACE(value#>>'{}', 'Jahanzaib Rafique', 'M. Jahanzaib Rafique'))
        ELSE value
      END
    )
    FROM jsonb_each(content)
  ), '{}'::jsonb),
  title = REPLACE(title, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique'),
  subtitle = REPLACE(subtitle, 'Jahanzaib Rafique', 'M. Jahanzaib Rafique');
