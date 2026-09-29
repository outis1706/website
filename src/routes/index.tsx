import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/editorial-architecture.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";
import coFounderPortrait from "@/assets/Gemini_Generated_Image_uqelquuqelquuqel.jfif";
import usmanPortrait from "@/assets/usman-portrait.jpeg";

const AGENCY_NAME = "Dev Orbit Technologies";
const FOUNDER_NAME = "Muhammad Abu Bakar Ejaz";
const FOUNDER_TEAM_BIO = "AI/ML Engineering, Data Science, and intelligent AI-driven web applications.";
const CO_FOUNDER_NAME = "Abdullah Chaudhary Kara";
const CO_FOUNDER_TEAM_BIO = "AI/ML Engineering, intelligent automation, n8n workflows, API integrations, and AI-powered web applications.";
const CO_FOUNDER_SKILLS = ["AI/ML Engineering", "AI Automation", "n8n Development", "API Integration", "AI-Powered Web Applications", "Business Process Automation"];
const TEAM_MEMBER_NAME = "Muhammad Usman Ghani";
const TEAM_MEMBER_SKILLS = ["AI Automation", "Product Ticketing Systems", "Geotab & Fleet Management", "Geofencing"];

type Founder = { bio: string; skills: string; expertise: string };
const initialData: Founder = { bio: "", skills: "AI/ML Engineering, Data Science, AI-driven web applications", expertise: "" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev Orbit Technologies | Founder & Team" },
      { name: "description", content: "Dev Orbit Technologies — founded by Muhammad Abu Bakar Ejaz and Abdullah Chaudhary Kara. Explore the founders, their work, and the team behind the agency." },
      { property: "og:title", content: "Dev Orbit Technologies | Founder & Team" },
      { property: "og:description", content: "Dev Orbit Technologies — the founders and growing team behind the agency, led by Muhammad Abu Bakar Ejaz and Abdullah Chaudhary Kara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const skills = initialData.skills.split(",").map(s => s.trim()).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute inset-x-0 top-0 z-30 text-hero-foreground">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hero-foreground/30 px-5 sm:px-8 lg:px-12">
            <a href="#top" aria-label="Back to top" className="flex min-w-0 items-center gap-3 font-display text-lg font-extrabold sm:text-xl">
              <span className="grid size-9 shrink-0 place-items-center border border-hero-foreground/70 text-sm">DO</span>
              <span className="truncate">DEV ORBIT<span className="text-signal">.</span></span>
            </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm font-medium lg:flex">
            <a className="transition-opacity hover:opacity-70" href="#about">About</a>
            <a className="transition-opacity hover:opacity-70" href="#founder">Founder</a>
            <a className="transition-opacity hover:opacity-70" href="#team">Team</a>
            <Button variant="signal" asChild className="h-10 px-5"><a href="#team">Meet the team <ArrowUpRight /></a></Button>
          </nav>
          <Button aria-label={mobileMenu ? "Close menu" : "Open menu"} variant="ghost" size="icon" className="text-hero-foreground hover:bg-hero-foreground/15 hover:text-hero-foreground lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</Button>
        </div>
        {mobileMenu && <nav aria-label="Mobile navigation" className="mx-5 border border-hero-foreground/30 bg-deep p-4 text-sm sm:mx-8 lg:hidden">{[["About", "#about"], ["Founder", "#founder"], ["Team", "#team"]].map(([label, href]) => <a key={href} onClick={() => setMobileMenu(false)} href={href} className="block border-b border-hero-foreground/20 py-3 last:border-0">{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative flex min-h-[690px] flex-col justify-end overflow-hidden bg-deep text-hero-foreground sm:min-h-[720px] lg:min-h-[760px]">
          <img src={heroImage} alt="Sculptural stone architecture in afternoon light" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="hero-veil absolute inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase sm:text-sm"><span className="h-px w-9 bg-signal" /> Founder & CEO <span className="text-hero-foreground/60">/ Muhammad Abu Bakar Ejaz</span></div>
            <h1 className="max-w-5xl font-display text-[clamp(3.15rem,7.2vw,7.5rem)] font-extrabold leading-[1.04] text-balance-pretty">Dev Orbit<br /><span className="text-signal">Technologies.</span></h1>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-hero-foreground/85 sm:text-lg">The founder, team, and perspective behind what Dev Orbit Technologies builds next.</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="signal" asChild size="lg" className="h-12 px-6"><a href="#founder">Explore the founder <ArrowUpRight /></a></Button>
                <Button variant="onDark" asChild size="lg" className="h-12 px-6"><a href="#team">Meet the team <ArrowRight /></a></Button>
              </div>
            </div>
          </div>
          <a href="#about" aria-label="Scroll to about section" className="absolute bottom-5 left-5 hidden items-center gap-2 text-xs uppercase text-hero-foreground/80 transition-colors hover:text-signal sm:left-8 lg:left-12 xl:flex"><ArrowDown size={15} /> Scroll to discover</a>
        </section>

        <section id="about" className="scroll-mt-12 border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.35fr] lg:gap-24 lg:px-12 lg:py-28">
            <div><p className="mb-5 text-xs font-bold uppercase text-muted-foreground">01 / The introduction</p><h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Built around<br /><span className="text-muted-foreground">what matters.</span></h2></div>
            <div className="flex flex-col justify-end"><p className="max-w-2xl font-display text-xl font-medium leading-relaxed sm:text-2xl">Every meaningful venture begins with a point of view. Dev Orbit Technologies is the home for ours—and for the people who will help shape it.</p><a className="mt-7 inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-bold transition-colors hover:text-muted-foreground" href="#founder">Get to know the founder <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section id="founder" className="scroll-mt-12 bg-surface">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div><p className="mb-5 text-xs font-bold uppercase text-muted-foreground">02 / The founder</p><h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">The person<br />behind the vision<span className="text-signal">.</span></h2><img src={founderPortrait} alt="Muhammad Abu Bakar Ejaz, Founder and CEO of Dev Orbit Technologies" width={1024} height={1536} className="mt-8 block h-auto w-full max-w-sm object-contain" /></div>
              <div className="border-t border-foreground/25 pt-6 lg:pt-8">
                <div><h3 className="font-display text-2xl font-bold sm:text-3xl">{FOUNDER_NAME}</h3><p className="mt-2 text-sm font-semibold uppercase text-muted-foreground">Founder & CEO</p></div>
                <blockquote className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>Hi, I am Muhammad Abu Bakar Ejaz, the technical mind behind <strong className="font-semibold text-foreground">Dev Orbit Technologies</strong>. While my core expertise lies in AI/ML Engineering, Data Science, and building intelligent AI-driven web applications, I lead a talented team of developers who execute full-scale, end-to-end web development projects.</p>
                  <p>I personally design and architect the custom machine learning models, data pipelines, and smart features for your projects, ensuring your business leverages cutting-edge technology. With our hybrid model, you get high-end AI intelligence combined with seamless execution.</p>
                </blockquote>
                <div className="mt-10 grid gap-8 border-t border-foreground/20 pt-8 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase text-muted-foreground">Core skills</p>{skills.length ? <div className="mt-4 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="border border-foreground/20 bg-background px-3 py-1.5 text-sm">{skill}</span>)}</div> : <p className="mt-4 text-sm text-muted-foreground">AI/ML Engineering, Data Science, AI-driven web applications</p>}</div><div><p className="text-xs font-bold uppercase text-muted-foreground">Expertise</p><p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">Custom machine learning models, data pipelines, smart features, and end-to-end web development.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="co-founder" className="scroll-mt-12 border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div><p className="mb-5 text-xs font-bold uppercase text-muted-foreground">03 / The co-founder</p><h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Automation<br />with purpose<span className="text-signal">.</span></h2><img src={coFounderPortrait} alt="Abdullah Chaudhary Kara, Co-Founder of Dev Orbit Technologies" width={1024} height={1536} className="mt-8 block h-auto w-full max-w-sm object-contain" /></div>
              <div className="border-t border-foreground/25 pt-6 lg:pt-8">
                <div><h3 className="font-display text-2xl font-bold sm:text-3xl">{CO_FOUNDER_NAME}</h3><p className="mt-2 text-sm font-semibold uppercase text-muted-foreground">Co-Founder</p></div>
                <blockquote className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>I am {CO_FOUNDER_NAME}, Co-Founder at <strong className="font-semibold text-foreground">Dev Orbit Technologies</strong>, where I focus on turning AI and automation into practical business solutions. My work sits at the intersection of AI/ML Engineering, intelligent automation, n8n workflow development, API integrations, and AI-powered web applications.</p>
                  <p>I build systems that help businesses automate repetitive operations, connect their tools and services, and bring AI into everyday workflows. From designing intelligent workflows and integrating APIs to developing AI-driven web solutions, I turn complex processes into efficient, scalable systems.</p>
                  <p>My focus is not just building technology, but identifying where it can create real operational value and turning those opportunities into working products and solutions.</p>
                </blockquote>
                <div className="mt-10 grid gap-8 border-t border-foreground/20 pt-8 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase text-muted-foreground">Core skills</p><div className="mt-4 flex flex-wrap gap-2">{CO_FOUNDER_SKILLS.map(skill => <span key={skill} className="border border-foreground/20 bg-background px-3 py-1.5 text-sm">{skill}</span>)}</div></div><div><p className="text-xs font-bold uppercase text-muted-foreground">Expertise</p><p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">Intelligent Automation · AI/ML Solutions · n8n Workflows · API &amp; System Integration · AI Web Applications · Business Automation</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="scroll-mt-12 bg-background">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="border-b border-border pb-9"><p className="mb-5 text-xs font-bold uppercase text-muted-foreground">04 / Founders & team</p><h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">People make<br />the difference<span className="text-signal">.</span></h2></div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <article className="flex flex-col gap-5 border border-border bg-card p-6"><div><div className="relative mx-auto aspect-[3/4] w-full max-w-48 overflow-hidden bg-surface"><img src={founderPortrait} alt={FOUNDER_NAME} width={1024} height={1536} className="absolute inset-0 size-full object-cover" /></div><span className="mt-4 block text-xs font-semibold uppercase text-muted-foreground">01 / Founder</span></div><div><h3 className="font-display text-xl font-bold">{FOUNDER_NAME}</h3><p className="mt-1 text-sm text-muted-foreground">Founder & CEO</p><p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{FOUNDER_TEAM_BIO}</p></div></article>
              <article className="flex flex-col gap-5 border border-border bg-card p-6"><div><div className="relative mx-auto aspect-[3/4] w-full max-w-48 overflow-hidden bg-surface"><img src={coFounderPortrait} alt={CO_FOUNDER_NAME} width={1024} height={1536} className="absolute inset-0 size-full object-cover" /></div><span className="mt-4 block text-xs font-semibold uppercase text-muted-foreground">02 / Co-Founder</span></div><div><h3 className="font-display text-xl font-bold">{CO_FOUNDER_NAME}</h3><p className="mt-1 text-sm text-muted-foreground">Co-Founder</p><p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{CO_FOUNDER_TEAM_BIO}</p></div></article>
              <article className="flex flex-col gap-5 border border-border bg-card p-6"><div><div className="relative mx-auto aspect-[3/4] w-full max-w-48 overflow-hidden bg-surface"><img src={usmanPortrait} alt={TEAM_MEMBER_NAME} width={1024} height={1536} className="absolute inset-0 size-full object-cover" /></div><span className="mt-4 block text-xs font-semibold uppercase text-muted-foreground">03 / Team Lead</span></div><div><h3 className="font-display text-xl font-bold">{TEAM_MEMBER_NAME}</h3><p className="mt-1 text-sm text-muted-foreground">Team Lead</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{TEAM_MEMBER_SKILLS.join(" · ")}</p></div></article>
            </div>
          </div>
        </section>
        <section className="bg-deep text-deep-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24"><div><p className="mb-5 text-xs font-bold uppercase text-deep-foreground/60">Keep building</p><h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">The best work is<br /><span className="text-signal">still ahead.</span></h2></div><Button variant="signal" asChild size="lg" className="h-12 w-fit px-6"><a href="#team">Explore the team <ArrowUpRight /></a></Button></div></section>
      </main>
      <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><span className="font-display font-extrabold">DEV ORBIT<span className="text-signal">.</span></span><span className="text-muted-foreground">{FOUNDER_NAME} · Founder & CEO</span><a href="#top" className="flex items-center gap-2 font-semibold hover:opacity-60">Back to top <ArrowUpRight size={16} /></a></div></footer>

    </div>
  );
}
