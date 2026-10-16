import { Button } from "@/components/ui/button";
import { person, siteUrl, stages, thesis, contributions, own, skills, stack, type Project } from "@/content";

const wrap = "mx-auto max-w-3xl px-5 md:px-8";

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${wrap} scroll-mt-16 border-t border-border py-14 md:py-20`}>
      <h2 className="font-mono text-xs uppercase tracking-widest text-trail">{label}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Links({ links }: { links: Project["links"] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l, i) => (
        <Button key={l.href} render={<a href={l.href} />} nativeButton={false} size="sm" variant={i === 0 ? "default" : "outline"}>
          {l.label} ↗
        </Button>
      ))}
    </div>
  );
}

// Featured: role first, then what it is, then proof (link or the reason there is none).
function Featured({ name, tech, role, text, links, note }: { name: string; tech: string; role: string; text: string; links?: Project["links"]; note?: string }) {
  return (
    <li className="py-8 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="font-mono text-xs text-muted-foreground">{tech}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-trail">{role}</p>
      <p className="mt-3 text-muted-foreground">{text}</p>
      <div className="mt-4">{links ? <Links links={links} /> : <p className="text-sm text-muted-foreground">{note}</p>}</div>
    </li>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Junior Full-Stack-Entwickler und QA",
  url: siteUrl,
  image: `${siteUrl}/bastian.jpg`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Wien", addressCountry: "AT" },
  alumniOf: { "@type": "EducationalOrganization", name: "HTL Spengergasse" },
  sameAs: [person.github, person.linkedin],
};

export default function Home() {
  const [triptales] = contributions;
  const [ordination] = own;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between gap-4 py-4`}>
          <a href="#" className="whitespace-nowrap font-semibold">{person.name}</a>
          <nav className="flex gap-4 font-mono text-sm text-muted-foreground sm:gap-5">
            <a href="#projekte" className="hover:text-foreground">Projekte</a>
            <a href="#werdegang" className="hover:text-foreground">Werdegang</a>
            <a href="#kontakt" className="hover:text-foreground">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={`${wrap} flex flex-col-reverse items-start gap-8 pb-16 pt-14 sm:flex-row sm:items-center sm:justify-between md:pt-20`}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-trail">{person.name} · Junior Full-Stack &amp; QA · Wien</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Ich baue Software und sorge dafür, dass sie <span className="underline decoration-ochre decoration-4 underline-offset-4">zuverlässig läuft</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              HTL-Absolvent (Informatik, 2025). Vier Sommer Testautomatisierung bei Raiffeisen Software, danach Projektleiter einer
              Diplomarbeit mit Backend auf AWS. Am liebsten mit .NET, TypeScript und Next.js.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<a href="/Lebenslauf_Bastian_Seidl.pdf" />} nativeButton={false} size="lg">Lebenslauf (PDF)</Button>
              <Button render={<a href={`mailto:${person.email}`} />} nativeButton={false} size="lg" variant="outline">E-Mail schreiben</Button>
              <Button render={<a href={person.github} />} nativeButton={false} size="lg" variant="outline">GitHub</Button>
              <Button render={<a href={person.linkedin} />} nativeButton={false} size="lg" variant="outline">LinkedIn</Button>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bastian.jpg" alt="Porträt von Bastian Seidl" width={342} height={402} className="aspect-[6/7] w-32 rounded-md object-cover sm:w-44" />
        </section>

        <Section id="projekte" label="Ausgewählte Projekte">
          <ul className="divide-y divide-border">
            <Featured
              name={thesis.title}
              tech="AWS · Next.js · Whisper/GPT"
              role={`Diplomarbeit mit ${thesis.partner} · Projektleiter im Viererteam`}
              text={`${thesis.what} Mein Teil: ${thesis.mine.slice(1).join("; ")}.`}
              note={thesis.note}
            />
            <Featured
              name={triptales.name}
              tech={triptales.tech}
              role="Backend im Schulteam · 213 Commits"
              text={triptales.text}
              links={triptales.links}
            />
            <Featured
              name={ordination.name}
              tech={ordination.tech}
              role="Eigenes Projekt · live im Einsatz"
              text={ordination.text}
              links={ordination.links}
            />
          </ul>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">Weitere</h3>
          <ul className="mt-4 divide-y divide-border">
            {[...contributions.slice(1), ...own.slice(1)].map((p) => (
              <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                <a href={p.links[0].href} className="font-medium underline-offset-4 hover:underline">{p.name} ↗</a>
                <span className="text-sm text-muted-foreground">{p.text.split(". ")[0].replace(/\.$/, "")} · {p.tech}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="werdegang" label="Werdegang">
          <ol className="space-y-8">
            {stages.map((s) => (
              <li key={s.title} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="font-mono text-sm text-muted-foreground">{s.when}</p>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground">{s.text}</p>
                  {s.points && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground marker:text-ochre">
                      {s.points.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <dl className="mt-14 space-y-3">
            {skills.map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-mono text-sm text-muted-foreground">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-muted-foreground">Abseits der Tastatur: Pfadfinder, Wandern, Laufen. Diplomarbeit-Bausteine: {stack.join(", ")}.</p>
        </Section>

        <Section id="kontakt" label="Kontakt">
          <p className="text-2xl font-semibold sm:text-3xl">Lass uns reden.</p>
          <a href={`mailto:${person.email}`} className="mt-4 inline-block break-all text-lg text-trail underline underline-offset-4">
            {person.email}
          </a>
        </Section>
      </main>

      <footer className={`${wrap} flex justify-between border-t border-border py-8 font-mono text-xs text-muted-foreground`}>
        <span>© {new Date().getFullYear()} {person.name}</span>
        <span className="flex gap-4">
          <a href="/impressum/" className="hover:text-foreground">Impressum</a>
          <a href="/impressum/#datenschutz" className="hover:text-foreground">Datenschutz</a>
        </span>
      </footer>
    </>
  );
}
