import { ArrowUpRight, Download, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { person, siteUrl, profile, facts, stages, thesis, featured, more, skills, strengths, hobbies, type Project } from "@/content";

const wrap = "mx-auto max-w-6xl px-5 md:px-8";
const card = "reveal rounded-3xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-brand/40";

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">{children}</span>;
}

function Heading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function ExtLink({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <Button render={<a href={href} />} nativeButton={false} size="lg" variant={primary ? "default" : "outline"} className="h-10 rounded-full px-4">
      {children}
      <ArrowUpRight />
    </Button>
  );
}

function ProjectCard({ p, wide }: { p: Project; wide?: boolean }) {
  return (
    <article className={`${card} flex flex-col ${wide ? "md:col-span-2" : ""}`}>
      <p className="font-mono text-xs text-muted-foreground">{p.when}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand">{p.role}</p>
      <p className="mt-4 text-muted-foreground">{p.text}</p>
      {p.points && (
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {p.points.map((x) => (
            <li key={x} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              {x}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.links.map((l, i) => <ExtLink key={l.href} href={l.href} primary={i === 0}>{l.label}</ExtLink>)}
      </div>
    </article>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Junior Full-Stack/Backend Entwickler",
  url: siteUrl,
  image: `${siteUrl}/bastian.jpg`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Wien", addressCountry: "AT" },
  alumniOf: { "@type": "EducationalOrganization", name: "HTL Spengergasse" },
  sameAs: [person.github, person.linkedin],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="sticky top-3 z-20 px-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border border-border bg-background/70 py-2 pl-5 pr-2 backdrop-blur-xl">
          <a href="#" className="whitespace-nowrap text-sm font-semibold">{person.name}</a>
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <a href="#projekte" className="rounded-full px-3 py-1.5 hover:bg-muted hover:text-foreground">Projekte</a>
            <a href="#werdegang" className="hidden rounded-full px-3 py-1.5 hover:bg-muted hover:text-foreground sm:block">Werdegang</a>
            <a href="#kenntnisse" className="hidden rounded-full px-3 py-1.5 hover:bg-muted hover:text-foreground sm:block">Kenntnisse</a>
            <a href="#kontakt" className="rounded-full bg-brand px-3.5 py-1.5 font-medium text-brand-foreground hover:opacity-90">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative -mt-14 overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
          <div aria-hidden className="bg-hero absolute inset-0 -z-10" />
          <div className={`${wrap} grid items-center gap-12 md:grid-cols-[1fr_auto]`}>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                Offen für den Berufseinstieg
                <span className="text-border">·</span>
                <MapPin className="size-3.5" /> Wien
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Junior Full-Stack/
                <br />
                <span className="text-gradient">Backend Entwickler.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button render={<a href="/Lebenslauf_Bastian_Seidl.pdf" />} nativeButton={false} size="lg" className="h-10 rounded-full px-5">
                  <Download /> Lebenslauf (PDF)
                </Button>
                <ExtLink href={`mailto:${person.email}`}>E-Mail</ExtLink>
                <ExtLink href={person.github}>GitHub</ExtLink>
                <ExtLink href={person.linkedin}>LinkedIn</ExtLink>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bastian.jpg"
              alt="Porträt von Bastian Seidl"
              width={342}
              height={402}
              className="aspect-[6/7] w-44 rounded-3xl border border-border object-cover shadow-2xl shadow-brand/10 md:w-72"
            />
          </div>
        </section>

        <section className={`${wrap} grid grid-cols-2 gap-3 md:gap-4`} aria-label="Auf einen Blick">
          {facts.map((f) => (
            <div key={f.label} className="reveal rounded-3xl border border-border bg-card p-5 md:p-6">
              <p className="text-4xl font-semibold tracking-tight text-brand md:text-5xl">{f.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.label}</p>
            </div>
          ))}
        </section>

        <section className={`${wrap} py-20 md:py-28`}>
          <Heading id="projekte" eyebrow="Projekte" title="Woran ich gebaut habe" />

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            <article className={`${card} flex flex-col md:col-span-2`}>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Sep 2024 – Jun 2025 · Diplomarbeit mit {thesis.partner}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">{thesis.title}</h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-brand">Projektleiter im Viererteam · Note 1</p>
                  <p className="mt-4 text-muted-foreground">{thesis.what}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{thesis.stack.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mein Teil</p>
                  <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                    {thesis.mine.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><FileText className="size-4" /> {thesis.note}</p>
                </div>
              </div>
            </article>
            {featured.map((p, i) => <ProjectCard key={p.name} p={p} wide={i === featured.length - 1} />)}
          </div>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">Weitere Projekte</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((p) => (
              <li key={p.name}>
                <a href={p.href} className="reveal group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40">
                  <span className="flex items-center justify-between gap-2 font-medium">
                    {p.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">{p.text}</span>
                  <span className="mt-auto pt-4 font-mono text-xs text-muted-foreground">{p.tech}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${wrap} pb-20 md:pb-28`}>
          <Heading id="werdegang" eyebrow="Werdegang" title="Schule, Praktika, Diplomarbeit" />
          <ol className="relative mt-10 space-y-4 border-l border-border pl-6 md:pl-10">
            {stages.map((s) => (
              <li key={s.when} className={`${card} relative`}>
                <span aria-hidden className="absolute -left-[1.95rem] top-9 size-3 rounded-full border-2 border-background bg-brand md:-left-[2.95rem]" />
                <p className="font-mono text-xs text-muted-foreground">{s.when}</p>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                {s.text && <p className="mt-2 text-muted-foreground">{s.text}</p>}
                {s.items && (
                  <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-muted/40">
                    {s.items.map((i) => (
                      <li key={i.when} className="grid gap-1 px-4 py-3 sm:grid-cols-[6rem_1fr] sm:gap-4">
                        <span className="font-mono text-xs text-brand sm:pt-0.5">{i.when}</span>
                        <span className="text-sm text-muted-foreground">{i.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-20 md:pb-28`}>
          <Heading id="kenntnisse" eyebrow="Kenntnisse" title="Womit ich arbeite" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map(([group, items]) => (
              <div key={group} className={card}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brand">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{items.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </div>
            ))}
            <div className={`${card} md:col-span-2 lg:col-span-3 grid gap-6 sm:grid-cols-2`}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brand">Stärken</h3>
                <div className="mt-4 flex flex-wrap gap-2">{strengths.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brand">Abseits der Tastatur</h3>
                <div className="mt-4 flex flex-wrap gap-2">{hobbies.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${wrap} pb-20 md:pb-28`}>
          <div id="kontakt" className="reveal relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center md:py-20">
            <div aria-hidden className="absolute inset-0 -z-0 bg-[radial-gradient(50%_80%_at_50%_120%,color-mix(in_oklch,var(--brand)_25%,transparent),transparent)]" />
            <div className="relative">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Lass uns reden.</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Du suchst jemanden, der Systeme baut und testet? Schreib mir, ich melde mich schnell.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button render={<a href={`mailto:${person.email}`} />} nativeButton={false} size="lg" className="h-11 rounded-full px-6">
                  <Mail /> {person.email}
                </Button>
                <ExtLink href={person.linkedin}>LinkedIn</ExtLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} flex flex-wrap justify-between gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground`}>
        <span>© {new Date().getFullYear()} {person.name}</span>
        <span className="flex gap-4">
          <a href="/impressum/" className="hover:text-foreground">Impressum</a>
          <a href="/impressum/#datenschutz" className="hover:text-foreground">Datenschutz</a>
        </span>
      </footer>
    </>
  );
}
