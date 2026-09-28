-- Update portrait URL to the local asset
UPDATE public.global_settings
SET value = jsonb_set(
    value,
    '{portrait_url}',
    '"/images/jahanzaib-awan.jpg"'
)
WHERE key = 'site_config';
