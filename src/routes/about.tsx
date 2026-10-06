import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Globe, Award, CheckCircle2 } from "lucide-react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { globalSettingsQuery } from "@/lib/public-queries";
import { paragraphs } from "@/lib/section-utils";
import { Reveal, TextReveal, TiltCard } from "@/components/ui/motion-primitives";

const ABOUT_TEXT = `I'm M. Jahanzaib Rafique, founder of Rafique Estudio.
I design and engineer high-performance digital experiences for brands that need more than a template.

From Shopify engineering and conversion-focused websites to full-stack applications and AI automation, I combine design, engineering, and business thinking to build digital systems that are made to perform.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About M. Jahanzaib Rafique — Founder & Full-Stack Engineer | Rafique Estudio",
      },
      {
        name: "description",
        content:
          "M. Jahanzaib Rafique — Founder & Full-Stack Engineer based in Pakistan. Engineering high-conversion Shopify, React, Next.js, and n8n AI systems.",
      },
      {
        property: "og:title",
        content:
          "About M. Jahanzaib Rafique — Founder & Full-Stack Engineer | Rafique Estudio",
      },
      {
        property: "og:description",
        content:
          "High-performance Shopify development, Next.js SaaS platforms, mobile-first UI/UX architecture, and custom n8n AI automations.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    title: "Engineering over Templates",
    body: "Eliminate bloat, slow app dependencies, and unoptimized page builders. Every line of code is written for speed, clean architecture, and long-term scalability.",
  },
  {
    title: "Conversion-Driven UI/UX",
    body: "Beautiful interfaces must convert. Every navigation path, CTA placement, typography scale, and responsive layout is architected around user behavior and conversion goals.",
  },
  {
    title: "App-Free Custom Shopify Solutions",
    body: "Avoid recurring monthly app subscriptions and performance degradation by building native Liquid sections, custom theme extensions, and serverless integrations.",
  },
  {
    title: "Intelligent AI Automation Workflow",
    body: "Streamline repetitive business tasks, data routing, customer support, and API integrations using custom n8n AI workflows and intelligent agent logic.",
  },
];

function AboutPage() {
  const { data: globalSettings } = useSuspenseQuery(globalSettingsQuery);
  const siteConfig = globalSettings?.['site_config'] || {};

  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="shell">
        <header className="max-w-3xl">
          <Reveal direction="down">
            <p className="eyebrow text-primary">Senior Engineer Profile</p>
          </Reveal>
          <TextReveal
            text="M. Jahanzaib Rafique"
            as="h1"
            className="display-1 mt-3 text-primary font-display"
          />
          <Reveal delay={0.1}>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
              {siteConfig.role} · {siteConfig.handle}
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {paragraphs(ABOUT_TEXT).map((p, idx) => (
              <Reveal key={p.slice(0, 24)} delay={0.1 * idx}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-md">
                <h3 className="font-display text-lg font-medium text-foreground">
                  Core Competencies
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Custom Shopify Liquid & Themes",
                    "React & Next.js SaaS Apps",
                    "Headless Commerce & Hydrogen",
                    "n8n AI Workflow Automation",
                    "Framer Interactive Websites",
                    "Mobile-First UI/UX Systems",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal direction="left">
              <TiltCard className="h-max rounded-2xl border border-border bg-surface p-7 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-400 font-bold">
                    Verified Profile
                  </span>
                  <div className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>

                <div className="mt-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted border border-border/80">
                  {siteConfig.portrait_url ? (
                    <img
                      src={siteConfig.portrait_url}
                      alt="M. Jahanzaib Rafique — Founder & Full-Stack Engineer at Rafique Estudio"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`flex h-full w-full flex-col items-center justify-center bg-surface-raised text-muted-foreground ${siteConfig.portrait_url ? 'hidden' : ''}`}>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border/80 bg-surface/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span className="mt-4 text-[10px] font-medium uppercase tracking-widest opacity-60">Portrait Pending</span>
                  </div>
                </div>

                <p className="mt-4 font-display text-2xl font-semibold text-primary">
                  {siteConfig.founder}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role}</p>

                <div className="hairline mt-6 space-y-3 pt-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> Location:
                    </span>
                    <span className="font-mono text-foreground font-medium">{siteConfig.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-primary" /> Languages:
                    </span>
                    <span className="font-mono text-foreground font-medium">
                      {siteConfig.languages?.join(", ") || ""}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-primary" /> Handle:
                    </span>
                    <span className="font-mono text-emerald-400 font-medium">{siteConfig.handle}</span>
                  </div>
                </div>

                <div className="mt-7">
                  <Link
                    to="/contact"
                    search={{ source: "about_sidebar" }}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Start an Engagement
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </aside>
        </div>

        <section className="hairline mt-20 pt-14">
          <Reveal direction="down">
            <h2 className="display-2 text-foreground font-display">Engineering Philosophy</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={0.1 * i}>
                <div className="h-full bg-surface p-7 backdrop-blur-md">
                  <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
