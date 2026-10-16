import type { MetadataRoute } from "next";
import { siteUrl } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [`${siteUrl}/`, `${siteUrl}/impressum/`].map((url) => ({ url }));
}
