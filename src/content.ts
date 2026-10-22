export const person = {
  name: "Bastian Seidl",
  email: "bastian.seidl@hotmail.com",
  github: "https://github.com/BastiMagOrangen",
  linkedin: "https://www.linkedin.com/in/bastian-seidl",
};

// GitHub Pages user-site URL (also the portfolio link in the CV); change it when a custom domain is used.
export const siteUrl = "https://bastimagorangen.github.io";

export const profile =
  "2025 habe ich die HTL Spengergasse in Informatik abgeschlossen. In vier Praktika bei Raiffeisen Software habe ich vor allem Tests automatisiert und Bugs gesucht. Ich entwickle aber auch selbst: Backends mit ASP.NET Core und Node.js, Frontends mit Next.js und React. Jetzt suche ich einen Job, bei dem ich Systeme entwickle, auf die sich viele Menschen verlassen.";

export const facts = [
  { value: "4", label: "Praktika bei Raiffeisen Software" },
  { value: "1", label: "Note auf Diplomarbeit und Präsentation" },
];

export const stages: { when: string; title: string; text?: string; items?: { when: string; text: string }[] }[] = [
  {
    when: "Sep 2019 – Jun 2025",
    title: "HTL Spengergasse, Wien 5 · Informatik",
    text: "Reife- und Diplomprüfung. Schwerpunkte: Backend- und Frontend-Entwicklung, Datenbanksysteme, Theoretische Informatik.",
  },
  {
    when: "Sommer 2021 – 2024",
    title: "Ferialpraktikant Software Development (Java), Raiffeisen Software GmbH",
    items: [
      { when: "Aug 2021", text: "Testautomatisierung mit Jenkins und Unterstützung der Entwicklung diverser Applikationen." },
      { when: "Aug 2022", text: "Testautomatisierung sowie Fehlersuche und Bugfixing in aktiv weiterentwickelten Applikationen." },
      { when: "Jul 2023", text: "Erstellung von Testscripts für automatisierte Tests und Mitarbeit an der Weiterentwicklung von Applikationen." },
      { when: "Jul 2024", text: "Erstellung von Tests für neu entwickelte Applikationen sowie Fehlersuche und Bugfixing." },
    ],
  },
  {
    when: "Sep 2024 – Jun 2025",
    title: "Diplomarbeit mit Naos GmbH",
    text: "Projektleiter im Viererteam, Note 1 auf Arbeit und Präsentation.",
  },
];

export const thesis = {
  title: "Implementierung und Transkription von Web-Videocalls",
  partner: "Naos GmbH",
  what: "Eine gebrandete 1:1-Videomeeting-Anwendung mit Warteraum, Aufzeichnung, Transkription und Zusammenfassung per OpenAI Whisper und GPT.",
  mine: [
    "Projektleitung im Viererteam",
    "Backend-Modell und Services, serverlos mit AWS Lambda, API Gateway und Aurora Serverless (PostgreSQL)",
    "Wartebereich mit Socket.io",
    "Untersuchung von Leistungsfähigkeit und Effizienz der Architektur, Marktanalyse der Cloudanbieter, Kostenschätzung",
  ],
  stack: ["TypeScript", "Node.js", "AWS Lambda", "API Gateway", "Aurora Serverless", "Chime SDK", "S3", "Socket.io", "SuperTokens", "Whisper/GPT", "Next.js"],
  note: "Der Code liegt in einem privaten Repository.",
};

export type Project = {
  name: string;
  when: string;
  role: string;
  text: string;
  points?: string[];
  tech: string[];
  links: { label: string; href: string }[];
};

export const featured: Project[] = [
  {
    name: "TripTales",
    when: "Sep 2023 – Nov 2024",
    role: "Backend im Schulteam · 213 von rund 550 Commits",
    text: "Social-Media-Plattform für Reisen: Urlaubsfotos und -videos posten, sortiert nach Reise und Tag.",
    points: [
      "REST-API mit ASP.NET Core und Entity Framework Core",
      "Login (auch mit Microsoft), Follower, Benachrichtigungen, Bild-Upload, Unit-Tests",
      "Docker, Images per GitHub Actions in die Container Registry",
    ],
    tech: ["C#", "ASP.NET Core 6", "EF Core", "Next.js 14", "Tailwind", "Docker"],
    links: [{ label: "Repository", href: "https://github.com/DieNullpointer/triptales" }],
  },
  {
    name: "TripTales Redone",
    when: "Mär 2025 – heute",
    role: "Teamprojekt · 65 Commits von mir",
    text: "Komplette Neuentwicklung von TripTales mit aktuellem Stack und mehrsprachiger Oberfläche.",
    points: [
      "Backend auf .NET 8 mit JWT-Authentifizierung und serverseitiger Bildverarbeitung",
      "Frontend mit Next.js 16 und React 19, Formulare mit React Hook Form und Zod",
      "Cypress-E2E-Tests, Docker Compose mit HTTPS, CI-Pipeline",
    ],
    tech: ["ASP.NET Core 8", "JWT", "ImageSharp", "Next.js 16", "shadcn/ui", "next-intl", "Cypress"],
    links: [{ label: "Repository", href: "https://github.com/phil-not-funny/triptales-redone" }],
  },
  {
    name: "Ordination Dr. Seidl",
    when: "2022 – heute",
    role: "Einzelprojekt · live im Einsatz",
    text: "Website der Orthopädie-Ordination von Dr. Clemens Seidl.",
    points: [
      "Leistungen, Werdegang, Online-Terminbuchung",
      "Google Maps wird erst nach Cookie-Einwilligung geladen",
      "Neuaufbau mit Next.js (statischer Export), Deployment per FTP-Skript",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Vue · PrimeVue (Vorgänger)", "Apache"],
    links: [{ label: "Website öffnen", href: "https://dr-seidl.at" }],
  },
];

export const more: { name: string; text: string; tech: string; href: string }[] = [
  { name: "Flaggen & Hauptstädte", text: "Progressive Web App zum Lernen von Flaggen und Hauptstädten.", tech: "TypeScript · PWA", href: "https://bastimagorangen.github.io/flaggen-hauptstaedte/" },
  { name: "CountryBot", text: "Discord-Bot, bei dem man zufällig ausgewählte Länder erraten muss.", tech: "JavaScript", href: "https://github.com/BastiMagOrangen/CountryBot" },
  { name: "PDFMaker", text: "PDF-Generator mit Markdown-ähnlicher Syntax.", tech: "C#", href: "https://github.com/BastiMagOrangen/PDFMaker" },
  { name: "Pepper Music", text: "MP3-Player für Windows.", tech: "C#", href: "https://github.com/BastiMagOrangen/Pepper-Music" },
];

export const skills = [
  ["Programmierung", ["Java", "C#", "JavaScript", "TypeScript", "SQL"]],
  ["Backend", [".NET", "ASP.NET Core", "Entity Framework Core", "Node.js", "Express.js", "Socket.io", "REST", "Swagger"]],
  ["Frontend", ["React", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind", "shadcn/ui"]],
  ["Datenbanken", ["MS SQL", "PostgreSQL", "MySQL", "SQLite", "MongoDB"]],
  ["Cloud", ["AWS Lambda", "API Gateway", "Aurora Serverless", "S3", "Chime SDK"]],
  ["Tools & DevOps", ["Docker", "Docker Compose", "Git", "GitHub Actions", "Jenkins"]],
] as const;

export const strengths = ["Technisches Verständnis", "Strukturierte Fehlersuche", "Kommunikation und Teamarbeit"];
export const hobbies = ["Pfadfinder", "Wandern", "Laufen"];
