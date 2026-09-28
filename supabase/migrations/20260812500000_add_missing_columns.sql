ALTER TABLE public.projects ADD COLUMN industry TEXT;
ALTER TABLE public.projects ADD COLUMN challenge TEXT;
ALTER TABLE public.projects ADD COLUMN solution TEXT;
ALTER TABLE public.projects ADD COLUMN result TEXT;
ALTER TABLE public.projects ADD COLUMN featured_image TEXT;
ALTER TABLE public.projects ADD COLUMN gallery_images JSONB;
ALTER TABLE public.projects ADD COLUMN technologies JSONB;
ALTER TABLE public.projects ADD COLUMN live_url TEXT;
ALTER TABLE public.projects ADD COLUMN order_index INT;

ALTER TABLE public.projects ALTER COLUMN thumbnail_url DROP NOT NULL;

ALTER TABLE public.services ADD COLUMN icon_name TEXT;
ALTER TABLE public.services ADD COLUMN order_index INT;
ALTER TABLE public.services ALTER COLUMN features DROP DEFAULT;
ALTER TABLE public.services ALTER COLUMN features TYPE jsonb USING '[]'::jsonb;
ALTER TABLE public.services ALTER COLUMN features SET DEFAULT '[]'::jsonb;