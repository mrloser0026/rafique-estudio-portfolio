import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { TextReveal, MagneticButton, Reveal } from "@/components/ui/motion-primitives";
import type { PageSection } from "@/lib/content-types";

interface HeroSectionProps {
  section: PageSection;
}

export function HeroSection({ section }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const content = (section.content || {}) as Record<string, any>;
  const desktopImage = content["desktopImage"] || "";
  const mobileImage = content["mobileImage"] || "";
  const eyebrow = content["eyebrow"] || "RAFIQUE ESTUDIO";
  const primaryCtaLabel = content["primary_cta_label"] || "Start an engagement";
  const primaryCtaUrl = content["primary_cta_url"] || "/contact?source=hero_primary";
  const secondaryCtaLabel = content["secondary_cta_label"] || "Explore work";
  const secondaryCtaUrl = content["secondary_cta_url"] || "/work";

  return (
    <section className="relative min-h-[95svh] w-full overflow-hidden bg-background">
      {/* Hero Background Visual — Official Artwork First (Zero floating 3D objects/particles) */}
      <motion.div style={{ y: imageY, opacity }} className="absolute inset-0 z-0">
        {desktopImage ? (
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileImage || desktopImage} />
            <img
              src={desktopImage}
              alt="M. Jahanzaib Rafique — Founder & Full-Stack Engineer at Rafique Estudio"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center md:object-[70%_center] opacity-85 md:opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
              }}
            />
          </picture>
        ) : null}
        <div className={`absolute inset-0 flex items-center justify-center bg-surface-raised text-muted-foreground ${desktopImage ? 'hidden' : ''}`}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border/80 bg-surface/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-widest opacity-60">Hero Image Pending</span>
          </div>
        </div>
        {/* Minimal localized readability gradient behind text only */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent md:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </motion.div>

      {/* Hero Viewport Content */}
      <div className="shell relative z-10 flex min-h-[95svh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <Reveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                {eyebrow}
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <div className="mt-6">
            <div className="mb-4 text-xl font-medium text-muted-foreground">
              M. Jahanzaib Rafique <br/> Founder & Full-Stack Engineer
            </div>
            <TextReveal
              text={section.title || "I Build Digital Systems That Move Businesses Forward."}
              as="h1"
              className="display-1 text-foreground font-display tracking-tight"
            />
          </div>

          {/* Subtitle / Lede */}
          <Reveal delay={0.3}>
            <p className="lede mt-6 max-w-2xl text-muted-foreground">
              {section.subtitle ||
                "Full-stack development, Shopify engineering, AI automation, and high-conversion digital experiences for ambitious brands."}
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link to={primaryCtaUrl.split('?')[0] as any} search={primaryCtaUrl.includes('?') ? (Object.fromEntries(new URLSearchParams(primaryCtaUrl.split('?')[1])) as any) : undefined}>
                <MagneticButton className="h-12 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-95 active:scale-[0.97]">
                  {primaryCtaLabel}
                </MagneticButton>
              </Link>
              <Link to={secondaryCtaUrl as any}>
                <MagneticButton className="h-12 rounded-full border border-border-strong bg-surface/50 px-8 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface hover:border-foreground/40 active:scale-[0.97]">
                  {secondaryCtaLabel}
                </MagneticButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
