import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person, siteUrl } from "@/content";
import "./globals.css";

const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description =
  "Bastian Seidl, Junior Full-Stack/Backend Entwickler aus Wien. HTL-Absolvent (Informatik), vier Praktika mit Testautomatisierung bei Raiffeisen Software, Projektleiter einer Diplomarbeit.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bastian Seidl – Junior Full-Stack/Backend Entwickler, Wien",
  description,
  alternates: { canonical: "/" },
  verification: { google: "zbgGB3wN_7oBDZbzNRahwfgVE33oKFsI3_fbc-MkMMI" },
  authors: [{ name: person.name, url: siteUrl }],
  openGraph: {
    type: "profile",
    locale: "de_AT",
    siteName: person.name,
    title: "Bastian Seidl – Junior Full-Stack/Backend Entwickler, Wien",
    description,
    url: "/",
    images: [{ url: "/bastian.jpg", width: 342, height: 402, alt: "Porträt von Bastian Seidl" }],
  },
  twitter: { card: "summary", title: "Bastian Seidl – Junior Full-Stack/Backend Entwickler", description, images: ["/bastian.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${body.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
