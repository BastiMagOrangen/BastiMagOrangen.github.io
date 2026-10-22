import Link from "next/link";
import { person } from "@/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz – Bastian Seidl",
  alternates: { canonical: "/impressum/" },
};

function Block({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}

const mail = <a className="underline underline-offset-4" href={`mailto:${person.email}`}>{person.email}</a>;

export default function Impressum() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-brand">← zurück</Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">Impressum</h1>
      <p className="mt-2 font-mono text-xs text-muted-foreground">Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz</p>

      <Block title="Anbieter und Medieninhaber">
        <p className="text-foreground">
          {person.name}
          <br />
          Wien, Österreich
          <br />
          E-Mail: {mail}
        </p>
        <p>
          Grundlegende Richtung: Private Website zur Vorstellung der Person und ihrer Projekte im Rahmen der Jobsuche. Es besteht keine
          gewerbliche Tätigkeit und keine Gewerbeberechtigung. Es gibt keine Kammer- oder Berufsverbandszugehörigkeit und keine
          Umsatzsteuer-Identifikationsnummer.
        </p>
      </Block>

      <Block title="Haftung für Inhalte und Links">
        <p>
          Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehme ich keine
          Gewähr. Diese Seite verlinkt auf externe Websites (z. B. GitHub, LinkedIn und Projektseiten). Auf deren Inhalte habe ich keinen
          Einfluss und übernehme dafür keine Verantwortung. Bei Bekanntwerden von Rechtsverletzungen entferne ich solche Links umgehend.
        </p>
      </Block>

      <Block title="Urheberrecht">
        <p>
          Texte, Bilder und Gestaltung dieser Seite stehen unter dem Urheberrecht von {person.name}. Eine Verwendung ohne meine
          Zustimmung ist nur im Rahmen der gesetzlichen Schranken erlaubt.
        </p>
      </Block>

      <h1 id="datenschutz" className="mt-16 scroll-mt-8 text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-2 font-mono text-xs text-muted-foreground">Informationen nach Art. 13 DSGVO und Datenschutzgesetz (DSG)</p>

      <Block title="Verantwortlicher">
        <p>
          {person.name}, Wien, Österreich, E-Mail: {mail}. Eine Datenschutzbeauftragte oder ein Datenschutzbeauftragter ist nicht
          bestellt.
        </p>
      </Block>

      <Block title="Hosting und Server-Logfiles">
        <p>
          Die Seite ist statisch und wird über GitHub Pages ausgeliefert. Anbieter ist GitHub, Inc. (88 Colin P. Kelly Jr. Street, San
          Francisco, CA 94107, USA) bzw. GitHub B.V. (Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande). Beim Aufruf wird nach
          Angabe von GitHub die IP-Adresse der Besucherinnen und Besucher zu Sicherheitszwecken protokolliert und gespeichert, dazu
          kommen technisch übliche Zugriffsdaten wie Datum, Uhrzeit und angeforderte Datei. Rechtsgrundlage ist mein berechtigtes
          Interesse an einer sicheren und stabilen Bereitstellung der Seite (Art. 6 Abs. 1 lit. f DSGVO). Dabei kann eine Übermittlung
          in die USA stattfinden. GitHub nimmt nach eigener Angabe am EU-US Data Privacy Framework teil und stützt sich außerdem auf die
          Standardvertragsklauseln der EU-Kommission. Mehr dazu in der{" "}
          <a className="underline underline-offset-4" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            Datenschutzerklärung von GitHub
          </a>
          . Auf diese Logfiles habe ich selbst keinen Zugriff.
        </p>
      </Block>

      <Block title="Keine Cookies, kein Tracking, keine Drittinhalte">
        <p>
          Diese Seite setzt keine Cookies und keine vergleichbaren Speichertechnologien, verwendet keine Analyse- oder Werbedienste und
          bindet keine Inhalte von Drittservern ein. Schriften werden mit der Seite ausgeliefert. Eine Einwilligung nach § 165 Abs. 3
          Telekommunikationsgesetz 2021 ist daher nicht erforderlich.
        </p>
      </Block>

      <Block title="Externe Links">
        <p>
          Beim Anklicken eines Links (z. B. zu GitHub, LinkedIn oder dr-seidl.at) verlässt du diese Seite. Ab dann gilt die
          Datenschutzerklärung des jeweiligen Anbieters.
        </p>
      </Block>

      <Block title="Kontaktaufnahme per E-Mail">
        <p>
          Wenn du mir schreibst, verarbeite ich deine E-Mail-Adresse und den Inhalt deiner Nachricht, um dir zu antworten
          (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Ich gebe sie nicht weiter und lösche sie, sobald die Anfrage erledigt ist und keine
          gesetzliche Aufbewahrungspflicht entgegensteht.
        </p>
      </Block>

      <Block title="Deine Rechte">
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          (Art. 15 bis 21 DSGVO). Schreib dafür an {mail}.
        </p>
        <p>
          Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der
          österreichischen Aufsichtsbehörde beschweren: Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,{" "}
          <a className="underline underline-offset-4" href="https://www.dsb.gv.at">www.dsb.gv.at</a>.
        </p>
      </Block>
    </main>
  );
}
