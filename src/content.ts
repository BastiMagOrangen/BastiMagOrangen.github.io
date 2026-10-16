export const person = {
  name: "Bastian Seidl",
  email: "bastian.seidl@hotmail.com",
  github: "https://github.com/BastiMagOrangen",
  linkedin: "https://www.linkedin.com/in/bastian-seidl",
};

// Assumed GitHub Pages user-site URL; change it when a custom domain is used.
export const siteUrl = "https://bastimagorangen.github.io";

export const stages = [
  {
    when: "2019 – 2025",
    title: "HTL Spengergasse, Wien",
    text: "Informatik mit Reife- und Diplomprüfung. Schwerpunkte: Backend- und Frontend-Entwicklung, Datenbanksysteme, Theoretische Informatik.",
  },
  {
    when: "Sommer 2021 – 2024",
    title: "Raiffeisen Software, vier Praktika in Folge",
    text: "Jeden Sommer wieder im Bereich Software Development (Java). Der Schwerpunkt lag auf Qualität: Tests automatisieren und Fehler finden.",
    points: [
      "Testautomatisierung mit Jenkins",
      "Testskripte und Tests für neu entwickelte Applikationen",
      "Fehlersuche und Bugfixing in aktiv weiterentwickelten Applikationen",
    ],
  },
  {
    when: "2024 / 25",
    title: "Diplomarbeit mit Naos GmbH",
    text: "Im Viererteam als Projektleiter. Details unten.",
  },
];

export const thesis = {
  title: "Implementierung und Transkription von Web-Videocalls",
  partner: "Naos GmbH",
  what: "Eine gebrandete 1:1-Videomeeting-Anwendung: feste Meeting-URLs für Hosts, Warteraum für Gäste, Login über SuperTokens, Aufzeichnung samt Transkription und Zusammenfassung mit OpenAI Whisper und GPT. Gebaut mit AWS Chime, Next.js und Tailwind.",
  mine: [
    "Projektleitung im Team aus vier Personen",
    "Backend-Modell und Services",
    "Serverless-Backend auf AWS Lambda und Aurora Serverless",
    "Eigene Teilarbeit: Untersuchung von Leistungsfähigkeit und Effizienz dieser Architektur für Videomeetings",
  ],
  note: "Der Code liegt in einem privaten Repository.",
};

export type Project = {
  name: string;
  text: string;
  tech: string;
  links: { label: string; href: string }[];
  note?: string;
};

export const contributions: Project[] = [
  {
    name: "TripTales",
    text: "Social-Media-App für Urlaubsbilder, sortiert nach Reise und Tag. Mein Teil war das Backend: Login (auch mit Microsoft), Follower, Benachrichtigungen, Bild-Upload, Docker und Unit-Tests.",
    tech: "ASP.NET · TypeScript",
    links: [{ label: "Repository", href: "https://github.com/DieNullpointer/triptales" }],
    note: "Schulprojekt im Team (Organisation DieNullpointer) · 213 Commits von mir",
  },
  {
    name: "TripTales Redone",
    text: "Überarbeitung des Projekts durch einen Teamkollegen. Ich habe mitgearbeitet an Passwortschutz, JWT, Bild-Upload, Docker mit HTTPS, Tests, Cypress-E2E und der CI-Pipeline.",
    tech: "ASP.NET · TypeScript · Cypress",
    links: [{ label: "Repository", href: "https://github.com/phil-not-funny/triptales-redone" }],
    note: "Repository von phil-not-funny · 65 Commits von mir",
  },
];

export const own: Project[] = [
  {
    name: "Ordination Dr. Seidl",
    text: "Website der Ordination von Dr. Clemens Seidl (Orthopädie und Traumatologie): Werdegang, Leistungen, Ordinationsinfos und Link zur Online-Terminbuchung. Google Maps wird erst nach Cookie-Einwilligung geladen.",
    tech: "Vue · PrimeVue",
    links: [{ label: "Website öffnen", href: "https://dr-seidl.at" }],
    note: "Live im Einsatz",
  },
  {
    name: "Flaggen & Hauptstädte",
    text: "Progressive Web App zum Lernen von Flaggen und Hauptstädten.",
    tech: "TypeScript · PWA",
    links: [
      { label: "App öffnen", href: "https://bastimagorangen.github.io/flaggen-hauptstaedte/" },
      { label: "Repository", href: "https://github.com/BastiMagOrangen/flaggen-hauptstaedte" },
    ],
  },
  {
    name: "CountryBot",
    text: "Discord-Bot, bei dem man zufällig ausgewählte Länder erraten muss.",
    tech: "JavaScript",
    links: [{ label: "Repository", href: "https://github.com/BastiMagOrangen/CountryBot" }],
  },
  {
    name: "PDFMaker",
    text: "Erzeugt PDFs aus einer Markdown-ähnlichen Auszeichnungssprache.",
    tech: "C#",
    links: [{ label: "Repository", href: "https://github.com/BastiMagOrangen/PDFMaker" }],
  },
  {
    name: "Pepper Music",
    text: "MP3-Player für Windows.",
    tech: "C#",
    links: [{ label: "Repository", href: "https://github.com/BastiMagOrangen/Pepper-Music" }],
  },
];

export const skills = [
  ["Sprachen", "Java, C#, JavaScript, TypeScript, SQL"],
  ["Backend", ".NET, ASP.NET, Entity Framework, Node.js, Express.js"],
  ["Frontend", "React, Next.js, Vue.js, HTML, CSS, Tailwind"],
  ["Datenbanken", "MS SQL, MySQL, MongoDB"],
  ["Werkzeuge", "Docker, Git, Jenkins, AWS Lambda"],
] as const;

export const stack = ["AWS Lambda", "Aurora Serverless", "AWS Chime SDK", "Next.js", "Tailwind", "SuperTokens", "OpenAI Whisper", "GPT"];
